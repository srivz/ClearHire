import React, { useState } from "react";
import image_icon from "../../assets/img/image-icon.svg";
import NavBar3 from "../Navs/NavBar3";
import Footer from "../Footer/Footer";
import { Button, Col, Container, Image, Row, Form } from "react-bootstrap";
import { storage, database, auth, auth2 } from "../../firebase-config.js";
import { doc, updateDoc, setDoc, arrayUnion } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { RatingStar } from "rating-star";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import moment from "moment/moment";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function AddEmployee() {
  const [employee, setEmployee] = useState({
    name: null,
    employeeImage: null,
    dateOfBirth: null,
    dateJoined: null,
    designation: null,
    linkedIn: null,
    salary: null,
    location: null,
    emailId: null,
    phoneNumber: null,
    adhaarCardNumber: null,
    recommendationFrom: null,
    recommenderDesignation: null,
    recommendationMessage: null,
    communication: null,
    attitude: null,
    abilityToLearn: null,
    punctuality: null,
    commitment: null,
    trustworthiness: null,
    skill: null,
    teamPlayer: null,
  });
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState(null);
  const [disabledButton, setDisabledButton] = useState(false);
  const [info, setInfo] = useState([]);

  const handleChange = (event) => {
    let newInput = { [event.target.name]: event.target.value };
    setEmployee({ ...employee, ...newInput });
  };
  const handleValidation = () => {
    let fields = employee;
    let formIsValid = true;
    if (
      !fields["name"] &&
      !fields["employeeImage"] &&
      !fields["dateOfBirth"] &&
      !fields["dateJoined"] &&
      !fields["designation"] &&
      !fields["linkedIn"] &&
      !fields["location"] &&
      !fields["salary"] &&
      !fields["adhaarCardNumber"] &&
      !fields["emailId"] &&
      !fields["phoneNumber"] &&
      !fields["recommendationMessage"] &&
      !fields["communication"] &&
      !fields["attitude"] &&
      !fields["abilityToLearn"] &&
      !fields["punctuality"] &&
      !fields["commitment"] &&
      !fields["trustworthiness"] &&
      !fields["skill"] &&
      !fields["teamPlayer"]
    ) {
      formIsValid = false;
    }

    return formIsValid;
  };

  const registerLogin = () => {
    createUserWithEmailAndPassword(
      auth2,
      employee.emailId,
      employee.dateOfBirth
    )
      .then((cred) => {
        updateProfile(auth2.currentUser, {
          displayName: "Employee",
          photoURL: employee.adhaarCardNumber,
        });
        auth2.signOut();
      })
      .catch((error) => {
        alert("User already has account!!");
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (handleValidation()) {
      setDisabledButton(true);
      registerLogin();
      registerEmployee();
    } else {
      alert("Fill the form properly!!");
    }
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
      setFile(null);
      alert("Upload .png, .jpg, .jpeg, .bmp, .gif, .webp files only.");
    }
  }

  function handleUpload(file) {
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
      companyLogo: info.profileImage,
      employeeImage: employee.employeeImage,
      dateOfBirth: employee.dateOfBirth,
      dateJoined: employee.dateJoined,
      designation: employee.designation,
      linkedIn: employee.linkedIn,
      location: employee.location,
      salary: employee.salary,
      emailId: employee.emailId,
      phoneNumber: employee.phoneNumber,
      recommendation: {
        recommendationFrom: info.name,
        recommenderDesignation: info.yourDesignation,
        recommendationMessage: employee.recommendationMessage,
      },
      rating: {
        overall:
          (employee.communication +
            employee.attitude +
            employee.abilityToLearn +
            employee.punctuality +
            employee.commitment +
            employee.trustworthiness +
            employee.skill +
            employee.teamPlayer) /
          8,
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
                          <div className="employee-add-form">
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
                                <br />
                              </Col>
                            </Row>
                            <Row className="form-group">
                              <Col md={12}>
                                <Form.Group
                                  controlId="formFile"
                                  className="mb-3 employee-file">
                                  <Form.Label className="mb-2 label">
                                    {file !== null
                                      ? file.name
                                      : "Upload Employee Photo*"}
                                    <span className="label-icon">
                                      <i className="fa-solid fa-plus"></i>
                                    </span>
                                  </Form.Label>
                                  <Form.Control
                                    className="mb-2"
                                    type="file"
                                    name="file"
                                    accept=".png,.jpg,.jpeg,.bmp,.gif,.webp"
                                    onChange={handleFileChange}
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
                                    required={true}
                                    name="name"
                                    placeholder="Employee Name*"
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
                                  <Form.Control
                                    type="date"
                                    required={true}
                                    name="dateOfBirth"
                                    max={moment().format("YYYY-MM-DD")}
                                    placeholder={
                                      employee.dateOfBirth === null
                                        ? "Date Of Birth*"
                                        : employee.dateOfBirth
                                    }
                                    defaultValue={employee.dateOfBirth}
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
                                    required={true}
                                    name="dateJoined"
                                    max={moment().format("YYYY-MM-DD")}
                                    placeholder={
                                      employee.dateJoined === null
                                        ? "Date Of Joining*"
                                        : employee.dateJoined
                                    }
                                    defaultValue={employee.dateJoined}
                                    onChange={handleChange}
                                  />
                                  <div class="input-down-angle-icon"></div>
                                </Form.Group>
                              </Col>
                            </Row>
                            <Row className="form-group">
                              <Col md={12}>
                                <Form.Group className="mb-3">
                                  <Form.Control
                                    type="text"
                                    required={true}
                                    name="designation"
                                    placeholder="Designation*"
                                    defaultValue={employee.designation}
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
                                    required={true}
                                    name="location"
                                    placeholder="Location*"
                                    defaultValue={employee.location}
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
                                    type="number"
                                    required={true}
                                    minLength={12}
                                    maxLength={12}
                                    name="adhaarCardNumber"
                                    placeholder="Adhaar Card Number*"
                                    defaultValue={employee.adhaarCardNumber}
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
                                    required={true}
                                    name="linkedIn"
                                    placeholder="LinkedIn url*"
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
                                  <Form.Control
                                    type="number"
                                    required={true}
                                    name="salary"
                                    placeholder="Salary*"
                                    defaultValue={employee.salary}
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
                                    required={true}
                                    name="emailId"
                                    placeholder="Email*"
                                    defaultValue={employee.emailId}
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
                                    required={true}
                                    name="phoneNumber"
                                    placeholder="Phone Number*"
                                    defaultValue={employee.phoneNumber}
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
                                          disabled
                                          className="form-control"
                                          name="recommendationFrom"
                                          placeholder={info.name}
                                          defaultValue={info.name}
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
                                          disabled
                                          className="form-control"
                                          name="recommenderDesignation"
                                          placeholder={info.yourDesignation}
                                          defaultValue={info.yourDesignation}
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
                                          required={true}
                                          cols={30}
                                          rows={5}
                                          style={{ resize: "none" }}
                                          className="form-control recommendation-form"
                                          name="recommendationMessage"
                                          placeholder="Recommendation Message*"
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
                                  size={40}
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
                                  size={40}
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
                                  size={40}
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
                                  size={40}
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
                                  size={40}
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
                                  size={40}
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
                                  size={40}
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
                                  size={40}
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
          <p />
          <p />
          <p />
          <p />
          <Footer />
        </Row>
      </Container>
    </div>
  );
}
