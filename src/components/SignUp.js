import React, { Component } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import Footer from "./Footer/Footer";
import NavBar from "./Navs/NavBar";
import linkedin_icon from "../assets/img/linkedin-icon.svg";
import mail_outline_icon from "../assets/img/mail-outline-icon.svg";
import { Link } from "react-router-dom";

class SignUp extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <main id="main">
          <section className="welcome h-100vh">
            <Container>
              <Row>
                <Col md={12}>
                  <Row className="h-100vh justify-content-center align-items-center">
                    <Col md={3}>&nbsp;</Col>
                    <Col
                      md={6}
                      className="text-center">
                      <div className="loginwrap">
                        <h3 className="section-main-title mb-3">
                          Welcome to
                          <span className="text-green"> clearhire</span>
                        </h3>
                        <p className="mb-5">
                          clearhire helps you find that best employee
                          <br />
                          you've been looking all along
                        </p>
                        <div className="button-group text-center">
                          <Button
                            variant="light"
                            className="btn btn-default-outline">
                            <Image
                              src={linkedin_icon}
                              alt=""
                            />
                            CONTINUE WITH LINKEDIN
                          </Button>
                          <Link to="/signUp/email">
                            <Button
                              variant="light"
                              className="btn btn-default-outline">
                              <Image
                                src={mail_outline_icon}
                                alt=""
                              />
                              CONTINUE WITH E-MAIL
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </Col>
                    <Col md={3}>&nbsp;</Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}

export default SignUp;
