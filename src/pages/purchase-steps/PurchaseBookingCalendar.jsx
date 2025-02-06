import React, { useEffect, useRef, useState, useCallback } from "react";
import { useLocation } from "react-router-dom";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import moment from "moment/moment";
import SlotsBookingDialog from "../../components/lesson-plan/SlotsBookingDialog";
import slotBookingService from "../../services/slotBookingService";
import "../../App.css";
import { useSelector } from "react-redux";

export default function PurchaseBookingCalendar(props) {
  const [eventsList, setEventsList] = useState([]);
  const [slotList, setSlotList] = useState({});
  const location = useLocation();
  const slotsBookingDialogRef = useRef(null);
  const slotsSelector = useSelector(state => state.slots);

  console.log('####', slotsSelector)

  // Function to fetch available slots for the current month
  const fetchAvailableSlots = useCallback(async (year, month) => {
    try {
      const payload = { year, month };
      const data = await slotBookingService.getAvailableMonthlySlots(payload);
      let slots = {}
      Object.keys(data).forEach((element) => {
        const date = []
        data[element].forEach((item) => {
          date.push({
            date: item.date,
            end_hour: item.end_hour,
            id: item.id,
            start_hour: item.start_hour,
            active: false
          })

        })
        slots[element] = date
      })
      setSlotList(slots);
    } catch (error) {
      console.error("Error fetching available slots", error);
    }
  }, []);

  // Call fetchAvailableSlots initially
  useEffect(() => {
    const currentMonth = moment().month() + 1;
    const currentYear = moment().year();
    fetchAvailableSlots(currentYear, currentMonth);
  }, [fetchAvailableSlots]);

  // Handle the datesSet event when navigating between months
  const handleDatesSet = (dateInfo) => {
    const { currentStart } = dateInfo.view;
    const year = currentStart.getFullYear();
    const month = currentStart.getMonth(); // Get the month number (0-11)
    fetchAvailableSlots(year, month + 1);
  };

  // Custom render function for day cells
  const renderDayCellContent = useCallback(
    (dayCellInfo) => {
      const formattedDate = moment(dayCellInfo.date).format("YYYY-MM-DD");
      const slots = slotList[formattedDate] ? slotList[formattedDate].filter((item) => !item.active) : []
      console.log('@#@#', slotList[formattedDate])
      return (
        <div style={{ textAlign: "right", maxHeight: "70px", minHeight: "70px" }}>
          <div>{dayCellInfo.dayNumberText}</div>
          {slots.length > 0 && (
            <div
              style={{
                fontSize: "12px",
                fontWeight: 600,
                color: slots.length < 3 ? "#d22f25" : "#2c3e50",
                position: "relative",
                top: "65px",
                whiteSpace: 'nowrap'
              }}
            >
              {slots.length} Slot{slots.length > 1 ? "s" : ""} Available
            </div>
          )}
        </div>
      );
    },
    [slotList]
  );

  const handleDateClick = (e) => {
    slotsBookingDialogRef.current.dialogHandler(slotList, e.startStr);
  };

  const handleEventClick = (info) => {
    const { title, start, end, extendedProps } = info.event;
    slotsBookingDialogRef.current.dialogHandler({
      id: info.event.id,
      title,
      description: extendedProps.description,
      start,
      end,
    });
  };

  const handleSlotSubmit = (data, date) => {
    const list = { ...slotList };
    list[date] = data;
    setSlotList(list)
    // props.handleNext();
  };

  return (
    <>
      <div className="container-fluid my-4 custom-calendar">
        <div style={{ margin: "0px 0px" }}>
          <FullCalendar
            height="100vh"
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
            }}
            initialView="dayGridMonth"
            selectable
            editable
            events={eventsList}
            select={(e) => handleDateClick(e)}
            eventClick={(e) => handleEventClick(e)}
            dayHeaderFormat={{ weekday: "long" }}
            dayCellContent={renderDayCellContent}
            datesSet={handleDatesSet}
          />
        </div>
      </div>
      <SlotsBookingDialog
        ref={slotsBookingDialogRef}
        handleSlotSubmit={handleSlotSubmit}
        slotLimit={location.state?.count}
        slotList={slotList}
      />
    </>
  );
}
