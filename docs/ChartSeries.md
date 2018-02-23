# `ui5.viz.ChartSeries`
The <code>ChartSeries</code> control: ChartSeries container for bar, line and other chart types. Based on C3.js..

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
| `type` | `ui5.viz.ChartSeriesType` | `library.ChartSeriesType.Spline` | Shows or hides series and legend. |
| `name` | `string` | `null` | Name of the series. |
| `color` | [sap.ui.core.CSSColor](https://openui5.hana.ondemand.com/#/api/sap.ui.core.CSSColor) | `null` | Sets a custom color for the series, overwriting the default color palette. |
| `showLabels` | `boolean` | `false` | Sets visibility of labels. |
| `lineStyle` | `ui5.viz.LineStyle` | `library.LineStyle.Default` | Sets style of series lines (supported types: line, spline, step, area, area-spline, area-step). |
| `shapeStyle` | `ui5.viz.ShapeStyle` | `library.ShapeStyle.Default` | Sets style of series shape (supported types: bar). |
| `lineAnimationSpeed` | `ui5.viz.AnimationSpeed` | `library.AnimationSpeed.None` | Sets speed of animated dashes / dots (none, slow, medium, fast). |
| `lineAnimationForwards` | `boolean` | `true` | Sets if line animation should run forwards or backwards. |
| `groupKey` | `string` | `null` | ChartSeries with the same group key are displayed as a cluster (e.g. stacked bar). |
| `yAxis` | `ui5.viz.Axis` | `library.Axis.Y` | Sets the referenced y axis the ChartSeriesData value property is related to. |
| `visible` | `boolean` | `true` | Sets visibility of the element. |
| `key` | `string` | `null` | Unique key for the series. |

## Aggregations
All aggregations have one getter and several mutating methods depending on their cardinality. ([read which aggregation methods are defined automatically](https://sapui5.hana.ondemand.com/#/api/sap.ui.base.ManagedObject))

| Name | Cardinality | Type | Description |
| --- | --- | --- | --- |
| `data` | `0..n` | `ui5.viz.ChartDataPoint` | Defines the data points of our series. |

## Events
All events return to the event callback handler [sap.ui.base.Event](https://openui5.hana.ondemand.com/#/api/sap.ui.base.Event). ([read which event methods are defined automatically](https://sapui5.hana.ondemand.com/#/api/sap.ui.base.ManagedObject))
* <a href="#seriesDataUpdate">seriesDataUpdate</a> Series was updated.
* <a href="#seriesVisibilityChange">seriesVisibilityChange</a> Series visibility have changed.

<br/>

<a name="seriesDataUpdate"></a>

### `seriesDataUpdate`
Series was updated. Providing parameters:
* `code` (`ui5.viz.ChartUpdateCode`) Chart update event code.

<br/>

<a name="seriesVisibilityChange"></a>

### `seriesVisibilityChange`
Series visibility have changed. Providing parameters:
* `chartSeries` (`ui5.viz.ChartSeries`) Reference to respective series.

<br/>


## Methods
There are no public methods defined for `ui5.viz.ChartSeries`.

<br/>

