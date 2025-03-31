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
import { Col, Row } from "react-bootstrap";

export default function PurchaseBookingCalendar() {
  const [eventsList, setEventsList] = useState([]);
  const [activeMonth, setActiveMonth] = useState({
    month: moment().month() + 1,
    year: moment().year(),
  });
  const [activeMonthString, setActiveMonthString] = useState(moment().format("MMMM YYYY"));
  const [slotList, setSlotList] = useState({});
  const location = useLocation();
  const slotsBookingDialogRef = useRef(null);
  const slotsSelector = useSelector(state => state.slots);
  const [selectedSlots, setSelectedSlots] = useState({});
  const navigate = useNavigate(); // ✅ Correct way to navigate
  const calendarRef = useRef(null);


  useEffect(() => {
    getAvailableSlots();
  }, [activeMonth]);

  const getAvailableSlots = async () => {
    // debugger
    try {
      const payload = { year: activeMonth.year, month: activeMonth.month };
      const data = await slotBookingService.getAvailableMonthlySlots(payload);
      let slots = {};
      Object.keys(data).forEach((element) => {
        const date = [];
        let output = data[element];
        let slotsArr = output.slots
        Object.keys(slotsArr).forEach((item) => {
          date.push({
            end_hour: slotsArr[item].end_hour,
            id: slotsArr[item].id,
            start_hour: slotsArr[item].start_hour,
            active: false,
          });
        });
        slots[element] = date;
      }
      );
      setSlotList(slots);
    } catch (error) {
      console.error("Error fetching available slots", error);
    }
  }



  const renderDayCellContent = (dayCellInfo) => {
    const formattedDate = moment(dayCellInfo.date).format("DD");
    const formattedMonth = moment(dayCellInfo.date).format("MM");
    const slots = slotList[formattedDate]
      ? slotList[formattedDate].filter((item) => !item.active)
      : [];
    return (
      <div >
        <div style={{ position: 'relative' }}>{formattedDate}</div>
        {slots.length > 0 && activeMonth.month == formattedMonth && (
          <>
            <div
              style={{
                fontSize: "12px",
                fontWeight: 500,
                position: 'absolute',
                top: '100%',
                right: '5px',
                whiteSpace: 'nowrap',
                background: '#2b9348',
                color: '#fff',
                padding: '2px 15px',
                borderRadius: '5px',
              }}
            >
              Available Slots &nbsp; &bull; &nbsp;
              {slots.length}
            </div>

          </>
        )}
      </div>
    );
  };

  const handleDateClick = (event) => {
    const activeDate = moment(event.start).format("DD");
    const slotsList = []
    slotList[activeDate].forEach((slot) => {
      slotsList.push({
        id: slot.id,
        start_hour: slot.start_hour,
        end_hour: slot.end_hour,
        active: slot.active,
        date: event.start
      });
    });
    slotsBookingDialogRef.current.dialogHandler(slotsList, event.start, "schedule");
  };

  const handleSlotSubmit = (data, date) => {
    const list = { ...slotList };
    list[date] = data;
    setSlotList(list);

    const selectedSlotCount = Object.values(list)
      .flat()
      .filter(slot => slot.active).length;

    navigate("/purchase", {
      state: {
        count: location.state?.count || 0,
        amount: location.state?.amount || 0,
        selectedSlots: selectedSlotCount,
        totalSelectedSlots: selectedSlots
      },
    });
  };

  return (
    <>
      <div className="container-fluid my-2 custom-calendar">
        <div style={{ margin: "0px 0px" }}>

          <FullCalendar
            ref={calendarRef}
            height="100vh"
            customButtons={{
              customPrev: {
                text: "",
                click: () => {

                  const calendarApi = calendarRef.current.getApi();
                  calendarApi.prev();

                  const currentStart = calendarApi.view.currentStart;
                  const year = currentStart.getFullYear();
                  const month = currentStart.getMonth() + 1;

                  setActiveMonth({ year, month });
                  setActiveMonthString(moment(currentStart).format("MMMM YYYY"));

                  // getAvailableSlots();
                },
                icon: "bi bi-chevron-left",
              },
              customNext: {
                text: "",
                click: () => {

                  const calendarApi = calendarRef.current.getApi();
                  calendarApi.next();

                  const currentStart = calendarApi.view.currentStart;
                  const year = currentStart.getFullYear();
                  const month = currentStart.getMonth() + 1;

                  setActiveMonth({ year, month });
                  setActiveMonthString(moment(currentStart).format("MMMM YYYY"));

                  // getAvailableSlots();
                },
                icon: "bi bi-chevron-right",
              },
            }}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
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
            // eventChange={handleEventClick}
            initialView="dayGridMonth"
            selectable
            editable
            events={eventsList}
            select={(e) => handleDateClick(e)}
            // eventClick={(e) => handleEventClick(e)}
            dayHeaderFormat={{ weekday: "long" }}
            dayCellContent={renderDayCellContent}
            // datesSet={handleDatesSet}
            validRange={{
              start: new Date(), // Disables past dates
            }}
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
