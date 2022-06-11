import React from "react"; 
import { Col, Container, Row } from "react-bootstrap";

import Developer from '../../assets/images/dev3.gif';

import './index.scss';
import TypewriterContent from "./TypewriterContent";

const Home = () => {
    return(
        <section>
            <Container fluid className="home-primary-section" id="home">
                <Container className="home-content">
                    <Row>
                        <Col md={6} className="home-header">
                            <h1 className="heading-one">
                                Hello, {" "}
                                <span className="hand-wave" role="img" aria-labelledby="wave">
                                &#128075;
                                </span>
                            </h1>

                            <h1 className="heading-name-container">
                                I'm
                                <strong className="heading-name"> Rutul Amin</strong>
                            </h1>

                            <div className="typewriter-content-container">
                                <TypewriterContent />
                            </div>
                        </Col>
                        <Col md={6} className="home-image-container">
                            <img src={Developer} alt="home" className="home-main-image"/> 
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid className="home-secondary-section" id="about">
                <Container>
                    <Row>
                        <Col md={4} className="avatar-container">

                        </Col>
                        <Col md={8} className="home-about-me-container">
                            <h1>Introduction</h1>
                            <p className="home-about-me-body">
                                I'm a software engineer by profession, mostly working as a full stack developer with main focus on React, Gatsby, NodeJs.
                                I like to spend my time in developing and building awesome products and User Interfaces. 
                                I also like to solve Data structure problems on various platforms.
                                My area of interest currently is learning blockchain and building D'APPs.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>
    );
}

export default Home;