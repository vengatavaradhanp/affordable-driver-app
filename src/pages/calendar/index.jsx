import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import DatePicker from "react-datepicker";
import { EventsList, TimeData } from "../../utils/constant";
import LessonPlan from "../../components/lesson-plan/LessonPlanDialog";
import LessonPlanDialog from "../../components/lesson-plan/LessonPlanDialog";

// {
//   id: 1,
//   title: "Meeting",
//   start: "2024-01-01T10:00:00",
//   end: "2024-01-01T12:00:00",
// },

export default function Calendar() {
  const [eventsList, setEventsList] = React.useState(EventsList);

  const lessonPlanDialogRef = React.useRef(null);

  const [modal, setModal] = React.useState({
    isOpen: false,
    mode: "add", // 'add' or 'edit'
    event: {
      id: null,
      title: "",
      startDate: "",
      startTime: "",
      endDate: "",
      endTime: "",
    },
  });

  const handleDateSelect = (selectInfo) => {
    setModal({
      isOpen: true,
      mode: "add",
      event: {
        id: null,
        title: "",
        startDate: selectInfo.startStr.split("T")[0],
        startTime: "",
        endDate: selectInfo.startStr.split("T")[0],
        endTime: "",
      },
    });
  };

  const handleDateClick = (info) => {
    lessonPlanDialogRef.current.dialogHandler();
  };

  const handleEventClick = (info) => {
    const id = info.event._def.publicId;
    const { title, start, end, extendedProps } = info.event;
    const data = {
      id: id,
      title: title,
      description: extendedProps.description,
      start: start,
      end: end,
    };
    lessonPlanDialogRef.current.dialogHandler(data);
  };

  const handleCloseModal = () => {
    setModal({
      isOpen: false,
      mode: "add",
      event: {
        id: null,
        title: "",
        startDate: "",
        startTime: "",
        endDate: "",
        endTime: "",
      },
    });
  };

  const deleteEventById = (id) => {
    setEventsList((prevEvents) =>
      prevEvents.filter((event) => modal.event.id !== id)
    );
  };

  const handleDeleteEvent = () => {
    if (modal.event !== "") {
      const start = `${modal.event.startDate}T${modal.event.startTime}`;
      const end =
        modal.event.endDate && modal.event.endTime
          ? `${modal.event.endDate}T${modal.event.endTime}`
          : start;

      if (modal.mode === "add") {
        // Add a new event
        setEventsList((prevEvents) => [
          ...prevEvents,
          {
            id: Date.now(),
            title:
              modal.event.title.charAt(0).toUpperCase() +
              modal.event.title.slice(1),
            start,
            end,
          },
        ]);
      } else {
        // Update an existing event
        setEventsList((prevEvents) =>
          prevEvents.map((event) =>
            event.id === modal.event.id ? { ...modal.event, start, end } : event
          )
        );

        if (modal.event.id !== "") {
          deleteEventById(modal.event.id);
        }
      }
      handleCloseModal();
    }
  };

  const isTimeDisabled = (time, date) => {
    const dateTime = `${date}T${time}`;
    return eventsList.some(
      (event) =>
        new Date(event.start) <= new Date(dateTime) &&
        new Date(dateTime) < new Date(event.end)
    );
  };

  const handleAddEvents = (data) => {
    const list = [...eventsList];
    list.push({
      title: data.title,
      description: data.description,
      start: data.start,
      end: data.end,
    });
    setEventsList(list);
  };

  return (
    <>
      <div className="container-fluid my-4 custom-calendar">
        <div style={{ margin: "0px 50px" }}>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            buttonText={{
              today: "Today",
              month: "Month",
              week: "Week",
              day: "Day",
              // prev: 'Prev',
              // next: 'Next',
            }}
            initialView="dayGridMonth"
            selectable={true}
            editable={true}
            events={eventsList}
            select={handleDateClick}
            eventClick={handleEventClick}
            height={"90vh"}
            dayHeaderFormat={{ weekday: "long" }}
          />
        </div>
      </div>
      <LessonPlanDialog ref={lessonPlanDialogRef} addEvents={handleAddEvents} />
    </>
  );
}
