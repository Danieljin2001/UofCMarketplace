import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { banUser, deleteAdminStudent, unbanUser } from "../api";
// taken from https://react-bootstrap.github.io/components/modal/
function ConfirmAdminUnban({ props, setError, setSuccess }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function handleDelete() {
    handleClose();
    setError("");
    setSuccess("");
    const result = await unbanUser({ email: props.email });
    if (result.error) {
      setError(result.error);
    } else {
      setSuccess("Unban Student Successful");
      window.location.reload();
    }
  }

  return (
    <>
      <Button style={{ width: "7rem" }} variant="danger" onClick={handleShow}>
        Unban Student
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Unban Student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Woah! Are You Sure You Want To Remove The Ban on {props.email}
          <br />
          Ban ID: {props._id}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Unban Student
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ConfirmAdminUnban;
