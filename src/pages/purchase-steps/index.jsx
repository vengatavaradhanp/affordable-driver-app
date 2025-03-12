import React, { useState } from "react";
import {
  Container,
  ProgressBar,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import Instructor from "../instructors";
import { useNavigate } from "react-router-dom";
import PurchaseAmount from "./PurchaseAmount";
import PurchaseLessons from "./PurchaseLessons";
import PurchaseRegistration from "./PurchaseRegistration";
import PaypalDialog from "../../components/paypal-dialog/PaypalDialog";
import PurchaseBookingCalendar from "./PurchaseBookingCalendar";
import { LoginResponse } from "../../utils/constant";
import { toast } from "react-toastify";

const PurchaseSteps = () => {
  const [step, setStep] = useState(1);

  const paypalDialogRef = React.useRef(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const navigate = useNavigate();

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
  }, []);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const steps = ["Slots Booking Calendar", "Learner Registration", "Payment"];
  const progress = (step / steps.length) * 100;

  const handleNext = () => {
    if (step < steps.length) setStep(step + 1);
  };

  const handleBack = () => {
    if (step === 1) {
      navigate("/lessons");
    } else {
      if (step > 1) setStep(step - 1);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const renderStepContent = () => {
    switch (step) {
      // case 1:
      //   return <PurchaseAmount />;
      // case 2:
      //   return <PurchaseLessons />;
      // case 3:
      //   return <PurchaseRegistration />;
      case 1:
        return <PurchaseBookingCalendar handleNext={handleNext} />;
      case 2:
        return <PurchaseRegistration />;
      default:
        return null;
    }
  };

  const paymentHandler = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  // const handleContinue = () => {
  //     if (!LoginResponse.selectedSlot) {
  //       toast.error("Please select a lesson slot before proceeding.");
  //       return;
  //     }
  //     if (!LoginResponse.userDetails.firstName || !LoginResponse.userDetails.email) {
  //       toast.error("Please complete all required fields.");
  //       return;
  //     }
    
  //     // Proceed to payment if everything is valid
  //     paypalDialogRef.current.dialogHandler({
  //       is_popular: 1,
  //       count: LoginResponse.lessonPackage.count,
  //       time_per_lesson: LoginResponse.lessonPackage.timePerLesson,
  //       title: LoginResponse.lessonPackage.title,
  //       validity_end: "01/01/2026",
  //       is_active: true,
  //     });
  //   };
    
    

  return (
    <Container class="container" style={{ width: "80%", marginTop: "30px" }}>
      <h2 style={{ color: "#2b9348" }}> Purchase Steps  {step}</h2>
      {step == 1 && (
        <div style={{ fontSize: "20px", fontWeight: 600, color: "#012a41" }}>
          {" "}
          Select your preferred time slot
        </div>
      )}
      {step == 2 && (
        <>
          <div style={{ fontSize: "20px", fontWeight: 600, color: "#012a41" }}>
            {" "}
            Learner Registration
          </div>
          <span>Existing learner? <a href="/login/student">Log in</a></span>
        </>
      )}
      <ProgressBar
        now={progress}
        label={`${Math.round(progress)}%`}
        className="my-4"
      />
      <div className="step-content mb-4" style={{ minHeight: "400px" }}>
        {renderStepContent()}
      </div>
      <hr />
      <Row>
        <Col>
          <Button
            variant="secondary"
            onClick={handleBack}
            style={{ width: "120px" }}
          >
            Previous
          </Button>
        </Col>
        <Col className="text-end">
          {step < steps.length - 1 ? (
            <Button
              variant="primary"
              onClick={handleNext}
              style={{ width: "120px" }}
            >
              Next
            </Button>
          ) : (
            <Button
              variant="success"
              onClick={() =>
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
              Continue to Payment
            </Button>
          //  <Button  onClick={handleContinue}>Continue to Payment</Button>
            
          )}
        </Col>
      </Row>
      <PaypalDialog ref={paypalDialogRef} paymentHandler={paymentHandler} />
    </Container>
  );
};

export default PurchaseSteps;
