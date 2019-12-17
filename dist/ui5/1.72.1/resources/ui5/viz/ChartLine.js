sap.ui.define(["sap/ui/core/Element","./library"],function(e,t){"use strict";return e.extend("ui5.viz.ChartLine",{metadata:{library:"ui5.viz",properties:{title:{type:"string",group:"Appereance",defaultValue:null},titlePosition:{type:"ui5.viz.ChartTitlePosition",group:"Appereance",defaultValue:t.ChartTitlePosition.Start},style:{type:"ui5.viz.LineStyle",group:"Appearance",defaultValue:t.LineStyle.Solid},color:{type:"sap.ui.core.CSSColor",group:"Appearance",defaultValue:null},axis:{type:"ui5.viz.Axis",group:"Appearance",defaultValue:t.Axis.Y},showLineSelector:{type:"boolean",group:"Appearance",defaultValue:false},selectorIconOnly:{type:"boolean",group:"Appearance",defaultValue:false},lineSelectorIcon:{type:"sap.ui.core.URI",group:"Appearance",defaultValue:"sap-icon://flag"},visible:{type:"boolean",group:"Appereance",defaultValue:true},value:{type:"string",group:"Data",defaultValue:null}},aggregations:{},associations:{},events:{lineUpdate:{parameters:{code:{type:"ui5.viz.ChartUpdateCode"}}},selectorPress:{parameters:{line:{type:"ui5.viz.ChartLine"},selectorDomRef:{type:"object"}}}}},constructor(){e.prototype.constructor.apply(this,arguments)},init(){},exit(){this.fireLineUpdate({code:t.ChartUpdateCode.Line})},setProperty(a,i,r){if(["title","titlePosition","style","color","axis","value","visible"].includes(a)){e.prototype.setProperty.call(this,a,i,true);this.fireLineUpdate({code:t.ChartUpdateCode.Line})}else{e.prototype.setProperty.call(this,a,i,r)}return this}})},true);