import React, { useState } from "react";
import NavBar2 from "./Navs/NavBar2";
import Footer from "./Footer/Footer";
import { Button, Col, Container, Row, Form } from "react-bootstrap";
import { database, auth } from "../firebase-config.js";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

export default function SendNotificationToRecruit() {
  const [recruit, setRecruit] = useState({
    emailId: "",
    mobileNumber: "",
  });
  const [disabledButton, setDisabledButton] = useState(false);
  const [info, setInfo] = useState([]);

  const handleChange = (event) => {
    let newInput = { [event.target.name]: event.target.value };
    setRecruit({ ...recruit, ...newInput });
  };
  const handleSubmit = () => {
    setDisabledButton(true);
    registerRecruit();
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
  const registerRecruit = async () => {
    const docData = {
      emailId: "",
      mobileNumber: "",
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
        // updateDoc(doc(database, "employees", recruit.adhaarCardNumber), {
        //   companies: arrayUnion(auth.currentUser.uid),
        // })
        //   .then(() => {
        window.location.href = "/searchResults";
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
        console.log(err.message + info);
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
                          <div className="addemp-form">
                            <Row className="form-group">
                              <Col md={12}>
                                <Form.Group
                                  className="mb-3"
                                  controlId="formBasicName">
                                  <Form.Control
                                    type="text"
                                    required
                                    name="name"
                                    placeholder="Recruit's Email*"
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
                                    required
                                    placeholder="Recruits's Phone Number*"
                                    name="phoneNumber"
                                    defaultValue={recruit.dateOfBirth}
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
                                  <i class="fa-solid fa-circle-arrow-right fa-1x"></i>
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
