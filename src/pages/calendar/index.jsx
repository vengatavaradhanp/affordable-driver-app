// import React, { useEffect, useState } from "react";
// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import timeGridPlugin from "@fullcalendar/timegrid";
// import interactionPlugin from "@fullcalendar/interaction";
// import { Modal, Button, Form } from "react-bootstrap";
// import LessonPlanDialog from "../../components/lesson-plan/LessonPlanDialog";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function Calendar() {
//   // Default events
//   const defaultEvents = [
//     {
//       id: 1,
//       title: "Driving Class 1",
//       description: "Introduction to Driving",
//       start: "2025-03-02T10:00:00",
//       end: "2025-03-02T12:00:00",
//     },
//     {
//       id: 2,
//       title: "Driving Class 2",
//       description: "Basic Driving Techniques",
//       start: "2025-03-03T14:00:00",
//       end: "2025-03-03T16:00:00",
//     },
//     {
//       id: 3,
//       title: "Driving Class 3",
//       description: "Traffic Rules & Regulations",
//       start: "2025-03-05T09:00:00",
//       end: "2025-03-05T11:00:00",
//     },
//     {
//       id: 4,
//       title: "Driving Class 4",
//       description: "Emergency Maneuvers",
//       start: "2025-03-06T13:00:00",
//       end: "2025-03-06T15:00:00",
//     },
//   ];

//   const [eventsList, setEventsList] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedEvent, setSelectedEvent] = useState(null);
//   const [isEditing, setIsEditing] = useState(false); // Initially, fields are read-only

//   // Load events from localStorage on mount
//   // useEffect(() => {
//     // const storedEvents = localStorage.getItem("eventsList");
//     // if (storedEvents) {
//     //   setEventsList(JSON.parse(storedEvents));
//     // } else {
//     //   setEventsList(defaultEvents);
//     //   localStorage.setItem("eventsList", JSON.stringify(defaultEvents));
//     // }
//     // getSubscribedSlotList()
//   // }, []);

//   // const getSubscribedSlotList = () => {

//   // }

//   useEffect(() => {
//     getSubscribedSlotList();
//   }, []);

//   // Fetch booked slots from API
//   const getSubscribedSlotList = async () => {
//     try {
//       const params = {}; // Define any necessary parameters
//       const response = await api.get("subscription/gettimeslots", {
//         params: params,
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       // Transform API response to match FullCalendar format
//       const formattedEvents = response.data.map((slot) => ({
//         id: slot.id,
//         title: slot.title || "Driving Lesson",
//         description: slot.description || "No description provided",
//         start: slot.start_time,
//         end: slot.end_time,
//       }));

//       setEventsList(formattedEvents);
//     } catch (error) {
//       console.error("Error fetching slots:", error);
//       toast.error("Failed to load booked slots.");
//     }
//   };

//   // Handle event click to open modal
//   const handleEventClick = (info) => {
//     const eventData = {
//       id: info.event.id,
//       title: info.event.title,
//       description: info.event.extendedProps.description || "",
//       start: info.event.start.toISOString().slice(0, 16),
//       end: info.event.end ? info.event.end.toISOString().slice(0, 16) : "",
//     };
//     setSelectedEvent(eventData);
//     setShowModal(true);
//   };

//   // Handle saving the rescheduled event
//   const handleSaveChanges = () => {
//     if (!selectedEvent) return;

//     const updatedEvents = eventsList.map((event) =>
//       event.id === selectedEvent.id ? selectedEvent : event
//     );

//     setEventsList(updatedEvents);
//     localStorage.setItem("eventsList", JSON.stringify(updatedEvents));
//     setShowModal(false);
//     toast.success(`Event "${selectedEvent.title}" rescheduled successfully!`);
//   };

//   return (
//     <div className="container-fluid my-4 custom-calendar">
//       <div style={{ margin: "0px 50px" }}>
//         <FullCalendar
//           plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
//           headerToolbar={{
//             left: "prev,next today",
//             center: "title",
//             right: "dayGridMonth,timeGridWeek,timeGridDay",
//           }}
//           initialView="dayGridMonth"
//           editable={false}
//           events={eventsList}
//           eventClick={handleEventClick} // Click event to open modal
//           height={"90vh"}
//         />
//       </div>
//       <LessonPlanDialog />

