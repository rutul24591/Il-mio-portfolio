import React, { useState } from "react";
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { faHome, faUser, faEnvelope, faSuitcase, faProjectDiagram, faHamburger } from '@fortawesome/free-solid-svg-icons'

import Logo from '../../assets/images/logo.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './index.scss';

const Header = () => {
    const [expanded, setExpanded] = useState(false);
    const [navbarColour, setNavbarColour] = useState(false);

    const handleScroll = () => {
        if(window.scrollY >= 20) {
            setNavbarColour(true);
        }else {
            setNavbarColour(false)
        }
    }

    window.addEventListener("scroll", handleScroll);

    return(
        <>
            <Navbar
                fixed = "top"
                expand= "md"
                expanded={expanded}
                className={navbarColour ? "sticky" : "navbar"}
            >
                <Container>
                    <Navbar.Brand href="/">
                        <img src={ Logo } alt="RA" width={90} height={90}/>
                    </Navbar.Brand>
                    <Navbar.Toggle
                        className={ expanded ? "expanded" : "collapsed"}
                        aria-controls="navbar-nav"
                        onClick={() => {
                            setExpanded(expanded ? false : true);
                        }}
                    >
                        <FontAwesomeIcon icon={faHamburger} color="#6A4C93" className="fa-hamburger fa-2xl"/>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="navbar-nav">
                        <Nav className="mx-auto" defaultActiveKey="#home">
                            <Nav.Item>
                                <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>
                                    <FontAwesomeIcon icon={faHome} color="#FFFFFF" className="fa-home fa-lg"/>
                                    Home
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="/about" onClick={() => setExpanded(false)}>
                                    <FontAwesomeIcon icon={faUser} color="#FFFFFF" className="fa-user fa-lg"/>
                                    About
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="/workex" onClick={() => setExpanded(false)}>
                                    <FontAwesomeIcon icon={faSuitcase} color="#FFFFFF" className="fa-suitcase fa-lg"/>
                                    WorkEx
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="/projects" onClick={() => setExpanded(false)}>
                                    <FontAwesomeIcon icon={faProjectDiagram} color="#FFFFFF" className="fa-project-diagram fa-lg"/>
                                    Projects
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="/contact" onClick={() => setExpanded(false)}>
                                    <FontAwesomeIcon icon={faEnvelope} color="#FFFFFF" className="fa-envelope fa-lg"/>
                                    Contact
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>      
        </>
    )
}

export default Header;