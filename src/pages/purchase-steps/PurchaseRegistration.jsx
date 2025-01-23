import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  Stack,
} from "react-bootstrap";

export default function PurchaseRegistration() {
  const bookingDetails = {
    totalAmount: 300,
    discount: 15,
    finalAmount: 285,
  };

  return (
    <Container fluid>
      <div style={{ backgroundColor: "#f3f4f6" }}>
        <Container className="py-3">
          <div>
            <h1>Learner Registration</h1>
            <p>
              Existing learner? <a href="#login">Log in</a>
            </p>
          </div>
        </Container>
        <Container>
          <Row className="g-3">
            {/* Form Section */}
            <Col xs={12} lg={8}>
              <div
                className="p-3 mb-3"
                style={{
                  backgroundColor: "white",
                  borderRadius: "10px",
                  boxShadow: "0 0 10px 0 rgba(0,0,0,0.1)",
                }}
              >
                <Form>
                  <h3 className="my-2">Enter your details</h3>
                  <hr />
                  <Form.Group>
                    <Form.Label>Who are you registering for?</Form.Label>
                    <Form.Check
                      type="radio"
                      label="Myself"
                      name="registerFor"
                      id="registerMyself"
                      defaultChecked
                    />
                    <Form.Check
                      type="radio"
                      label="Someone else (e.g. child, partner, grandchild, other)"
                      name="registerFor"
                      id="registerSomeoneElse"
                    />
                  </Form.Group>

                  <h5 className="mt-4">Please enter your pick-up details</h5>
                  <Row>
                    <Col xs={12}>
                      <Form.Group className="mb-3">
                        <Form.Label>Pick-up address</Form.Label>
                        <Form.Control
                          style={{ borderRadius: "10px" }}
                          type="text"
                          placeholder="Enter location"
                        />
                      </Form.Group>
                    </Col>
                    <Col xs={12} md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Suburb</Form.Label>
                        <Form.Select style={{ borderRadius: "10px" }}>
                          <option value="Hobart, 7000">Hobart, 7000</option>
                          <option value="Glebe, 7000">Glebe, 7000</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col xs={12} md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>State</Form.Label>
                        <Form.Select style={{ borderRadius: "10px" }}>
                          <option value="Tasmania">Tasmania</option>
                          <option value="Other">Other</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>

                  <h5 className="mt-4">Please provide your personal details</h5>
                  <Row>
                    <Col xs={12} md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="First name"
                          style={{ borderRadius: "10px" }}
                        />
                      </Form.Group>
                    </Col>
                    <Col xs={12} md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Last name"
                          style={{ borderRadius: "10px" }}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Your email address"
                          style={{ borderRadius: "10px" }}
                        />
                        <Form.Text className="text-muted">
                          We use your email to send lesson confirmation details.
                        </Form.Text>
                      </Form.Group>
                    </Col>
                    <Col xs={12} md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Phone number</Form.Label>
                        <Form.Control
                          type="tel"
                          placeholder="0400 000 000"
                          style={{ borderRadius: "10px" }}
                        />
                        <Form.Text className="text-muted">
                          For instructors to contact on lesson pick-up if
                          needed.
                        </Form.Text>
                      </Form.Group>
                    </Col>
                  </Row>

                  <h5 className="mt-4">
                    Choose a password for your learning dashboard
                  </h5>
                  <Row>
                    <Col xs={12} md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Enter password"
                          style={{ borderRadius: "10px" }}
                        />
                      </Form.Group>
                    </Col>
                    <Col xs={12} md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Password confirmation</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Confirm password"
                          style={{ borderRadius: "10px" }}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="my-3">
                    <Form.Check
                      type="checkbox"
                      label="I agree to receive occasional marketing communications and offers from EzLicence."
                    />
                    <Form.Check
                      type="checkbox"
                      label="I agree to the Learner Driver Terms & Conditions"
                    />
                  </Form.Group>
                </Form>
              </div>
            </Col>

            {/* Order Summary Section */}
            <Col xs={12} lg={4}>
              <div
                className="p-4"
                style={{
                  backgroundColor: "white",
                  borderRadius: "10px",
                  boxShadow: "0 0 10px 0 rgba(0,0,0,0.1)",
                }}
              >
                <h3>Order Summary</h3>
                <hr />
                <Stack>
                  <div className="d-flex justify-content-between">
                    <span>
                      <i class="bi bi-ticket-perforated"></i>
                    </span>
                    <span style={{ position: "relative", right: "80px" }}>
                      6 hrs Booking Credit
                    </span>
                    <span>${bookingDetails.totalAmount}</span>
                  </div>
                  <div className="d-flex justify-content-between mt-3">
                    <span>
                      Credit Discount{" "}
                      <span className="badge bg-light text-dark">5% OFF</span>
                    </span>
                    <span className="text-success">
                      - ${bookingDetails.discount}
                    </span>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between fw-bold">
                    <span>Total Payment Due</span>
                    <span>${bookingDetails.finalAmount}</span>
                  </div>
                  <div className="text-muted mt-3" style={{ fontSize: "12px" }}>
                    Or 4 payments of ${bookingDetails.finalAmount / 4}
                  </div>
                  <Button
                    className="mt-4 w-100"
                    style={{ borderRadius: "10px" }}
                  >
                    Continue to Payment
                    <span>
                      <i class="bi bi-chevron-right"></i>
                    </span>
                  </Button>
                  <div className="d-flex justify-content-center mt-2">
                    <span>
                      <i class="bi bi-ticket-perforated"></i>
                      <a
                        style={{ position: "relative", left: "10px" }}
                        href="/"
                      >
                        I have a referal code
                      </a>
                    </span>
                  </div>
                </Stack>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Container>
  );
}
