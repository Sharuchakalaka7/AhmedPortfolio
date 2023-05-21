import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'

import './Navbar.css';

function NavBar() {
	//<image src="#" alt="Bootstrap" width="30" height="24" />
	return (
		<Navbar bg="dark">
			<Container>
				<Navbar.Brand href=".">
					<img
						src="/images/sample-logo.jpg"
						className="d-inline-block align-top"
						alt="React Bootstrap logo"
					/>
				</Navbar.Brand>
			</Container>
		</Navbar>
	);
}

export default NavBar;
