import { Col, Container, Row } from "react-bootstrap";
import uber from "../assets/images/uber.jpg";
import google from "../assets/images/google.jpg";
import paypal from "../assets/images/paypal.jpg";
import microsoft from "../assets/images/microsoft.jpg";
import dribble from "../assets/images/dribble.jpg";

const Client = () => {
  return (
    <div>
      <div
        style={{
          fontFamily: "Poppins, sans-serif",
        }}
        className="text-center "
      >
        <h2 className="description-heading">
          <b>
            Trusted more than <span className="brown-text">100+</span> in the
            world
          </b>
        </h2>
        <p className="description-heading-2" style={{ color: "gray" }}>
          they have asked us more than 3 times to teach their employees about
          various things. to improve their skills
        </p>
      </div>
      <Container>
        <Row className="align-items-center my-5 mx-5 px-5 justify-content-center">
          <Col md={2} xs={6}>
            <img
              style={{ width: "120px" }}
              src={uber}
              alt="uber"
              className="img-fluid client-logo"
            />
          </Col>
          <Col md={2} xs={6}>
            <img
              style={{ width: "120px" }}
              src={google}
              alt="google"
              className="img-fluid client-logo"
            />
          </Col>
          <Col md={2} xs={6}>
            <img
              style={{ width: "120px" }}
              src={paypal}
              alt="paypal"
              className="img-fluid client-logo"
            />
          </Col>
          <Col md={2} xs={6}>
            <img
              style={{ width: "120px" }}
              src={microsoft}
              alt="microsoft"
              className="img-fluid client-logo"
            />
          </Col>
          <Col md={2} xs={6}>
            <img
              style={{ width: "120px" }}
              src={dribble}
              alt="dribble"
              className="img-fluid client-logo"
            />
          </Col>
        </Row>
        <br />
      </Container>
    </div>
  );
};

export default Client;
