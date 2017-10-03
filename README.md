# Custom OpenUI5 Data Vizualization library
This library provides an OpenUI5 API that acts as a wrapper for D3-based charting library C3.js. It offers a more detailed and attractive design than native OpenUI5 controls.

## Quickstart Development

[Download](https://github.com/pulseshift/ui5-lib-visualization/archive/master.zip) or clone this repository:
```
git clone git@github.com:pulseshift/ui5-lib-visualization.git
```

Please ensure that you have installed [node](https://nodejs.org/en/) and [yarn](https://yarnpkg.com/en/docs/install) before you continue.

Install dependencies:
```
yarn
```
Start developing:
_Will build all resources start watcher task and start a HTTP server_
```
yarn start
```

The app should open in your browser automatically, otherwise open: `http://localhost:3000`

Info: To get a more detailed logging, just use `yarn start:verbose` instead.

## Distribution

Start build:
_Will create a `dist` directory in your project root._
```
yarn build
```

Afterwards, the production app build can be tested by run `yarn start:dist`. The app should open in your browser automatically, otherwise open: `http://localhost:3000`

Info: To get a more detailed logging, just use `yarn build:verbose` instead.

### Contributing & Troubleshooting

Contributions, questions and comments are all welcome and encouraged.

Check our [current issues](https://github.com/pulseshift/ui5-lib-visualization/issues) or, if you have something in mind how to make it better, [create your own issue](https://github.com/pulseshift/ui5-lib-visualization/issues/new). We would be happy to discuss how they can be solved.

### License

This project is licensed under the MIT license.
Copyright 2017 [PulseShift GmbH](https://pulseshift.com/en/index.html)

### Outlook

Here is a brief overview on what we are working right know and what will follow, soon. We are interested to hear your opinion on what should follow next.

Current todos/issues/idea backlog (unordered):
- Add check to setKey of ChartSeries and disallow "x" as key (because it is preserved)
- Optional: update data types in library.js and align values with keys
- ChartArea attribute "style" is not working with data binding, yet
- Add (real) full-screen mode to Chart control
- Y-axis label is corupting Y-axis display, if value is 0
- Missing build step: create library.css for all themes

### License

This project is licensed under the MIT license.
Copyright 2017 [PulseShift GmbH](https://pulseshift.com/en/index.html)
