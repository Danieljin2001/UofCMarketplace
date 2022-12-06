import React, {useState} from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useAuth} from "../components/AuthProvider";
import {Alert} from "react-bootstrap";
// import mongoose from "mongoose";

const Login = () => {

    const { onLogin } = useAuth();

    function handleSubmit(event)
    {
        event.preventDefault();
        let email = event.target[0].value;
        let pass = event.target[1].value;
        console.log(email, pass);
        // const query = Student.findOne({ });
        // const query = Admin.findOne({ });
        if(email === event.target[0].value && pass === event.target[1].value)
        {
            onLogin();
        }
        else
        {

        }
    }
  return (
      <Container>
          <Row className="justify-content-center">
              <Col sm={4}>
                  <Form noValidate onSubmit={handleSubmit}>
                      <Form.Group className="mb-3" controlId="email">
                          <Form.Label className="text-white">UCalgary Email</Form.Label>
                          <Form.Control  type="text" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="pass">
                          <Form.Label className="text-white">Password</Form.Label>
                          <Form.Control type="password" />
                      </Form.Group>
                      <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                          <Button  variant="warning" type="submit">
                              Login
                          </Button>
                      </div>
                  </Form>
              </Col>
          </Row>
      </Container>
  );
}

export default Login