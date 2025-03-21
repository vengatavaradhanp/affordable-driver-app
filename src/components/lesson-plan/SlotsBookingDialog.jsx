// import React, { useEffect } from "react";
// import Modal from "react-bootstrap/Modal";
// import Button from "react-bootstrap/Button";
// import ListGroup from "react-bootstrap/ListGroup";
// import { AvailableSlots } from "../../utils/constant";
// import { toast } from "react-toastify";
// import { useDispatch, useSelector } from "react-redux";
// import { setSelectedSlots } from "../../features/slotBookingSlice";
// import { addSlots } from "../../features/slotSlice";
// import { store } from "../../reducers/store";
// // import api from "./api";
// // import {createSubscription} from "../../services/subscription.service";


// const SlotsBookingDialog = React.forwardRef((props, ref) => {
//   const [slots, setSlots] = React.useState([]);
//   const [show, setShow] = React.useState(false);
//   const [selectedDate, setSelectedDate] = React.useState(null);
//   const [totalSelectedSlots, setTotalSelectedSlots] = React.useState(0); // Track total selected slots
//   const dispatch = useDispatch();
//   const [slotData, setSlotData] = React.useState([]);


//   React.useImperativeHandle(ref, () => ({
//     dialogHandler: (data, date) => {
//       if (data[date]) {
//         const list = data[date].map((element) => ({
//           start_hour: element.start_hour,
//           end_hour: element.end_hour,
//           date: date,
//           active: element.active,
//           id: element.id,
//         }));
//         console.log('list : ',list)
//         setSlots(list);
//         setShow(true);
//         setSelectedDate(date);
//       } else {
//         setShow(false);
//       }
//       console.log("props.slotLimit : ", props.slotLimit);
//     },
//   }));

//   const handleClose = () => {
//     setShow(false);
//   };

//   const handleSlotSubmit = (event) => {
//     event.preventDefault();
//     console.log("DataISaved : ", slotData);
//     setShow(false);
//     console.log("selectedSlots till now : ", slots);
//     props.handleSlotSubmit(slots, selectedDate);
//     addSlotsDetails();
//   };

//   // const handleSlotSubmit = async (event) => {

//   //   event.preventDefault();
//   //   setShow(false);
//   //   console.log("selectedSlots till now : ", slots);
  
//     // Prepare payload
//  /*    const payload = {
//       id: slotStoreData.id, // Sending selected slots
//       date: slotStoreData.date, // Include selected date if needed
//     }; */
  
//     /* try {
//       // Send API request
//       const response = await subscriptionService.createSubscription(slotStoreData);
//       console.log("API Response:", response.data);
  
//       // Call parent function if needed
//       props.handleSlotSubmit(slots, selectedDate);
      
//       // Proceed with any other actions
//       addSlotsDetails();
//     } catch (error) {
//       console.error("Error submitting slots:", error);
//     } */
//   // };
  

//   const handleSlotSelect = (index) => {
//     let selectedSlot = [...slots];
//     setSlotData((prev) => {
//       let newSlotData = [...prev];
    
//       selectedSlot.forEach((item) => {
//         if (item.active) {
//           // Prevent duplicate (same id and same date)
//           const isAlreadyAdded = newSlotData.some(
//             (slot) => slot.id === item.id && slot.date === item.date
//           );
    
//           if (!isAlreadyAdded) {
//             newSlotData.push(item);
//           }
//         }
//       });
    
//       return newSlotData;
//     });



//     const activeSlotCount = slots.filter((item) => item.active).length;

//     if (selectedSlot[index].active) {
//       selectedSlot[index].active = false;
//       setTotalSelectedSlots(totalSelectedSlots - 1);
//     } else {
//       if (totalSelectedSlots < props.slotLimit) {
//         // d=
//         selectedSlot[index].active = true;
//         selectedSlot[index].id = slots[index].id;
//         setTotalSelectedSlots(totalSelectedSlots + 1);
//       } else {
//         toast.warn(
//           `You have reached the maximum limit of ${props.slotLimit} slots.`
//         );
//         return;
//       }
//     }

