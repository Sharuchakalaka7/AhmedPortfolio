//import { useContext } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

//import PagesContext from '../../contexts/PagesContext';
//import PortfolioContext from '../../contexts/PortfolioContext';
//import SocialsContext from '../../contexts/SocialsContext';
import './Footer.css';

function Footer() {
	//const { socialPages } = useContext(SocialsContext);

	return (
		<Container className="footer" fluid>
			<Row>
				<Col>
					<SocialIcon title="LinkedIn" img="/images/linkedin.png" />
				</Col>
			</Row>
		</Container>
	);
}

function SocialIcon({ title, img, link }) {
	return (
		<div className="footer-social">
			<Image
				src={img}
				className="d-inline-block align-top"
				alt={title + " Logo"}
				fluid
			/>
		</div>
	)
}

export default Footer;