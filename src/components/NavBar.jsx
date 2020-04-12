import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export default function NavBar(props) {
  return (
    <Navbar
      fixed="top"
      variant="dark"
      expand="md"
      className={props.scrolled ? "pb-3" : "pb-3  remove-navbar"}
    >
      <Redirect push to={props.redirectPath} />

      <Container>
        <Navbar.Brand href="/">
          <i className="fas fa-dumbbell"></i> CALMAC
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="text-center ml-auto">
            <LinkScroll
              to="jumbotronContainer"
              name="/"
              onClick={props.onClick}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className=" navbar nav-links text-white mx-1 "
            >
              Home
            </LinkScroll>

            <LinkScroll
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className=" navbar nav-links text-white mx-1 "
            >
              About
            </LinkScroll>

            <LinkScroll
              to="jumbotronContainer"
              name="/calories"
              onClick={props.onClick}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className=" navbar nav-links text-white mx-1 "
            >
              Calculator
            </LinkScroll>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
