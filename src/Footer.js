import './Footer.css';

function FooterLink({ title, link }) {
	return (
		<h5 className="footer-link">
			<a href={link}>{title}</a>
		</h5>
	);
}

const pages = [
		{
			"title": "Home",
			"link": "#"
		},
		{
			"title": "About",
			"link": "#"
		},
		{
			"title": "Projects",
			"link": "#"
		},
		{
			"title": "Contact",
			"link": "#"
		}
	];

function PagesColumn() {
	return (
		<div className="footer-column">
			{pages.map(page => <FooterLink title={page.title} link={page.link} />)}
		</div>
	);
}

function Footer() {
	return (
		<div className="footer">
			<PagesColumn />
			<PagesColumn />
			<PagesColumn />
		</div>
	);
}

export default Footer;