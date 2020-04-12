import React from "react";
import { Container } from "react-bootstrap";

export default function Contact() {
  return (
    <footer className="text-center">
      <Container fluid className="d-flex justify-content-around pt-4 mt-3">
        <ul className="my-auto">
          <a
            href="mailto: basilelkhalifa@gmail.com"
            className="font-weight-light"
          >
            <i className="far fa-envelope px-1 "></i> basilelkhalifa@gmail.com
          </a>
          <a
            href="https://twitter.com/basil_elkhalifa"
            rel="noopener noreferrer"
            target="_blank"
            className="px-5 font-weight-light"
          >
            <i className="fab fa-twitter px-1 "></i> basil_elkhalifa
          </a>
          <a
            href="https://www.linkedin.com/in/basil-elkhalifa-2b697b193/"
            rel="noopener noreferrer"
            target="_blank"
            className="font-weight-light"
          >
            <i className="fab fa-linkedin px-1 "></i> Basil ElKhalifa
          </a>
        </ul>
      </Container>
      <p className="font-weight-light my-0 py-2">
        Copyright &copy; 2020 Some Rights Reserved
      </p>
    </footer>
  );
}
