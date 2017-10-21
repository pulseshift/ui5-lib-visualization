# `ui5.viz.ChartDataPoint`
The <code>ChartDataPoint</code> control: ChartDataPoint container for bar, line and other chart types. Based on C3.js..

**Extends**: [sap.ui.core.Element](https://openui5.hana.ondemand.com/#/api/sap.ui.core.Element) This module inherits all methods and attributes from the extended module and from all other modules in the inheritence hierarchy.


## Properties
All properties have corresponding getters and setters. ([read which property methods are defined automatically](https://sapui5.hana.ondemand.com/#/api/sap.ui.base.ManagedObject))

| Name | Type | Default | Description |
| --- | --- | --- | --- |
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

## Events
All events return to the event callback handler [sap.ui.base.Event](https://openui5.hana.ondemand.com/#/api/sap.ui.base.Event). ([read which event methods are defined automatically](https://sapui5.hana.ondemand.com/#/api/sap.ui.base.ManagedObject))

<br/>


## Methods
* <a href="#setProperty">setProperty</a> Overwrites the method in order to check on supported properties.

<br/>

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

<br/>

