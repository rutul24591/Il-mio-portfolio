import React from "react";
import { Container, Col, Row} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGithub,
    faMedium,
    faTwitter,
    faLinkedinIn,
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
                                href="https://medium.com/@ramin24591"
                                target="_blank"
                                rel="noreferrer"
                            >
                            <FontAwesomeIcon icon={faMedium} color="#FFFFFF" className="fa-medium fa-xl"/>
                            </a>
                        </li>
                        <li>
                            <a 
                                href="https://twitter.com/rv591"
                                target="_blank"
                                rel="noreferrer"
                            >
                            <FontAwesomeIcon icon={faTwitter} color="#FFFFFF" className="fa-skype fa-xl"/>
                            </a>
                        </li>
                        <li>
                            <a 
                                href="https://www.github.com/rutul24591"
                                target="_blank"
                                rel="noreferrer"
                            >
                            <FontAwesomeIcon icon={faGithub} color="#FFFFFF" className="fa-github fa-xl"/>
                            </a>
                        </li>
                        <li>
                            <a 
                                href="https://www.linkedin.com/in/aminrutul75498b159"
                                target="_blank"
                                rel="noreferrer"
                            >
                            <FontAwesomeIcon icon={faLinkedinIn} color="#FFFFFF" className="fa-linked-in fa-xl"/>
                            </a>
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