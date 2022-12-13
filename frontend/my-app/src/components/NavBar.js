import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Images/UC-horz-rgb-white.png";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavBar.css";
import { getToken, isAdmin, isAuth } from "../routeProtection";
import { redirect, useNavigate, useLocation } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { getAdmin, getStudent } from "../api";
import Loading from "./Loading";

function NavBar() {
  const user = isAuth();
  const addy = isAdmin();
  const myToken = getToken();
  const navigate = useNavigate();
  const currentUser = useRef(null);
  const [loading, setLoading] = useState(true);

  async function getAddy() {
    const data = await getAdmin();
    // setUser(data);
    currentUser.current = data;
    setLoading(false);
    console.log("user= ", user);
  }

  async function getUser() {
    const data = await getStudent();
    // setUser(data);
    currentUser.current = data;
    setLoading(false);
    console.log("user= ", user);
  }

  useEffect(() => {
    if (myToken && !addy) {
      getUser();
    } else if (myToken && addy) {
      getAddy();
    }
  }, [myToken]);

  const logoutUser = () => {
    // myToken = null;
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
                      {loading ? (
                        <Loading />
                      ) : (
                        <Nav.Link
                          disabled
                          className="d-flex flex-column align-items-center"
                        >
                          <div className="justify-content-space-between">
                            <CgProfile />
                            {currentUser.current.username}
                          </div>
                          <em style={{ fontSize: "0.6rem", color: "red" }}>
                            admin
                          </em>
                        </Nav.Link>
                      )}
                    </>
                  ) : (
                    <>
                      <Nav.Link href="/chat">Chat</Nav.Link>
                      <Nav.Link href="/post">Post</Nav.Link>
                      {loading ? (
                        <Loading />
                      ) : (
                        <Nav.Link
                          className="d-flex flex-column align-items-center"
                          href="/account"
                        >
                          <div className="justify-content-space-between">
                            <CgProfile /> {currentUser.current.email}
                          </div>
                          <em style={{ fontSize: "0.6rem", color: "purple" }}>
                            student
                          </em>
                        </Nav.Link>
                      )}
                    </>
                  )}
                  <Nav.Link>
                    <button
                      className="btn btn-light"
                      style={{ marginTop: "-5px" }}
                      onClick={logoutUser}
                    >
                      Logout
                    </button>
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
