/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/Device","./library","./ListBase","./ListItemBase","./CheckBox","./TableRenderer","sap/base/Log","sap/ui/core/ResizeHandler","sap/ui/core/util/PasteHelper","sap/ui/events/KeyCodes","sap/ui/thirdparty/jquery","sap/m/ListBaseRenderer","sap/ui/dom/jquery/Selectors"],function(e,t,i,o,s,r,n,a,l,u,p,h){"use strict";var d=t.ListKeyboardMode;var c=t.ListGrowingDirection;var f=t.BackgroundDesign;var g=t.PopinLayout;var y=t.ScreenSizes;var C=i.extend("sap.m.Table",{metadata:{library:"sap.m",properties:{backgroundDesign:{type:"sap.m.BackgroundDesign",group:"Appearance",defaultValue:f.Translucent},fixedLayout:{type:"boolean",group:"Behavior",defaultValue:true},showOverlay:{type:"boolean",group:"Appearance",defaultValue:false},alternateRowColors:{type:"boolean",group:"Appearance",defaultValue:false},popinLayout:{type:"sap.m.PopinLayout",group:"Appearance",defaultValue:g.Block},contextualWidth:{type:"string",group:"Behavior",defaultValue:"Inherit"}},aggregations:{columns:{type:"sap.m.Column",multiple:true,singularName:"column",dnd:{draggable:true,droppable:true,layout:"Horizontal"}}},events:{beforeOpenContextMenu:{allowPreventDefault:true,parameters:{listItem:{type:"sap.m.ColumnListItem"},column:{type:"sap.m.Column"}}},paste:{allowPreventDefault:true,parameters:{data:{type:"string[][]"}}}},designtime:"sap/m/designtime/Table.designtime"}});C.prototype.sNavItemClass="sapMListTblRow";C.prototype.init=function(){this._iItemNeedsColumn=0;i.prototype.init.call(this)};C.prototype.setContextualWidth=function(e){var t=this.getContextualWidth();if(e==t){return this}if(typeof e==="number"){this._sContextualWidth=e+"px";this._sContextualWidth=this._sContextualWidth.toLowerCase()}else{var i=e.toLowerCase(),o=y[i];if(o){this._sContextualWidth=o+"px"}else{this._sContextualWidth=e}}var s=this._validateContextualWidth(this._sContextualWidth);this._iLastContextualWidth=t;if(s){this.setProperty("contextualWidth",e)}else{return this}if(this._iLastContextualWidth.toLowerCase()==="auto"){this._deregisterResizeHandler()}if(this._sContextualWidth.toLowerCase()==="auto"){this._registerResizeHandler()}else{this._applyContextualWidth(this._sContextualWidth)}return this};C.prototype._validateContextualWidth=function(e){if(!e){return}if(typeof e!="string"){throw new Error('expected string for property "contextualWidth" of '+this)}if(e.toLowerCase()==="auto"||e.toLowerCase()==="inherit"){return true}if(!/^\d+(\.\d+)?(px)$/i.test(e)){throw new Error('invalid CSS size("px", "Auto", "auto", Inherit", "inherit" required) or sap.m.ScreenSize enumeration for property "contextualWidth" of '+this)}return true};C.prototype._applyContextualWidth=function(e){e=parseFloat(e)||0;if(e){this._applyContextualSettings({contextualWidth:e})}};C.prototype._onResize=function(e){this._applyContextualWidth(e.size.width)};C.prototype._registerResizeHandler=function(){if(!this._iResizeHandlerId){var e=this;window.requestAnimationFrame(function(){e._iResizeHandlerId=a.register(e,e._onResize.bind(e))})}};C.prototype._deregisterResizeHandler=function(){if(this._iResizeHandlerId){a.deregister(this._iResizeHandlerId);this._iResizeHandlerId=null}};C.prototype.onBeforeRendering=function(){i.prototype.onBeforeRendering.call(this);this._applyContextualWidth(this._sContextualWidth);this._ensureColumnsMedia();this._notifyColumns("ItemsRemoved")};C.prototype._ensureColumnsMedia=function(){this.getColumns().forEach(function(e){if(e._bShouldAddMedia){e._addMedia()}})};C.prototype.onAfterRendering=function(){i.prototype.onAfterRendering.call(this);this.updateSelectAllCheckbox();this._renderOverlay()};C.prototype._renderOverlay=function(){var e=this.$(),t=e.find(".sapMTableOverlay"),i=this.getShowOverlay();if(i&&t.length===0){t=p("<div>").addClass("sapUiOverlay sapMTableOverlay").css("z-index","1");e.append(t)}else if(!i){t.remove()}};C.prototype.setShowOverlay=function(e){this.setProperty("showOverlay",e,true);this._renderOverlay();return this};C.prototype.exit=function(){i.prototype.exit.call(this);if(this._selectAllCheckBox){this._selectAllCheckBox.destroy();this._selectAllCheckBox=null}};C.prototype.destroyItems=function(){this._notifyColumns("ItemsRemoved");return i.prototype.destroyItems.apply(this,arguments)};C.prototype.removeAllItems=function(){this._notifyColumns("ItemsRemoved");return i.prototype.removeAllItems.apply(this,arguments)};C.prototype.removeSelections=function(){i.prototype.removeSelections.apply(this,arguments);this.updateSelectAllCheckbox();return this};C.prototype.selectAll=function(){i.prototype.selectAll.apply(this,arguments);this.updateSelectAllCheckbox();return this};C.prototype.getColumns=function(e){var t=this.getAggregation("columns",[]);if(e){t.sort(function(e,t){return e.getOrder()-t.getOrder()})}return t};C.prototype.onAfterPageLoaded=function(){this.updateSelectAllCheckbox();if(this.getAlternateRowColors()){var e=this.$("tblBody").removeClass();e.addClass(this._getAlternateRowColorsClass())}i.prototype.onAfterPageLoaded.apply(this,arguments)};C.prototype.shouldRenderItems=function(){var e=this.getColumns().some(function(e){return e.getVisible()});if(!e){n.warning("No visible columns found in "+this)}return e};C.prototype.onItemTypeColumnChange=function(e,t){this._iItemNeedsColumn+=t?1:-1;if(this._iItemNeedsColumn==1&&t){this._setTypeColumnVisibility(true)}else if(this._iItemNeedsColumn==0){this._setTypeColumnVisibility(false)}};C.prototype.onItemSelectedChange=function(e,t){i.prototype.onItemSelectedChange.apply(this,arguments);setTimeout(function(){this.updateSelectAllCheckbox()}.bind(this),0)};C.prototype.getTableDomRef=function(){return this.getDomRef("listUl")};C.prototype.getItemsContainerDomRef=function(){return this.getDomRef("tblBody")};C.prototype.setNavigationItems=function(e){var t=this.$("tblHeader");var i=this.$("tblFooter");var o=this.$("tblBody").children(".sapMLIB");var s=t.add(o).add(i).get();e.setItemDomRefs(s);if(e.getFocusedIndex()==-1){if(this.getGrowing()&&this.getGrowingDirection()==c.Upwards){e.setFocusedIndex(s.length-1)}else{e.setFocusedIndex(t[0]?1:0)}}};C.prototype.checkGrowingFromScratch=function(){if(this.hasPopin()){return false}return this.getColumns().some(function(e){return e.getVisible()&&e.getMergeDuplicates()})};C.prototype.onColumnPress=function(e){this.bActiveHeaders&&this.fireEvent("columnPress",{column:e})};C.prototype.onColumnResize=function(e){if(!this.hasPopin()&&!this._mutex){var t=this.getColumns().some(function(e){return e.isPopin()});if(!t){e.setDisplayViaMedia(this.getTableDomRef());return}}this._dirty=this._getMediaContainerWidth()||window.innerWidth;if(!this._mutex){var i=this._getMediaContainerWidth()||window.innerWidth;this._mutex=true;this.rerender();setTimeout(function(){if(this._dirty!=i){this._dirty=0;this.rerender()}this._mutex=false}.bind(this),200)}};C.prototype.setTableHeaderVisibility=function(e){if(!this.getDomRef()){return}var t=this.$("tblHeader"),i=!t.hasClass("sapMListTblHeaderNone"),o=t.find(".sapMListTblCell:visible"),s=o.eq(0);if(o.length==1){s.width("")}else{o.each(function(){this.style.width=this.getAttribute("data-sap-width")||""})}this._colCount=o.length+3+!!h.ModeOrder[this.getMode()];this.$("tblBody").find(".sapMGHLICell").attr("colspan",this.getColSpan());this.$("nodata-text").attr("colspan",this.getColCount());if(this.getFixedLayout()){this._forceStyleChange()}if(!e&&i){t[0].className="sapMListTblRow sapMListTblHeader";this._headerHidden=false}else if(e&&!i&&!o.length){t[0].className="sapMListTblHeaderNone";this._headerHidden=true}};C.prototype._forceStyleChange=function(){if(e.browser.msie||e.browser.edge){var t=this.getTableDomRef().style;t.listStyleType="circle";window.setTimeout(function(){t.listStyleType="none"},0)}};C.prototype._setTypeColumnVisibility=function(e){p(this.getTableDomRef()).toggleClass("sapMListTblHasNav",e)};C.prototype._notifyColumns=function(e,t,i){this.getColumns().forEach(function(o){o["on"+e](t,i)})};C.prototype._getSelectAllCheckbox=function(){if(this.bPreventMassSelection){return}return this._selectAllCheckBox||(this._selectAllCheckBox=new s({id:this.getId("sa"),activeHandling:false}).addStyleClass("sapMLIBSelectM").setParent(this,null,true).attachSelect(function(){if(this._selectAllCheckBox.getSelected()){this.selectAll(true)}else{this.removeSelections(false,true)}},this).setTabIndex(-1))};C.prototype.updateSelectAllCheckbox=function(){if(this._selectAllCheckBox&&this.getMode()==="MultiSelect"){var e=this.getItems(),t=this.getSelectedItems().length,i=e.filter(function(e){return e.isSelectable()}).length;this._selectAllCheckBox.setSelected(e.length>0&&t==i)}};C.prototype.enhanceAccessibilityState=function(e,t){if(e==this._selectAllCheckBox){var i=sap.ui.getCore().getLibraryResourceBundle("sap.m");t.label=i.getText("TABLE_CHECKBOX_SELECT_ALL")}};C.prototype.getColSpan=function(){return(this._colCount||1)-2};C.prototype.getColCount=function(){return this._colCount||0};C.prototype.hasPopin=function(){return!!this._hasPopin};C.prototype.isHeaderRowEvent=function(e){var t=this.$("tblHeader");return!!p(e.target).closest(t,this.getTableDomRef()).length};C.prototype.isFooterRowEvent=function(e){var t=this.$("tblFooter");return!!p(e.target).closest(t,this.getTableDomRef()).length};C.prototype.getAccessibilityType=function(){return sap.ui.getCore().getLibraryResourceBundle("sap.m").getText("ACC_CTR_TYPE_TABLE")};C.prototype.getAccessibilityDescription=function(){return i.prototype.getAccessibilityDescription.call(this)+" "+this.getFooterText()};C.prototype._setHeaderAnnouncement=function(){var e=sap.ui.getCore().getLibraryResourceBundle("sap.m"),t=e.getText("ACC_CTR_TYPE_HEADER_ROW")+" ";if(this.isAllSelectableSelected()){t+=e.getText("LIST_ALL_SELECTED")}this.getColumns(true).forEach(function(e,i){if(!e.getVisible()){return}var s=e.getHeader();if(s&&s.getVisible()){t+=o.getAccessibilityText(s)+" "}});this.updateInvisibleText(t)};C.prototype._setFooterAnnouncement=function(){var e=sap.ui.getCore().getLibraryResourceBundle("sap.m").getText("ACC_CTR_TYPE_FOOTER_ROW")+" ";this.getColumns(true).forEach(function(t,i){if(!t.getVisible()){return}var s=t.getFooter();if(s&&s.getVisible()){var r=t.getHeader();if(r&&r.getVisible()){e+=o.getAccessibilityText(r)+" "}e+=o.getAccessibilityText(s)+" "}});this.updateInvisibleText(e)};C.prototype.onsapspace=function(e){if(e.isMarked()){return}if(e.target.id==this.getId("tblHeader")){e.preventDefault();if(this._selectAllCheckBox){this._selectAllCheckBox.setSelected(!this._selectAllCheckBox.getSelected()).fireSelect();e.setMarked()}}};C.prototype.onsaptabnext=function(e){if(e.isMarked()||this.getKeyboardMode()==d.Edit){return}var t=p();if(e.target.id==this.getId("nodata")){t=this.$("nodata")}else if(this.isHeaderRowEvent(e)){t=this.$("tblHeader")}else if(this.isFooterRowEvent(e)){t=this.$("tblFooter")}var i=t.find(":sapTabbable").get(-1)||t[0];if(e.target===i){this.forwardTab(true);e.setMarked()}};C.prototype.onsaptabprevious=function(e){if(e.isMarked()||this.getKeyboardMode()==d.Edit){return}var t=e.target.id;if(t==this.getId("nodata")||t==this.getId("tblHeader")||t==this.getId("tblFooter")){this.forwardTab(false)}else if(t==this.getId("trigger")){this.focusPrevious();e.preventDefault()}};C.prototype.onfocusin=function(e){var t=e.target;if(t.id===this.getId("tblHeader")){this._setHeaderAnnouncement()}else if(t.id===this.getId("tblFooter")){this._setFooterAnnouncement()}if(this._bThemeChanged){this._bThemeChanged=false;this._forceStyleChange()}i.prototype.onfocusin.call(this,e)};C.prototype.onThemeChanged=function(){i.prototype.onThemeChanged.call(this);this._bThemeChanged=true};C.prototype._getAlternateRowColorsClass=function(){if(this.isGrouped()){return"sapMListTblAlternateRowColorsGrouped"}if(this.hasPopin()){return"sapMListTblAlternateRowColorsPopin"}return"sapMListTblAlternateRowColors"};C.prototype.onpaste=function(e){if(e.isMarked()||/^(input|textarea)$/i.test(e.target.tagName)){return}var t=l.getPastedDataAs2DArray(e.originalEvent);if(!t||t.length===0||t[0].length===0){return}this.firePaste({data:t})};C.prototype.onkeydown=function(t){i.prototype.onkeydown.apply(this,arguments);if(e.browser.msie&&t.ctrlKey&&t.which===u.V){this.onpaste(t)}};C.prototype.ondragenter=function(e){var t=e.dragSession;if(!t||!t.getDropControl()||!t.getDropControl().isA("sap.m.Column")){return}t.setIndicatorConfig({height:this.getTableDomRef().clientHeight})};return C});