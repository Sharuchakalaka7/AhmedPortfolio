import { createContext, useState } from "react";

const SocialsContext = createContext();

export function SocialsProvider({ children }) {
	const [pages, setPages] = useState([
		{
			title: "LinkedIn",
			link: "https://www.linkedin.com/in/ahmed-shahriar-a9248b230/"
		},
		{
			title: "GitHub",
			link: "https://github.com/Sharuchakalaka7/"
		},
		{
			title: "Email",
			link: "mailto:ahmed.shahriar343@gmail.com"
		}
	]);

	function addPage(title, link, icon) {
		setPages((prevPages) => [...prevPages, { title: title, link: link, icon: icon }]);
	}

	return (
		<SocialsContext.Provider value={{ pages, addPage }}>
			{children}
		</SocialsContext.Provider>
	);
}

export default SocialsContext;