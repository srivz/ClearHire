import React, { useState } from "react";
import Footer from "./Footer/Footer";
import check_icon from "../assets/img/check-icon.svg";
import next_icon from "../assets/img/next-icon.svg";
import previous_icon from "../assets/img/previous-icon.svg";
import NavBar1 from "./Navs/NavBar1";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import { storage, database, auth } from "../firebase-config.js";
import { doc, setDoc } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

export default function SignUpWithEmail() {
  const [user, setUser] = useState({
    name: "",
    companyName: "",
    website: "",
    yourDesignation: "",
    profileImage: "",
    yearStarted: "",
  });
  const [userLog, setUserLog] = useState({
    emailId: "",
    password: "",
    confirmPassword: "",
  });
  const [counter, setCounter] = useState(1);
  const [file, setFile] = useState(null);
  const [userId, setUserId] = useState(null);
  const [url, setUrl] = useState(
    "https://firebasestorage.googleapis.com/v0/b/clearhire-28c23.appspot.com/o/profileImages%2FSD-default-image.png?alt=media&token=065c9d85-44ad-4015-8806-d16d3919bc04"
  );
  const [disabledButton, setDisabledButton] = useState(false);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      registerUser();
    }
  });
  const registerLogin = () => {
    createUserWithEmailAndPassword(
      auth,
      userLog.emailId,
      userLog.password
    ).then((cred) => {
      setUserId(cred.user.uid);
    });
  };
  const registerUser = () => {
    setDoc(doc(database, "users", userId), user).then(() =>
      setDoc(doc(database, "companies", userId), {}).then(
        () => (window.location.href = "/emailVerification")
      )
    );
  };

  const handleNextButton = (event) => {
    setCounter(counter + 1);
  };
  const handleBackButton = (event) => {
    if (counter === 1) {
      return;
    } else setCounter(counter - 1);
  };
  const handleChange = (event) => {
    let newInput = { [event.target.name]: event.target.value };
    setUser({ ...user, ...newInput });
  };
  const handleChangeLog = (event) => {
    let newInput1 = { [event.target.name]: event.target.value };
    setUserLog({ ...userLog, ...newInput1 });
  };
  function handleFileChange(event) {
    if (
      event.target.files[0] &&
      (event.target.files[0].type === "image/png" ||
        event.target.files[0].type === "image/jpeg" ||
        event.target.files[0].type === "image/jpg" ||
        event.target.files[0].type === "image/bmp" ||
        event.target.files[0].type === "image/gif" ||
        event.target.files[0].type === "image/webp")
    ) {
      setFile(event.target.files[0]);
      handleUpload(event.target.files[0]);
    } else {
      alert("Upload .png, .jpg, .jpeg, .bmp, .gif, .webp files only.");
    }
  }
  function handleUpload(file) {
    const imageRef = ref(
      storage,
      `/profileImages/${user.companyName}/${user.name}/${file.name}`
    );
    uploadBytes(imageRef, file)
      .then(() => {
        getDownloadURL(imageRef)
          .then((url) => {
            setUrl(url);
            user.profileImage = url;
          })
          .catch((err) => {
            console.log(err.message);
          });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  const handleSubmit = (event) => {
    if (userLog.password < 6) {
      alert("Password should be atleast 6 characters!!!");
    } else {
      user.profileImage = url;
      if (userLog.password === userLog.confirmPassword) {
        setDisabledButton(true);
        registerLogin();
      } else {
        alert("Passwords does not match!!");
      }
    }
  };

  return (
    <div>
      <NavBar1 />
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
                        className={"step-" + counter}
                        id="checkout-progress"
                        data-current-step={counter}>
                        <div className="progress-bar">
                          <div
                            className={
                              counter >= 1
                                ? "step step-1 active"
                                : "step step-1"
                            }></div>
                          <div
                            className={
                              counter >= 2
                                ? "step step-2 active"
                                : "step step-2"
                            }></div>
                          <div
                            className={
                              counter >= 3
                                ? "step step-3 active"
                                : "step step-3"
                            }></div>
                          <div
                            className={
                              counter >= 4
                                ? "step step-4 active"
                                : "step step-4"
                            }></div>
                          <div
                            className={
                              counter >= 5
                                ? "step step-5 active"
                                : "step step-5"
                            }></div>
                          <div
                            className={
                              counter >= 6
                                ? "step step-6 active"
                                : "step step-6"
                            }></div>
                          <div
                            className={
                              counter >= 7
                                ? "step step-7 active"
                                : "step step-7"
                            }></div>
                          <div
                            className={
                              counter >= 8
                                ? "step step-8 active"
                                : "step step-8"
                            }></div>
                          <div
                            className={
                              counter >= 9
                                ? "step step-9 active"
                                : "step step-9"
                            }></div>
                        </div>
                      </div>

                      <section
                        id="section1"
                        className="section1"
                        style={{
                          display: counter === 1 ? "block" : "none",
                        }}>
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
                              <Form.Label>Enter your name</Form.Label>
                              <div className="input-group">
                                <Form.Control
                                  type="text"
                                  required
                                  name="name"
                                  defaultValue={user.name}
                                  onChange={handleChange}
                                />
                                <Form.Text className="text-muted"></Form.Text>
                              </div>
                            </Form.Group>
                          </Col>
                        </Row>
                      </section>

                      <section
                        id="section2"
                        className="section2"
                        style={{
                          display: counter === 2 ? "block" : "none",
                        }}>
                        <Row>
                          <Col md={12}>
                            <h3 className="section-main-title mb-3">
                              Welcome to{" "}
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
                              controlId="formBasicCompanyName">
                              <Form.Label>Company name</Form.Label>
                              <div className="input-group">
                                <Form.Control
                                  type="text"
                                  required
                                  name="companyName"
                                  defaultValue={user.companyName}
                                  onChange={handleChange}
                                />
                                <Form.Text className="text-muted"></Form.Text>
                              </div>
                            </Form.Group>
                          </Col>
                        </Row>
                      </section>

                      <section
                        id="section3"
                        className="section3"
                        style={{
                          display: counter === 3 ? "block" : "none",
                        }}>
                        <Row>
                          <Col md={12}>
                            <h3 className="section-main-title mb-3">
                              Welcome to{" "}
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
                              controlId="formBasicWebsite">
                              <Form.Label>Website</Form.Label>
                              <div className="input-group">
                                <Form.Control
                                  type="text"
                                  required
                                  name="website"
                                  defaultValue={user.website}
                                  onChange={handleChange}
                                />
                                <Form.Text className="text-muted"></Form.Text>
                              </div>
                            </Form.Group>
                          </Col>
                        </Row>
                      </section>

                      <section
                        id="section4"
                        className="section4"
                        style={{
                          display: counter === 4 ? "block" : "none",
                        }}>
                        <Row>
                          <Col md={12}>
                            <h3 className="section-main-title mb-3">
                              Welcome to{" "}
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
                            <Form.Group className="mb-3">
                              <Form.Label>Your Designation</Form.Label>

                              <div className="input-group">
                                <Form.Control
                                  type="text"
                                  required
                                  name="yourDesignation"
                                  defaultValue={user.yourDesignation}
                                  onChange={handleChange}
                                />
                              </div>
                            </Form.Group>
                          </Col>
                        </Row>
                      </section>

                      <section
                        id="section5"
                        className="section5"
                        style={{
                          display: counter === 5 ? "block" : "none",
                        }}>
                        <Row>
                          <Col md={12}>
                            <h3 className="section-main-title mb-3">
                              Welcome to{" "}
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
                            <Row>
                              <Col md={12}>
                                <Form.Group
                                  controlId="formFile"
                                  className="mb-3 user-file">
                                  <Form.Label className="mb-2 label">
                                    {file !== null
                                      ? file.name
                                      : "Upload your Company Logo*"}
                                    <span className="label-icon">
                                      <i className="fa-solid fa-plus"></i>
                                    </span>
                                  </Form.Label>
                                  <Form.Control
                                    className="mb-2"
                                    type="file"
                                    accept=".png,.jpg,.jpeg,.bmp,.gif,.webp"
                                    name="file"
                                    onChange={handleFileChange}
                                  />
                                </Form.Group>
                              </Col>
                            </Row>
                            <div className="beforeuploadpic">
                              <Image
                                src={url}
                                alt=""
                              />
                            </div>
                          </Col>
                        </Row>
                      </section>

                      <section
                        id="section6"
                        className="section6"
                        style={{
                          display: counter === 6 ? "block" : "none",
                        }}>
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
                            <Form.Group className="mb-3">
                              <Form.Label>Year Started</Form.Label>
                              <div className="input-group">
                                <Form.Control
                                  required
                                  type="number"
                                  min="1001"
                                  max="9999"
                                  name="yearStarted"
                                  defaultValue={user.yearStarted}
                                  onChange={handleChange}
                                  className="form-control"
                                />
                              </div>
                            </Form.Group>
                          </Col>
                        </Row>
                      </section>

                      <section
                        id="section7"
                        className="section7"
                        style={{
                          display: counter === 7 ? "block" : "none",
                        }}>
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
                            <Form.Group className="mb-3">
                              <Form.Label>Email ID</Form.Label>
                              <div className="input-group">
                                <Form.Control
                                  required
                                  type="email"
                                  name="emailId"
                                  defaultValue={userLog.emailId}
                                  onChange={handleChangeLog}
                                  className="form-control"
                                />
                                <Form.Text className="text-muted"></Form.Text>
                              </div>
                            </Form.Group>
                          </Col>
                        </Row>
                      </section>

                      <section
                        id="section8"
                        className="section8"
                        style={{
                          display: counter === 8 ? "block" : "none",
                        }}>
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
                            <Form.Group className="mb-3">
                              <Form.Label>Password</Form.Label>
                              <div className="input-group">
                                <Form.Control
                                  required
                                  type="password"
                                  name="password"
                                  defaultValue={userLog.password}
                                  onChange={handleChangeLog}
                                  className="form-control"
                                />
                                <Form.Text className="text-muted"></Form.Text>
                              </div>
                            </Form.Group>
                          </Col>
                        </Row>
                      </section>

                      <section
                        id="section9"
                        className="section9"
                        style={{
                          display: counter === 9 ? "block" : "none",
                        }}>
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
                            <Form.Group className="mb-3">
                              <Form.Label>Confirm Password</Form.Label>
                              <div className="input-group">
                                <Form.Control
                                  required
                                  type="password"
                                  name="confirmPassword"
                                  defaultValue={userLog.confirmPassword}
                                  onChange={handleChangeLog}
                                  className="form-control"
                                />
                                <Form.Text className="text-muted"></Form.Text>
                              </div>
                            </Form.Group>
                          </Col>
                        </Row>
                      </section>

                      <div className="button-container">
                        <Row>
                          <Col sm={6}>
                            <Button
                              className="btn btn-prev"
                              disabled={counter === 1 || disabledButton}
                              onClick={handleBackButton}>
                              <Image
                                src={previous_icon}
                                alt=""
                              />
                            </Button>
                          </Col>
                          <Col sm={counter === 9 ? 0 : 6}>
                            <Button
                              // disabled={counter === 5 && url === null}
                              className="btn btn-next"
                              onClick={handleNextButton}
                              style={{
                                display: counter === 9 ? "none" : "block",
                              }}>
                              <Image
                                src={next_icon}
                                alt=""
                              />
                            </Button>
                            <Button
                              disabled={disabledButton}
                              className="btn btn-submit"
                              onClick={handleSubmit}
                              style={{
                                display: counter === 9 ? "block" : "none",
                              }}>
                              <Image
                                src={check_icon}
                                alt=""
                              />
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
      <br />
      <Footer />
    </div>
  );
}
