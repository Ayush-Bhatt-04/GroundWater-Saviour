import React, { useRef, useState, useEffect } from 'react';
import Webcam from 'react-webcam';
import * as handTrack from 'handtrackjs';
import './Quiz.css'; // Ensure you create this CSS file for styling

function App() {
    const webcamRef = useRef(null);
    const [model, setModel] = useState(null);
    const [handDetected, setHandDetected] = useState(false);

    useEffect(() => {
        const runDetection = async () => {
            // Load the hand tracking model
            const model = await handTrack.load();
            setModel(model);

            // Continuously detect hands
            setInterval(() => detectHands(model), 100);
        };

        runDetection();
    }, []);

    const detectHands = async (model) => {
        if (webcamRef.current && model) {
            // Detect hands in the video feed
            const predictions = await model.detect(webcamRef.current.video);
            if (predictions.length > 0) {
                setHandDetected(true);
            } else {
                setHandDetected(false);
            }
        }
    };

    const handleClick1 = (buttonName) => {
        // Provide feedback based on button clicked
        alert("Right answer");
    };
    const handleClick2 = (buttonName) => {
        // Provide feedback based on button clicked
        alert("Wrong answer");
    };

    return (
        <div className="App">
            <div className="webcam-container">
                <Webcam
                    audio={false}
                    ref={webcamRef}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transform: 'scaleX(-1)', // Flip the video horizontally
                    }}
                />
                <div className="button-container">
                    <button
                        id="Button 1"
                        className="large-button"
                        onClick={() => handleClick1('Button 1')}
                        disabled={!handDetected}
                    >
                        Drip Irrigation
                    </button>
                    <button
                        id="Button 2"
                        className="large-button"
                        onClick={() => handleClick2('Button 2')}
                        disabled={!handDetected}
                    >
                        Conventional Irrigation
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
