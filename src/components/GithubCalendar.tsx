import GitHubCalendar from 'react-github-calendar';
import { Row } from 'react-bootstrap';

const Calendar = () => {
	return (
		<Row className='about-calendar-row'>
			<h1 className='project-heading' style={{ paddingBottom: '20px' }}>
				Days that I <strong className='pink-text'>CODE</strong>
			</h1>
			<GitHubCalendar
				username='rutul24591'
				blockSize={14}
				blockMargin={7}
				// color='#9be9a8' //9be9a8
				fontSize={16}
			/>
		</Row>
	);
};

export default Calendar;
