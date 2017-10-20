## Members

<dl>
<dt><a href="#_chart">_chart</a> : <code>object</code></dt>
<dd><p>Reference to c3 chart instance</p>
</dd>
<dt><a href="#_haltCount">_haltCount</a> : <code>object</code></dt>
<dd><p>Object to prevent update data event</p>
</dd>
<dt><a href="#_seriesNumberCount">_seriesNumberCount</a> : <code>object</code></dt>
<dd><p>Number range object to set a unique key to series</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#constructor">constructor([sId], [mSettings])</a></dt>
<dd><p>Constructor for a new <code>ui5.viz.Chart</code>.</p>
</dd>
<dt><a href="#renderer">renderer([oRm], [oControl])</a></dt>
<dd><p>Renderer function of control <code>ui5.viz.Chart</code>.</p>
</dd>
<dt><a href="#setDataVisible">setDataVisible(bDataVisible)</a> ⇒ <code>ui5.viz.Chart</code></dt>
<dd><p>Setter for property <code>dataVisible</code>.</p>
</dd>
<dt><a href="#setWidth">setWidth(sWidth)</a> ⇒ <code>ui5.viz.Chart</code></dt>
<dd><p>Setter for property <code>width</code>.</p>
</dd>
<dt><a href="#setHeight">setHeight(sHeight)</a> ⇒ <code>ui5.viz.Chart</code></dt>
<dd><p>Setter for property <code>height</code>.</p>
</dd>
<dt><a href="#getWidth">getWidth()</a> ⇒ <code>number</code></dt>
<dd><p>Getter for property <code>width</code>.</p>
</dd>
<dt><a href="#getHeigth">getHeigth()</a> ⇒ <code>number</code></dt>
<dd><p>Getter for property <code>height</code>.</p>
</dd>
<dt><a href="#setShowSubchart">setShowSubchart(bShowSubchart)</a> ⇒ <code>ui5.viz.Chart</code></dt>
<dd><p>Setter for property <code>showSubchart</code>.</p>
</dd>
<dt><a href="#setMicroMode">setMicroMode(bMicroMode)</a> ⇒ <code>ui5.viz.Chart</code></dt>
<dd><p>Setter for property <code>microMode</code>.</p>
</dd>
<dt><a href="#setZoomEnabled">setZoomEnabled(bZoomEnabled)</a> ⇒ <code>ui5.viz.Chart</code></dt>
<dd><p>Setter for property <code>zoomEnabled</code>.</p>
</dd>
<dt><a href="#setClipZoomOverflow">setClipZoomOverflow(bClipZoomOverflow)</a> ⇒ <code>ui5.viz.Chart</code></dt>
<dd><p>Setter for property <code>clipZoomOverflow</code>.</p>
</dd>
<dt><a href="#setShowDataPoints">setShowDataPoints(bShowDataPoints)</a> ⇒ <code>ui5.viz.Chart</code></dt>
<dd><p>Setter for property <code>showDataPoints</code>.</p>
</dd>
<dt><a href="#setBackgroundColor">setBackgroundColor(sBackgroundColor)</a> ⇒ <code>ui5.viz.Chart</code></dt>
<dd><p>Setter for property <code>backgroundColor</code>.</p>
</dd>
<dt><a href="#setLegendPosition">setLegendPosition(sLegendPosition)</a> ⇒ <code>ui5.viz.Chart</code></dt>
<dd><p>Setter for property <code>legendPosition</code>.</p>
</dd>
<dt><a href="#setShowLegend">setShowLegend(bShowLegend)</a> ⇒ <code>ui5.viz.Chart</code></dt>
<dd><p>Setter for property <code>showLegend</code>.</p>
</dd>
<dt><a href="#setShowTooltip">setShowTooltip(bShowTooltip)</a> ⇒ <code>ui5.viz.Chart</code></dt>
<dd><p>Setter for property <code>showTooltip</code>.</p>
</dd>
<dt><a href="#setGroupedTooltip">setGroupedTooltip(bGroupedTooltip)</a> ⇒ <code>ui5.viz.Chart</code></dt>
<dd><p>Setter for property <code>groupedTooltip</code>.</p>
</dd>
<dt><a href="#setSwitchAxisPosition">setSwitchAxisPosition(bSwitchAxisPosition)</a> ⇒ <code>ui5.viz.Chart</code></dt>
<dd><p>Setter for property <code>switchAxisPosition</code>.</p>
</dd>
<dt><a href="#setXAxisType">setXAxisType(bXAxisType)</a> ⇒ <code>ui5.viz.Chart</code></dt>
<dd><p>Setter for property <code>xAxisType</code>.</p>
</dd>
<dt><a href="#getXAxis">getXAxis()</a> ⇒ <code>ui5.viz.ChartAxis</code></dt>
<dd><p>Getter for aggregation <code>xAxis</code>.</p>
</dd>
<dt><a href="#getYAxis">getYAxis()</a> ⇒ <code>ui5.viz.ChartAxis</code></dt>
<dd><p>Getter for aggregation <code>yAxis</code>.</p>
</dd>
<dt><a href="#getY2Axis">getY2Axis()</a> ⇒ <code>ui5.viz.ChartAxis</code></dt>
<dd><p>Getter for aggregation <code>y2Axis</code>.</p>
</dd>
<dt><a href="#setAggregation">setAggregation(sAggregationName, oObject, bSuppressInvalidate)</a> ⇒ <code>ui5.viz.ChartSeries</code></dt>
<dd><p>Sets a new object in the named 0..1 aggregation of this ManagedObject and marks this ManagedObject as changed.</p>
</dd>
<dt><a href="#insertAggregation">insertAggregation(sAggregationName, oObject, iIndex, bSuppressInvalidate)</a> ⇒ <code>ui5.viz.ChartSeries</code></dt>
<dd><p>Inserts managed object oObject to the aggregation named sAggregationName at position iIndex.</p>
</dd>
<dt><a href="#addAggregation">addAggregation(sAggregationName, oObject, bSuppressInvalidate)</a> ⇒ <code>ui5.viz.ChartSeries</code></dt>
<dd><p>Adds some entity oObject to the aggregation identified by sAggregationName.</p>
</dd>
<dt><a href="#removeAggregation">removeAggregation(sAggregationName, oObject, bSuppressInvalidate)</a> ⇒ <code>ui5.viz.ChartSeries</code></dt>
<dd><p>Removes an object from the aggregation named sAggregationName with cardinality 0..n.</p>
</dd>
<dt><a href="#removeAllAggregation">removeAllAggregation(sAggregationName, bSuppressInvalidate)</a> ⇒ <code>ui5.viz.ChartSeries</code></dt>
<dd><p>Removes all objects from the 0..n-aggregation named sAggregationName.</p>
</dd>
<dt><a href="#destroyAggregation">destroyAggregation(sAggregationName, bSuppressInvalidate)</a> ⇒ <code>ui5.viz.ChartSeries</code></dt>
<dd><p>Destroys (all) the managed object(s) in the aggregation named sAggregationName and empties the aggregation. If the aggregation did contain any object, this ManagedObject is marked as changed.</p>
</dd>
<dt><a href="#setModel">setModel([oModel], [sName])</a> ⇒ <code>ui5.viz.ChartSeries</code></dt>
<dd><p>Sets or unsets a model for the given model name for this ManagedObject.</p>
</dd>
<dt><a href="#getXAxisLabelByIndex">getXAxisLabelByIndex([iIndex])</a> ⇒ <code>any</code></dt>
<dd><p>Get respective X axis label by index.</p>
</dd>
<dt><a href="#getMinValueByAxis">getMinValueByAxis([oAxis])</a> ⇒ <code>any</code></dt>
<dd><p>Getter for property <code>minValue</code> of an axis.</p>
</dd>
<dt><a href="#getMaxValueByAxis">getMaxValueByAxis([oAxis])</a> ⇒ <code>any</code></dt>
<dd><p>Getter for property <code>maxValue</code> of an axis.</p>
</dd>
</dl>

