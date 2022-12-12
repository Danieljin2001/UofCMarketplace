import React, {useState} from 'react'
import ErrorAlert from "../components/ErrorAlert";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import NavBar from "../components/NavBar";
import {updatePassword} from "../api";

const UpdatePassword = () => {

  const [error, setError] = useState(null);

  async function handleSubmit(event)
  {
    event.preventDefault();

    const user = {
      password: event.target[0].value,
      newPassword: event.target[1].value,
      confirmPassword: event.target[2].value,
    };

    const response = await updatePassword(user);
    console.log("response== ", response);
    if (!response.error) {

    } else {
      setError(response.error);
      console.log("errors= ", response.error);
    }
  }

  return (
    <>
      <NavBar />
      {error ? <ErrorAlert props={error} /> : null}
      <Container style={{ marginTop: "11rem" }}>
        <Row className="justify-content-center">
          <Col sm={4}>
            <Form noValidate onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="currPassword">
                <Form.Label className="text-white">Current Password</Form.Label>
                <Form.Control type="password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="newPassword">
                <Form.Label className="text-white">New Password</Form.Label>
                <Form.Control type="password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="confirmNewPassword">
                <Form.Label className="text-white">Confirm New Password</Form.Label>
                <Form.Control type="password" />
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

export default UpdatePassword