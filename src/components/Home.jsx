import React from "react";
import { Jumbotron, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Home(props) {
  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center jumbotronContainer home-background"
    >
      <Jumbotron fluid className="text-white text-center">
        <h1>CalMac Calculator</h1>
        <p>
          A simple calculator that calculates your daily calorie and/or
          macronutrient intake!
        </p>
        <Link to="/calories">
          <Button
            variant="outline-secondary"
            className="mx-2"
            onClick={props.onClick}
          >
            Calculate Now
          </Button>
        </Link>
      </Jumbotron>
    </Container>
  );
}
