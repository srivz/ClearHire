import React from "react";
import { Button, Container, Form, Image, Nav, Navbar } from "react-bootstrap";
import logo from "../../assets/img/logo.svg";
import upload_pic from "../../assets/img/upload-pic.jpg";

export default function NavBar2() {
  return (
    <div className="nav">
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
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto justify-content-center"
              navbarScroll
              style={{
                marginLeft: "35px",
              }}>
              <Form className="d-flex">
                <Form.Control
                  style={{
                    width: "300px",
                    marginTop: "7px",
                  }}
                  size="md"
                  type="text"
                  className="mb-2"
                  placeholder="Employee Name Or Company"
                  aria-label="Search"
                />
              </Form>
              <Form className="d-flex">
                <Form.Select
                  size="md"
                  style={{
                    marginLeft: "5px",
                    width: "150px",
                    marginTop: "7px",
                  }}
                  className="mb-2 options"
                  aria-label="Default select example">
                  <option>Designation</option>
                  <option value="srdeveloper">Sr. Developer</option>
                  <option value="developer">Developer</option>
                  <option value="tester">Tester</option>
                </Form.Select>
              </Form>
              <Form className="d-flex">
                <Form.Select
                  size="md"
                  style={{
                    marginLeft: "5px",
                    width: "150px",
                    marginTop: "7px",
                  }}
                  className="mb-2 options"
                  aria-label="Default select example">
                  <option>Location</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form>
              <Form className="d-flex">
                <Button
                  style={{ marginLeft: "5px", marginTop: "7px" }}
                  size="md"
                  className="mb-2"
                  variant="success">
                  Search
                </Button>
              </Form>
              <div
                className="profile-pic-nav"
                style={{ marginLeft: "15px" }}>
                <Image src={upload_pic} />
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
