import { Button } from "@mui/material";
import "./App.css";
import FormPropsTextFields from "./textfield.js";
import "./sensor.js";
import myClick from "./sensor.js";
import { useState } from "react";

var text = [
  { demo: "Start demo", value: 0 },
  { demo: "Stop demo", value: 1 },
];
var start = 0;

function App() {
  const [buttonText, setButtonText] = useState(text[0].demo);

  return (
    <div className="App">
      <header className="App-header">
        <p>Text entry gyroscope app</p>
      </header>
      <FormPropsTextFields id="outlined-required" />
      <Button
        variant="contained"
        style={{
          padding: "18px 36px",
          margin: "20px 10px",
        }}
        className="start_demo"
        size="large"
        onClick={() => {
          setButtonText(text[(start + 1) % 2].demo);
          start = (start + 1) % 2;
          myClick();
        }}
      >
        {buttonText}
      </Button>
      <span id="Gyroscope_z">0</span>
    </div>
  );
}

export default App;
