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
import { useLocation, useNavigate } from "react-router-dom";
import PaypalDialog from "../../components/paypal-dialog/PaypalDialog";
import { LoginResponse } from "../../utils/constant";
import { toast } from "react-toastify";

export default function PurchaseRegistration() {
  const loggedin = localStorage.getItem('isLoggedIn')
  const navigate = useNavigate();
  const location = useLocation();
  const bookingDetails = {
    totalAmount: 300,
    discount: 15,
    finalAmount: 285,
  };
  const paypalDialogRef = React.useRef(null);
  const [isLoading, setIsLoading] = React.useState(true);

  const paymentHandler = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const handleContinue = () => {
    if (!LoginResponse.selectedSlot) {
      toast.error("Please select a lesson slot before proceeding.");
      return;
    }
    if (!LoginResponse.userDetails.name || !LoginResponse.userDetails.email) {
      toast.error("Please complete all required fieldsaaa.");
      return;
    }
    console.log("LoginResponse", LoginResponse);
    if(loggedin ){
    console.log("paypalDialogRef.current", paypalDialogRef.current);
    paypalDialogRef.current.dialogHandler({
      is_popular: 1,
      count: "3",
      time_per_lesson: "60",
      title: "An Affordable and Practical Start",
      validity_end: "01/01/2026",
      is_active: true,
    });
    }else{
      toast.error("Please login to continue")
      navigate("/login")
    }

    
    // // Check if lessonPackage and count exist before proceeding
    // if (!LoginResponse.selectedSlot.count) {
    // toast.error("Invalid lesson package details.");
    // return;
    // }

  
    // Proceed to payment if everything is valid

  };
  
  
  // const handleContinue = () => {
  //   // Check if user is logged in
  //   const isLoggedIn = localStorage.getItem("isLoggedIn"); // Store user login state in localStorage
  
  //   if (!LoginResponse.selectedSlot) {
  //     alert("Please select a lesson slot before proceeding.");
  //     return;
  //   }
  //   if (!LoginResponse.userDetails.firstName || !LoginResponse.userDetails.email) {
  //     alert("Please complete all required fields.");
  //     return;
  //   }
  
  //   if (!isLoggedIn) {
  //     alert("You need to log in before proceeding.");
  //     navigate("/login", { state: { from: "/purchase-registration" } }); // Redirect to login page
  //     return;
  //   }
  
  //   // Proceed to payment if logged in
  //   paypalDialogRef.current.dialogHandler({
  //     is_popular: 1,
  //     count: LoginResponse.lessonPackage.count,
  //     time_per_lesson: LoginResponse.lessonPackage.timePerLesson,
  //     title: LoginResponse.lessonPackage.title,
  //     validity_end: "01/01/2026",
  //     is_active: true,
  //   });
  // };

  
  
  return (
    <div>
      {/* <div>
        <h1>Learner Registration</h1>
        <p>
          Existing learner? <a href="#login">Log in</a>
        </p>
      </div> */}
      {/* {JSON.stringify(location)} */}
      <div>
        <Row>
          {/* Form Section */}
          <Col xs={12} lg={8}>
            <div
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
              }}
            >
              <div
                style={{
                  borderBottom: "1px solid #ddd",
                  padding: "15px 20px ",
                }}
              >
                <Form>
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
                          value={LoginResponse.userDetails.address}
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
                          value={LoginResponse.userDetails.name}
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
                          value={LoginResponse.userDetails.lastName}
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
                          value={LoginResponse.userDetails.email}
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
                          // value={location.userDetails.phone}
                          value={LoginResponse.userDetails.phone}
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
                          // value={location.userDetails.password}
                          value={LoginResponse.userDetails.password}
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
                          value={LoginResponse.userDetails.password}
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
                    <i class="bi bi-ticket-perforated"></i> &nbsp;{" "}
                    {location.state.count} hrs Booking Credit
                  </div>

                  <div style={{ fontWeight: 600 }}>
                    ${location.state.count * location.state.time_per_lesson}
                    .00
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
                      Or 4 payments of ${bookingDetails.discount * 4}
                    </div>
                  </div>
                  <div style={{ fontWeight: 600 }}>
                    <span>
                      $
                      {location.state.count * location.state.time_per_lesson -
                        bookingDetails.discount}
                      .00
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    padding: "15px 20px ",
                  }}
                >
                  <Button className="w-100 justify-content-center" onClick={handleContinue}>Continue</Button>
                  {/* <Button
                    className=" w-100 justify-content-center"
                    onClick={() => navigate("/bookyourlesson")}
                    onClick={() => handleContinue()}
                      paypalDialogRef.current.dialogHandler({
                        is_popular: 1,
                        count: "3",
                        time_per_lesson: "60",
                        title: "An Affordable and Practical Start",
                        validity_end: "01/01/2026",
                        is_active: true,
                      })
                    }
                  >
                    Continue
                    <span className="ms-1">
                      <i class="bi bi-chevron-right"></i>
                    </span>
                  </Button> */}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <PaypalDialog ref={paypalDialogRef} paymentHandler={paymentHandler} />
    </div>
  );
}
