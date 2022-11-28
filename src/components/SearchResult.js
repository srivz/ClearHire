import React, { useEffect, useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import Footer from "./Footer/Footer";
import NavBar2 from "./Navs/NavBar2";
import external_link_icon from "../assets/img/external-link-icon.svg";
import person_add_icon from "../assets/img/person-add-icon.svg";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import upload_pic from "../assets/img/upload-pic.jpg";
import rating_icon from "../assets/img/rating-icon.svg";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
// import { onAuthStateChanged } from "firebase/auth";
import { database } from "../firebase-config.js";
import { collection, onSnapshot } from "firebase/firestore";
import { RatingStar } from "rating-star";

export default function SearchResult() {
  const [infos, setInfos] = useState([]);
  const [employeeInfos, setEmployeeInfos] = useState([]);

  const userId = localStorage.getItem("userId");
  useEffect(
    () =>
      onSnapshot(collection(database, "users"), (snapshot) => {
        setInfos(
          snapshot.docs
            .filter((info) => info.id === userId)
            .map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      }),
    [userId]
  );
  useEffect(
    () =>
      onSnapshot(
        collection(database, "companies", "Hayway", "employees"),
        (snapshot) => {
          setEmployeeInfos(
            snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
          );
        }
      ),
    [infos]
  );
  return (
    <div>
      <NavBar2 />
      <main id="main">
        {infos
          .filter((info) => info.id === userId)
          .map((info) => (
            <section className="search-result-wrap">
              <Container>
                <Row>
                  <Col md={3}>
                    <div className="result-left-wrap">
                      <div
                        key={info.id}
                        className="company-details">
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
                            <div className="count">54</div>
                          </div>
                        </div>
                        <div className="cmpny-other-dtls">
                          <h4>{info.name}</h4>
                          <p>Since {info.yearStarted}</p>
                          <p>
                            <a
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
                            Nemo enim ipsam voluptatem quia voluptas sit
                            aspernatur aut odit aut fugit.
                          </h5>
                        </div>
                      </Col>
                    </Row>
                    {/* ONE MODAL EXAMPLE
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  STARTS HERE                  */}
                    <div className="searchlist-details-main">
                      <Row>
                        {employeeInfos.map((info2) => (
                          <Col
                            key={info2.id}
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
                                  <small>Current Comapany</small>
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

                      {/* ONE MODAL EXAMPLE
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  ENDS HERE                      */}

                      <Row>
                        <Col md={12}>
                          <div className="seemore">
                            <a href="/">See more recomendations</a>
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
                          <Col md={6}>
                            <div className="serach-list">
                              <Row>
                                <Col md={3}>
                                  <div className="userprofile">
                                    <Image
                                      src={upload_pic}
                                      alt=""
                                      width="60"
                                    />
                                  </div>
                                </Col>
                                <Col md={9}>
                                  <div className="pl-3">
                                    <div className="wishlist">
                                      <IconButton
                                        color="success"
                                        aria-label="wishlist"
                                        size="small">
                                        <FavoriteRoundedIcon />
                                        {/* <WishListIcon fontSize="small" /> */}
                                      </IconButton>
                                    </div>
                                    <h4 className="username">Vamshi</h4>
                                    <div className="user-role">
                                      Graphic Designer
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
                                  <small>Current Comapny</small>
                                  <div className="title-3">02 years</div>
                                </Col>
                                <Col md={4}>
                                  <small>Salary</small>
                                  <div className="title-3">5.4 LPA</div>
                                </Col>
                              </Row>
                              <div className="row mt-4">
                                <Col md={6}>
                                  <div className="rating">
                                    <Image
                                      src={rating_icon}
                                      alt=""
                                    />
                                  </div>
                                </Col>
                                <Col md={6}>
                                  <div className="text-right">
                                    <Button variant="success">View</Button>
                                  </div>
                                </Col>
                              </div>
                            </div>
                          </Col>
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
          ))}
      </main>
      <Footer />
    </div>
  );
}
