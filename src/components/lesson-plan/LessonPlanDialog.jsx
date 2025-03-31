import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import DatePicker from 'react-datepicker';
import moment from "moment/moment";
import SlotsBookingDialog from "./SlotsBookingDialog";
import SlotsRescheduleDialog from "./SlotsRescheduleDialog";
// import { Controller } from 'react-hook-form';

const LessonPlanDialog = React.forwardRef((props, ref) => {
  const [show, setShow] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState(null);
  const [activeReschedule, setActiveReschedule] = React.useState(false);
  const [eventsList, setEventsList] = React.useState([]);
  const [eventExist, setEventExist] = React.useState(false);
  const [fields, setFields] = React.useState({
    title: "",
    description: "",
    start: null,
    end: null,
    id: null
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({}); // Track validation errors
  const slotsBookingDialogRef = React.useRef();
  const slotsRescheduleDialogRef = React.useRef();

  React.useImperativeHandle(ref, () => ({
    dialogHandler: (info, list) => {
      if (info) {
        const data = { ...fields };
        // data["id"] = info.id;
        data["title"] = info.title;
        data["description"] = info.description;
        data["start"] = info.start;
        data["end"] = info.end;
        data["slot_id"] = info.extendedProps.slot_id;
        setEventExist(true);
        setFields(data);
        setSelectedDate(info.start);
        setEventsList(list)
      }
      setShow(true);
    },
  }));

  const handleClose = () => {
    setShow(false);
    setActiveReschedule(false);
    clearFields();
    setSelectedDate(null);
  };

  const clearFields = () => {
    setFields({
      title: "",
      description: "",
      start: null,
      end: null,
    });
  };

  const handleAddEvents = (event) => {
    event.preventDefault();
    setShow(false);
    clearFields();
    props.addEvents(fields);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

  };

  const handleFieldChange = (event) => {
    const { name, value, type, checked, files } = event.target;
    const fieldSet = { ...fields };

    fieldSet[name] = value;

    setFields(fieldSet);
  }

  const handleReschedule = () => {
    slotsRescheduleDialogRef.current.dialogHandler(new Date(selectedDate), fields);
    setShow(false);
    setActiveReschedule(false);
  }

  const handleUpdateReschedule = (response) => {
    props.updateReschedule(response)
  }


  return (
    <>
      <Modal show={show} onHide={handleClose} centered backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Lesson Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Form noValidate onSubmit={handleSubmit} >
              <Row className="mb-3">
                <Form.Group as={Col} md="12" className="mb-3">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Title"
                    name="title"
                    value={fields.title}
                    onChange={handleFieldChange}
                    isInvalid={!!errors.title}
                    readOnly={!activeReschedule}

                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.title}
                  </Form.Control.Feedback>
                </Form.Group>

                {activeReschedule ? <Form.Group as={Col} md="12" className="mb-3">
                  <Form.Label>Available Slots</Form.Label>

                  <Row>
                    <Col md={3}>
                      <div style={{ border: '2px solid #2b9348', textAlign: 'center', padding: '7px', borderRadius: '3px', cursor: 'pointer', color: '#000', background: '#fff' }}>10:00 AM</div>
                    </Col>
                    <Col md={3}>
                      <div style={{ border: '2px solid #2b9348', textAlign: 'center', padding: '7px', borderRadius: '3px', cursor: 'pointer', color: '#000', background: '#fff' }}>11:00 AM</div>
                    </Col>
                    <Col md={3}>
                      <div style={{ border: '2px solid #2b9348', textAlign: 'center', padding: '7px', borderRadius: '3px', cursor: 'pointer', color: '#000', background: '#fff' }}>12:00 PM</div>
                    </Col>
                    <Col md={3}>
                      <div style={{ border: '2px solid #2b9348', textAlign: 'center', padding: '7px', borderRadius: '3px', cursor: 'pointer', color: '#000', background: '#fff' }}>13:00 PM</div>
                    </Col>
                  </Row>

                </Form.Group> : <Form.Group as={Col} md="12" className="mb-3">
                  <Form.Label>Slot</Form.Label>

                  <div style={{ background: '#2b9348', textAlign: 'center', padding: '7px', borderRadius: '3px', cursor: 'pointer', color: '#fff', width: "180px" }}>{moment(fields?.start).format("hh:mm A")} - {moment(fields?.end).format("hh:mm A")}</div>

                </Form.Group>}

                <Form.Group as={Col} md="12" className="mb-3">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    rows={4}
                    as="textarea"
                    placeholder="Description"
                    name="description"
                    value={fields.description}
                    onChange={handleFieldChange}
                    isInvalid={!!errors.description}
                    readOnly={!activeReschedule}

                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.description}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

            </Form>
          </div>
        </Modal.Body>
        <Modal.Footer style={{ justifyContent: "center" }}>

          <>
            <Button variant="secondary" onClick={handleClose} style={{ width: "120px" }}>
              Cancel
            </Button>
            {activeReschedule ? <Button variant="primary" type="button" onClick={handleAddEvents} style={{ width: "120px" }}>
              Submit
            </Button> : <Button variant="warning" type="button" onClick={handleReschedule} style={{ width: "120px" }}>
              Reschedule
            </Button>}
          </>

        </Modal.Footer>
      </Modal>
      <SlotsBookingDialog ref={slotsBookingDialogRef} />
      <SlotsRescheduleDialog ref={slotsRescheduleDialogRef} updateReschedule={handleUpdateReschedule} />
    </>
  );
});

export default LessonPlanDialog;
