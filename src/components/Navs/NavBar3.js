import { signOut } from "firebase/auth";
import React from "react";
import { Button, Container, Image, Nav, Navbar } from "react-bootstrap";
import logo from "../../assets/img/logo.svg";
import { auth, auth2 } from "../../firebase-config";

export default function NavBar3() {
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
              <Button
                onClick={logOut}
                href="/"
                variant="danger">
                Log Out
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
