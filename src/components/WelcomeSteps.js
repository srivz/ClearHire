import React, { Component } from "react";
import Footer from "./Footer/Footer";
import check_icon from "../assets/img/check-icon.svg";
import next_icon from "../assets/img/next-icon.svg";
import previous_icon from "../assets/img/previous-icon.svg";
import upload_pic from "../assets/img/upload-pic.jpg";
import image_icon from "../assets/img/image-icon.svg";
import NavBar from "./Navs/NavBar";
import { Col, Container, Row } from "react-bootstrap";

class WelcomeSteps extends Component {
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
                    <Col
                      md={6}
                      className="text-center ml-auto mr-auto">
                      <div className="loginwrap">
                        <div
                          className="step-1"
                          id="checkout-progress"
                          data-current-step="1">
                          <div className="progress-bar">
                            <div className="step step-1 active"></div>
                            <div className="step step-2"></div>
                            <div className="step step-3"></div>
                            <div className="step step-4"></div>
                            <div className="step step-5"></div>
                            <div className="step step-6"></div>
                            <div className="step step-7"></div>
                          </div>
                        </div>

                        <section
                          id="section1"
                          className="section1"
                          style={{ display: "block" }}>
                          <Row>
                            <Col md={12}>
                              <h3 className="section-main-title mb-3">
                                Welcome to
                                <span className="text-green">clearhire</span>
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
                              <label>Enter your name</label>
                              <div className="input-group">
                                <input
                                  type="text"
                                  className="form-control"
                                />
                              </div>
                            </Col>
                          </Row>
                        </section>

                        <section
                          id="section2"
                          className="section2"
                          style={{ display: "none" }}>
                          <Row>
                            <Col md={12}>
                              <h3 className="section-main-title mb-3">
                                Welcome to{" "}
                                <span className="text-green">clearhire</span>
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
                              <label>Company name</label>
                              <div className="input-group">
                                <input
                                  type="text"
                                  className="form-control"
                                />
                              </div>
                            </Col>
                          </Row>
                        </section>

                        <section
                          id="section3"
                          className="section3"
                          style={{ display: "none" }}>
                          <Row>
                            <Col md={12}>
                              <h3 className="section-main-title mb-3">
                                Welcome to{" "}
                                <span className="text-green">clearhire</span>
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
                              <label>Website</label>
                              <div className="input-group">
                                <input
                                  type="text"
                                  className="form-control"
                                />
                              </div>
                            </Col>
                          </Row>
                        </section>

                        <section
                          id="section4"
                          className="section4"
                          style={{ display: "none" }}>
                          <Row>
                            <Col md={12}>
                              <h3 className="section-main-title mb-3">
                                Welcome to{" "}
                                <span className="text-green">clearhire</span>
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
                              <label>Your Design</label>
                              <div className="input-group">
                                <select
                                  name=""
                                  id=""
                                  className="form-control">
                                  <option value="">Founder</option>
                                </select>
                              </div>
                            </Col>
                          </Row>
                        </section>

                        <section
                          id="section5"
                          className="section5"
                          style={{ display: "none" }}>
                          <Row>
                            <Col md={12}>
                              <h3 className="section-main-title mb-3">
                                Welcome to{" "}
                                <span className="text-green">clearhire</span>
                              </h3>
                              <p className="mb-5">
                                clearhire helps you find that best employee
                                <br />
                                you've been looking all along
                              </p>
                            </Col>
                          </Row>
                          <Row>
                            <Col
                              md={12}
                              className="text-center">
                              <div className="beforeuploadpic">
                                <img
                                  src={image_icon}
                                  alt=""
                                />
                              </div>
                            </Col>
                          </Row>
                        </section>

                        <section
                          id="section6"
                          className="section6"
                          style={{ display: "none" }}>
                          <Row>
                            <Col md={12}>
                              <h3 className="section-main-title mb-3">
                                Welcome to{" "}
                                <span className="text-green">clearhire</span>
                              </h3>
                              <p className="mb-5">
                                clearhire helps you find that best employee
                                <br />
                                you've been looking all along
                              </p>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="text-center">
                              <div className="uploadpic">
                                <img
                                  src={upload_pic}
                                  alt=""
                                />
                              </div>
                            </Col>
                          </Row>
                        </section>

                        <section
                          id="section7"
                          className="section7"
                          style={{ display: "none" }}>
                          <Row>
                            <Col md={12}>
                              <h3 className="section-main-title mb-3">
                                Welcome to{" "}
                                <span className="text-green">clearhire</span>
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
                              <label>Year Started</label>
                              <div className="input-group">
                                <select
                                  name=""
                                  id=""
                                  className="form-control">
                                  <option value="">Founder</option>
                                </select>
                              </div>
                            </Col>
                          </Row>
                        </section>
                        <div className="button-container">
                          <div className="btn btn-prev disabled">
                            <img
                              src={previous_icon}
                              alt=""
                            />
                          </div>
                          <div className="btn btn-next">
                            <img
                              src={next_icon}
                              alt=""
                            />
                          </div>
                          <div
                            className="btn btn-submit"
                            style={{ display: "none" }}>
                            <img
                              src={check_icon}
                              alt=""
                            />
                          </div>
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
      </div>
    );
  }
}

export default WelcomeSteps;
