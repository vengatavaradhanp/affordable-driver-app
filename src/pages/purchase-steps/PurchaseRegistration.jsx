import React, { useEffect, useState, useRef } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
} from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import PaypalDialog from "../../components/paypal-dialog/PaypalDialog";
import { toast } from "react-toastify";
import { setSelectedSlots } from "../../features/slotBookingSlice";
import subscriptionService from "../../services/subscription.service";
import { useSelector } from "react-redux";

export default function PurchaseRegistration() {
  const loggedin = localStorage.getItem("isLoggedIn");
  const navigate = useNavigate();
  const location = useLocation();
  const [totalSelectedSlots, setTotalSelectedSlots] = React.useState(0); 
  const paypalDialogRef = useRef(null);
  const [profile, setProfile] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    suburbs: "",
    address: "",
    state: "",
    gender: "",
  });

  const bookingDetails = {
    totalAmount: 300,
    discount: 15,
    finalAmount: 285,
  };

  const slots = useSelector((state) => state.slotsAdd.slots);
  

  // Fetch user data
  useEffect(() => {
    console.log('slots : ',totalSelectedSlots)
    console.log('current state : ',location.state)

    console.log('slotStoreData : ',slots)
    
    fetch("https://datatechgenius.com/expert-driver/public/index.php/api/users/profile", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data && data.data) {
          setProfile({
            fname: data.data.fname || "",
            lname: data.data.lname || "",
            email: data.data.email || "",
            phone: data.data.phone || "",
            suburbs: data.data.suburbs || "",
            address: data.data.address || "",
            state: data.data.state || "",
            gender: data.data.gender || "",
          });
        }
      })
      .catch((error) => console.error("Error fetching profile:", error));
  }, []);

  const handleContinue = () => {
    callPay();
    
    if (!profile.fname || !profile.email) {
      toast.error("Please complete all required fields.");
      return;
    }

    if (loggedin) {
      paypalDialogRef.current.dialogHandler({
        is_popular: 1,
        count: "3",
        time_per_lesson: "60",
        title: "An Affordable and Practical Start",
        validity_end: "01/01/2026",
        is_active: true,
      });
    } else {
      toast.error("Please login to continue");
      navigate("/login/student");
    }
  };

  const callPay = async()=>{
    const payload = {
      transaction: "ORD1111111", // Replace with dynamic transaction ID if needed
      slots: slots, 
    };
    try {
      // Send API request
      const response = await subscriptionService.createSubscription(payload);
      console.log("API Response:", response.data);
  
      // Call parent function if needed
      
      // Proceed with any other actions
    } catch (error) {
      console.error("Error submitting slots:", error);
    }
  }

  return (
    <div>
      <div>
        <Row>
          {/* Form Section */}
          <Col xs={12} lg={8}>
            <div style={{ border: "1px solid #ddd", borderRadius: "10px" }}>
              <div style={{ borderBottom: "1px solid #ddd", padding: "15px 20px " }}>
                <Form>
                  <Form.Group>
                    <Form.Label>Who are you registering for?</Form.Label>
                    <Form.Check type="radio" label="Myself" name="registerFor" defaultChecked />
                    <Form.Check type="radio" label="Someone else" name="registerFor" />
                  </Form.Group>

                  {/* Pick-up Details */}
                  <h5 className="mt-4">Please enter your pick-up details</h5>
                  <Row>
                    <Col xs={12}>
                      <Form.Group className="mb-3">
                        <Form.Label>Pick-up address</Form.Label>
                        <Form.Control type="text" placeholder="Enter location" value={profile.address} readOnly />
                      </Form.Group>
                    </Col>
                    <Col xs={12} md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Suburb</Form.Label>
                        <Form.Control type="text" value={profile.suburbs} readOnly />
                      </Form.Group>
                    </Col>
                    <Col xs={12} md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>State</Form.Label>
                        <Form.Control type="text" value={profile.state} readOnly />
                      </Form.Group>
                    </Col>
                  </Row>

                  {/* Personal Details */}
                  <h5 className="mt-4">Please provide your personal details</h5>
                  <Row>
                    <Col xs={12} md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>First name</Form.Label>
                        <Form.Control type="text" placeholder="First name" value={profile.fname} readOnly />
                      </Form.Group>
                    </Col>
                    <Col xs={12} md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control type="text" placeholder="Last name" value={profile.lname} readOnly />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Your email address" value={profile.email} readOnly />
                      </Form.Group>
                    </Col>
                    <Col xs={12} md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Phone number</Form.Label>
                        <Form.Control type="tel" placeholder="0400 000 000" value={profile.phone} readOnly />
                      </Form.Group>
                    </Col>
                  </Row>

                  {/* Password Section */}
                  <h5 className="mt-4">Choose a password for your learning dashboard</h5>
                  <Row>
                    <Col xs={12} md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password" />
                      </Form.Group>
                    </Col>
                    <Col xs={12} md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Password confirmation</Form.Label>
                        <Form.Control type="password" placeholder="Confirm password" />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="my-3">
                    <Form.Check type="checkbox" label="I agree to receive marketing communications." />
                    <Form.Check type="checkbox" label="I agree to the Terms & Conditions" />
                  </Form.Group>
                </Form>
              </div>
            </div>
          </Col>

          {/* Order Summary Section */}
          <Col>
            <div style={{ border: "1px solid #ddd", borderRadius: "10px" }}>
              <div>
                <div className="d-flex" style={{ borderBottom: "1px solid #ddd", padding: "15px 20px " }}>
                  <div className="h5 m-0">Order Summary</div>
                </div>

                <div className="d-flex" style={{ borderBottom: "1px solid #ddd", padding: "15px 20px " }}>
                  <div style={{ flex: 1 }}>
                    <i className="bi bi-ticket-perforated"></i> &nbsp; {location.state?.selectedSlots || 0} Slot(s) Booked
                  </div>
                  <div style={{ fontWeight: 600 }}>
                    ${location.state?.count * location.state?.amount || 0}.00
                  </div>
                </div>

                <div className="d-flex" style={{ borderBottom: "1px solid #ddd", padding: "15px 20px " }}>
                  <div style={{ flex: 1 }}>Credit Discount</div>
                  <div style={{ fontWeight: 600, color: "#00a326" }}>
                    - ${bookingDetails.discount.toFixed(2)}
                  </div>
                </div>

                <div className="d-flex justify-content-between" style={{ padding: "15px 20px " }}>
                  <div style={{ flex: 1 }}>
                    <div className=" fw-bold">Total Payment Due </div>
                  </div>
                  <div style={{ fontWeight: 600 }}>
                    ${location.state?.count * location.state?.amount - bookingDetails.discount}.00
                  </div>
                </div>

                <div style={{ padding: "15px 20px " }}>
                  <Button className="w-100" onClick={handleContinue}>
                    Continue
                  </Button>
                  
                </div>
                
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <PaypalDialog ref={paypalDialogRef} />
    </div>
  );
}
