import HomePage from './pageComponents/Homepage';
import NavBar from './generalComponents/Navbar';
import Footer from './generalComponents/Footer';
import { PagesProvider } from './contexts/PagesContext';
import { PortfolioProvider } from './contexts/PortfolioContext';
import { SocialsProvider } from './contexts/SocialsContext'
import './App.css';

function App() {
	return (
		<div className="root-wrapper">
			<Contexts>
				<NavBar />
				<HomePage />
				<Footer />
			</Contexts>
		</div>
	);
}

function Contexts({ children }) {
	return (
		<PagesProvider>
		<PortfolioProvider>
		<SocialsProvider>
			{children}
		</SocialsProvider>
		</PortfolioProvider>
		</PagesProvider>
	)
}

export default App;
