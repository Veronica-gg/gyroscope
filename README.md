# Gyroscope

---

Text-entry web app that uses gyroscope sensor data to undo and redo actions (letter-wise).

## Demo

## Implementation

The interface implements a text-entry field. Once the "Start demo" is clicked, the user can see logged the speed along the y-axis (below the button) and the "undo" and "redo" buttons are kept for debugging purposes.

When the demo is running, users with an iOS device 13+ are asked for the permission to access the sensors (gyroscope sensor, which provides the angular velocity or rotationRate).

The movement logged is the tilting of the phone along the y-axis (rotationRate.gamma), so side-to-side. If the device is horizontal I noticed the smallest error rate, but the application works for any device starting inclination. The speed that allows an undo (tilt to the left) or a redo (tilt to the right) is 45 degree/second.

The "Stop demo" button allows the sensor reading to stop.

The web app is deployed on [github-pages](https://veronica-gg.github.io/gyroscope/) and the browser compatibility can be found [here](https://developer.mozilla.org/en-US/docs/Web/API/DeviceMotionEvent/rotationRate#browser_compatibility).

## Run the code

To locally build and test the application, the user needs an https secure connection (which is already included by default on github-pages). The DeviceMotionEvent API only works with a secure connection, since it is exposing sensitive sensor data.

One way is to add a SSL certificate to localhost and to trust it locally. A good resource can be found [here](https://web.dev/how-to-use-local-https/).
