import { useContext } from 'react';
import PagesContext from '../../contexts/PagesContext';
import PortfolioContext from '../../contexts/PortfolioContext';
import SocialsContext from '../../contexts/SocialsContext';
import './Footer.css';

function Footer() {
	return (
		<div className="footer">
			<FooterColumn heading="Pages" context={PagesContext} />
			<FooterColumn heading="Projects" context={PortfolioContext} />
			<FooterColumn heading="Socials" context={SocialsContext} />
		</div>
	);
	// add email subscriber list
}

function FooterColumn({ heading, context }) {
	const { pages } = useContext(context);
	return (
		<div className="footer-column">
			<h2 className="footer-column-heading">
				{heading}
			</h2>
			{pages.map((page) => <FooterLink title={page.title} link={page.link} key={page.title} />)}
		</div>
	);
}

function FooterLink({ title, link }) {
	return (
		<h5 className="footer-link">
			<a href={link}>{title}</a>
		</h5>
	);
}

export default Footer;