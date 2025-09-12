import { useState } from "react";
import TextForm from "./pages/TextForm.jsx";
import About from "./pages/About.jsx";
import {
	BrowserRouter,
	Routes, // instead of "Switch"
	Route,
} from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext.tsx";

function App() {
	return (
		<ThemeProvider>
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<TextForm />} />
				</Routes>
				<Routes>
					<Route exact path="/about" element={<About />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
