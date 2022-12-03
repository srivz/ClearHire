import React from "react";
import NavBar2 from "./Navs/NavBar2";
import Footer from "./Footer/Footer";
import { Button, Col, Container, Row } from "react-bootstrap";
import { sendEmailVerification } from "firebase/auth";
import { auth } from "../firebase-config";

export default function EmailSent() {
  const handleSubmit = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      window.location.href = "/";
    });
  };

  return (
    <div>
      <Container>
        <Row>
          <NavBar2 />
          <main id="main">
            <section className="addemployee-form-wrap">
              <Container>
                <Row>
                  <Col md={12}>
                    <Row className="justify-content-center align-items-center">
                      <Col
                        md={6}
                        className="text-left ml-auto mr-auto">
                        <div
                          className="addemp-emp"
                          style={{ marginTop: "150px" }}>
                          <div className="text-center">
                            <h3 className="section-main-title mb-3">
                              Account Confirmation
                            </h3>
                            <p className="mb-4">
                              An email with your account confirmation link will
                              be sent to your email.
                              <br />
                              Click proceed and check your registered Email !
                            </p>
                          </div>
                          <div className="addemp-form">
                            <Row className="form-group">
                              <Col
                                md={12}
                                className="mt-4">
                                <Button
                                  onClick={handleSubmit}
                                  variant="success"
                                  className="w-100">
                                  Proceed{" "}
                                </Button>
                              </Col>
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
          <Footer />
        </Row>
      </Container>
    </div>
  );
}
