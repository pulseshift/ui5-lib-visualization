# `ui5.viz.ChartArea`
The <code>ChartArea</code> control: ChartArea container for bar, line and other chart types. Based on C3.js..

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
| `title` | `string` | `null}` | Sets the ttitleext of the ChartArea. |
| `style` | `ui5.viz.ShapeStyle` | `library.ShapeStyle.Solid,` | Sets the style of the shape. |
| `color` | [sap.ui.core.CSSColor](https://openui5.hana.ondemand.com/#/api/sap.ui.core.CSSColor) | `null,` | Sets a custom color for the area. |
| `axis` | `ui5.viz.Axis` | `library.Axis.X,` | Sets the referenced y axis the line value property is related to. |
| `visible` | `boolean` | `true,` | Sets visibility of the element. |
| `startValue` | `string` | `null}` | Sets value that is matching a start position on the assigned axis. |
| `endValue` | `string` | `null},` | Sets value that is matching a end position on the assigned axis. |

## Aggregations
There are no public aggregations defined for `ui5.viz.ChartArea`.

## Events
All events return to the event callback handler [sap.ui.base.Event](https://openui5.hana.ondemand.com/#/api/sap.ui.base.Event). ([read which event methods are defined automatically](https://sapui5.hana.ondemand.com/#/api/sap.ui.base.ManagedObject))
* <a href="#areaUpdate">areaUpdate</a> Line was updated.

<br/>

<a name="areaUpdate"></a>

### `areaUpdate`
Line was updated. Providing parameters:
* `code` (`ui5.viz.ChartUpdateCode`) Chart update event code.

<br/>


## Methods
* <a href="#getStartValue">getStartValue</a> Overwrites getter for property <code>startValue</code>.
* <a href="#getEndValue">getEndValue</a> Overwrites getter for property <code>endValue</code>.

<br/>

<a name="getStartValue"></a>

### `getStartValue`
Overwrites getter for property <code>startValue</code>.

Returns: `undefined`
```js
getStartValue()
```

<br/>

<a name="getEndValue"></a>

### `getEndValue`
Overwrites getter for property <code>endValue</code>.

Returns: `undefined`
```js
getEndValue()
```

<br/>

