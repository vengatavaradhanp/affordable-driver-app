import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import paypal from "../../assets/images/paypal1.png";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { EnvironmentEndpoint, PaymentOptions } from "../../utils/constant";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const style = { layout: "vertical" };

const PaypalDialog = React.forwardRef((props, ref) => {
  const [show, setShow] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const navigate = useNavigate();
  React.useImperativeHandle(ref, () => ({
    dialogHandler: () => {
      setShow(true);
    },
  }));

  const handleClose = () => setShow(false);

  const onCreateOrder = async (data, actions) => {
    setLoading(true);
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
      setLoading(false);
      console.error("ERROR", error);
    }
  };

  const onApproveOrder = async (data, actions) => {
    debugger;
    setLoading(true);
    try {
      const orderApprove = await actions.order.capture().then((details) => {
        setShow(false);
        return details;
      });
      const payload = {
        order_id: data.orderID,
        payment_source: {
          pay_pal: {
            payer: {
              payer_id: data.payerID,
            },
          },
        },
      };

      const response = await fetch(
        EnvironmentEndpoint + "paypal/confirm-payment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // Set proper headers for JSON
          },
          body: JSON.stringify(payload),
        }
      );

      const result = await response.json();
      setLoading(false);
      debugger;
      // Handle the result
      toast.success("Payment success");
      setTimeout(() => {
        navigate("/calendar");
      }, 3000);
      return orderApprove;
    } catch (error) {
      setLoading(false);
      console.error("ERROR", error);
    }

    return;
  };

  return (
    <PayPalScriptProvider options={PaymentOptions}>
      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{ borderRadius: "10px" }}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Paypal Payment Gateway
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            style={{
              padding: "30px 0px",
            }}
          >
            <PayPalButtons
              style={{ layout: "vertical" }}
              createOrder={(data, actions) => onCreateOrder(data, actions)}
              onApprove={(data, actions) => onApproveOrder(data, actions)}
            />
          </div>
        </Modal.Body>
      </Modal>
    </PayPalScriptProvider>
  );
});

export default PaypalDialog;