<a name="_chart"></a>

## _chart : <code>object</code>
Reference to c3 chart instance

**Kind**: global variable  
**Since:**: 1.0.0  
<a name="_haltCount"></a>

## _haltCount : <code>object</code>
Object to prevent update data event

**Kind**: global variable  
**Since:**: 1.0.0  
<a name="_seriesNumberCount"></a>

## _seriesNumberCount : <code>object</code>
Number range object to set a unique key to series

**Kind**: global variable  
**Since:**: 1.0.0  
<a name="constructor"></a>

## constructor([sId], [mSettings])
Constructor for a new <code>ui5.viz.Chart</code>.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| [sId] | <code>string</code> | Id for the new control, generated automatically if no id is given |
| [mSettings] | <code>object</code> | Initial settings for the new control |

<a name="renderer"></a>

## renderer([oRm], [oControl])
Renderer function of control <code>ui5.viz.Chart</code>.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| [oRm] | <code>object</code> | Render Manager |
| [oControl] | <code>object</code> | Current control (this) |

<a name="setDataVisible"></a>

## setDataVisible(bDataVisible) ⇒ <code>ui5.viz.Chart</code>
Setter for property <code>dataVisible</code>.

**Kind**: global function  
**Returns**: <code>ui5.viz.Chart</code> - <code>this</code> to allow method chaining  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| bDataVisible | <code>boolean</code> | Expects a boolean |

