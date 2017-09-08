# Custom OpenUI5 Data Vizualization library
This library provides an OpenUI5 API that acts as a wrapper for D3-based charting library C3.js. It offers a more detailed and attractive design than native OpenUI5 controls.

### License

This project is licensed under the MIT license.
Copyright 2017 [PulseShift GmbH](https://pulseshift.com/en/index.html)

### TODOs / Bugs
- Add check to setKey of ChartSeries and disallow "x" as key (because it is preserved)
- Optional: update data types in library.js and align values with keys
- ChartArea attribute "style" is not working with data binding, yet
- Add (real) full-screen mode to Chart control
- Y-axis label is corupting Y-axis display, if value is 0