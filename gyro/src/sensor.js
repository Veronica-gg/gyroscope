import { saveCommand, undoFun, emptyRedo, redoFun } from "./undo.js";

function updateFieldIfNotNull(fieldName, value, precision = 0.1) {
  if (value != null)
    document.getElementById(fieldName).innerHTML = value.toFixed(precision);
}

function handleMotion(event) {
  // updateFieldIfNotNull("Gyroscope_z", event.rotationRate.alpha);
  // updateFieldIfNotNull("Gyroscope_x", event.rotationRate.beta);
  updateFieldIfNotNull("Gyroscope_y", event.rotationRate.gamma);
  // if (true) {
  //   stateUpdate(undoFun());
  //   document.getElementById("Gyroscope_y").innerHTML = "debug";
  // }
}

let is_running = false;
// let stateUpdate;

export default function myClick(e, setName) {
  e.preventDefault();
  // stateUpdate = setName;
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
