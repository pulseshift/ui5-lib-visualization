# `ui5.viz.ChartLine`
The <code>ChartLine</code> control: ChartLine container for bar, line and other chart types. Based on C3.js..

**Extends**: [sap.ui.core.Element](https://openui5.hana.ondemand.com/#/api/sap.ui.core.Element) This module inherits all methods and attributes from the extended module and from all other modules in the inheritence hierarchy.


## Properties
All properties have corresponding getters and setters. ([read which property methods are defined automatically](https://sapui5.hana.ondemand.com/#/api/sap.ui.base.ManagedObject))

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `title` | `string` | `null` | Sets the ttitleext of the ChartLine |
| `titlePosition` | `ui5.viz.ChartTitlePosition` | `library.ChartTitlePosition.Start` | Sets the position of the title |
| `style` | `ui5.viz.LineStyle` | `library.LineStyle.Default` | Sets the style of the line |
| `color` | [sap.ui.core.CSSColor](https://openui5.hana.ondemand.com/#/api/sap.ui.core.CSSColor) | `null` | Sets a custom color for the line |
| `axis` | `ui5.viz.Axis` | `library.Axis.Y` | Sets the referenced y axis the line value property is related to |
| `showLineSelector` | `boolean` | `false` | Sets the visibility of a line selector. |
| `selectorIconOnly` | `boolean` | `false` | Sets if only icon or icon with circle should be displayed. |
| `lineSelectorIcon` | [sap.ui.core.URI](https://openui5.hana.ondemand.com/#/api/sap.ui.core.URI) | `'sap-icon://flag'` | Sets the the icon for the line selector. |
| `visible` | `boolean` | `true` | Sets visibility of the element. |
| `value` | `string` | `null` | Sets value that is matching a position on the assigned axis |
| `code` | `ui5.viz.ChartUpdateCode` | `nodefaultdefined` | Chart update event code. |
| `line` | `ui5.viz.ChartLine` | `nodefaultdefined` | Chart line that was clicked. |
| `selectorDomRef` | `object` | `nodefaultdefined` | Dom reference of line selector. |

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

