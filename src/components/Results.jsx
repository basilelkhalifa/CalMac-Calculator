import React from "react";
import { Jumbotron, Button, Container, Form, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Calories(props) {
  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center jumbotronContainer results-background"
    >
      <Jumbotron fluid className="text-white text-center">
        <Form>
          <h4 className="m-4">Results</h4>

          <Row className="mb-4 font-weight-light">
            <Col sm={12} md={12} lg={12} className="mx-auto">
              <Form.Label>What is your Goal? : </Form.Label>
            </Col>
            <Col sm={12} md={12} lg={12}>
              <Form.Control
                as="select"
                name="activity"
                className="w-75 mx-auto text-left"
                value={props.selected}
                onChange={props.onChange}
              >
                <option value="select" disabled>
                  ----- Select an Option -----
                </option>
                <option value="lose">Lose Weight</option>
                <option value="maintain">Maintain Weight</option>
                <option value="gain">Gain Weight</option>
              </Form.Control>
            </Col>
          </Row>

          <Row>
            <Col>
              <h1 className="mb-4">
                {props.calculations.calories} Calories{" "}
                <i className="fas fa-bolt"></i>{" "}
              </h1>
            </Col>
          </Row>

          <Row className="w-50 mx-auto x-small-font-size">
            <Col xs={4}>
              <Container fluid className="text-center">
                <i className="fas fa-drumstick-bite"></i>
                <p>Protein: {props.calculations.protein}g</p>
              </Container>
            </Col>
            <Col xs={4}>
              <Container fluid className="text-center">
                <i className="fas fa-bread-slice"></i>
                <p>Carbs: {props.calculations.carbs}g</p>
              </Container>
            </Col>
            <Col xs={4}>
              <Container fluid className="text-center">
                <i className="fas fa-cheese"></i>
                <p>Fats: {props.calculations.fats}g</p>
              </Container>
            </Col>
          </Row>

          <Row>
            <Col>
              <Link to="/">
                <Button variant="outline-secondary" className="m-4">
                  Go Back to Home
                </Button>
              </Link>
            </Col>
          </Row>
        </Form>
      </Jumbotron>
    </Container>
  );
}
