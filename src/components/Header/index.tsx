import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
	faHome,
	faUser,
	faSuitcase,
	faHamburger,
	faFilePdf,
} from '@fortawesome/free-solid-svg-icons';

import Logo from '../../assets/images/logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './index.scss';

const Header = () => {
	const [expanded, setExpanded] = useState(false);
	const [navbarColour, setNavbarColour] = useState(false);

	// refs to avoid re-creating handlers on each render and to keep last state
	const lastIsSticky = useRef(!!navbarColour);
	const ticking = useRef(false);

	useEffect(() => {
		// use requestAnimationFrame to throttle scroll updates
		const onScroll = () => {
			if (ticking.current) return;
			ticking.current = true;
			requestAnimationFrame(() => {
				const shouldBeSticky = window.scrollY >= 20;
				if (lastIsSticky.current !== shouldBeSticky) {
					lastIsSticky.current = shouldBeSticky;
					setNavbarColour(shouldBeSticky);
				}
				ticking.current = false;
			});
		};

		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	const toggleExpanded = useCallback(() => setExpanded((e) => !e), []);
	const closeNav = useCallback(() => setExpanded(false), []);

	return (
		<>
			<Navbar
				fixed='top'
				expand='md'
				expanded={expanded}
				className={navbarColour ? 'sticky' : 'navbar'}
			>
				<Container className='navbar-container'>
					<Navbar.Brand href='/'>
						<img src={Logo} alt='RA' width={90} height={90} />
					</Navbar.Brand>
					<Navbar.Toggle
						className={expanded ? 'expanded' : 'collapsed'}
						aria-controls='navbar-nav'
						onClick={toggleExpanded}
					>
						<FontAwesomeIcon
							icon={faHamburger}
							color='#ac69bc'
							className='fa-hamburger fa-2xl'
						/>
					</Navbar.Toggle>
					<Navbar.Collapse id='navbar-nav'>
						<Nav className='mx-auto' defaultActiveKey='#home'>
							<Nav.Item>
								<Nav.Link as={Link} to='/' onClick={closeNav}>
									<FontAwesomeIcon
										icon={faHome}
										color='#FFFFFF'
										className='fa-home fa-lg'
									/>
									Home
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link
									as={Link}
									to='/about'
									onClick={closeNav}
								>
									<FontAwesomeIcon
										icon={faUser}
										color='#FFFFFF'
										className='fa-user fa-lg'
									/>
									About
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link
									as={Link}
									to='/workex'
									onClick={closeNav}
								>
									<FontAwesomeIcon
										icon={faSuitcase}
										color='#FFFFFF'
										className='fa-suitcase fa-lg'
									/>
									Education & WorkEx
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link
									as={Link}
									to='/resume'
									onClick={closeNav}
								>
									<FontAwesomeIcon
										icon={faFilePdf}
										color='#FFFFFF'
										className='fa-file-pdf fa-lg'
									/>
									Resume
								</Nav.Link>
							</Nav.Item>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default React.memo(Header);
