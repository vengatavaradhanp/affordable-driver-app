import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import paypal from "../../assets/images/paypal1.png";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { EnvironmentEndpoint, PaymentOptions } from "../../utils/constant";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import PaypalConfirmationDialog from "./PaypalResponseDialog";

const style = { layout: "vertical" };

const PaypalDialog = React.forwardRef((props, ref) => {
  const [show, setShow] = React.useState(false);
  const paypalResponseDialog = React.useRef(null);
  const [paymentData, setPaymentData] = React.useState({});

  const navigate = useNavigate();
  React.useImperativeHandle(ref, () => ({
    dialogHandler: (data) => {
      setShow(true);
      setPaymentData(data);
    },
  }));

  const handleClose = () => setShow(false);

  const onCreateOrder = async (data, actions) => {
    try {
      let id = await actions.order.create({
        purchase_units: [
          {
            amount: {
              value: "8.99",
            },
          },
        ],
      });
      const payload = {
        amount: "8.99",
      };
      const response = await fetch(
        EnvironmentEndpoint + "paypal/create-order",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // Set proper headers for JSON
          },
          body: JSON.stringify(payload),
        }
      );
      const result = await response.json();
      id = result.order_id;
      return id;
    } catch (error) {
      return error;
    }
  };

  const onApproveOrder = async (data, actions) => {
    try {
      const orderApprove = await actions.order.capture().then((details) => {
        setShow(false);
        return details;
      });
      const payload = {
        order_id: data.orderID,
        status: "APPROVED",
        email: "ganapathydtg@gmail.com",
      };

      const response = await fetch(
        EnvironmentEndpoint + "paypal/payment-confirm-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // Set proper headers for JSON
          },
          body: JSON.stringify(payload),
        }
      );
      const result = await response.json();
      debugger;
      paypalResponseDialog.current.dialogHandler();
      props.paymentHandler();
      return orderApprove;
    } catch (error) {
      return error;
    }
  };

  return (
    <>
      <PayPalScriptProvider options={PaymentOptions}>
        <div id="payment-dialog-modal">
          <Modal
            show={show}
            onHide={handleClose}
            // aria-labelledby="contained-modal-title-vcenter"
            centered
            style={{ borderRadius: "10px" }}
          >
            <Modal.Body>
              <div style={{ padding: "20px" }}>
                <div
                  style={{
                    textAlign: "center",
                  }}
                >
                  <img
                    src={paypal}
                    alt="paypal"
                    style={{ width: "200px", height: "100%" }}
                  />
                </div>
                <div
                  style={{
                    color: "#797777",
                    fontSize: "22px",
                    textAlign: "center",
                    padding: "20px 0px",
                  }}
                >
                  <div>Make Payment to Begin Your Driver Training!</div>
                  <div
                    style={{
                      color: "#00b069",
                      fontSize: "22px",
                      fontWeight: 600,
                      padding: "10px 0px",
                    }}
                  >
                    {paymentData.count}x Lessons = $
                    {paymentData.count * paymentData.time_per_lesson}
                  </div>
                </div>

                <div>
                  <PayPalButtons
                    style={{ layout: "vertical" }}
                    createOrder={(data, actions) =>
                      onCreateOrder(data, actions)
                    }
                    onApprove={(data, actions) => onApproveOrder(data, actions)}
                    onCancel={() => setShow(false)}
                  />
                </div>
                <hr />
                <div>
                  <button
                    type="button"
                    class="btn"
                    style={{
                      width: "100%",
                      color: "#012a41",
                      border: "1px solid lightgrey",
                      borderRadius: "5px",
                      background: "#f9f7f7",
                    }}
                    onClick={() => setShow(false)}
                  >
                    Cancel Payment
                  </button>
                </div>
              </div>
            </Modal.Body>
          </Modal>
          <PaypalConfirmationDialog ref={paypalResponseDialog} />
        </div>
      </PayPalScriptProvider>
    </>
  );
});

export default PaypalDialog;
