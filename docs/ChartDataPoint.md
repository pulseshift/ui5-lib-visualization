# `ui5.viz.ChartDataPoint`
The <code>ChartDataPoint</code> control: ChartDataPoint container for bar, line and other chart types. Based on C3.js..

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
| `highlightAnimation` | `ui5.viz.DataPointAnimation` | `library.DataPointAnimation.None,` | Sets the representation of value as formatted text Hint: Not available for chart types Bar, Step and AreaStep, yet. |
| `type` | `ui5.viz.DataPointType` | `library.DataPointType.SingleValue,` | Sets the type of the data point. |
| `label` | `string` | `null}` | Sets the representation of value as formatted text. |
| `tooltipLabel` | `string` | `null}` | Sets the representation of value as formatted text in the tooltip. |
| `value` | `any` | `null}` | Sets the value the data point should represent. Hint: To support null as value, the type must be "any". |
| `high` | `any` | `null}` | Sets the high value the data point should represent in case of ribbon type. Hint: To support null as value, the type must be "any". |
| `low` | `any` | `null}` | Sets the low value the data point should represent in case of ribbon type. Hint: To support null as value, the type must be "any". |
| `visible` | `boolean` | `true,` | Sets visibility of the element. |

## Aggregations
There are no public aggregations defined for `ui5.viz.ChartDataPoint`.

## Events
All events return to the event callback handler [sap.ui.base.Event](https://openui5.hana.ondemand.com/#/api/sap.ui.base.Event). ([read which event methods are defined automatically](https://sapui5.hana.ondemand.com/#/api/sap.ui.base.ManagedObject))
* <a href="#dataPointUpdate">dataPointUpdate</a> Data was updated.

<br/>

<a name="dataPointUpdate"></a>

### `dataPointUpdate`
Data was updated. 

<br/>


## Methods
* <a href="#getVisible">getVisible</a> Overwrites getter in order to make sure it is a valid value. Visible can be false due to different reasons.
* <a href="#getValue">getValue</a> Overwrites getter in order to make sure it is a valid value. As the data type is any it might also be a string (for example).
* <a href="#getHigh">getHigh</a> Overwrites getter in order to make sure it is a valid value. As the data type is any it might also be a string (for example).
* <a href="#getLow">getLow</a> Overwrites getter in order to make sure it is a valid value. As the data type is any it might also be a string (for example).
* <a href="#getValueOrValuePair">getValueOrValuePair</a> Unified method to get correct value object based on data point type.

<br/>

<a name="getVisible"></a>

### `getVisible`
Overwrites getter in order to make sure it is a valid value. Visible can be false due to different reasons.

Returns: `undefined`
```js
getVisible()
```

<br/>

<a name="getValue"></a>

### `getValue`
Overwrites getter in order to make sure it is a valid value. As the data type is any it might also be a string (for example).

Returns: `undefined`
```js
getValue()
```

<br/>

<a name="getHigh"></a>

### `getHigh`
Overwrites getter in order to make sure it is a valid value. As the data type is any it might also be a string (for example).

Returns: `undefined`
```js
getHigh()
```

<br/>

<a name="getLow"></a>

### `getLow`
Overwrites getter in order to make sure it is a valid value. As the data type is any it might also be a string (for example).

Returns: `undefined`
```js
getLow()
```

<br/>

<a name="getValueOrValuePair"></a>

### `getValueOrValuePair`
Unified method to get correct value object based on data point type.

Returns: `undefined`
```js
getValueOrValuePair()
```

<br/>

