import Typewriter from 'typewriter-effect';

const TypewriterContent = () => {
	return (
		<Typewriter
			options={{
				strings: [
					'Front End Developer',
					'React Developer',
					'Software Engineer',
				],
				autoStart: true,
				loop: true,
				deleteSpeed: 35,
				delay: 100,
			}}
		/>
	);
};

export default TypewriterContent;