<a name="setWidth"></a>

## setWidth(sWidth) ⇒ <code>ui5.viz.Chart</code>
Setter for property <code>width</code>.

**Kind**: global function  
**Returns**: <code>ui5.viz.Chart</code> - <code>this</code> to allow method chaining  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| sWidth | <code>sap.ui.core.CSSSize</code> | Expects a sap.ui.core.CSSSize element |

<a name="setHeight"></a>

## setHeight(sHeight) ⇒ <code>ui5.viz.Chart</code>
Setter for property <code>height</code>.

**Kind**: global function  
**Returns**: <code>ui5.viz.Chart</code> - <code>this</code> to allow method chaining  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| sHeight | <code>sap.ui.core.CSSSize</code> | Expects a sap.ui.core.CSSSize element |

<a name="getWidth"></a>

## getWidth() ⇒ <code>number</code>
Getter for property <code>width</code>.

**Kind**: global function  
**Returns**: <code>number</code> - Returns calculated size in pixel value based on sap.ui.core.CSSSize element  
**Access**: public  
<a name="getHeigth"></a>

## getHeigth() ⇒ <code>number</code>
Getter for property <code>height</code>.

**Kind**: global function  
**Returns**: <code>number</code> - Returns calculated size in pixel value based on sap.ui.core.CSSSize element  
**Access**: public  
<a name="setShowSubchart"></a>

## setShowSubchart(bShowSubchart) ⇒ <code>ui5.viz.Chart</code>
Setter for property <code>showSubchart</code>.

**Kind**: global function  
**Returns**: <code>ui5.viz.Chart</code> - <code>this</code> to allow method chaining  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| bShowSubchart | <code>boolean</code> | Expects a boolean |

<a name="setMicroMode"></a>

## setMicroMode(bMicroMode) ⇒ <code>ui5.viz.Chart</code>
Setter for property <code>microMode</code>.

**Kind**: global function  
**Returns**: <code>ui5.viz.Chart</code> - <code>this</code> to allow method chaining  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| bMicroMode | <code>boolean</code> | Expects a boolean |

<a name="setZoomEnabled"></a>

## setZoomEnabled(bZoomEnabled) ⇒ <code>ui5.viz.Chart</code>
Setter for property <code>zoomEnabled</code>.

**Kind**: global function  
**Returns**: <code>ui5.viz.Chart</code> - <code>this</code> to allow method chaining  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| bZoomEnabled | <code>boolean</code> | Expects a boolean |

<a name="setClipZoomOverflow"></a>

## setClipZoomOverflow(bClipZoomOverflow) ⇒ <code>ui5.viz.Chart</code>
Setter for property <code>clipZoomOverflow</code>.

**Kind**: global function  
**Returns**: <code>ui5.viz.Chart</code> - <code>this</code> to allow method chaining  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| bClipZoomOverflow | <code>boolean</code> | Expects a boolean |

<a name="setShowDataPoints"></a>

## setShowDataPoints(bShowDataPoints) ⇒ <code>ui5.viz.Chart</code>
Setter for property <code>showDataPoints</code>.

**Kind**: global function  
**Returns**: <code>ui5.viz.Chart</code> - <code>this</code> to allow method chaining  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| bShowDataPoints | <code>boolean</code> | Expects a boolean |

<a name="setBackgroundColor"></a>

## setBackgroundColor(sBackgroundColor) ⇒ <code>ui5.viz.Chart</code>
Setter for property <code>backgroundColor</code>.

**Kind**: global function  
**Returns**: <code>ui5.viz.Chart</code> - <code>this</code> to allow method chaining  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| sBackgroundColor | <code>boolean</code> | Expects a boolean |

<a name="setLegendPosition"></a>

## setLegendPosition(sLegendPosition) ⇒ <code>ui5.viz.Chart</code>
Setter for property <code>legendPosition</code>.

