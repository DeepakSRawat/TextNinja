import React, { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "../context/useTheme";
import Navbar from "../components/Navbar";
import Alert from "../components/Alert";

export default function TextForm() {
	const { theme } = useContext(ThemeContext);

	const [text, setText] = useState("");
	const [vowel, setVowel] = useState(0);
	const [consonant, setConsonant] = useState(0);
	const [alert, setAlert] = useState(null);

	const vowelRef = useRef(0);
	const consonantRef = useRef(0);

	const showAlert = (message, type) => {
		setAlert({
			msg: message,
			type: type,
		});
		setTimeout(() => {
			setAlert(null);
		}, 3000);
	};

	const convertUpperCase = () => {
		// console.log('button click');
		let newText = text.toUpperCase();
		setText(newText);
	};

	const convertLowerCase = () => {
		// console.log('button click');
		let newText = text.toLowerCase();
		setText(newText);
	};
	const converTitleCase = () => {
		// console.log('button click');
		let newText = text.toLowerCase();
		let words = newText.split(" ");
		let newWords = words.map((word) => {
			return word.charAt(0).toUpperCase() + word.slice(1);
		});
		newText = newWords.join(" ");
		setText(newText);
	};

	const reverseText = () => {
		// console.log('button click');
		let strArr = text.split("");
		strArr = strArr.reverse();
		let newText = strArr.join("");
		setText(newText);
	};

	const handleCopy = () => {
		// let text = document.getElementById("myBox");
		// text.select();
		// text.setSelectionRange(0, 9999);
		navigator.clipboard.writeText(text);
		showAlert("text Copied", "success");
		// document.getSelection().removeAllRanges();
	};

	const handleExtraSpaces = () => {
		let newText = text.split(/[ ]+/);
		setText(newText.join(" "));
	};

	useEffect(() => {
		vowelRef.current = 0;
		for (let i = 0; i < text.length; i++) {
			if (text.charAt(i).match(/[aeiouAEIOU]/)) {
				vowelRef.current++;
				setVowel(vowelRef.current);
			}
		}
		consonantRef.current = 0;
		for (let i = 0; i < text.length; i++) {
			if (
				text
					.charAt(i)
					.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/)
			) {
				consonantRef.current++;
				setConsonant(consonantRef.current);
			}
		}
	}, [text]);

	const speak = () => {
		let msg = new SpeechSynthesisUtterance();
		msg.text = text;
		window.speechSynthesis.speak(msg);
		props.showAlert(
			"It takes a few seconds, do not click multiple times",
			"warning"
		);
	};

	const clearText = () => {
		// console.log('button click');
		let newText = "";
		setText(newText);
	};

	const changeTextHandler = (event) => {
		setText(event.target.value);
	};

	const wordCounter = () => {
		// we can also do let arr=text.trim().split(/[ ]+/g)
		let arr = text.trim().split(/\s+/);
		let character = arr.join("");
		return { word: arr.length, chLen: character.length };
	};
	return (
		<div
			style={{
				color: theme === "dark" ? "white" : "#0e1a2d",
				backgroundColor: theme === "dark" ? "#0e1a2d" : "white",
				minHeight: "100vh", paddingBottom:"5rem"
			}}
		>
			<Navbar />
			<Alert alert={alert} />
			<div className="container">
				<h1 className="mb-4">
					Just type in TextNinja - Word Counter, Character Counter,
					Remove Extra Spaces
				</h1>
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
						onChange={changeTextHandler}
					/>
				</div>
				<button
					disabled={text.length === 0}
					className="btn btn-primary mx-2 my-2"
					onClick={convertUpperCase}
				>
					Convert to Uppercase
				</button>
				<button
					disabled={text.length === 0}
					className="btn btn-primary mx-2 my-2"
					onClick={convertLowerCase}
				>
					Convert to LowerCase
				</button>
				<button
					disabled={text.length === 0}
					className="btn btn-primary mx-2 my-2"
					onClick={converTitleCase}
				>
					Convert to TitleCase
				</button>
				<button
					disabled={text.length === 0}
					className="btn btn-primary mx-2 my-2"
					onClick={reverseText}
				>
					Reverse Text
				</button>
				<button
					disabled={text.length === 0}
					className="btn btn-primary mx-2 my-2"
					onClick={handleCopy}
				>
					Copy Text
				</button>
				<button
					disabled={text.length === 0}
					className="btn btn-primary mx-2 my-2"
					onClick={handleExtraSpaces}
				>
					Remove Extra Spaces
				</button>
				<button
					disabled={text.length === 0}
					className="btn btn-primary mx-2 my-2"
					onClick={speak}
				>
					Speak
				</button>
				<button
					disabled={text.length === 0}
					className="btn btn-primary mx-2 my-2"
					onClick={clearText}
				>
					clear
				</button>
			</div>
			<div className="container my-4">
				<h1>Your text summary</h1>
				<p>
					{text === "" ? 0 : wordCounter(text).word} words and{" "}
					{wordCounter(text).chLen} character
				</p>
				<p>
					It takes{" "}
					{text.split(" ").filter((e) => {
						return e.length !== 0;
					}).length * 0.0112}{" "}
					Minutes to read this.
				</p>
				<p>
					there are {vowel} Vowels and {consonant} consonants
				</p>
			</div>
		</div>
	);
}
