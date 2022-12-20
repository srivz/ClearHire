import React, { useState } from "react";
import NavBar3 from "../Navs/NavBar3";
import Footer from "../Footer/Footer";
import { Button, Col, Container, Row, Form } from "react-bootstrap";
import { database, auth, auth2 } from "../firebase-config.js";
import { doc, updateDoc } from "firebase/firestore";
import { RatingStar } from "rating-star";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function RatingPage() {
  const [recruit, setRecruit] = useState({
    name: null,
    emailId: null,
    phoneNumber: null,
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
  const [disabledButton, setDisabledButton] = useState(false);
  const [info, setInfo] = useState([]);

  const handleChange = (event) => {
    let newInput = { [event.target.name]: event.target.value };
    setRecruit({ ...employee, ...newInput });
  };
  const handleValidation = () => {
    let fields = employee;
    let formIsValid = true;
    if (
      !fields["name"] &&
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
  const handleSubmit = (e) => {
    e.preventDefault();

    if (handleValidation()) {
      setDisabledButton(true);
      updateRecruit();
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

  const updateRecruit = async () => {
    const docData = {
      recommendation: {
        recommendationFrom: info.name,
        recommenderDesignation: info.yourDesignation,
        recommendationMessage: recruit.recommendationMessage,
      },
      rating: {
        overall:
          (recruit.communication +
            recruit.attitude +
            recruit.abilityToLearn +
            recruit.punctuality +
            recruit.commitment +
            recruit.trustworthiness +
            recruit.skill +
            recruit.teamPlayer) /
          8,
        communication: recruit.communication,
        attitude: recruit.attitude,
        abilityToLearn: recruit.abilityToLearn,
        punctuality: recruit.punctuality,
        commitment: recruit.commitment,
        trustworthiness: recruit.trustworthiness,
        skill: recruit.skill,
        teamPlayer: recruit.teamPlayer,
      },
      favourite: "false",
    };
    await updateDoc(doc(database, "recruits", recruit.emailId), docData)
      .then(() => {
        window.location.href = "/searchResults";
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const onCommunicationRatingChange = (score) => {
    let newInput = { communication: score };
    setRecruit({ ...employee, ...newInput });
  };
  const onAttitudeRatingChange = (score) => {
    let newInput = { attitude: score };
    setRecruit({ ...employee, ...newInput });
  };
  const onAbilityToLearnRatingChange = (score) => {
    let newInput = { abilityToLearn: score };
    setRecruit({ ...employee, ...newInput });
  };
  const onPunctualityRatingChange = (score) => {
    let newInput = { punctuality: score };
    setRecruit({ ...employee, ...newInput });
  };
  const onCommitmentRatingChange = (score) => {
    let newInput = { commitment: score };
    setRecruit({ ...employee, ...newInput });
  };
  const onTrustworthinessRatingChange = (score) => {
    let newInput = { trustworthiness: score };
    setRecruit({ ...employee, ...newInput });
  };
  const onSkillRatingChange = (score) => {
    let newInput = { skill: score };
    setRecruit({ ...employee, ...newInput });
  };
  const onTeamPlayerRatingChange = (score) => {
    let newInput = { teamPlayer: score };
    setRecruit({ ...employee, ...newInput });
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
                              Recommendation Letter
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
                                <Form.Group
                                  className="mb-3"
                                  controlId="formBasicName">
                                  <Form.Control
                                    type="text"
                                    required={true}
                                    name="name"
                                    placeholder="Employee Name*"
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
                                    type="text"
                                    required={true}
                                    name="emailId"
                                    placeholder="Email*"
                                    defaultValue={recruit.emailId}
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
                                            recruit.recommendationMessage
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
                                  rating={recruit.communication}
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
                                  rating={recruit.attitude}
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
                                  rating={recruit.abilityToLearn}
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
                                  rating={recruit.punctuality}
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
                                  rating={recruit.commitment}
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
                                  rating={recruit.trustworthiness}
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
                                  rating={recruit.skill}
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
                                  rating={recruit.teamPlayer}
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
