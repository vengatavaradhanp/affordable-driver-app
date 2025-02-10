import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { AvailableSlots } from "../../utils/constant";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setSelectedSlots } from "../../features/slotBookingSlice";
 
const SlotsBookingDialog = React.forwardRef((props, ref) => {
  const [slots, setSlots] = React.useState([]);
  const [show, setShow] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState(null);
  const [totalSelectedSlots, setTotalSelectedSlots] = React.useState(0); // Track total selected slots
  const dispatch = useDispatch();
 
  React.useImperativeHandle(ref, () => ({
    dialogHandler: (data, date) => {
      if (data[date]) {
        const list = data[date].map((element) => ({
          start_hour: element.start_hour,
          end_hour: element.end_hour,
          date: date,
          active: element.active,
        }));
        setSlots(list);
        setShow(true);
        setSelectedDate(date);
      } else {
        setShow(false);
      }
    },
  }));
 
  const handleClose = () => {
    setShow(false);
  };
 
  const handleSlotSubmit = (event) => {
    event.preventDefault();
    setShow(false);
    props.handleSlotSubmit(slots, selectedDate);
  };
 
  const handleSlotSelect = (index) => {
    let selectedSlot = [...slots];
    const activeSlotCount = slots.filter((item) => item.active).length;
   
    if (selectedSlot[index].active) {
      selectedSlot[index].active = false;
      setTotalSelectedSlots(totalSelectedSlots - 1);
    } else {
      if (totalSelectedSlots < 3) {
        selectedSlot[index].active = true;
        setTotalSelectedSlots(totalSelectedSlots + 1);
      } else {
        toast.warn("You have reached the maximum limit of 3 slots.");
        return;
      }
    }
 
    dispatch(setSelectedSlots({ ...selectedSlot[index] }));
    setSlots(selectedSlot);
  };
 
  return (
    <Modal show={show} onHide={handleClose} centered backdrop="static">
      <Modal.Header style={{ justifyContent: "center" }}>
        <Modal.Title>Select your preferred time slot</Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
                    <i className="bi bi-arrow-right" style={{ padding: "0px 10px" }}></i>
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