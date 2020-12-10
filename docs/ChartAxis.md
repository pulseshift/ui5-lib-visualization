# `ui5.viz.ChartAxis`
The <code>ChartAxis</code> control: ChartAxis container for bar, line and other chart types. Based on C3.js..

**Extends**: [sap.ui.core.Element](https://openui5.hana.ondemand.com/#/api/sap.ui.core.Element) This module inherits all methods and attributes from the extended module and from all other modules in the inheritence hierarchy.

## Sample Usage (XML View)
This element must be used with the <code>ui5.viz.Chart</code> control and was designed to work best in XML views and in combination with data binding.
```xml
<Chart>
  <!-- tbd -->
</Chart>
```

## Properties
All properties have corresponding getters and setters. ([read which property methods are defined automatically](https://sapui5.hana.ondemand.com/#/api/sap.ui.base.ManagedObject))

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `title` | `string` | `null}` | Sets axis title. |
| `showTitle` | `boolean` | `true,` | Sets axis title visibility. |
| `showGridLines` | `boolean` | `false,` | Sets visibility of grid lines Hint: live update by c3 API is not supported, yet, therefore we must rerender the chart. |
| `minValue` | `string` | `null}` | Sets the minimal value of the axis. (use index/position for category X-axis, too). |
| `maxValue` | `string` | `null}` | Sets the maximal value of the axis. (use index/position for category X-axis, too). |
| `autoTickValues` | `boolean` | `false,` | Flag wether or not the <code>ui5.viz.ChartAxisLabel</code> should be used to define tick values. |
| `visible` | `boolean` | `true,` | Sets visibility of the element. |

## Aggregations
All aggregations have one getter and several mutating methods depending on their cardinality. ([read which aggregation methods are defined automatically](https://sapui5.hana.ondemand.com/#/api/sap.ui.base.ManagedObject))

| Name | Cardinality | Type | Description |
| --- | --- | --- | --- |
| `labels` | `0..n` | `ui5.viz.ChartAxisLabel` | Sets the labels displayed on the axis Hint: live update by c3 API is only supported for X axis, yet, therefore we must rerender the chart. |

## Events
All events return to the event callback handler [sap.ui.base.Event](https://openui5.hana.ondemand.com/#/api/sap.ui.base.Event). ([read which event methods are defined automatically](https://sapui5.hana.ondemand.com/#/api/sap.ui.base.ManagedObject))
* <a href="#axisUpdate">axisUpdate</a> Axis was updated.

<br/>

<a name="axisUpdate"></a>

### `axisUpdate`
Axis was updated. 

<br/>


## Methods
There are no public methods defined for `ui5.viz.ChartAxis`.

<br/>