//     console.log("selectedSlot before : ", selectedSlot);
//     dispatch(setSelectedSlots({ ...selectedSlot[index] }));
//     setSlots(selectedSlot);
//   };



//   const addSlotsDetails = () => {
//     dispatch(addSlots(slots));
//     console.log("Current Redux State:", store.getState());

//   };

//   return (
//     <Modal show={show} onHide={handleClose} centered backdrop="static ">
//       <Modal.Header style={{ justifyContent: "center" }}>
//         <Modal.Title>Select your preferred time slot</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <div
//           style={{
//             textAlign: "center",
//             fontSize: "22px",
//             fontWeight: 600,
//             color: "#2b9348",
//           }}
//         >
//           You have {props.slotLimit - totalSelectedSlots} Slots Remaining
//         </div>
//         <div style={{ padding: "10px 20px" }}>
//           <ListGroup as="ol">
//             {slots.map((item, index) => (
//               <ListGroup.Item
//                 key={index}
//                 as="li"
//                 active={item.active}
//                 onClick={() => handleSlotSelect(index)}
//                 style={{
//                   cursor: "pointer",
//                   border: "1px solid grey",
//                   margin: "5px",
//                   borderRadius: "5px",
//                 }}
//               >
//                 <div style={{ display: "flex" }}>
//                   <div style={{ flex: 1 }}>
//                     <span style={{ fontWeight: 600 }}>Slot {index + 1}</span>
//                     <i
//                       className="bi bi-arrow-right"
//                       style={{ padding: "0px 10px" }}
//                     ></i>
//                     <span>
//                       {item.start_hour} to {item.end_hour}
//                     </span>
//                   </div>
//                   <div
//                     style={{
//                       color: "#fff",
//                       fontSize: "18px",
//                     }}
//                   >
//                     <i className="bi bi-check2"></i>
//                   </div>
//                 </div>
//               </ListGroup.Item>
//             ))}
//           </ListGroup>
//         </div>
//       </Modal.Body>
//       <Modal.Footer style={{ justifyContent: "center" }}>
//         <Button
//           variant="secondary"
//           onClick={handleClose}
//           style={{ width: "100px" }}
//         >
//           Cancel
//         </Button>
//         <Button
//           variant="primary"
//           type="button"
//           onClick={handleSlotSubmit}
//           style={{ width: "100px" }}
//           disabled={totalSelectedSlots === 0}
//         >
//           Select
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   );
// });

// export default SlotsBookingDialog; 


import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import {  Col, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedSlots } from "../../features/slotBookingSlice";
import { addSlots } from "../../features/slotSlice";
import { store } from "../../reducers/store";
import moment from "moment/moment";

