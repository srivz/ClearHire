import React, { Component } from "react";
import star_icon from "../assets/img/star-icon.svg";
import image_icon from "../assets/img/image-icon.svg";
import NavBar2 from "./Navs/NavBar2";
import Footer from "./Footer/Footer";

class AddEmployee extends Component {
  render() {
    return (
      <div>
        <div class="container">
          <div class="row">
            <NavBar2 />
            <main id="main">
              <section class="addemployee-form-wrap">
                <div class="container">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="row justify-content-center align-items-center">
                        <div class="col-md-6 text-left ml-auto mr-auto">
                          <div
                            class="addemp-emp"
                            style={{ "margin-top": "150px" }}>
                            <div class="text-center">
                              <h3 class="section-main-title mb-3">
                                Add new emloyee
                              </h3>
                              <p class="mb-4">
                                Nemo enim ipsam voluptatem quia voluptas sit
                                <br />
                                aspernatur aut odit aut fugit.
                              </p>
                            </div>
                            <div class="addemp-form">
                              <div class="row form-group">
                                <div class="col-md-12">
                                  <div class="beforeuploadpic">
                                    <img
                                      src={image_icon}
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                              <div class="row form-group">
                                <div class="col-md-12">
                                  <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Name*"
                                  />
                                </div>
                              </div>
                              <div class="row form-group">
                                <div class="col-md-12">
                                  <select
                                    name=""
                                    id=""
                                    class="form-control">
                                    <option value="">Date Joined*</option>
                                  </select>
                                </div>
                              </div>
                              <div class="row form-group">
                                <div class="col-md-12">
                                  <select
                                    name=""
                                    id=""
                                    class="form-control">
                                    <option value="">Designation*</option>
                                  </select>
                                </div>
                              </div>
                              <div class="row form-group">
                                <div class="col-md-12">
                                  <select
                                    name=""
                                    id=""
                                    class="form-control">
                                    <option value="">Designation*</option>
                                  </select>
                                </div>
                              </div>
                              <div class="row form-group">
                                <div class="col-md-12">
                                  <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Linked in url*"
                                  />
                                </div>
                              </div>
                              <div class="row form-group">
                                <div class="col-md-12">
                                  <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Salary*"
                                  />
                                </div>
                              </div>
                              <div class="row form-group">
                                <div class="col-md-12">
                                  <div class="inner-box-ctn">
                                    <div class="row form-group">
                                      <div class="col-md-12">
                                        <h5>Written recommendation*</h5>
                                      </div>
                                    </div>
                                    <div class="row form-group">
                                      <div class="col-md-12">
                                        <input
                                          type="text"
                                          class="form-control"
                                          placeholder="Recommendation from (Name)"
                                        />
                                      </div>
                                    </div>
                                    <div class="row form-group">
                                      <div class="col-md-12">
                                        <input
                                          type="text"
                                          class="form-control"
                                          placeholder="Designation"
                                        />
                                      </div>
                                    </div>
                                    <div class="row form-group">
                                      <div class="col-md-12">
                                        <textarea
                                          name=""
                                          id=""
                                          cols="30"
                                          rows="5"
                                          class="form-control"
                                          style={{ resize: "none" }}></textarea>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="row form-group">
                                <label
                                  for=""
                                  class="col-md-4">
                                  Communication
                                </label>
                                <div class="col-md-8 add-emp-rating">
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
                              <div class="row form-group">
                                <label
                                  for=""
                                  class="col-md-4">
                                  Attitude
                                </label>
                                <div class="col-md-8 add-emp-rating">
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
                              <div class="row form-group">
                                <label
                                  for=""
                                  class="col-md-4">
                                  Ability to learn
                                </label>
                                <div class="col-md-8 add-emp-rating">
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
                              <div class="row form-group">
                                <label
                                  for=""
                                  class="col-md-4">
                                  Punctuality
                                </label>
                                <div class="col-md-8 add-emp-rating">
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
                              <div class="row form-group">
                                <label
                                  for=""
                                  class="col-md-4">
                                  Commitment
                                </label>
                                <div class="col-md-8 add-emp-rating">
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
                              <div class="row form-group">
                                <label
                                  for=""
                                  class="col-md-4">
                                  Trustworthiness
                                </label>
                                <div class="col-md-8 add-emp-rating">
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
                              <div class="row form-group">
                                <label
                                  for=""
                                  class="col-md-4">
                                  Skill
                                </label>
                                <div class="col-md-8 add-emp-rating">
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
                              <div class="row form-group">
                                <label
                                  for=""
                                  class="col-md-4">
                                  Team Player
                                </label>
                                <div class="col-md-8 add-emp-rating">
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
                              <div class="row form-group">
                                <div class="col-md-12 mt-4">
                                  <button class="btn btn-success w-100">
                                    Add Employee
                                  </button>
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