**Kind**: global function  
**Returns**: <code>ui5.viz.Chart</code> - <code>this</code> to allow method chaining  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| sLegendPosition | <code>boolean</code> | Expects a boolean |

<a name="setShowLegend"></a>

## setShowLegend(bShowLegend) ⇒ <code>ui5.viz.Chart</code>
Setter for property <code>showLegend</code>.

**Kind**: global function  
**Returns**: <code>ui5.viz.Chart</code> - <code>this</code> to allow method chaining  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| bShowLegend | <code>boolean</code> | Expects a boolean |

<a name="setShowTooltip"></a>

## setShowTooltip(bShowTooltip) ⇒ <code>ui5.viz.Chart</code>
Setter for property <code>showTooltip</code>.

**Kind**: global function  
**Returns**: <code>ui5.viz.Chart</code> - <code>this</code> to allow method chaining  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| bShowTooltip | <code>boolean</code> | Expects a boolean |

<a name="setGroupedTooltip"></a>

## setGroupedTooltip(bGroupedTooltip) ⇒ <code>ui5.viz.Chart</code>
Setter for property <code>groupedTooltip</code>.

**Kind**: global function  
**Returns**: <code>ui5.viz.Chart</code> - <code>this</code> to allow method chaining  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| bGroupedTooltip | <code>boolean</code> | Expects a boolean |

<a name="setSwitchAxisPosition"></a>

## setSwitchAxisPosition(bSwitchAxisPosition) ⇒ <code>ui5.viz.Chart</code>
Setter for property <code>switchAxisPosition</code>.

**Kind**: global function  
**Returns**: <code>ui5.viz.Chart</code> - <code>this</code> to allow method chaining  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| bSwitchAxisPosition | <code>boolean</code> | Expects a boolean |

<a name="setXAxisType"></a>

## setXAxisType(bXAxisType) ⇒ <code>ui5.viz.Chart</code>
Setter for property <code>xAxisType</code>.

**Kind**: global function  
**Returns**: <code>ui5.viz.Chart</code> - <code>this</code> to allow method chaining  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| bXAxisType | <code>boolean</code> | Expects a boolean |

<a name="getXAxis"></a>

## getXAxis() ⇒ <code>ui5.viz.ChartAxis</code>
Getter for aggregation <code>xAxis</code>.

**Kind**: global function  
**Returns**: <code>ui5.viz.ChartAxis</code> - return x axis  
**Access**: public  
<a name="getYAxis"></a>

## getYAxis() ⇒ <code>ui5.viz.ChartAxis</code>
Getter for aggregation <code>yAxis</code>.

**Kind**: global function  
**Returns**: <code>ui5.viz.ChartAxis</code> - return y axis  
**Access**: public  
<a name="getY2Axis"></a>

## getY2Axis() ⇒ <code>ui5.viz.ChartAxis</code>
Getter for aggregation <code>y2Axis</code>.

**Kind**: global function  
**Returns**: <code>ui5.viz.ChartAxis</code> - return y2 axis  
**Access**: public  
<a name="setAggregation"></a>

## setAggregation(sAggregationName, oObject, bSuppressInvalidate) ⇒ <code>ui5.viz.ChartSeries</code>
Sets a new object in the named 0..1 aggregation of this ManagedObject and marks this ManagedObject as changed.

**Kind**: global function  
**Returns**: <code>ui5.viz.ChartSeries</code> - This instance for chaining  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| sAggregationName | <code>string</code> | the string identifying the aggregation the managed object oObject should be set. |
| oObject | <code>sap.ui.base.ManagedObject</code> | the ManagedObject to add; if empty, nothing is inserted. |
| bSuppressInvalidate | <code>boolean</code> | if true, this ManagedObject as well as the added child are not marked as changed |

<a name="insertAggregation"></a>

## insertAggregation(sAggregationName, oObject, iIndex, bSuppressInvalidate) ⇒ <code>ui5.viz.ChartSeries</code>
Inserts managed object oObject to the aggregation named sAggregationName at position iIndex.

**Kind**: global function  
**Returns**: <code>ui5.viz.ChartSeries</code> - This instance for chaining  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| sAggregationName | <code>string</code> | the string identifying the aggregation the managed object oObject should be inserted into. |
| oObject | <code>sap.ui.base.ManagedObject</code> | the ManagedObject to add; if empty, nothing is inserted. |
| iIndex | <code>int</code> | the 0-based index the managed object should be inserted at; for a negative value iIndex, oObject is inserted at position 0; for a value greater than the current size of the aggregation, oObject is inserted at the last position |
| bSuppressInvalidate | <code>boolean</code> | if true, this ManagedObject as well as the added child are not marked as changed |

