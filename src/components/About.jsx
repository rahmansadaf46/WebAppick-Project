import { Container, Row, Col, Button, Card } from "react-bootstrap";

import image from "../assets/images/person3.jpg";
import avatar from "../assets/images/avatar1.jpg";
import underline from "../assets/images/underline.jpg";
import aboutBg from "../assets/images/about-bg.jpg";
import personIcon from "../assets/images/personIcon.jpg";
import personTickIcon from "../assets/images/personTickIcon.jpg";
import videoIcon from "../assets/images/videoIcon.jpg";
import playIcon from "../assets/images/playIcon.jpg";

const About = () => {
  return (
    <Container fluid className="hero-section">
      <Row className="align-items-center">
        <Col lg={6}>
          <div
            className="d-none d-lg-flex justify-content-between"
            style={{ position: "relative", left: "70px" }}
          >
            <div
              style={{
                position: "absolute",
                backgroundColor: "#F88C3D",
                color: "white",
                padding: "5px 8px",
                borderRadius: "5px",
                top: "190px",
                left: "370px",
                transform: "rotate(-15deg)",
                transformOrigin: "top left",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-pencil-fill"
                viewBox="0 0 16 16"
              >
                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
              </svg>
            </div>
            <div
              style={{
                position: "absolute",
                backgroundColor: "#7252A4",
                color: "white",
                padding: "5px 8px",
                borderRadius: "5px",
                top: "140px",
                left: "30px",
                transform: "rotate(15deg)",
                transformOrigin: "top left",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-play-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445" />
              </svg>
            </div>
            <div
              style={{
                position: "absolute",
                backgroundColor: "#23BDEE",
                color: "white",
                padding: "5px 8px",
                borderRadius: "5px",
                bottom: "80px",
                left: "0px",
                transform: "rotate(-15deg)",
                transformOrigin: "top left",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-calendar-week"
                viewBox="0 0 16 16"
              >
                <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z" />
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
              </svg>
            </div>
            <div
              style={{
                position: "absolute",
                color: "white",
                padding: "5px 8px",
                borderRadius: "5px",
                bottom: "-5px",
                left: "0px",
                zIndex: "-1",
              }}
            >
              <img src={aboutBg} alt="Hero" className="img-fluid" />
            </div>
            <Card
              style={{
                width: "18rem",
                position: "absolute",
                top: "390px",
                left: "190px",
                backgroundColor: "rgba(255, 255, 255, 0.9)",
              }}
            >
              <Card.Body>
                <Row>
                  <Col md={3}>
                    <img
                      src={avatar}
                      style={{ width: "200px", borderRadius: "50%" }}
                      alt="Hero"
                      className="img-fluid"
                    />
                  </Col>
                  <Col md={9}>
                    <div
                      style={{
                        lineHeight: "0.9",
                        position: "relative",
                        left: "-10px",
                      }}
                    >
                      <h6>Learn basic ui ux design</h6>
                      <small style={{ color: "gray" }}>Today at 12 PM</small>
                    </div>
                    <Button
                      style={{
                        color: "white",
                        backgroundColor: "#FF4F8E",
                        border: "none",
                      }}
                      href="#register"
                      className="px-4 mt-2"
                    >
                      Join Now
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <img src={image} alt="Hero" className="img-fluid" />
          </div>
        </Col>
        <Col className="mt-sm-5 mt-md-5" lg={6} md={12} sm={12}>
          <div
            style={{
              position: "relative",
              bottom: "50px",
              fontFamily: "Poppins, sans-serif",
              fontWeight: "bold",
            }}
            className="px-5  mt-md-5 mt-ms-5"
          >
            <h1 className="description-heading description-heading-font">
              <b>Let us </b>
              <span
                className="description-heading-font"
                style={{ position: "relative", color: "#245D51" }}
              >
                <b>Skill Shoot</b>{" "}
                <img className="curved-underline-about" src={underline} />
              </span>
            </h1>
            <div
              className="description"
              style={{ color: "#A7BFB9", lineHeight: 2 }}
            >
              <span>
                We are a company engaged in education with the aim of improving
                the skills of many people and so that younger people can reach
                the career paths they want.
              </span>
            </div>
            <br />
            <div
              className="description"
              style={{ color: "#A7BFB9", lineHeight: 2 }}
            >
              <span>
                we have been around since 2019 with currently 100+ updated
                materials and 15K members who have joined.
              </span>
            </div>
            <br />
            <div className="text-start mt-4">
              <Row>
                <Col lg={6} md={6} xs={6}>
                  <div className="d-flex justify-content-lg-start justify-content-center p-1">
                    <Row>
                      <Col xs={3}>
                        <img
                          src={personIcon}
                          style={{ width: "200px", borderRadius: "50%" }}
                          alt="personIcon"
                          className="img-fluid"
                        />
                      </Col>
                      <Col xs={9}>
                        <div
                          style={{
                            position: "relative",
                            left: "-10px",
                            top: "15px",
                          }}
                        >
                          <h6 className="about-icon-details">
                            <b>15k People Join</b>
                          </h6>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col lg={6} md={6} xs={6}>
                  <div className="d-flex justify-content-lg-start justify-content-center p-1">
                    <Row>
                      <Col xs={3}>
                        <img
                          src={personTickIcon}
                          style={{ width: "200px", borderRadius: "50%" }}
                          alt="personTickIcon"
                          className="img-fluid"
                        />
                      </Col>
                      <Col xs={9}>
                        <div
                          style={{
                            position: "relative",
                            left: "-10px",
                            top: "15px",
                          }}
                        >
                          <h6 className="about-icon-details">
                            <b>Trusted Mentor</b>
                          </h6>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col lg={6} md={6} xs={6}>
                  <div className="d-flex justify-content-lg-start justify-content-center p-1">
                    <Row>
                      <Col xs={3}>
                        <img
                          src={videoIcon}
                          style={{ width: "200px", borderRadius: "50%" }}
                          alt="videoIcon"
                          className="img-fluid"
                        />
                      </Col>
                      <Col xs={9}>
                        <div
                          style={{
                            position: "relative",
                            left: "-10px",
                            top: "15px",
                          }}
                        >
                          <h6 className="about-icon-details">
                            <b>30+ Free Videos</b>
                          </h6>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col lg={6} md={6} xs={6}>
                  <div className="d-flex justify-content-lg-start justify-content-center p-1">
                    <Row>
                      <Col xs={3}>
                        <img
                          src={playIcon}
                          style={{ width: "200px", borderRadius: "50%" }}
                          alt="playIcon"
                          className="img-fluid"
                        />
                      </Col>
                      <Col xs={9}>
                        <div
                          style={{
                            position: "relative",
                            left: "-10px",
                            top: "15px",
                          }}
                        >
                          <h6 className="about-icon-details">
                            <b>100+ Premium Videos</b>
                          </h6>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
