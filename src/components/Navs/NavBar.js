import React, { Component } from "react";
import { Button, Container, Image, Nav, Navbar } from "react-bootstrap";
import logo from "../../assets/img/logo.svg";

class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar
          fixed="top"
          bg="light"
          expand="lg"
          variant="light">
          <Container>
            <Navbar.Brand href="#">
              <Image
                src={logo}
                alt="Logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              className="justify-content-end"
              id="basic-navbar-nav">
              <Nav>
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#">How It Work</Nav.Link>
                <Nav.Link href="#">Support</Nav.Link>
                <Button
                  href="/signUp"
                  variant="success">
                  SignUp
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
