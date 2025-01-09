import React from "react";
import Modal from "react-bootstrap/Modal";
import Confetti from "react-confetti";
import { useNavigate } from "react-router-dom";
import AppLoader from "../app-layout/AppLoader";
import { useLoader } from "../../context/LoaderContext";

const PaypalResponseDialog = React.forwardRef((props, ref) => {
  const [show, setShow] = React.useState(false);
  const [isRunning, setIsRunning] = React.useState(true);
  const navigate = useNavigate();

  React.useImperativeHandle(ref, () => ({
    dialogHandler: () => {
      setShow(true);
      setTimeout(() => {
        setIsRunning(false);
      }, 5000);
    },
  }));

  return (
    <>
      <Modal
        show={show}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{ borderRadius: "10px" }}
      >
        <Modal.Body style={{ padding: "40px 0px" }}>
          {isRunning && <Confetti width={420} height={420} />}
          <div>
            <div style={{ textAlign: "center", padding: "10px 0px" }}>
              <i
                class="bi bi-check-circle-fill"
                style={{ fontSize: "60px", color: "#00b069" }}
              ></i>
            </div>
            <div
              style={{
                color: "#797777",
                fontSize: "22px",
                textAlign: "center",
              }}
            >
              Congratulation! Your looks great <br />
              Ready to Drive..
            </div>
            <div
              style={{
                textAlign: "center",
                color: "#00b069",
                fontSize: "30px",
                padding: "20px 0px",
                fontWeight: 600,
              }}
            >
              $ 8.99
              <div style={{ fontSize: "12px" }}>Three Months Validity</div>
            </div>
            <div style={{ textAlign: "center", padding: "20px 0px" }}>
              <button
                type="button"
                class="btn btn-primary"
                style={{ padding: "10px 40px", borderRadius: "25px" }}
                onClick={() => navigate("/calendar")}
              >
                Go to Calendar
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
});

export default PaypalResponseDialog;
