import React, { useState } from "react";
import { Row, Col, Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function LessonsForm() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [validity, setValidity] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});

  // New states for image upload
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
 
  const navigate = useNavigate();

  const validateForm = () => {
    let formErrors = {};

    if (!title) {
      formErrors.title = "Title is required.";
    } else if (!/^[A-Za-z]+$/.test(title)) {
      formErrors.title = "Title can only contain letters.";
    }

    if (!price) {
      formErrors.price = "Price is required.";
    } else if (!/^[A-Za-z\s.,]+$/.test(price)) {
      formErrors.price = "Price can only contain letters.";
    }

    if (!validity) {
      formErrors.validity = "Validity is required.";
    } else if (!/\S+@\S+\.\S+/.test(validity)) {
      formErrors.validity = "Please enter a valid validity.";
    }

    if (!duration) {
      formErrors.duration = "Duration is required.";
    } else if (!/^\d+$/.test(duration)) {
      formErrors.duration = "Duration can only contain numbers.";
    }

    if (!description) {
      formErrors.description = "Description is required.";
    }

    // Optionally add validation for image field if needed
    // e.g., if (!image) { formErrors.image = "Image is required."; }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  // Handle input change and validate in real-time
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "title":
        setTitle(value);
        if (/^[A-Za-z]+$/.test(value))
          setErrors((prev) => ({ ...prev, title: "" }));
        break;
      case "price":
        setPrice(value);
        if (/^[A-Za-z\s.,]+$/.test(value))
          setErrors((prev) => ({ ...prev, price: "" }));
        break;
      case "validity":
        setValidity(value);
        if (/\S+@\S+\.\S+/.test(value))
          setErrors((prev) => ({ ...prev, validity: "" }));
        break;
      case "duration":
        setDuration(value);
        if (/^\d+$/.test(value)) {
          setErrors((prev) => ({ ...prev, duration: "" }));
        }
        break;
      case "description":
        setDescription(value);
        if (value) setErrors((prev) => ({ ...prev, description: "" }));
        break;
      default:
        break;
    }
  };

  // Handle image file selection and preview
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleContinue = (e) => {
    e.preventDefault(); // Prevent page refresh

   

    console.log("Form Data:", {
      title,
      price,
      validity,
      duration,
      description,
      status,
      image,
    });

    navigate("/admin/users", { state: { title } });

    // Optionally reset the form fields
    setTitle("");
    setPrice("");
    setValidity("");
    setDuration("");
    setDescription("");
    setStatus("");
    setImage(null);
    setImagePreview(null);
  };

  return (
    <Container fluid className="mt-4">
      <h4>Lessons Form</h4>
      <Form onSubmit={handleContinue} style={{ marginTop: "30px" }}>
        <Row>
          <Col lg={4}>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Title"
                name="title"
                value={title}
                onChange={handleInputChange}
              />
              {errors.title && (
                <div style={{ color: "#dc3545" }}>{errors.title}</div>
              )}
            </Form.Group>
          </Col>

          <Col lg={4}>
            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                placeholder="Price"
                name="price"
                value={price}
                onChange={handleInputChange}
              />
              {errors.price && (
                <div style={{ color: "#dc3545" }}>{errors.price}</div>
              )}
            </Form.Group>
          </Col>

          <Col lg={4}>
            <Form.Group className="mb-3">
              <Form.Label>Validity</Form.Label>
              <Form.Control
                type="text"
                placeholder="Validity"
                name="validity"
                value={validity}
                onChange={handleInputChange}
              />
              {errors.validity && (
                <div style={{ color: "#dc3545" }}>{errors.validity}</div>
              )}
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col lg={4}>
            <Form.Group className="mb-3">
              <Form.Label>Duration</Form.Label>
              <Form.Control
                type="number"
                placeholder="Duration"
                name="duration"
                value={duration}
                onChange={handleInputChange}
              />
              {errors.duration && (
                <div style={{ color: "#dc3545" }}>{errors.duration}</div>
              )}
            </Form.Group>
          </Col>

          <Col lg={4}>
            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label>
              <div className="mt-1">
                <Form.Check
                  inline
                  label="Active"
                  name="status"
                  type="radio"
                  id="inline-radio-1"
                  onChange={() => setStatus("Active")}
                />
                <Form.Check
                  inline
                  label="Inactive"
                  name="status"
                  type="radio"
                  id="inline-radio-2"
                  onChange={() => setStatus("Inactive")}
                />
              </div>
              {errors.status && (
                <div style={{ color: "#dc3545", marginTop: "5px" }}>
                  {errors.status}
                </div>
              )}
            </Form.Group>
          </Col>

          <Col lg={4}>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Description"
                name="description"
                value={description}
                onChange={handleInputChange}
                as="textarea"
                rows={3}
              />
              {errors.description && (
                <div style={{ color: "#dc3545" }}>{errors.description}</div>
              )}
            </Form.Group>
          </Col>
        </Row>

        {/* New Row for Image Upload */}
        <Row>
          <Col lg={4}>
            <Form.Group className="mb-3">
              <Form.Label>Image Upload</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                name="image"
                onChange={handleImageUpload}
              />
              {/* Optionally show validation errors for image if needed */}
              {errors.image && (
                <div style={{ color: "#dc3545" }}>{errors.image}</div>
              )}
            </Form.Group>
          </Col>
          {imagePreview && (
            <Col lg={4}>
              <Form.Group className="mb-3">
                <Form.Label>Preview</Form.Label>
                <div>
                  <img
                    src={imagePreview}
                    alt="Preview"
                    style={{ maxWidth: "200px" }}
                  />
                </div>
              </Form.Group>
            </Col>
          )}
        </Row>

        <div
          style={{
            marginTop: "30px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            type="submit"
            className="me-2"
            variant="primary"
            style={{ width: "100px" }}
          >
            Submit
          </Button>
          <Button type="button" variant="secondary" style={{ width: "100px" }}>
            Cancel
          </Button>
        </div>
      </Form>
    </Container>
  );
}
