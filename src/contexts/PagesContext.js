import { createContext, useState } from "react";

const PagesContext = createContext();

export function PagesProvider({ children }) {
	const [pages, setPages] = useState([
		{
			title: "Home",
			link: "#"
		},
		{
			title: "About",
			link: "#"
		},
		{
			title: "Portfolio",
			link: "#"
		},
		{
			title: "Contact",
			link: "#"
		}
	]);

	function addPage(title, link) {
		setPages((prevPages) => [...prevPages, {title: title, link: link}]);
	}

	return (
		<PagesContext.Provider value={{ pages, addPage }}>
			{children}
		</PagesContext.Provider>
	);
}

export default PagesContext;