<a name="addAggregation"></a>

## addAggregation(sAggregationName, oObject, bSuppressInvalidate) ⇒ <code>ui5.viz.ChartSeries</code>
Adds some entity oObject to the aggregation identified by sAggregationName.

**Kind**: global function  
**Returns**: <code>ui5.viz.ChartSeries</code> - This instance for chaining  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| sAggregationName | <code>string</code> | the string identifying the aggregation the managed object oObject should be inserted into. |
| oObject | <code>sap.ui.base.ManagedObject</code> | the ManagedObject to add; if empty, nothing is inserted. |
| bSuppressInvalidate | <code>boolean</code> | if true, this ManagedObject as well as the added child are not marked as changed |

<a name="removeAggregation"></a>

## removeAggregation(sAggregationName, oObject, bSuppressInvalidate) ⇒ <code>ui5.viz.ChartSeries</code>
Removes an object from the aggregation named sAggregationName with cardinality 0..n.

**Kind**: global function  
**Returns**: <code>ui5.viz.ChartSeries</code> - This instance for chaining  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| sAggregationName | <code>string</code> | the string identifying the aggregation the managed object oObject should be inserted into. |
| oObject | <code>sap.ui.base.ManagedObject</code> | the ManagedObject to add; if empty, nothing is inserted. |
| bSuppressInvalidate | <code>boolean</code> | if true, this ManagedObject as well as the added child are not marked as changed |

<a name="removeAllAggregation"></a>

## removeAllAggregation(sAggregationName, bSuppressInvalidate) ⇒ <code>ui5.viz.ChartSeries</code>
Removes all objects from the 0..n-aggregation named sAggregationName.

**Kind**: global function  
**Returns**: <code>ui5.viz.ChartSeries</code> - This instance for chaining  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| sAggregationName | <code>string</code> | the string identifying the aggregation the managed object oObject should be inserted into. |
| bSuppressInvalidate | <code>boolean</code> | if true, this ManagedObject as well as the added child are not marked as changed |

<a name="destroyAggregation"></a>

## destroyAggregation(sAggregationName, bSuppressInvalidate) ⇒ <code>ui5.viz.ChartSeries</code>
Destroys (all) the managed object(s) in the aggregation named sAggregationName and empties the aggregation. If the aggregation did contain any object, this ManagedObject is marked as changed.

**Kind**: global function  
**Returns**: <code>ui5.viz.ChartSeries</code> - This instance for chaining  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| sAggregationName | <code>string</code> | the string identifying the aggregation the managed object oObject should be inserted into. |
| bSuppressInvalidate | <code>boolean</code> | if true, this ManagedObject as well as the added child are not marked as changed |

<a name="setModel"></a>

## setModel([oModel], [sName]) ⇒ <code>ui5.viz.ChartSeries</code>
Sets or unsets a model for the given model name for this ManagedObject.

**Kind**: global function  
**Returns**: <code>ui5.viz.ChartSeries</code> - This instance for chaining.  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| [oModel] | <code>sap.ui.model.Model</code> | The model to be set or null or undefined. |
| [sName] | <code>string</code> | The name of the model or undefined. |

<a name="getXAxisLabelByIndex"></a>

## getXAxisLabelByIndex([iIndex]) ⇒ <code>any</code>
Get respective X axis label by index.

**Kind**: global function  
**Returns**: <code>any</code> - Value depending on axis type.  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| [iIndex] | <code>int</code> | Index. |

<a name="getMinValueByAxis"></a>

## getMinValueByAxis([oAxis]) ⇒ <code>any</code>
Getter for property <code>minValue</code> of an axis.

**Kind**: global function  
**Returns**: <code>any</code> - Value depending on axis type.  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| [oAxis] | <code>ui5.viz.ChartAxis</code> | Axis. |

<a name="getMaxValueByAxis"></a>

## getMaxValueByAxis([oAxis]) ⇒ <code>any</code>
Getter for property <code>maxValue</code> of an axis.

**Kind**: global function  
**Returns**: <code>any</code> - Value depending on axis type.  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| [oAxis] | <code>ui5.viz.ChartAxis</code> | Axis. |

