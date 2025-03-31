import React, { useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { Col, Container, Form, Row } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
// import { setSelectedSlots } from "../../features/slotBookingSlice";
import { addSlots } from "../../features/slotSlice";
import { store } from "../../reducers/store";
import moment from "moment/moment";
import slotBookingService from "../../services/slot-booking-service";
import subscriptionService from "../../services/subscription.service";

const SlotsPreviewDialog = React.forwardRef((props, ref) => {
    const [slots, setSlots] = React.useState([]);
    const [show, setShow] = React.useState(false);
    const [selectedDate, setSelectedDate] = React.useState(null);
    const dispatch = useDispatch();
    const [fields, setFields] = React.useState({
        select_date: "",
    });
    const selectedLessonSelector = useSelector((state) => state.slotsBooking?.data);
    const [totalSlots, setTotalSlots] = React.useState(0);
    const [selectedSlots, setSelectedSlots] = React.useState([]);

    console.log("Selected Lesson:", selectedLessonSelector);

    useEffect(() => {
        if (selectedLessonSelector?.length > 0) {
            const groupedData = selectedLessonSelector.reduce((acc, item) => {
                if (!acc[item.date]) {
                    acc[item.date] = [];
                }
                acc[item.date].push(item);
                return acc;
            }, {});

            console.log(groupedData);
            setSelectedSlots(groupedData)
        }

    }, [selectedLessonSelector]);

    React.useImperativeHandle(ref, () => ({
        dialogHandler: (date, fields) => {

            setShow(true)

        },
    }));


    const handleClose = () => {
        setShow(false);
    };

    const handleConfirm = (event) => {
        event.preventDefault();
        props.handleNext();
        setShow(false)
        // const payload = {
        //     id: selectedSlots.id,
        //     slot_date: moment(selectedDate).format("YYYY-MM-DD")
        // }

        // subscriptionService.rescheduledTimeSlot(fields.slot_id, payload).then((response) => {
        //     setShow(false)
        //     toast.success("Rescheduled successfully !")
        //     props.updateReschedule(response)
        // })
        //     .catch((error) => {
        //         debugger
        //         console.error(error)
        //     })

    };


    return (
        <Modal show={show} onHide={handleClose} centered backdrop="static">
            <Modal.Header style={{ justifyContent: "center" }}>
                <Modal.Title>Selected Time Slots</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <div style={{ maxHeight: '300px', overflowY: 'scroll' }}>
                    {
                        Object.entries(selectedSlots).map(([key, value], index) => <>
                            <Container fluid key={index}>
                                <Row>
                                    <Col md={12} style={{ padding: '5px' }}>
                                        <div style={{ fontWeight: 600 }}>
                                            {moment(key).format("MMMM DD, YYYY")}
                                        </div>
                                    </Col>

                                </Row>

                                <Row  >
                                    {
                                        value.map((item) => <Col key={item.id} style={{ padding: '5px' }} md={3} ><div style={{ border: '1px solid #2b9348', color: '#2b9348', textAlign: 'center', padding: '7px', borderRadius: '3px', cursor: 'pointer', fontSize: '14px' }}>{item.start_hour?.slice(0, -3)} - {item.end_hour?.slice(0, -3)} </div></Col>)
                                    }

                                </Row>

                                <hr />
                            </Container>
                        </>)
                    }

                </div>
            </Modal.Body>
            <Modal.Footer style={{ justifyContent: "center" }}>
                <Button variant="secondary" onClick={handleClose} style={{ width: "100px" }}>
                    Cancel
                </Button>
                <Button
                    variant="primary"
                    type="button"
                    onClick={handleConfirm}
                    style={{ width: "100px" }}
                >
                    Confirm
                </Button>
            </Modal.Footer>
        </Modal>
    );
});

export default SlotsPreviewDialog;

