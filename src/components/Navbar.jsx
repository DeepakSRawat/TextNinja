import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/useTheme";

export default function Navbar() {
	const { theme, toggleTheme } = useContext(ThemeContext);

	return (
		<div>
			<nav
				className={`navbar navbar-expand-lg navbar-${theme} bg-${theme}`}
			>
				<div className="container-fluid">
					<Link className="navbar-brand" to="/">
						TextNinja
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse"
						id="navbarSupportedContent"
					>
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							{/* <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li> */}
							<li className="nav-item">
								<Link className="nav-link" to="/about">
									About us
								</Link>
							</li>
						</ul>
						<form className="d-flex" role="search">
							<div
								className={`form-check form-switch d-flex justify-content-between align-items-center text-${
									theme === "light" ? "dark" : "white"
								}`}
							>
								<label
									className="form-check-label me-2"
									htmlFor="flexSwitchCheckLight"
								>
									Light
								</label>

								<input
									onClick={toggleTheme}
									className="form-check-input mx-2"
									type="checkbox"
									role="switch"
									id="flexSwitchCheckLight"
									checked={theme === "dark"}
								/>

								<label
									className="form-check-label ms-2"
									htmlFor="flexSwitchCheckDark"
								>
									Dark
								</label>
							</div>
						</form>
					</div>
				</div>
			</nav>
		</div>
	);
}

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	about: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
	title: "Title",
	about: "About",
};
