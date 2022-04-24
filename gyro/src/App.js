import { Button } from "@mui/material";
import * as React from "react";
import "./App.css";
import FormPropsTextFields from "./textfield.js";
import "./sensor.js";
import { myClick } from "./sensor.js";
import {
  saveCommand,
  undoFun,
  emptyRedo,
  redoFun,
  availableMoves,
} from "./undo.js";
import { useState } from "react";
import { Row } from "react-bootstrap";

var text = [
  { demo: "Start demo", col: "success" },
  { demo: "Stop demo", col: "error" },
];
var start = 0;

function App() {
  const [buttonText, setButtonText] = useState(text[0].demo);
  const [buttonCol, setButtonCol] = useState(text[0].col);
  const [name, setName] = useState("");
  const handleChange = (event) => {
    setName(event.target.value);
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
        onChange={(e) => {
          emptyRedo();
          handleChange(e);
          saveCommand(e);
        }}
      />
      <Button
        variant="contained"
        style={{
          padding: "18px 36px",
          margin: "20px 10px",
        }}
        className="start_demo"
        color={buttonCol}
        size="large"
        onClick={(e) => {
          setButtonText(text[(start + 1) % 2].demo);
          setButtonCol(text[(start + 1) % 2].col);
          start = (start + 1) % 2;
          myClick(e, setName);
        }}
      >
        {buttonText}
      </Button>
      <span id="Gyroscope_y">0</span>
      <Row>
        <Button
          variant="contained"
          size="large"
          disabled={availableMoves(true)}
          style={{
            margin: "20px 10px",
          }}
          onClick={() => {
            setName(undoFun());
          }}
        >
          Undo
        </Button>
        <Button
          variant="contained"
          color="secondary"
          disabled={availableMoves(false)}
          style={{
            margin: "20px 10px",
          }}
          size="large"
          onClick={() => {
            setName(redoFun());
          }}
        >
          Redo
        </Button>
      </Row>
    </div>
  );
}

export default App;
