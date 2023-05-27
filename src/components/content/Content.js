import { Container, Row, Col, Image } from 'react-bootstrap';
import './Content.css';

function Content() {
	return (
		<div className="content-wrapper">
			<IntroSection />
		</div>
	);
}

function IntroSection() {
	return (
		<Section color="#091752">
			<Row>
				<Col className="section-col">
					<Image
						src="/images/profile.jpg"
						className="d-inline-block align-top"
						alt="Ahmed Shahriar Profile Photo"
						fluid roundedCircle
					/>
				</Col>
				<Col className="section-col">
					<h1>Ahmed Shahriar.</h1>
				</Col>
			</Row>
		</Section>
	);
}

function Section({ children, color }) {
	return (
		<div className="section" style={{ backgroundColor: color }}>
			<Container fluid>
				{children}
			</Container>
		</div>
	);
}

export default Content;
