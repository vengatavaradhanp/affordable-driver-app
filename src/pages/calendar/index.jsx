import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Modal, Button, Form } from "react-bootstrap";
import LessonPlanDialog from "../../components/lesson-plan/LessonPlanDialog";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Calendar() {
  // Default events
  const defaultEvents = [
    {
      id: 1,
      title: "Driving Class 1",
      description: "Introduction to Driving",
      start: "2025-02-02T10:00:00",
      end: "2025-02-02T12:00:00",
    },
    {
      id: 2,
      title: "Driving Class 2",
      description: "Basic Driving Techniques",
      start: "2025-02-03T14:00:00",
      end: "2025-02-03T16:00:00",
    },
    {
      id: 3,
      title: "Driving Class 3",
      description: "Traffic Rules & Regulations",
      start: "2025-02-05T09:00:00",
      end: "2025-02-05T11:00:00",
    },
    {
      id: 4,
      title: "Driving Class 4",
      description: "Emergency Maneuvers",
      start: "2025-02-06T13:00:00",
      end: "2025-02-06T15:00:00",
    },
  ];

  const [eventsList, setEventsList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isEditing, setIsEditing] = useState(false); // Initially, fields are read-only


  // Load events from localStorage on mount
  useEffect(() => {
    const storedEvents = localStorage.getItem("eventsList");
    if (storedEvents) {
      setEventsList(JSON.parse(storedEvents));
    } else {
      setEventsList(defaultEvents);
      localStorage.setItem("eventsList", JSON.stringify(defaultEvents));
    }
  }, []);

  // Handle event click to open modal
  const handleEventClick = (info) => {
    const eventData = {
      id: info.event.id,
      title: info.event.title,
      description: info.event.extendedProps.description || "",
      start: info.event.start.toISOString().slice(0, 16),
      end: info.event.end ? info.event.end.toISOString().slice(0, 16) : "",
    };
    setSelectedEvent(eventData);
    setShowModal(true);
  };

  // Handle saving the rescheduled event
  const handleSaveChanges = () => {
    if (!selectedEvent) return;

    const updatedEvents = eventsList.map((event) =>
      event.id === selectedEvent.id ? selectedEvent : event
    );

    setEventsList(updatedEvents);
    localStorage.setItem("eventsList", JSON.stringify(updatedEvents));
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
          editable={true}
          events={eventsList}
          eventClick={handleEventClick} // Click event to open modal
          height={"90vh"}
        />
      </div>
      <LessonPlanDialog />

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
                  readOnly={!isEditing} // Read-only if isEditing is false
                  onChange={(e) =>
                    setSelectedEvent({ ...selectedEvent, title: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Start Date & Time</Form.Label>
                <Form.Control
                  type="datetime-local"
                  value={selectedEvent.start}
                  readOnly={!isEditing} // Read-only if isEditing is false
                  onChange={(e) =>
                    setSelectedEvent({ ...selectedEvent, start: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>End Date & Time</Form.Label>
                <Form.Control
                  type="datetime-local"
                  value={selectedEvent.end}
                  readOnly={!isEditing} // Read-only if isEditing is false
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
                  readOnly={!isEditing} // Read-only if isEditing is false
                  onChange={(e) =>
                    setSelectedEvent({ ...selectedEvent, description: e.target.value })
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
          // If NOT editing, show "Rescheduling" button to enable editing
          <Button variant="warning" onClick={() => setIsEditing(true)}>
            Rescheduling
          </Button>
        ) : (
          // If editing, show "Save Changes" button
          <Button variant="primary" onClick={() => { handleSaveChanges(); setIsEditing(false); }}>
            Save Changes
          </Button>
        )}
      </Modal.Footer>
      </Modal>
    </div>
  );
}
