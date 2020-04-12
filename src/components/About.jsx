import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";

export default function About() {
  return (
    <Container className="about font-weight-light">
      <Row className="my-5 center-text mx-auto">
        <Col sm={12} lg={6}>
          <Container fluid>
            <h1 className="font-weight-light pb-3">About CalMac</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
              optio delectus qui expedita voluptas perspiciatis consequuntur
              maxime modi reprehenderit officia similique quis aspernatur quam
              assumenda exercitationem cupiditate voluptate, ratione ut! Lorem
              ipsum dolor, sit amet consectetur adipisicing elit. Doloribus sint
              facere ab est cum fugiat, neque, consectetur mollitia temporibus,
              nemo sequi. Voluptas consectetur earum laborum atque deleniti.
              Reprehenderit, dolores neque!
            </p>
          </Container>
        </Col>

        <Col sm={12} lg={6}>
          <img
            src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            alt="Fruit Salad"
            className="img-thumbnail img-fluid "
          />
        </Col>
      </Row>

      <Row className="my-5  mx-auto">
        <Col sm={12} lg={6} className="order-2 order-lg-1">
          <img
            src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            alt="Fruit Salad"
            className="img-thumbnail img-fluid "
          />
        </Col>
        <Col sm={12} lg={6} className="order-1 order-lg-2">
          <Container fluid className=" center-text text-right">
            <h1 className="font-weight-light pb-3">What next?</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
              optio delectus qui expedita voluptas perspiciatis consequuntur
              maxime modi reprehenderit officia similique quis aspernatur quam
              assumenda exercitationem cupiditate voluptate, ratione ut! Lorem
              ipsum dolor, sit amet consectetur adipisicing elit. Doloribus sint
              facere ab est cum fugiat, neque, consectetur mollitia temporibus,
              nemo sequi. Voluptas consectetur earum laborum atque deleniti.
              Reprehenderit, dolores neque!
            </p>
          </Container>
        </Col>
      </Row>

      <Row>
        <Container className="text-center my-3  mx-auto">
          <h3 className="font-weight-light learn-more">
            Learn more about calories and macronutrients!
          </h3>

          <Button variant="outline-dark" className="my-3">
            Learn More
          </Button>
        </Container>
      </Row>
    </Container>
  );
}
