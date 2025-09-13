import type { RefObject } from "react";
import type { AlertType } from "./types/types";

type SetTextType = (val:string) => void

const convertUpperCase = (text:string, setText:SetTextType) => {
    // console.log('button click');
    const newText = text.toUpperCase();
    setText(newText);
  };

  const convertLowerCase = (text: string, setText:SetTextType) => {
    // console.log('button click');
    const newText = text.toLowerCase();
    setText(newText);
  };
  const converTitleCase = (text:string, setText:SetTextType) => {
    // console.log('button click');
    let newText = text.toLowerCase();
    const words = newText.split(" ");
    const newWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    newText = newWords.join(" ");
    setText(newText);
  };

  const reverseText = (text:string, setText:SetTextType) => {
    // console.log('button click');
    let strArr = text.split("");
    strArr = strArr.reverse();
    const newText = strArr.join("");
    setText(newText);
  };

  const handleCopy = async (text:string, showAlert:(val:AlertType) => void) => {
    // let text = document.getElementById("myBox");
    // text.select();
    // text.setSelectionRange(0, 9999);
    // console.log("copied text:", JSON.stringify(text));
    await navigator.clipboard.writeText(text);
    showAlert({msg:"text Copied", type:"success"});
    // document.getSelection().removeAllRanges();
  };

  const handleExtraSpaces = (text: string, setText:SetTextType) => {
    const newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const wordCounter = (text:string) => {
		// we can also do let arr=text.trim().split(/[ ]+/g)
		const arr = text.trim().split(/\s+/);
		const character = arr.join("");
		return { word: arr.length, chLen: character.length };
	};

  const calculateSpeakingTime = (text:string) => {
    const res = text.split(" ").filter((e) => {
      return e.length !== 0;
    }).length * 0.0112;
    return res.toFixed();
  }

  const speak = (speakRef:RefObject<number>, text: string) => {
		if(speakRef.current === 1) return; 
		speakRef.current = 1;
		const msg = new SpeechSynthesisUtterance();
		msg.text = text;
		// When speech ends, reset the flag
		msg.onend = () => {
			speakRef.current = 0;
		};
		window.speechSynthesis.speak(msg);
	};

	const clearText = (setText:SetTextType) => {
		const newText = "";
		setText(newText);
	};


  export {handleCopy, handleExtraSpaces, wordCounter, reverseText, converTitleCase, convertLowerCase, convertUpperCase, calculateSpeakingTime, speak, clearText}