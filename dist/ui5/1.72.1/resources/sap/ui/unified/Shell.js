/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./ShellHeader","./ShellLayout","./library","./ShellRenderer"],function(e,t,r,a){"use strict";var i=t.extend("sap.ui.unified.Shell",{metadata:{library:"sap.ui.unified",properties:{icon:{type:"sap.ui.core.URI",group:"Appearance",defaultValue:null},showCurtain:{type:"boolean",group:"Appearance",defaultValue:null,deprecated:true},showCurtainPane:{type:"boolean",group:"Appearance",defaultValue:null,deprecated:true},searchVisible:{type:"boolean",group:"Appearance",defaultValue:true}},aggregations:{curtainContent:{type:"sap.ui.core.Control",multiple:true,singularName:"curtainContent"},curtainPaneContent:{type:"sap.ui.core.Control",multiple:true,singularName:"curtainPaneContent"},headItems:{type:"sap.ui.unified.ShellHeadItem",multiple:true,singularName:"headItem",forwarding:{idSuffix:"-header",aggregation:"headItems"}},headEndItems:{type:"sap.ui.unified.ShellHeadItem",multiple:true,singularName:"headEndItem",forwarding:{idSuffix:"-header",aggregation:"headEndItems"}},search:{type:"sap.ui.core.Control",multiple:false,forwarding:{idSuffix:"-header",aggregation:"search"}},user:{type:"sap.ui.unified.ShellHeadUserItem",multiple:false,forwarding:{idSuffix:"-header",aggregation:"user"}}}}});i.prototype.init=function(){t.prototype.init.apply(this,arguments);this._header=new e(this.getId()+"-header");this.setHeader(this._header)};i.prototype.exit=function(){t.prototype.exit.apply(this,arguments);this._header.destroy();delete this._header};i.prototype._getSearchWidth=function(){if(this._header===this.getHeader()&&this._header.getDomRef()){var e=this._header.$("hdr-center").children();if(e.length){return e.width()}}return-1};i.prototype.setIcon=function(e){this.setProperty("icon",e,true);this._header.setLogo(e);return this};i.prototype.getIcon=function(){return this._header.getLogo()};i.prototype.setSearchVisible=function(e){this.setProperty("searchVisible",e,true);this._header.setSearchVisible(e);return this};i.prototype.getSearchVisible=function(){return this._header.getSearchVisible()};i.prototype.setHeader=function(e){return t.prototype.setHeader.apply(this,[e?e:this._header])};i.prototype.destroyHeader=function(){if(this.getHeader()===this._header){return this}return t.prototype.destroyHeader.apply(this,[])};return i});