import React from "react";
import { Container } from "react-bootstrap";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import DatePicker from "react-datepicker"; // Import DatePicker
import "react-datepicker/dist/react-datepicker.css"; // Import styles for DatePicker
import "../../App.css";
import SlotsBookingDialog from "../../components/lesson-plan/SlotsBookingDialog";
import { EventsList } from "../../utils/constant";

export default function PurchaseBookingCalendar() {
  const [eventsList, setEventsList] = React.useState([]);

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

  return (
    <>
      <div className="container-fluid my-4 custom-calendar">
        <div style={{ margin: "0px 0px" }}>
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
            height={"100vh"}
            dayHeaderFormat={{ weekday: "long" }}
          />
        </div>
      </div>
      <SlotsBookingDialog
        ref={lessonPlanDialogRef}
        addEvents={handleAddEvents}
      />
    </>
  );
}
