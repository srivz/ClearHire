import { signOut } from "firebase/auth";
import React from "react";
import { Button, Container, Image, Nav, Navbar, Row } from "react-bootstrap";
import logo from "../../assets/img/logo.svg";
import { auth, auth2 } from "../../firebase-config";

export default function NavBar() {
  const logOut = () => {
    try {
      signOut(auth);
      signOut(auth2);
    } catch (error) {
      alert("User not Found. Sign Up first !!");
    }
  };
  return (
    <div>
      <Row>
        <Navbar
          fixed="top"
          bg="light"
          expand="lg"
          variant="light">
          <Container>
            <Navbar.Brand href="/">
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
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/">How It Work</Nav.Link>
                <Nav.Link href="/">Support</Nav.Link>
                <Button
                  onClick={logOut}
                  href="/signUp"
                  variant="success">
                  SignUp
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Row>
    </div>
  );
}
