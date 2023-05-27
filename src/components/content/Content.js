import { Container, Row, Col, Image } from 'react-bootstrap';
import { TypeAnimation } from 'react-type-animation';
import './Content.css';

function Content() {
	return (
		<div className="content-wrapper">
			<IntroSection />
		</div>
	);
}

function IntroSection() {
	// navy blue color: #091752
	return (
		<Section color="black" id="home">
			<Row>
				<HighlightTextCol title="Hi! I'm Ahmed Shahriar." linktext="See what I do" href="#projects">
					I am an aspiring software engineer finding my place in the tech world!
				</HighlightTextCol>
				<Col className="section-col">
					<Image
						src="/images/profile.jpg"
						className="d-inline-block align-top"
						alt="Ahmed Shahriar Profile Photo"
						fluid roundedCircle
					/>
				</Col>
			</Row>
		</Section>
	);
}

function Section({ children, color, id }) {
	return (
		<div className="section" id={id} style={{ backgroundColor: color }}>
			<Container fluid>
				{children}
			</Container>
		</div>
	);
}

function HighlightTextCol({ children, title, linktext, href }) {
	return (
		<Col className="section-col">
			<TypeAnimation
				className="highlight-title display-2"
				sequence={[
					200,
					title
				]}
				speed={30}
				wrapper="h1"
				cursor={false}
			/>
			<h4 className="highlight-caption">{children}</h4>
			<h4 className="highlight-link">
				<a href={href}>{"--> " + linktext}</a>
			</h4>
		</Col>
	);
}

export default Content;
