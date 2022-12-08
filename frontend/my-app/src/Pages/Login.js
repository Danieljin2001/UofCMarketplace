import React, {useState} from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import jwt_decode from "jwt-decode";
import {redirect, useNavigate} from "react-router-dom";
import axios, * as others from 'axios';
import NavBar from "../components/NavBar";

const Login = () => {

    const navigate = useNavigate();

    function handleSubmit(event)
    {
        event.preventDefault();

        // post request payload
        const user = {
            email: event.target[0].value,
            password: event.target[1].value
        }

        // temporary: for testing redirects
        if(user.email === event.target[0].value && user.password === event.target[1].value)
            navigate("/home"); // redirects to new page with logout link

        // checking email and password then set auth token to local storage
        axios.post("http://localhost:3000/login", user)
            .then(response => {
                if(response.status === 200)
                {
                    const encoded = response.data.token;
                    let decoded = jwt_decode(encoded);
                    let token = decoded.token;
                    localStorage.setItem("token", token);
                    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
                    navigate('/home');
                }
                else
                {
                    alert("Email or Password is Incorrect!");
                }
            })
            .catch(error => {
                console.log(error);
            })
    }
  return (
      <>
      <Container style={{marginTop:"11rem"}}>
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
                          <div className="text-center my-2" style={{fontSize:"15px"}}>
                            Not registered yet?{" "}
                            <a className="link-primary" href="/signup" style={{fontSize:"15px"}}>
                                Sign Up
                            </a>
                        </div>
                      </Form.Group>
                      <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                          <Button className="my-3 px-5" variant="warning" type="submit">
                              Login
                          </Button>
                      </div>
                  </Form>
              </Col>
          </Row>
      </Container>
 </>
  );
}

export default Login
