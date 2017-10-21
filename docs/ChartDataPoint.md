# `ui5.viz.ChartDataPoint`
The <code>ChartDataPoint</code> control: ChartDataPoint container for bar, line and other chart types. Based on C3.js..

**Extends**: [sap.ui.core.Element](https://openui5.hana.ondemand.com/#/api/sap.ui.core.Element) This module inherits all methods and attributes from the extended module and from all other modules in the inheritence hierarchy.

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
| `dataVisible` | `boolean` | `true` | Shows or hides data series and legend |
| `width` | [sap.ui.core.CSSSize](https://openui5.hana.ondemand.com/#/api/sap.ui.core.CSSSize) | `'100%'` | A CSS size property defining the width of the chart |
| `height` | [sap.ui.core.CSSSize](https://openui5.hana.ondemand.com/#/api/sap.ui.core.CSSSize) | `'360px'` | A CSS size property defining the hright of the chart |
| `showSubchart` | `boolean` | `false` | Shows a subchart for naviagtion Hint: live update by c3 API is not supported, yet, therefore we must rerender the chart |
| `microMode` | `boolean` | `false` | Enables the chart to be displayed an a small scale Hint: live update by c3 API is not supported, yet, therefore we must rerender the chart |
| `zoomEnabled` | `boolean` | `false` | Enables zoom functionality (inactive if subchart is used) |
| `clipZoomOverflow` | `boolean` | `true` | If true, elements outside of the chart area (happend during zooming) is hidden |
| `showDataPoints` | `boolean` | `true` | If false, data points on lines or splines are hidden |
| `backgroundColor` | [sap.ui.core.CSSColor](https://openui5.hana.ondemand.com/#/api/sap.ui.core.CSSColor) | `'transparent'` | Sets the background color of the chart |
| `legendPosition` | `ui5.viz.ChartLegendPosition` | `library.ChartLegendPosition.Right` | Sets the legend position Hint: live update by c3 API is not supported, yet, therefore we must rerender the chart |
| `showLegend` | `boolean` | `false` | Sets tthe legend visibility |
| `showTooltip` | `boolean` | `false` | Enables tooltips on chart data elements Hint: live update by c3 API is not supported, yet, therefore we must rerender the chart |
| `groupedTooltip` | `boolean` | `false` | Sets the tooltip behaviour, whether it should show tooltip for grouped or single data points Hint: live update by c3 API is not supported, yet, therefore we must rerender the chart |
| `switchAxisPosition` | `boolean` | `false` | Switches x (by default horizontally) and y (by default vertically) axis Hint: live update by c3 API is not supported, yet, therefore we must rerender the chart |
| `xAxisType` | `ui5.viz.AxisType` | `library.AxisType.Category` | Set type of x axis Hint: live update by c3 API is not supported, yet, therefore we must rerender the chart |
| `title` | `string` | `null` | Sets the ttitleext of the ChartArea |
| `style` | `ui5.viz.ShapeStyle` | `library.ShapeStyle.Default` | Sets the style of the shape |
| `color` | [sap.ui.core.CSSColor](https://openui5.hana.ondemand.com/#/api/sap.ui.core.CSSColor) | `null` | Sets a custom color for the area |
| `axis` | `ui5.viz.Axis` | `library.Axis.X` | Sets the referenced y axis the line value property is related to |
| `visible` | `boolean` | `true` | Sets visibility of the element. |
| `startValue` | `string` | `null` | Sets value that is matching a start position on the assigned axis |
| `endValue` | `string` | `null` | Sets value that is matching a end position on the assigned axis |
| `code` | `ui5.viz.ChartUpdateCode` | `nodefaultdefined` | Chart update event code. |
| `title` | `string` | `null` | Sets axis title |
| `showTitle` | `boolean` | `true` | Sets axis title visibility |
| `showGridLines` | `boolean` | `false` | Sets visibility of grid lines Hint: live update by c3 API is not supported, yet, therefore we must rerender the chart |
| `minValue` | `string` | `null` | Sets the minimal value of the axis. (use index/position for category X-axis, too) |
| `maxValue` | `string` | `null` | Sets the maximal value of the axis. (use index/position for category X-axis, too) |
| `visible` | `boolean` | `true` | Sets visibility of the element. |
| `_axisType` | `ui5.viz.Axis` | `library.Axis.X` | Sets the axis type |
| `value` | `any` | `null` | Sets axis value |
| `title` | `string` | `null` | Sets axis label title |
| `visible` | `boolean` | `true` | Sets visibility of the element. |
| `highlightAnimation` | `ui5.viz.DataPointAnimation` | `library.DataPointAnimation.None` | Sets the representation of value as formatted text Hint: Not available for chart types Bar, Step and AreaStep, yet. |
| `label` | `string` | `null` | Sets the representation of value as formatted text |
| `value` | `any` | `null` | Sets the value the data point should represent Hint: To support null as value, the type must be "any" |
| `high` | `any` | `undefined` | Sets the high value the data point should represent in case of ribbon type Hint: To support null as value, the type must be "any" |
| `low` | `any` | `undefined` | Sets the low value the data point should represent in case of ribbon type Hint: To support null as value, the type must be "any" |
| `visible` | `boolean` | `true` | Sets visibility of the element. |

## Aggregations
All aggregations have one getter and several mutating methods depending on their cardinality. ([read which aggregation methods are defined automatically](https://sapui5.hana.ondemand.com/#/api/sap.ui.base.ManagedObject))

| Name | Cardinality | Type | Description |
| --- | --- | --- | --- |
| `xAxis` | `0..1` | `ui5.viz.ChartAxis` | Chart axis (if no chart axis is supposed here, a default x axis is generated) |
| `yAxis` | `0..1` | `ui5.viz.ChartAxis` | Chart axis (if no chart axis is supposed here, a default y axis is generated) Hint: live update by c3 API is not supported, yet, therefore we must rerender the chart |
| `y2Axis` | `0..1` | `ui5.viz.ChartAxis` | Chart axis (if no chart axis is provided, axis is not visible axis is generated) Hint: live update by c3 API is not supported, yet, therefore we must rerender the chart |
| `colors` | `0..n` | `ps.core.Color` | Custom color for series, if not supposed, default theme colors are used Hint: live update by c3 API is not supported, yet, therefore we must rerender the chart |
| `lines` | `0..n` | `ui5.viz.ChartLine` | Set of lines to be displayed on the chart grid |
| `areas` | `0..n` | `ui5.viz.ChartArea` | Set of areas to be displayed on the chart grid |
| `series` | `0..n` | `ui5.viz.ChartSeries` | Defines the data series on our chart grid |
| `labels` | `0..n` | `ui5.viz.ChartAxisLabel` | Sets the labels displayed on the axis Hint: live update by c3 API is only supported for X axis, yet, therefore we must rerender the chart |

## Events
All events return to the event callback handler [sap.ui.base.Event](https://openui5.hana.ondemand.com/#/api/sap.ui.base.Event). ([read which event methods are defined automatically](https://sapui5.hana.ondemand.com/#/api/sap.ui.base.ManagedObject))
* <a href="#chartDataUpdate">chartDataUpdate</a> Data was updated

<a name="chartDataUpdate"></a>

### `chartDataUpdate`
Data was updated 


## Methods
* <a href="#setDataVisible">setDataVisible</a> Setter for property <code>dataVisible</code>.
* <a href="#setWidth">setWidth</a> Setter for property <code>width</code>.
* <a href="#setHeight">setHeight</a> Setter for property <code>height</code>.
* <a href="#getWidth">getWidth</a> Getter for property <code>width</code>.
* <a href="#getHeigth">getHeigth</a> Getter for property <code>height</code>.
* <a href="#setShowSubchart">setShowSubchart</a> Setter for property <code>showSubchart</code>.
* <a href="#setMicroMode">setMicroMode</a> Setter for property <code>microMode</code>.
* <a href="#setZoomEnabled">setZoomEnabled</a> Setter for property <code>zoomEnabled</code>.
* <a href="#setClipZoomOverflow">setClipZoomOverflow</a> Setter for property <code>clipZoomOverflow</code>.
* <a href="#setShowDataPoints">setShowDataPoints</a> Setter for property <code>showDataPoints</code>.
* <a href="#setBackgroundColor">setBackgroundColor</a> Setter for property <code>backgroundColor</code>.
* <a href="#setLegendPosition">setLegendPosition</a> Setter for property <code>legendPosition</code>.
* <a href="#setShowLegend">setShowLegend</a> Setter for property <code>showLegend</code>.
* <a href="#setShowTooltip">setShowTooltip</a> Setter for property <code>showTooltip</code>.
* <a href="#setGroupedTooltip">setGroupedTooltip</a> Setter for property <code>groupedTooltip</code>.
* <a href="#setSwitchAxisPosition">setSwitchAxisPosition</a> Setter for property <code>switchAxisPosition</code>.
* <a href="#setXAxisType">setXAxisType</a> Setter for property <code>xAxisType</code>.
* <a href="#getXAxis">getXAxis</a> Getter for aggregation <code>xAxis</code>.
* <a href="#getYAxis">getYAxis</a> Getter for aggregation <code>yAxis</code>.
* <a href="#getY2Axis">getY2Axis</a> Getter for aggregation <code>y2Axis</code>.
* <a href="#setAggregation">setAggregation</a> Sets a new object in the named 0..1 aggregation of this ManagedObject and marks this ManagedObject as changed.
* <a href="#insertAggregation">insertAggregation</a> Inserts managed object oObject to the aggregation named sAggregationName at position iIndex.
* <a href="#addAggregation">addAggregation</a> Adds some entity oObject to the aggregation identified by sAggregationName.
* <a href="#removeAggregation">removeAggregation</a> Removes an object from the aggregation named sAggregationName with cardinality 0..n.
* <a href="#removeAllAggregation">removeAllAggregation</a> Removes all objects from the 0..n-aggregation named sAggregationName.
* <a href="#destroyAggregation">destroyAggregation</a> Destroys (all) the managed object(s) in the aggregation named sAggregationName and empties the aggregation. If the aggregation did contain any object, this ManagedObject is marked as changed.
* <a href="#setModel">setModel</a> Sets or unsets a model for the given model name for this ManagedObject.
* <a href="#getXAxisLabelByIndex">getXAxisLabelByIndex</a> Get respective X axis label by index.
* <a href="#getMinValueByAxis">getMinValueByAxis</a> Getter for property <code>minValue</code> of an axis.
* <a href="#getMaxValueByAxis">getMaxValueByAxis</a> Getter for property <code>maxValue</code> of an axis.
* <a href="#setProperty">setProperty</a> Overwrites the method in order to check on supported properties.
* <a href="#insertAggregation">insertAggregation</a> Inserts managed object oObject to the aggregation named sAggregationName at position iIndex.
* <a href="#addAggregation">addAggregation</a> Adds some entity oObject to the aggregation identified by sAggregationName.
* <a href="#removeAggregation">removeAggregation</a> Removes an object from the aggregation named sAggregationName with cardinality 0..n.
* <a href="#removeAllAggregation">removeAllAggregation</a> Removes all objects from the 0..n-aggregation named sAggregationName.
* <a href="#destroyAggregation">destroyAggregation</a> Destroys (all) the managed object(s) in the aggregation named sAggregationName and empties the aggregation. If the aggregation did contain any object, this ManagedObject is marked as changed.
* <a href="#setProperty">setProperty</a> Overwrites the method in order to check on supported properties.
* <a href="#setProperty">setProperty</a> Overwrites the method in order to check on supported properties.
* <a href="#setProperty">setProperty</a> Overwrites the method in order to check on supported properties.

<a name="setDataVisible"></a>

### `setDataVisible`
Setter for property <code>dataVisible</code>.

Returns: `ui5.viz.Chart` <code>this</code> to allow method chaining
```js
setDataVisible(bDataVisible)
```
* `bDataVisible` (`boolean`) Expects a boolean

<a name="setWidth"></a>

### `setWidth`
Setter for property <code>width</code>.

Returns: `ui5.viz.Chart` <code>this</code> to allow method chaining
```js
setWidth(sWidth)
```
* `sWidth` () {sap.ui.core.CSSSize} Expects a sap.ui.core.CSSSize element

<a name="setHeight"></a>

### `setHeight`
Setter for property <code>height</code>.

Returns: `ui5.viz.Chart` <code>this</code> to allow method chaining
```js
setHeight(sHeight)
```
* `sHeight` () {sap.ui.core.CSSSize} Expects a sap.ui.core.CSSSize element

<a name="getWidth"></a>

### `getWidth`
Getter for property <code>width</code>.

Returns: `number` Returns calculated size in pixel value based on sap.ui.core.CSSSize element
```js
getWidth()
```

<a name="getHeigth"></a>

### `getHeigth`
Getter for property <code>height</code>.

Returns: `number` Returns calculated size in pixel value based on sap.ui.core.CSSSize element
```js
getHeigth()
```

<a name="setShowSubchart"></a>

### `setShowSubchart`
Setter for property <code>showSubchart</code>.

Returns: `ui5.viz.Chart` <code>this</code> to allow method chaining
```js
setShowSubchart(bShowSubchart)
```
* `bShowSubchart` () {boolean} Expects a boolean

<a name="setMicroMode"></a>

### `setMicroMode`
Setter for property <code>microMode</code>.

Returns: `ui5.viz.Chart` <code>this</code> to allow method chaining
```js
setMicroMode(bMicroMode)
```
* `bMicroMode` () {boolean} Expects a boolean

<a name="setZoomEnabled"></a>

### `setZoomEnabled`
Setter for property <code>zoomEnabled</code>.

Returns: `ui5.viz.Chart` <code>this</code> to allow method chaining
```js
setZoomEnabled(bZoomEnabled)
```
* `bZoomEnabled` () {boolean} Expects a boolean

<a name="setClipZoomOverflow"></a>

### `setClipZoomOverflow`
Setter for property <code>clipZoomOverflow</code>.

Returns: `ui5.viz.Chart` <code>this</code> to allow method chaining
```js
setClipZoomOverflow(bClipZoomOverflow)
```
* `bClipZoomOverflow` () {boolean} Expects a boolean

<a name="setShowDataPoints"></a>

### `setShowDataPoints`
Setter for property <code>showDataPoints</code>.

Returns: `ui5.viz.Chart` <code>this</code> to allow method chaining
```js
setShowDataPoints(bShowDataPoints)
```
* `bShowDataPoints` () {boolean} Expects a boolean

<a name="setBackgroundColor"></a>

### `setBackgroundColor`
Setter for property <code>backgroundColor</code>.

Returns: `ui5.viz.Chart` <code>this</code> to allow method chaining
```js
setBackgroundColor(sBackgroundColor)
```
* `sBackgroundColor` () {boolean} Expects a boolean

<a name="setLegendPosition"></a>

### `setLegendPosition`
Setter for property <code>legendPosition</code>.

Returns: `ui5.viz.Chart` <code>this</code> to allow method chaining
```js
setLegendPosition(sLegendPosition)
```
* `sLegendPosition` () {boolean} Expects a boolean

<a name="setShowLegend"></a>

### `setShowLegend`
Setter for property <code>showLegend</code>.

Returns: `ui5.viz.Chart` <code>this</code> to allow method chaining
```js
setShowLegend(bShowLegend)
```
* `bShowLegend` () {boolean} Expects a boolean

<a name="setShowTooltip"></a>

### `setShowTooltip`
Setter for property <code>showTooltip</code>.

Returns: `ui5.viz.Chart` <code>this</code> to allow method chaining
```js
setShowTooltip(bShowTooltip)
```
* `bShowTooltip` () {boolean} Expects a boolean

<a name="setGroupedTooltip"></a>

### `setGroupedTooltip`
Setter for property <code>groupedTooltip</code>.

Returns: `ui5.viz.Chart` <code>this</code> to allow method chaining
```js
setGroupedTooltip(bGroupedTooltip)
```
* `bGroupedTooltip` () {boolean} Expects a boolean

<a name="setSwitchAxisPosition"></a>

### `setSwitchAxisPosition`
Setter for property <code>switchAxisPosition</code>.

Returns: `ui5.viz.Chart` <code>this</code> to allow method chaining
```js
setSwitchAxisPosition(bSwitchAxisPosition)
```
* `bSwitchAxisPosition` () {boolean} Expects a boolean

<a name="setXAxisType"></a>

### `setXAxisType`
Setter for property <code>xAxisType</code>.

Returns: `ui5.viz.Chart` <code>this</code> to allow method chaining
```js
setXAxisType(bXAxisType)
```
* `bXAxisType` () {boolean} Expects a boolean

<a name="getXAxis"></a>

### `getXAxis`
Getter for aggregation <code>xAxis</code>.

Returns: `ui5.viz.ChartAxis` return x axis
```js
getXAxis()
```

<a name="getYAxis"></a>

### `getYAxis`
Getter for aggregation <code>yAxis</code>.

Returns: `ui5.viz.ChartAxis` return y axis
```js
getYAxis()
```

<a name="getY2Axis"></a>

### `getY2Axis`
Getter for aggregation <code>y2Axis</code>.

Returns: `ui5.viz.ChartAxis` return y2 axis
```js
getY2Axis()
```

<a name="setAggregation"></a>

### `setAggregation`
Sets a new object in the named 0..1 aggregation of this ManagedObject and marks this ManagedObject as changed.

Returns: `ui5.viz.ChartSeries` This instance for chaining
```js
setAggregation(sAggregationName, oObject, bSuppressInvalidate)
```
* `sAggregationName` () {string} the string identifying the aggregation the managed object oObject should be set.
* `oObject` () {sap.ui.base.ManagedObject} the ManagedObject to add; if empty, nothing is inserted.
* `bSuppressInvalidate` () {boolean} if true, this ManagedObject as well as the added child are not marked as changed

<a name="insertAggregation"></a>

### `insertAggregation`
Inserts managed object oObject to the aggregation named sAggregationName at position iIndex.

Returns: `ui5.viz.ChartSeries` This instance for chaining
```js
insertAggregation(sAggregationName, oObject, iIndex, bSuppressInvalidate)
```
* `sAggregationName` () {string} the string identifying the aggregation the managed object oObject should be inserted into.
* `oObject` () {sap.ui.base.ManagedObject} the ManagedObject to add; if empty, nothing is inserted.
* `iIndex` () {int} the 0-based index the managed object should be inserted at; for a negative value iIndex, oObject is inserted at position 0; for a value greater than the current size of the aggregation, oObject is inserted at the last position
* `bSuppressInvalidate` () {boolean} if true, this ManagedObject as well as the added child are not marked as changed

<a name="addAggregation"></a>

### `addAggregation`
Adds some entity oObject to the aggregation identified by sAggregationName.

Returns: `ui5.viz.ChartSeries` This instance for chaining
```js
addAggregation(sAggregationName, oObject, bSuppressInvalidate)
```
* `sAggregationName` () {string} the string identifying the aggregation the managed object oObject should be inserted into.
* `oObject` () {sap.ui.base.ManagedObject} the ManagedObject to add; if empty, nothing is inserted.
* `bSuppressInvalidate` () {boolean} if true, this ManagedObject as well as the added child are not marked as changed

<a name="removeAggregation"></a>

### `removeAggregation`
Removes an object from the aggregation named sAggregationName with cardinality 0..n.

Returns: `ui5.viz.ChartSeries` This instance for chaining
```js
removeAggregation(sAggregationName, oObject, bSuppressInvalidate)
```
* `sAggregationName` () {string} the string identifying the aggregation the managed object oObject should be inserted into.
* `oObject` () {sap.ui.base.ManagedObject} the ManagedObject to add; if empty, nothing is inserted.
* `bSuppressInvalidate` () {boolean} if true, this ManagedObject as well as the added child are not marked as changed

<a name="removeAllAggregation"></a>

### `removeAllAggregation`
Removes all objects from the 0..n-aggregation named sAggregationName.

Returns: `ui5.viz.ChartSeries` This instance for chaining
```js
removeAllAggregation(sAggregationName, bSuppressInvalidate)
```
* `sAggregationName` () {string} the string identifying the aggregation the managed object oObject should be inserted into.
* `bSuppressInvalidate` () {boolean} if true, this ManagedObject as well as the added child are not marked as changed

<a name="destroyAggregation"></a>

### `destroyAggregation`
Destroys (all) the managed object(s) in the aggregation named sAggregationName and empties the aggregation. If the aggregation did contain any object, this ManagedObject is marked as changed.

Returns: `ui5.viz.ChartSeries` This instance for chaining
```js
destroyAggregation(sAggregationName, bSuppressInvalidate)
```
* `sAggregationName` () {string} the string identifying the aggregation the managed object oObject should be inserted into.
* `bSuppressInvalidate` () {boolean} if true, this ManagedObject as well as the added child are not marked as changed

<a name="setModel"></a>

### `setModel`
Sets or unsets a model for the given model name for this ManagedObject.

Returns: `undefined`
```js
setModel(oModel?, sName?)
```
* `oModel` (`sap.ui.model.Model`) The model to be set or null or undefined.
* `sName` (`string`) The name of the model or undefined.

<a name="getXAxisLabelByIndex"></a>

### `getXAxisLabelByIndex`
Get respective X axis label by index.

Returns: `any` Value depending on axis type.
```js
getXAxisLabelByIndex(iIndex?)
```
* `iIndex` (`int`) Index.

<a name="getMinValueByAxis"></a>

### `getMinValueByAxis`
Getter for property <code>minValue</code> of an axis.

Returns: `any` Value depending on axis type.
```js
getMinValueByAxis(oAxis?)
```
* `oAxis` (`ui5.viz.ChartAxis`) Axis.

<a name="getMaxValueByAxis"></a>

### `getMaxValueByAxis`
Getter for property <code>maxValue</code> of an axis.

Returns: `any` Value depending on axis type.
```js
getMaxValueByAxis(oAxis?)
```
* `oAxis` (`ui5.viz.ChartAxis`) - Axis (default: <code>undefined</code>).

<a name="setProperty"></a>

### `setProperty`
Overwrites the method in order to check on supported properties.

Returns: `ui5.viz.ChartDataPoint` This instance for chaining
```js
setProperty(sName, vValue, bSuppressInvalidation)
```
* `sName` () {string} Property name to be set
* `vValue` () {boolean | string | object} Property value to be set
* `bSuppressInvalidation` () {boolean} Whether invalidation to be suppressed

<a name="insertAggregation"></a>

### `insertAggregation`
Inserts managed object oObject to the aggregation named sAggregationName at position iIndex.

Returns: `ui5.viz.ChartSeries` This instance for chaining
```js
insertAggregation(sAggregationName?, oObject?, iIndex?, bSuppressInvalidate?)
```
* `sAggregationName` (`string`) the string identifying the aggregation the managed object oObject should be inserted into.
* `oObject` (`sap.ui.base.ManagedObject`) the ManagedObject to add; if empty, nothing is inserted.
* `iIndex` (`int`) the 0-based index the managed object should be inserted at; for a negative value iIndex, oObject is inserted at position 0; for a value greater than the current size of the aggregation, oObject is inserted at the last position
* `bSuppressInvalidate` (`boolean`) if true, this ManagedObject as well as the added child are not marked as changed

<a name="addAggregation"></a>

### `addAggregation`
Adds some entity oObject to the aggregation identified by sAggregationName.

Returns: `ui5.viz.ChartSeries` This instance for chaining
```js
addAggregation(sAggregationName, oObject, bSuppressInvalidate)
```
* `sAggregationName` () {string} the string identifying the aggregation the managed object oObject should be inserted into.
* `oObject` () {sap.ui.base.ManagedObject} the ManagedObject to add; if empty, nothing is inserted.
* `bSuppressInvalidate` () {boolean} if true, this ManagedObject as well as the added child are not marked as changed

<a name="removeAggregation"></a>

### `removeAggregation`
Removes an object from the aggregation named sAggregationName with cardinality 0..n.

Returns: `ui5.viz.ChartSeries` This instance for chaining
```js
removeAggregation(sAggregationName, oObject, bSuppressInvalidate)
```
* `sAggregationName` () {string} the string identifying the aggregation the managed object oObject should be inserted into.
* `oObject` () {sap.ui.base.ManagedObject} the ManagedObject to add; if empty, nothing is inserted.
* `bSuppressInvalidate` () {boolean} if true, this ManagedObject as well as the added child are not marked as changed

<a name="removeAllAggregation"></a>

### `removeAllAggregation`
Removes all objects from the 0..n-aggregation named sAggregationName.

Returns: `ui5.viz.ChartSeries` This instance for chaining
```js
removeAllAggregation(sAggregationName, bSuppressInvalidate)
```
* `sAggregationName` () {string} the string identifying the aggregation the managed object oObject should be inserted into.
* `bSuppressInvalidate` () {boolean} if true, this ManagedObject as well as the added child are not marked as changed

<a name="destroyAggregation"></a>

### `destroyAggregation`
Destroys (all) the managed object(s) in the aggregation named sAggregationName and empties the aggregation. If the aggregation did contain any object, this ManagedObject is marked as changed.

Returns: `ui5.viz.ChartSeries` This instance for chaining
```js
destroyAggregation(sAggregationName, bSuppressInvalidate)
```
* `sAggregationName` () {string} the string identifying the aggregation the managed object oObject should be inserted into.
* `bSuppressInvalidate` () {boolean} if true, this ManagedObject as well as the added child are not marked as changed

<a name="setProperty"></a>

### `setProperty`
Overwrites the method in order to check on supported properties.

Returns: `ui5.viz.ChartSeries` This instance for chaining
```js
setProperty(sName?, vValue?, bSuppressInvalidation?)
```
* `sName` (`string`) Property name to be set
* `vValue` (`any`) Property value to be set
* `bSuppressInvalidation` (`boolean`) Whether invalidation to be suppressed

<a name="setProperty"></a>

### `setProperty`
Overwrites the method in order to check on supported properties.

Returns: `ui5.viz.ChartDataPoint` This instance for chaining
```js
setProperty(sName, vValue, bSuppressInvalidation)
```
* `sName` () {string} Property name to be set
* `vValue` () {boolean | string | object} Property value to be set
* `bSuppressInvalidation` () {boolean} Whether invalidation to be suppressed

<a name="setProperty"></a>

### `setProperty`
Overwrites the method in order to check on supported properties.

Returns: `ui5.viz.ChartDataPoint` This instance for chaining
```js
setProperty(sName, vValue, bSuppressInvalidation)
```
* `sName` () {string} Property name to be set
* `vValue` () {boolean | string | object} Property value to be set
* `bSuppressInvalidation` () {boolean} Whether invalidation to be suppressed