const SlotsBookingDialog = React.forwardRef((props, ref) => {
  const [slots, setSlots] = React.useState([]);
  const [show, setShow] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState(null);
  const [totalSelectedSlots, setTotalSelectedSlots] = React.useState(0); 
  const dispatch = useDispatch();
  const [slotData, setSlotData] = React.useState([]);
  const [errors, setErrors] = React.useState({}); 
  const [fields, setFields] = React.useState({
    select_date: "",
  });

  React.useImperativeHandle(ref, () => ({
    dialogHandler: (data, date) => {
      console.log("Received Data:", data);
      console.log("Selected Date:", date);
      
      // const list = data[date]?.map((element) => ({
      //   start_hour: element.start_hour,
      //   end_hour: element.end_hour,
      //   date: date,
      //   active: element.active || false,
      //   id: element.id,
      // }));

      // console.log("Mapped Slots:", list);

      // list?.length > 0 && setSlots([...list]);
      setSelectedDate(date);
      // setTotalSelectedSlots(list?.filter((slot) => slot.active).length);
      setShow(true); // Open modal when slots exist
      setFields({...fields, select_date: date})
    },
  }));

  const handleClose = () => {
    setShow(false);
  };

  const handleSlotSubmit = (event) => {
    event.preventDefault();
    console.log("Selected Slots:", slots);
    props.handleSlotSubmit(slots, selectedDate);
    addSlotsDetails();
    setShow(false);
  };

  const handleSlotSelect = (index) => {
    let selectedSlot = [...slots];

    setSlotData((prev) => {
      let newSlotData = [...prev];

      selectedSlot.forEach((item) => {
        if (item.active) {
          const isAlreadyAdded = newSlotData.some(
            (slot) => slot.id === item.id && slot.date === item.date
          );

          if (!isAlreadyAdded) {
            newSlotData.push(item);
          }
        }
      });

      return newSlotData;
    });

    if (selectedSlot[index].active) {
      selectedSlot[index].active = false;
      setTotalSelectedSlots((prev) => prev - 1);
    } else {
      if (totalSelectedSlots < props.slotLimit) {
        selectedSlot[index].active = true;
        setTotalSelectedSlots((prev) => prev + 1);
      } else {
        toast.warn(`You have reached the maximum limit of ${props.slotLimit} slots.`);
        return;
      }
    }

    dispatch(setSelectedSlots({ ...selectedSlot[index] }));
    setSlots([...selectedSlot]);
  };

  const addSlotsDetails = () => {
    dispatch(addSlots(slots));
    console.log("Current Redux State:", store.getState());
  };

  return (
    <Modal show={show} onHide={handleClose} centered backdrop="static">
      <Modal.Header style={{ justifyContent: "center" }}>
        <Modal.Title>Select your preferred time slot</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
        <Form.Group as={Col} md="12" className="d-flex flex-column mb-3">
              <Form.Label >Select Date</Form.Label>
              <DatePicker
                selected={fields.select_date}
                onChange={(date) =>
                  setFields({
                    ...fields,
                    select_date: moment(date).format("YYYY-MM-DD"),
                  })
                }
                className="form-control"
                dateFormat="yyyy-MM-dd"
                placeholderText="Select Date"
              />
              {errors.select_date && (
                <div className="invalid-feedback d-block">
                  {errors.select_date}
                </div>
              )}
            </Form.Group>
        </div>
        <div
          style={{
            textAlign: "center",
            fontSize: "22px",
            fontWeight: 600,
            color: "#2b9348",
          }}
        >
          You have {props.slotLimit - totalSelectedSlots} Slots Remaining
        </div>
        <div style={{ padding: "10px 20px" }}>
          <ListGroup as="ol">
            {slots.map((item, index) => (
              <ListGroup.Item
                key={index}
                as="li"
                active={item.active}
                onClick={() => handleSlotSelect(index)}
                style={{
                  cursor: "pointer",
                  border: "1px solid grey",
                  margin: "5px",
                  borderRadius: "5px",
                }}
              >
                <div style={{ display: "flex" }}>
                  <div style={{ flex: 1 }}>
                    <span style={{ fontWeight: 600 }}>Slot {index + 1}</span>
                    <i
                      className="bi bi-arrow-right"
                      style={{ padding: "0px 10px" }}
                    ></i>
                    <span>
                      {item.start_hour} to {item.end_hour}
                    </span>
                  </div>
                  <div
                    style={{
                      color: "#fff",
                      fontSize: "18px",
                    }}
                  >
                    <i className="bi bi-check2"></i>
                  </div>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      </Modal.Body>
      <Modal.Footer style={{ justifyContent: "center" }}>
        <Button variant="secondary" onClick={handleClose} style={{ width: "100px" }}>
          Cancel
        </Button>
        <Button
          variant="primary"
          type="button"
          onClick={handleSlotSubmit}
          style={{ width: "100px" }}
          disabled={totalSelectedSlots === 0}
        >
          Select
        </Button>
      </Modal.Footer>
    </Modal>
  );
});

export default SlotsBookingDialog;

