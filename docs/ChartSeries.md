# `ui5.viz.ChartSeries`
The <code>ChartSeries</code> control: ChartSeries container for bar, line and other chart types. Based on C3.js..

**Extends**: [sap.ui.core.Element](https://openui5.hana.ondemand.com/#/api/sap.ui.core.Element) This module inherits all methods and attributes from the extended module and from all other modules in the inheritence hierarchy.


## Properties
All properties have corresponding getters and setters. ([read which property methods are defined automatically](https://sapui5.hana.ondemand.com/#/api/sap.ui.base.ManagedObject))

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `type` | `ui5.viz.ChartSeriesType` | `library.ChartSeriesType.Spline` | Shows or hides series and legend |
| `name` | `string` | `null` | Name of the series |
| `color` | [sap.ui.core.CSSColor](https://openui5.hana.ondemand.com/#/api/sap.ui.core.CSSColor) | `null` | Sets a custom color for the series, overwriting the default color palette |
| `showLabels` | `boolean` | `false` | Sets visibility of labels |
| `lineStyle` | `ui5.viz.LineStyle` | `library.LineStyle.Default` | Sets style of series lines (supported types: line, spline, step, area, area-spline, area-step) |
| `shapeStyle` | `ui5.viz.ShapeStyle` | `library.ShapeStyle.Default` | Sets style of series shape (supported types: bar) |
| `lineAnimationSpeed` | `ui5.viz.AnimationSpeed` | `library.AnimationSpeed.None` | Sets speed of animated dashes / dots (none, slow, medium, fast) |
| `lineAnimationForwards` | `boolean` | `true` | Sets if line animation should run forwards or backwards |
| `groupKey` | `string` | `null` | ChartSeries with the same group key are displayed as a cluster (e.g. stacked bar) |
| `yAxis` | `ui5.viz.Axis` | `library.Axis.Y` | Sets the referenced y axis the ChartSeriesData value property is related to |
| `visible` | `boolean` | `true` | Sets visibility of the element. |
| `key` | `string` | `null` | Unique key for the series |
| `chartSeries` | `ui5.viz.ChartSeries` | `nodefaultdefined` | Reference to respective series. |

## Aggregations
All aggregations have one getter and several mutating methods depending on their cardinality. ([read which aggregation methods are defined automatically](https://sapui5.hana.ondemand.com/#/api/sap.ui.base.ManagedObject))

| Name | Cardinality | Type | Description |
| --- | --- | --- | --- |
| `data` | `0..n` | `ui5.viz.ChartDataPoint` | Defines the data points of our series |

## Events
All events return to the event callback handler [sap.ui.base.Event](https://openui5.hana.ondemand.com/#/api/sap.ui.base.Event). ([read which event methods are defined automatically](https://sapui5.hana.ondemand.com/#/api/sap.ui.base.ManagedObject))
* <a href="#seriesDataUpdate">seriesDataUpdate</a> Series was updated

<a name="seriesDataUpdate"></a>

### `seriesDataUpdate`
Series was updated Providing parameters:
* `code` (`ui5.viz.ChartUpdateCode`) Chart update event code.


## Methods
* <a href="#insertAggregation">insertAggregation</a> Inserts managed object oObject to the aggregation named sAggregationName at position iIndex.
* <a href="#addAggregation">addAggregation</a> Adds some entity oObject to the aggregation identified by sAggregationName.
* <a href="#removeAggregation">removeAggregation</a> Removes an object from the aggregation named sAggregationName with cardinality 0..n.
* <a href="#removeAllAggregation">removeAllAggregation</a> Removes all objects from the 0..n-aggregation named sAggregationName.
* <a href="#destroyAggregation">destroyAggregation</a> Destroys (all) the managed object(s) in the aggregation named sAggregationName and empties the aggregation. If the aggregation did contain any object, this ManagedObject is marked as changed.
* <a href="#setProperty">setProperty</a> Overwrites the method in order to check on supported properties.

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

<a name="setProperty"></a>

### `setProperty`
Overwrites the method in order to check on supported properties.

Returns: `ui5.viz.ChartSeries` This instance for chaining
```js
setProperty(sName, vValue, bSuppressInvalidation)
```
* `sName` () {string} Property name to be set
* `vValue` () {boolean | string | object} Property value to be set
* `bSuppressInvalidation` () {boolean} Whether invalidation to be suppressed

