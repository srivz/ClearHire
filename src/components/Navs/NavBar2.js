import React, { Component } from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.svg";
import upload_pic from "../../assets/img/upload-pic.jpg";

class NavBar2 extends Component {
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
              <div class="main-serach-wrap">
                <Nav className="me-auto ">
                  <Form className="d-flex ul">
                    <Nav.Item
                      className="li"
                      style={{ marginLeft: "50px" }}>
                      <Form.Control
                        style={{ width: "300px" }}
                        size="md"
                        type="search"
                        placeholder="Employee Name Or Company"
                        className="search-input"
                        aria-label="Search"
                      />
                    </Nav.Item>
                    <Nav.Item className="li">
                      <Form.Select
                        size="md"
                        className="options"
                        aria-label="Default select example">
                        <option>Designation</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                    </Nav.Item>
                    <Nav.Item className="li">
                      <Form.Select
                        size="md"
                        className="options"
                        aria-label="Default select example">
                        <option>Location</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                    </Nav.Item>
                    <Nav.Item className="li">
                      <Link to="/search-results">
                        <Button
                          size="md"
                          variant="success">
                          Search
                        </Button>
                      </Link>
                    </Nav.Item>
                    <Nav.Item className="li">
                      <div class="profile-pic">
                        <img
                          src={upload_pic}
                          alt=""
                        />
                      </div>
                    </Nav.Item>
                  </Form>
                </Nav>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default NavBar2;
