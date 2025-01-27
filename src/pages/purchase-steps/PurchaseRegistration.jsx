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
import { useNavigate } from "react-router-dom";

export default function PurchaseRegistration() {
  const navigate = useNavigate();
  const bookingDetails = {
    totalAmount: 300,
    discount: 15,
    finalAmount: 285,
  };

  return (
    <div>
      <div>
        <h1>Learner Registration</h1>
        <p>
          Existing learner? <a href="#login">Log in</a>
        </p>
      </div>

      <div>
        <Row>
          {/* Form Section */}
          <Col xs={12} lg={8}>
            <div
              //   className="p-3 mb-3"
              style={
                {
                  // backgroundColor: "white",
                  // borderRadius: "10px",
                  // boxShadow: "0 0 10px 0 rgba(0,0,0,0.1)",
                }
              }
            >
              <Form>
                {/* <h3 className="my-2">Enter your details</h3> */}
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
                        For instructors to contact on lesson pick-up if needed.
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
          <Col>
            <div
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
              }}
            >
              <div>
                <div
                  className="d-flex"
                  style={{
                    borderBottom: "1px solid #ddd",
                    padding: "15px 20px ",
                  }}
                >
                  <div
                    className="h5 m-0"
                    //   style={{ padding: "15px 20px " }}
                  >
                    Order Summary
                  </div>
                </div>

                <div
                  className="d-flex"
                  style={{
                    borderBottom: "1px solid #ddd",
                    padding: "15px 20px ",
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <i class="bi bi-ticket-perforated"></i> &nbsp; 6 hrs Booking
                    Credit
                  </div>
                  <div style={{ fontWeight: 600 }}>
                    ${bookingDetails.totalAmount.toFixed(2)}
                  </div>
                </div>

                <div
                  className="d-flex"
                  style={{
                    borderBottom: "1px solid #ddd",
                    padding: "15px 20px ",
                  }}
                >
                  <div style={{ flex: 1 }}>Credit Discount</div>
                  <div style={{ fontWeight: 600, color: "#00a326" }}>
                    - ${bookingDetails.discount.toFixed(2)}
                  </div>
                </div>

                <div
                  className="d-flex justify-content-between"
                  style={{
                    padding: "15px 20px ",
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <div className=" fw-bold">Total Payment Due </div>
                    <div
                      className="text-muted mt-2 "
                      style={{ fontSize: "12px" }}
                    >
                      Or 4 payments of ${bookingDetails.finalAmount / 4}
                    </div>
                  </div>
                  <div style={{ fontWeight: 600 }}>
                    <span>${bookingDetails.finalAmount.toFixed(2)}</span>
                  </div>
                </div>
                <div
                  style={{
                    padding: "15px 20px ",
                  }}
                >
                  <Button
                    className=" w-100 justify-content-center"
                    onClick={() => navigate("/bookyourlesson")}
                  >
                    Continue
                    <span className="ms-1">
                      <i class="bi bi-chevron-right"></i>
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
