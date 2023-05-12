import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Navbar.css';

function NavButton({ navBarExpand, handleMenuClick }) {
	return (
		<button onClick={handleMenuClick} className="navbar-button" id="navbar-menu-button">
			<FontAwesomeIcon icon={"fa-solid fa-" + (navBarExpand ? "arrow-left" : "bars")} className="local-fa-icon" id="navbar-menu-arrow" size="xl"/>
		</button>
	);
}

function NavLink({ title, link }) {
	return (
		<h2 className="navbar-link">
			<a href={link}>{title}</a>
		</h2>
	);
}

function NavBar() {
	const [navBarExpand, setNavBarExpand] = useState(false);

	/** Handlers */
	function handleMenuClick() {
		setNavBarExpand(!navBarExpand);
	}

	/** Final Navbar Component **/
	return (
		<div className="navbar">
			<NavButton navBarExpand={navBarExpand} handleMenuClick={handleMenuClick} />
			{navBarExpand &&
			<div>
				<NavLink title="Home" link="#" />
				<NavLink title="About" link="#" />
				<NavLink title="Projects" link="#" />
				<NavLink title="Contact" link="#" />
			</div>}
		</div>
	);
}

export default NavBar;
