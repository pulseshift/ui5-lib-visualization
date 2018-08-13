"use strict";sap.ui.define(["sap/ui/thirdparty/d3"],function(){return sap.ui.getCore().initLibrary({name:"ui5.viz",version:"1.0.0",dependencies:[],types:["any","boolean","float","int","object","string","ui5.viz.ChartLegendPosition","ui5.viz.ChartTitlePosition","ui5.viz.ChartSeriesType","ui5.viz.DataPointType","ui5.viz.LineStyle","ui5.viz.ShapeStyle","ui5.viz.AnimationSpeed","ui5.viz.AxisType","ui5.viz.DataPointAnimation","ui5.viz.ColorPalette"],interfaces:[],controls:["ui5.viz.Chart","ui5.viz.ChartSeries","ui5.viz.ChartDataPoint","ui5.viz.ChartLine","ui5.viz.ChartArea","ui5.viz.ChartAxis","ui5.viz.ChartAxisLabel","ui5.viz.Color"],elements:[]}),ui5.viz.ChartLegendPosition={Right:"Right",Bottom:"Bottom"},ui5.viz.ChartTitlePosition={Start:"Start",Middle:"Middle",End:"End"},ui5.viz.ChartSeriesType={Spline:"spline",Line:"line",Bar:"bar",Step:"step",AreaLine:"area",AreaSpline:"area-spline",AreaStep:"area-step",RibbonLine:"ribbon-line",RibbonStep:"ribbon-step",RibbonSpline:"ribbon-spline"},ui5.viz.DataPointType={SingleValue:"SingleValue",ValuePair:"ValuePair"},ui5.viz.LineStyle={Solid:"Solid",Dashed:"Dashed",Dotted:"Dotted"},ui5.viz.ShapeStyle={Solid:"Solid",Striped:"Striped"},ui5.viz.AnimationSpeed={None:"None",Slow:"Slow",Medium:"Medium",Fast:"Fast"},ui5.viz.Axis={Y:"Y",Y2:"Y2",X:"X",Z:"Z"},ui5.viz.AxisType={Indexed:"Indexed",Category:"Category",Time:"Time"},ui5.viz.DataPointAnimation={None:"None",Pulsate:"Pulsate"},ui5.viz.ColorPalette={custom:null,Material500:["#2196F3","#4CAF50","#FF9800","#E91E63","#00BCD4","#FFEB3B","#673AB7","#009688","#FFC107","#03A9F4","#CDDC39","#9C27B0","#D32F2F","#3F51B5","#8BC34A","#FF5722"],Material500S:["#2196F3","#03A9F4","#00BCD4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#D32F2F","#E91E63","#9C27B0","#673AB7","#3F51B5"],Material300:["#64B5F6","#81C784","#FFB74D","#F06292","#4DD0E1","#FFF176","#9575CD","#4DB6AC","#FFD54F","#4FC3F7","#DCE775","#BA68C8","#E57373","#7986CB","#AED581","#FF8A65"],Material300S:["#64B5F6","#4FC3F7","#4DD0E1","#4DB6AC","#81C784","#AED581","#DCE775","#FFF176","#FFD54F","#FFB74D","#FF8A65","#E57373","#F06292","#BA68C8","#9575CD","#7986CB"]},ui5.viz.hexToRgba=function(i){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,e=t>=0&&t<=1?t:1,n=ui5.viz.hexToRgbObject(i);return"rgba("+n.r+","+n.g+","+n.b+","+e+")"},ui5.viz.hexToRgb=function(i){var t=ui5.viz.hexToRgbObject(i);return"rgb("+t.r+","+t.g+","+t.b+")"},ui5.viz.lightenHexColor=function(i){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=ui5.viz.hexToRgbObject(i),n=e.r,r=e.g,a=e.b,o=parseInt(n*(100+t)/100),u=parseInt(r*(100+t)/100),l=parseInt(a*(100+t)/100),v=o<255?o:255,F=u<255?u:255,g=l<255?l:255;return"#"+(1==v.toString(16).length?"0"+v.toString(16):v.toString(16))+(1==F.toString(16).length?"0"+F.toString(16):F.toString(16))+(1==g.toString(16).length?"0"+g.toString(16):g.toString(16))},ui5.viz.darkenHexColor=function(i){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=ui5.viz.hexToRgbObject(i),n=e.r,r=e.g,a=e.b,o=parseInt(n*(100-t)/100),u=parseInt(r*(100-t)/100),l=parseInt(a*(100-t)/100),v=o<255?o:255,F=u<255?u:255,g=l<255?l:255;return"#"+(1==v.toString(16).length?"0"+v.toString(16):v.toString(16))+(1==F.toString(16).length?"0"+F.toString(16):F.toString(16))+(1==g.toString(16).length?"0"+g.toString(16):g.toString(16))},ui5.viz.hexToBWContrastColor=function(i){var t=ui5.viz.hexToRgbObject(i);return Math.round((299*parseInt(t.r,10)+587*parseInt(t.g,10)+114*parseInt(t.b,10))/1e3)>125?"#000000":"#ffffff"},ui5.viz.hexToRgbObject=function(i){var t=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;i=i.replace(t,function(i,t,e,n){return t+t+e+e+n+n});var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(i);return e?{r:parseInt(e[1],16),g:parseInt(e[2],16),b:parseInt(e[3],16)}:{r:0,g:0,b:0}},ui5.viz.setDefaultColorPalette=function(i){ui5.viz.ColorPalette.custom=Array.isArray(i)?i:null},ui5.viz.parseCSSSize=function(i){var t=i.match(/^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/i)||[];return{value:parseFloat(i,10),unit:t[2]?t[2].toLowerCase():"px"}},ui5.viz.ChartUpdateCode={DataPoint:"DataPoint",Line:"Line",Area:"Area"},ui5.viz.toValidHtmlID=function(i){return i.replace(/(^\d*)|\s/g,"_").replace(/\W/g,"x")},ui5.viz});