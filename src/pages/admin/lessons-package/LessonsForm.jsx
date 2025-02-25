import React, { useState } from "react";
import { Row, Col, Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function LessonsForm() {
   const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [state, setState] = useState("");
    const [phone, setPhone] = useState("");
    const [suburb, setSuburb] = useState("");
    const [errors, setErrors] = useState({});
    const [pickUpAddress, setPickUpAddress] = useState("");
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
  
      if (!pickUpAddress) {
        formErrors.pickUpAddress = "pick up address is requried.";
      } else if (!/^\d$/.test(pickUpAddress)) {
        formErrors.pickUpAddress = "pick up address is requried.";
      }
  
      if (!state) formErrors.state = "State is required.";
      if (!suburb) formErrors.suburb = "Suburb is required.";
  
      setErrors(formErrors);
      return Object.keys(formErrors).length === 0;
    };
  
    // Handle input change and validate in real-time
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      switch (name) {
        case "firstName":
          setFirstName(value);
          if (/^[A-Za-z]+$/.test(value)) setErrors((prev) => ({ ...prev, firstName: "" }));
          break;
        case "lastName":
          setLastName(value);
          if (/^[A-Za-z\s.,]+$/.test(value)) setErrors((prev) => ({ ...prev, lastName: "" }));
          break;
        case "email":
          setEmail(value);
          if (/\S+@\S+\.\S+/.test(value)) setErrors((prev) => ({ ...prev, email: "" }));
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
        case "pickUpAddress":
          setPickUpAddress(value);
          if (value) setErrors((prev) => ({ ...prev, state: "" }));
          break;
        case "suburb":
          setSuburb(value);
          if (value) setErrors((prev) => ({ ...prev, suburb: "" }));
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
      });
  
      navigate("/admin/users", { state: { firstName } });
  
      // Optionally reset the form fields
      setFirstName("");
      setLastName("");
      setEmail("");
      setState("");
      setPhone("");
      setSuburb("");
    };
  
    return (
      <Container className="mt-4">
        <h4>Lessons Form</h4>
        <Form onSubmit={handleContinue} style={{ marginTop: "30px" }}>
          <Row>
            <Col lg={4}>
              <Form.Group className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="First name"
                  name="firstName"
                  value={firstName}
                  onChange={handleInputChange}
                />
                {errors.firstName && <div style={{ color: "#dc3545" }}>{errors.firstName}</div>}
              </Form.Group>
            </Col>
  
            <Col lg={4}>
              <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Last name"
                  name="lastName"
                  value={lastName}
                  onChange={handleInputChange}
                />
                {errors.lastName && <div style={{ color: "#dc3545" }}>{errors.lastName}</div>}
              </Form.Group>
            </Col>
  
            <Col lg={4}>
              <Form.Group className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Your email address"
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                />
                {errors.email && <div style={{ color: "#dc3545" }}>{errors.email}</div>}
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
                {errors.phone && <div style={{ color: "#dc3545" }}>{errors.phone}</div>}
              </Form.Group>
            </Col>
  
  
            <Col lg={4}>
              <Form.Group className="mb-3">
                <Form.Label>Pick Up Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Pick Up Address"
                  name="pickupaddress"
                  value={pickUpAddress}
                  onChange={handleInputChange}
                  as="textarea" rows={3}
                />
                {errors.pickUpAddress && <div style={{ color: "#dc3545" }}>{errors.pickUpAddress}</div>}
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
                    Select a Suburb
                  </option>
                  <option value="Hobart, 7000">Hobart, 7000</option>
                  <option value="USA">USA</option>
                  <option value="Africa">Africa</option>
                  <option value="Glebe, 7000">Glebe, 7000</option>
                </Form.Select>
                {errors.suburb && <div style={{ color: "#dc3545" }}>{errors.suburb}</div>}
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
                    Select a State
                  </option>
                  <option value="Tasmania">Tasmania</option>
                  <option value="France">France</option>
                  <option value="Paris">Paris</option>
                  <option value="Other">Other</option>
                </Form.Select>
                {errors.state && <div style={{ color: "#dc3545" }}>{errors.state}</div>}
              </Form.Group>
            </Col>
          </Row>
  
          <div style={{ marginTop: "30px", display: "flex", justifyContent: "center" }}>
            <Button type="submit" className="me-2" variant="primary">
              Submit
            </Button>
            <Button type="button" variant="secondary">
              Cancel
            </Button>
          </div>
        </Form>
      </Container>
    );
}
