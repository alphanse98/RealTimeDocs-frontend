import React, { useState, useRef } from "react";

const Voice = () => {
  const [text, setText] = useState("");
  const recognitionRef = useRef(null);

  const initRecognition = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Speech recognition is not supported in this browser.");
      return null;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = true; // This is the key for live updates
    recognition.continuous = true; // Keep listening
    recognition.interimResults = true;

    recognition.onresult = (event) => {
      let liveText = "";
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        liveText += event.results[i][0].transcript;
      }
      setText(liveText);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
    };

    recognition.onend = () => {
      console.log("Recognition ended");
    };

    return recognition;
  };

  const handleStart = () => {
    const recognition = initRecognition();
    if (recognition) {
      recognitionRef.current = recognition;
      recognition.start();
    }
  };

  const handleStop = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
  };

  return (
    <>
      <div>Alphans AI</div>
      <div>Voice to text converter</div>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      <br />
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  );
};

export default Voice;
