import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import "./index.scss";

const WorkEx = () => {
  return (
    <Container fluid className="work-education-section-container">
      <Container>
        <h1 className="education-header purple-colored-text">EDUCATION</h1>
        <Row className="education-row">
          <Col md={12} className="education-column py-3">
            <h4 className="purple-colored-text">
              SAN JOSE STATE UNIVERSITY(SJSU)
            </h4>
            <h5>San Jose, CA, USA</h5>
            <h6>[2014-2015]</h6>
          </Col>
          <Col md={12} className="education-column py-3 mt-5">
            <h4 className="purple-colored-text">
              AHMEDABAD INSTITUTE OF TECHNOLOGY(AIT)
            </h4>
            <h5>Ahmedabad, GJ, India</h5>
            <h6>[2009-2013]</h6>
          </Col>
        </Row>
        <h1 className="work-header purple-colored-text">WORK EXPERIENCE</h1>
        <Row className="work-row">
          <Col md={5} className="work-column">
            <h4 className="purple-colored-text">AMNGO Inc</h4>
            <h5>Sr. Software Engineer</h5>
            <h6>[DEC'19 - MAR'22]</h6>
          </Col>
          <Col md={5} className="work-column">
            <h4 className="purple-colored-text">0CHAIN LLC.</h4>
            <h5>Front End Developer</h5>
            <h6>[SEP'18 - MAY'19]</h6>
          </Col>
        </Row>
        <Row className="work-row">
          <Col md={5} className="work-column">
            <h4 className="purple-colored-text">WELLS FARGO BANK</h4>
            <h5>UI DEVELOPER</h5>
            <h6>[SEP'17 - AUG'18]</h6>
          </Col>
          <Col md={5} className="work-column">
            <h4 className="purple-colored-text">GE DIGITAL(AVITAS)</h4>
            <h5>UI DEVELOPER</h5>
            <h6>[FEB'17 - AUG'17]</h6>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default WorkEx;
