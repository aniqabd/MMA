import React from "react";
import "../App.css";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";

function Appbar() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" >
        <Container>
          <Navbar.Brand href="home">Wellness Wise</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="home">Home</Nav.Link>
            {/* <Nav.Link href="#features">Projects</Nav.Link>
            <Nav.Link href="#pricing">Blog</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Appbar;