import React, { Component } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import Footer from "./Footer/Footer";
import NavBar2 from "./Navs/NavBar2";
import c_logo from "../assets/img/clogo-1.png";
import external_link_icon from "../assets/img/external-link-icon.svg";
import person_add_icon from "../assets/img/person-add-icon.svg";
import upload_pic from "../assets/img/upload-pic.jpg";
import wishlist_icon from "../assets/img/wishlist-icon.svg";
import rating_icon from "../assets/img/rating-icon.svg";
import { Link } from "react-router-dom";

class SearchResult extends Component {
  render() {
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
                        <div className="c-logo">
                          <Image
                            src={c_logo}
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
                        <h4>Brand Moustache</h4>
                        <p>Since 2013</p>
                        <p>
                          <a
                            href="/"
                            style={{ color: "#4B9CBB" }}>
                            www.brandmoustache.com
                            <Image
                              src={external_link_icon}
                              alt=""
                            />
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="upload-emp-details">
                      <Link to="/add-employee">
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
                                  <Image
                                    src={wishlist_icon}
                                    alt=""
                                  />
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
                          <Row className="mt-4">
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
                          </Row>
                        </div>
                      </Col>
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
                                  <Image
                                    src={wishlist_icon}
                                    alt=""
                                  />
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
                          <Row className="mt-4">
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
                          </Row>
                        </div>
                      </Col>
                    </Row>

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
                                  <Image
                                    src={wishlist_icon}
                                    alt=""
                                  />
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
                          <Row className="mt-4">
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
                          </Row>
                        </div>
                      </Col>
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
                                  <Image
                                    src={wishlist_icon}
                                    alt=""
                                  />
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
                          <Row className="mt-4">
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
                          </Row>
                        </div>
                      </Col>
                    </Row>

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
                                  <Image
                                    src={wishlist_icon}
                                    alt=""
                                  />
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
                          <Row className="mt-4">
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
                          </Row>
                        </div>
                      </Col>
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
                                  <Image
                                    src={wishlist_icon}
                                    alt=""
                                  />
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
                          <Row className="mt-4">
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
                          </Row>
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
                                    <Image
                                      src={wishlist_icon}
                                      alt=""
                                    />
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
                                    <Image
                                      src={wishlist_icon}
                                      alt=""
                                    />
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
                                    <Image
                                      src={wishlist_icon}
                                      alt=""
                                    />
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
                            <Row className="mt-4">
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
                            </Row>
                          </div>
                        </Col>
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
                                    <Image
                                      src={wishlist_icon}
                                      alt=""
                                    />
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
                                    <Image
                                      src={wishlist_icon}
                                      alt=""
                                    />
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
                                    <Image
                                      src={wishlist_icon}
                                      alt=""
                                    />
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
                            <Row className="mt-4">
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
                            </Row>
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
        </main>
        <Footer />
      </div>
    );
  }
}

export default SearchResult;
