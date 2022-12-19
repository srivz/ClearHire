import React, { useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Footer from "../Footer/Footer";
import NavBar3 from "../Navs/NavBar3";
import { auth } from "../../firebase-config";
import { onAuthStateChanged } from "firebase/auth";

export default function WelcomeOnboard() {
  const photoUrl = useState(JSON.parse(localStorage.getItem("employeePhoto")));
  const name = useState(JSON.parse(localStorage.getItem("employeeName")));
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setTimeout(() => {
        window.location.href = "/profile";
      }, 6000);
    } else {
      window.location.href = "/";
    }
  });

  return (
    <div>
      <NavBar3 />
      <main id="main">
        <section className="welcome h-100vh">
          <Container>
            <Row>
              <Col md={12}>
                <Row className="h-100vh justify-content-center align-items-center">
                  <Col md={3}>&nbsp;</Col>
                  <Col
                    md={6}
                    className="text-center">
                    <div>
                      <div className="beforeuploadpic">
                        <Image
                          src={photoUrl}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="loginwrap">
                      <h3 className="section-main-title mb-3">
                        Welcome onboard!
                        <br />
                        <span className="text-green">{name}</span>
                      </h3>
                      <p className="mb-5">
                        Nemo enim ipsam voluptatem quia voluptas sit
                        <br /> aspernatur aut odit aut fugit
                      </p>
                    </div>
                  </Col>
                  <Col md={3}>&nbsp;</Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}
