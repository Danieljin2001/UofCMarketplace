import React, { useState } from "react";
import { useNavigate } from "react-router";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {deleteStudent} from "../api";

// taken from https://react-bootstrap.github.io/components/modal/
function ConfirmAccountDelete({ id, email, setError, setSuccess }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate();

    const logoutUser = () => {
        window.localStorage.clear();
        navigate("/");
    };

    async function handleDelete() {
        handleClose();
        setError("");
        setSuccess("");
        const result = await deleteStudent({ stuID: id });
        if (result.error) {
            setError(result.error);
        } else {
            setSuccess("Delete Account Successful");
            window.location.reload();
        }
        logoutUser();
    }

    return (
        <>
            <Button style={{borderBottom: "1px solid black", width: "20%", color: "black", }}
                    variant="danger"
                    className="my-2 py-3" onClick={handleShow}>
                Delete Account
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Account</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Woah! Are You Sure You Want To Delete {email}
                    <br />
                    Account ID: {id}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={handleDelete}>
                        Delete Account
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ConfirmAccountDelete;
