import React from "react";
import { Container, Col, Row} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLinkedin,
    faGithub,
    faYoutube,
    faSkype,
} from '@fortawesome/free-brands-svg-icons';
// import { faHome, faUser, faEnvelope, faSuitcase } from '@fortawesome/free-solid-svg-icons';

import './index.scss';

const Footer = () => {
    return(
        // <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
        <Container fluid className="footer-container">
            <Row>
                <Col md="4" className="footer-social">
                    <h4>Copyright @2022 Rutul Amin</h4>
                </Col>
                <Col md="4" className="footer-body">
                    <h4>Copyright @2022 Rutul Amin</h4>
                </Col>
                <Col md="4" className="footer-copyrights">
                    <h4>Copyright @2022 Rutul Amin</h4>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;