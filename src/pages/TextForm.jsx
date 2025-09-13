import { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "../context/themeContext/useThemeContext";
import {AlertContext} from "../context/AlertContext/useAlertContext"
import {wordCounter, handleCopy, handleExtraSpaces, reverseText, converTitleCase, convertLowerCase, convertUpperCase, calculateSpeakingTime, clearText, speak } from "../function"

export default function TextForm() {
	const { theme } = useContext(ThemeContext);
	const {showAlert} = useContext(AlertContext);

	const [text, setText] = useState("");
	const [vowel, setVowel] = useState(0);
	const [consonant, setConsonant] = useState(0);

	const speakRef = useRef(0);
	const vowelRef = useRef(0);
	const consonantRef = useRef(0);

	useEffect(() => {
		vowelRef.current = 0;
		for (let i = 0; i < text.length; i++) {
			if (text.charAt(i).match(/[aeiouAEIOU]/)) {
				vowelRef.current++;
			}
		}
		setVowel(vowelRef.current);
		consonantRef.current = 0;
		for (let i = 0; i < text.length; i++) {
			if (
				text
					.charAt(i)
					.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/)
			) {
				consonantRef.current++;
			}
		}
		setConsonant(consonantRef.current);
	}, [text]);

	const changeTextHandler = (event) => {
		setText(event.target.value);
	};

	return (
		<div
			style={{
				color: theme === "dark" ? "white" : "#0e1a2d",
				backgroundColor: theme === "dark" ? "#0e1a2d" : "white",
				minHeight: "100vh", paddingBottom:"5rem"
			}}
		>
			<div className="container">
				<h1 className="mb-4">
					Just type in TextNinja - Word Counter, Character Counter,
					Remove Extra Spaces
				</h1>
				{/* typing Area */}
				<div className="mb-3">
					<textarea
						className="form-control"
						id="myBox"
						rows="8"
						value={text}
						style={{
							backgroundColor:
								theme === "dark" ? "#4b5055" : "white",
							color: theme === "dark" ? "white" : "black",
						}}
						onChange={(e) => changeTextHandler(e)}
					/>
				</div>

				{/* button section start */}
				<button
					disabled={text.length === 0}
					className="btn btn-primary mx-2 my-2"
					onClick={() => convertUpperCase(text, setText)}
				>
					Convert to Uppercase
				</button>
				<button
					disabled={text.length === 0}
					className="btn btn-primary mx-2 my-2"
					onClick={() => convertLowerCase(text, setText)}
				>
					Convert to LowerCase
				</button>
				<button
					disabled={text.length === 0}
					className="btn btn-primary mx-2 my-2"
					onClick={() => converTitleCase(text, setText)}
				>
					Convert to TitleCase
				</button>
				<button
					disabled={text.length === 0}
					className="btn btn-primary mx-2 my-2"
					onClick={() =>reverseText(text, setText)}
				>
					Reverse Text
				</button>
				<button
					disabled={text.length === 0}
					className="btn btn-primary mx-2 my-2"
					onClick={() => handleCopy(text, showAlert)}
				>
					Copy Text
				</button>
				<button
					disabled={text.length === 0}
					className="btn btn-primary mx-2 my-2"
					onClick={() => handleExtraSpaces(text, setText)}
				>
					Remove Extra Spaces
				</button>
				<button
					disabled={text.length === 0}
					className="btn btn-primary mx-2 my-2"
					onClick={() => speak(speakRef, text)}
				>
					Speak
				</button>
				<button
					disabled={text.length === 0}
					className="btn btn-primary mx-2 my-2"
					onClick={() => clearText(setText)}
				>
					clear
				</button>
			</div>
			{/* button section end */}
			{text.length > 10 && <div className="container my-4">
				<h1>Your text summary</h1>
				{
					<p>
					{text === "" ? 0 : wordCounter(text).word} words and{" "}
					{wordCounter(text).chLen} characters
				</p>
				}
				<p>
					It takes less than{" "}<b style={{fontWeight:"2rem"}}>
					{calculateSpeakingTime(text) < 1 ? "a": calculateSpeakingTime(text)}{" "}
					minutes</b> to read for an average speaker.
				</p>
				<p>
					there are {vowel} Vowels and {consonant} consonants
				</p>
			</div>}
		</div>
	);
}
