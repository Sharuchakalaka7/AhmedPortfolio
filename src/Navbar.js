import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Navbar.css';

function NavLink({ title, link }) {
	return (
		<h2 className="navbar-link">
			<a href={link}>{title}</a>
		</h2>
	);
}

function NavBar() {
	const [navBarExpand, setNavBarExpand] = useState(false);

	/** Always-On Buttons **/
	const navButton = (
		<button onClick={handleMenuClick} className="navbar-button" id="navbar-menu-button">
			<FontAwesomeIcon icon={"fa-solid fa-" + (navBarExpand ? "arrow-left" : "bars")} className="local-fa-icon" id="navbar-menu-arrow" size="xl"/>
		</button>
	);
	// Idea: button for toggling light/dark mode
	// Idea: button for switching languages

	/** Always-On Button Handlers */
	function handleMenuClick() {
		setNavBarExpand(!navBarExpand);
	}

	/** Navbar Expanded Contents **/
	const navLinks = (navBarExpand &&
		<div>
			<NavLink title="Home" link="#" />
			<NavLink title="About" link="#" />
			<NavLink title="Projects" link="#" />
			<NavLink title="Contact" link="#" />
		</div>
	);

	/** Final Navbar Component **/
	return (
		<div className="navbar">
			{navButton}
			{navLinks}
		</div>
	);
}

export default NavBar;
