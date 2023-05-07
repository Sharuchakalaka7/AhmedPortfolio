import NavBar from './Navbar.js';
import HomePage from './Homepage.js';
import Footer from './Footer.js';
import './App.css';

function App() {
	return (
		<div className="root-wrapper">
			<div className="grid-container">
				<NavBar />
				<HomePage />
			</div>
			<Footer />
		</div>
	);
}



export default App;
