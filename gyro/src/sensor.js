import { saveCommand, undoFun, emptyRedo, redoFun } from "./undo.js";

function updateFieldIfNotNull(fieldName, value, precision = 0.1) {
  if (value != null)
    document.getElementById(fieldName).innerHTML = value.toFixed(precision);
}

let ready = true;
let speed = 45;
// let speed = 2.5;

function myTimeout() {
  ready = false;
  const timer = setTimeout(() => {
    ready = true;
  }, 1000);
  return () => clearTimeout(timer);
}

function handleMotion(event) {
  let sensorReading = event.rotationRate.gamma;
  // let sensorReading = event.acceleration.x;
  // updateFieldIfNotNull("Gyroscope_z", event.rotationRate.alpha);
  // updateFieldIfNotNull("Gyroscope_x", event.rotationRate.beta);
  updateFieldIfNotNull("Gyroscope_y", sensorReading);
  if (ready && (sensorReading < -speed || sensorReading > speed)) {
    myTimeout();
    if (sensorReading < -speed) {
      stateUpdate(undoFun());
      //document.getElementById("Gyroscope_y").innerHTML = "debug";
    } else if (sensorReading > speed) {
      stateUpdate(redoFun());
    }
  }
}

let is_running = false;
let stateUpdate;

export function myClick(e, setName) {
  e.preventDefault();
  stateUpdate = setName;
  // Request permission for iOS 13+ devices
  if (
    DeviceMotionEvent &&
    typeof DeviceMotionEvent.requestPermission === "function"
  ) {
    DeviceMotionEvent.requestPermission();
  }

  if (is_running) {
    window.removeEventListener("devicemotion", handleMotion);
    is_running = false;
  } else {
    // document.getElementById("Gyroscope_y").innerHTML = "stop running";
    window.addEventListener("devicemotion", handleMotion);
    is_running = true;
  }
}
