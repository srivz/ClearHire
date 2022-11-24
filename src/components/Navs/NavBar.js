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
            <Navbar.Brand href="#home">
              <img
                src={logo}
                alt="Logo"
              />
            </Navbar.Brand>
            <Nav className="justify-content-end">
              <Nav.Item>
                <Nav.Link href="/home">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">How It Work</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1">Support</Nav.Link>
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
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