//       {/* Rescheduling Modal */}
//       <Modal show={showModal} onHide={() => setShowModal(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Reschedule Event</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {selectedEvent && (
//             <Form>
//               <Form.Group>
//                 <Form.Label>Title</Form.Label>
//                 <Form.Control
//                   type="text"
//                   value={selectedEvent.title}
//                   readOnly={!isEditing} // Read-only if isEditing is false
//                   onChange={(e) =>
//                     setSelectedEvent({ ...selectedEvent, title: e.target.value })
//                   }
//                 />
//               </Form.Group>
//               <Form.Group>
//                 <Form.Label>Start Date & Time</Form.Label>
//                 <Form.Control
//                   type="datetime-local"
//                   value={selectedEvent.start}
//                   readOnly={!isEditing} // Read-only if isEditing is false
//                   onChange={(e) =>
//                     setSelectedEvent({ ...selectedEvent, start: e.target.value })
//                   }
//                 />
//               </Form.Group>
//               <Form.Group>
//                 <Form.Label>End Date & Time</Form.Label>
//                 <Form.Control
//                   type="datetime-local"
//                   value={selectedEvent.end}
//                   readOnly={!isEditing} // Read-only if isEditing is false
//                   onChange={(e) =>
//                     setSelectedEvent({ ...selectedEvent, end: e.target.value })
//                   }
//                 />
//               </Form.Group>
//               <Form.Group>
//                 <Form.Label>Description</Form.Label>
//                 <Form.Control
//                   as="textarea"
//                   rows={3}
//                   value={selectedEvent.description}
//                   readOnly={!isEditing} // Read-only if isEditing is false
//                   onChange={(e) =>
//                     setSelectedEvent({ ...selectedEvent, description: e.target.value })
//                   }
//                 />
//               </Form.Group>
//             </Form>
//           )}
//         </Modal.Body>
//         <Modal.Footer>
//         <Button variant="secondary" onClick={() => setShowModal(false)}>
//           Cancel
//         </Button>

//         {!isEditing ? (
//           // If NOT editing, show "Rescheduling" button to enable editing
//           <Button variant="warning" onClick={() => setIsEditing(true)}>
//             Rescheduling
//           </Button>
//         ) : (
//           // If editing, show "Save Changes" button
//           <Button variant="primary" onClick={() => { handleSaveChanges(); setIsEditing(false); }}>
//             Save Changes
//           </Button>
//         )}
//       </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }

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

export default function Calendar() {
  const [eventsList, setEventsList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const lessonsDetailRef = useRef(null)
  // Load subscribed slots on component mount
  useEffect(() => {
    getSubscribedSlotList();
  }, []);

  const getSubscribedSlotList = async () => {
    slotBookingService
      .getSubscribedSlotList()
      .then((response) => {
        const data = [];
        response.data.forEach((element) => {
          data.push({
            id: element.slot.id,
            title: element.lessons_package.title,
            date: element.slot_date,
            start: `${element.slot_date} ${element.slot.start_hour}`,
            end: `${element.slot_date} ${element.slot.end_hour}`,
            extendedProps: element.lessons_package
          });
        });
        setEventsList(data);
      })
      .catch((error) => {
        toast.error("Failed to load booked slots.");
      });

    
  };

  // Handle event click to open modal
  const handleEventClick = (info) => {
    const eventData = {
      id: info.event.id,
      title: info.event.title,
      description: info.event.extendedProps.description,
      start: info.event.start,
      end: info.event.end,
    };
    setSelectedEvent(eventData);
    debugger
    lessonsDetailRef.current.dialogHandler(eventData)
    // setShowModal(true);
  };

  // Handle saving the rescheduled event
  const handleSaveChanges = () => {
    if (!selectedEvent) return;

    const updatedEvents = eventsList.map((event) =>
      event.id === selectedEvent.id ? selectedEvent : event
    );

    setEventsList(updatedEvents);
    setShowModal(false);
    toast.success(`Event "${selectedEvent.title}" rescheduled successfully!`);
  };

  return (
    <div className="container-fluid my-4 custom-calendar">
      <div style={{ margin: "0px 50px" }}>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          initialView="dayGridMonth"
          editable={false}
          events={eventsList}
          eventClick={handleEventClick} // Click event to open modal
          height={"90vh"}
        />
      </div>
      <LessonPlanDialog ref={lessonsDetailRef} />

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
          {!isEditing ? (
            <Button variant="warning" onClick={() => setIsEditing(true)}>
              Rescheduling
            </Button>
          ) : (
            <Button
              variant="primary"
              onClick={() => {
                handleSaveChanges();
                setIsEditing(false);
              }}
            >
              Save Changes
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
}
