import React, { useEffect, useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Modal, Button, Form } from "react-bootstrap";
import LessonPlanDialog from "../../components/lesson-plan/LessonPlanDialog";
import { toast } from "react-toastify";
// import slotBookingService from "../../services/slotBookingService"; // Importing the service
import "react-toastify/dist/ReactToastify.css";
import slotBookingService from "../../services/slot-booking-service";

function Calendar() {
  const [eventsList, setEventsList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const lessonsDetailRef = useRef(null);
  const calendarRef = useRef(null);

  // Load subscribed slots on component mount
  useEffect(() => {
    getSubscribedSlotList();
  }, []);


  const getSubscribedSlotList = async () => {
    try {
      const response = await slotBookingService.getSubscribedSlotList();
      const newData = response.data.map((element) => ({
        id: element.slot.id,
        title: element.lessons_package.title,
        date: element.slot_date,
        start: `${element.slot_date} ${element.slot.start_hour}`,
        end: `${element.slot_date} ${element.slot.end_hour}`,
        extendedProps: { ...element.lessons_package, slot_id: element.id }
      }));
 
      setEventsList((prevEvents = []) => [
        ...prevEvents,
        ...newData.filter(({ id }) => !prevEvents.some(event => event.id === id))
      ]);
    } catch (error) {
      toast.error("Failed to load booked slots.");
    }
  };




  // Handle event click to open modal
  const handleEventClick = (info) => {
    const eventData = {
      id: info.event.id,
      title: info.event.title,
      description: info.event.extendedProps.description,
      start: info.event.start,
      end: info.event.end,
      extendedProps: info.event.extendedProps
    };
    setSelectedEvent(eventData);

    lessonsDetailRef.current.dialogHandler(eventData, eventsList)
    // setShowModal(true);
  };

  const handleUpdateReschedule = (response) => {
    getSubscribedSlotList()
  }

  return (
    <div className="container-fluid my-4 custom-calendar">
      <div style={{ margin: "0px 50px" }}>
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          customButtons={{
            customPrev: {
              text: "",
              click: () => {

                const calendarApi = calendarRef.current.getApi();
                calendarApi.prev();

              },
              icon: "bi bi-chevron-left",
            },
            customNext: {
              text: "",
              click: () => {

                const calendarApi = calendarRef.current.getApi();
                calendarApi.next();


              },
              icon: "bi bi-chevron-right",
            },
          }}
          headerToolbar={{
            left: "",
            center: "title",
            right: "customPrev,customNext",
          }}
          buttonText={{
            today: "Today ",
            month: "Month",
            week: "Week",
            day: "Day",
          }}
          initialView="dayGridMonth"
          // editable={false}
          events={eventsList}
          eventClick={handleEventClick}
          height={"90vh"}
          // validRange={new Date()}
          validRange={{
            start: new Date(), // Disables past dates
          }}
        />

      </div>
      <LessonPlanDialog ref={lessonsDetailRef} updateReschedule={handleUpdateReschedule} />

      {/* Rescheduling Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Reschedule Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedEvent && (
            <Form>
              <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  value={selectedEvent.title}
                  readOnly={!isEditing}
                  onChange={(e) =>
                    setSelectedEvent({
                      ...selectedEvent,
                      title: e.target.value,
                    })
                  }
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Start Date & Time</Form.Label>
                <Form.Control
                  type="datetime-local"
                  value={selectedEvent.start}
                  readOnly={!isEditing}
                  onChange={(e) =>
                    setSelectedEvent({
                      ...selectedEvent,
                      start: e.target.value,
                    })
                  }
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>End Date & Time</Form.Label>
                <Form.Control
                  type="datetime-local"
                  value={selectedEvent.end}
                  readOnly={!isEditing}
                  onChange={(e) =>
                    setSelectedEvent({ ...selectedEvent, end: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={selectedEvent.description}
                  readOnly={!isEditing}
                  onChange={(e) =>
                    setSelectedEvent({
                      ...selectedEvent,
                      description: e.target.value,
                    })
                  }
                />
              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>

          <Button variant="warning" onClick={() => setIsEditing(true)}>
            Rescheduling
          </Button>

        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Calendar
