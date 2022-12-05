import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Images/UC-horz-rgb-white.png';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.css';


function NavBar(){
    return(
    <>
     <Navbar expand="lg">
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
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/sell">Sell</Nav.Link>
            <Nav.Link href="/buy">Buy</Nav.Link>
            <Nav.Link href="/account">Account</Nav.Link>
            <Nav.Link href="/chat">Chat</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
    )
}

export default NavBar