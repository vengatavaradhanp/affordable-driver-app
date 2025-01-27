import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

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
        <Modal.Title>Schedule Lesson</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleAddEvents}>
          <Container fluid>
            <Row>
              <Col md={12}>
                {" "}
                <Form.Group className="mb-3" controlId="title">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Title"
                    name="title"
                    value={fields.title}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
              <Col md={12}>
                {" "}
                <Form.Group className="mb-3" controlId="description">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Optional"
                    as="textarea"
                    rows={4}
                    name="description"
                    value={fields.description}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="startDate">
                  <Form.Label>Start Date</Form.Label>
                  <Form.Control
                    type="datetime-local"
                    placeholder="Start Date"
                    name="start"
                    value={fields.start}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="endDate">
                  <Form.Label>End Date</Form.Label>
                  <Form.Control
                    type="datetime-local"
                    placeholder="End Date"
                    name="end"
                    value={fields.end}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            {/* <Row>
              <Col>
                <Form.Group className="mb-3" controlId="startDate">
                  <Form.Label>Start Date</Form.Label>
                  <Form.Control
                    type="datetime-local"
                    placeholder="Start Date"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="endDate">
                  <Form.Label>End Date</Form.Label>
                  <Form.Control type="datetime-local" placeholder="End Date" />
                </Form.Group>
              </Col>
            </Row> */}
          </Container>
        </Form>
      </Modal.Body>
      <Modal.Footer style={{ justifyContent: "center" }}>
        {!eventExist ? (
          <>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" type="button" onClick={handleAddEvents}>
              Add
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
