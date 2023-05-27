import { Navbar, Image } from 'react-bootstrap/';

import './Navbar.css';

function NavBar() {
	return (
		<Navbar bg="dark" sticky="top">
			<Navbar.Brand href=".">
				<Image
					src="/images/sample-logo.jpg"
					width="30"
					height="30"
					className="d-inline-block align-top"
					alt="Ahmed Shahriar Logo"
				/>
			</Navbar.Brand>
		</Navbar>
	);
}

export default NavBar;
