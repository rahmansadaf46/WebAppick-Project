import { Card, Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import course1 from "../assets/images/course1.jpg";
import course2 from "../assets/images/course2.jpg";
import course3 from "../assets/images/course3.jpg";
import avatar3 from "../assets/images/avatar3.jpg";
import avatar4 from "../assets/images/avatar4.jpg";

import avatar5 from "../assets/images/avatar5.jpg";
import profile from "../assets/images/profile.jpg";
import circle1 from "../assets/images/circle1.jpg";
import box2 from "../assets/images/box2.jpg";
import play from "../assets/images/play.jpg";

const courses = [
  {
    id: 1,
    title: "Basics of learning team management",
    price: 120,
    video: 25,
    participant: 120,
    instructorPic: avatar3,
    instructorName: "Jone Owel",
    instructorDesignation: "IT Manager",
    image: course1,
  },
  {
    id: 2,
    title: "Learn basic database structure",
    price: 180,
    video: 20,
    participant: 55,
    instructorPic: avatar4,
    instructorName: "Roynaldo Jr",
    instructorDesignation: "Data Science",
    image: course2,
  },
  {
    id: 3,
    title: "Create dynamic website with PHP",
    price: 135,
    video: 20,
    participant: 98,
    instructorPic: avatar5,
    instructorName: "Markus Low",
    instructorDesignation: "Programmer",
    image: course3,
  },
];

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 991, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CoursesSection = () => {
  return (
    <div style={{ backgroundColor: "#245D51", position: "relative" }}>
      <div className="brown-dot-course">
        <img style={{ width: "20px", height: "20px" }} src={circle1} alt="" />
      </div>
      <div className="brown-box-course">
        <img style={{ width: "20px", height: "20px" }} src={box2} alt="" />
      </div>
      <Container className="mt-5">
        <div className="text-white text-center pt-5">
          <h3>Popular courses of the week</h3>
          <small style={{ color: "lightGray" }}>
            List of the most popular lists that are often studied by our members
          </small>
        </div>
        <br />
        <div className="course-carousel-body">
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            keyBoardControl={true}
            dotListClass="custom-dot-list-style"
            showDots={true}
          >
            {courses.map((carousel) => {
              return (
                <div style={{ margin: "20px 30px" }} key={carousel.id}>
                  <Card style={{ border: "none" }}>
                    <Card.Img
                      style={{ height: "150px  " }}
                      variant="top"
                      src={carousel.image}
                    />
                    <div className="course-play">
                      <img style={{ width: "50px" }} src={play} alt="play" />
                    </div>
                    <Card.Body>
                      <Card.Title>{carousel.title}</Card.Title>

                      <Card.Text>
                        <div className="mt-3">
                          <Row>
                            <Col xs={6}>
                              <Row>
                                <Col xs={4}>
                                  <div>
                                    <img
                                      src={carousel.instructorPic}
                                      style={{
                                        borderRadius: "50%",
                                        width: "90px",
                                      }}
                                      alt="Hero"
                                      className="img-fluid"
                                    />
                                  </div>
                                </Col>
                                <Col xs={8}>
                                  <div
                                    className="text-start"
                                    style={{
                                      lineHeight: "0.9",
                                      position: "relative",
                                      left: "-10px",
                                    }}
                                  >
                                    <small style={{ fontSize: "10px" }}>
                                      {" "}
                                      <b>{carousel.instructorName}</b>{" "}
                                    </small>
                                    <br />
                                    <small
                                      style={{
                                        color: "#808080",
                                        fontSize: "10px",
                                      }}
                                    >
                                      {carousel.instructorDesignation}
                                    </small>
                                  </div>
                                </Col>
                              </Row>
                            </Col>
                            <Col xs={6}>
                              <Row>
                                <Col xs={4}>
                                  <div>
                                    <img
                                      src={profile}
                                      style={{
                                        borderRadius: "50%",
                                        width: "20px",
                                      }}
                                      alt="Hero"
                                      className="img-fluid"
                                    />
                                  </div>
                                </Col>
                                <Col xs={8}>
                                  <div
                                    className="text-start"
                                    style={{
                                      lineHeight: "0.9",
                                      position: "relative",
                                      left: "-20px",
                                    }}
                                  >
                                    <small style={{ fontSize: "10px" }}>
                                      {" "}
                                      <b>{carousel.participant}</b>{" "}
                                    </small>
                                    <br />
                                    <small
                                      style={{
                                        color: "#808080",
                                        fontSize: "10px",
                                      }}
                                    >
                                      Participant
                                    </small>
                                  </div>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        </div>
                      </Card.Text>
                    </Card.Body>
                    <Card.Body
                      style={{ background: "#fafafa", borderRadius: "50px" }}
                    >
                      <div>
                        <Row>
                          <Col xs={6}>
                            <button
                              style={{
                                background: "#245D51",
                                fontSize: "10px",
                              }}
                              className="btn text-white"
                            >
                              Buy Now
                            </button>
                          </Col>
                          <Col xs={6}>
                            <h4>
                              ${carousel.price}
                              <span style={{ fontSize: "9px", color: "gray" }}>
                                /{carousel.video} Video
                              </span>
                            </h4>
                          </Col>
                        </Row>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
          </Carousel>
        </div>
        <br />
      </Container>
    </div>
  );
};

export default CoursesSection;
