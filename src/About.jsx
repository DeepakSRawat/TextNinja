import React, { useContext } from "react";
import { ThemeContext } from "./context/useTheme";
import Navbar from "./components/Navbar";

export default function About() {
	const { theme } = useContext(ThemeContext);

	const myStyle = {
		color: theme === "dark" ? "white" : "black",
		backgroundColor: theme === "dark" ? "#4b5055" : "white",
	};

	return (
		<div
			style={{
				color: theme === "dark" ? "white" : "#0e1a2d",
				backgroundColor: theme === "dark" ? "#0e1a2d" : "white",
				height: "100vh",
			}}
		>
			<Navbar />
			<div className="container">
				<h2 className="my-2">About TextNinja</h2>
				<p>
					Welcome to TextNinja, where text manipulation meets
					simplicity!
				</p>
				<div
					className="accordion"
					id="accordionExample"
					style={myStyle}
				>
					<div className="accordion-item">
						<h2 className="accordion-header">
							<button
								className="accordion-button"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#collapseOne"
								aria-expanded="true"
								aria-controls="collapseOne"
								style={myStyle}
							>
								<strong>What is textNinja?</strong>
							</button>
						</h2>
						<div
							id="collapseOne"
							className="accordion-collapse collapse show"
							data-bs-parent="#accordionExample"
						>
							<div className="accordion-body" style={myStyle}>
								<strong>TextNinja</strong> is a free-to-use web
								application designed to showcase my skills in
								text manipulation. This project serves as a
								testament to my proficiency in React and web
								development, providing users with a platform to
								experiment with various text manipulation
								techniques.
							</div>
						</div>
					</div>
					<div className="accordion-item">
						<h2 className="accordion-header">
							<button
								className="accordion-button collapsed"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#collapseTwo"
								aria-expanded="false"
								aria-controls="collapseTwo"
								style={myStyle}
							>
								<strong>Text Manipulation:</strong>
							</button>
						</h2>
						<div
							id="collapseTwo"
							className="accordion-collapse collapse"
							data-bs-parent="#accordionExample"
						>
							<div className="accordion-body" style={myStyle}>
								Harness the power of text manipulation with
								ease. Whether you want to convert case, reverse
								text, or perform other transformations,
								textNinja has you covered.
							</div>
						</div>
					</div>
					<div className="accordion-item">
						<h2 className="accordion-header">
							<button
								className="accordion-button collapsed"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#collapseThree"
								aria-expanded="false"
								aria-controls="collapseThree"
								style={myStyle}
							>
								<strong>Showcasing Skills:</strong>
							</button>
						</h2>
						<div
							id="collapseThree"
							className="accordion-collapse collapse"
							data-bs-parent="#accordionExample"
						>
							<div className="accordion-body" style={myStyle}>
								<strong>TextNinja</strong> is not just a text
								manipulation tool; it's a reflection of my
								skills in web development. Explore the
								functionalities, and witness the seamless user
								experience crafted with React.
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
