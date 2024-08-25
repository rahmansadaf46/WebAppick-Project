import { Card, Col, Container, Row } from "react-bootstrap";
import check1 from "../assets/images/check-circle-1.png";
import check2 from "../assets/images/check-circle-2.png";

const Price = () => {
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
            <span className="brown-text">Subscribe</span> with us now
          </b>
        </h2>
        <p
          className="description-heading-2"
          style={{ color: "gray", lineHeight: 3 }}
        >
          by subscribing now you will be able to access the material easily and
          cheaply, so you will be very efficient and benefit
        </p>
      </div>
      <Container>
        <Row className="align-items-center my-5 mx-5 px-5 justify-content-center">
          <Col className="my-3" lg={4} md={12} xs={12}>
            <Card>
              <Card.Body>
                <Card.Title>
                  <h4>
                    $50
                    <span style={{ fontSize: "12px", color: "gray" }}>
                      /1 month
                    </span>
                  </h4>
                  <h4>Base</h4>
                  <small style={{ fontSize: "12px", color: "gray" }}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </small>
                  <br />
                  <br />
                  <small style={{ fontSize: "14px", color: "gray" }}>
                    <img src={check1} alt="" /> Access All Videos
                  </small>
                  <br />
                  <small style={{ fontSize: "14px", color: "gray" }}>
                    <img src={check1} alt="" /> Get Certificate
                  </small>
                  <br />
                  <small style={{ fontSize: "14px", color: "gray" }}>
                    <img src={check1} alt="" /> Chat support
                  </small>
                  <br />
                  <small style={{ fontSize: "14px", color: "gray" }}>
                    <img src={check1} alt="" /> Update Notification
                  </small>
                  <br />
                  <small style={{ fontSize: "14px", color: "gray" }}>
                    <img src={check1} alt="" /> Download material
                  </small>
                </Card.Title>

                <div className="text-center">
                  <button
                    style={{
                      background: "#FFFAF8",
                      fontSize: "16px",
                      borderRadius: "50px",
                      color: "#FDC2A6",
                    }}
                    className="btn px-5 "
                  >
                    Choose Plan
                  </button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col className="my-3" lg={4} md={12} xs={12}>
            <Card style={{ backgroundColor: "#245D51", color: "white" }}>
              <Card.Body className="text-end">
                <button
                  style={{
                    background: "#CB8461",
                    fontSize: "10px",
                    borderRadius: "50px",
                    color: "white",
                    width: "100px",
                  }}
                  className="btn"
                >
                  Most Popular
                </button>
              </Card.Body>
              <Card.Body>
                <Card.Title>
                  <h4>
                    $50
                    <span style={{ fontSize: "12px", color: "white" }}>
                      /1 month
                    </span>
                  </h4>
                  <h4>Base</h4>
                  <small style={{ fontSize: "12px", color: "white" }}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </small>
                  <br />
                  <br />
                  <small style={{ fontSize: "14px", color: "white" }}>
                    <img src={check2} alt="" /> Access All Videos
                  </small>
                  <br />
                  <small style={{ fontSize: "14px", color: "white" }}>
                    <img src={check2} alt="" /> Get Certificate
                  </small>
                  <br />
                  <small style={{ fontSize: "14px", color: "white" }}>
                    <img src={check2} alt="" /> Chat support
                  </small>
                  <br />
                  <small style={{ fontSize: "14px", color: "white" }}>
                    <img src={check2} alt="" /> Update Notification
                  </small>
                  <br />
                  <small style={{ fontSize: "14px", color: "white" }}>
                    <img src={check2} alt="" /> Download material
                  </small>
                </Card.Title>

                <div className="text-center">
                  <button
                    style={{
                      background: "#CB8461",
                      fontSize: "16px",
                      borderRadius: "50px",
                      color: "white",
                    }}
                    className="btn px-5 "
                  >
                    Choose Plan
                  </button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col className="my-3" lg={4} md={12} xs={12}>
            <Card>
              <Card.Body>
                <Card.Title>
                  <h4>
                    $50
                    <span style={{ fontSize: "12px", color: "gray" }}>
                      /1 month
                    </span>
                  </h4>
                  <h4>Base</h4>
                  <small style={{ fontSize: "12px", color: "gray" }}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </small>
                  <br />
                  <br />
                  <small style={{ fontSize: "14px", color: "gray" }}>
                    <img src={check1} alt="" /> Access All Videos
                  </small>
                  <br />
                  <small style={{ fontSize: "14px", color: "gray" }}>
                    <img src={check1} alt="" /> Get Certificate
                  </small>
                  <br />
                  <small style={{ fontSize: "14px", color: "gray" }}>
                    <img src={check1} alt="" /> Chat support
                  </small>
                  <br />
                  <small style={{ fontSize: "14px", color: "gray" }}>
                    <img src={check1} alt="" /> Update Notification
                  </small>
                  <br />
                  <small style={{ fontSize: "14px", color: "gray" }}>
                    <img src={check1} alt="" /> Download material
                  </small>
                </Card.Title>

                <div className="text-center">
                  <button
                    style={{
                      background: "#FFFAF8",
                      fontSize: "16px",
                      borderRadius: "50px",
                      color: "#FDC2A6",
                    }}
                    className="btn px-5 "
                  >
                    Choose Plan
                  </button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br />
      </Container>
    </div>
  );
};

export default Price;
