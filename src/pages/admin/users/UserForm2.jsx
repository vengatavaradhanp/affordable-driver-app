import React, { useEffect, useState } from "react";
import { Row, Col, Form, Button, Container, InputGroup } from "react-bootstrap";
import {
  GenderList,
  RoleList,
  StateList,
  SuburbList,
} from "../../../utils/constant";
import { toast } from "react-toastify";
import UserService from "../../../services/user.service";
import { useLocation, useNavigate } from "react-router-dom";

export default function UserForm2() {
  const location = useLocation();
  const navigate = useNavigate();

  const [fields, setFields] = useState({
    id: location?.state?.id,
    fname: "",
    lname: "",
    email: "",
    password: "Test@123",
    phone: "",
    suburbs: "",
    address: "",
    state: "",
    gender: "",
    role: "user",
    status: 1,
  });

  const [errors, setErrors] = useState({}); // Track validation errors

  useEffect(() => {
    if (location?.state?.id) {
      getUserDetails();
    }
  }, []);

  const getUserDetails = () => {
    UserService.getUsersById(location?.state?.id)
      .then((response) => {
        setFields({
          id: response.data.id,
          fname: response.data.fname,
          lname: response.data.lname,
          email: response.data.email,
          gender: response.data.gender || "",
          address: response.data.address,
          phone: response.data.phone,
          suburbs: response.data.suburbs || "",
          role: response.data.role || "",
          state: response.data.state || "",
          status: response.data.status,
        });
      })
      .catch(() => toast.error("Failed to edit user"));
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

    if (!fields.fname.trim()) newErrors.fname = "First name is required.";
    if (!fields.lname.trim()) newErrors.lname = "Last name is required.";
    if (!fields.email.trim()) newErrors.email = "Email is required.";
    if (!fields.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!fields.address.trim()) newErrors.address = "Address is required.";
    if (!fields.gender.trim()) newErrors.gender = "Please select a gender.";
    if (!fields.role.trim()) newErrors.role = "Please select a role.";
    if (!fields.state.trim()) newErrors.state = "Please select a state.";
    if (!fields.suburbs.trim()) newErrors.suburbs = "Please select a suburb.";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (validateFields()) {
      const payload = { ...fields };
      if (fields.id) {
        UserService.updateUser(fields.id, payload)
          .then(() => {
            toast.success("User updated successfully!");
            navigate("/admin/users");
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
        UserService.createUser(payload)
          .then(() => {
            toast.success("User created successfully!");
            navigate("/admin/users");
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
      <h4>Users Form</h4>
      <hr />
      <Form noValidate onSubmit={handleSubmit}>
        <Row className="mb-3">
          {/* First Name */}
          <Form.Group as={Col} md="4" className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="First name"
              name="fname"
              value={fields.fname}
              onChange={handleFieldChange}
              isInvalid={!!errors.fname}
            />
            <Form.Control.Feedback type="invalid">
              {errors.fname}
            </Form.Control.Feedback>
          </Form.Group>

          {/* Last Name */}
          <Form.Group as={Col} md="4" className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Last name"
              name="lname"
              value={fields.lname}
              onChange={handleFieldChange}
              isInvalid={!!errors.lname}
            />
            <Form.Control.Feedback type="invalid">
              {errors.lname}
            </Form.Control.Feedback>
          </Form.Group>

          {/* Gender */}
          <Form.Group as={Col} md="4" className="mb-3">
            <Form.Label>Gender</Form.Label>
            <Form.Select
              name="gender"
              value={fields.gender}
              onChange={handleFieldChange}
              isInvalid={!!errors.gender}
            >
              <option value="">Choose...</option>
              {GenderList.map((item, index) => (
                <option key={index} value={item.value}>
                  {item.name}
                </option>
              ))}
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {errors.gender}
            </Form.Control.Feedback>
          </Form.Group>

          {/* Email */}
          <Form.Group as={Col} md="4" className="mb-3">
            <Form.Label>Email</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text>@</InputGroup.Text>
              <Form.Control
                type="email"
                placeholder="Email"
                name="email"
                value={fields.email}
                onChange={handleFieldChange}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          {/* Phone Number */}
          <Form.Group as={Col} md="4" className="mb-3">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              placeholder="Phone number"
              name="phone"
              value={fields.phone}
              onChange={handleFieldChange}
              isInvalid={!!errors.phone}
              maxLength={10}
            />
            <Form.Control.Feedback type="invalid">
              {errors.phone}
            </Form.Control.Feedback>
          </Form.Group>

          {/* Role */}
          <Form.Group as={Col} md="4" className="mb-3">
            <Form.Label>Role</Form.Label>
            <Form.Select
              name="role"
              value={fields.role}
              onChange={handleFieldChange}
              isInvalid={!!errors.role}
              disabled
            >
              <option value="">Choose</option>
              {RoleList.map((item, index) => (
                <option key={index} value={item.value}>
                  {item.name}
                </option>
              ))}
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {errors.role}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="8" className="mb-3">
            <Form.Label>Address</Form.Label>
            <Form.Control
              rows={4}
              as="textarea"
              placeholder="Address"
              name="address"
              value={fields.address}
              onChange={handleFieldChange}
              isInvalid={!!errors.address}
            />
            <Form.Control.Feedback type="invalid">
              {errors.address}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" className="mb-3">
            <Form.Label>State</Form.Label>
            <Form.Select
              name="state"
              value={fields.state}
              onChange={handleFieldChange}
              isInvalid={!!errors.state}
            >
              <option value="">Choose</option>
              {StateList.map((item, index) => (
                <option key={index} value={item.value}>
                  {item.name}
                </option>
              ))}
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {errors.state}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" className="mb-3">
            <Form.Label>Suburbs</Form.Label>
            <Form.Select
              name="suburbs"
              value={fields.suburbs}
              onChange={handleFieldChange}
              isInvalid={!!errors.suburbs}
            >
              <option value="">Choose</option>
              {SuburbList.map((item, index) => (
                <option key={index} value={item.value}>
                  {item.name}
                </option>
              ))}
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {errors.suburbs}
            </Form.Control.Feedback>
          </Form.Group>

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
        </Row>

        <hr />
        <div style={{ display: "flex", justifyContent: "center", marginTop: '30px' }}>
          <Button
            type="submit"
            className="me-3"
            variant="primary"
            style={{ width: "130px" }}
          >
            {fields.id ? "Update" : "Submit"}
          </Button>
          <Button type="button" variant="secondary" style={{ width: "130px" }} onClick={() => navigate(-1)}>
            Cancel
          </Button>
        </div>
      </Form>
    </Container>
  );
}
