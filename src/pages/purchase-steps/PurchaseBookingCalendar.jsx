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
import { useLocation } from "react-router-dom";
import slotBookingService from "../../services/slotBookingService";

export default function PurchaseBookingCalendar(props) {
  const [eventsList, setEventsList] = React.useState([]);
  const location = useLocation();

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

  React.useEffect(() => {
    const fetchAvailableSlots = async () => {
      try {
        const payload = {
          year: 2025,
          month: 1,
        };
        const data = await slotBookingService.getAvailableMonthlySlots(payload);
        // setSlotList(data);
      } catch (error) {
        console.error("Error fetching available slots", error);
      }
    };

    fetchAvailableSlots();
  }, []);

  const handleAddEvents = (data) => {
    // const list = [...eventsList];
    // list.push({
    //   title: data.title,
    //   description: data.description,
    //   start: data.start,
    //   end: data.end,
    // });
    // setEventsList(list);
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

  // Custom render function for day cells
  const renderDayCellContent = (dayCellInfo, q) => {
    console.log(dayCellInfo);
    console.log(q);
    return (
      <div style={{ textAlign: "right" }}>
        <div>{dayCellInfo.dayNumberText}</div> {/* Default date number */}
        <div
          style={{
            fontSize: "14px",
            position: "relative",
            top: "70px",
            fontSize: "12px",
            right: "5px",
            fontWeight: 900,
            color: "rgb(228 84 78)",
          }}
        >
          {Math.floor(Math.random() * 10)} Slots Available
        </div>{" "}
      </div>
    );
  };

  const handleSlotSubmit = () => {
    props.handleNext();
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
            dayHeaderFormat={{ weekday: "long" }}
            dayCellContent={renderDayCellContent}
          />
        </div>
      </div>
      <SlotsBookingDialog
        ref={lessonPlanDialogRef}
        handleSlotSubmit={handleSlotSubmit}
        slotLimit={location.state?.count}
      />
    </>
  );
}
