// import React from "react";
// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import timeGridPlugin from "@fullcalendar/timegrid";
// import interactionPlugin from "@fullcalendar/interaction";
// import DatePicker from "react-datepicker";
// import { EventsList, TimeData } from "../../utils/constant";
// import LessonPlan from "../../components/lesson-plan/LessonPlanDialog";
// import LessonPlanDialog from "../../components/lesson-plan/LessonPlanDialog";

// // {
// //   id: 1,
// //   title: "Meeting",
// //   start: "2024-01-01T10:00:00",
// //   end: "2024-01-01T12:00:00",
// // },

// export default function Calendar() {
//   const [eventsList, setEventsList] = React.useState(EventsList);

//   const lessonPlanDialogRef = React.useRef(null);

//   const [modal, setModal] = React.useState({
//     isOpen: false,
//     mode: "add", // 'add' or 'edit'
//     event: {
//       id: null,
//       title: "",
//       startDate: "",
//       startTime: "",
//       endDate: "",
//       endTime: "",
//     },
//   });

//   const handleDateSelect = (selectInfo) => {
//     setModal({
//       isOpen: true,
//       mode: "add",
//       event: {
//         id: null,
//         title: "",
//         startDate: selectInfo.startStr.split("T")[0],
//         startTime: "",
//         endDate: selectInfo.startStr.split("T")[0],
//         endTime: "",
//       },
//     });
//   };

//   const handleDateClick = (info) => {
//     lessonPlanDialogRef.current.dialogHandler();
//   };

//   const handleEventClick = (info) => {
//     const id = info.event._def.publicId;
//     const { title, start, end, extendedProps } = info.event;
//     const data = {
//       id: id,
//       title: title,
//       description: extendedProps.description,
//       start: start,
//       end: end,
//     };
//     lessonPlanDialogRef.current.dialogHandler(data);
//   };

//   const handleCloseModal = () => {
//     setModal({
//       isOpen: false,
//       mode: "add",
//       event: {
//         id: null,
//         title: "",
//         startDate: "",
//         startTime: "",
//         endDate: "",
//         endTime: "",
//       },
//     });
//   };

//   const deleteEventById = (id) => {
//     setEventsList((prevEvents) =>
//       prevEvents.filter((event) => modal.event.id !== id)
//     );
//   };

//   const handleDeleteEvent = () => {
//     if (modal.event !== "") {
//       const start = `${modal.event.startDate}T${modal.event.startTime}`;
//       const end =
//         modal.event.endDate && modal.event.endTime
//           ? `${modal.event.endDate}T${modal.event.endTime}`
//           : start;

//       if (modal.mode === "add") {
//         // Add a new event
//         setEventsList((prevEvents) => [
//           ...prevEvents,
//           {
//             id: Date.now(),
//             title:
//               modal.event.title.charAt(0).toUpperCase() +
//               modal.event.title.slice(1),
//             start,
//             end,
//           },
//         ]);
//       } else {
//         // Update an existing event
//         setEventsList((prevEvents) =>
//           prevEvents.map((event) =>
//             event.id === modal.event.id ? { ...modal.event, start, end } : event
//           )
//         );

//         if (modal.event.id !== "") {
//           deleteEventById(modal.event.id);
//         }
//       }
//       handleCloseModal();
//     }
//   };

//   const isTimeDisabled = (time, date) => {
//     const dateTime = `${date}T${time}`;
//     return eventsList.some(
//       (event) =>
//         new Date(event.start) <= new Date(dateTime) &&
//         new Date(dateTime) < new Date(event.end)
//     );
//   };

//   const handleAddEvents = (data) => {
//     const list = [...eventsList];
//     list.push({
//       title: data.title,
//       description: data.description,
//       start: data.start,
//       end: data.end,
//     });
//     setEventsList(list);
//   };

//   return (
//     <>
//       <div className="container-fluid my-4 custom-calendar">
//         <div style={{ margin: "0px 50px" }}>
//           {JSON.stringify(eventsList)}
//           <FullCalendar
//             plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
//             headerToolbar={{
//               left: "prev,next today",
//               center: "title",
//               right: "dayGridMonth,timeGridWeek,timeGridDay",
//             }}
//             buttonText={{
//               today: "Today",
//               month: "Month",
//               week: "Week",
//               day: "Day",
//               // prev: 'Prev',
//               // next: 'Next',
//             }}
//             initialView="dayGridMonth"
//             selectable={true}
//             editable={true}
//             events={eventsList}
//             select={handleDateClick}
//             eventClick={handleEventClick}
//             height={"90vh"}
//             dayHeaderFormat={{ weekday: "long" }}
            
