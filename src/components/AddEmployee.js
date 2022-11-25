import React, { useState } from "react";
import image_icon from "../assets/img/image-icon.svg";
import NavBar2 from "./Navs/NavBar2";
import Footer from "./Footer/Footer";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import StarRateIcon from "@mui/icons-material/StarRate";
import { storage, database } from "../firebase-config.js";
import { doc, setDoc } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { IconButton } from "@mui/material";

export default function AddEmployee() {
  const [employee, setEmployee] = useState({
    name: "",
    employeeImage: "",
    dateJoined: "",
    yourDesignation: "",
    linkedIn: "",
    salary: "",
    recommendationFrom: "",
    designation: "",
    recommendationMessage: "",
    communication: "",
    attitude: "",
    abilityToLearn: "",
    punctuality: "",
    commitment: "",
    trustworthiness: "",
    skill: "",
    teamPlayer: "",
  });
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState(null);

  const handleChange = (event) => {
    let newInput = { [event.target.name]: event.target.value };
    setEmployee({ ...employee, ...newInput });
    console.log(employee);
  };
  const handleSubmit = (event) => {
    registerEmployee();
  };

  function handleFileChange(event) {
    if (event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  }
  function handleUpload() {
    const imageRef = ref(storage, `/profileImages/${file.name}`);
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
    await setDoc(doc(database, "employees", ""), employee)
      .then(() => {
        console.log("Data Added " + employee);
        window.location.href = "/searchResults";
      })
      .catch((err) => {
        console.log(err.message + " " + employee);
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
                          style={{ "margin-top": "150px" }}>
                          <div className="text-center">
                            <h3 className="section-main-title mb-3">
                              Add new emloyee
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
                                  <div className="input-group">
                                    <Form.Control
                                      type="text"
                                      required
                                      name="name"
                                      placeholder="Employee Name"
                                      defaultValue={employee.name}
                                      onChange={handleChange}
                                    />
                                    <Form.Text className="text-muted"></Form.Text>
                                  </div>
                                </Form.Group>
                              </Col>
                            </Row>
                            <Row className="form-group">
                              <Col md={12}>
                                <Form.Group
                                  className="mb-3"
                                  controlId="formBasicName">
                                  <div className="input-group">
                                    <Form.Control
                                      type="date"
                                      required
                                      name="dateJoined"
                                      defaultValue={employee.dateJoined}
                                      onChange={handleChange}
                                    />
                                    <Form.Text className="text-muted"></Form.Text>
                                  </div>
                                </Form.Group>
                              </Col>
                            </Row>
                            <Row className="form-group">
                              <Col md={12}>
                                <select
                                  name=""
                                  id=""
                                  className="form-control">
                                  <option value="">Designation*</option>
                                </select>
                              </Col>
                            </Row>
                            <Row className="form-group">
                              <Col md={12}>
                                <Form.Group
                                  controlId="formFile"
                                  className="mb-3">
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
                                        type="submit"
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
                                  <div className="input-group">
                                    <Form.Control
                                      type="text"
                                      required
                                      name="linkedIn"
                                      placeholder="LinkedIn url"
                                      defaultValue={employee.linkedIn}
                                      onChange={handleChange}
                                    />
                                    <Form.Text className="text-muted"></Form.Text>
                                  </div>
                                </Form.Group>
                              </Col>
                            </Row>
                            <Row className="form-group">
                              <Col md={12}>
                                <Form.Group
                                  className="mb-3"
                                  controlId="formBasicName">
                                  <div className="input-group">
                                    <Form.Control
                                      type="text"
                                      required
                                      name="salary"
                                      placeholder="Salary"
                                      defaultValue={employee.salary}
                                      onChange={handleChange}
                                    />
                                    <Form.Text className="text-muted"></Form.Text>
                                  </div>
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
                                        <div className="input-group">
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
                                        </div>
                                      </Form.Group>
                                    </Col>
                                  </Row>
                                  <Row className="form-group">
                                    <Col md={12}>
                                      <Form.Group
                                        className="mb-3"
                                        controlId="formBasicName">
                                        <div className="input-group">
                                          <Form.Control
                                            type="text"
                                            required
                                            className="form-control"
                                            name="designation"
                                            placeholder="Designation"
                                            defaultValue={employee.designation}
                                            onChange={handleChange}
                                          />
                                          <Form.Text className="text-muted"></Form.Text>
                                        </div>
                                      </Form.Group>
                                    </Col>
                                  </Row>
                                  <Row className="form-group">
                                    <Col md={12}>
                                      <Form.Group
                                        className="mb-3"
                                        controlId="formBasicName">
                                        <div className="input-group">
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
                                        </div>
                                      </Form.Group>
                                    </Col>
                                  </Row>
                                </div>
                              </Col>
                            </Row>
                            <Row className="form-group">
                              <label
                                for=""
                                className="col-md-4">
                                Communication
                              </label>
                              <div className="col-md-8 add-emp-rating">
                                <IconButton
                                  color="success"
                                  aria-label="star"
                                  size="small">
                                  <StarRateIcon />
                                </IconButton>
                                <IconButton
                                  aria-label="star"
                                  size="small">
                                  <StarRateIcon />
                                </IconButton>
                                <IconButton
                                  aria-label="star"
                                  size="small">
                                  <StarRateIcon />
                                </IconButton>
                                <IconButton
                                  aria-label="star"
                                  size="small">
                                  <StarRateIcon />
                                </IconButton>
                                <IconButton
                                  aria-label="star"
                                  size="small">
                                  <StarRateIcon />
                                </IconButton>
                              </div>
                            </Row>
                            <Row className="form-group">
                              <label
                                for=""
                                className="col-md-4">
                                Attitude
                              </label>
                              <div className="col-md-8 add-emp-rating">
                                <IconButton
                                  aria-label="star"
                                  size="small">
                                  <StarRateIcon />
                                </IconButton>
                                <IconButton
                                  aria-label="star"
                                  size="small">
                                  <StarRateIcon />
                                </IconButton>
                                <IconButton
                                  aria-label="star"
                                  size="small">
                                  <StarRateIcon />
                                </IconButton>
                                <IconButton
                                  aria-label="star"
                                  size="small">
                                  <StarRateIcon />
                                </IconButton>
                                <IconButton
                                  aria-label="star"
                                  size="small">
                                  <StarRateIcon />
                                </IconButton>
                              </div>
                            </Row>
                            <Row className="form-group">
                              <label
                                for=""
                                className="col-md-4">
                                Ability to learn
                              </label>
                              <div className="col-md-8 add-emp-rating">
                                <IconButton
                                  aria-label="star"
                                  size="small">
                                  <StarRateIcon />
                                </IconButton>
                                <IconButton
                                  aria-label="star"
                                  size="small">
                                  <StarRateIcon />
                                </IconButton>
                                <IconButton
                                  aria-label="star"
                                  size="small">
                                  <StarRateIcon />
                                </IconButton>
                                <IconButton
                                  aria-label="star"
                                  size="small">
                                  <StarRateIcon />
                                </IconButton>
                                <IconButton
                                  aria-label="star"
                                  size="small">
                                  <StarRateIcon />
                                </IconButton>
                              </div>
                            </Row>
                            <Row className="form-group">
                              <label
                                for=""
                                className="col-md-4">
                                Punctuality
                              </label>
                              <div className="col-md-8 add-emp-rating">
                                <IconButton
                                  aria-label="star"
                                  size="small">
                                  <StarRateIcon />
                                </IconButton>
                                <IconButton
                                  aria-label="star"
                                  size="small">
                                  <StarRateIcon />
                                </IconButton>
                                <IconButton
                                  aria-label="star"
                                  size="small">
                                  <StarRateIcon />
                                </IconButton>
                                <IconButton
                                  aria-label="star"
                                  size="small">
                                  <StarRateIcon />
                                </IconButton>
                                <IconButton
                                  aria-label="star"
                                  size="small">
                                  <StarRateIcon />
                                </IconButton>
                              </div>
                            </Row>
                            <Row className="form-group">
                              <label
                                for=""
                                className="col-md-4">
                                Commitment
                              </label>
                              <div className="col-md-8 add-emp-rating">
                                <IconButton
                                  aria-label="star"
                                  size="small">
                                  <StarRateIcon />
                                </IconButton>
                                <IconButton
                                  aria-label="star"
                                  size="small">
                                  <StarRateIcon />
                                </IconButton>
                                <IconButton
                                  aria-label="star"
                                  size="small">
                                  <StarRateIcon />
                                </IconButton>
                                <IconButton
                                  aria-label="star"
                                  size="small">
                                  <StarRateIcon />
                                </IconButton>
                                <IconButton
                                  aria-label="star"
                                  size="small">
                                  <StarRateIcon />
                                </IconButton>
                              </div>
                            </Row>
                            <Row className="form-group">
                              <label
                                for=""
                                className="col-md-4">
                                Trustworthiness
                              </label>
                              <div className="col-md-8 add-emp-rating">
                                <IconButton
                                  aria-label="star"
                                  size="small">
                                  <StarRateIcon />
                                </IconButton>
                                <IconButton
                                  aria-label="star"
                                  size="small">
                                  <StarRateIcon />
                                </IconButton>
                                <IconButton
                                  aria-label="star"
                                  size="small">
                                  <StarRateIcon />
                                </IconButton>
                                <IconButton
                                  aria-label="star"
                                  size="small">
                                  <StarRateIcon />
                                </IconButton>
                                <IconButton
                                  aria-label="star"
                                  size="small">
                                  <StarRateIcon />
                                </IconButton>
                              </div>
                            </Row>
                            <Row className="form-group">
                              <label
                                for=""
                                className="col-md-4">
                                Skill
                              </label>
                              <div className="col-md-8 add-emp-rating">
                                <IconButton
                                  aria-label="star"
                                  size="small">
                                  <StarRateIcon />
                                </IconButton>
                                <IconButton
                                  aria-label="star"
                                  size="small">
                                  <StarRateIcon />
                                </IconButton>
                                <IconButton
                                  aria-label="star"
                                  size="small">
                                  <StarRateIcon />
                                </IconButton>
                                <IconButton
                                  aria-label="star"
                                  size="small">
                                  <StarRateIcon />
                                </IconButton>
                                <IconButton
                                  aria-label="star"
                                  size="small">
                                  <StarRateIcon />
                                </IconButton>
                              </div>
                            </Row>
                            <Row className="form-group">
                              <label
                                for=""
                                className="col-md-4">
                                Team Player
                              </label>
                              <div className="col-md-8 add-emp-rating">
                                <IconButton
                                  aria-label="star"
                                  size="small">
                                  <StarRateIcon />
                                </IconButton>
                                <IconButton
                                  aria-label="star"
                                  size="small">
                                  <StarRateIcon />
                                </IconButton>
                                <IconButton
                                  aria-label="star"
                                  size="small">
                                  <StarRateIcon />
                                </IconButton>
                                <IconButton
                                  aria-label="star"
                                  size="small">
                                  <StarRateIcon />
                                </IconButton>
                                <IconButton
                                  aria-label="star"
                                  size="small">
                                  <StarRateIcon />
                                </IconButton>
                              </div>
                            </Row>
                            <Row className="form-group">
                              <Col
                                md={12}
                                className=" mt-4">
                                <Link to="/employee-details">
                                  <Button
                                    block
                                    onClick={handleSubmit}
                                    variant="success"
                                    className="w-100">
                                    Add Employee
                                  </Button>
                                </Link>
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
