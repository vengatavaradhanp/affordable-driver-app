import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import DatePicker from 'react-datepicker';
// import { Controller } from 'react-hook-form';

const LessonPlanDialog = React.forwardRef((props, ref) => {
  const [show, setShow] = React.useState(false);
  const [eventExist, setEventExist] = React.useState(false);
  const [fields, setFields] = React.useState({
    title: "",
    description: "",
    start: null,
    end: null,
  });
  const navigate = useNavigate();

  React.useImperativeHandle(ref, () => ({
    dialogHandler: (info) => {
      if (info) {
        const data = { ...fields };
        data["id"] = info.id;
        data["title"] = info.title;
        data["description"] = info.description;
        data["start"] = new Date(info.start).toISOString();
        data["end"] = info.end;
        debugger;
        setEventExist(true);
        setFields(data);
      }
      setShow(true);
    },
  }));

  const handleClose = () => {
    setShow(false);
    clearFields();
  };

  const clearFields = () => {
    setFields({
      title: "",
      description: "",
      start: null,
      end: null,
    });
  };

  const handleInputChange = (event) => {
    const data = { ...fields };
    data[event.target.name] = event.target.value;
    setFields(data);
  };

  const handleAddEvents = (event) => {
    event.preventDefault();
    setShow(false);
    clearFields();
    props.addEvents(fields);
  };

  return (
    <Modal show={show} onHide={handleClose} centered backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Lesson Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
    <div>
      <Form>
        <Row>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
            type="text"
            placeholder="Title"
            name="title"
            />
            
          </Form.Group>
          <Form.Group>
            <Form.Label>Start Date</Form.Label>
            <Form.Control
            type="number"
            placeholder="Start date"
            name="start date"
            />
            
          </Form.Group>
          <Form.Group controlId="startDate">
              <Form.Label>Start Date</Form.Label>
              <Controller
                name="startDate"
                // control={}
                rules={{ required: "Start Date is required" }}
                render={({ field }) => (
                  <DatePicker
                    // selected={startDate}
                    onChange={(date) => {
                     
                      field.onChange(date);
                    }}
                    dateFormat="MM/dd/yyyy"
                    className="form-control"
                  />
                )}
              />
              
            </Form.Group>

        </Row>

      </Form>
    </div>
      </Modal.Body>
      <Modal.Footer style={{ justifyContent: "center" }}>
        {!eventExist ? (
          <>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" type="button" onClick={handleAddEvents}>
              Submit
            </Button>
          </>
        ) : (
          <Button variant="danger" type="button" onClick={handleAddEvents}>
            Delete Event
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
});

export default LessonPlanDialog;
