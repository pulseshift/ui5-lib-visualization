"use strict";sap.ui.define(["sap/ui/core/Element","./library"],function(o,p){return o.extend("ui5.viz.ChartSeries",{metadata:{library:"ui5.viz",properties:{type:{type:"ui5.viz.ChartSeriesType",group:"Appearance",defaultValue:p.ChartSeriesType.Spline},name:{type:"string",group:"Appearance",defaultValue:null},color:{type:"sap.ui.core.CSSColor",group:"Appearance",defaultValue:null},showLabels:{type:"boolean",group:"Appearance",defaultValue:!1},lineStyle:{type:"ui5.viz.LineStyle",group:"Appearance",defaultValue:p.LineStyle.Solid},shapeStyle:{type:"ui5.viz.ShapeStyle",group:"Appearance",defaultValue:p.ShapeStyle.Solid},lineAnimationSpeed:{type:"ui5.viz.AnimationSpeed",group:"Appearance",defaultValue:p.AnimationSpeed.None},lineAnimationForwards:{type:"boolean",group:"Appearance",defaultValue:!0},groupKey:{type:"string",group:"Appearance",defaultValue:null},yAxis:{type:"ui5.viz.Axis",group:"Appearance",defaultValue:p.Axis.Y},visible:{type:"boolean",group:"Appereance",defaultValue:!0},key:{type:"string",group:"Data",defaultValue:null}},aggregations:{data:{type:"ui5.viz.ChartDataPoint",multiple:!0}},defaultAggregation:"data",associations:{},events:{seriesDataUpdate:{parameters:{code:{type:"ui5.viz.ChartUpdateCode"}}},seriesVisibilityChange:{parameters:{chartSeries:{type:"ui5.viz.ChartSeries"}}}}},constructor:function(){o.prototype.constructor.apply(this,arguments)},init:function(){},exit:function(){this.fireSeriesDataUpdate({code:p.ChartUpdateCode.DataPoint})},getKey:function(){var e=this.getProperty("key");return p.toValidHtmlID(e)},insertAggregation:function(e,t,a,i){var r=this;return"data"===e?(o.prototype.insertAggregation.call(this,e,t,!0),t.attachDataPointUpdate(function(){r.fireSeriesDataUpdate({code:p.ChartUpdateCode.DataPoint})}),this.fireSeriesDataUpdate({code:p.ChartUpdateCode.DataPoint})):o.prototype.insertAggregation.call(this,e,t,a,i),this},addAggregation:function(e,t,a){var i=this;return"data"===e?(o.prototype.addAggregation.call(this,e,t,!0),t.attachDataPointUpdate(function(){i.fireSeriesDataUpdate({code:p.ChartUpdateCode.DataPoint})}),this.fireSeriesDataUpdate({code:p.ChartUpdateCode.DataPoint})):o.prototype.addAggregation.call(this,e,t,a),this},removeAggregation:function(e,t,a){var i=this;return"data"===e?(o.prototype.removeAggregation.call(this,e,t,!0),t.attachDataPointUpdate(function(){i.fireSeriesDataUpdate({code:p.ChartUpdateCode.DataPoint})}),this.fireSeriesDataUpdate({code:p.ChartUpdateCode.DataPoint})):o.prototype.removeAggregation.call(this,e,t,a),this},updateAggregation:function(e,t,a){return o.prototype.updateAggregation.call(this,e,t,a),this.fireSeriesDataUpdate({code:p.ChartUpdateCode.DataPoint}),this},removeAllAggregation:function(e,t){return"data"===e?(o.prototype.removeAllAggregation.call(this,e,!0),this.fireSeriesDataUpdate({code:p.ChartUpdateCode.DataPoint})):o.prototype.removeAllAggregation.call(this,e,t),this},destroyAggregation:function(e,t){return"data"===e?(o.prototype.destroyAggregation.call(this,e,!0),this.fireSeriesDataUpdate({code:p.ChartUpdateCode.DataPoint})):o.prototype.destroyAggregation.call(this,e,t),this},setProperty:function(e,t,a){return["type","name","color","showLabels","groupKey","visible","yAxis","lineStyle","shapeStyle","lineAnimationSpeed","lineAnimationForwards"].includes(e)?(o.prototype.setProperty.call(this,e,t,!0),this.fireSeriesDataUpdate()):"visible"===e?(o.prototype.setProperty.call(this,e,t,!0),this.fireSeriesVisibilityChange({chartSeries:this})):o.prototype.setProperty.call(this,e,t,a),this}})},!0);