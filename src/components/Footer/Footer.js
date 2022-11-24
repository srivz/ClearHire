import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer
          id="footer"
          class="pt-3 pb-3">
          <Container>
            <Row>
              <Col lg={10}>
                <ul class="list-inline mb-0">
                  <li class="list-inline-item">
                    <a href="/">About</a>
                  </li>
                  <li class="list-inline-item">
                    <a href="/">Careers</a>
                  </li>
                  <li class="list-inline-item">
                    <a href="/">Privacy</a>
                  </li>
                  <li class="list-inline-item">
                    <a href="/">Cookies</a>
                  </li>
                  <li class="list-inline-item">
                    <a href="/">Terms</a>
                  </li>
                  <li class="list-inline-item">
                    <a href="/">Help</a>
                  </li>
                  <li class="list-inline-item">
                    <a href="/">Feedback</a>
                  </li>
                </ul>
              </Col>
              <Col lg={2}>
                <p class="copyright mb-0">Copyright &copy; clearhire</p>
              </Col>
            </Row>
          </Container>
        </footer>
      </div>
    );
  }
}

export default Footer;
