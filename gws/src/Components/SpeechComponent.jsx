import React, { useState } from 'react';

const SpeechComponent = () => {
  const [text, setText] = useState("Hello, how are you?");
  const [pitch, setPitch] = useState(1);
  const [rate, setRate] = useState(1);

  const speak = () => {
    // Check if SpeechSynthesis is supported
    if ('speechSynthesis' in window) {
      const msg = new SpeechSynthesisUtterance(text);
      msg.lang = 'en-US';  // You can change the language here
      msg.pitch = pitch;
      msg.rate = rate;
      window.speechSynthesis.speak(msg);
    } else {
      alert("Sorry, your browser doesn't support speech synthesis.");
    }
  };

  return (
    <div>
      <h1>Speech Synthesis Example</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows="4"
        cols="50"
        placeholder="Enter text to speak"
      />

      <div>
        <label>Pitch: {pitch}</label>
        <input
          type="range"
          min="0.5"
          max="2"
          step="0.1"
          value={pitch}
          onChange={(e) => setPitch(parseFloat(e.target.value))}
        />
      </div>

      <div>
        <label>Rate: {rate}</label>
        <input
          type="range"
          min="0.5"
          max="2"
          step="0.1"
          value={rate}
          onChange={(e) => setRate(parseFloat(e.target.value))}
        />
      </div>

      <button onClick={speak}>Speak</button>
    </div>
  );
};

export default SpeechComponent;
