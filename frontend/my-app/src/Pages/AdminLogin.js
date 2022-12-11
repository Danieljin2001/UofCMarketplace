import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import { addyLogin } from "../api";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  async function handleSubmit(event) {
    event.preventDefault();

    // post request payload
    const user = {
      username: event.target[0].value,
      password: event.target[1].value,
    };
    const response = await addyLogin(user);
    console.log("response== ", response);
    if (!response.error) {
      navigate(from, { replace: true });
    } else {
      setError(response.error);
      console.log("errors= ", response.error);
    }
  }
  return (
    <>
      <NavBar />
      <Container style={{ marginTop: "11rem" }}>
        <Row className="justify-content-center">
          <Col sm={4}>
            <Form noValidate onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="username">
                <Form.Label className="text-white">Username</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="pass">
                <Form.Label className="text-white">Password</Form.Label>
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
                  Login
                </Button>
              </div>
              {error ? <div>Error: {error}</div> : null}
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdminLogin;
