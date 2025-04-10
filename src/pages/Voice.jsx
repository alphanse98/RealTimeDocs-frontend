import React from "react";
import useVoiceToText from "../hook/useVoiceToText ";

const Voice = () => {
  const { text, setText, startListening, stopListening } = useVoiceToText();

  return (
    <>
      <div>Alphans AI</div>
      <div>Voice to text converter</div>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      <br />
      <button onClick={startListening}>Start</button>
      <button onClick={stopListening}>Stop</button>
    </>
  );
};

export default Voice;
