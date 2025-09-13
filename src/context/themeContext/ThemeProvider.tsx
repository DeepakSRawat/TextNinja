import { useEffect, useState, type ProviderProps } from "react";
import { ThemeContext } from "./useThemeContext";

export function ThemeProvider({ children }: ProviderProps<unknown>) {
	const [theme, setTheme] = useState(
		() => localStorage.getItem("theme") || "light"
	);

	useEffect(() => {
		const getTheme = localStorage.getItem("theme");
		if (!getTheme) {
			localStorage.setItem("theme", theme);
		}
	}, []);

	const toggleTheme = () => {
		setTheme((prev) => {
			localStorage.setItem("theme", prev == "light" ? "dark" : "light");
			return prev === "light" ? "dark" : "light";
		});
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}
