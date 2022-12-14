import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { banUser, deleteAdminStudent } from "../api";
// taken from https://react-bootstrap.github.io/components/modal/
function ConfirmAdminBan({ props, setError, setSuccess }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function handleDelete() {
    handleClose();
    setError("");
    setSuccess("");
    const result = await banUser({ stuID: props._id });
    if (result.error) {
      setError(result.error);
    } else {
      setSuccess("Ban Student Successful");
      window.location.reload();
    }
  }

  return (
    <>
      <Button style={{ width: "7rem", height:"2rem", fontSize:"0.82rem" }} variant="danger" onClick={handleShow}>
        Ban Student
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ban Student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Woah! Are You Sure You Want To Ban {props.email}
          <br />
          Student ID: {props._id}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Ban Student
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ConfirmAdminBan;
