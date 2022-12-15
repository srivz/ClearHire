import React, { useState } from "react";

import "../assets/css/style.css";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import NavBar3 from "./Navs/NavBar3";
import Footer from "./Footer/Footer";
// import { updateProfile } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { auth, database } from "../firebase-config.js";
import { doc, getDoc } from "firebase/firestore";

export default function RecruitAcceptPage() {
  const [info, setInfo] = useState([]);
  const [count, setCount] = useState(1);
  const date_diff_indays = function (date1) {
    if (date1 === undefined) {
      return 0;
    }
    const dt1 = new Date(date1);
    const dt2 = new Date();
    return Math.floor(
      (Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) -
        Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) /
        (1000 * 60 * 60 * 24 * 365)
    );
  };
  onAuthStateChanged(auth, (user) => {
    if (user) {
      if (count) {
        getDoc(doc(database, "recruit", user.email)).then((doc) => {
          setInfo({ ...doc.data(), id: doc.id });
        });
        setCount(0);
      }
    } else {
      window.location.href = "/";
    }
  });

  function accept() {
    try {
      console.log(info);
      // updateProfile(auth.currentUser, {
      //   displayName: "Employee",
      //   photoURL: "adhaarCardNumber",
      // });
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
      alert("User not Found. Sign Up first !!");
    }
  }

  return (
    <div>
      <Container>
        <Row>
          <NavBar3 />
          <main id="main">
            <section className="recruitdetails-wrap">
              <Container>
                <div className="recruitdetails-inner">
                  <Row className="justify-content-center align-items-center">
                    <Col md={12}>
                      <h2>
                        <span className="green-text">Hi!</span> {info.name}
                      </h2>
                      <p>
                        Please check all the details and offer letter before
                        accepting.
                      </p>
                    </Col>
                    <div className="whitespace">&nbsp;</div>
                  </Row>
                  <Row className="">
                    <Col md={7}>
                      <h2 className="green-text">Employee Details</h2>
                      <br />
                      <Row className="justify-content-left align-items-left">
                        <Col md="auto">
                          <table>
                            <tbody>
                              <tr>
                                <td>
                                  Name
                                  <p />
                                </td>
                                <td className="employeeDetailstd">
                                  {info.name}
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  Age
                                  <p />
                                </td>
                                <td className="employeeDetailstd">
                                  {date_diff_indays(info.dateOfBirth) === "NaN"
                                    ? " "
                                    : date_diff_indays(info.dateOfBirth)}
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  Designation
                                  <p />
                                </td>
                                <td className="employeeDetailstd">
                                  {" "}
                                  {info.designation} ⋅ {info.companyName}
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  Location
                                  <p />
                                </td>
                                <td className="employeeDetailstd">
                                  {info.location}
                                </td>
                              </tr>

                              <tr>
                                <td>
                                  Salary
                                  <p />
                                </td>
                                <td className="employeeDetailstd">
                                  {" "}
                                  {info.salary} LPA{" "}
                                  {info.bonus === "Yes" ? "+ Bonus" : ""}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </Col>
                        <div className="whitespace">&nbsp;</div>
                      </Row>{" "}
                    </Col>
                    <Col md="auto">
                      <h2 className="green-text">Employer</h2>
                      <Row className="justify-content-center align-items-center">
                        <Col md="auto">
                          <p>
                            <span className="userprofile">
                              <Image
                                src={info.companyLogo}
                                alt=""
                                width="60"
                              />
                            </span>
                          </p>
                        </Col>
                        <Col md="auto">
                          <h4 className="green-text">Brand Moustache</h4>
                          <p />
                          Since 2009
                        </Col>
                        <div className="whitespace">&nbsp;</div>
                      </Row>
                    </Col>
                  </Row>
                  <Row className="justify-content-center">
                    <Col md={12}>
                      <h1 className="green-text">Offer Letter</h1>
                      <div className="whitespace">&nbsp;</div>
                      <Row className="justify-content-center align-items-center">
                        <Col
                          md={12}
                          className=" offer-letter-view">
                          <center>
                            <embed
                              type="application/pdf"
                              src={info.offerLetter}
                            />
                          </center>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <div className="addemp-form">
                    <Row className="form-group">
                      <Col
                        md={10}
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
              </Container>
            </section>
          </main>
          <Footer />
        </Row>
      </Container>
    </div>
  );
}
