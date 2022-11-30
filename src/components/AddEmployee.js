import React, { useState } from "react";
import image_icon from "../assets/img/image-icon.svg";
import NavBar2 from "./Navs/NavBar2";
import Footer from "./Footer/Footer";
import { Button, Col, Container, Image, Row, Form } from "react-bootstrap";
import { storage, database, auth } from "../firebase-config.js";
import { doc, updateDoc, setDoc, arrayUnion, getDoc } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { RatingStar } from "rating-star";
import { onAuthStateChanged } from "firebase/auth";

export default function AddEmployee() {
  const [employee, setEmployee] = useState({
    name: "",
    employeeImage: "",
    dateOfBirth: "",
    dateJoined: "",
    designation: "",
    linkedIn: "",
    salary: "",
    adhaarCardNumber: "",
    recommendationFrom: "",
    recommenderDesignation: "",
    recommendationMessage: "",
    communication: 1,
    attitude: 1,
    abilityToLearn: 1,
    punctuality: 1,
    commitment: 1,
    trustworthiness: 1,
    skill: 1,
    teamPlayer: 1,
  });
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState(null);
  const [disabledButton, setDisabledButton] = useState(false);
  const [info, setInfo] = useState([]);

  const handleChange = (event) => {
    let newInput = { [event.target.name]: event.target.value };
    setEmployee({ ...employee, ...newInput });
  };
  const handleSubmit = () => {
    setDisabledButton(true);
    registerEmployee();
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
    if (event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  }
  function handleUpload() {
    const imageRef = ref(storage, `/employeeImages/${file.name}`);
    uploadBytes(imageRef, file)
      .then(() => {
        getDownloadURL(imageRef)
          .then((url) => {
            setUrl(url);
            employee.employeeImage = url;
          })
          .catch((err) => {
            console.log(err.message);
          });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  const registerEmployee = async () => {
    const docData = {
      name: employee.name,
      companyName: info.companyName,
      employeeImage: employee.employeeImage,
      dateOfBirth: employee.dateOfBirth,
      dateJoined: employee.dateJoined,
      designation: employee.designation,
      linkedIn: employee.linkedIn,
      salary: employee.salary,
      recommendation: {
        recommendationFrom: employee.recommendationFrom,
        recommenderDesignation: employee.recommenderDesignation,
        recommendationMessage: employee.recommendationMessage,
      },
      rating: {
        communication: employee.communication,
        attitude: employee.attitude,
        abilityToLearn: employee.abilityToLearn,
        punctuality: employee.punctuality,
        commitment: employee.commitment,
        trustworthiness: employee.trustworthiness,
        skill: employee.skill,
        teamPlayer: employee.teamPlayer,
      },
      favourite: "false",
    };
    await setDoc(
      doc(
        database,
        "companies",
        auth.currentUser.uid,
        "employees",
        employee.adhaarCardNumber
      ),
      docData
    )
      .then(() => {
        updateDoc(doc(database, "employees", employee.adhaarCardNumber), {
          companies: arrayUnion(auth.currentUser.uid),
        })
          .then(() => {
            window.location.href = "/searchResults";
          })
          .catch((err) => {
            setDoc(doc(database, "employees", employee.adhaarCardNumber), {
              companies: arrayUnion(auth.currentUser.uid),
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
  const onCommunicationRatingChange = (score) => {
    let newInput = { communication: score };
    setEmployee({ ...employee, ...newInput });
  };
  const onAttitudeRatingChange = (score) => {
    let newInput = { attitude: score };
    setEmployee({ ...employee, ...newInput });
  };
  const onAbilityToLearnRatingChange = (score) => {
    let newInput = { abilityToLearn: score };
    setEmployee({ ...employee, ...newInput });
  };
  const onPunctualityRatingChange = (score) => {
    let newInput = { punctuality: score };
    setEmployee({ ...employee, ...newInput });
  };
  const onCommitmentRatingChange = (score) => {
    let newInput = { commitment: score };
    setEmployee({ ...employee, ...newInput });
  };
  const onTrustworthinessRatingChange = (score) => {
    let newInput = { trustworthiness: score };
    setEmployee({ ...employee, ...newInput });
  };
  const onSkillRatingChange = (score) => {
    let newInput = { skill: score };
    setEmployee({ ...employee, ...newInput });
  };
  const onTeamPlayerRatingChange = (score) => {
    let newInput = { teamPlayer: score };
    setEmployee({ ...employee, ...newInput });
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
                              Add new emloyee
                              {/* {user.email} */}
                            </h3>
                            <p className="mb-4">
                              Nemo enim ipsam voluptatem quia voluptas sit
                              <br />
                              aspernatur aut odit aut fugit.
                            </p>
                          </div>
                          <div className="addemp-form">
                            <Row className="form-group">
                              <Col md={12}>
                                <Row className="align-items-center"></Row>
                                <br />
                                <div className="beforeuploadpic">
                                  <Image
                                    src={url === "" ? image_icon : url}
                                    alt=""
                                  />
                                </div>
                              </Col>
                            </Row>
                            <Row className="form-group">
                              <Col md={12}>
                                <Form.Group
                                  className="mb-3"
                                  controlId="formBasicName">
                                  <Form.Label>Employee Name*</Form.Label>
                                  <Form.Control
                                    type="text"
                                    required
                                    name="name"
                                    placeholder="Employee Name"
                                    defaultValue={employee.name}
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
                                  <Form.Label>Date Of Birth*</Form.Label>
                                  <Form.Control
                                    type="date"
                                    required
                                    name="dateOfBirth"
                                    defaultValue={employee.dateOfBirth}
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
                                  <Form.Label>Date Of Joining*</Form.Label>
                                  <Form.Control
                                    type="date"
                                    required
                                    name="dateJoined"
                                    defaultValue={employee.dateJoined}
                                    onChange={handleChange}
                                  />
                                </Form.Group>
                              </Col>
                            </Row>
                            <Row className="form-group">
                              <Col md={12}>
                                <Form.Group className="mb-3">
                                  <Form.Label>Designation*</Form.Label>
                                  <Form.Select
                                    required
                                    name="designation"
                                    className="form-control"
                                    aria-label="Default select example"
                                    defaultValue={employee.designation}
                                    onChange={handleChange}>
                                    <option value=""></option>
                                    <option value="Developer">Developer</option>
                                    <option value="Sr. Developer">
                                      Sr. Developer
                                    </option>
                                    <option value="Tester">Tester</option>
                                  </Form.Select>
                                </Form.Group>
                              </Col>
                            </Row>
                            <Row className="form-group">
                              <Col md={12}>
                                <Form.Group
                                  controlId="formFile"
                                  className="mb-3">
                                  <Form.Label>Employee Photo*</Form.Label>
                                  <Row>
                                    <Col sm={9}>
                                      <Form.Control
                                        className="mb-2"
                                        type="file"
                                        name="file"
                                        onChange={handleFileChange}
                                      />
                                    </Col>
                                    <Col sm={3}>
                                      <Button
                                        className="mb-2"
                                        onClick={handleUpload}>
                                        Upload
                                      </Button>
                                    </Col>
                                  </Row>
                                </Form.Group>
                              </Col>
                            </Row>
                            <Row className="form-group">
                              <Col md={12}>
                                <Form.Group
                                  className="mb-3"
                                  controlId="formBasicName">
                                  <Form.Label>Adhaar Card Number</Form.Label>
                                  <Form.Control
                                    type="number"
                                    required
                                    minLength={"12"}
                                    maxLength={"12"}
                                    name="adhaarCardNumber"
                                    placeholder="Adhaar Card Number"
                                    defaultValue={employee.linkedIn}
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
                                  <Form.Label>LinkedIn url*</Form.Label>
                                  <Form.Control
                                    type="text"
                                    required
                                    name="linkedIn"
                                    placeholder="LinkedIn url"
                                    defaultValue={employee.linkedIn}
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
                                  <Form.Label>Salary*</Form.Label>
                                  <Form.Control
                                    type="number"
                                    required
                                    name="salary"
                                    placeholder="Salary"
                                    defaultValue={employee.salary}
                                    onChange={handleChange}
                                  />
                                  <Form.Text className="text-muted"></Form.Text>
                                </Form.Group>
                              </Col>
                            </Row>
                            <Row className="form-group">
                              <Col md={12}>
                                <div className="inner-box-ctn">
                                  <Row className="form-group">
                                    <Col md={12}>
                                      <h5>Written recommendation*</h5>
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
                                          className="form-control"
                                          name="recommendationFrom"
                                          placeholder="Recommendation from (Name)"
                                          defaultValue={
                                            employee.recommendationFrom
                                          }
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
                                          className="form-control"
                                          name="recommenderDesignation"
                                          placeholder="Designation"
                                          defaultValue={
                                            employee.recommenderDesignation
                                          }
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
                                          as="textarea"
                                          required
                                          cols={30}
                                          rows={5}
                                          style={{ resize: "none" }}
                                          className="form-control"
                                          name="recommendationMessage"
                                          placeholder="Recommendation Message"
                                          defaultValue={
                                            employee.recommendationMessage
                                          }
                                          onChange={handleChange}
                                        />
                                      </Form.Group>
                                    </Col>
                                  </Row>
                                </div>
                              </Col>
                            </Row>
                            <Row className="form-group">
                              <Col
                                md={4}
                                className="add-emp-rating">
                                Communication
                              </Col>
                              <Col md={8}>
                                <RatingStar
                                  clickable
                                  maxScore={5}
                                  id="1"
                                  size={32}
                                  numberOfStar={5}
                                  noBorder="true"
                                  colors={{ mask: "#00823b" }}
                                  name="communication"
                                  rating={employee.communication}
                                  onRatingChange={onCommunicationRatingChange}
                                />
                              </Col>
                            </Row>
                            <Row className="form-group">
                              <Col
                                md={4}
                                className="add-emp-rating">
                                Attitude
                              </Col>
                              <Col md={8}>
                                <RatingStar
                                  clickable
                                  maxScore={5}
                                  id="2"
                                  size={32}
                                  numberOfStar={5}
                                  noBorder="true"
                                  colors={{ mask: "#00823b" }}
                                  name="attitude"
                                  rating={employee.attitude}
                                  onRatingChange={onAttitudeRatingChange}
                                />
                              </Col>
                            </Row>
                            <Row className="form-group">
                              <Col
                                md={4}
                                className="add-emp-rating">
                                Ability to learn
                              </Col>
                              <Col md={8}>
                                <RatingStar
                                  clickable
                                  maxScore={5}
                                  id="3"
                                  size={32}
                                  numberOfStar={5}
                                  noBorder="true"
                                  colors={{ mask: "#00823b" }}
                                  name="abilityToLearn"
                                  rating={employee.abilityToLearn}
                                  onRatingChange={onAbilityToLearnRatingChange}
                                />
                              </Col>
                            </Row>
                            <Row className="form-group">
                              <Col
                                md={4}
                                className="add-emp-rating">
                                Punctuality
                              </Col>
                              <Col md={8}>
                                <RatingStar
                                  clickable
                                  maxScore={5}
                                  id="4"
                                  size={32}
                                  numberOfStar={5}
                                  noBorder="true"
                                  colors={{ mask: "#00823b" }}
                                  name="punctuality"
                                  rating={employee.punctuality}
                                  onRatingChange={onPunctualityRatingChange}
                                />
                              </Col>
                            </Row>
                            <Row className="form-group">
                              <Col
                                md={4}
                                className="add-emp-rating">
                                Commitment
                              </Col>
                              <Col md={8}>
                                <RatingStar
                                  clickable
                                  maxScore={5}
                                  id="5"
                                  size={32}
                                  numberOfStar={5}
                                  noBorder="true"
                                  colors={{ mask: "#00823b" }}
                                  name="commitment"
                                  rating={employee.commitment}
                                  onRatingChange={onCommitmentRatingChange}
                                />
                              </Col>
                            </Row>
                            <Row className="form-group">
                              <Col
                                md={4}
                                className="add-emp-rating">
                                Trustworthiness
                              </Col>
                              <Col md={8}>
                                <RatingStar
                                  clickable
                                  maxScore={5}
                                  id="6"
                                  size={32}
                                  numberOfStar={5}
                                  noBorder="true"
                                  colors={{ mask: "#00823b" }}
                                  name="trustworthiness"
                                  rating={employee.trustworthiness}
                                  onRatingChange={onTrustworthinessRatingChange}
                                />
                              </Col>
                            </Row>
                            <Row className="form-group">
                              <Col
                                md={4}
                                className="add-emp-rating">
                                Skill
                              </Col>
                              <Col md={8}>
                                <RatingStar
                                  clickable
                                  maxScore={5}
                                  id="7"
                                  size={32}
                                  numberOfStar={5}
                                  colors={{ mask: "#00823b" }}
                                  name="skill"
                                  noBorder="true"
                                  rating={employee.skill}
                                  onRatingChange={onSkillRatingChange}
                                />
                              </Col>
                            </Row>
                            <Row className="form-group">
                              <Col
                                md={4}
                                className="add-emp-rating">
                                Team Player
                              </Col>
                              <Col md={8}>
                                <RatingStar
                                  clickable
                                  maxScore={5}
                                  id="8"
                                  size={32}
                                  numberOfStar={5}
                                  colors={{ mask: "#00823b" }}
                                  name="teamPlayer"
                                  noBorder="true"
                                  rating={employee.teamPlayer}
                                  onRatingChange={onTeamPlayerRatingChange}
                                />
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
                                  Add Employee
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
