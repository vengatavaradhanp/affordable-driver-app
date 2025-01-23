import React from "react";
import { Container } from "react-bootstrap";
import { Stepper, Step } from "react-form-stepper";

export default function PurchaseSteps() {
  const [activeStep, setActiveStep] = React.useState(3);

  const handleStpperChange = (event, index) => {
    debugger;
  };

  return (
    <Container style={{ marginTop: "40px" }}>
      <Stepper activeStep={activeStep} onChange={handleStpperChange}>
        <Step label="Instructor" />
        <Step label="Amount" />
        <Step label="Book Lesson" />
        <Step label="Registration" />
        <Step label="Payment" />
      </Stepper>
    </Container>
  );
}
