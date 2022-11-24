import React, { Component } from "react";
import home_bg from "../assets/img/home-bg.png";
import search_icon from "../assets/img/search-icon.svg";
import chat_icon from "../assets/img/chat-icon.svg";
import work_icon from "../assets/img/work-icon.svg";
import simple_work_icon from "../assets/img/simple-work-icon.svg";
import youtube_searched_icon from "../assets/img/youtube-searched-icon.svg";
import search_dollar_icon from "../assets/img/search-dollar-icon.svg";
import "../assets/css/style.css";
import { Form } from "react-bootstrap";
import NavBar from "./Navs/NavBar";
import Footer from "./Footer/Footer";

class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <NavBar />
        </div>
        <div class="main">
          <section class="home-login">
            <div class="container-fluid">
              <div class="row justify-content-center align-items-center">
                <div class="col-md-6 pl-0">
                  <div class="banner-img">
                    <img
                      src={home_bg}
                      alt=""
                      class="img-fluid"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="row">
                    <div class="col-md-3">&nbsp;</div>
                    <div class="col-md-6">
                      <div class="loginwrap">
                        <div class="text-center">
                          <h4 class="mb-5">Login to your account</h4>
                        </div>
                        <form action="">
                          <div class="row form-group">
                            <div class="col-md-12">
                              <Form.Control
                                type="text"
                                class="form-control"
                                placeholder="Email address"
                              />
                            </div>
                          </div>
                          <br />
                          <div class="row form-group">
                            <div class="col-md-12">
                              <Form.Control
                                type="password"
                                class="form-control"
                                placeholder="Password"
                              />
                            </div>
                          </div>
                          <br />
                          <div class="row form-group">
                            <div class="col-md-12">
                              <p class="mt-2 forgot-label">
                                Forgot password?
                                <a
                                  href="/"
                                  class="text-green">
                                  <strong>click here</strong>
                                </a>
                              </p>
                            </div>
                          </div>
                          <br />
                          <div class="row form-group">
                            <div class="col-md-12">
                              <button class="btn btn-success mt-4 w-100">
                                Login
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div class="col-md-3">&nbsp;</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="gray-bg ourservice pt-pb-50">
            <div class="container">
              <div class="text-center">
                <h3 class="section-main-title">
                  Eprehenderit in voluptate velit esse cillum
                </h3>
              </div>
              <div class="row">
                <div class="col-md-3 text-center">
                  <div class="s-icon">
                    <img
                      src={search_icon}
                      alt=""
                      class="mb-4"
                    />
                  </div>
                  <div class="s-title">
                    <h5>Voluptas sit aspernatu</h5>
                  </div>
                </div>
                <div class="col-md-3 text-center">
                  <div class="s-icon">
                    <img
                      src={chat_icon}
                      alt=""
                      class="mb-4"
                    />
                  </div>
                  <div class="s-title">
                    <h5>Voluptas sit aspernatu</h5>
                  </div>
                </div>
                <div class="col-md-3 text-center">
                  <div class="s-icon">
                    <img
                      src={work_icon}
                      alt=""
                      class="mb-4"
                    />
                  </div>
                  <div class="s-title">
                    <h5>Voluptas sit aspernatu</h5>
                  </div>
                </div>
                <div class="col-md-3 text-center">
                  <div class="s-icon">
                    <img
                      src={simple_work_icon}
                      alt=""
                      class="mb-4"
                    />
                  </div>
                  <div class="s-title">
                    <h5>Voluptas sit aspernatu</h5>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="green-bg pt-pb-50 signup-green">
            <div class="container">
              <div class="row justify-content-center align-items-center mt-4">
                <div class="col-md-2">
                  <img
                    src={youtube_searched_icon}
                    alt=""
                    width="180"
                  />
                </div>
                <div class="col-md-8">
                  <div class="text-center">
                    <h3 class="section-main-title mt-5">
                      Eprehenderit in voluptate velit esse cillum
                    </h3>
                  </div>
                  <div class="text-center">
                    <p>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit, sed quia
                      <br />
                      consequuntur magni dolores eos qui ratione voluptatem
                      sequ.
                    </p>
                    <button class="btn btn-default w-50 mt-4 mb-4">
                      Sign up
                    </button>
                  </div>
                </div>
                <div class="col-md-2">
                  <img
                    src={search_dollar_icon}
                    alt=""
                    width="180"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
