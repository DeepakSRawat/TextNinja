import { useState } from "react";
import TextForm from "./pages/TextForm.jsx";
import About from "./pages/About.jsx";
import {
	BrowserRouter,
	Routes, // instead of "Switch"
	Route,
} from "react-router-dom";
import {ThemeProvider} from "./context/themeContext/ThemeProvider.tsx"
import Alert from "./components/Alert.tsx";
import AlertProvider from "./context/AlertContext/AlertProvider.tsx";
import Navbar from "./components/Navbar.jsx"


function App() {
	return (
		<ThemeProvider>
			<AlertProvider>
				<BrowserRouter>
				<Navbar />
				<Alert/>
					<Routes>
						<Route exact path="/" element={<TextForm />} />
					</Routes>
					<Routes>
						<Route exact path="/about" element={<About />} />
					</Routes>
				</BrowserRouter>
			</AlertProvider>
		</ThemeProvider>
	);
}

export default App;
