import { useState, useRef } from "react";

const useVoiceToText = () => {
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
    recognition.interimResults = true;
    recognition.continuous = true;

    recognition.onresult = (event) => {
      let liveText = text;
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

  const startListening = () => {
    const recognition = initRecognition();
    if (recognition) {
      recognitionRef.current = recognition;
      recognition.start();
    }
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
  };

  return {
    text,
    setText,
    startListening,
    stopListening,
  };
};

export default useVoiceToText;
