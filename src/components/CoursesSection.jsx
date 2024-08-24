import { Row, Col, Card, Button, Container } from "react-bootstrap";

const courses = [
  {
    title: "Basics of learning team management",
    price: 120,
    image: "/assets/images/course1.jpg",
  },
  {
    title: "Learn basic database structure",
    price: 110,
    image: "/assets/images/course2.jpg",
  },
  {
    title: "Create dynamic website with PHP",
    price: 135,
    image: "/assets/images/course3.jpg",
  },
];

const CoursesSection = () => (
  <Container fluid className="courses-section my-5">
    <h3>Popular courses of the week</h3>
    <Row>
      {courses.map((course, index) => (
        <Col md={4} key={index}>
          <Card>
            <Card.Img variant="top" src={course.image} />
            <Card.Body>
              <Card.Title>{course.title}</Card.Title>
              <Card.Text>${course.price}</Card.Text>
              <Button variant="primary" href="#buy">
                Buy Now
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default CoursesSection;
