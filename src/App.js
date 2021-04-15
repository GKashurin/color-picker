import React, {useState} from 'react';
import {ChromePicker} from 'react-color';

function App() {
    const [background, setBackground] = useState({
        h: 250,
        s: 0,
        l: 0.2,
        a: 1
    });
    const [currentColor, setCurrentColor] = useState("#fff")
    const [currentOpacity, setCurrentOpacity] = useState("1")

    const [previousColor, setPreviousColor] = useState("#fff")
	const [prevOpacity, setPrevOpacity] = useState("1")


    const handleClick = () => {
        setPreviousColor(currentColor);
		setPrevOpacity(currentOpacity)
    }

	const handleChangeComplete = data => {
		setCurrentColor(data.hex);
        setBackground(data.hsl);
		setCurrentOpacity(data.hsl.a);
	}

    return (
        <div className="App">
            <div className="container">
                <ChromePicker
                    width="300px"
                    height="300px"
                    color={background}
                    onChange={handleChangeComplete}
                />
                <div className="info">
                    <div className="previous">
                        <p>Previous</p>
                        <div style={{
                            backgroundColor: previousColor,
                            height: "50px",
                            width: "100%",
                            border: "1px solid grey",
							opacity: prevOpacity
                        }}>
                        </div>
                    </div>
                    <div className="current">
                        <p>Current</p>
                        <div style={{
                            background: currentColor,
                            height: "50px",
                            width: "100%",
                            border: "1px solid grey",
							opacity: currentOpacity
                        }}>
                        </div>
                    </div>
                    <button
                        onClick={handleClick}
                        className="btn"
                    >New
                    </button>
                </div>
            </div>

        </div>
    );
}

export default App;
