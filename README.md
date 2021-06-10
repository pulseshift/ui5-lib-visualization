# Custom OpenUI5 Data Vizualization library

[![Greenkeeper badge](https://badges.greenkeeper.io/pulseshift/ui5-lib-visualization.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/pulseshift/ui5-lib-visualization.svg?branch=master)](https://travis-ci.org/pulseshift/ui5-lib-visualization)

This library provides an OpenUI5 API that acts as a wrapper for D3-based charting library [C3.js](http://c3js.org/). It offers a more detailed and attractive API design than `sap.viz` chart controls, which interacts harmoniously especially in XML Views in combination with data binding.

## Usage

There are two options how to use the chart library in your UI5 project, depending of the project boilerplate you are using.

### a) projects based on [OpenUI5 Starter Kit](https://github.com/pulseshift/openui5-gulp-starter-kit)

Add `ui5-lib-visualization` as dev dependency:

```
yarn add ui5-lib-visualization --dev
```

Update ui5 library config in your `package.json`:

```js
"ui5" {
  // ...
  "library":[
      {
        "name": "ui5.viz",
        "path": "node_modules/ui5-lib-visualization/dist/ui5/viz",
        "prebuild": true
      }
  ]
  // ...
}
```

Finished, you can now use the library in your XML Views via e.g. `xmlns:viz="ui5.viz"` or in your controllers etc. If you want to upgrade the library, just use default yarn commands, the build process of the starter kit will handle the rest for you:

```
yarn upgrade ui5-lib-visualization
```

### b) other UI5 projects (see also [UI5Lab](https://github.com/UI5Lab/UI5Lab-library-simple))

[Download](https://github.com/pulseshift/ui5-lib-visualization/archive/master.zip) or clone this repository:

```
git clone git@github.com:pulseshift/ui5-lib-visualization.git
```

Copy the complete ready-to-use library from `/dist` to a target destination in your UI5 project (please keep the folder structure as is `ui5/viz/`).

Add the library to the `sap-ui-bootstrap` resourceroots in your `index.html`:

```
data-sap-ui-resourceroots="{ "ui5.viz": "pathToTargetDestination/ui5/viz" }"
```

_Please be aware that for option b) all manual steps must be repeated every time when you want to update the library version. Because this variant is more susceptible to errors, we recommend to use the [OpenUI5 Starter Kit](https://github.com/pulseshift/openui5-gulp-starter-kit)._

### Documentation

How to test real live samples please see section `Example`. Till then, please enjoy our first `beta` version of our automatcally created markdown API documentation:

* [ui5.viz.Chart](./docs/Chart.md)
* [ui5.viz.ChartSeries](./docs/ChartSeries.md)
* [ui5.viz.ChartDataPoint](./docs/ChartDataPoint.md)
* [ui5.viz.ChartAxis](./docs/ChartAxis.md)
* [ui5.viz.ChartAxisLabel](./docs/ChartAxisLabel.md)
* [ui5.viz.ChartLine](./docs/ChartLine.md)
* [ui5.viz.ChartArea](./docs/ChartArea.md)
* [ui5.viz.Color](./docs/Color.md)

### Features

_Hint: This overview is not yet complete. In the course of time we will point out all important new functions and add these points to the new demo app, too._

A brief overview of features, additional to C3.js line and area charts:

* Complete API coverage of properties and aggregations for a fully integrated feature set in XML views.
* If supported by C3.js, rerender will be avoided by the chart control to ensure smooth transitions in case of changes in the data.
* Support of chart annotations, like lines and areas in various designs.
* Support for special designs such as animated dashed lines or hatched areas.
* Convergence interval as a new display type of series.
* Simple color management by implementing color palettes or individual colors for specific series.

### Example

To execute the demo, please follow the instructions described in section `Development`. At the time the demo is being refactored with the goal to provide you an _SAP Explore_ like experience.

Here a basic sample of how to use the charts in an XML view:

```xml
<!-- ensure that the series data points and the x-axis labels have the exact same amount of entries -->
<Chart
  width="{store>/width}"
  height="{store>/height}"
  showTooltip="{store>/showTooltip}"
  groupedTooltip="{store>/groupedTooltip}"
  showLegend="{store>/showLegend}"
  xAxisType="Category"
  series="{store>/series}">
  <series>
    <ChartSeries
      type="{store>type}"
      name="{store>name}"
      data="{
        path: 'store>dataPoints',
        templateShareable: false
      }">
      <ChartDataPoint value="{store>}" />
    </ChartSeries>
  </series>
  <xAxis>
    <ChartAxis labels="{ path: 'store>/xAxis/labels'}">
      <ChartAxisLabel value="{store>}" />
    </ChartAxis>
  </xAxis>
  <yAxis>
    <ChartAxis title="{store>/yAxis/title}" />
  </yAxis>
</Chart>
```

Respective controller code:

```js
// define series color palette with a preset based on material design colors
ui5.viz.setDefaultColorPalette(ui5.viz.ColorPalette.Material500)

// define model
const oModel = new JSONModel({
  title: 'Chart',
  width: '100%',
  height: '300px',
  showTooltip: true,
  groupedTooltip: true,
  showLegend: true,
  xAxis: {
    labels: ['April', 'May', 'June', 'July', 'August', 'September']
  },
  yAxis: {
    title: 'Sightings in the woods 🌲'
  },
  series: [
    {
      name: 'Foxes 🦊',
      dataPoints: [2, 5, 3, 5, 8, 9],
      type: ui5.viz.ChartSeriesType.Spline
    },
    {
      name: 'Bears 🐻',
      dataPoints: [1, 2, 0, 2, 1, 3],
      type: ui5.viz.ChartSeriesType.Spline
    },
    {
      name: 'Deers 🦌',
      dataPoints: [14, 20, 18, 23, 17, 18],
      type: ui5.viz.ChartSeriesType.Spline
    }
  ]
})

this.getView().setModel(oModel, 'store')
```

## Development

[Download](https://github.com/pulseshift/ui5-lib-visualization/archive/master.zip) or clone this repository:

```
git clone git@github.com:pulseshift/ui5-lib-visualization.git
```

Please ensure that you have installed [node](https://nodejs.org/en/) and [yarn2](https://yarnpkg.com/en/docs/install) before you continue.

Install dependencies:

```
yarn
```

Start developing:
_Will build all resources start watcher task and start a HTTP server_

```
yarn dev
```

The app should open in your browser automatically, otherwise open: `http://localhost:3000/demo/index.html`

Info: To get a more detailed logging, use `yarn dev:verbose` instead.

## Distribution

Start distribution build:
_Will create a `dist` directory in your project root._

```
yarn dist
```

This will build the app, test the code with linters and updates all docs automatically. Afterwards, the production app build can be tested by run `yarn start:dist`. The app should open in your browser automatically, otherwise open: `http://localhost:3000/demo/index.html`

Increase version number according to [semantic versioning](https://docs.npmjs.com/getting-started/semantic-versioning) e.g.
```
yarn version patch
```

If the app build matches your requirements, upload your build to **npm**:

```
yarn npm publish
```

### Contributing & Troubleshooting

Contributions, questions and comments are all welcome and encouraged.

Check our [current issues](https://github.com/pulseshift/ui5-lib-visualization/issues) or, if you have something in mind how to make it better, [create your own issue](https://github.com/pulseshift/ui5-lib-visualization/issues/new). We would be happy to discuss how they can be solved.

### Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->

| [<img src="https://avatars1.githubusercontent.com/u/28702172?s=460&v=4" width="100px;"/><br /><sub><b>Lena Serdarusic</b></sub>](https://github.com/lenasrd)<br />[💻](https://github.com/pulseshift/ui5-lib-visualization/commits?author=lenasrd 'Code')[💡](#examples 'Examples')[🤔](#ideas 'Ideas & Planning') | [<img src="https://avatars2.githubusercontent.com/u/8706643?s=460&v=4" width="100px;"/><br /><sub><b>Jascha A. Quintern</b></sub>](http://jascha-quintern.de)<br />[💻](https://github.com/pulseshift/ui5-lib-visualization/commits?author=fuchsvomwalde 'Code')[💬](#question-kentcdodds 'Answering Questions') | [<img src="https://avatars1.githubusercontent.com/u/1016675?s=460&v=4" width="100px;"/><br /><sub><b>Michael Dell</b></sub>](http://mdell.org)<br />[🤔](#ideas 'Ideas & Planning') |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |


### License

This project is licensed under the MIT license.
Copyright 2017 [PulseShift GmbH](https://pulseshift.com)
