import React from "react";
import { Container, Row } from "react-bootstrap";
import Calendar from "../GithubCalendar";
import TechStack from "../TechStack";

import "./index.scss";

const About = () => {
  return (
    <Container fluid className="about-section-container">
      <Container>
        <Row className="about-me-row">
          <h1 className="purple-colored-text">ABOUT ME</h1>
          <p className="about-me-text">
            Hi, I'm <span className="purple-colored-text">Rutul Amin</span> and
            I hail from{" "}
            <span className="purple-colored-text">Ahmedabad, India</span>.<br />
            I like to code and getting hands dirty on learning new tools and
            technologies. <br />
            Apart from that I love to spend time with my family and friends.{" "}
            <br />
            In my spare time I like to play on my console, read books and watch
            football.
            <br />
            I also love to travel and read travel blogs.
            <br />
          </p>
        </Row>
        <Row className="about-me-tech-stack">
          <h1 className="about-tech-stack-header">
            My <span className="about-tech-stack-header-span">SKILLS</span> and{" "}
            <span className="about-tech-stack-header-span">TOOLS</span> I use
          </h1>
          <TechStack />
          <h4 className="about-tech-stack-more">
            and <span className="purple-colored-text">More ....</span>
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
