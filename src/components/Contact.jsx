import React from "react";
import { Row, Col } from "react-bootstrap";

export default function Contact() {
  return (
    <footer className="text-center">
      <Row className="mr-0 py-2 w-75 mx-auto">
        <Col sm={12} lg={4} className="py-1">
          <a
            href="mailto: basilelkhalifa@gmail.com"
            className="font-weight-light"
          >
            <i className="far fa-envelope px-1"></i>{" "}
            basilelkhalifa@gmail.com
          </a>
        </Col>
        <Col sm={12} lg={4} className="py-1 d-none d-lg-block">
          <a
            href="https://twitter.com/basilelkhalifa"
            rel="noopener noreferrer"
            target="_blank"
            className="px-5 font-weight-light"
          >
            <i className="fab fa-twitter px-1"></i> basilelkhalifa
          </a>
        </Col>
        <Col sm={12} lg={4} className="py-1 d-none d-lg-block">
          <a
            href="https://www.linkedin.com/in/basil-elkhalifa-2b697b193/"
            rel="noopener noreferrer"
            target="_blank"
            className="font-weight-light"
          >
            <i className="fab fa-linkedin px-1 "></i> Basil ElKhalifa
          </a>
        </Col>
      </Row>
      <p className="font-weight-light my-0">
        Copyright &copy; 2021 Some Rights Reserved
      </p>
    </footer>
  );
}
