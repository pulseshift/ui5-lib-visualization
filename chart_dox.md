yarn run v1.1.0
$ "/Users/Jascha/GitHub/ui5-lib-visualization/node_modules/.bin/dox" "--api" "--skipSingleStar"
  - [dataVisible](#datavisible)
  - [width](#width)
  - [height](#height)
  - [showSubchart](#showsubchart)
  - [microMode](#micromode)
  - [zoomEnabled](#zoomenabled)
  - [clipZoomOverflow](#clipzoomoverflow)
  - [showDataPoints](#showdatapoints)
  - [backgroundColor](#backgroundcolor)
  - [legendPosition](#legendposition)
  - [showLegend](#showlegend)
  - [showTooltip](#showtooltip)
  - [groupedTooltip](#groupedtooltip)
  - [switchAxisPosition](#switchaxisposition)
  - [xAxisType](#xaxistype)
  - [xAxis](#xaxis)
  - [yAxis](#yaxis)
  - [y2Axis](#y2axis)
  - [colors](#colors)
  - [lines](#lines)
  - [areas](#areas)
  - [series](#series)
  - [chartDataUpdate](#chartdataupdate)
  - [_chart](#_chart)
  - [_haltCount](#_haltcount)
  - [_seriesNumberCount](#_seriesnumbercount)
  - [constructor()](#constructor)
  - [undefined.renderer()](#undefinedrendererormobjectocontrolobject)
  - [undefined.setDataVisible()](#undefinedsetdatavisiblebdatavisibleboolean)
  - [undefined.setWidth()](#undefinedsetwidthswidth)
  - [undefined.setHeight()](#undefinedsetheightsheight)
  - [undefined.getWidth()](#undefinedgetwidth)
  - [undefined.getHeigth()](#undefinedgetheigth)
  - [undefined.setShowSubchart()](#undefinedsetshowsubchartbshowsubchart)
  - [undefined.setMicroMode()](#undefinedsetmicromodebmicromode)
  - [undefined.setZoomEnabled()](#undefinedsetzoomenabledbzoomenabled)
  - [undefined.setClipZoomOverflow()](#undefinedsetclipzoomoverflowbclipzoomoverflow)
  - [undefined.setShowDataPoints()](#undefinedsetshowdatapointsbshowdatapoints)
  - [undefined.setBackgroundColor()](#undefinedsetbackgroundcolorsbackgroundcolor)
  - [undefined.setLegendPosition()](#undefinedsetlegendpositionslegendposition)
  - [undefined.setShowLegend()](#undefinedsetshowlegendbshowlegend)
  - [undefined.setShowTooltip()](#undefinedsetshowtooltipbshowtooltip)
  - [undefined.setGroupedTooltip()](#undefinedsetgroupedtooltipbgroupedtooltip)
  - [undefined.setSwitchAxisPosition()](#undefinedsetswitchaxispositionbswitchaxisposition)
  - [undefined.setXAxisType()](#undefinedsetxaxistypebxaxistype)
  - [undefined.getXAxis()](#undefinedgetxaxis)
  - [undefined.getYAxis()](#undefinedgetyaxis)
  - [undefined.getY2Axis()](#undefinedgety2axis)
  - [undefined.setAggregation()](#undefinedsetaggregationsaggregationnameoobjectbsuppressinvalidate)
  - [undefined.insertAggregation()](#undefinedinsertaggregationsaggregationnameoobjectiindexbsuppressinvalidate)
  - [undefined.addAggregation()](#undefinedaddaggregationsaggregationnameoobjectbsuppressinvalidate)
  - [undefined.removeAggregation()](#undefinedremoveaggregationsaggregationnameoobjectbsuppressinvalidate)
  - [undefined.removeAllAggregation()](#undefinedremoveallaggregationsaggregationnamebsuppressinvalidate)
  - [undefined.destroyAggregation()](#undefineddestroyaggregationsaggregationnamebsuppressinvalidate)
  - [undefined.setModel()](#undefinedsetmodelomodelsapuimodelmodelsnamestring)
  - [undefined.getXAxisLabelByIndex()](#undefinedgetxaxislabelbyindexiindexint)
  - [undefined.getMinValueByAxis()](#undefinedgetminvaluebyaxisoaxisui5vizchartaxis)
  - [undefined.getMaxValueByAxis()](#undefinedgetmaxvaluebyaxisoaxisui5vizchartaxis)

## dataVisible

  Shows or hides data series and legend

## width

  A CSS size property defining the width of the chart

## height

  A CSS size property defining the hright of the chart

## showSubchart

  Shows a subchart for naviagtion
  Hint: live update by c3 API is not supported, yet, therefore we must rerender the chart

## microMode

  Enables the chart to be displayed an a small scale
  Hint: live update by c3 API is not supported, yet, therefore we must rerender the chart

## zoomEnabled

  Enables zoom functionality (inactive if subchart is used)

## clipZoomOverflow

  If true, elements outside of the chart area (happend during zooming) is hidden

## showDataPoints

  If false, data points on lines or splines are hidden

## backgroundColor

  Sets the background color of the chart

## legendPosition

  Sets the legend position
  Hint: live update by c3 API is not supported, yet, therefore we must rerender the chart

## showLegend

  Sets tthe legend visibility

## showTooltip

  Enables tooltips on chart data elements
  Hint: live update by c3 API is not supported, yet, therefore we must rerender the chart

## groupedTooltip

  Sets the tooltip behaviour, whether it should show tooltip for grouped or single data points
  Hint: live update by c3 API is not supported, yet, therefore we must rerender the chart

## switchAxisPosition

  Switches x (by default horizontally) and y (by default vertically) axis
  Hint: live update by c3 API is not supported, yet, therefore we must rerender the chart

## xAxisType

  Set type of x axis
  Hint: live update by c3 API is not supported, yet, therefore we must rerender the chart

## xAxis

  Chart axis (if no chart axis is supposed here, a default x axis is generated)

## yAxis

  Chart axis (if no chart axis is supposed here, a default y axis is generated)
  Hint: live update by c3 API is not supported, yet, therefore we must rerender the chart

## y2Axis

  Chart axis (if no chart axis is provided, axis is not visible axis is generated)
  Hint: live update by c3 API is not supported, yet, therefore we must rerender the chart

## colors

  Custom color for series, if not supposed, default theme colors are used
  Hint: live update by c3 API is not supported, yet, therefore we must rerender the chart

## lines

  Set of lines to be displayed on the chart grid

## areas

  Set of areas to be displayed on the chart grid

## series

  Defines the data series on our chart grid

## chartDataUpdate

  Data was updated

## _chart

  Reference to c3 chart instance

## _haltCount

  Object to prevent update data event

## _seriesNumberCount

  Number range object to set a unique key to series

## constructor()

  Constructor for a new <code>ui5.viz.Chart</code>.

## undefined.renderer([oRm]:object, [oControl]:object)

  Renderer function of control <code>ui5.viz.Chart</code>.

## undefined.setDataVisible(bDataVisible:boolean)

  Setter for property <code>dataVisible</code>.

## undefined.setWidth(sWidth:)

  Setter for property <code>width</code>.

## undefined.setHeight(sHeight:)

  Setter for property <code>height</code>.

## undefined.getWidth()

  Getter for property <code>width</code>.

## undefined.getHeigth()

  Getter for property <code>height</code>.

## undefined.setShowSubchart(bShowSubchart:)

  Setter for property <code>showSubchart</code>.

## undefined.setMicroMode(bMicroMode:)

  Setter for property <code>microMode</code>.

## undefined.setZoomEnabled(bZoomEnabled:)

  Setter for property <code>zoomEnabled</code>.

## undefined.setClipZoomOverflow(bClipZoomOverflow:)

  Setter for property <code>clipZoomOverflow</code>.

## undefined.setShowDataPoints(bShowDataPoints:)

  Setter for property <code>showDataPoints</code>.

## undefined.setBackgroundColor(sBackgroundColor:)

  Setter for property <code>backgroundColor</code>.

## undefined.setLegendPosition(sLegendPosition:)

  Setter for property <code>legendPosition</code>.

## undefined.setShowLegend(bShowLegend:)

  Setter for property <code>showLegend</code>.

## undefined.setShowTooltip(bShowTooltip:)

  Setter for property <code>showTooltip</code>.

## undefined.setGroupedTooltip(bGroupedTooltip:)

  Setter for property <code>groupedTooltip</code>.

## undefined.setSwitchAxisPosition(bSwitchAxisPosition:)

  Setter for property <code>switchAxisPosition</code>.

## undefined.setXAxisType(bXAxisType:)

  Setter for property <code>xAxisType</code>.

## undefined.getXAxis()

  Getter for aggregation <code>xAxis</code>.

## undefined.getYAxis()

  Getter for aggregation <code>yAxis</code>.

## undefined.getY2Axis()

  Getter for aggregation <code>y2Axis</code>.

## undefined.setAggregation(sAggregationName:, oObject:, bSuppressInvalidate:)

  Sets a new object in the named 0..1 aggregation of this ManagedObject and marks this ManagedObject as changed.

## undefined.insertAggregation(sAggregationName:, oObject:, iIndex:, bSuppressInvalidate:)

  Inserts managed object oObject to the aggregation named sAggregationName at position iIndex.

## undefined.addAggregation(sAggregationName:, oObject:, bSuppressInvalidate:)

  Adds some entity oObject to the aggregation identified by sAggregationName.

## undefined.removeAggregation(sAggregationName:, oObject:, bSuppressInvalidate:)

  Removes an object from the aggregation named sAggregationName with cardinality 0..n.

## undefined.removeAllAggregation(sAggregationName:, bSuppressInvalidate:)

  Removes all objects from the 0..n-aggregation named sAggregationName.

## undefined.destroyAggregation(sAggregationName:, bSuppressInvalidate:)

  Destroys (all) the managed object(s) in the aggregation named sAggregationName and empties the aggregation. If the aggregation did contain any object, this ManagedObject is marked as changed.

## undefined.setModel([oModel]:sap.ui.model.Model, [sName]:string)

  Sets or unsets a model for the given model name for this ManagedObject.

## undefined.getXAxisLabelByIndex([iIndex]:int)

  Get respective X axis label by index.

## undefined.getMinValueByAxis([oAxis]:ui5.viz.ChartAxis)

  Getter for property <code>minValue</code> of an axis.

## undefined.getMaxValueByAxis([oAxis]:ui5.viz.ChartAxis)

  Getter for property <code>maxValue</code> of an axis.
Done in 0.26s.
