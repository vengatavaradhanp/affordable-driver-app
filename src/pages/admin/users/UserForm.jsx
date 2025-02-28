import React, { useState } from "react";
import { Row, Col, Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { StateList, SuburbList } from "../../../utils/constant";

export default function UseForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState("");
  const [phone, setPhone] = useState("");
  const [suburb, setSuburb] = useState("");
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");

  const navigate = useNavigate();

  const validateForm = () => {
    let formErrors = {};

    if (!firstName) {
      formErrors.firstName = "First name is required.";
    } else if (!/^[A-Za-z]+$/.test(firstName)) {
      formErrors.firstName = "First name can only contain letters.";
    }

    if (!lastName) {
      formErrors.lastName = "Last name is required.";
    } else if (!/^[A-Za-z\s.,]+$/.test(lastName)) {
      formErrors.lastName = "Last name can only contain letters.";
    }

    if (!email) {
      formErrors.email = "Email address is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = "Please enter a valid email address.";
    }

    if (!phone) {
      formErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(phone)) {
      formErrors.phone = "Phone number can only contain numbers.";
    }

    if (!addressLine1) {
      formErrors.addressLine1 = "Address line 1 is requried.";
    } else if (!/^\d$/.test(addressLine1)) {
      formErrors.addressLine1 = "Address line 1 is requried.";
    }
    if (!addressLine2) {
      formErrors.addressLine2 = "Address line 2 is requried.";
    } else if (!/^\d$/.test(addressLine2)) {
      formErrors.addressLine1 = "Address line 2 is requried.";
    }

    if (!state) formErrors.state = "State is required.";
    if (!suburb) formErrors.suburb = "Suburb is required.";
    if (!status) formErrors.status = "Status is required.";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  // Handle input change and validate in real-time
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "firstName":
        setFirstName(value);
        if (/^[A-Za-z]+$/.test(value))
          setErrors((prev) => ({ ...prev, firstName: "" }));
        break;
      case "lastName":
        setLastName(value);
        if (/^[A-Za-z\s.,]+$/.test(value))
          setErrors((prev) => ({ ...prev, lastName: "" }));
        break;
      case "email":
        setEmail(value);
        if (/\S+@\S+\.\S+/.test(value))
          setErrors((prev) => ({ ...prev, email: "" }));
        break;
      case "phone":
        setPhone(value);
        if (/^\d{10}$/.test(value)) {
          setErrors((prev) => ({ ...prev, phone: "" }));
        }
        break;
      case "state":
        setState(value);
        if (value) setErrors((prev) => ({ ...prev, state: "" }));
        break;
      case "addressLine1":
        setAddressLine1(value);
        if (value) setErrors((prev) => ({ ...prev, state: "" }));
        break;
      case "addressLine2":
        setAddressLine2(value);
        if (value) setErrors((prev) => ({ ...prev, state: "" }));
        break;
      case "suburb":
        setSuburb(value);
        if (value) setErrors((prev) => ({ ...prev, suburb: "" }));
        break;
      case "status":
        setStatus(value);
        if (value) setErrors((prev) => ({ ...prev, status: "" }));
        break;
      default:
        break;
    }
  };

  const handleContinue = (e) => {
    e.preventDefault(); // Prevent page refresh

    if (!validateForm()) {
      return;
    }

    console.log("Form Data:", {
      firstName,
      lastName,
      email,
      phone,
      suburb,
      state,
      status,
    });

    navigate("/admin/users", { state: { firstName } });
  };

  return (
    <Container className="mt-2" fluid>
      <h4>Users Form</h4>
      <Form onSubmit={handleContinue} style={{ marginTop: "30px" }}>
        <Row>
          <Col lg={4}>
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="First Name"
                name="firstName"
                value={firstName}
                onChange={handleInputChange}
              />
              {errors.firstName && (
                <div style={{ color: "#dc3545", marginTop: "5px" }}>
                  {errors.firstName}
                </div>
              )}
            </Form.Group>
          </Col>

          <Col lg={4}>
            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={lastName}
                onChange={handleInputChange}
              />
              {errors.lastName && (
                <div style={{ color: "#dc3545", marginTop: "5px" }}>
                  {errors.lastName}
                </div>
              )}
            </Form.Group>
          </Col>

          <Col lg={4}>
            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email Address"
                name="email"
                value={email}
                onChange={handleInputChange}
              />
              {errors.email && (
                <div style={{ color: "#dc3545", marginTop: "5px" }}>
                  {errors.email}
                </div>
              )}
            </Form.Group>
          </Col>

          <Col lg={4}>
            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="0400 000 000"
                name="phone"
                value={phone}
                onChange={handleInputChange}
                maxLength="10"
              />
              {errors.phone && (
                <div style={{ color: "#dc3545", marginTop: "5px" }}>
                  {errors.phone}
                </div>
              )}
            </Form.Group>
          </Col>
          <Col lg={4}>
            <Form.Group className="mb-3">
              <Form.Label>Address Line 1</Form.Label>
              <Form.Control
                type="text"
                placeholder="Address Line 1"
                name="addressLine1"
                value={addressLine1}
                onChange={handleInputChange}
              />
              {errors.addressLine1 && (
                <div style={{ color: "#dc3545", marginTop: "5px" }}>
                  {errors.addressLine1}
                </div>
              )}
            </Form.Group>
          </Col>
          <Col lg={4}>
            <Form.Group className="mb-3">
              <Form.Label>Address Line 2</Form.Label>
              <Form.Control
                type="text"
                placeholder="Address Line 2"
                name="addressLine2"
                value={addressLine2}
                onChange={handleInputChange}
              />
              {errors.addressLine2 && (
                <div style={{ color: "#dc3545", marginTop: "5px" }}>
                  {errors.addressLine2}
                </div>
              )}
            </Form.Group>
          </Col>

          <Col lg={4}>
            <Form.Group className="mb-3">
              <Form.Label>State</Form.Label>s
              <Form.Select
                name="state"
                value={state}
                onChange={handleInputChange}
              >
                <option value="" disabled>
                  Select State
                </option>
                {StateList.map((item, index) => (
                  <option key={index} value={item.value}>
                    {item.name}
                  </option>
                ))}
              </Form.Select>
              {errors.state && (
                <div style={{ color: "#dc3545", marginTop: "5px" }}>
                  {errors.state}
                </div>
              )}
            </Form.Group>
          </Col>

          <Col lg={4}>
            <Form.Group className="mb-3">
              <Form.Label>Suburb</Form.Label>
              <Form.Select
                name="suburb"
                value={suburb}
                onChange={handleInputChange}
              >
                <option value="" disabled>
                  Select Suburb
                </option>
                {SuburbList.map((item, index) => (
                  <option key={index} value={item.value}>
                    {item.name}
                  </option>
                ))}
              </Form.Select>
              {errors.suburb && (
                <div style={{ color: "#dc3545", marginTop: "5px" }}>
                  {errors.suburb}
                </div>
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
                  id={`inline-radio-1`}
                />
                <Form.Check
                  inline
                  label="Inactive"
                  name="status"
                  type="radio"
                  id={`inline-radio-2`}
                />
              </div>
              {errors.status && (
                <div style={{ color: "#dc3545", marginTop: "5px" }}>
                  {errors.status}
                </div>
              )}
            </Form.Group>
          </Col>
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
            className="me-3"
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
