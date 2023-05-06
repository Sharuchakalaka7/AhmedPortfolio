import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HomePage from './Homepage.js';
import './App.css';

function NavBar() {
	const [navBarExpand, setNavBarExpand] = useState(false);

	const navButton = <button onClick={handleClick}><FontAwesomeIcon icon="fa-solid fa-bars" /></button>

	function handleClick(e) {
		setNavBarExpand(!navBarExpand);
	}

	return (
		<div className="navbar">
			{navButton}
		</div>
	);
}

function Footer() {
	return (
		<div className="footer">
			This is the footer content
		</div>
	);
}

function App(props) {
	return (
		<div className="root-wrapper">
			<NavBar />
			<HomePage />
			<Footer />
		</div>
	);
}

export default App;
