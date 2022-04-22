import { Button } from "@mui/material";
import "./App.css";
import FormPropsTextFields from "./textfield.js";
import "./sensor.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Text entry gyroscope app</p>
      </header>
      <FormPropsTextFields id="outlined-required Accelerometer_gx" />
      <Button variant="contained" id="start_demo" size="large">
        Start Demo
      </Button>
    </div>
  );
}

export default App;
