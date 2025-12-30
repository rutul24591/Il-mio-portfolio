import { memo } from "react";
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
            <h4 className="purple-colored-text">Apple via Infosys</h4>
            <h5>FRONT-END REACT DEVELOPER</h5>
            <h6>[SEP'22-DEC'24]</h6>
          </Col>
          <Col md={5} className="work-column">
            <h4 className="purple-colored-text">AMNGO Inc</h4>
            <h5>SR. SOFTWARE ENGINEER</h5>
            <h6>[DEC'19-MAR'22]</h6>
          </Col>
        </Row>
        <Row className="work-row">
          <Col md={5} className="work-column">
            <h4 className="purple-colored-text">0CHAIN LLC</h4>
            <h5>FRONT END APPLICATION DEVELOPER</h5>
            <h6>[SEP'18-FEB'19]</h6>
          </Col>
          <Col md={5} className="work-column">
            <h4 className="purple-colored-text">PROTEK CONSULTING</h4>
            <h5>UI DEVELOPER</h5>
            <h6>[SEP'16-JUNE'18]</h6>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default memo(WorkEx);
