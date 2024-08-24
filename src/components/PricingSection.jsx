import { Row, Col, Card, Button, Container } from "react-bootstrap";

const plans = [
  { price: 50, title: "Base", description: "Basic Subscription" },
  { price: 100, title: "Pro", description: "Pro Learning Experience" },
  { price: 200, title: "Enterprise", description: "Full Enterprise Solutions" },
];

const PricingSection = () => (
  <Container fluid className="pricing-section my-5">
    <h3>Subscribe with us now</h3>
    <Row>
      {plans.map((plan, index) => (
        <Col md={4} key={index}>
          <Card>
            <Card.Body>
              <Card.Title>${plan.price} / month</Card.Title>
              <Card.Text>
                {plan.title} - {plan.description}
              </Card.Text>
              <Button variant="primary" href="#subscribe">
                Choose Plan
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default PricingSection;
