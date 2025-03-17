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
import HomeBannersService from "../../../services/home.service"

export default function LessonsForm() {
  const location = useLocation();
  const navigate = useNavigate();

  const [fields, setFields] = useState({
    id: location?.state?.id,
    title: "",
    description: "",
    image: null,
    link: "",
    sort_order: "",
    is_active: "",
    status: 1,
  });

  const [errors, setErrors] = useState({}); // Track validation errors

  useEffect(() => {
    debugger;
    if (location?.state?.id) {
      getUserDetails();
    }
  }, []);

  const getUserDetails = () => {
    HomeBannersService.getHomeBannersById(location?.state?.id)
      .then((response) => {
        setFields({
          id: response.data.id,
          title: response.data.title,
          description: response.data.amount,
          image: response.data.image,
          link: response.data.link,
          sort_order: response.data.sort_order,
          is_active: response.data.is_active,
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
    if (!fields.description.trim()) newErrors.description = "Description is required.";
    if (!fields.link.trim()) newErrors.link = "Link is required.";
    if (!fields.sort_order.trim())
      newErrors.sort_order = "Sort Order is required.";
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
        HomeBannersService.updateHomeBanners(fields.id, payload)
          .then(() => {
            toast.success("Banner updated successfully!");
            navigate("/admin/homebanner");
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
        HomeBannersService.createHomeBanners(payload)
          .then(() => {
            toast.success("Lessons created successfully!");
            navigate("/admin/homebanner");
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
      <h4>Home Banner Form</h4>
      <hr />
      <Form noValidate onSubmit={handleSubmit}>
        <Row className="mb-3">
          {/* First Name */}
          <Form.Group as={Col} md="4" className="mb-3">
            <Form.Label>Title</Form.Label>
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

          {/* Image */}
          <Form.Group as={Col} md="4" className="mb-3">
            <Form.Label>Banner Image Upload</Form.Label>
            <Form.Control
              type="file"
              placeholder="Banner image Upload"
              name="image"
              value={fields.image}
              onChange={handleFieldChange}
              isInvalid={!!errors.image}
            />
            <Form.Control.Feedback type="invalid">
              {errors.image}
            </Form.Control.Feedback>
          </Form.Group>

          {/* Link */}
          <Form.Group as={Col} md="4" className="mb-3">
            <Form.Label>Link Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Link Address"
              name="link"
              value={fields.link}
              onChange={handleFieldChange}
              isInvalid={!!errors.link}
            />
            <Form.Control.Feedback type="invalid">
              {errors.link}
            </Form.Control.Feedback>
          </Form.Group>

          {/* Sort Order */}
          <Form.Group as={Col} md="4" className="mb-3">
            <Form.Label>Sort Order</Form.Label>
            <Form.Control
              type="text"
              placeholder="Sort Order"
              name="sort_order"
              value={fields.sort_order}
              onChange={handleFieldChange}
              isInvalid={!!errors.sort_order}
            />
            <Form.Control.Feedback type="invalid">
              {errors.sort_order}
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

          {/* Description */}
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
