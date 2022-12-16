import React, { useRef, useState } from "react";
import Footer from "./Footer/Footer";
import {
  Button,
  Col,
  Container,
  Image,
  Row,
  Form,
  Modal,
} from "react-bootstrap";
import Webcam from "react-webcam";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { auth, database, storage } from "../firebase-config";
import { doc, updateDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import NavBar3 from "./Navs/NavBar3";

export default function UploadDocuments() {
  const [recruit, setRecruit] = useState({
    adhaarCardNumber: null,
    voterId: null,
    tenthMark: null,
    twelvethMark: null,
    linkedIn: null,
    recruitImage: null,
  });
  const [voterIdFile, setVoterIdFile] = useState({
    name: "Add pdf",
  });
  const [twelvethMarkFile, setTwelvethMarkFile] = useState({
    name: "Add pdf",
  });
  const [tenthMarkFile, setTenthMarkFile] = useState({
    name: "Add pdf",
  });

  const [imageUrl, setImageUrl] = useState(null);

  const [show, setShow] = useState(false);
  const webRef = useRef(null);

  onAuthStateChanged(auth, (user) => {
    if (user) {
    } else {
      window.location.href = "/";
    }
  });

  const handleChange = (event) => {
    let newInput = { [event.target.name]: event.target.value };
    setRecruit({ ...recruit, ...newInput });
  };

  function handleShow() {
    setShow(true);
  }
  function handleRemoveImage() {
    setImageUrl(null);
    recruit.recruitImage = null;
  }
  const showImage = (event) => {
    setImageUrl(webRef.current.getScreenshot());
    recruit.recruitImage = webRef.current.getScreenshot();
    setShow(false);
  };
  const handleValidation = () => {
    let fields = recruit;
    let formIsValid = false;
    if (
      fields["adhaarCardNumber"] !== null &&
      fields["linkedIn"] !== null &&
      fields["voterId"] !== null &&
      fields["tenthMark"] !== null &&
      fields["twelvethMark"] !== null &&
      fields["recruitImage"] !== null
    ) {
      formIsValid = true;
    }

    return formIsValid;
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (handleValidation()) {
      registerRecruit();
    } else {
      alert("Fill the form properly!!");
    }
  };

  const registerRecruit = async () => {
    const docData = {
      adhaarCardNumber: recruit.adhaarCardNumber,
      voterId: recruit.voterId,
      tenthMark: recruit.tenthMark,
      linkedIn: recruit.linkedIn,
      twelvethMark: recruit.twelvethMark,
      recruitImage: recruit.recruitImage,
    };
    await updateDoc(doc(database, "recruit", auth.currentUser.email), docData)
      .then(() => {
        window.location.href = "/recruitAcceptPage";
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  function handleImageChange(event) {
    if (
      event.target.files[0] &&
      (event.target.files[0].type === "image/png" ||
        event.target.files[0].type === "image/jpeg" ||
        event.target.files[0].type === "image/jpg" ||
        event.target.files[0].type === "image/bmp" ||
        event.target.files[0].type === "image/gif" ||
        event.target.files[0].type === "image/webp")
    ) {
      handleImageUpload(event.target.files[0]);
    } else {
      alert("Upload .png, .jpg, .jpeg, .bmp, .gif, .webp files only.");
    }
  }
  function handleImageUpload(file) {
    const recruitImageRef = ref(
      storage,
      "/recruits/" + recruit.adhaarCardNumber + "/image/" + file.name
    );
    uploadBytes(recruitImageRef, file)
      .then(() => {
        getDownloadURL(recruitImageRef)
          .then((url) => {
            setImageUrl(url);
            recruit.recruitImage = url;
          })
          .catch((err) => {
            console.log(err.message);
          });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  function handleVoterIdChange(event) {
    if (
      event.target.files[0] &&
      event.target.files[0].type === "application/pdf"
    ) {
      setVoterIdFile(event.target.files[0]);
      handleVoterIdUpload(event.target.files[0]);
    } else {
      setVoterIdFile(null);
      alert("Upload .pdf files only.");
    }
  }
  function handleVoterIdUpload(file) {
    const recruitVoterIdRef = ref(
      storage,
      "/recruits/" + recruit.adhaarCardNumber + "/VoterId/" + file.name
    );
    uploadBytes(recruitVoterIdRef, file)
      .then(() => {
        getDownloadURL(recruitVoterIdRef)
          .then((url) => {
            recruit.voterId = url;
          })
          .catch((err) => {
            console.log(err.message);
          });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  function handleTwelvethMarkChange(event) {
    if (
      event.target.files[0] &&
      event.target.files[0].type === "application/pdf"
    ) {
      setTwelvethMarkFile(event.target.files[0]);
      handleTwelvethMarkUpload(event.target.files[0]);
    } else {
      setTwelvethMarkFile(null);
      alert("Upload .pdf files only.");
    }
  }
  function handleTwelvethMarkUpload(file) {
    const recruitTwelvethMarkSheetRef = ref(
      storage,
      "/recruits/" + recruit.adhaarCardNumber + "/TwelveMarkSheet/" + file.name
    );
    uploadBytes(recruitTwelvethMarkSheetRef, file)
      .then(() => {
        getDownloadURL(recruitTwelvethMarkSheetRef)
          .then((url) => {
            recruit.twelvethMark = url;
          })
          .catch((err) => {
            console.log(err.message);
          });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  function handleTenthMarkChange(event) {
    if (
      event.target.files[0] &&
      event.target.files[0].type === "application/pdf"
    ) {
      setTenthMarkFile(event.target.files[0]);
      handleTenthMarkUpload(event.target.files[0]);
    } else {
      setTenthMarkFile(null);
      alert("Upload .pdf files only.");
    }
  }
  function handleTenthMarkUpload(file) {
    const recruitTenthMarkSheetRef = ref(
      storage,
      "/recruits/" + recruit.adhaarCardNumber + "/TenthMarkSheet/" + file.name
    );
    uploadBytes(recruitTenthMarkSheetRef, file)
      .then(() => {
        getDownloadURL(recruitTenthMarkSheetRef)
          .then((url) => {
            recruit.tenthMark = url;
          })
          .catch((err) => {
            console.log(err.message);
          });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  return (
    <div>
      <Container>
        <Row>
          <NavBar3 />
          <main id="main">
            <section className="addemployee-form-wrap">
              <Container>
                <Row>
                  <Col md={12}>
                    <Row className="justify-content-center align-items-center">
                      <Col
                        md={6}
                        className="text-left ml-auto mr-auto">
                        <div
                          className="addemp-emp"
                          style={{ marginTop: "150px" }}>
                          <div className="text-center">
                            <h3 className="section-main-title mb-3">
                              Upload your Documents
                            </h3>
                            <p className="mb-4">
                              Nemo enim ipsam voluptatem quia voluptas sit
                              <br />
                              aspernatur aut odit aut fugit.
                            </p>
                          </div>
                          <div className="employee-add-form">
                            <h4 className="green-text">
                              Residential and Age proof
                            </h4>
                            <Row className="form-group">
                              <Col md={12}>
                                <Form.Group
                                  className="mb-3"
                                  controlId="formBasicName">
                                  <Form.Label className="mb-2">
                                    Aadhaar Number
                                  </Form.Label>
                                  <Form.Control
                                    type="number"
                                    required={true}
                                    minLength={12}
                                    maxLength={12}
                                    name="adhaarCardNumber"
                                    placeholder="Enter Aadhaar Number"
                                    defaultValue={recruit.adhaarCardNumber}
                                    onChange={handleChange}
                                  />
                                  <Form.Text className="text-muted"></Form.Text>
                                </Form.Group>
                              </Col>
                            </Row>
                            <Row className="form-group">
                              <Col md={12}>
                                <Form.Label className="mb-2 label">
                                  Voter Id
                                </Form.Label>
                                <Form.Group
                                  controlId="formFile3"
                                  className="mb-3 employee-file">
                                  <Form.Label className="mb-2 label text-center">
                                    {voterIdFile.name}
                                    <span className="label-icon">
                                      <i className="fa-solid fa-plus"></i>
                                    </span>
                                  </Form.Label>
                                  <Form.Control
                                    className="mb-2"
                                    type="file"
                                    name="voterIdFile"
                                    accept=".pdf"
                                    onChange={handleVoterIdChange}
                                  />
                                </Form.Group>
                              </Col>
                            </Row>
                            <h4 className="green-text">
                              Education Certificates
                            </h4>
                            <Row className="form-group">
                              <Col md={12}>
                                <p className="mb-2">10th Pass Certificate*</p>
                                <Form.Group
                                  controlId="formFile1"
                                  className="mb-3 employee-file">
                                  <Form.Label className="mb-2 label text-center">
                                    {tenthMarkFile.name}
                                    <span className="label-icon">
                                      <i className="fa-solid fa-plus"></i>
                                    </span>
                                  </Form.Label>
                                  <Form.Control
                                    className="mb-2"
                                    type="file"
                                    name="tenthMarkFile"
                                    accept=".pdf"
                                    onChange={handleTenthMarkChange}
                                  />
                                </Form.Group>
                              </Col>
                            </Row>
                            <Row className="form-group">
                              <Col md={12}>
                                <p className="mb-2">12th Pass Certificate*</p>
                                <Form.Group
                                  controlId="formFile2"
                                  className="mb-3 employee-file">
                                  <Form.Label className="mb-2 label text-center">
                                    {twelvethMarkFile.name}
                                    <span className="label-icon">
                                      <i className="fa-solid fa-plus"></i>
                                    </span>
                                  </Form.Label>
                                  <Form.Control
                                    className="mb-2"
                                    type="file"
                                    name="twelvethMarkFile"
                                    accept=".pdf"
                                    onChange={handleTwelvethMarkChange}
                                  />
                                </Form.Group>
                              </Col>
                            </Row>
                            <Row className="form-group">
                              <Col md={12}>
                                <Form.Group
                                  className="mb-3"
                                  controlId="formLinkedIn">
                                  <Form.Label className="mb-2">
                                    LinkedIn URL
                                  </Form.Label>
                                  <Form.Control
                                    type="text"
                                    required={true}
                                    name="linkedIn"
                                    placeholder="Enter LinkedIn URL*"
                                    defaultValue={recruit.linkedIn}
                                    onChange={handleChange}
                                  />
                                  <Form.Text className="text-muted"></Form.Text>
                                </Form.Group>
                              </Col>
                            </Row>
                            <Row className="form-group text-center">
                              <Col
                                style={{
                                  display: imageUrl ? "none" : "block",
                                  margin: "auto",
                                }}
                                md={5}>
                                <Form.Group
                                  controlId="formFile4"
                                  className="mb-3 recruit-image">
                                  <Form.Label className="mb-2">
                                    <div className="beforeuploadpic">
                                      <Image
                                        src={null}
                                        alt=""
                                      />
                                    </div>
                                  </Form.Label>
                                  <br />
                                  Upload your image
                                  <Form.Control
                                    className="mb-2"
                                    type="file"
                                    name="imageFile"
                                    accept=".png,.jpg,.jpeg,.bmp,.gif,.webp"
                                    onChange={handleImageChange}
                                  />
                                </Form.Group>
                              </Col>
                              <Col
                                style={{
                                  display: imageUrl ? "none" : "block",
                                  margin: "auto",
                                }}
                                md={1}>
                                (or)
                              </Col>
                              <Col
                                md={5}
                                style={{
                                  display: imageUrl ? "none" : "block",
                                }}>
                                <Form.Group className="mb-3 recruit-image">
                                  <Form.Label className="mb-2">
                                    <div className="beforeuploadpic">
                                      <Image
                                        onClick={handleShow}
                                        src={null}
                                        alt=""
                                      />
                                    </div>
                                  </Form.Label>
                                  <br />
                                  Open Camera
                                </Form.Group>
                                <Modal
                                  show={show}
                                  fullscreen={true}
                                  onHide={() => setShow(false)}>
                                  <Modal.Header closeButton>
                                    <Modal.Title className="text-center">
                                      Capture Image
                                    </Modal.Title>
                                  </Modal.Header>
                                  <Modal.Body className="text-center">
                                    <Webcam
                                      ref={webRef}
                                      height={"80%"}
                                    />
                                    <Button
                                      onClick={showImage}
                                      variant="primary"
                                      className="w-100">
                                      Capture
                                    </Button>
                                  </Modal.Body>
                                </Modal>
                              </Col>
                            </Row>
                            <Row
                              className="form-group1 text-center"
                              style={{ display: imageUrl ? "block" : "none" }}>
                              <Col>
                                <Form.Group className="mb-3 recruit-image">
                                  <Form.Label className="mb-2">
                                    <div className="beforeuploadpic">
                                      <Image
                                        src={imageUrl}
                                        alt=""
                                      />
                                    </div>
                                  </Form.Label>
                                  <br />
                                  <span onClick={handleRemoveImage}>
                                    Remove
                                  </span>
                                </Form.Group>
                              </Col>
                            </Row>
                            <Row className="form-group">
                              <Col
                                md={12}
                                className="mt-4">
                                <Button
                                  onClick={handleSubmit}
                                  variant="success"
                                  className="w-100">
                                  Complete
                                </Button>
                              </Col>
                            </Row>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </section>
          </main>
          <p />
          <p />
          <p />
          <p />
          <Footer />
        </Row>
      </Container>
    </div>
  );
}
