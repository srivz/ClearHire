import React, { useState } from "react";
import NavBar2 from "./Navs/NavBar2";
import Footer from "./Footer/Footer";
import { Button, Col, Container, Row, Form } from "react-bootstrap";
import { storage, database, auth } from "../firebase-config.js";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { onAuthStateChanged } from "firebase/auth";

export default function AddRecruit() {
  const [recruit, setRecruit] = useState({
    name: "",
    dateOfBirth: "",
    dateJoined: "",
    designation: "",
    location: "",
    salary: "",
    adhaarCardNumber: "",
    offerLetter: "",
    bonus: "",
  });
  const [file, setFile] = useState({ name: "Upload Offer Letter" });
  const [disabledButton, setDisabledButton] = useState(false);
  const [info, setInfo] = useState([]);

  const handleChange = (event) => {
    let newInput = { [event.target.name]: event.target.value };
    setRecruit({ ...recruit, ...newInput });
  };
  const handleSubmit = () => {
    if (recruit.offerLetter) registerRecruit();
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      getDoc(doc(database, "users", uid)).then((doc) => {
        setInfo({ ...doc.data(), id: doc.id });
      });
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
      "/offerLetters/" + recruit.adhaarCardNumber + "/" + file.name
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
  const registerRecruit = async () => {
    const docData = {
      name: recruit.name,
      companyName: info.companyName,
      companyLogo: info.profileImage,
      dateOfBirth: recruit.dateOfBirth,
      dateJoined: recruit.dateJoined,
      designation: recruit.designation,
      location: recruit.location,
      salary: recruit.salary,
      bonus: recruit.bonus,
      offerLetter: recruit.offerLetter,
    };
    await setDoc(
      doc(
        database,
        "companies",
        auth.currentUser.uid,
        "recruit",
        recruit.adhaarCardNumber
      ),
      docData
    )
      .then(() => {
        setDisabledButton(true);
        // updateDoc(doc(database, "employees", recruit.adhaarCardNumber), {
        //   companies: arrayUnion(auth.currentUser.uid),
        // })
        //   .then(() => {
        window.location.href = "/addRecruit/send";
        // })
        // .catch((err) => {
        //   setDoc(doc(database, "employees", recruit.adhaarCardNumber), {
        //     companies: arrayUnion(auth.currentUser.uid),
        //   })
        //     .then(() => {
        //       window.location.href = "/searchResults";
        //     })
        //     .catch((err) => {
        //       console.log(err.message);
        //     });
        // });
      })
      .catch((err) => {
        console.log(err.message);
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
                              Add New Recruit
                              {/* {user.email} */}
                            </h3>
                            <p className="mb-4">
                              Nemo enim ipsam voluptatem quia voluptas sit
                              <br />
                              aspernatur aut odit aut fugit.
                            </p>
                          </div>
                          <div className="recruit-add-form ">
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
                                  className="mb-3 dob"
                                  controlId="formBasicName">
                                  <Form.Control
                                    type="date"
                                    required
                                    placeholder={
                                      recruit.dateOfBirth === ""
                                        ? "Date Of Birth*"
                                        : recruit.dateOfBirth
                                    }
                                    name="dateOfBirth"
                                    defaultValue={recruit.dateOfBirth}
                                    onChange={handleChange}
                                  />
                                  <div class="input-down-angle-icon"></div>
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
                                    placeholder={
                                      recruit.dateJoined === ""
                                        ? "Date Of Joined*"
                                        : recruit.dateJoined
                                    }
                                    name="dateJoined"
                                    defaultValue={recruit.dateJoined}
                                    onChange={handleChange}
                                  />
                                  <div class="input-down-angle-icon"></div>
                                </Form.Group>
                              </Col>
                            </Row>
                            <Row className="form-group">
                              <Col md={12}>
                                <Form.Group className="mb-3">
                                  <Form.Select
                                    required
                                    name="designation"
                                    placeholder="Designation*"
                                    className="form-control select"
                                    defaultValue={recruit.designation}
                                    onChange={handleChange}>
                                    <option
                                      value=""
                                      hidden>
                                      Designation*
                                    </option>
                                    <option value="Developer">Developer</option>
                                    <option value="Sr. Developer">
                                      Sr. Developer
                                    </option>
                                    <option value="Tester">Tester</option>
                                  </Form.Select>
                                  <div class="input-down-angle-icon">
                                    <div class="input-down-angle-icon-hide"></div>
                                  </div>
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
                                    minLength={"12"}
                                    maxLength={"12"}
                                    name="adhaarCardNumber"
                                    placeholder="Adhaar Card Number*"
                                    defaultValue={recruit.linkedIn}
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
                                    type="text"
                                    required
                                    name="location"
                                    placeholder="Location*"
                                    defaultValue={recruit.linkedIn}
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
                                  onClick={handleSubmit}
                                  variant="success"
                                  className="w-100">
                                  Continue
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