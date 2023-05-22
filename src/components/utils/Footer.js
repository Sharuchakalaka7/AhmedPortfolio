import { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import PagesContext from '../../contexts/PagesContext';
import PortfolioContext from '../../contexts/PortfolioContext';
import SocialsContext from '../../contexts/SocialsContext';
import './Footer.css';

function Footer() {
	return (
		<Container className="footer" fluid>
			<Row>
				<FooterColumn heading="Pages" context={PagesContext} />
				<FooterColumn heading="Projects" context={PortfolioContext} />
				<FooterColumn heading="Socials" context={SocialsContext} />
				<FooterForm />
			</Row>
		</Container>
	);
	// add email subscriber list
}

function FooterColumn({ heading, context }) {
	const { pages } = useContext(context);
	return (
		<Col>
			<h2 className="footer-column-heading">{heading}</h2>
			{pages.map((page) => (
				<h5 className="footer-link" key={page.title}>
					<a href={page.link}>{page.title}</a>
				</h5>
			))}
		</Col>
	);
}

function FooterForm() {
	return (
		<Col>
			<h2 className="footer-column-heading">Stay in Touch</h2>
		</Col>
	);
}

export default Footer;