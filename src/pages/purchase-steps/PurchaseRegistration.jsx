import React, { useEffect, useState, useRef } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  InputGroup,
  Modal,
} from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import PaypalDialog from "../../components/paypal-dialog/PaypalDialog";
import { toast } from "react-toastify";
import subscriptionService from "../../services/subscription.service";
import { useSelector } from "react-redux";
import AppLoader from "../../components/app-layout/AppLoader";
import { StateList, SuburbList } from "../../utils/constant";

export default function PurchaseRegistration({ isLoggedIn }) {
  const location = useLocation();
  const loginSelector = useSelector((state) => state.auth);
  const paypalDialogRef = useRef(null);
  const [show, setShow] = useState(!isLoggedIn);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate()
  const [slotCount, setSlotCount] = useState(0);
  const [activeLesson, setActiveLesson] = useState({})
  const [fields, setFields] = useState(
    {
      register_type: "myself",
      address: "",
      suburb: "",
      state: "",
      fname: "",
      lname: "",
      email: "",
      phone: "",
      is_agree_marketing: false,
      is_agree_terms: false,
    }
  )
  const selectedSlotSelector = useSelector((state) => state.slotsBooking?.data);
  const selectedLessonSelector = useSelector((state) => state.selectedLesson?.data)

  console.log("selectedSlotSelector", selectedSlotSelector)

  useEffect(() => {
    if (selectedSlotSelector) {
      setSlotCount(selectedSlotSelector?.length)
    }
  }, [selectedSlotSelector])

  useEffect(() => {
    if (selectedLessonSelector?.id) {
      setActiveLesson(selectedLessonSelector)
    }
  }, [selectedLessonSelector])


  const bookingDetails = {
    totalAmount: 300,
    discount: 15,
    finalAmount: 285,
  };

  const slots = useSelector((state) => state);

  console.log("Slots", slots);
  useEffect(() => {
    if (loginSelector.token !== null) {
      setFields({
        fname: loginSelector.user.fname,
        lname: loginSelector.user.lname,
        email: loginSelector.user.email,
        phone: loginSelector.user.phone,
        suburbs: loginSelector.user.suburb,
        address: loginSelector.user.address,
        state: loginSelector.user.state,
        register_type: "myself",
      });
    }
  }, [loginSelector]);

  const handleContinue = () => {
    if (!fields.fname || !fields.email) {
      toast.error("Please complete all required fields.");
      return;
    }


    paypalDialogRef.current.dialogHandler(activeLesson);

  };

  const callPay = async () => {
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

  const handleFieldChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFields({
      ...fields,
      [name]: type === "radio" ? (fields.register_type == "myself" ? "someone" : "myself") : value,
    });
    if (value) {
      setErrors({ ...errors, [name]: false });
    }
  };

  const handleRadioFieldChange = (event) => {
    const { name, value, type, checked } = event.target;
    // setFields({
    //   ...fields,
    //   register_type: fields.register_type == "myself" ? "someone" : "myself",
    // });
    if (value) {
      setErrors({ ...errors, [name]: false });
    }
    if (fields.register_type == "someone") {
      setFields({
        fname: loginSelector.user.fname,
        lname: loginSelector.user.lname,
        email: loginSelector.user.email,
        phone: loginSelector.user.phone,
        suburbs: loginSelector.user.suburb,
        address: loginSelector.user.address,
        state: loginSelector.user.state,
        register_type: "myself",
      });
    } else {
      setFields({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        suburbs: "",
        address: "",
        state: "",
        register_type: "someone",
      });
    }
  };

  const validateFields = () => {
    let newErrors = {};

    if (!fields.fname.trim()) newErrors.fname = "First name is required.";
    if (!fields.lname.trim()) newErrors.lname = "Last name is required.";
    if (!fields.email.trim()) newErrors.email = "Email is required.";
    if (!fields.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!fields.address.trim()) newErrors.address = "Address is required.";
    if (!fields.state.trim()) newErrors.state = "Please select a state.";
    if (!fields.suburb.trim()) newErrors.suburbs = "Please select a suburb.";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (validateFields()) {

    }
  }

  const handleFavouriteFieldChange = (event) => {
    const { name, checked } = event.target;
    setFields((prevFields) => ({
      ...prevFields,
      [name]: checked ? 1 : 0,
    }));
  };

  return (
    <div>
      <div className="my-2">
        <Row>
          {/* Form Section */}
          <Col xs={12} lg={8}>
            <div style={{ border: "1px solid #ddd", borderRadius: "10px" }}>
              <div style={{ borderBottom: "1px solid #ddd", padding: "15px 20px " }}>

                <Form noValidate onSubmit={handleSubmit}>
                  <Form.Group
                    as={Col}
                    md="4"
                    className="mb-3"
                  >
                    <Form.Label>Who are you registering for?
                    </Form.Label>
                    <div >
                      <Form.Check
                        inline
                        label="Myself"
                        name="register_type"
                        type="radio"
                        // id={inline - radio - 1}
                        checked={fields.register_type == "myself"}
                        onChange={handleRadioFieldChange}
                      />
                      <Form.Check
                        inline
                        label="Someone else"
                        name="register_type"
                        type="radio"
                        // id={inline - radio - 2}
                        checked={fields.register_type == "someone"}
                        onChange={handleRadioFieldChange}
                      />
                    </div>
                    {/* ))} */}
                  </Form.Group>

                  {/* Pick-up Details */}


                  {/* Personal Details */}
                  <h5 className="my-4">Please provide your personal details</h5>
                  <Row className="mb-3">
                    {/* First Name */}
                    <Form.Group as={Col} md="6" className="mb-3">
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
                    <Form.Group as={Col} md="6" className="mb-3">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Last Name"
                        name="lname"
                        value={fields.lname}
                        onChange={handleFieldChange}
                        isInvalid={!!errors.lname}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.lname}
                      </Form.Control.Feedback>
                    </Form.Group>

                    {/* Email */}
                    <Form.Group as={Col} md="6" className="mb-3">
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

                    <Form.Group as={Col} md="6" className="mb-3">
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

                    <Form.Group as={Col} md="6" className="mb-3">
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

                    <Form.Group as={Col} md="6" className="mb-3">
                      <Form.Label>Suburbs</Form.Label>
                      <Form.Select
                        name="suburb"
                        value={fields.suburb}
                        onChange={handleFieldChange}
                        isInvalid={!!errors.suburb}
                      >
                        <option value="">Choose</option>
                        {SuburbList.map((item, index) => (
                          <option key={index} value={item.value}>
                            {item.name}
                          </option>
                        ))}
                      </Form.Select>
                      <Form.Control.Feedback type="invalid">
                        {errors.suburb}
                      </Form.Control.Feedback>
                    </Form.Group>


                  </Row>

                  <h5 className="my-4">Please enter your pick-up details</h5>
                  <Form.Group as={Col} md="12" className="mb-3">
                    <Form.Label>Pickup Address</Form.Label>
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

                  <Form.Group as={Col} md="12" className="my-4">
                    {/* <Form.Label>Favourite</Form.Label> */}
                    <div className="mt-3">
                      <Form.Check
                        inline
                        label="I agree to receive marketing communications"
                        name="is_agree_marketing"
                        type="checkbox"
                        value={0}
                        checked={fields.is_agree_marketing === 0} // Ensure it's strictly checked
                        onChange={handleFavouriteFieldChange} // Correct function handling
                      />
                    </div>
                    <div className="mt-3">
                      <Form.Check
                        inline
                        label="I agree to the Terms & Conditions"
                        name="is_agree_terms"
                        type="checkbox"
                        value={1}
                        checked={fields.is_agree_terms === 1} // Ensure it's strictly checked
                        onChange={handleFavouriteFieldChange} // Correct function handling
                      />
                    </div>
                  </Form.Group>
                  {/* <Form.Group className="my-4">
                        <Form.Check className="my-2" type="checkbox" label="I agree to receive marketing communications." />
                        <Form.Check className="my-2" type="checkbox" label="I agree to the Terms & Conditions" />
                      </Form.Group> */}
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
                    <i className="bi bi-ticket-perforated"></i> &nbsp; {slotCount} Slot(s) Booked
                  </div>
                  <div style={{ fontWeight: 600 }}>
                    ${activeLesson.amount}
                  </div>
                </div>

                <div className="d-flex" style={{ borderBottom: "1px solid #ddd", padding: "15px 20px " }}>
                  <div style={{ flex: 1 }}>Credit Discount</div>
                  <div style={{ fontWeight: 600, color: "#00a326" }}>
                    - ${bookingDetails.discount}
                  </div>
                </div>

                <div className="d-flex justify-content-between" style={{ padding: "15px 20px " }}>
                  <div style={{ flex: 1 }}>
                    <div className=" fw-bold">Total Payment Due </div>
                  </div>
                  <div style={{ fontWeight: 600 }}>
                    ${activeLesson.amount - bookingDetails.discount}
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
      <Modal
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
      >
        {/* <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Login Required
          </Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "120px",
              padding: "10px",
            }}
          >
            <div> <h3>Login Required</h3></div>
            <hr />
            <div style={{ fontSize: "18px", textAlign: "center", marginBottom: "10px" }}>
              You must be logged in to proceed with the payment. <br /><br />Please log in or create an account to continue.
            </div>

            {/* <div style={{ fontSize: "19px", fontWeight: "bold" }}>
              {info?.fname ? `${info.fname} ${info.lname}` : info?.title}
            </div> */}
          </div>
        </Modal.Body>

        <Modal.Footer style={{ justifyContent: "center" }}>
          <Button
            variant="primary"
            className="me-3"
            onClick={() => navigate("/login", { state: { from: location.pathname } })}
            style={{ width: "130px" }}
          >
            Go to Login
          </Button>

        </Modal.Footer>
      </Modal>
    </div>
  );
}
