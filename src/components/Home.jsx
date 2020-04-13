import React, { useEffect } from "react";
import { Jumbotron, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home(props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-100 w-100"
    >
      <Container
        fluid
        className="d-flex justify-content-center align-items-center jumbotronContainer home-background"
      >
        <Jumbotron fluid className="text-white text-center">
          <h1>CalMac Calculator</h1>
          <p>
            A simple and straightforward Calories/Macronutrients Calculator!
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
    </motion.div>
  );
}
