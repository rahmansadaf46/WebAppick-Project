import { Card, Col, Container, Row } from "react-bootstrap";
import check1 from "../assets/images/check-circle-1.png";
import check2 from "../assets/images/check-circle-2.png";
import { useState } from "react";

const Price = () => {
   const [hovered, setHovered] = useState([false, false, false]);

   const handleMouseEnter = (index) => {
     const newHoverState = [...hovered];
     newHoverState[index] = true;
     setHovered(newHoverState);
   };

   const handleMouseLeave = (index) => {
     const newHoverState = [...hovered];
     newHoverState[index] = false;
     setHovered(newHoverState);
   };
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
        <Row className="price-card-body d-flex align-items-center my-5 justify-content-center">
          {[0, 1, 2].map((index) => (
            <Col key={index} className="my-3" lg={3} md={12} xs={12}>
              <Card
                className="price-card"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                style={
                  index === 1
                    ? {
                       
                      }
                    : { border: "none" }
                }
              >
                {index === 1 && (
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
                )}
                <Card.Body>
                  <Card.Title>
                    <h4>
                      $50
                      <span
                        style={{
                          fontSize: "12px",
                        }}
                      >
                        /1 month
                      </span>
                    </h4>
                    <h4>Base</h4>
                    <small
                      style={{
                        fontSize: "12px",
                      }}
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </small>
                    <br />
                    <br />
                    <small
                      style={{
                        fontSize: "14px",
                      }}
                    >
                      <img src={hovered[index] ? check2 : check1} alt="" />{" "}
                      Access All Videos
                    </small>
                    <br />
                    <small
                      style={{
                        fontSize: "14px",
                        
                      }}
                    >
                      <img src={hovered[index] ? check2 : check1} alt="" /> Get
                      Certificate
                    </small>
                    <br />
                    <small
                      style={{
                        fontSize: "14px",
                        
                      }}
                    >
                      <img src={hovered[index] ? check2 : check1} alt="" /> Chat
                      support
                    </small>
                    <br />
                    <small
                      style={{
                        fontSize: "14px",
                        
                      }}
                    >
                      <img src={hovered[index] ? check2 : check1} alt="" />{" "}
                      Update Notification
                    </small>
                    <br />
                    <small
                      style={{
                        fontSize: "14px",
                        
                      }}
                    >
                      <img src={hovered[index] ? check2 : check1} alt="" />{" "}
                      Download material
                    </small>
                  </Card.Title>
                  <div className="text-center">
                    <button
                    
                      className="btn px-5 select-price-btn"
                    >
                      Choose Plan
                    </button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <br />
      </Container>
    </div>
  );
};

export default Price;
