function updateFieldIfNotNull(fieldName, value, precision = 10) {
  if (value != null)
    document.getElementById(fieldName).innerHTML = value.toFixed(precision);
}

function handleMotion(event) {
  document.getElementById("Gyroscope_y").innerHTML = "motion";
  updateFieldIfNotNull("Gyroscope_z", event.rotationRate.alpha);
  updateFieldIfNotNull("Gyroscope_x", event.rotationRate.beta);
  updateFieldIfNotNull("Gyroscope_y", event.rotationRate.gamma);
}

let is_running = false;
let demo_button = document.getElementsByClassName("start_demo");

export default function myClick() {
  // e.preventDefault();

  // Request permission for iOS 13+ devices
  if (
    DeviceMotionEvent &&
    typeof DeviceMotionEvent.requestPermission === "function"
  ) {
    DeviceMotionEvent.requestPermission();
    document.getElementById("Gyroscope_y").innerHTML = "if";
  }

  if (is_running) {
    document.getElementById("Gyroscope_y").innerHTML = "running";
    window.removeEventListener("devicemotion", handleMotion);
    demo_button.innerHTML = "Start demo";

    // demo_button.classList.add("success");
    // demo_button.classList.remove("danger");
    is_running = false;
  } else {
    document.getElementById("Gyroscope_y").innerHTML = "stop running";
    window.addEventListener("devicemotion", handleMotion);
    // document.getElementsByClassName("start_demo").changeText("Stop demo");
    // document.getElementsByClassName("start_demo").innerHTML = "Stop demo";
    // demo_button.className.add("danger");
    // demo_button.classList.remove("success");
    // demo_button.classList.add("error");
    is_running = true;
  }
}
