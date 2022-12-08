import React, { useState } from "react";

import "../assets/css/style.css";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import NavBar3 from "./Navs/NavBar3";
import Footer from "./Footer/Footer";
// import {
//   browserSessionPersistence,
//   onAuthStateChanged,
//   setPersistence,
//   signInWithEmailAndPassword,
//   signOut,
// } from "firebase/auth";
// import { auth } from "../firebase-config.js";

export default function RecruitAcceptPage() {
  const file = useState(
    "https://firebasestorage.googleapis.com/v0/b/clearhire-28c23.appspot.com/o/sample.pdf?alt=media&token=bcd4b969-c710-42da-b509-99f9a00668ad"
  );

  //   const [user, setUser] = useState({
  //     emailId: "",
  //     password: "",
  //   });
  //   useEffect(() => {
  //     signOut(auth);
  //   }, []);
  //   const handleChangeForm = (event) => {
  //     let newInput = { [event.target.name]: event.target.value };
  //     setUser({ ...user, ...newInput });
  // };
  //   onAuthStateChanged(auth, (user) => {
  //     if (user && user.emailVerified) {
  //       window.location.href = "/searchResults";
  //     }
  //   });
  function accept() {
    try {
      // setPersistence(auth, browserSessionPersistence)
      //   .then(() => {
      //     signInWithEmailAndPassword(auth, user.emailId, user.password);
      //     if (!auth.currentUser.emailVerified) {
      //       alert("User not verified yet !!!");
      //       window.location.href = "/emailVerification";
      //     }
      //   })
      //   .catch((error) => {
      //     if (error.message === "Firebase: Error (auth/user-not-found).") {
      //       alert("User not Found. Sign Up first !!");
      //     } else if (
      //       error.message === "Firebase: Error (auth/wrong-password)."
      //     ) {
      //       alert("Wrong Password");
      //     }
      //   });
    } catch (error) {
      // alert("User not Found. Sign Up first !!");
    }
  }

  return (
    <div>
      <Container>
        <Row>
          <NavBar3 />
          <main id="main">
            <section className="empdetails-wrap">
              <Container>
                <div className="empdetails-inner">
                  <Row className="justify-content-center align-items-center">
                    <Col md={12}>
                      <h1>Hi! Raja Kamaraj</h1>
                      <p>
                        Please check all the details and offer leter before
                        accepting.
                      </p>
                    </Col>
                    <div className="whitespace">&nbsp;</div>
                  </Row>
                  <Row className="justify-content-center">
                    <Col md={6}>
                      <h1>Employee Details</h1>
                      <br />
                      <Row className="justify-content-left align-items-left">
                        <Col md={4}>
                          <p>Name</p>
                          <br />
                          <p>Age</p>
                          <br />
                          <p>Designation</p>
                          <br />
                          <p>Location</p>
                          <br />
                          <p>Salary</p>
                        </Col>
                        <Col md={6}>
                          <p>Raja Kamaraj</p>
                          <br />
                          <p>28</p>
                          <br />
                          <p>Portrait Artist. Then and There Agency</p>
                          <br />
                          <p>Chennai, Tamil Nadu, India</p>
                          <br />
                          <p>6.5 LPA + Bonus</p>
                        </Col>
                        <div className="whitespace">&nbsp;</div>
                      </Row>
                    </Col>
                    <Col md={6}>
                      <h1>Employer</h1>
                      <Row className="justify-content-center align-items-center">
                        <Col md={2}>
                          <p>
                            <div className="userprofile">
                              <Image
                                src=""
                                alt=""
                                width="60"
                              />
                            </div>
                          </p>
                        </Col>
                        <Col md={8}>
                          <h4>Brand Moustache</h4>
                          <p />
                          Since 2009
                        </Col>
                        <div className="whitespace">&nbsp;</div>
                      </Row>
                    </Col>
                    <div className="whitespace">&nbsp;</div>
                  </Row>
                  <Row className="justify-content-center">
                    <Col md={12}>
                      <h1>Offer Letter</h1>
                      <Row className="justify-content-center align-items-center">
                        <Col md={12}>
                          <center>
                            <embed
                              type="application/pdf"
                              src={file}
                              width="1000"
                              height="770"
                            />
                          </center>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <div className="addemp-form">
                    <Row className="form-group">
                      <Col
                        md={8}
                        className="mt-4"></Col>
                      <Col
                        md={2}
                        className="mt-4">
                        <Button
                          onClick={accept}
                          variant="success"
                          className="w-100">
                          Accept{" "}
                        </Button>
                      </Col>
                    </Row>
                  </div>
                </div>
                <div className="whitespace">&nbsp;</div>
              </Container>
            </section>
          </main>
          <Footer />
        </Row>
      </Container>
    </div>
  );
}
