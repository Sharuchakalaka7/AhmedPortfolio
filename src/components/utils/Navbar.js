import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'

import './Navbar.css';

function NavBar() {
	return (
		<Navbar bg="dark" sticky="top">
			<Container>
				<Navbar.Brand href=".">
					<img
						src="/images/sample-logo.jpg"
						className="d-inline-block align-top"
						alt="Ahmed Shahriar Logo"
					/>
				</Navbar.Brand>
			</Container>
		</Navbar>
	);
}

export default NavBar;
