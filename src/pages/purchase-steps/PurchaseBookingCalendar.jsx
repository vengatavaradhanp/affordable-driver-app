import React, { useEffect, useRef, useState, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import moment from "moment/moment";
import SlotsBookingDialog from "../../components/lesson-plan/SlotsBookingDialog";
import slotBookingService from "../../services/slot-booking-service";
import "../../App.css";
import { useSelector } from "react-redux";

export default function PurchaseBookingCalendar() {
  const [eventsList, setEventsList] = useState([]);
  const [slotList, setSlotList] = useState({});
  const location = useLocation();
  const slotsBookingDialogRef = useRef(null);
  const slotsSelector = useSelector(state => state.slots);
  const [selectedSlots, setSelectedSlots] = useState({});
  const navigate = useNavigate(); // ✅ Correct way to navigate

  // Function to fetch available slots for the current month
  const fetchAvailableSlots = useCallback(async (year, month) => {
    try {
      const payload = { year, month };
      const data = await slotBookingService.getAvailableMonthlySlots(payload);
      let slots = {};
      Object.keys(data).forEach((element) => {
        const date = [];
        // console.log('data : ',data)
        // console.log("element : ", element);
        let output =  data[element]
        console.log("data[element].slots : ", output.slots);
        let slotsArr = output.slots
        console.log('slotsArr : ',slotsArr)
        Object.keys(slotsArr).forEach((item) => {
          // console.log('item : ',item)
          date.push({
            // date: slotsArr[item].date,
            end_hour: slotsArr[item].end_hour,
            id: slotsArr[item].id,
            start_hour: slotsArr[item].start_hour,
            active: false,
          });
          console.log('item : ',slotsArr[item])
        });

        slots[element] = date;
      });

      console.log('response slots 11111 : ',slots)
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
      // console.log("dayCellInfo : ",dayCellInfo)
      // console.log("slotList : ",slotList)
      const formattedDate = moment(dayCellInfo.date).format("DD");
      // console.log('formattedDate : ',formattedDate)
      console.log('slotList dddd:===================== ',slotList)
      // debugger
      const slots = slotList[formattedDate]
        ? slotList[formattedDate].filter((item) => !item.active)
        : [];

      // spread using slotLIst []
      // add date key in that array and its value from dayCellInfo
      // Reassign to setSlotsList()

        // console.log('slots index 13: ',slotList[13])
      return (
        <div style={{ textAlign: "right", maxHeight: "70px", minHeight: "70px" }}>
          <div>{dayCellInfo.dayNumberText}</div>
          {slots.length > 0 && (
            <div
              style={{
                fontSize: "12px",
                fontWeight: 600,
                color: slots.length < slotsSelector.item ? "#d22f25" : "#2c3e50",
                position: "relative",
                top: "65px",
                whiteSpace: "nowrap",
              }}
            >
              {slots.length} Slot{slots.length > 1 ? "s" : ""} Available
            </div>
          )}
        </div>
      );
    },
    [slotList, slotsSelector] // ✅ Added slotsSelector as dependency
  );

  const handleDateClick = (e) => {
    console.log("Before update - slotList:", slotList);
  
    const selectedDate = moment(e.startStr).format("DD");
  
    if (!slotList[selectedDate]) {
      console.warn(`No slots available for date: ${selectedDate}`);
      return;
    }
  
    // Map slotList into an array and add the date key
    const updatedSlots = slotList[selectedDate].map((slot) => ({
      ...slot,
      date: selectedDate, // ✅ Add date key
    }));
  
    console.log("Updated slots with date:", updatedSlots);
  
    // ✅ Reassign to setSlotList()
    setSlotList((prev) => ({
      ...prev,
      [selectedDate]: updatedSlots,
    }));
  
    // ✅ Open the slot booking modal with updated data
    slotsBookingDialogRef.current.dialogHandler(slotList, selectedDate);
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

  // ✅ FIXED: Use `navigate()` directly, instead of `props.navigate`
  const handleSlotSubmit = (data, date) => {
    const list = { ...slotList };
    list[date] = data;
    setSlotList(list);

    // Store the selected slots count
    const selectedSlotCount = Object.values(list)
      .flat()
      .filter(slot => slot.active).length;

    navigate("/purchase-steps", {
      state: {
        count: location.state?.count || 0,
        amount: location.state?.amount || 0,
        selectedSlots: selectedSlotCount,
        totalSelectedSlots : selectedSlots // ✅ Pass selected slot count
      },
    });
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
              today: "Today ",
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
