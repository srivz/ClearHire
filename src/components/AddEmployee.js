import React, { Component } from "react";
import star_icon from "../assets/img/star-icon.svg";
import image_icon from "../assets/img/image-icon.svg";
import NavBar2 from "./Navs/NavBar2";
import Footer from "./Footer/Footer";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class AddEmployee extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <NavBar2 />
            <main id="main">
              <section className="addemployee-form-wrap">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="row justify-content-center align-items-center">
                        <div className="col-md-6 text-left ml-auto mr-auto">
                          <div
                            className="addemp-emp"
                            style={{ "margin-top": "150px" }}>
                            <div className="text-center">
                              <h3 className="section-main-title mb-3">
                                Add new emloyee
                              </h3>
                              <p className="mb-4">
                                Nemo enim ipsam voluptatem quia voluptas sit
                                <br />
                                aspernatur aut odit aut fugit.
                              </p>
                            </div>
                            <div className="addemp-form">
                              <div className="row form-group">
                                <div className="col-md-12">
                                  <div className="beforeuploadpic">
                                    <img
                                      src={image_icon}
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="row form-group">
                                <div className="col-md-12">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Name*"
                                  />
                                </div>
                              </div>
                              <div className="row form-group">
                                <div className="col-md-12">
                                  <select
                                    name=""
                                    id=""
                                    className="form-control">
                                    <option value="">Date Joined*</option>
                                  </select>
                                </div>
                              </div>
                              <div className="row form-group">
                                <div className="col-md-12">
                                  <select
                                    name=""
                                    id=""
                                    className="form-control">
                                    <option value="">Designation*</option>
                                  </select>
                                </div>
                              </div>
                              <div className="row form-group">
                                <div className="col-md-12">
                                  <select
                                    name=""
                                    id=""
                                    className="form-control">
                                    <option value="">Designation*</option>
                                  </select>
                                </div>
                              </div>
                              <div className="row form-group">
                                <div className="col-md-12">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Linked in url*"
                                  />
                                </div>
                              </div>
                              <div className="row form-group">
                                <div className="col-md-12">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Salary*"
                                  />
                                </div>
                              </div>
                              <div className="row form-group">
                                <div className="col-md-12">
                                  <div className="inner-box-ctn">
                                    <div className="row form-group">
                                      <div className="col-md-12">
                                        <h5>Written recommendation*</h5>
                                      </div>
                                    </div>
                                    <div className="row form-group">
                                      <div className="col-md-12">
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="Recommendation from (Name)"
                                        />
                                      </div>
                                    </div>
                                    <div className="row form-group">
                                      <div className="col-md-12">
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="Designation"
                                        />
                                      </div>
                                    </div>
                                    <div className="row form-group">
                                      <div className="col-md-12">
                                        <textarea
                                          name=""
                                          id=""
                                          cols="30"
                                          rows="5"
                                          className="form-control"
                                          style={{ resize: "none" }}></textarea>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="row form-group">
                                <label
                                  for=""
                                  className="col-md-4">
                                  Communication
                                </label>
                                <div className="col-md-8 add-emp-rating">
                                  <img
                                    src={star_icon}
                                    alt=""
                                  />
                                  <img
                                    src={star_icon}
                                    alt=""
                                  />
                                  <img
                                    src={star_icon}
                                    alt=""
                                  />
                                  <img
                                    src={star_icon}
                                    alt=""
                                  />
                                  <img
                                    src={star_icon}
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div className="row form-group">
                                <label
                                  for=""
                                  className="col-md-4">
                                  Attitude
                                </label>
                                <div className="col-md-8 add-emp-rating">
                                  <img
                                    src={star_icon}
                                    alt=""
                                  />
                                  <img
                                    src={star_icon}
                                    alt=""
                                  />
                                  <img
                                    src={star_icon}
                                    alt=""
                                  />
                                  <img
                                    src={star_icon}
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div className="row form-group">
                                <label
                                  for=""
                                  className="col-md-4">
                                  Ability to learn
                                </label>
                                <div className="col-md-8 add-emp-rating">
                                  <img
                                    src={star_icon}
                                    alt=""
                                  />
                                  <img
                                    src={star_icon}
                                    alt=""
                                  />
                                  <img
                                    src={star_icon}
                                    alt=""
                                  />
                                  <img
                                    src={star_icon}
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div className="row form-group">
                                <label
                                  for=""
                                  className="col-md-4">
                                  Punctuality
                                </label>
                                <div className="col-md-8 add-emp-rating">
                                  <img
                                    src={star_icon}
                                    alt=""
                                  />
                                  <img
                                    src={star_icon}
                                    alt=""
                                  />
                                  <img
                                    src={star_icon}
                                    alt=""
                                  />
                                  <img
                                    src={star_icon}
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div className="row form-group">
                                <label
                                  for=""
                                  className="col-md-4">
                                  Commitment
                                </label>
                                <div className="col-md-8 add-emp-rating">
                                  <img
                                    src={star_icon}
                                    alt=""
                                  />
                                  <img
                                    src={star_icon}
                                    alt=""
                                  />
                                  <img
                                    src={star_icon}
                                    alt=""
                                  />
                                  <img
                                    src={star_icon}
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div className="row form-group">
                                <label
                                  for=""
                                  className="col-md-4">
                                  Trustworthiness
                                </label>
                                <div className="col-md-8 add-emp-rating">
                                  <img
                                    src={star_icon}
                                    alt=""
                                  />
                                  <img
                                    src={star_icon}
                                    alt=""
                                  />
                                  <img
                                    src={star_icon}
                                    alt=""
                                  />
                                  <img
                                    src={star_icon}
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div className="row form-group">
                                <label
                                  for=""
                                  className="col-md-4">
                                  Skill
                                </label>
                                <div className="col-md-8 add-emp-rating">
                                  <img
                                    src={star_icon}
                                    alt=""
                                  />
                                  <img
                                    src={star_icon}
                                    alt=""
                                  />
                                  <img
                                    src={star_icon}
                                    alt=""
                                  />
                                  <img
                                    src={star_icon}
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div className="row form-group">
                                <label
                                  for=""
                                  className="col-md-4">
                                  Team Player
                                </label>
                                <div className="col-md-8 add-emp-rating">
                                  <img
                                    src={star_icon}
                                    alt=""
                                  />
                                  <img
                                    src={star_icon}
                                    alt=""
                                  />
                                  <img
                                    src={star_icon}
                                    alt=""
                                  />
                                  <img
                                    src={star_icon}
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div className="row form-group">
                                <div className="col-md-12 mt-4">
                                  <Link to="/employee-details">
                                    <Button
                                      block
                                      variant="success"
                                      className="w-100">
                                      Add Employee
                                    </Button>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </main>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default AddEmployee;
