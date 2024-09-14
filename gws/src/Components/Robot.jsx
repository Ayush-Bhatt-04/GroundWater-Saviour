import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './Robot.css';
import { Link } from "react-router-dom";// Import the CSS file



const Robot = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [hasSpoken, setHasSpoken] = useState(false); // State to track if speech has been done
  const fullText = "Groundwater management is a crucial aspect of ensuring a sustainable supply of water for various uses while protecting the environment. Groundwater is the water stored beneath the Earth's surface in aquifers, which are permeable rock formations that can hold and transmit water. So let's play a game to understand its importance?";

  useEffect(() => {
    // Load available voices
    const loadVoices = () => {
      const availableVoices = speechSynthesis.getVoices();
      setVoices(availableVoices);
      if (availableVoices.length > 0) {
        setSelectedVoice(availableVoices[0]);
      }
    };

    loadVoices();
    speechSynthesis.onvoiceschanged = loadVoices;
  }, []);

  useEffect(() => {
    if (!hasSpoken && selectedVoice) {
      const utterance = new SpeechSynthesisUtterance(fullText);
      utterance.voice = selectedVoice;
      utterance.pitch = 1; // Adjust pitch
      utterance.rate = 1;  // Adjust rate
      utterance.onend = () => {
        setShowOptions(true); // Show options after speech ends
        setHasSpoken(true); // Ensure speech is not repeated
      };
      speechSynthesis.speak(utterance);
    }
  }, [hasSpoken, selectedVoice]);

  const handleOptionClick = (option) => {
    alert(`You selected: ${option}`);
    // You can add more logic here for each option
  };

  return (
    <div className="robot-container">
      <motion.div
        className="robot"
        animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="head">
          <div className="eyes">
            <div className="eye-left"></div>
            <div className="eye-right"></div>
          </div>
          <div className="antenna"></div>
          <div className="speech-bubble">
            <p className="speech-text">{"Saying..."}</p> {/* Display full text in the speech bubble */}
          </div>
        </div>
        <div className="body">
          <div className="arms">
            <div className="arm-left"></div>
            <div className="arm-right"></div>
          </div>
          <div className="legs">
            <div className="leg-left"></div>
            <div className="leg-right"></div>
          </div>
        </div>
      </motion.div>

      {showOptions && (
        <div className="options-container">
          <button className="cta-button"><Link to="/Scene1" className='url'>
            Play
          </Link></button>
          <button className="cta-button"><Link to="/" className='url'>
            Back
          </Link></button>
        </div>
      )}
    </div>
  );
};

export default Robot;
