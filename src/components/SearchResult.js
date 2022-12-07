import React, { useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import Footer from "./Footer/Footer";
import NavBar2 from "./Navs/NavBar2";
import external_link_icon from "../assets/img/external-link-icon.svg";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import { auth, database } from "../firebase-config.js";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { RatingStar } from "rating-star";
import { onAuthStateChanged } from "firebase/auth";
import { Add, PersonAdd } from "@mui/icons-material";

export default function SearchResult() {
  const [info, setInfo] = useState([]);
  const [employeeInfos, setEmployeeInfo] = useState([]);
  const [seeMore1, setSeeMore1] = useState(4);
  const [seeMore2, setSeeMore2] = useState(4);
  const d = new Date();
  let year = d.getFullYear();

  const employeeGet = async (uid) => {
    const employeeRef = collection(database, "companies", uid, "employees");
    const snapshots = await getDocs(employeeRef);

    const docs = snapshots.docs.map((doc) => {
      return [doc.data(), doc.id];
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
  function addFavourite(eid) {
    const employeeRef = doc(
      database,
      "companies",
      auth.currentUser.uid,
      "employees",
      eid
    );
    if (employeeRef) {
      updateDoc(employeeRef, {
        favourite: "true",
      });
    }
  }
  const deleteFavourite = (eid) => {
    const employeeRef = doc(
      database,
      "companies",
      auth.currentUser.uid,
      "employees",
      eid
    );
    if (employeeRef) {
      updateDoc(employeeRef, {
        favourite: "false",
      });
    }
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
                        <Add />
                        <br />
                        Upload Employee
                      </span>
                    </Link>
                  </div>
                  <br />
                  <div className="upload-emp-details">
                    <Link to="/addRecruit">
                      <span className="uploaddtls">
                        <PersonAdd />
                        <br />
                        Recruit
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
                      .filter((info2, id1) => info2[0].favourite === "false")
                      .map((info2, id1) => {
                        return id1 < seeMore1 ? (
                          <Col
                            key={info2[1]}
                            md={6}>
                            <div className="serach-list">
                              <Row>
                                <Col md={3}>
                                  <div className="userprofile">
                                    <Image
                                      src={info2[0].employeeImage}
                                      alt=""
                                      width="60"
                                    />
                                  </div>
                                </Col>
                                <Col md={9}>
                                  <div className="pl-3">
                                    <div className="wishlist">
                                      <IconButton
                                        onClick={() => addFavourite(info2[1])}
                                        aria-label="delete"
                                        size="small">
                                        <FavoriteRoundedIcon />
                                      </IconButton>
                                    </div>
                                    <h4 className="username">
                                      {info2[0].name}
                                    </h4>
                                    <div className="user-role">
                                      {info2[0].designation}
                                    </div>
                                    <p className="comments">
                                      {info2[0].companyName}
                                    </p>
                                  </div>
                                </Col>
                              </Row>
                              <Row>
                                <Col md={4}>
                                  <small>Total Experience</small>
                                  <div className="title-3">-- years</div>
                                </Col>
                                <Col md={4}>
                                  <small>Current Company</small>
                                  <div className="title-3">
                                    {year - info2[0].dateJoined.substring(0, 4)}{" "}
                                    years
                                  </div>
                                </Col>
                                <Col md={4}>
                                  <small>Salary</small>
                                  <div className="title-3">
                                    {info2[0].salary} LPA
                                  </div>
                                </Col>
                              </Row>
                              <Row className="mt-4">
                                <Col md={6}>
                                  <div className="rating">
                                    <RatingStar
                                      unclickable
                                      maxScore={5}
                                      id={id1}
                                      size={32}
                                      numberOfStar={5}
                                      noBorder="true"
                                      colors={{ mask: "#00823b" }}
                                      rating={info2[0].rating.overall}
                                    />
                                  </div>
                                </Col>
                                <Col md={6}>
                                  <div className="text-right">
                                    <Link
                                      to={"/employeeDetails"}
                                      state={{ empId: info2[1] }}>
                                      <Button variant="success">View</Button>
                                    </Link>
                                  </div>
                                </Col>
                              </Row>
                            </div>
                          </Col>
                        ) : (
                          <></>
                        );
                      })}
                  </Row>

                  <Row>
                    <Col md={12}>
                      <div className="seemore">
                        <span onClick={() => setSeeMore1(seeMore1 + 4)}>
                          See more recomendations
                        </span>
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
                        .filter((info2, id2) => info2[0].favourite === "true")
                        .map((info2, id2) => {
                          return id2 < seeMore2 ? (
                            <Col
                              key={info2[1]}
                              md={6}>
                              <div className="serach-list">
                                <Row>
                                  <Col md={3}>
                                    <div className="userprofile">
                                      <Image
                                        src={info2[0].employeeImage}
                                        alt=""
                                        width="60"
                                      />
                                    </div>
                                  </Col>
                                  <Col md={9}>
                                    <div className="pl-3">
                                      <div className="wishlist">
                                        <IconButton
                                          onClick={() =>
                                            deleteFavourite(info2[1])
                                          }
                                          color="success"
                                          aria-label="delete"
                                          size="small">
                                          <FavoriteRoundedIcon />
                                        </IconButton>
                                      </div>
                                      <h4 className="username">
                                        {info2[0].name}
                                      </h4>
                                      <div className="user-role">
                                        {info2[0].designation}
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
                                      {info2[0].salary} LPA
                                    </div>
                                  </Col>
                                </Row>
                                <Row className="mt-4">
                                  <Col md={6}>
                                    <div className="rating">
                                      <RatingStar
                                        unclickable
                                        maxScore={5}
                                        id={"favourite" + id2}
                                        size={32}
                                        numberOfStar={5}
                                        noBorder="true"
                                        colors={{ mask: "#00823b" }}
                                        rating={info2[0].rating.overall}
                                      />
                                    </div>
                                  </Col>
                                  <Col md={6}>
                                    <div className="text-right">
                                      <Link
                                        to={"/employeeDetails"}
                                        state={{ empId: info2[1] }}>
                                        <Button variant="success">View</Button>
                                      </Link>
                                    </div>
                                  </Col>
                                </Row>
                              </div>
                            </Col>
                          ) : (
                            <></>
                          );
                        })}
                    </Row>
                    <Row>
                      <Col md={12}>
                        <div className="seemore">
                          <span onClick={() => setSeeMore2(seeMore2 + 4)}>
                            See more recomendations
                          </span>
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
