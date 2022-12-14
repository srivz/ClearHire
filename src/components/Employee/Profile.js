import React, { useState } from "react";
import down_icon from "../../assets/img/down-icon.svg";
import NavBar3 from "../Navs/NavBar3";
import { Col, Collapse, Container, Image, Row } from "react-bootstrap";
import Footer from "../Footer/Footer";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, database } from "../../firebase-config";
import { RatingStar } from "rating-star";
import { LinkedIn } from "@mui/icons-material";

export default function Profile() {
  const [empId, setEmpId] = useState();
  const [open, setOpen] = useState();
  const [companiesToFetch, setCompaniesToFetch] = useState();
  const [employeeInfos, setEmployeeInfo] = useState([{}]);
  const [fetched, setFetched] = useState(true);
  const [totalExperience, setTotalExperience] = useState(0);
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
      if (fetched) {
        getDoc(doc(database, "employees", user.photoURL))
          .then((doc) => {
            const data = doc.data();
            setCompaniesToFetch(data.companies);
            setEmpId(user.photoURL);
          })
          .then(() => {
            if (companiesToFetch) {
              employeeGet(companiesToFetch);
              setFetched(false);
            }
          });
      }
    } else {
      window.location.href = "/";
    }
  });
  function employeeGet(companyId) {
    companyId.forEach((employee) => {
      const employeeRef = doc(
        database,
        "companies",
        employee,
        "employees",
        empId
      );
      if (employeeRef) {
        getDoc(employeeRef).then((doc) => {
          const data = doc.data();
          if (data !== null)
            setEmployeeInfo(
              (employeeInfos) => [...employeeInfos, data],
              data.id
            );
          setTotalExperience(
            "--"
            // totalExperience < year - data.dateJoined.substring(0, 4)
            //   ? year - data.dateJoined.substring(0, 4)
            //   : totalExperience
          );
        });
      }
    });
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
                      {employeeInfos
                        .filter((info2, id) => id !== 0)
                        .sort((a, b) => (a.dateJoined > b.dateJoined ? -1 : 1))
                        .map((info2, id) => {
                          return id === 0 ? (
                            <div className="emp-header">
                              <Row>
                                <Col md={4}>
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

                                    <Col md={6}>
                                      <div className="empifo">
                                        <h4 className="username">
                                          {info2.name}
                                        </h4>
                                        <p className="designation">
                                          {info2.designation} ???{" "}
                                          {info2.companyName}
                                        </p>
                                        <small className="location">
                                          {info2.location}
                                        </small>
                                      </div>
                                    </Col>
                                  </Row>
                                </Col>
                                <Col
                                  md={5}
                                  className="align-me text-center">
                                  <ul className="expdetails">
                                    <li>
                                      <small>Total Experience</small>
                                      <div className="title-3">
                                        {totalExperience} years
                                      </div>
                                    </li>
                                    <li>
                                      <small>Current Comapny</small>
                                      <div className="title-3">
                                        {date_diff_indays(info2.dateJoined)}
                                        years
                                      </div>
                                    </li>
                                  </ul>
                                </Col>

                                <Col
                                  md={2}
                                  className="align-me text-right">
                                  <div className="rating-dtls mb-2">
                                    <RatingStar
                                      unclickable
                                      maxScore={5}
                                      id="0"
                                      size={32}
                                      numberOfStar={5}
                                      noBorder="true"
                                      colors={{ mask: "#00823b" }}
                                      // rating={info2.rating.overall}
                                    />
                                  </div>
                                </Col>
                                <Col
                                  md={1}
                                  className="align-me text-center justify-content-center">
                                  <a
                                    target="_block"
                                    href={info2.linkedIn}>
                                    <LinkedIn fontSize="large" />
                                  </a>
                                </Col>
                              </Row>
                            </div>
                          ) : (
                            <></>
                          );
                        })}
                      {/* endddddddddd */}
                      <Row>
                        <Col
                          md={12}
                          className="mt-3 mb-3">
                          <hr />
                        </Col>
                      </Row>
                      <Row>
                        <Col md={12}>
                          <div className="about-section">
                            <h3 className="title-text">About</h3>
                            <p className="color-8B">
                              Nemo enim ipsam voluptatem quia voluptas sit
                              aspernatur aut odit aut fugit nemo enim ipsam
                              voluptatem quia voluptas sit aspernatur aut odit
                              aut fugit Nemo enim ipsam voluptatem quia voluptas
                              sit aspernatur aut odit aut fugit nemo enim ipsam
                              voluptatem quia voluptas sit aspernatur aut odit
                              aut fugit
                            </p>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={12}>
                          <div
                            className="timeline-bg"
                            id="accordionExample">
                            <ul>
                              {/* Startttttttt */}
                              {employeeInfos.map((info3, id1) => {
                                return id1 !== 0 ? (
                                  <li key={id1}>
                                    <Row className="h-100">
                                      <Col md={1}>
                                        <div className="yearinfo float-left">
                                          {info3.dateJoined.substring(0, 4)}
                                        </div>
                                      </Col>
                                      <Col
                                        md={11}
                                        onClick={() => {
                                          open === id1
                                            ? setOpen(null)
                                            : setOpen(id1);
                                        }}>
                                        <div className="company-info-dtls">
                                          <Row className="h-100 justify-content-center align-items-center">
                                            <Col md={6}>
                                              <div className="cmpny-logo">
                                                <Image
                                                  src={info3.companyLogo}
                                                  alt=""
                                                />
                                              </div>
                                              <h5 className="company-name">
                                                {info3.companyName}
                                              </h5>
                                            </Col>
                                            <Col
                                              md={2}
                                              className="text-center">
                                              <div className="pkg-text">
                                                {info3.salary} LPA
                                              </div>
                                            </Col>
                                            <Col
                                              md={4}
                                              className="text-right">
                                              <div className="cmpny-rating">
                                                <RatingStar
                                                  unclickable
                                                  maxScore={5}
                                                  id={id1 + "0"}
                                                  size={32}
                                                  numberOfStar={5}
                                                  noBorder="true"
                                                  colors={{ mask: "#00823b" }}
                                                  // rating={info3.rating.overall}
                                                />
                                              </div>
                                              <div className="arrow-icon">
                                                <Image
                                                  src={down_icon}
                                                  alt=""
                                                  className="Image-fluid"
                                                />
                                              </div>
                                            </Col>
                                          </Row>
                                          <Collapse in={open === id1}>
                                            <div className="rating-details">
                                              <Row>
                                                <Col>
                                                  <Row>
                                                    <Col md={3}>
                                                      <p>Communication</p>
                                                    </Col>
                                                    <Col md={4}>
                                                      <RatingStar
                                                        unclickable
                                                        maxScore={5}
                                                        id={id1 + "1"}
                                                        size={32}
                                                        numberOfStar={5}
                                                        noBorder="true"
                                                        colors={{
                                                          mask: "#00823b",
                                                        }}
                                                        // rating={
                                                        //   info3.rating
                                                        //     .communication
                                                        // }
                                                      />
                                                    </Col>
                                                  </Row>
                                                  <Row>
                                                    <Col md={3}>
                                                      <p>Attitude</p>
                                                    </Col>
                                                    <Col md={4}>
                                                      <RatingStar
                                                        unclickable
                                                        maxScore={5}
                                                        id={id1 + "2"}
                                                        size={32}
                                                        noBorder="true"
                                                        colors={{
                                                          mask: "#00823b",
                                                        }}
                                                        // rating={
                                                        //   info3.rating.attitude
                                                        // }
                                                      />
                                                    </Col>
                                                  </Row>
                                                  <Row>
                                                    <Col md={3}>
                                                      <p>Ability to learn</p>
                                                    </Col>
                                                    <Col md={4}>
                                                      <RatingStar
                                                        unclickable
                                                        maxScore={5}
                                                        id={id1 + "3"}
                                                        size={32}
                                                        noBorder="true"
                                                        colors={{
                                                          mask: "#00823b",
                                                        }}
                                                        // rating={
                                                        //   info3.rating
                                                        //     .abilityToLearn
                                                        // }
                                                      />
                                                    </Col>
                                                  </Row>
                                                  <Row>
                                                    <Col md={3}>
                                                      <p>Punctuality</p>
                                                    </Col>
                                                    <Col md={4}>
                                                      <RatingStar
                                                        unclickable
                                                        maxScore={5}
                                                        id={id1 + "4"}
                                                        size={32}
                                                        noBorder="true"
                                                        colors={{
                                                          mask: "#00823b",
                                                        }}
                                                        // rating={
                                                        //   info3.rating
                                                        //     .punctuality
                                                        // }
                                                      />
                                                    </Col>
                                                  </Row>
                                                  <Row>
                                                    <Col md={3}>
                                                      <p>Commitment</p>
                                                    </Col>
                                                    <Col md={4}>
                                                      <RatingStar
                                                        unclickable
                                                        maxScore={5}
                                                        id={id1 + "5"}
                                                        size={32}
                                                        noBorder="true"
                                                        colors={{
                                                          mask: "#00823b",
                                                        }}
                                                        // rating={
                                                        //   info3.rating
                                                        //     .commitment
                                                        // }
                                                      />
                                                    </Col>
                                                  </Row>
                                                  <Row>
                                                    <Col md={3}>
                                                      <p>Trustworthiness</p>
                                                    </Col>
                                                    <Col md={4}>
                                                      <RatingStar
                                                        unclickable
                                                        maxScore={5}
                                                        id={id1 + "6"}
                                                        size={32}
                                                        noBorder="true"
                                                        colors={{
                                                          mask: "#00823b",
                                                        }}
                                                        // rating={
                                                        //   info3.rating
                                                        //     .trustworthiness
                                                        // }
                                                      />
                                                    </Col>
                                                  </Row>
                                                  <Row>
                                                    <Col md={3}>
                                                      <p>Skill</p>
                                                    </Col>
                                                    <Col md={4}>
                                                      <RatingStar
                                                        unclickable
                                                        maxScore={5}
                                                        id={id1 + "7"}
                                                        size={32}
                                                        noBorder="true"
                                                        colors={{
                                                          mask: "#00823b",
                                                        }}
                                                        // rating={
                                                        //   info3.rating.skill
                                                        // }
                                                      />
                                                    </Col>
                                                  </Row>
                                                  <Row>
                                                    <Col md={3}>
                                                      <p>Team Player</p>
                                                    </Col>
                                                    <Col md={4}>
                                                      <RatingStar
                                                        unclickable
                                                        maxScore={5}
                                                        id={id1 + "8"}
                                                        size={32}
                                                        noBorder="true"
                                                        colors={{
                                                          mask: "#00823b",
                                                        }}
                                                        // rating={
                                                        //   info3.rating
                                                        //     .teamPlayer
                                                        // }
                                                      />
                                                    </Col>
                                                  </Row>
                                                </Col>
                                                <Col>
                                                  <Row>
                                                    <Col md={10}>
                                                      <h4 className="emp-title">
                                                        {/* {
                                                          info3.recommendation
                                                            .recommendationFrom
                                                        } */}
                                                      </h4>
                                                      {"  "}
                                                      <h5>
                                                        <span className="designt-text">
                                                          {/* {
                                                            info3.recommendation
                                                              .recommenderDesignation
                                                          } */}
                                                        </span>
                                                      </h5>
                                                      <p className="color-8B">
                                                        {/* {
                                                          info3.recommendation
                                                            .recommendationMessage
                                                        } */}
                                                      </p>
                                                    </Col>
                                                  </Row>
                                                </Col>
                                              </Row>
                                            </div>
                                          </Collapse>
                                        </div>
                                      </Col>
                                    </Row>
                                  </li>
                                ) : (
                                  <></>
                                );
                              })}
                              {/* endddddddddd */}
                            </ul>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                    <div className="whitespace">&nbsp;</div>
                  </Row>
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
