import { Carousel, Card, Button, Container, Row, Col } from "react-bootstrap";

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
  {
    title: "Advanced CSS Techniques",
    price: 145,
    image: "/assets/images/course4.jpg",
  },
  {
    title: "Mastering JavaScript",
    price: 150,
    image: "/assets/images/course5.jpg",
  },
  {
    title: "React for Beginners",
    price: 130,
    image: "/assets/images/course6.jpg",
  },
];

const chunkArray = (arr, chunkSize) => {
  const results = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    results.push(arr.slice(i, i + chunkSize));
  }
  return results;
};

const CoursesSection = () => {
  const courseChunks = chunkArray(courses, 3);

  return (
    <Container fluid className="courses-section my-5">
      <h3>Popular courses of the week</h3>
      <Carousel>
        {courseChunks.map((courseChunk, index) => (
          <Carousel.Item key={index}>
            <Row>
              {courseChunk.map((course, idx) => (
                <Col md={4} key={idx}>
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
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default CoursesSection;
