import React, { useState, useEffect } from "react";
import home_bg from "../assets/img/home-bg.png";
import search_icon from "../assets/img/search-icon.svg";
import chat_icon from "../assets/img/chat-icon.svg";
import work_icon from "../assets/img/work-icon.svg";
import simple_work_icon from "../assets/img/simple-work-icon.svg";
import youtube_searched_icon from "../assets/img/youtube-searched-icon.svg";
import search_dollar_icon from "../assets/img/search-dollar-icon.svg";
import "../assets/css/style.css";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import NavBar from "./Navs/NavBar";
import Footer from "./Footer/Footer";
import {
  browserSessionPersistence,
  onAuthStateChanged,
  setPersistence,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase-config.js";

export default function Login() {
  const [user, setUser] = useState({
    emailId: "",
    password: "",
  });
  useEffect(() => {
    signOut(auth);
    localStorage.clear();
  }, []);
  const handleChangeForm = (event) => {
    let newInput = { [event.target.name]: event.target.value };
    setUser({ ...user, ...newInput });
  };
  onAuthStateChanged(auth, (user) => {
    if (user && user.emailVerified && user.displayName === "Employer") {
      window.location.href = "/searchResults";
    } else if (user && user.emailVerified && user.displayName === null) {
      window.location.href = "/uploadDocuments";
    } else if (user && user.emailVerified && user.displayName === "Employee") {
      window.location.href = "/profile";
    }
  });
  function login() {
    try {
      setPersistence(auth, browserSessionPersistence).then(() => {
        signInWithEmailAndPassword(auth, user.emailId, user.password).catch(
          (error) => {
            if (error.message === "Firebase: Error (auth/user-not-found).") {
              alert("User not Found. Sign Up first !!");
            } else if (
              error.message === "Firebase: Error (auth/wrong-password)."
            ) {
              alert("Wrong Password");
            }
          }
        );
        if (!auth.currentUser.emailVerified) {
          alert("User not verified yet !!!");
          window.location.href = "/emailVerification";
        }
      });
    } catch (error) {
      alert("User not Found. Sign Up first !!");
    }
  }

  return (
    <div>
      <NavBar />
      <div className="main">
        <section className="home-login">
          <Container fluid>
            <Row className="justify-content-center align-items-center">
              <Col md={6}>
                <Image
                  src={home_bg}
                  alt=""
                  style={{ position: "relative", top: "10px", width: "50vw" }}
                  className="image-fluid"
                />
              </Col>
              <Col md={6}>
                <Row>
                  <Col md={3}>&nbsp;</Col>
                  <Col md={6}>
                    <div className="loginwrap">
                      <div className="text-center">
                        <h4 className="mb-5">Login to your account</h4>
                      </div>
                      <form action="">
                        <Row className="form-group">
                          <Col md={12}>
                            <Form.Control
                              type="text"
                              name="emailId"
                              onChange={handleChangeForm}
                              className="form-control"
                              defaultValue={user.emailId}
                              placeholder="Email address"
                            />
                          </Col>
                        </Row>
                        <br />
                        <Row className="form-group">
                          <Col md={12}>
                            <Form.Control
                              type="password"
                              name="password"
                              onChange={handleChangeForm}
                              defaultValue={user.password}
                              className="form-control"
                              placeholder="Password"
                            />
                          </Col>
                        </Row>
                        <br />
                        <Row className="form-group">
                          <Col md={12}>
                            <p className="mt-2 forgot-label">
                              Forgot password?
                              <a
                                href="/forgotPassword"
                                className="text-green">
                                <strong>click here</strong>
                              </a>
                            </p>
                          </Col>
                        </Row>
                        <br />
                        <Row className="form-group">
                          <Col md={12}>
                            <Button
                              onClick={login}
                              variant="success"
                              className="mt-4 w-100">
                              Login
                            </Button>
                          </Col>
                        </Row>
                      </form>
                    </div>
                  </Col>
                  <Col md={3}>&nbsp;</Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="gray-bg ourservice pt-pb-50">
          <Container>
            <div className="text-center">
              <h3 className="section-main-title">
                Eprehenderit in voluptate velit esse cillum
              </h3>
            </div>
            <Row>
              <Col
                md={3}
                className="text-center">
                <div className="s-icon">
                  <Image
                    src={search_icon}
                    alt=""
                    className="mb-4"
                  />
                </div>
                <div className="s-title">
                  <h5>Voluptas sit aspernatu</h5>
                </div>
              </Col>
              <Col
                md={3}
                className="text-center">
                <div className="s-icon">
                  <Image
                    src={chat_icon}
                    alt=""
                    className="mb-4"
                  />
                </div>
                <div className="s-title">
                  <h5>Voluptas sit aspernatu</h5>
                </div>
              </Col>
              <Col
                md={3}
                className="text-center">
                <div className="s-icon">
                  <Image
                    src={work_icon}
                    alt=""
                    className="mb-4"
                  />
                </div>
                <div className="s-title">
                  <h5>Voluptas sit aspernatu</h5>
                </div>
              </Col>
              <Col
                md={3}
                className="text-center">
                <div className="s-icon">
                  <Image
                    src={simple_work_icon}
                    alt=""
                    className="mb-4"
                  />
                </div>
                <div className="s-title">
                  <h5>Voluptas sit aspernatu</h5>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="green-bg pt-pb-50 signup-green">
          <Container>
            <Row className="justify-content-center align-items-center mt-4">
              <Col md={2}>
                <Image
                  src={youtube_searched_icon}
                  alt=""
                  width="180"
                />
              </Col>
              <Col md={8}>
                <div className="text-center">
                  <h3 className="section-main-title mt-5">
                    Eprehenderit in voluptate velit esse cillum
                  </h3>
                </div>
                <div className="text-center">
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia
                    <br />
                    consequuntur magni dolores eos qui ratione voluptatem sequ.
                  </p>
                  <Button
                    href="/signUp"
                    variant="light"
                    className="w-50 mt-4 mb-4">
                    Sign up
                  </Button>
                </div>
              </Col>
              <div className="col-md-2">
                <Image
                  src={search_dollar_icon}
                  alt=""
                  width="180"
                />
              </div>
            </Row>
          </Container>
        </section>
      </div>
      <Footer />
    </div>
  );
}
