import React from "react";
import {
  Jumbotron,
  Button,
  Container,
  Form,
  Row,
  Col,
  Alert,
} from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Calories(props) {
  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center jumbotronContainer calculator-background"
    >
      <Jumbotron fluid className="text-white text-center font-weight-light">
        <Form>
          <h1 className="m-4 ">CalMac Calculator</h1>
          <Row>
            <Col sm={12} md={6} lg={4}>
              <Container className="d-flex">
                <Form.Label className="mr-3" name="age">
                  Age:
                </Form.Label>
                <Form.Control
                  className="w-100"
                  placeholder="Years"
                  size="sm"
                  type="numbers"
                  name="age"
                  required
                  onChange={props.onChange}
                />
              </Container>
            </Col>

            <Col sm={12} md={6} lg={4}>
              <Container className="d-flex">
                <Form.Label className="mr-3">Sex:</Form.Label>
                <Form.Check
                  inline
                  id="male"
                  label="Male"
                  type="radio"
                  name="sex"
                  value="male"
                  defaultChecked
                  onChange={props.onChange}
                />
                <Form.Check
                  inline
                  id="female"
                  label="Female"
                  type="radio"
                  name="sex"
                  value="female"
                  onChange={props.onChange}
                />
              </Container>
            </Col>

            <Col sm={12} lg={4}>
              <Container className="d-flex">
                <Form.Label className="mr-3">Units:</Form.Label>
                <Form.Check
                  inline
                  id="us"
                  label="US"
                  type="radio"
                  name="unit"
                  value="us"
                  defaultChecked
                  onChange={props.onChange}
                />
                <Form.Check
                  inline
                  id="us"
                  label="Metric"
                  type="radio"
                  name="unit"
                  value="metric"
                  onChange={props.onChange}
                />
              </Container>
            </Col>
          </Row>

          <Row>
            <Col lg={6}>
              <Container className="d-flex">
                <Form.Label className="mr-3" name="weight">
                  Weight:
                </Form.Label>
                <Form.Control
                  placeholder={props.weightPlaceholder}
                  className="w-100"
                  size="sm"
                  type="numbers"
                  name="weight"
                  required
                  onChange={props.onChange}
                />
              </Container>
            </Col>

            <Col lg={6}>
              <Container className="d-flex">
                <Form.Label className="mr-3" name="height">
                  Height:
                </Form.Label>
                <Form.Control
                  placeholder={props.heightPlaceholder}
                  className="w-100"
                  size="sm"
                  type="numbers"
                  name="height"
                  required
                  onChange={props.onChange}
                />
              </Container>
            </Col>
          </Row>

          <Row>
            <Col>
              <Container className="d-flex">
                <Form.Label className="mr-3">Activity:</Form.Label>
                <Form.Control
                  as="select"
                  name="activity"
                  value={props.select}
                  className="w-75"
                  onChange={props.onChange}
                >
                  <option value="select" disabled>
                    ----- Select an Option -----
                  </option>
                  <option value="sedentary">
                    Sedentary: Little to no exercise and Sedentary Job
                  </option>
                  <option value="light">
                    Light: Walks and Jogs and Sedentary Job
                  </option>
                  <option value="moderate">
                    Moderate: Moderate exercise and Sedentary Job
                  </option>
                  <option value="active">
                    Active: Moderate exercise and Active Job
                  </option>
                  <option value="veryActive">
                    Very Active: Heavy exercise and Active Job
                  </option>
                </Form.Control>
              </Container>
            </Col>
          </Row>

          <Row>
            <Col className="mx-auto my-4">
              <Link
                to="/results"
                className={props.isValid ? "show-button" : "hide-button"}
              >
                <Button onClick={props.onClick} variant="outline-secondary">
                  Submit
                </Button>
              </Link>
            </Col>
          </Row>
        </Form>
      </Jumbotron>
    </Container>
  );
}
