import React from "react";
import { Container, Row } from "react-bootstrap";
import Calendar from "../GithubCalendar";
import TechStack from "../TechStack";

import "./index.scss";

const About = () => {
  return (
    <Container fluid className="about-section-container">
      <Container>
        <Row className="about-me-tech-stack">
          <h1 className="about-tech-stack-header">
            My <span className="about-tech-stack-header-span">Skills</span> and{" "}
            <span className="about-tech-stack-header-span">Tools</span> I use
          </h1>
          <TechStack />
          <h4 className="about-tech-stack-more">
            and <span className="pink-text">more ....</span>
          </h4>
        </Row>
        <Row className="about-me-calendar">
          <Calendar />
        </Row>
      </Container>
    </Container>
  );
};

export default About;
