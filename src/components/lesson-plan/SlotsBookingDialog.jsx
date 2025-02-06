import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";
import { AvailableSlots } from "../../utils/constant";
import slotBookingService from "../../services/slotBookingService";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setSelectedSlots } from "../../features/slotBookingSlice";

const SlotsBookingDialog = React.forwardRef((props, ref) => {
  const [activeSlotsList, setActiveSlotsList] = React.useState([]);
  const [show, setShow] = React.useState(false);
  const [eventExist, setEventExist] = React.useState(false);
  const [slots, setSlots] = React.useState([]);
  const navigate = useNavigate();
  const [slotList, setSlotList] = React.useState(null);
  const [selectedDate, setSelectedDate] = React.useState(null)
  const dispatch = useDispatch();

  React.useImperativeHandle(ref, () => ({
    dialogHandler: (data, date) => {
      if (data[date]) {
        const list = [];
        data[date].forEach((element) => {
          list.push({
            start_hour: element.start_hour,
            end_hour: element.end_hour,
            date: date,
            active: element.active,
          })
        })
        setEventExist(true);
        setSlots(list);
        setShow(true);
        setSelectedDate(date)
      } else {
        setShow(false);
      }
      
    },
  }));

  const handleClose = () => {
    setShow(false);
    clearFields();
  };

  const clearFields = () => {
    setSlots(AvailableSlots);
  };

  const handleSlotSubmit = (event) => {
    event.preventDefault();
    setShow(false);
    clearFields();
    props.handleSlotSubmit(slots, selectedDate);
  };

  const handleSlotSelect = (index) => {
    // activeSlotsList.length < props.slotLimit -1
    let selectedSlot = [...slots];
    const activeSlot = slots.filter(
      (item) => item.active === true
    );
    if (selectedSlot[index].active === true) {
      selectedSlot[index].active = !selectedSlot[index].active;
    } else {
      if (activeSlot.length < props.slotLimit) {
        selectedSlot[index].active = !selectedSlot[index].active;
      } else {
        toast.warn('Slot limit reached !')
      }
    }
    dispatch(setSelectedSlots({...selectedSlot[index]}))
    setSlots(selectedSlot);
    setActiveSlotsList(activeSlot);

  };

  return (
    <Modal show={show} onHide={handleClose} centered backdrop="static">
      <Modal.Header style={{ justifyContent: "center" }}>
        <Modal.Title>Select your preferred time slot</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* {JSON.stringify(slotList)} */}
        <div
          style={{
            textAlign: "center",
            fontSize: "22px",
            color: "#2c3d50",
            fontWeight: 600,
            color: "#2b9348",
          }}
        >
          You have {props.slotLimit - slots.filter((item) => item.active == true).length} Slots Remaining
        </div>
        <div style={{ padding: "10px 20px" }}>
          {/* <div
            style={{
              paddingBottom: "10px",
              textAlign: "center",
              fontWeight: 600,
              fontSize: "18px",
              color: "#161e28",
              letterSpacing: "1.5px",
            }}
          >
            4 Slots Available
          </div> */}
          <ListGroup as="ol">
            {slots.map((item, index) => (
              <ListGroup.Item
                as="li"
                active={item.active === true}
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
                      class="bi bi-arrow-right"
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
                    <i class="bi bi-check2"></i>
                  </div>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      </Modal.Body>
      <Modal.Footer style={{ justifyContent: "center" }}>
        <>
          <Button
            variant="secondary"
            onClick={handleClose}
            style={{ width: "100px" }}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            type="button"
            onClick={handleSlotSubmit}
            style={{ width: "100px" }}
            disabled={
              slots.filter((item) => item.active === true)
                .length === 0
            }
          >
            Select
          </Button>
        </>
      </Modal.Footer>
    </Modal>
  );
});

export default SlotsBookingDialog;
