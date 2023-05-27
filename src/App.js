import Content from './components/content/Content';
import NavBar from './components/utils/Navbar';
import Footer from './components/utils/Footer';
import { PagesProvider } from './contexts/PagesContext';
import { PortfolioProvider } from './contexts/PortfolioContext';
import { SocialsProvider } from './contexts/SocialsContext'
import './App.css';

function App() {
	return (
		<div className="containter-fluid">
			<Contexts>
				<NavBar />
				<Content />
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
