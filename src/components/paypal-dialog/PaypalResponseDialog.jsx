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
        <Modal.Body style={{ height: "500px" }}>
          {isRunning && <Confetti width={420} height={420} />}
          <div style={{ padding: "25px" }}>
            <div style={{ textAlign: "center" }}>
              <i
                class="bi bi-check-circle-fill"
                style={{ fontSize: "80px", color: "#00b069" }}
              ></i>
            </div>
            <div
              style={{
                color: "#797777",
                fontSize: "22px",
                textAlign: "center",
                padding: "10px 0px",
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
                fontWeight: 600,
                padding: "0px 0px",
              }}
            >
              $ 8.99
              <div style={{ fontSize: "12px" }}>One Year Validity</div>
            </div>
            <div style={{ textAlign: "center", marginTop: "80px" }}>
              <button
                type="button"
                class="btn btn-primary"
                style={{
                  width: "100%",
                  borderRadius: "25px",
                  padding: "10px",
                  fontWeight: 600,
                }}
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
