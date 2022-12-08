import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Images/UC-horz-rgb-white.png";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavBar.css";
import { isAdmin, isAuth } from "../routeProtection";
import { redirect, useNavigate, useLocation } from "react-router-dom";

function NavBar() {
  const user = isAuth();
  const addy = isAdmin();
  const navigate = useNavigate();

  const logoutUser = () => {
    window.localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <Navbar expand="lg" variant="dark">
        <Container>
          <Navbar.Brand>
            <a className="navbar-brand" href="/">
              <img src={Logo} width="200px" />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/sell">Sell</Nav.Link>
              <Nav.Link href="/buy">Buy</Nav.Link>

              {user ? (
                <>
                  {addy ? (
                    <>
                      <Nav.Link href="/students">All Students</Nav.Link>
                      <Nav.Link href="/posts">All Posts</Nav.Link>
                    </>
                  ) : (
                    <>
                      <Nav.Link href="/chat">Chat</Nav.Link>
                      <Nav.Link href="/post">Post</Nav.Link>
                      <Nav.Link href="/account">Account</Nav.Link>
                    </>
                  )}

                  <Nav.Link>
                    <button onClick={logoutUser}>Logout</button>
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link href="/login">Login</Nav.Link>
                  <Nav.Link href="/admin/login">Admin Login</Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
