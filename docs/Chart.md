# `ui5.viz.Chart`
The <code>Chart</code> control: Chart container for bar, line and other chart types. Based on C3.js..

**Extends**: [sap.ui.core.Control](https://openui5.hana.ondemand.com/#/api/sap.ui.core.Control) This module inherits all methods and attributes from the extended module and from all other modules in the inheritence hierarchy.

## Sample Usage (XML View)
This chart control was designed to work best in XML views and in combination with data binding.
```xml
<Chart
  width="100%"
  height="300px"
  showTooltip="true"
  groupedTooltip="true"
  showLegend="true"
  xAxisType="Indexed">
  <series>
    <ChartSeries type="spline" name="Frankfurt">
      <data>
        <ChartDataPoint value="5" />
      </data>
    </ChartSeries>
  </series>
  <xAxis>
    <ChartAxis title="Divisions" />
  </xAxis>
  <yAxis>
    <ChartAxis title="Revenue" />
  </yAxis>
</Chart>
```

## Properties
All properties have corresponding getters and setters. ([read which property methods are defined automatically](https://sapui5.hana.ondemand.com/#/api/sap.ui.base.ManagedObject))

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `dataVisible` | `boolean` | `true,` | Shows or hides data series and legend. |
| `width` | [sap.ui.core.CSSSize](https://openui5.hana.ondemand.com/#/api/sap.ui.core.CSSSize) | `100%,` | A CSS size property defining the width of the chart. |
| `height` | [sap.ui.core.CSSSize](https://openui5.hana.ondemand.com/#/api/sap.ui.core.CSSSize) | `360px,` | A CSS size property defining the hright of the chart. |
| `showSubchart` | `boolean` | `false,` | Shows a subchart for naviagtion Hint: live update by c3 API is not supported, yet, therefore we must rerender the chart. |
| `microMode` | `boolean` | `false,` | Enables the chart to be displayed an a small scale Hint: live update by c3 API is not supported, yet, therefore we must rerender the chart. |
| `zoomEnabled` | `boolean` | `false,` | Enables zoom functionality (inactive if subchart is used). |
| `clipZoomOverflow` | `boolean` | `true,` | If true, elements outside of the chart area (happend during zooming) is hidden. |
| `showDataPoints` | `boolean` | `true,` | If false, data points on lines or splines are hidden. |
| `backgroundColor` | [sap.ui.core.CSSColor](https://openui5.hana.ondemand.com/#/api/sap.ui.core.CSSColor) | `transparent,` | Sets the background color of the chart. |
| `legendPosition` | `ui5.viz.ChartLegendPosition` | `library.ChartLegendPosition.Right,` | Sets the legend position Hint: live update by c3 API is not supported, yet, therefore we must rerender the chart. |
| `showLegend` | `boolean` | `false,` | Sets tthe legend visibility. |
| `showTooltip` | `boolean` | `false,` | Enables tooltips on chart data elements Hint: live update by c3 API is not supported, yet, therefore we must rerender the chart. |
| `groupedTooltip` | `boolean` | `false,` | Sets the tooltip behaviour, whether it should show tooltip for grouped or single data points Hint: live update by c3 API is not supported, yet, therefore we must rerender the chart. |
| `switchAxisPosition` | `boolean` | `false,` | Switches x (by default horizontally) and y (by default vertically) axis Hint: live update by c3 API is not supported, yet, therefore we must rerender the chart. |
| `xAxisType` | `ui5.viz.AxisType` | `library.AxisType.Category,` | Set type of x axis Hint: live update by c3 API is not supported, yet, therefore we must rerender the chart. |

## Aggregations
All aggregations have one getter and several mutating methods depending on their cardinality. ([read which aggregation methods are defined automatically](https://sapui5.hana.ondemand.com/#/api/sap.ui.base.ManagedObject))

| Name | Cardinality | Type | Description |
| --- | --- | --- | --- |
| `xAxis` | `0..1` | `ui5.viz.ChartAxis` | Chart axis (if no chart axis is supposed here, a default x axis is generated). |
| `yAxis` | `0..1` | `ui5.viz.ChartAxis` | Chart axis (if no chart axis is supposed here, a default y axis is generated) Hint: live update by c3 API is not supported, yet, therefore we must rerender the chart. |
| `y2Axis` | `0..1` | `ui5.viz.ChartAxis` | Chart axis (if no chart axis is provided, axis is not visible axis is generated) Hint: live update by c3 API is not supported, yet, therefore we must rerender the chart. |
| `colors` | `0..n` | `ui5.viz.Color` | Custom color for series, if not supposed, default theme colors are used Hint: live update by c3 API is not supported, yet, therefore we must rerender the chart. |
| `lines` | `0..n` | `ui5.viz.ChartLine` | Set of lines to be displayed on the chart grid. |
| `areas` | `0..n` | `ui5.viz.ChartArea` | Set of areas to be displayed on the chart grid. |
| `series` | `0..n` | `ui5.viz.ChartSeries` | Defines the data series on our chart grid. |

## Events
All events return to the event callback handler [sap.ui.base.Event](https://openui5.hana.ondemand.com/#/api/sap.ui.base.Event). ([read which event methods are defined automatically](https://sapui5.hana.ondemand.com/#/api/sap.ui.base.ManagedObject))
* <a href="#chartDataUpdate">chartDataUpdate</a> Data was updated.

<br/>

<a name="chartDataUpdate"></a>

### `chartDataUpdate`
Data was updated. 

<br/>


## Methods
* <a href="#getXAxisLabelByIndex">getXAxisLabelByIndex</a> Get respective X axis label by index.
* <a href="#getXAxisIndexByValue">getXAxisIndexByValue</a> Get respective X axis index by value.
* <a href="#getMinValueByAxis">getMinValueByAxis</a> Getter for property <code>minValue</code> of an axis.
* <a href="#getMaxValueByAxis">getMaxValueByAxis</a> Getter for property <code>maxValue</code> of an axis.

<br/>

<a name="getXAxisLabelByIndex"></a>

### `getXAxisLabelByIndex`
Get respective X axis label by index.

Returns: `any` Value depending on axis type.
```js
getXAxisLabelByIndex(iIndex?)
```
* `iIndex` (`int`) Index.

<br/>

<a name="getXAxisIndexByValue"></a>

### `getXAxisIndexByValue`
Get respective X axis index by value.

Returns: `any` Value depending on axis type.
```js
getXAxisIndexByValue(vValue?)
```
* `vValue` (`string``int`) Index.

<br/>

<a name="getMinValueByAxis"></a>

### `getMinValueByAxis`
Getter for property <code>minValue</code> of an axis.

Returns: `any` Value depending on axis type.
```js
getMinValueByAxis(oAxis?)
```
* `oAxis` (`ui5.viz.ChartAxis`) Axis.

<br/>

<a name="getMaxValueByAxis"></a>

### `getMaxValueByAxis`
Getter for property <code>maxValue</code> of an axis.

Returns: `any` Value depending on axis type.
```js
getMaxValueByAxis(oAxis?)
```
* `oAxis` (`ui5.viz.ChartAxis`) - Axis (default: <code>undefined</code>).

<br/>

