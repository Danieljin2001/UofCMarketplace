import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { deleteAdminStudent } from "../api";
// taken from https://react-bootstrap.github.io/components/modal/
function ConfirmAdminStudentDelete({ props, setError, setSuccess }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function handleDelete() {
    handleClose();
    setError("");
    setSuccess("");
    const result = await deleteAdminStudent({ stuID: props._id });
    if (result.error) {
      setError(result.error);
    } else {
      setSuccess("Delete Student Successful");
      window.location.reload();
    }
  }

  return (
    <>
      <Button style={{ width: "10rem" }} variant="danger" onClick={handleShow}>
        Delete Student
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Woah! Are You Sure You Want To Delete {props.email}
          <br />
          Student ID: {props._id}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete Student
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ConfirmAdminStudentDelete;
