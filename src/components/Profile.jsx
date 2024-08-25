import { Col, Container, Row } from "react-bootstrap";
import avatar from "../assets/images/avatar2.jpg";
import cube from "../assets/images/cube.jpg";
import pirpleTriangle from "../assets/images/pirpleTriangle.jpg";
import blueCircle from "../assets/images/blueCircle.jpg";
import orangBox from "../assets/images/orangBox.jpg";




const Profile = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col className="profile-heading" lg={6} md={12} sm={12} xs={12}>
            <h2>
              Why do we
              <span className="brown-text"> exist?</span>{" "}
            </h2>
            <div className="profile-heading-2">
              <span>
                Because we know that many people or companies have the same
                problem when it comes to how difficult it is to improve their
                skills
              </span>
            </div>
            <div className="d-flex justify-content-lg-start justify-content-center my-4">
              <Row>
                <Col xs={3}>
                  <div>
                    <img
                      src={avatar}
                      style={{
                        borderRadius: "50%",
                        width: "50px",
                      }}
                      alt="Hero"
                      className="img-fluid"
                    />
                  </div>
                </Col>
                <Col xs={9}>
                  <div className="text-start" style={{ lineHeight: "0.1" }}>
                    <h6>Jerony Pulquosta</h6>
                    <small style={{ color: "#808080" }}>CEO Skill Shoot</small>
                  </div>
                </Col>
              </Row>
            </div>
            <div
              style={{ borderTop: "1px solid lightGray", margin: "10px 20px" }}
            ></div>
            <div className="pt-3 text-lg-start text-center d-flex justify-content-lg-start justify-content-center">
              <div className="mx-3">
                <h2>
                  <b>100+</b>
                </h2>
                <small style={{ color: "#808080" }}>Updated Material</small>
              </div>
              <div className="mx-3">
                <h2>
                  <b>15K</b>
                </h2>
                <small style={{ color: "#808080" }}>Member Join</small>
              </div>
            </div>
          </Col>
          <Col lg={6} md={12} sm={12} xs={12}>
            <Row>
              <Col
                className="text-lg-start text-center mt-3"
                lg={6}
                md={12}
                sm={12}
                xs={12}
              >
                <img
                  src={cube}
                  style={{
                    width: "50px",
                  }}
                  alt="cube"
                  className="img-fluid"
                />
                <h4 className="mt-4">Material Limitations</h4>
                <div className="profile-heading-3">
                  <span>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </span>
                </div>
              </Col>
              <Col
                className="text-lg-start text-center mt-3"
                lg={6}
                md={12}
                sm={12}
                xs={12}
              >
                <img
                  src={pirpleTriangle}
                  style={{
                    width: "50px",
                  }}
                  alt="pirpleTriangle"
                  className="img-fluid"
                />
                <h4 className="mt-4">Material Limitations</h4>
                <div className="profile-heading-3">
                  <span>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </span>
                </div>
              </Col>
              <Col
                className="text-lg-start text-center mt-3"
                lg={6}
                md={12}
                sm={12}
                xs={12}
              >
                <img
                  src={blueCircle}
                  style={{
                    width: "50px",
                  }}
                  alt="blueCircle"
                  className="img-fluid"
                />
                <h4 className="mt-4">Material Limitations</h4>
                <div className="profile-heading-3">
                  <span>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </span>
                </div>
              </Col>
              <Col
                className="text-lg-start text-center mt-3"
                lg={6}
                md={12}
                sm={12}
                xs={12}
              >
                <img
                  src={orangBox}
                  style={{
                    width: "50px",
                  }}
                  alt="orangBox"
                  className="img-fluid"
                />
                <h4 className="mt-4">Material Limitations</h4>
                <div className="profile-heading-3">
                  <span>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </span>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Profile;
