import React, { forwardRef, useImperativeHandle, useState } from "react";
import { Button, Modal } from "react-bootstrap";

const ConfirmationModalComponent = forwardRef((props, ref) => {
  const [modal, setModal] = useState(false);
  const [info, setInfo] = useState(null);

  useImperativeHandle(ref, () => ({
    open(data) {
      setModal(!modal);
      setInfo(data);
    },
  }));

  const handleUserDelete = () => {
    setModal(false);
    props.handleDeleteUser(info.id);
  };

  return (
    <Modal
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={modal}
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Delete Confirmation
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "120px",
            padding: "20px",
          }}
        >
          <div style={{ fontSize: "18px", marginBottom: "10px" }}>
            Are you sure you want to delete{" "}
            {info?.fname ? "a user" : "a lesson package"}?
          </div>

          <div style={{ fontSize: "19px", fontWeight: "bold" }}>
            {info?.fname ? `${info.fname} ${info.lname}` : info?.title}
          </div>
        </div>
      </Modal.Body>

      <Modal.Footer style={{ justifyContent: "center" }}>
        <Button
          variant="primary"
          className="me-3"
          onClick={handleUserDelete}
          style={{ width: "100px" }}
        >
          Confirm
        </Button>
        <Button
          variant="secondary"
          onClick={() => setModal(false)}
          style={{ width: "100px" }}
        >
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
});

export default ConfirmationModalComponent;
