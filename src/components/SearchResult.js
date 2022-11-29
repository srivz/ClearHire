import React, { useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import Footer from "./Footer/Footer";
import NavBar2 from "./Navs/NavBar2";
import external_link_icon from "../assets/img/external-link-icon.svg";
import person_add_icon from "../assets/img/person-add-icon.svg";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import { auth, database } from "../firebase-config.js";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { RatingStar } from "rating-star";
import { onAuthStateChanged } from "firebase/auth";

export default function SearchResult() {
  const [info, setInfo] = useState([]);
  const [employeeInfos, setEmployeeInfo] = useState([]);

  const employeeGet = async (uid) => {
    const employeeRef = collection(database, "companies", uid, "employees");
    const snapshots = await getDocs(employeeRef);
    const docs = snapshots.docs.map((doc) => {
      return doc.data();
    });
    setEmployeeInfo(docs);
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      getDoc(doc(database, "users", uid)).then((doc) => {
        setInfo({ ...doc.data(), id: doc.id });
      });
      employeeGet(uid);
    } else {
      window.location.href = "/";
    }
  });

  const addFavourite = async (employeeid) => {
    // const empRef = doc(
    //   database,
    //   "companies",
    //   auth.currentUser.uid,
    //   "employees",
    //   employeeid
    // );
    // await empRef
    //   .update({
    //     favourite: "true",
    //   })
    //   .then(() => {
    //     console.log("Done");
    //   });
  };
  const deleteFavourite = async (employeeid) => {
    // const empRef = doc(
    //   database,
    //   "companies",
    //   auth.currentUser.uid,
    //   "employees",
    //   employeeid
    // );
    // await empRef
    //   .update({
    //     favourite: "false",
    //   })
    //   .then(() => {
    //     console.log("Done");
    //   });
  };
  return (
    <div>
      <NavBar2 />
      <main id="main">
        <section className="search-result-wrap">
          <Container>
            <Row>
              <Col md={3}>
                <div className="result-left-wrap">
                  <div className="company-details">
                    <div className="company-info">
                      <div className="userprofile">
                        <Image
                          src={info.profileImage}
                          alt=""
                        />
                      </div>
                      <div className="total-emp-dtls">
                        <small>No.Of</small>
                        <small>Employees</small>
                        <div className="count">{employeeInfos.length}</div>
                      </div>
                    </div>
                    <div className="cmpny-other-dtls">
                      <h4>{info.name}</h4>
                      <p>Since {info.yearStarted}</p>
                      <p>
                        <a
                          target="_blank"
                          rel="noreferrer noopener"
                          href={info.website}
                          style={{ color: "#4B9CBB" }}>
                          {info.website}
                          <Image
                            src={external_link_icon}
                            alt=""
                          />
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="upload-emp-details">
                    <Link to="/addEmployee">
                      <span className="uploaddtls">
                        <Image
                          src={person_add_icon}
                          alt=""
                        />
                        Upload Employee
                      </span>
                    </Link>
                  </div>
                </div>
              </Col>
              <Col md={9}>
                <br />
                <Row className="result-right-wrap">
                  <Col md={12}>
                    <div className="section-title">
                      <h2>Find from the recommendations.</h2>
                    </div>
                    <div className="tagline-text">
                      <h5>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                        aut odit aut fugit.
                      </h5>
                    </div>
                  </Col>
                </Row>
                <div className="searchlist-details-main">
                  <Row>
                    {employeeInfos
                      .filter((info2, id) => info2.favourite === "false")
                      .map((info2, id) => (
                        <Col
                          key={id}
                          md={6}>
                          <div className="serach-list">
                            <Row>
                              <Col md={3}>
                                <div className="userprofile">
                                  <Image
                                    src={info2.employeeImage}
                                    alt=""
                                    width="60"
                                  />
                                </div>
                              </Col>
                              <Col md={9}>
                                <div className="pl-3">
                                  <div className="wishlist">
                                    <IconButton
                                      onClick={addFavourite(id)}
                                      aria-label="delete"
                                      size="small">
                                      <FavoriteRoundedIcon />
                                    </IconButton>
                                  </div>
                                  <h4 className="username">{info2.name}</h4>
                                  <div className="user-role">
                                    {info2.designation}
                                  </div>
                                  <p className="comments">Dot it agency</p>
                                </div>
                              </Col>
                            </Row>
                            <Row>
                              <Col md={4}>
                                <small>Total Experience</small>
                                <div className="title-3">06 years</div>
                              </Col>
                              <Col md={4}>
                                <small>Current Company</small>
                                <div className="title-3">02 years</div>
                              </Col>
                              <Col md={4}>
                                <small>Salary</small>
                                <div className="title-3">
                                  {info2.salary} LPA
                                </div>
                              </Col>
                            </Row>
                            <Row className="mt-4">
                              <Col md={6}>
                                <div className="rating">
                                  <RatingStar
                                    unclickable
                                    maxScore={5}
                                    id="2"
                                    size={32}
                                    numberOfStar={5}
                                    noBorder="true"
                                    colors={{ mask: "#00823b" }}
                                    name="attitude"
                                    // rating={info2.communication}
                                  />
                                </div>
                              </Col>
                              <Col md={6}>
                                <div className="text-right">
                                  <Button variant="success">View</Button>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </Col>
                      ))}
                  </Row>

                  <Row>
                    <Col md={12}>
                      <div className="seemore">
                        <a href="/searchResults">See more recomendations</a>
                      </div>
                    </Col>
                  </Row>
                </div>

                <div className="result-right-wrap mt-4">
                  <Row>
                    <Col md={12}>
                      <div className="section-title">
                        <h2>Saved Profiles</h2>
                      </div>
                      <div className="tagline-text">
                        <h5>
                          Nemo enim ipsam voluptatem quia voluptas sit
                          aspernatur aut odit aut fugit.
                        </h5>
                      </div>
                    </Col>
                  </Row>
                  <div className="searchlist-details-main">
                    <Row>
                      {employeeInfos
                        .filter((info2, id) => info2.favourite === "true")
                        .map((info2, id) => (
                          <Col
                            key={id}
                            md={6}>
                            <div className="serach-list">
                              <Row>
                                <Col md={3}>
                                  <div className="userprofile">
                                    <Image
                                      src={info2.employeeImage}
                                      alt=""
                                      width="60"
                                    />
                                  </div>
                                </Col>
                                <Col md={9}>
                                  <div className="pl-3">
                                    <div className="wishlist">
                                      <IconButton
                                        onClick={deleteFavourite(id)}
                                        color="success"
                                        aria-label="delete"
                                        size="small">
                                        <FavoriteRoundedIcon />
                                      </IconButton>
                                    </div>
                                    <h4 className="username">{info2.name}</h4>
                                    <div className="user-role">
                                      {info2.designation}
                                    </div>
                                    <p className="comments">Dot it agency</p>
                                  </div>
                                </Col>
                              </Row>
                              <Row>
                                <Col md={4}>
                                  <small>Total Experience</small>
                                  <div className="title-3">06 years</div>
                                </Col>
                                <Col md={4}>
                                  <small>Current Company</small>
                                  <div className="title-3">02 years</div>
                                </Col>
                                <Col md={4}>
                                  <small>Salary</small>
                                  <div className="title-3">
                                    {info2.salary} LPA
                                  </div>
                                </Col>
                              </Row>
                              <Row className="mt-4">
                                <Col md={6}>
                                  <div className="rating">
                                    <RatingStar
                                      unclickable
                                      maxScore={5}
                                      id="2"
                                      size={32}
                                      numberOfStar={5}
                                      noBorder="true"
                                      colors={{ mask: "#00823b" }}
                                      name="attitude"
                                      // rating={info2.communication}
                                    />
                                  </div>
                                </Col>
                                <Col md={6}>
                                  <div className="text-right">
                                    <Button variant="success">View</Button>
                                  </div>
                                </Col>
                              </Row>
                            </div>
                          </Col>
                        ))}
                    </Row>
                    <Row>
                      <Col md={12}>
                        <div className="seemore">
                          <a href="/">See more recomendations</a>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}
