import { Col, Container, Row } from 'react-bootstrap';
import Developer from '../../assets/images/dev2.jpg';

import './index.scss';
import TypewriterContent from './TypewriterContent';

const Home = () => {
	return (
		<section>
			<Container fluid className='home-primary-section' id='home'>
				<Container className='home-content'>
					<Row>
						<Col md={6} className='home-header'>
							<h1 className='heading-one'>
								Hello,{' '}
								<span className='hand-wave' role='img' aria-labelledby='wave'>
									&#128075;
								</span>
							</h1>

							<h1 className='heading-name-container'>
								I'm
								<strong className='heading-name'> Rutul Amin</strong>
							</h1>

							<div className='typewriter-content-container'>
								<TypewriterContent />
							</div>
						</Col>
						<Col md={6} sm={12} className='home-image-container'>
							<img src={Developer} alt='home' className='home-main-image' />
						</Col>
					</Row>
				</Container>
			</Container>
			<Container fluid className='home-secondary-section' id='about'>
				<Container>
					<Row>
						<Col md={12} sm={12} className='home-about-me-container'>
							<h1 className='home-pink-text'>Introductions</h1>
							<br />
							<p className='home-about-me-body'>
								I'm a <b className='home-pink-text'>software engineer</b> by
								profession, mostly working as a full stack developer with main
								focus on <b className='home-pink-text'>React</b> and{' '}
								<b className='home-pink-text'>NodeJs</b>.
								<br />
								<br />I like to spend my time in learning new technologies and
								use that to build awesome
								<b className='home-pink-text'> products</b> and{' '}
								<b className='home-pink-text'>User interfaces</b>.
								<br />
								<br />
								Currently looking out for{' '}
								<b className='home-pink-text'>Front end developer </b>roles with
								<b className='home-pink-text'> NextJS</b> and
								<b className='home-pink-text'> MERN Stack</b>.
								{/* <br />
								<br />I would love to work in area of{' '}
								<b className='home-pink-text'>
									blockchain application development
								</b>{' '}
								where I could work on{' '}
								<b className='home-pink-text'>front end</b> part along with
								handling and programming new smart contracts to build{' '}
								<b className='home-pink-text'>Dapps</b>. */}
							</p>
						</Col>
					</Row>
				</Container>
			</Container>
		</section>
	);
};

export default Home;
