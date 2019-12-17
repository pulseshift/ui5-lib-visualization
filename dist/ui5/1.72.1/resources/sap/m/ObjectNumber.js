/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./library","sap/ui/core/Control","sap/ui/core/Renderer","sap/ui/core/library","./ObjectNumberRenderer"],function(e,t,r,a,i){"use strict";var u=a.TextAlign;var p=a.TextDirection;var n=a.ValueState;var s=t.extend("sap.m.ObjectNumber",{metadata:{interfaces:["sap.ui.core.IFormContent"],library:"sap.m",designtime:"sap/m/designtime/ObjectNumber.designtime",properties:{number:{type:"string",group:"Misc",defaultValue:null},numberUnit:{type:"string",group:"Misc",defaultValue:null,deprecated:true},emphasized:{type:"boolean",group:"Appearance",defaultValue:true},state:{type:"sap.ui.core.ValueState",group:"Misc",defaultValue:n.None},unit:{type:"string",group:"Misc",defaultValue:null},textDirection:{type:"sap.ui.core.TextDirection",group:"Appearance",defaultValue:p.Inherit},textAlign:{type:"sap.ui.core.TextAlign",group:"Appearance",defaultValue:u.Begin}},associations:{ariaDescribedBy:{type:"sap.ui.core.Control",multiple:true,singularName:"ariaDescribedBy"}},dnd:{draggable:true,droppable:false}}});s.prototype._getStateText=function(){var e=this.getState(),t=sap.ui.getCore().getLibraryResourceBundle("sap.m");return t.getText("OBJECTNUMBER_ARIA_VALUE_STATE_"+e.toUpperCase(),[],true)};return s});