//           />
//         </div>
//       </div>
//       <LessonPlanDialog ref={lessonPlanDialogRef} addEvents={handleAddEvents} />
//     </>
//   );
// }








import React, { useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import LessonPlanDialog from "../../components/lesson-plan/LessonPlanDialog";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Calendar() {
  // Load events from localStorage or use the default events
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
    {
      id: 5,
      title: "Driving Class 5",
      description: "Advanced Parking Techniques",
      start: "2025-02-07T10:30:00",
      end: "2025-02-07T12:30:00",
    },
    {
      id: 6,
      title: "Driving Class 6",
      description: "Highway Driving",
      start: "2025-02-08T15:00:00",
      end: "2025-02-08T17:00:00",
    },
    {
      id: 7,
      title: "Driving Class 7",
      description: "Night Driving",
      start: "2025-02-09T18:00:00",
      end: "2025-02-09T20:00:00",
    },
    {
      id: 8,
      title: "Driving Class 8",
      description: "Defensive Driving Techniques",
      start: "2025-02-10T08:00:00",
      end: "2025-02-10T10:00:00",
    },
    {
      id: 9,
      title: "Driving Class 9",
      description: "City Driving Practice",
      start: "2025-02-11T11:00:00",
      end: "2025-02-11T13:00:00",
    },
    {
      id: 10,
      title: "Driving Class 10",
      description: "Road Test Simulation",
      start: "2025-02-12T16:00:00",
      end: "2025-02-12T18:00:00",
    },
  ];

  const [eventsList, setEventsList] = React.useState([]);

  // Load events from localStorage on component mount
  useEffect(() => {
    const storedEvents = localStorage.getItem("eventsList");
    if (storedEvents) {
      setEventsList(JSON.parse(storedEvents));
    } else {
      setEventsList(defaultEvents);
      localStorage.setItem("eventsList", JSON.stringify(defaultEvents)); // Save default to localStorage
    }
  }, []);

  const handleEventDrop = (info) => {
    const draggedEventId = info.event.id; // Get the ID of the dragged event
    const newDate = new Date(info.event.start); // Get the new start date after the drop
  
    // Use map to iterate over the events and update the matching event
    const updatedEvents = eventsList.map((event) => {
      if (event.id === draggedEventId) {
        return {
          ...event, // Spread existing event properties
          start: newDate,
          end: newDate,
        };
      }
      return event; // Return the event as-is if it doesn't match
    });
  
    // Update state with the modified events list
    setEventsList(updatedEvents);
  
    // Find the updated event to log its details
    const updatedEvent = updatedEvents.find((event) => event.id === draggedEventId);
    if (updatedEvent) {
      console.log(updatedEvent.description);
      console.log(updatedEvent.id);
      console.log(updatedEvent.title);
    } else {
      console.error("Updated event not found");
    }
  };
  
  // Handle event drag and drop
  // const handleEventDrop = (info) => {
    // console.log(eventsList);
 
    // var date = new Date(info.event.start);
    // date.setDate(date.getDate());
    // const event = [...eventsList];
    // event[0].start = date
    // event[0].end = date;
    // console.log(event[10])

    
    // console.log(event[0].description)
    // console.log(event[0].id)
    // console.log(event[2].title)
    
    
    // const updatedEvent = {
    //   id: info.event.id,
    //   title: info.event.title,
    //   start: info.event.start.toISOString(),
    //   end: info.event.end ? info.event.end.toISOString() : null,
    // };

    // // Update the event in the state
    // const updatedEvents = eventsList.map((event) =>
    //   event.id.toString() === updatedEvent.id.toString() ? updatedEvent : event
    // );
    // setEventsList(event);
    // setEventsList(title);

    // // Save updated events to localStorage
    // localStorage.setItem("eventsList", JSON.stringify(updatedEvents));

    // // Log updated events to check changes
    // console.log("Updated Events:", updatedEvents);

    // // Show a confirmation message
    // toast.success(`Event "${updatedEvent.title}" rescheduled successfully!`);
  // };

  return (
    <div className="container-fluid my-4 custom-calendar">
      <div style={{ margin: "0px 50px" }}>
        {/* {JSON.stringify(eventsList)} */}
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
          eventDrop={handleEventDrop} // Attach eventDrop handler
          height={"90vh"}
        />
      </div>
      <LessonPlanDialog />
    </div>
  );
}




