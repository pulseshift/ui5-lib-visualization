"use strict";function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,i=Array(e.length);t<e.length;t++)i[t]=e[t];return i}return Array.from(e)}sap.ui.define(["sap/ui/core/Control","sap/ui/core/format/DateFormat","./ChartAxis","./ChartAxisLabel","./libs/lodash.debounce","./libs/lodash.isequal","./libs/c3","./library","sap/ui/thirdparty/d3"],function(e,t,i,r,a,n,s,o){return e.extend("ui5.viz.Chart",{metadata:{library:"ui5.viz",properties:{dataVisible:{type:"boolean",group:"Appearance",defaultValue:!0},width:{type:"sap.ui.core.CSSSize",group:"Appearance",defaultValue:"100%"},height:{type:"sap.ui.core.CSSSize",group:"Appearance",defaultValue:"360px"},showSubchart:{type:"boolean",group:"Appearance",defaultValue:!1},microMode:{type:"boolean",group:"Appearance",defaultValue:!1},zoomEnabled:{type:"boolean",group:"Appearance",defaultValue:!1},clipZoomOverflow:{type:"boolean",group:"Appearance",defaultValue:!0},showDataPoints:{type:"boolean",group:"Appearance",defaultValue:!0},backgroundColor:{type:"sap.ui.core.CSSColor",group:"Appearance",defaultValue:"transparent"},legendPosition:{type:"ui5.viz.ChartLegendPosition",group:"Appearance",defaultValue:o.ChartLegendPosition.Right},showLegend:{type:"boolean",group:"Appearance",defaultValue:!1},showTooltip:{type:"boolean",group:"Appearance",defaultValue:!1},groupedTooltip:{type:"boolean",group:"Appearance",defaultValue:!1},switchAxisPosition:{type:"boolean",group:"Appearance",defaultValue:!1},xAxisType:{type:"ui5.viz.AxisType",group:"Data",defaultValue:o.AxisType.Category}},aggregations:{xAxis:{type:"ui5.viz.ChartAxis",multiple:!1},yAxis:{type:"ui5.viz.ChartAxis",multiple:!1},y2Axis:{type:"ui5.viz.ChartAxis",multiple:!1},colors:{type:"ui5.viz.Color",multiple:!0},lines:{type:"ui5.viz.ChartLine",multiple:!0},areas:{type:"ui5.viz.ChartArea",multiple:!0},series:{type:"ui5.viz.ChartSeries",multiple:!0}},defaultAggregation:"series",associations:{},events:{chartDataUpdate:{parameters:{}}}},_chart:null,_haltCount:0,_initChartUpdateHandler:function(){this._haltCount=0},_getChartUpdateHandler:function(){var e=this;return{halt:function(){++e._haltCount,0!==e._haltCount&&e.setBusy(!0)},release:function(){--e._haltCount,0===e._haltCount&&e.setBusy(!1)},isHalted:function(){return 0!==e._haltCount}}},_seriesNumberCount:0,_initNumberRangeCreator:function(){this._seriesNumberCount=0},_getNumberRangeCreator:function(){var e=this;return{getNext:function(){return e._seriesNumberCount++}}},_debounceUpdate:null,_debounceUpdateChartLines:null,_debounceUpdateChartAreas:null,CSS_CLASS:"ui5-viz-chart",CSS_CLASS_NOCLIP:"ui5-viz-chart-noclippath",CSS_HIGHLIGHT_PULSATE:"ui5-viz-chart-point-highlight-pulsate",CSS_CLASS_LINE:"ui5-viz-chart-line",CSS_CLASS_LINE_SHOWSELECTOR:"ui5-viz-chart-line-selector-visible",CSS_CLASS_LINE_ICONONLY:"ui5-viz-chart-line-selector-icononly",CSS_CLASS_AREA:"ui5-viz-chart-area",CSS_CLASS_NO_POINTS:"ui5-viz-chart-hide-data-points",CSS_CLASS_MICRO_MODE:"ui5-viz-chart-micro-mode",init:function(){this._initNumberRangeCreator(),this._initChartUpdateHandler(),this._chart=null,this._getChartUpdateHandler().halt(),this._debounceUpdate=a(this._onDataUpdate,10),this._debounceUpdateChartLines=a(this._updateChartLines,50),this._debounceUpdateChartAreas=a(this._updateChartAreas,50)},constructor:function(){e.prototype.constructor.apply(this,arguments),this._getChartUpdateHandler().release()},onBeforeRendering:function(){this._getChartUpdateHandler().halt(),this._chart&&this._chart.destroy()},renderer:function(e,t){e.write("<div"),e.writeControlData(t),e.addClass(t.CSS_CLASS),e.writeClasses(),e.write(">"),e.write("</div>")},onAfterRendering:function(){var e=this,i=this.getXAxis(),r=this.getYAxis(),a=this.getY2Axis(),n=this.getSeries(),l=[];if(this.getMicroMode()){i.setProperty("visible",!1,!0),r.setProperty("visible",!1,!0),a.setProperty("visible",!1,!0)}var u={bindto:"#"+this.getId(),size:{width:this.getWidth(),height:this.getHeigth()-(i.getShowTitle()&&i.getVisible()&&i.getTitle()?15:0)},padding:{top:this.getMicroMode()?0:void 0,bottom:i.getShowTitle()&&i.getVisible()&&i.getTitle()?15:void 0,left:this.getMicroMode()?0:void 0,right:this.getMicroMode()?0:void 0},subchart:{show:this.getShowSubchart()},zoom:{enabled:this.getZoomEnabled()},legend:{position:this.getLegendPosition().toLowerCase(),show:this.getShowLegend()},tooltip:{show:this.getShowTooltip(),grouped:this.getGroupedTooltip(),format:{value:function(e,t,i,r){var a=n.find(function(e){return e.getKey()===i}),s=a?a.getData()[r]:null,o=s?s.getLabel():e;return o||e},title:function(){switch(e.getXAxisType()){case o.AxisType.Time:return function(e){return t.getInstance({style:"long"}).format(e)};case o.AxisType.Indexed:case o.AxisType.Category:default:return function(t){var i=e.getXAxisLabelByIndex(t),r=""===i.getTitle()?i.getValue():i.getTitle();return i&&i.getVisible()?r:void 0}}}()}},line:{connectNull:!0},data:{x:"x",columns:[["x"].concat(_toConsumableArray(i.getLabels().map(function(t,i){switch(e.getXAxisType()){case o.AxisType.Time:return t.getValue();case o.AxisType.Indexed:return parseInt(t.getValue(),10)||i;case o.AxisType.Category:default:return t.getValue()}})))].concat(_toConsumableArray(n.map(function(e){var t=e.getData().map(function(t,i){return t.getVisible()&&t.getHighlightAnimation()!==o.DataPointAnimation.None&&l.push({series:e.getKey(),point:i,animation:t.getHighlightAnimation()}),t.getValueOrValuePair()})||[];return t.unshift(e.getKey()),t}))),axes:0===n.length?[]:n.reduce(function(e,t){return e[t.getKey()]=t.getYAxis().toLowerCase(),e},{}),types:0===n.length?[]:n.reduce(function(e,t){return e[t.getKey()]=t.getType(),e},{}),names:0===n.length?[]:n.reduce(function(e,t){return e[t.getKey()]=t.getName()||t.getKey(),e},{}),colors:0===n.length?[]:n.reduce(function(e,t){return t.getColor()&&(e[t.getKey()]=t.getColor()),e},{}),labels:{format:0===n.length?[]:n.reduce(function(e,t){return e[t.getKey()]=function(e,i,r){var a=t.getData()[r]?t.getData()[r].getLabel():null,n=a||e;return t.getShowLabels()?n:null},e},{})},groups:0===n.length?[]:n.reduce(function(e,t){return t&&t.getGroupKey()&&!e.includes(t.getGroupKey())&&e.push(t.getGroupKey()),e},[]).map(function(e){return n.filter(function(t){return t.getGroupKey()===e}).map(function(e){return e.getKey()})})},color:{pattern:this.getColors().map(function(e){return e.getColor()}).concat(o.ColorPalette.custom?o.ColorPalette.custom:o.ColorPalette.Material300)},axis:{rotated:this.getSwitchAxisPosition(),x:{show:i.getVisible(),type:function(){switch(e.getXAxisType()){case o.AxisType.Time:return"timeseries";case o.AxisType.Indexed:return"indexed";case o.AxisType.Category:default:return"category"}}(),categories:this.getXAxisType()===o.AxisType.Category?i.getLabels().map(function(e){return e.getValue()}):void 0,max:this.getMaxValueByAxis(i),min:this.getMinValueByAxis(i),tick:{centered:!1,values:i.getLabels().length>0?i.getLabels().map(function(t,i){switch(e.getXAxisType()){case o.AxisType.Time:return t.getValue();case o.AxisType.Indexed:return parseInt(t.getValue(),10)||0;case o.AxisType.Category:default:return i}}):null,format:function(){switch(e.getXAxisType()){case o.AxisType.Time:return function(e){return t.getInstance({pattern:"MMM yyyy"}).format(e)};case o.AxisType.Indexed:case o.AxisType.Category:default:return function(t){var i=e.getXAxisLabelByIndex(t),r=""===i.getTitle()?i.getValue():i.getTitle();return i&&i.getVisible()?r:void 0}}}()},label:{text:i.getShowTitle()?i.getTitle():null,position:"outer-center"}},y:{show:r.getVisible(),max:this.getMaxValueByAxis(r)||r.getLabels().filter(function(e){return e.getVisible()}).reduce(function(e,t){return Math.max(void 0===e?-1/0:e,parseInt(t.getValue(),10))},void 0),min:this.getMinValueByAxis(r)||r.getLabels().filter(function(e){return e.getVisible()}).reduce(function(e,t){return Math.min(void 0===e?1/0:e,parseInt(t.getValue(),10))},void 0),padding:{top:this.getMicroMode()?void 0:0,bottom:this.getMicroMode()?void 0:0},default:[r.getMinValue()||r.getLabels().filter(function(e){return e.getVisible()}).reduce(function(e,t){return Math.min(void 0===e?1/0:e,parseInt(t.getValue(),10))},void 0),r.getMaxValue()||r.getLabels().filter(function(e){return e.getVisible()}).reduce(function(e,t){return Math.max(void 0===e?-1/0:e,parseInt(t.getValue(),10))},void 0)],tick:{values:r.getLabels().filter(function(e){return e.getVisible()}).length>0?r.getLabels().filter(function(e){return e.getVisible()}).map(function(e){return parseInt(e.getValue(),10)||0}):null,format:function(e){var t=r.getLabels().filter(function(e){return e.getVisible()}).find(function(t){return parseInt(t.getValue(),10)===e});if(!t)return e;var i=""===t.getTitle()?t.getValue():t.getTitle();return t.getVisible()?i:void 0}},label:{text:r.getShowTitle()?r.getTitle():null,position:"outer-middle"}},y2:{show:a.getVisible(),max:this.getMaxValueByAxis(a)||a.getLabels().reduce(function(e,t){return Math.max(void 0===e?-1/0:e,parseInt(t.getValue(),10))},void 0),min:this.getMinValueByAxis(a)||a.getLabels().reduce(function(e,t){return Math.min(void 0===e?1/0:e,parseInt(t.getValue(),10))},void 0),padding:{top:0,bottom:0},default:[a.getMinValue()||a.getLabels().filter(function(e){return e.getVisible()}).reduce(function(e,t){return Math.min(void 0===e?1/0:e,parseInt(t.getValue(),10))},void 0),a.getMaxValue()||a.getLabels().filter(function(e){return e.getVisible()}).reduce(function(e,t){return Math.max(void 0===e?-1/0:e,parseInt(t.getValue(),10))},void 0)],tick:{values:a.getLabels().filter(function(e){return e.getVisible()}).length>0?a.getLabels().filter(function(e){return e.getVisible()}).map(function(e){return parseInt(e.getValue(),10)||null}):null,format:function(e){var t=a.getLabels().filter(function(e){return e.getVisible()}).find(function(t){return parseInt(t.getValue(),10)===e});if(!t)return e;var i=""===t.getTitle()?t.getValue():t.getTitle();return t.getVisible()?i:void 0}},label:{text:a.getShowTitle()?a.getTitle():null,position:"outer-middle"}}},grid:{x:{show:i.getShowGridLines(),lines:this.getLines().filter(function(e){return e.getVisible()&&e.getAxis()===o.Axis.X}).map(function(t){return e._mapChartLineToC3Line(t)})},y:{show:r.getShowGridLines(),lines:this.getLines().filter(function(e){return e.getVisible()&&e.getAxis()!==o.Axis.X}).map(function(t){return e._mapChartLineToC3Line(t)})}},regions:this.getAreas().filter(function(e){return e.getVisible()}).map(function(t){return{id:t.getId(),start:t.getStartValue(),end:t.getEndValue(),axis:t.getAxis().toLowerCase(),text:t.getTitle(),class:e.CSS_CLASS_AREA+" "+e.CSS_CLASS_AREA+"-"+t.getId()}}),transition:{duration:175}};this._chart=s.generate(u),d3.selectAll("#"+this.getId()+" g.c3-circles circle.c3-circle").classed(this.CSS_HIGHLIGHT_PULSATE,!1),l.length>0&&l.forEach(function(t){d3.select("#"+e.getId()+" g.c3-circles-"+t.series+" circle.c3-circle-"+t.point).classed(e.CSS_HIGHLIGHT_PULSATE,!0)}),this._updateSeriesStyles(),this._updateLineStyles(),this._updateAreaStyles(),this.getClipZoomOverflow()?this.removeStyleClass(this.CSS_CLASS_NOCLIP):this.addStyleClass(this.CSS_CLASS_NOCLIP),this.getDomRef()&&$(this.getDomRef()).css("background-color",this.getBackgroundColor()),$(window).resize(this._resize.bind(this)),setTimeout(function(){e._resize()},150),setTimeout(function(){e._resize()},1500),this._getChartUpdateHandler().release()},exit:function(){},setDataVisible:function(e){return this._chart&&(e?this._chart.show():this._chart.hide()),this.setProperty("dataVisible",e,!0)},setWidth:function(e){return this.setProperty("width",e,!0),this._chart&&this._chart.resize({width:this.getWidth()}),this},setHeight:function(e){return this.setProperty("height",e,!0),this._chart&&this._chart.resize({height:this.getHeigth()}),this},getWidth:function(){return this._getComputedSize(this.getProperty("width"),"width")},getHeigth:function(){return this._getComputedSize(this.getProperty("height"),"height")},setShowSubchart:function(e){return this.setProperty("showSubchart",e,!1)},setMicroMode:function(e){return e?this.addStyleClass(this.CSS_CLASS_MICRO_MODE):this.removeStyleClass(this.CSS_CLASS_MICRO_MODE),this.setProperty("microMode",e,!1)},setZoomEnabled:function(e){return this._chart&&this._chart.zoom.enable(e),this.setProperty("zoomEnabled",e,!0)},setClipZoomOverflow:function(e){return e?this.removeStyleClass(this.CSS_CLASS_NOCLIP):this.addStyleClass(this.CSS_CLASS_NOCLIP),this.setProperty("clipZoomOverflow",e,!0)},setShowDataPoints:function(e){return e?this.removeStyleClass(this.CSS_CLASS_NO_POINTS):this.addStyleClass(this.CSS_CLASS_NO_POINTS),this.setProperty("showDataPoints",e,!0)},setBackgroundColor:function(e){return this.getDomRef()&&$(this.getDomRef()).css("background-color",e),this.setProperty("backgroundColor",e,!0)},setLegendPosition:function(e){return this.setProperty("legendPosition",e,!1)},setShowLegend:function(e){return this._chart&&(e?this._chart.legend.show():this._chart.legend.hide()),this.setProperty("showLegend",e,!0)},setShowTooltip:function(e){return this.setProperty("showTooltip",e,!1)},setGroupedTooltip:function(e){return this.setProperty("groupedTooltip",e,!1)},setSwitchAxisPosition:function(e){return this.setProperty("switchAxisPosition",e,!1)},setXAxisType:function(e){return this.setProperty("xAxisType",e,!1)},getXAxis:function(){var e=void 0;return(e=this.getAggregation("xAxis"))||(e=new i,this.setAggregation("xAxis",e,!0)),e},getYAxis:function(){var e=void 0;return(e=this.getAggregation("yAxis"))||(e=new i,this.setAggregation("yAxis",e,!0)),e},getY2Axis:function(){var e=void 0;return(e=this.getAggregation("y2Axis"))||(e=new i({visible:!1}),this.setAggregation("y2Axis",e,!0)),e},setAggregation:function(t,i,r){var a=this;if(i)switch(t){case"xAxis":i.setProperty("_axisType",o.Axis.X,!0);break;case"yAxis":i.setProperty("_axisType",o.Axis.Y,!0);break;case"y2Axis":i.setProperty("_axisType",o.Axis.Y2,!0)}return["xAxis","yAxis","y2Axis"].includes(t)?(e.prototype.setAggregation.call(this,t,i,!1),i&&i.attachAxisUpdate(function(e){return a._onDataUpdateByCode(e.getParameter("code"))})):e.prototype.setAggregation.call(this,t,i,r),this},insertAggregation:function(t,i,r,a){var n=this;if("series"!==t||i.getKey()||i.setKey(this._getNumberRangeCreator().getNext()),["lines","areas"].includes(t))switch(e.prototype.insertAggregation.call(this,t,i,r,!0),t){case"lines":i.attachLineUpdate(function(e){return n._onDataUpdateByCode(e.getParameter("code"))}),this._onDataUpdateByCode(o.ChartUpdateCode.Line);break;case"areas":i.attachAreaUpdate(function(e){return n._onDataUpdateByCode(e.getParameter("code"))}),this._onDataUpdateByCode(o.ChartUpdateCode.Area)}else e.prototype.insertAggregation.call(this,t,i,r,a);return this},addAggregation:function(t,i,r){var a=this;if("series"!==t||i.getKey()||i.setKey(this._getNumberRangeCreator().getNext()),["lines","areas"].includes(t))switch(e.prototype.addAggregation.call(this,t,i,!0),t){case"lines":i.attachLineUpdate(function(e){return a._onDataUpdateByCode(e.getParameter("code"))}),this._onDataUpdateByCode(o.ChartUpdateCode.Line);break;case"areas":i.attachAreaUpdate(function(e){return a._onDataUpdateByCode(e.getParameter("code"))}),this._onDataUpdateByCode(o.ChartUpdateCode.Area)}else e.prototype.addAggregation.call(this,t,i,r);return this},removeAggregation:function(t,i,r){if(["series","lines","areas"].includes(t))switch(e.prototype.removeAggregation.call(this,t,i,!0),t){case"series":this._onDataUpdateByCode(o.ChartUpdateCode.DataPoint);break;case"lines":this._onDataUpdateByCode(o.ChartUpdateCode.Line);break;case"areas":this._onDataUpdateByCode(o.ChartUpdateCode.Area)}else e.prototype.removeAggregation.call(this,t,i,r);return this},removeAllAggregation:function(t,i){if(["series","lines","areas"].includes(t))switch(e.prototype.removeAllAggregation.call(this,t,!0),t){case"series":this._onDataUpdateByCode(o.ChartUpdateCode.DataPoint);break;case"lines":this._onDataUpdateByCode(o.ChartUpdateCode.Line);break;case"areas":this._onDataUpdateByCode(o.ChartUpdateCode.Area)}else e.prototype.removeAllAggregation.call(this,t,i);return this},destroyAggregation:function(t,i){if(["series","lines","areas"].includes(t))switch(e.prototype.destroyAggregation.call(this,t,!0),t){case"series":this._onDataUpdateByCode(o.ChartUpdateCode.DataPoint);break;case"lines":this._onDataUpdateByCode(o.ChartUpdateCode.Line);break;case"areas":this._onDataUpdateByCode(o.ChartUpdateCode.Area)}else e.prototype.destroyAggregation.call(this,t,i);return this},setModel:function(){return this._getChartUpdateHandler().halt(),e.prototype.setModel.apply(this,arguments),this._getChartUpdateHandler().release(),this._onDataUpdateByCode(),this},getXAxisLabelByIndex:function(e){var t=this.getXAxis(),i=this.getXAxisType(),a=t.getLabels();return(i===o.AxisType.Indexed?a.find(function(t){return parseInt(t.getValue(),10)===e}):a[e])||new r({visible:!1})},getXAxisIndexByValue:function(e){var t=this.getXAxis(),i=this.getXAxisType(),r=t.getLabels()||[],a=r.length;if(i===o.AxisType.Indexed)return parseInt(e,10)||null;for(var n=0;n<a;n++)if(r[n].getValue()===e)return n;return null},getMinValueByAxis:function(e){var t=this.getXAxisType(),i=e.getProperty("_axisType")===o.Axis.X,r=e.getMinValue()||void 0;if(i)switch(t){case o.AxisType.Time:return r;case o.AxisType.Indexed:case o.AxisType.Category:default:return parseInt(r,10)||void 0}return parseInt(r,10)||void 0},getMaxValueByAxis:function(e){var t=this.getXAxisType(),i=e.getProperty("_axisType")===o.Axis.X,r=e.getMaxValue()||void 0;if(i)switch(t){case o.AxisType.Time:return r;case o.AxisType.Indexed:case o.AxisType.Category:default:return parseInt(r,10)||void 0}return parseInt(r,10)||void 0},_onDataUpdateByCode:function(e){if(!this._getChartUpdateHandler().isHalted())if(this._chart)switch(e){case o.ChartUpdateCode.Line:this._debounceUpdateChartLines(),this.fireChartDataUpdate();break;case o.ChartUpdateCode.Area:this._debounceUpdateChartAreas(),this.fireChartDataUpdate();break;default:this._debounceUpdate(),this.fireChartDataUpdate()}else this.rerender()},_onDataUpdate:function(){var t=this,i=this.getSeries(),r=i.map(function(e){return e.getKey()}),a=r.filter(function(e){return!1===t._chart.data().map(function(e){return e.id}).every(function(t){return t===e})}),n=this._chart.data().map(function(e){return e.id}).filter(function(e){return!1===r.some(function(t){return t===e})}),s=[],l=this.getXAxis(),u=this.getYAxis(),g=this.getY2Axis();a.length>0||n.length>0?this.rerender():(e.prototype.setProperty.call(l,"visible",!this.getMicroMode(),!0),e.prototype.setProperty.call(u,"visible",!this.getMicroMode(),!0),e.prototype.setProperty.call(g,"visible",!this.getMicroMode(),!0),this._chart.unload(n),this._chart.load({x:"x",columns:[["x"].concat(_toConsumableArray(l.getLabels().map(function(e){return e.getValue()})))].concat(_toConsumableArray(i.map(function(e){return[e.getKey()].concat(_toConsumableArray(e.getData().map(function(t,i){return t.getVisible()&&t.getHighlightAnimation()!==o.DataPointAnimation.None&&s.push({series:e.getKey(),point:i,animation:t.getHighlightAnimation()}),t.getValueOrValuePair()})))}))),axes:0===i.length?[]:i.reduce(function(e,t){return e[t.getKey()]=t.getYAxis().toLowerCase(),e},{}),types:0===i.length?[]:i.reduce(function(e,t){return e[t.getKey()]=t.getType(),e},{}),names:0===i.length?[]:i.reduce(function(e,t){return e[t.getKey()]=t.getName()||t.getKey(),e},{}),colors:0===i.length?[]:i.reduce(function(e,t){return t.getColor()&&(e[t.getKey()]=t.getColor()),e},{})}),d3.selectAll("#"+this.getId()+" g.c3-circles circle.c3-circle").classed(this.CSS_HIGHLIGHT_PULSATE,!1),s.length>0&&s.forEach(function(e){d3.select("#"+t.getId()+" g.c3-circles-"+e.series+" circle.c3-circle-"+e.point).classed(t.CSS_HIGHLIGHT_PULSATE,!0)}),this._chart.groups(0===i.length?[]:i.reduce(function(e,t){return t&&t.getGroupKey()&&!e.includes(t.getGroupKey())&&e.push(t.getGroupKey()),e},[]).map(function(e){return i.filter(function(t){return t.getGroupKey()===e}).map(function(e){return e.getKey()})})),this._updateSeriesStyles(),this._chart.axis.labels({x:l.getShowTitle()?l.getTitle():null,y:u.getShowTitle()?u.getTitle():null,y2:g.getShowTitle()?g.getTitle():null}),this._chart.axis.showX(l.getVisible()),this._chart.axis.showY(u.getVisible()),this._chart.axis.showY2(g.getVisible()),this._chart.axis.range({min:{X:this.getMinValueByAxis(l),y:this.getMinValueByAxis(u)||u.getLabels().filter(function(e){return e.getVisible()}).reduce(function(e,t){return Math.min(void 0===e?1/0:e,parseInt(t.getValue(),10))},void 0),y2:this.getMinValueByAxis(g)||g.getLabels().filter(function(e){return e.getVisible()}).reduce(function(e,t){return Math.min(void 0===e?1/0:e,parseInt(t.getValue(),10))},void 0)},max:{x:this.getMaxValueByAxis(l),y:this.getMaxValueByAxis(u)||u.getLabels().filter(function(e){return e.getVisible()}).reduce(function(e,t){return Math.max(void 0===e?-1/0:e,parseInt(t.getValue(),10))},void 0),y2:this.getMaxValueByAxis(g)||g.getLabels().filter(function(e){return e.getVisible()}).reduce(function(e,t){return Math.max(void 0===e?-1/0:e,parseInt(t.getValue(),10))},void 0)}}),this.fireChartDataUpdate())},_updateChartLines:function(){var e=this,t=[].concat(this._chart.xgrids()),i=[].concat(this._chart.ygrids()),r=this.getLines().filter(function(e){return e.getVisible()&&e.getAxis()===o.Axis.X}).map(function(t){return e._mapChartLineToC3Line(t)}),a=this.getLines().filter(function(e){return e.getVisible()&&e.getAxis()!==o.Axis.X}).map(function(t){return e._mapChartLineToC3Line(t)});if(r.filter(function(e){var i=t.find(function(t){return t.id===e.id});return i&&!1===n(e,i)}).length>0)this._chart.xgrids(r);else{t.filter(function(e){return r.every(function(t){return t.id!==e.id})}).forEach(function(t){e._chart.xgrids.remove({class:t.class})});var s=r.filter(function(e){return t.every(function(t){return t.id!==e.id})});s.length>0&&this._chart.xgrids.add(s)}if(a.filter(function(e){var t=i.find(function(t){return t.id===e.id});return t&&!1===n(e,t)}).length>0)this._chart.ygrids(a);else{i.filter(function(e){return a.every(function(t){return t.id!==e.id})}).forEach(function(t){e._chart.ygrids.remove({class:t.class})});var l=a.filter(function(e){return i.every(function(t){return t.id!==e.id})});l.length>0&&this._chart.ygrids.add(l)}this._updateLineStyles()},_updateChartAreas:function(){var e=this,t=this._chart.regions()||[],i=Array.isArray(t)?t:[t],r=this.getAreas().filter(function(e){return e.getVisible()}).map(function(t){return{id:t.getId(),start:t.getStartValue(),end:t.getEndValue(),axis:t.getAxis().toLowerCase(),text:t.getTitle(),class:e.CSS_CLASS_AREA+" "+e.CSS_CLASS_AREA+"-"+t.getId()}}),a=i.filter(function(e){return r.every(function(t){return t.id!==e.id})}).map(function(t){return e.CSS_CLASS_AREA+"-"+t.id});a.length>0&&this._chart.regions.remove({classes:a});var s=r.filter(function(e){return i.every(function(t){return t.id!==e.id})});s.length>0&&this._chart.regions.add(s);var o=r.filter(function(e){var t=i.find(function(t){return t.id===e.id});return t&&!1===n(e,t)});o.length>0&&this._chart.regions(o),this._updateAreaStyles()},_mapChartLineToC3Line:function(e){var t=e.getShowLineSelector()?this.CSS_CLASS_LINE_SHOWSELECTOR:"",i=e.getSelectorIconOnly()?this.CSS_CLASS_LINE_ICONONLY:"";return{id:e.getId(),value:e.getValue(),axis:e.getAxis().toLowerCase(),text:e.getTitle(),position:e.getTitlePosition().toLowerCase(),showSelector:!!e.getShowLineSelector(),class:this.CSS_CLASS_LINE+" "+this.CSS_CLASS_LINE+"-"+e.getStyle()+" "+this.CSS_CLASS_LINE+"-"+e.getId()+" "+t+" "+i}},_onSeriesVisibilityUpdate:function(e){var t=e.getParameter("chartSeries");t.getVisible()?this._chart.show(t.getKey(),{withLegend:!0}):this._chart.hide(t.getKey(),{withLegend:!0})},_updateSeriesStyles:function(){var e=this;this.getSeries().forEach(function(t){var i=void 0,r=void 0;switch(e._isShapeType(t.getType())?t.getShapeStyle():o.ShapeStyle.Solid){case o.ShapeStyle.Striped:r=e._chart.data.colors()[t.getKey()],d3.select("#"+e.getId()+" defs #"+e.getId()+"-stripe-pattern-"+t.getKey()).empty()&&d3.select("#"+e.getId()+" defs").append("pattern").attr({id:e.getId()+"-stripe-pattern-"+t.getKey(),width:"8",height:"8",patternUnits:"userSpaceOnUse",class:"stripe-pattern-"+t.getKey()}).append("path").attr({d:"M1,0L5,0L0,5L0,1L1,0 M8,1L8,5L5,8L1,8L8,1"}),(i=d3.select("#"+e.getId()+" defs #"+e.getId()+"-stripe-style-"+t.getKey())).empty()&&(i=d3.select("#"+e.getId()+" defs").append("style").attr({id:e.getId()+"-stripe-style-"+t.getKey(),type:"text/css"})),i.text("#"+e.getId()+" .stripe-pattern-"+t.getKey()+" path {\n                                    fill: "+r+";\n                                    stroke: none;\n                                }\n                                #"+e.getId()+" .c3-target-"+t.getKey()+" .c3-shape {\n                                    fill: url(#"+e.getId()+"-stripe-pattern-"+t.getKey()+") !important;\n                                }");break;case o.ShapeStyle.Solid:default:(i=d3.select("#"+e.getId()+" defs #"+e.getId()+"-stripe-style-"+t.getKey())).empty()||i.text("")}}),this.getSeries().forEach(function(t){var i=void 0,r=void 0,a=e._isLineType(t.getType())?t.getLineStyle():o.LineStyle.Solid,n=void 0;switch(t.getLineAnimationSpeed()){case o.AnimationSpeed.Fast:n=20;break;case o.AnimationSpeed.Medium:n=50;break;case o.AnimationSpeed.Slow:n=150;break;case o.AnimationSpeed.None:default:n=0}switch(a){case o.LineStyle.Dashed:case o.LineStyle.Dotted:r="dotted"===t.getLineStyle()?"1 5":"5",(i=d3.select("#"+e.getId()+" defs #"+e.getId()+"-dashdot-style-"+t.getKey())).empty()&&(i=d3.select("#"+e.getId()+" defs").append("style").attr({id:e.getId()+"-dashdot-style-"+t.getKey(),type:"text/css"})),i.text("#"+e.getId()+" .c3-target-"+t.getKey()+" .c3-shape {\n                                    stroke-dashoffset: "+(t.getLineAnimationForwards()?"":"-")+"50rem;\n                                    stroke-dasharray: "+r+";\n                                    stroke-linecap: round;\n\n                                    -webkit-animation: ui5-viz-chart-dash-animation "+n+"s 0s linear infinite forwards;\n                                    -moz-animation: ui5-viz-chart-dash-animation "+n+"s 0s linear infinite forwards;\n                                    -ms-animation: ui5-viz-chart-dash-animation "+n+"s 0s linear infinite forwards;\n                                    -o-animation: ui5-viz-chart-dash-animation "+n+"s 0s linear infinite forwards;\n                                    animation: ui5-viz-chart-dash-animation "+n+"s 0s linear infinite forwards;\n                                }");break;case o.LineStyle.Solid:default:(i=d3.select("#"+e.getId()+" defs #"+e.getId()+"-dashdot-style-"+t.getKey())).empty()||i.text("")}})},_updateLineStyles:function(){var e=this,t="",i=d3.select("#"+this.getId()+" defs #"+this.getId()+"-line-style");i.empty()&&(i=d3.select("#"+this.getId()+" defs").append("style").attr({id:this.getId()+"-line-style",type:"text/css"})),this.getLines().forEach(function(i){var r=i.getColor();r&&(t+="#"+e.getId()+" ."+e.CSS_CLASS_LINE+"-"+i.getId()+" line {\n                                stroke: "+r+";\n                            }\n\n                            #"+e.getId()+" ."+e.CSS_CLASS_LINE+"-"+i.getId()+" circle {\n                                stroke: "+r+";\n                            }\n\n                            #"+e.getId()+" ."+e.CSS_CLASS_LINE+"-"+i.getId()+" text {\n                                fill: "+r+";\n                            }");var a=d3.select("#"+e.getId()+" .ui5-viz-chart-line-"+i.getId()),n=sap.ui.core.IconPool.getIconInfo(i.getLineSelectorIcon());i.getShowLineSelector()?(a.select(".c3-grid-lines-circle-text").attr("font-family",n.fontFamily).text(n.content),a.select(".c3-grid-lines-circle-hover").on("click",function(){i.fireSelectorPress({line:i,selectorDomRef:this.previousSibling})})):a.select(".c3-grid-lines-circle-hover").on("click",function(){})}),i.text(t)},_updateAreaStyles:function(){var e=this,t="",i=d3.select("#"+this.getId()+" defs #"+this.getId()+"-area-style");i.empty()&&(i=d3.select("#"+this.getId()+" defs").append("style").attr({id:this.getId()+"-area-style",type:"text/css"})),this.getAreas().forEach(function(i){var r=i.getColor()||"#000000";switch(i.getStyle()){case o.ShapeStyle.Striped:d3.select("#"+e.getId()+" defs #"+e.getId()+"-area-stripe-pattern-"+i.getId()).empty()&&d3.select("#"+e.getId()+" defs").append("pattern").attr({id:e.getId()+"-area-stripe-pattern-"+i.getId(),width:"8",height:"8",patternUnits:"userSpaceOnUse",class:"area-stripe-pattern-"+i.getId()}).append("path").attr({d:"M1,0L5,0L0,5L0,1L1,0 M8,1L8,5L5,8L1,8L8,1"}),t+="#"+e.getId()+" .area-stripe-pattern-"+i.getId()+" path {\n                                    fill: "+r+";\n                                    stroke: none;\n                                }\n                                #"+e.getId()+" ."+e.CSS_CLASS_AREA+"-"+i.getId()+" rect.c3-region-stripe,\n                                #"+e.getId()+" ."+e.CSS_CLASS_AREA+"-"+i.getId()+" text.c3-region-text {\n                                    fill: "+r+";\n                                }\n                                #"+e.getId()+" ."+e.CSS_CLASS_AREA+"-"+i.getId()+" rect.c3-region-area {\n                                    fill: url(#"+e.getId()+"-area-stripe-pattern-"+i.getId()+") !important;\n                                }";break;case o.ShapeStyle.Solid:default:t+="#"+e.getId()+" ."+e.CSS_CLASS_AREA+"-"+i.getId()+" rect.c3-region-stripe,\n                                #"+e.getId()+" ."+e.CSS_CLASS_AREA+"-"+i.getId()+" text.c3-region-text {\n                                    fill: "+r+";\n                                }\n                                #"+e.getId()+" ."+e.CSS_CLASS_AREA+"-"+i.getId()+" rect.c3-region-area {\n                                    fill: "+r+";\n                                }"}}),i.text(t)},_isShapeType:function(e){var t=!1;switch(e){case o.ChartSeriesType.Bar:t=!0;break;default:t=!1}return t},_isLineType:function(e){var t=!1;switch(e){case o.ChartSeriesType.Line:case o.ChartSeriesType.Spline:case o.ChartSeriesType.Step:case o.ChartSeriesType.AreaLine:case o.ChartSeriesType.AreaSpline:case o.ChartSeriesType.AreaStep:case o.ChartSeriesType.RibbonLine:case o.ChartSeriesType.RibbonSpline:case o.ChartSeriesType.RibbonStep:t=!0;break;default:t=!1}return t},_isRibbonType:function(e){return e===(o.ChartSeriesType.RibbonLine||o.ChartSeriesType.RibbonSpline||o.ChartSeriesType.RibbonStep)},_getAvailableSize:function(e){var t=0;return e="width"===e||"height"===e?e:"width",this.getDomRef()&&("width"===e?(t+=parseInt(getComputedStyle(this.getDomRef(),"").marginLeft.match(/(\d*(\.\d*)?)/,10)[1])||0,t+=parseInt(getComputedStyle(this.getDomRef(),"").marginRight.match(/(\d*(\.\d*)?)/,10)[1])||0):(t+=parseInt(getComputedStyle(this.getDomRef(),"").marginTop.match(/(\d*(\.\d*)?)/,10)[1])||0,t+=parseInt(getComputedStyle(this.getDomRef(),"").marginBottom.match(/(\d*(\.\d*)?)/,10)[1])||0)),$(this._getParentDomRef())[e]()-t},_getComputedSize:function(e,t){e=e||"auto",t="width"===t||"height"===t?t:"width";var i,r=o.parseCSSSize(e),a=1;switch(r.unit){case"rem":i=parseInt(getComputedStyle(document.body,"").fontSize.match(/(\d*(\.\d*)?)/,10)[1])||0;break;case"em":i=parseInt(getComputedStyle(this._getParentDomRef(),"").fontSize.match(/(\d*(\.\d*)?)/,10)[1])||0;break;case"px":i=r.value&&r.value>0?r.value:this._getAvailableSize(t);break;case"vw":a=(r.value&&r.value>0?r.value:100)/100,i=this._getAvailableSize("width")*a;break;case"vh":a=(r.value&&r.value>0?r.value:100)/100,i=this._getAvailableSize("height")*a;break;case"%":a=(r.value&&r.value>0?r.value:100)/100,i=this._getAvailableSize(t)*a;break;case"initial":case"inherit":case"auto":i=this._getAvailableSize(t);break;default:jQuery.sap.log.warning("CSS unit "+r.unit+' is not supported, yet. Fallback to "auto" (max. width).'),i=this._getAvailableSize(t)}return i},_resize:function(){return this._chart&&this._chart.resize({width:this.getWidth(),height:this.getHeigth()}),this},_getParentDomRef:function(){var e=this.getDomRef()?this.getDomRef().parentNode:document.body;return e||document.body}})},!0);