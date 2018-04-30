# `ui5.viz.ChartLine`
The <code>ChartLine</code> control: ChartLine container for bar, line and other chart types. Based on C3.js..

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
| `title` | `string` | `null` | Sets the ttitleext of the ChartLine. |
| `titlePosition` | `ui5.viz.ChartTitlePosition` | `library.ChartTitlePosition.Start` | Sets the position of the title. |
| `style` | `ui5.viz.LineStyle` | `library.LineStyle.Solid` | Sets the style of the line. |
| `color` | [sap.ui.core.CSSColor](https://openui5.hana.ondemand.com/#/api/sap.ui.core.CSSColor) | `null` | Sets a custom color for the line. |
| `axis` | `ui5.viz.Axis` | `library.Axis.Y` | Sets the referenced y axis the line value property is related to. |
| `showLineSelector` | `boolean` | `false` | Sets the visibility of a line selector. |
| `selectorIconOnly` | `boolean` | `false` | Sets if only icon or icon with circle should be displayed. |
| `lineSelectorIcon` | [sap.ui.core.URI](https://openui5.hana.ondemand.com/#/api/sap.ui.core.URI) | `sap-icon://flag` | Sets the the icon for the line selector. |
| `visible` | `boolean` | `true` | Sets visibility of the element. |
| `value` | `string` | `null` | Sets value that is matching a position on the assigned axis. |

## Aggregations
There are no public aggregations defined for `ui5.viz.ChartLine`.

## Events
All events return to the event callback handler [sap.ui.base.Event](https://openui5.hana.ondemand.com/#/api/sap.ui.base.Event). ([read which event methods are defined automatically](https://sapui5.hana.ondemand.com/#/api/sap.ui.base.ManagedObject))
* <a href="#lineUpdate">lineUpdate</a> Line was updated.
* <a href="#selectorPress">selectorPress</a> Line selector was pressed.

<br/>

<a name="lineUpdate"></a>

### `lineUpdate`
Line was updated. Providing parameters:
* `code` (`ui5.viz.ChartUpdateCode`) Chart update event code.

<br/>

<a name="selectorPress"></a>

### `selectorPress`
Line selector was pressed. Providing parameters:
* `line` (`ui5.viz.ChartLine`) Chart line that was clicked.
* `selectorDomRef` (`object`) Dom reference of line selector.

<br/>


## Methods
There are no public methods defined for `ui5.viz.ChartLine`.

<br/>

