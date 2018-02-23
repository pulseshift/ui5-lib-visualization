"use strict";sap.ui.define(["sap/ui/core/Element","./library"],function(e,t){return e.extend("ui5.viz.ChartSeries",{metadata:{library:"ui5.viz",properties:{type:{type:"ui5.viz.ChartSeriesType",group:"Appearance",defaultValue:t.ChartSeriesType.Spline},name:{type:"string",group:"Appearance",defaultValue:null},color:{type:"sap.ui.core.CSSColor",group:"Appearance",defaultValue:null},showLabels:{type:"boolean",group:"Appearance",defaultValue:!1},lineStyle:{type:"ui5.viz.LineStyle",group:"Appearance",defaultValue:t.LineStyle.Default},shapeStyle:{type:"ui5.viz.ShapeStyle",group:"Appearance",defaultValue:t.ShapeStyle.Default},lineAnimationSpeed:{type:"ui5.viz.AnimationSpeed",group:"Appearance",defaultValue:t.AnimationSpeed.None},lineAnimationForwards:{type:"boolean",group:"Appearance",defaultValue:!0},groupKey:{type:"string",group:"Appearance",defaultValue:null},yAxis:{type:"ui5.viz.Axis",group:"Appearance",defaultValue:t.Axis.Y},visible:{type:"boolean",group:"Appereance",defaultValue:!0},key:{type:"string",group:"Data",defaultValue:null}},aggregations:{data:{type:"ui5.viz.ChartDataPoint",multiple:!0}},defaultAggregation:"data",associations:{},events:{seriesDataUpdate:{parameters:{code:{type:"ui5.viz.ChartUpdateCode"}}},seriesVisibilityChange:{parameters:{chartSeries:{type:"ui5.viz.ChartSeries"}}}}},constructor:function(){e.prototype.constructor.apply(this,arguments)},init:function(){},exit:function(){this.fireSeriesDataUpdate({code:t.ChartUpdateCode.DataPoint})},insertAggregation:function(a,i,r,o){var p=this;return"data"===a?(e.prototype.insertAggregation.call(this,a,i,!0),i.attachDataPointUpdate(function(){p.fireSeriesDataUpdate({code:t.ChartUpdateCode.DataPoint})}),this.fireSeriesDataUpdate({code:t.ChartUpdateCode.DataPoint})):e.prototype.insertAggregation.call(this,a,i,r,o),this},addAggregation:function(a,i,r){var o=this;return"data"===a?(e.prototype.addAggregation.call(this,a,i,!0),i.attachDataPointUpdate(function(){o.fireSeriesDataUpdate({code:t.ChartUpdateCode.DataPoint})}),this.fireSeriesDataUpdate({code:t.ChartUpdateCode.DataPoint})):e.prototype.addAggregation.call(this,a,i,r),this},removeAggregation:function(a,i,r){var o=this;return"data"===a?(e.prototype.removeAggregation.call(this,a,i,!0),i.attachDataPointUpdate(function(){o.fireSeriesDataUpdate({code:t.ChartUpdateCode.DataPoint})}),this.fireSeriesDataUpdate({code:t.ChartUpdateCode.DataPoint})):e.prototype.removeAggregation.call(this,a,i,r),this},removeAllAggregation:function(a,i){return"data"===a?(e.prototype.removeAllAggregation.call(this,a,!0),this.fireSeriesDataUpdate({code:t.ChartUpdateCode.DataPoint})):e.prototype.removeAllAggregation.call(this,a,i),this},destroyAggregation:function(a,i){return"data"===a?(e.prototype.destroyAggregation.call(this,a,!0),this.fireSeriesDataUpdate({code:t.ChartUpdateCode.DataPoint})):e.prototype.destroyAggregation.call(this,a,i),this},setProperty:function(t,a,i){return["type","name","color","showLabels","groupKey","visible","yAxis","lineStyle","shapeStyle","lineAnimationSpeed","lineAnimationForwards"].includes(t)?(e.prototype.setProperty.call(this,t,a,!0),this.fireSeriesDataUpdate()):"visible"===t?(e.prototype.setProperty.call(this,t,a,!0),this.fireSeriesVisibilityChange({chartSeries:this})):e.prototype.setProperty.call(this,t,a,i),this}})},!0);