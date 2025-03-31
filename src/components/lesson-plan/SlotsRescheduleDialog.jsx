import React, { useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { Col, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
// import { setSelectedSlots } from "../../features/slotBookingSlice";
import { addSlots } from "../../features/slotSlice";
import { store } from "../../reducers/store";
import moment from "moment/moment";
import { selectedLesson } from "../../features/selectedLessonSlice";
import { slotBooking } from "../../features/slotBookingSlice";
import slotBookingService from "../../services/slot-booking-service";
import subscriptionService from "../../services/subscription.service";

const SlotsRescheduleDialog = React.forwardRef((props, ref) => {
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
    const selectedLessonSelector = useSelector((state) => state.selectedLesson);
    const [totalSlots, setTotalSlots] = React.useState(0);
    const [selectedSlots, setSelectedSlots] = React.useState({});

    console.log("Selected Lesson:", selectedLessonSelector);

    useEffect(() => {
        if (selectedLessonSelector) {
            setTotalSlots(selectedLessonSelector.data.count);
        }
    }, [selectedLessonSelector]);

    React.useImperativeHandle(ref, () => ({
        dialogHandler: (date, fields) => {
            setSelectedDate(date);
            setShow(true)
            setFields({ ...fields, select_date: date })
            getAvailableSlots(date);
        },
    }));

    const getAvailableSlots = (date) => {
        const formattedDate = moment(date).format("DD")
        const payload = {
            date: moment(date).format("YYYY-MM-DD"),
        }
        slotBookingService.getAvailableMonthlySlots(payload)
            .then((response) => {
                const data = [];
                response[formattedDate]?.slots.forEach((element) => {
                    data.push({
                        id: element.id,
                        start_hour: element.start_hour,
                        end_hour: element.end_hour,
                        active: false
                    })
                })
                setSlots(data)
            })
            .catch((error) => {
                console.error(error)
            })

        // setSlots(data);
    }

    const handleClose = () => {
        setShow(false);
    };

    const handleRescheduleSubmit = (event) => {
        event.preventDefault();
        
        const payload = {
            id: selectedSlots.id,
            slot_date: moment(selectedDate).format("YYYY-MM-DD")
        }
 
        subscriptionService.rescheduledTimeSlot(fields.slot_id, payload).then((response) => {
            setShow(false)
            toast.success("Rescheduled successfully !")
            props.updateReschedule(response)
        })
            .catch((error) => {
                debugger
                console.error(error)
            })

    };

    const handleSlotSelect = (index) => {
        let selectedSlot = [...slots];

        if (selectedSlot[index].active) {
            const updatedSlot = selectedSlot.filter((item) => {
                item.active = false;
                return item;
            })
            updatedSlot[index].active = true;
            setSlots(updatedSlot);


        } else {
            const updatedSlot = selectedSlot.map((item) => {
                return {
                    ...item,
                    active: false
                }
            })
            updatedSlot[index].active = true;
            setSlots(updatedSlot);
        }

        setSelectedSlots(slots[index])
        debugger
    };

    return (
        <Modal show={show} onHide={handleClose} centered backdrop="static">
            <Modal.Header style={{ justifyContent: "center" }}>
                <Modal.Title>Select your preferred time slot</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div style={{ margin: '0px 20px' }}>
                    <Form.Group as={Col} md="12" className="d-flex flex-column mb-3">
                        <Form.Label >Select Date</Form.Label>
                        <DatePicker
                            selected={fields.select_date}
                            onChange={(date) => {
                                setFields({
                                    ...fields,
                                    select_date: moment(date).format("YYYY-MM-DD"),
                                })
                                setSelectedDate(date)
                                getAvailableSlots(date)
                            }
                            }
                            className="form-control"
                            dateFormat="yyyy-MM-dd"
                            placeholderText="Select Date"
                            minDate={new Date()}
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
                    Available Slots List
                </div>
                <div className="my-2" style={{ padding: "10px 20px", maxHeight: '300px', overflowY: 'auto' }}>
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
                    onClick={handleRescheduleSubmit}
                    style={{ width: "100px" }}
                    disabled={!selectedSlots.id}
                >
                    Select
                </Button>
            </Modal.Footer>
        </Modal>
    );
});

export default SlotsRescheduleDialog;

