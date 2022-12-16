import React, { useState } from "react";
import Footer from "./Footer/Footer";
import check_icon from "../assets/img/check-icon.svg";
import NavBar from "./Navs/NavBar";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import { auth } from "../firebase-config.js";
import { sendPasswordResetEmail } from "firebase/auth";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const [userLog, setUserLog] = useState({
    emailId: "",
  });

  const handleChangeLog = (event) => {
    let newInput1 = { [event.target.name]: event.target.value };
    setUserLog({ ...userLog, ...newInput1 });
  };
  const handleSubmit = () => {
    sendPasswordResetEmail(auth, userLog.emailId)
      .then(() => {
        alert("Password reset email sent!");
        window.location.href = "/";
      })
      .catch((error) => {
        if (error === "Firebase: Error (auth/user-not-found).")
          alert("USER NOT FOUND");
      });
  };

  return (
    <div>
      <NavBar />
      <main id="main">
        <section className="welcome h-100vh">
          <Container>
            <Row>
              <Col md={12}>
                <Row className="h-100vh justify-content-center align-items-center">
                  <div
                    className="text-left"
                    style={{ marginTop: "80px" }}>
                    <Link to={"/"}>
                      <Button variant="success">Back</Button>
                    </Link>
                  </div>
                  <Col
                    md={6}
                    className="text-center ml-auto mr-auto">
                    <div className="loginwrap">
                      <section
                        id="section1"
                        className="section1">
                        <Row>
                          <Col md={12}>
                            <h3 className="section-main-title mb-3">
                              Welcome to
                              <span className="text-green"> clearhire</span>
                            </h3>
                            <p className="mb-5">
                              clearhire helps you find that best employee
                              <br />
                              you've been looking all along
                            </p>
                          </Col>
                        </Row>
                        <Row>
                          <Col md={12}>
                            <Form.Group
                              className="mb-3"
                              controlId="formBasicName">
                              <Form.Label>Enter your EmailId</Form.Label>
                              <div className="input-group">
                                <Form.Control
                                  type="email"
                                  required
                                  name="emailId"
                                  defaultValue={userLog.emailId}
                                  onChange={handleChangeLog}
                                />
                                <Form.Text className="text-muted"></Form.Text>
                              </div>
                            </Form.Group>
                          </Col>
                        </Row>
                      </section>
                      <div className="button-container">
                        <Row>
                          <Button
                            className="btn btn-submit"
                            onClick={handleSubmit}>
                            <Image
                              src={check_icon}
                              alt=""
                            />
                          </Button>
                        </Row>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
      <br />
      <Footer />
    </div>
  );
}
