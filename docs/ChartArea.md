# `ui5.viz.ChartArea`
The <code>ChartArea</code> control: ChartArea container for bar, line and other chart types. Based on C3.js..

**Extends**: [sap.ui.core.Element](https://openui5.hana.ondemand.com/#/api/sap.ui.core.Element) This module inherits all methods and attributes from the extended module and from all other modules in the inheritence hierarchy.


## Properties
All properties have corresponding getters and setters. ([read which property methods are defined automatically](https://sapui5.hana.ondemand.com/#/api/sap.ui.base.ManagedObject))

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `title` | `string` | `null` | Sets the ttitleext of the ChartArea |
| `style` | `ui5.viz.ShapeStyle` | `library.ShapeStyle.Default` | Sets the style of the shape |
| `color` | [sap.ui.core.CSSColor](https://openui5.hana.ondemand.com/#/api/sap.ui.core.CSSColor) | `null` | Sets a custom color for the area |
| `axis` | `ui5.viz.Axis` | `library.Axis.X` | Sets the referenced y axis the line value property is related to |
| `visible` | `boolean` | `true` | Sets visibility of the element. |
| `startValue` | `string` | `null` | Sets value that is matching a start position on the assigned axis |
| `endValue` | `string` | `null` | Sets value that is matching a end position on the assigned axis |
| `code` | `ui5.viz.ChartUpdateCode` | `nodefaultdefined` | Chart update event code. |

## Aggregations
All aggregations have one getter and several mutating methods depending on their cardinality. ([read which aggregation methods are defined automatically](https://sapui5.hana.ondemand.com/#/api/sap.ui.base.ManagedObject))

| Name | Cardinality | Type | Description |
| --- | --- | --- | --- |

## Events
All events return to the event callback handler [sap.ui.base.Event](https://openui5.hana.ondemand.com/#/api/sap.ui.base.Event). ([read which event methods are defined automatically](https://sapui5.hana.ondemand.com/#/api/sap.ui.base.ManagedObject))


## Methods
* <a href="#setProperty">setProperty</a> Overwrites the method in order to check on supported properties.

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

