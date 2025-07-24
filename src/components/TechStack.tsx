import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faJs,
	faJava,
	faReact,
	faHtml5,
	faSass,
	faCss3,
	faStackOverflow,
	faBitbucket,
	faGithub,
	faBootstrap,
	faNode,
	faNpm,
	faEthereum,
	faYarn,
	faJira,
	faSlack,
} from '@fortawesome/free-brands-svg-icons';

const TechStack = () => {
	return (
		<>
			<Row className='about-tech-stack-row'>
				<Col md={3} xs={6} className='about-tech-stack-icons'>
					<FontAwesomeIcon icon={faJs} size='7x' style={{ color: '#ac69bc' }} />
				</Col>
				<Col md={3} xs={6} className='about-tech-stack-icons'>
					<FontAwesomeIcon
						icon={faJava}
						size='7x'
						style={{ color: '#ac69bc' }}
					/>
				</Col>
				<Col md={3} xs={6} className='about-tech-stack-icons'>
					<FontAwesomeIcon
						icon={faReact}
						size='7x'
						style={{ color: '#ac69bc' }}
					/>
				</Col>
				<Col md={3} xs={6} className='about-tech-stack-icons'>
					<FontAwesomeIcon
						icon={faHtml5}
						size='7x'
						style={{ color: '#ac69bc' }}
					/>
				</Col>
			</Row>
			<Row className='about-tech-stack-row'>
				<Col md={3} xs={6} className='about-tech-stack-icons'>
					<FontAwesomeIcon
						icon={faSass}
						size='7x'
						style={{ color: '#ac69bc' }}
					/>
				</Col>
				<Col md={3} xs={6} className='about-tech-stack-icons'>
					<FontAwesomeIcon
						icon={faCss3}
						size='7x'
						style={{ color: '#ac69bc' }}
					/>
				</Col>
				<Col md={3} xs={6} className='about-tech-stack-icons'>
					<FontAwesomeIcon
						icon={faBitbucket}
						size='7x'
						style={{ color: '#ac69bc' }}
					/>
				</Col>
				<Col md={3} xs={6} className='about-tech-stack-icons'>
					<FontAwesomeIcon
						icon={faGithub}
						size='7x'
						style={{ color: '#ac69bc' }}
					/>
				</Col>
			</Row>
			<Row className='about-tech-stack-row'>
				<Col md={3} xs={6} className='about-tech-stack-icons'>
					<FontAwesomeIcon
						icon={faStackOverflow}
						size='7x'
						style={{ color: '#ac69bc' }}
					/>
				</Col>
				<Col md={3} xs={6} className='about-tech-stack-icons'>
					<FontAwesomeIcon
						icon={faBootstrap}
						size='7x'
						style={{ color: '#ac69bc' }}
					/>
				</Col>
				<Col md={3} xs={6} className='about-tech-stack-icons'>
					<FontAwesomeIcon
						icon={faNode}
						size='7x'
						style={{ color: '#ac69bc' }}
					/>
				</Col>
				<Col md={3} xs={6} className='about-tech-stack-icons'>
					<FontAwesomeIcon
						icon={faEthereum}
						size='7x'
						style={{ color: '#ac69bc' }}
					/>
				</Col>
			</Row>
			<Row className='about-tech-stack-row'>
				<Col md={3} xs={6} className='about-tech-stack-icons'>
					<FontAwesomeIcon
						icon={faYarn}
						size='7x'
						style={{ color: '#ac69bc' }}
					/>
				</Col>
				<Col md={3} xs={6} className='about-tech-stack-icons'>
					<FontAwesomeIcon
						icon={faNpm}
						size='7x'
						style={{ color: '#ac69bc' }}
					/>
				</Col>
				<Col md={3} xs={6} className='about-tech-stack-icons'>
					<FontAwesomeIcon
						icon={faSlack}
						size='7x'
						style={{ color: '#ac69bc' }}
					/>
				</Col>
				<Col md={3} xs={6} className='about-tech-stack-icons'>
					<FontAwesomeIcon
						icon={faJira}
						size='7x'
						style={{ color: '#ac69bc' }}
					/>
				</Col>
			</Row>
		</>
	);
};

export default TechStack;
