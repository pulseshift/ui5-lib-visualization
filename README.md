# Custom OpenUI5 Data Vizualization library

[![Greenkeeper badge](https://badges.greenkeeper.io/pulseshift/ui5-lib-visualization.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/pulseshift/ui5-lib-visualization.svg?branch=master)](https://travis-ci.org/pulseshift/ui5-lib-visualization)

This library provides an OpenUI5 API that acts as a wrapper for D3-based charting library [C3.js](http://c3js.org/). It offers a more detailed and attractive API design than `sap.viz` chart controls, which interacts harmoniously especially in XML Views in combination with data binding.

> Furthermore, this project is also a Boilerplate for all UI5 control libraries that rely completely on Open Source and uses 100% internally the same Gulp based build script as our [OpenUI5 Starter Kit](https://github.com/pulseshift/openui5-gulp-starter-kit). One build script to **rule them all**, I mean, how cool is that? Probably pretty cool, at least as long as we haven't found an alternative with Webpack yet. So take a look at our Starter Kit to learn more about the features and functionality of the build process.

## Usage

This npm module already provides all content to use the library immediately: the folder `/src` contains all source files (written in LESS and ES6/ES7), in the folder `/dist` you will find the library, completely ready for use. Now there are two ways to use the library in your npm project:

1. You can go the way recommended by [UI5Lab](https://github.com/UI5Lab/UI5Lab-library-simple) which ends up with copying the resources and files from the cloned npm project to your project either manually or via a custom script. We do not recommend that you go this way, because changes to the library must always be copied manually and this variant is more susceptible to errors.

1. The way we recommend you is to use our OpenUI5 Starter-Kit for embedding. The prerequisite is that your project uses the build process of the starter kit (see instructions [here](https://github.com/pulseshift/openui5-gulp-starter-kit)). All you have to do then is:
   * Download our library as dev-dependency with `yarn add ui5-lib-visualization --dev`.
   * Add the library to your UI5 build settings in the `package. json`_\*_.
   * Finished, you can now integrate the library into your XML Views via `xmlns: viz="ui5. viz"` or use it in your controllers etc..

_\*snipped to include the library via ui5 config in `package. json`:_

```json
"library":[
    {
      "name": "ui5.viz",
      "path": "node_modules/ui5-lib-visualization/dist/ui5/viz",
      "prebuild": true
    }
]
```

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
* Support of pins and areas.
* Support for special designs such as animated dashed lines or hatched areas.
* Convergence interval as a new display type of series.
* Simple color management by implementing color palettes or individual colors for specific series.

### Example

To execute the demo, please follow the instructions described in section `Development`. At the time the demo is being refactored with the goal to provide you an SAP explored like experience.

Here a basic sample of how to use the charts in an XML view:

```xml
<!-- ensure that the series data points and the x-axis labels have the exact same amount of entries -->
<Chart
  width="{store>/width}"
  height="{store>/height}"
  showTooltip="{store>/showTooltip}"
  groupedTooltip="{store>/groupedTooltip}"
  showLegend="{store>/showLegend}"
  xAxisType="Indexed"
  series="{store>/series}">
  <series>
    <ChartSeries
      type="{store>type}"
      name=" {store>name}"
      data="{
        path: 'store>dataPoints',
        templateShareable: false
      }">
      <data>
        <ChartDataPoint value="{store>}" />
      </data>
    </ChartSeries>
  </series>
  <xAxis>
    <ChartAxis labels="{ path: 'store>/xAxis/0/labels'}">
      <labels>
        <ChartAxisLabel value="{store>}" />
      </labels>
    </ChartAxis>
  </xAxis>
  <yAxis>
    <ChartAxis title="{store>/yAxis/0/title}" />
  </yAxis>
</Chart>
```

Respective controller code:

```js
// define series color palette with a preset based on material design colors
ui5.viz.setDefaultColorPalette(ui5.viz.ColorPalette.Material500)

// define model
const oModel = new JSONModel({
  title: 'Area line chart',
  width: '100%',
  height: '300px',
  showTooltip: true,
  groupedTooltip: true,
  showLegend: true,
  xAxis: [
    {
      labels: ['April', 'May', 'June', 'July', 'August', 'September']
    }
  ],
  yAxis: [
    {
      title: 'Sightings in the woods 🍃'
    }
  ],
  series: [
    {
      name: 'Foxes 🦊',
      dataPoints: [2, 5, 3, 5, 8, 9],
      type: 'area'
    },{
      name: 'Bears 🐻',
      dataPoints: [1, 2, 0, 2, 1, 3],
      type: 'area'
    },{
      name: 'Deer 🦌',
      dataPoints: [14, 20, 18, 23, 17, 18],
      type: 'area'
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

The app should open in your browser automatically, otherwise open: `http://localhost:3000/demo/index.html`

Info: To get a more detailed logging, use `yarn start:verbose` instead.

## Distribution

Start build:
_Will create a `dist` directory in your project root._

```
yarn build
```

Afterwards, the production app build can be tested by run `yarn start:dist`. The app should open in your browser automatically, otherwise open: `http://localhost:3000`

Info: To get a more detailed logging, use `yarn build:verbose` instead.

### Contributing & Troubleshooting

Contributions, questions and comments are all welcome and encouraged.

Check our [current issues](https://github.com/pulseshift/ui5-lib-visualization/issues) or, if you have something in mind how to make it better, [create your own issue](https://github.com/pulseshift/ui5-lib-visualization/issues/new). We would be happy to discuss how they can be solved.

### Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->

| [<img src="https://avatars1.githubusercontent.com/u/28702172?s=460&v=4" width="100px;"/><br /><sub><b>Lena Serdarusic</b></sub>](https://github.com/lenasrd)<br />[💻](https://github.com/pulseshift/ui5-lib-visualization/commits?author=lenasrd 'Code')[💡](#examples "Examples")[🤔](#ideas "Ideas & Planning") | [<img src="https://avatars2.githubusercontent.com/u/8706643?s=460&v=4" width="100px;"/><br /><sub><b>Jascha A. Quintern</b></sub>](http://jascha-quintern.de)<br />[💻](https://github.com/pulseshift/ui5-lib-visualization/commits?author=fuchsvomwalde 'Code')[💬](#question-kentcdodds "Answering Questions") | [<img src="https://avatars1.githubusercontent.com/u/1016675?s=460&v=4" width="100px;"/><br /><sub><b>Michael Dell</b></sub>](http://mdell.org)<br />[🤔](#ideas "Ideas & Planning") |
| :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |


### License

This project is licensed under the MIT license.
Copyright 2017 [PulseShift GmbH](https://pulseshift.com)
