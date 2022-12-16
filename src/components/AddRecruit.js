import React, { useEffect, useState } from "react";
import NavBar3 from "./Navs/NavBar3";
import Footer from "./Footer/Footer";
import { Button, Col, Container, Row, Form } from "react-bootstrap";
import { storage, database, auth, auth2 } from "../firebase-config.js";
import { arrayUnion, doc, setDoc, updateDoc } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import moment from "moment";
import { Link } from "react-router-dom";

export default function AddRecruit() {
  const [recruit, setRecruit] = useState({
    name: "",
    dateOfBirth: "",
    dateJoined: "",
    designation: "",
    location: "",
    salary: "",
    offerLetter: "",
    bonus: "",
    emailId: "",
    phoneNumber: "",
  });
  const [file, setFile] = useState({ name: "Upload Offer Letter" });
  const [counter, setCounter] = useState(1);
  const [disabledButton, setDisabledButton] = useState(false);
  const [info, setInfo] = useState([]);

  const handleChange = (event) => {
    let newInput = { [event.target.name]: event.target.value };
    setRecruit({ ...recruit, ...newInput });
  };
  const handleSubmit = () => {
    if (recruit.offerLetter) registerRecruit();
  };

  const handleContinueButton = (event) => {
    setCounter(counter + 1);
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("currentUserDetails"));
    if (items) {
      setInfo(items);
    }
  }, []);
  onAuthStateChanged(auth, (user) => {
    if (user) {
    } else {
      window.location.href = "/";
    }
  });
  function handleFileChange(event) {
    if (
      event.target.files[0] &&
      event.target.files[0].type === "application/pdf"
    ) {
      setFile(event.target.files[0]);
      handleUpload(event.target.files[0]);
    } else {
      alert("Upload .pdf file !!!");
    }
  }

  function handleUpload(file) {
    const offerLetterRef = ref(
      storage,
      "/offerLetters/" + recruit.emailId + "/" + file.name
    );
    uploadBytes(offerLetterRef, file)
      .then(() => {
        getDownloadURL(offerLetterRef)
          .then((url) => {
            recruit.offerLetter = url;
          })
          .catch((err) => {
            console.log(err.message);
          });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  const registerLogin = () => {
    createUserWithEmailAndPassword(
      auth2,
      recruit.emailId,
      recruit.dateOfBirth
    ).then((cred) => {
      auth2.signOut();
    });
  };

  const registerRecruit = async () => {
    const docData = {
      name: recruit.name,
      companyName: info.companyName,
      companyId: auth.currentUser.uid,
      companyLogo: info.profileImage,
      dateOfBirth: recruit.dateOfBirth,
      dateJoined: recruit.dateJoined,
      designation: recruit.designation,
      location: recruit.location,
      salary: recruit.salary,
      bonus: recruit.bonus,
      offerLetter: recruit.offerLetter,
      emailId: recruit.emailId,
      phoneNumber: recruit.phoneNumber,
    };
    await setDoc(doc(database, "recruit", recruit.emailId), docData)
      .then(() => {
        registerLogin();
        setDisabledButton(true);
        updateDoc(doc(database, "companies", auth.currentUser.uid), {
          recruits: arrayUnion(recruit.emailId),
        })
          .then(() => {
            window.location.href = "/searchResults";
          })
          .catch((err) => {
            setDoc(doc(database, "companies", auth.currentUser.uid), {
              recruits: arrayUnion(recruit.emailId),
            })
              .then(() => {
                window.location.href = "/searchResults";
              })
              .catch((err) => {
                console.log(err.message);
              });
          });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div>
      <Container>
        <Row>
          <NavBar3 />
          <main id="main">
            <section className="addemployee-form-wrap">
              <Container>
                <Row>
                  <Col md={12}>
                    <div
                      className="text-left"
                      style={{ marginTop: "80px" }}>
                      <Link to={"/searchResults"}>
                        <Button variant="success">Back</Button>
                      </Link>
                    </div>
                    <Row className="justify-content-center align-items-center">
                      <Col
                        md={6}
                        className="text-left ml-auto mr-auto">
                        <div
                          className="addemp-emp"
                          style={{
                            marginTop: "150px",
                          }}>
                          <div className="text-center">
                            <h3 className="section-main-title mb-3">
                              Add New Recruit
                              {/* {user.email} */}
                            </h3>
                            <p className="mb-4">
                              Nemo enim ipsam voluptatem quia voluptas sit
                              <br />
                              aspernatur aut odit aut fugit.
                            </p>
                          </div>
                          <div
                            className="recruit-add-form "
                            style={{
                              display: counter === 1 ? "block" : "none",
                            }}>
                            <Row className="form-group">
                              <Col md={12}>
                                <Form.Group
                                  className="mb-3"
                                  controlId="formBasicName">
                                  <Form.Control
                                    type="text"
                                    required
                                    name="name"
                                    placeholder="Name"
                                    defaultValue={recruit.name}
                                    onChange={handleChange}
                                  />
                                </Form.Group>
                              </Col>
                            </Row>

                            <Row className="form-group">
                              <Col md={12}>
                                <Form.Group
                                  className="mb-3"
                                  controlId="formBasicName">
                                  <Form.Control
                                    type="date"
                                    required
                                    max={moment().format("YYYY-MM-DD")}
                                    placeholder={
                                      recruit.dateOfBirth === ""
                                        ? "Date Of Birth*"
                                        : recruit.dateOfBirth
                                    }
                                    name="dateOfBirth"
                                    defaultValue={recruit.dateOfBirth}
                                    onChange={handleChange}
                                  />
                                  <div className="input-down-angle-icon"></div>
                                </Form.Group>
                              </Col>
                            </Row>
                            <Row className="form-group">
                              <Col md={12}>
                                <Form.Group
                                  className="mb-3"
                                  controlId="formBasicName">
                                  <Form.Control
                                    type="date"
                                    max={moment().format("YYYY-MM-DD")}
                                    required
                                    placeholder={
                                      recruit.dateJoined === ""
                                        ? "Date Of Joining*"
                                        : recruit.dateJoined
                                    }
                                    name="dateJoined"
                                    defaultValue={recruit.dateJoined}
                                    onChange={handleChange}
                                  />
                                  <div className="input-down-angle-icon"></div>
                                </Form.Group>
                              </Col>
                            </Row>
                            <Row className="form-group">
                              <Col md={12}>
                                <Form.Group className="mb-3">
                                  <Form.Control
                                    type="text"
                                    required
                                    name="designation"
                                    placeholder="Designation*"
                                    defaultValue={recruit.designation}
                                    onChange={handleChange}
                                  />
                                </Form.Group>
                              </Col>
                            </Row>
                            <Row className="form-group">
                              <Col md={12}>
                                <Form.Group
                                  className="mb-3"
                                  controlId="formBasicName">
                                  <Form.Control
                                    type="text"
                                    required
                                    name="location"
                                    placeholder="Location*"
                                    defaultValue={recruit.location}
                                    onChange={handleChange}
                                  />
                                  <Form.Text className="text-muted"></Form.Text>
                                </Form.Group>
                              </Col>
                            </Row>
                            <Row className="form-group">
                              <Col md={12}>
                                <Form.Group
                                  className="mb-3"
                                  controlId="formBasicName">
                                  <Form.Control
                                    type="number"
                                    required
                                    name="salary"
                                    placeholder="Salary*"
                                    defaultValue={recruit.salary}
                                    onChange={handleChange}
                                  />
                                  <Form.Text className="text-muted"></Form.Text>
                                </Form.Group>
                              </Col>
                            </Row>
                            <Row className="form-group">
                              <Col md={12}>
                                <Form.Group
                                  onChange={handleChange}
                                  controlId="formFile"
                                  className="mb-3">
                                  <Row>
                                    <Col md="auto">
                                      <Form.Label className="mb-2">
                                        Bonus
                                      </Form.Label>
                                    </Col>
                                    <Col md="auto">
                                      <Form.Check
                                        type="radio"
                                        name="bonus"
                                        label="Yes"
                                        value="Yes"
                                        aria-label="radio"
                                        id="inline-radio-1"
                                      />
                                    </Col>
                                    <Col md="auto">
                                      <Form.Check
                                        type="radio"
                                        label="No"
                                        name="bonus"
                                        value="No"
                                        aria-label="radio"
                                        id="inline-radio-2"
                                      />
                                    </Col>
                                  </Row>
                                </Form.Group>
                              </Col>
                            </Row>
                            <Row className="form-group">
                              <Col md={12}>
                                <Form.Group
                                  controlId="formFile"
                                  className="mb-3 recruit-file">
                                  <Form.Label className="mb-2 label">
                                    {file !== null
                                      ? file.name
                                      : "Upload Offer Letter"}
                                    <span className="label-icon">
                                      <i className="fa-solid fa-plus"></i>
                                    </span>
                                  </Form.Label>
                                  <Form.Control
                                    className="mb-2"
                                    type="file"
                                    accept=".pdf"
                                    name="file"
                                    onChange={handleFileChange}
                                  />
                                </Form.Group>
                              </Col>
                            </Row>
                            <Row className="form-group">
                              <Col
                                md={12}
                                className="mt-4">
                                <Button
                                  disabled={disabledButton}
                                  onClick={handleContinueButton}
                                  variant="success"
                                  className="w-100">
                                  Continue
                                </Button>
                              </Col>
                            </Row>
                          </div>
                          <div
                            className="addemp-form"
                            style={{
                              display: counter === 2 ? "block" : "none",
                            }}>
                            <Row className="form-group">
                              <Col md={12}>
                                <Form.Group
                                  className="mb-3"
                                  controlId="formBasicName">
                                  <Form.Control
                                    type="text"
                                    required
                                    name="emailId"
                                    placeholder="Recruit's Email*"
                                    defaultValue={recruit.emailId}
                                    onChange={handleChange}
                                  />
                                </Form.Group>
                              </Col>
                            </Row>
                            <Row className="form-group">
                              <Col md={12}>
                                <Form.Group
                                  className="mb-3"
                                  controlId="formBasicName">
                                  <Form.Control
                                    type="text"
                                    required
                                    placeholder="Recruits's Phone Number*"
                                    name="phoneNumber"
                                    defaultValue={recruit.phoneNumber}
                                    onChange={handleChange}
                                  />
                                </Form.Group>
                              </Col>
                            </Row>
                            <Row className="form-group">
                              <Col
                                md={12}
                                className="mt-4">
                                <Button
                                  disabled={disabledButton}
                                  onClick={handleSubmit}
                                  variant="success"
                                  className="w-100">
                                  Send Offer Letter{" "}
                                  <i className="fa-solid fa-circle-arrow-right fa-1x"></i>
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
          <p />
          <p />
          <Footer />
        </Row>
      </Container>
    </div>
  );
}
