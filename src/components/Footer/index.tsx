import React from "react";
import { Container, Col, Row} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLinkedin,
    faGithub,
    faSkype,
    faMedium,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons';

import './index.scss';

const Footer = () => {
    return(
        <Container fluid className="footer-container">
            <Row>
                <Col md="6" className="footer-social">
                    <ul>
                        <li>
                            <a 
                                href="https://www.google.com"
                                target="_blank"
                                rel="noreferrer"
                            />
                            <FontAwesomeIcon icon={faLinkedin} color="#FFFFFF" className="fa-linkedin fa-xl"/>
                        </li>
                        <li>
                            <a 
                                href="https://www.google.com"
                                target="_blank"
                                rel="noreferrer"
                            />
                            <FontAwesomeIcon icon={faMedium} color="#FFFFFF" className="fa-medium fa-xl"/>
                        </li>
                        <li>
                            <a 
                                href="https://www.google.com"
                                target="_blank"
                                rel="noreferrer"
                            />
                            <FontAwesomeIcon icon={faSkype} color="#FFFFFF" className="fa-skype fa-xl"/>
                        </li>
                        <li>
                            <a 
                                href="https://www.google.com"
                                target="_blank"
                                rel="noreferrer"
                            />
                            <FontAwesomeIcon icon={faGithub} color="#FFFFFF" className="fa-github fa-xl"/>
                        </li>
                        <li>
                            <a 
                                href="https://www.google.com"
                                target="_blank"
                                rel="noreferrer"
                            />
                            <FontAwesomeIcon icon={faTwitter} color="#FFFFFF" className="fa-twitter fa-xl"/>
                        </li>
                    </ul>
                </Col>
                <Col md="6" className="footer-copyrights">
                    <h6>Copyright @2022 <span className="footer-copyright-text"><i>Rutul Amin</i></span></h6>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;