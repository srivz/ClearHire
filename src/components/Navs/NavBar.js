import React, { Component } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../assets/img/logo.svg";

class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar
          fixed="top"
          size="lg"
          bg="light"
          variant="light">
          <Container>
            <Navbar.Brand href="/">
              <img
                src={logo}
                alt="Logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="justify-content-end">
                <Nav.Item>
                  <Nav.Link href="/welcome">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/welcome-steps">How It Work</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/search-results">Support</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Button
                    href="#"
                    variant="success"
                    size="md">
                    SignUp
                  </Button>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
