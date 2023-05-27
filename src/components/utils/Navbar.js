import { useContext } from 'react';
import { Navbar, Image, Nav } from 'react-bootstrap/';
import PagesContext from '../../contexts/PagesContext';

import './Navbar.css';

function NavBar() {
	const { pages } = useContext(PagesContext);

	return (
		<Navbar bg="dark" variant="dark" sticky="top">
			<Navbar.Brand href=".">
				<Image
					src="/images/sample-logo.jpg"
					width="30"
					height="30"
					className="d-inline-block align-top"
					alt="Ahmed Shahriar Logo"
				/>
			</Navbar.Brand>
			<Nav className="me-auto">
				{pages.map((page) => <Nav.Link href={page.link}>{page.title}</Nav.Link>)}
			</Nav>
		</Navbar>
	);
}

export default NavBar;
