import React, { useRef, useState } from "react";
import ErrorAlert from "../components/ErrorAlert";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import NavBar from "../components/NavBar";
import { updatePassword } from "../api";
import SuccessAlert from "../components/SuccessAlert";

const UpdatePassword = () => {
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [form, setForm] = useState({
    password: "",
    newPassword: "",
    confirmPassword: "",
  });
  const canSubmit = useRef(false);

  const checkForEmptyFields = () => {
    if (form.password === "") {
      canSubmit.current = false;

      setError("Current Password Cannot Be Empty");
    } else if (form.newPassword === "") {
      canSubmit.current = false;

      setError("New Password Cannot Be Empty");
    } else if (form.confirmPassword === "") {
      canSubmit.current = false;

      setError("Confirm Password Cannot Be Empty");
    } else {
      canSubmit.current = true;
    }
  };

  async function handleSubmit(event) {
    event.preventDefault();

    checkForEmptyFields();

    if (canSubmit.current) {
      setError("");
      setSuccess("");
      console.log("changepw data= ", form);
      // console.log("pw form= ", form);
      const response = await updatePassword(form);
      console.log("response== ", response);
      if (!response.error) {
        setSuccess("Password Updated!");
      } else {
        setError(response.error);
        console.log("errors= ", response.error);
      }
    } else {
      checkForEmptyFields();
    }
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <>
      <NavBar />
      {error ? <ErrorAlert props={error} /> : null}
      {success ? <SuccessAlert props={success} /> : null}
      <Container style={{ marginTop: "11rem" }}>
        <Row className="justify-content-center">
          <Col sm={4}>
            <Form noValidate onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="password">
                <Form.Label className="text-white">Current Password</Form.Label>
                <Form.Control
                  type="password"
                  value={form.password}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="newPassword">
                <Form.Label className="text-white">New Password</Form.Label>
                <Form.Control
                  type="password"
                  value={form.newPassword}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="confirmPassword">
                <Form.Label className="text-white">
                  Confirm New Password
                </Form.Label>
                <Form.Control
                  type="password"
                  value={form.confirmPassword}
                  onChange={handleChange}
                />
              </Form.Group>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button className="my-3 px-5" variant="warning" type="submit">
                  Change Password
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UpdatePassword;
