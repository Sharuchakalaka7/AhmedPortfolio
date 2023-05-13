import { createContext, useState } from "react";

const PortfolioContext = createContext();

export function PortfolioProvider({ children }) {
	const [pages, setPages] = useState([
		{
			title: "Personal Website",
			link: "https://github.com/Sharuchakalaka7/AhmedPortfolio"
		},
		{
			title: "Predictive Text Suggestions",
			link: "https://github.com/Sharuchakalaka7/PredictiveTextSuggestions"
		},
		{
			title: "Game of Life",
			link: "https://github.com/Sharuchakalaka7/Game-of-Life"
		},
		{
			title: "WLP4 Compiler",
			link: "https://github.com/Sharuchakalaka7/WLP4Compiler"
		}
	]);

	function addPage(title, link) {
		setPages((prevPages) => [...prevPages, { title: title, link: link }]);
	}

	return (
		<PortfolioContext.Provider value={{ pages, addPage }}>
			{children}
		</PortfolioContext.Provider>
	);
}

export default PortfolioContext;