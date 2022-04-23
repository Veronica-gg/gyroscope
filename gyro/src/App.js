import { Button } from "@mui/material";
import * as React from "react";
import "./App.css";
import FormPropsTextFields from "./textfield.js";
import "./sensor.js";
import myClick from "./sensor.js";
import { saveCommand, undoFun } from "./undo.js";
import { useState } from "react";

var text = [{ demo: "Start demo" }, { demo: "Stop demo" }];
var start = 0;

function App() {
  const [buttonText, setButtonText] = useState(text[0].demo);
  const [name, setName] = React.useState("");
  const handleChange = (event) => {
    setName(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Text entry gyroscope app</p>
      </header>
      <FormPropsTextFields
        id="outlined-required "
        className="textf"
        value={name}
        onKeyDown={(e) => {
          handleChange(e);
          saveCommand(e);
        }}
      />
      <Button
        variant="contained"
        color="success"
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
      <Button
        variant="contained"
        size="large"
        onClick={() => {
          undoFun();
        }}
      >
        Undo
      </Button>
    </div>
  );
}

export default App;
