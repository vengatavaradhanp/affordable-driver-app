import React, { useEffect, useState } from "react";
import { Row, Col, Form, Button, Container, InputGroup } from "react-bootstrap";
import {
  GenderList,
  RoleList,
  StateList,
  SuburbList,
} from "../../../utils/constant";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import LessonPackageService from "../../../services/lesson-package.service";

export default function LessonsForm() {
  const location = useLocation();
  const navigate = useNavigate();

  const [fields, setFields] = useState({
    id: location?.state?.id,
    title: "",
    price: "",
    validity: "",
    minutes: "",
    description: "",
    status: 1,
    image: null
  });

  const [errors, setErrors] = useState({}); // Track validation errors

  useEffect(() => {
    if (location?.state?.id) {
      getUserDetails();
    }
  }, []);

  const getUserDetails = () => {
    LessonPackageService.getLessonsById(location?.state?.id)
      .then((response) => {
        setFields({
          id: response.data.id,
          title: response.data.title,
          amount: response.data.amount,
          expiry_date: response.data.expiry_date,
          minutes: response.data.minutes,
          description: response.data.description,
          image: response.data.image,
          status: 1,
        });
      })
      .catch(() => toast.error("Failed to edit lesson"));
  };

  const handleFieldChange = (event) => {
  
    const { name, value, type, checked } = event.target;
    setFields({
      ...fields,
      [name]: type === "radio" ? (fields.status ? 0 : 1) : value,
    });
    if (value) {
      setErrors({ ...errors, [name]: false });
    }
  };

  const validateFields = () => {
    let newErrors = {};

    if (!fields.title.trim()) newErrors.title = "Title is required.";
    if (!fields.amount.trim()) newErrors.amount = "Amount is required.";
    if (!fields.expiry_date.trim())
      newErrors.expiry_date = "Validity is required.";
    if (!fields.minutes.trim()) newErrors.minutes = "Minutes is required.";
    if (!fields.description.trim())
      newErrors.description = "Description is required.";
    // if (!fields.image.trim()) newErrors.image = "Image is required.";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  const handleSubmit = (event) => {
    debugger;
    event.preventDefault();
    event.stopPropagation();

    if (validateFields()) {
      const payload = { ...fields };
      if (fields.id) {
        LessonPackageService.updateLesson(fields.id, payload)
          .then(() => {
            toast.success("Lessons updated successfully!");
            navigate("/admin/lessons-package");
          })
          .catch((error) => {
            let newErrors = {};
            const errorData = error.response.data;
            Object.entries(errorData.errors).forEach(([key, value]) => {
              newErrors[key] = value[0];
            });
            setErrors(newErrors);
          });
      } else {
        LessonPackageService.createLesson(payload)
          .then(() => {
            toast.success("Lessons created successfully!");
            navigate("/admin/lessons-package");
          })
          .catch((error) => {
            let newErrors = {};
            const errorData = error.response.data;
            Object.entries(errorData.errors).forEach(([key, value]) => {
              newErrors[key] = value[0];
            });
            setErrors(newErrors);
          });
      }
    }
  };

  return (
    <Container fluid>
      <h4>Lessons Form</h4>
      <hr />
      <Form noValidate onSubmit={handleSubmit}>
        <Row className="mb-3">
          {/* First Name */}
          <Form.Group as={Col} md="4" className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Title"
              name="title"
              value={fields.title}
              onChange={handleFieldChange}
              isInvalid={!!errors.title}
            />
            <Form.Control.Feedback type="invalid">
              {errors.title}
            </Form.Control.Feedback>
          </Form.Group>

          {/* Amount */}
          <Form.Group as={Col} md="4" className="mb-3">
            <Form.Label>Amount</Form.Label>
            <Form.Control
              type="text"
              placeholder="Amount"
              name="price"
              value={fields.price}
              onChange={handleFieldChange}
              isInvalid={!!errors.price}
            />
            <Form.Control.Feedback type="invalid">
              {errors.price}
            </Form.Control.Feedback>
          </Form.Group>

          {/* Validity Date */}
          <Form.Group as={Col} md="4" className="mb-3">
            <Form.Label>Validity End Date</Form.Label>
            <Form.Control
              type="text"
              placeholder="Validity End Date"
              name="validity"
              value={fields.validity}
              onChange={handleFieldChange}
              isInvalid={!!errors.validity}
            />
            <Form.Control.Feedback type="invalid">
              {errors.validity}
            </Form.Control.Feedback>
          </Form.Group>

          {/* Duration */}
          <Form.Group as={Col} md="4" className="mb-3">
            <Form.Label>Duration</Form.Label>
            <Form.Control
              type="text"
              placeholder="Duration"
              name="minutes"
              value={fields.minutes}
              onChange={handleFieldChange}
              isInvalid={!!errors.minutes}
            />
            <Form.Control.Feedback type="invalid">
              {errors.minutes}
            </Form.Control.Feedback>
          </Form.Group>

          {/* Status */}
          <Form.Group
            as={Col}
            md="4"
            // controlId="validationCustom02"
            className="mb-3"
          >
            <Form.Label>Status</Form.Label>
            <div className="mt-2">
              <Form.Check
                inline
                label="Active"
                name="status"
                type="radio"
                // id={inline - radio - 1}
                checked={fields.status == 1}
                onChange={handleFieldChange}
              />
              <Form.Check
                inline
                label="Inactive"
                name="status"
                type="radio"
                // id={inline - radio - 2}
                checked={fields.status == 0}
                onChange={handleFieldChange}
              />
            </div>
            {/* ))} */}
          </Form.Group>

          {/* Image */}
          <Form.Group as={Col} md="4" className="mb-3">
            <Form.Label>Duration</Form.Label>
            <Form.Control
              type="file"
              placeholder="Duration"
              name="image"
              value={fields.image}
              onChange={handleFieldChange}
              isInvalid={!!errors.image}
            />
            <Form.Control.Feedback type="invalid">
              {errors.image}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="8" className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              rows={4}
              as="textarea"
              placeholder="Description"
              name="description"
              value={fields.description}
              onChange={handleFieldChange}
              isInvalid={!!errors.description}
            />
            <Form.Control.Feedback type="invalid">
              {errors.description}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <hr />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          <Button
            type="submit"
            className="me-3"
            variant="primary"
            style={{ width: "130px" }}
          >
            {fields.id ? "Update" : "Submit"}
          </Button>
          <Button
            type="button"
            variant="secondary"
            style={{ width: "130px" }}
            onClick={() => navigate(-1)}
          >
            Cancel
          </Button>
        </div>
      </Form>
    </Container>
  );
}
