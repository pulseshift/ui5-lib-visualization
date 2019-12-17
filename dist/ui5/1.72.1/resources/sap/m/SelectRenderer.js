/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Renderer","sap/ui/core/IconPool","sap/m/library","sap/ui/Device","sap/ui/core/InvisibleText","sap/ui/core/library"],function(e,t,a,n,i,r){"use strict";var s=r.TextDirection;var l=r.ValueState;var d=a.SelectType;var o={apiVersion:2};o.CSS_CLASS="sapMSlt";o.render=function(e,a){var i=a.getTooltip_AsString(),r=a.getType(),s=a.getAutoAdjustWidth(),c=a.getEditable(),S=a.getEnabled(),u=a.getWidth(),g=u.indexOf("%")>-1,I=s||u==="auto"||g,p=o.CSS_CLASS;e.openStart("div",a);this.addClass(e,a);e.class(p);e.class(p+a.getType());if(!S){e.class(p+"Disabled")}else if(!c){e.class(p+"Readonly")}if(I&&r===d.Default){e.class(p+"MinWidth")}if(s){e.class(p+"AutoAdjustedWidth")}else{e.style("width",u)}if(a.getIcon()){e.class(p+"WithIcon")}if(S&&c&&n.system.desktop){e.class(p+"Hoverable")}e.class(p+"WithArrow");if(a.getValueState()!==l.None){this.addValueStateClasses(e,a)}e.style("max-width",a.getMaxWidth());this.writeAccessibilityState(e,a);if(i){e.attr("title",i)}else if(r===d.IconOnly){var f=t.getIconInfo(a.getIcon());if(f){e.attr("title",f.text)}}if(S){e.attr("tabindex","0")}e.openEnd();this.renderHiddenInput(e,a);this.renderLabel(e,a);switch(r){case d.Default:this.renderArrow(e,a);break;case d.IconOnly:this.renderIcon(e,a);break}var b=a.getList();if(a._isShadowListRequired()&&b){this.renderShadowList(e,b)}if(a.getName()){this.renderInput(e,a)}e.close("div")};o.renderHiddenInput=function(e,t){e.voidStart("input",t.getId()+"-hiddenInput");e.attr("aria-readonly","true");e.attr("tabindex","-1");e.class("sapUiPseudoInvisibleText");e.voidEnd()};o.renderLabel=function(t,a){var n=a.getSelectedItem(),i=a.getTextDirection(),r=e.getTextAlign(a.getTextAlign(),i),c=o.CSS_CLASS;t.openStart("label",a.getId()+"-label");t.attr("for",a.getId());t.attr("aria-live","polite");t.class(c+"Label");if(a.getValueState()!==l.None){t.class(c+"LabelState");t.class(c+"Label"+a.getValueState())}if(a.getType()===d.IconOnly){t.class("sapUiPseudoInvisibleText")}if(i!==s.Inherit){t.attr("dir",i.toLowerCase())}t.style("text-align",r);t.openEnd();if(a.getType()!==d.IconOnly){t.renderControl(a._getValueIcon());t.openStart("span",a.getId()+"-labelText");t.class("sapMSelectListItemText");t.openEnd();t.text(n&&n.getParent()?n.getText():null);t.close("span")}t.close("label")};o.renderArrow=function(e,t){var a=o.CSS_CLASS;e.openStart("span",t.getId()+"-arrow");e.class(a+"Arrow");if(t.getValueState()!==l.None){e.class(a+"ArrowState")}e.openEnd().close("span")};o.renderIcon=function(e,t){e.icon(t.getIcon(),o.CSS_CLASS+"Icon",{id:t.getId()+"-icon",title:null})};o.renderInput=function(e,t){e.voidStart("input",t.getId()+"-input");e.attr("type","hidden");e.class(o.CSS_CLASS+"Input");e.attr("aria-hidden","true");e.attr("tabindex","-1");if(!t.getEnabled()){e.attr("disabled","disabled")}e.attr("name",t.getName());e.attr("value",t.getSelectedKey());e.voidEnd()};o.renderShadowList=function(e,t){var a=t.getRenderer();a.writeOpenListTag(e,t,{elementData:false});this.renderShadowItems(e,t);a.writeCloseListTag(e,t)};o.renderShadowItems=function(e,t){var a=t.getRenderer(),n=t.getItems().length,i=t.getSelectedItem();for(var r=0,s=t.getItems();r<s.length;r++){a.renderItem(e,t,s[r],{selected:i===s[r],setsize:n,posinset:r+1,elementData:false})}};o.addClass=function(e,t){};o.addValueStateClasses=function(e,t){e.class(o.CSS_CLASS+"State");e.class(o.CSS_CLASS+t.getValueState())};o.getAriaRole=function(e){switch(e.getType()){case d.Default:return"combobox";case d.IconOnly:return"button"}};o._getValueStateString=function(e){var t="sap.ui.core";switch(e.getValueState()){case l.Success:return i.getStaticId(t,"VALUE_STATE_SUCCESS");case l.Warning:return i.getStaticId(t,"VALUE_STATE_WARNING");case l.Information:return i.getStaticId(t,"VALUE_STATE_INFORMATION")}return""};o.writeAccessibilityState=function(e,a){var n=this._getValueStateString(a),i=a.getSelectedItem(),r=a.getType()===d.IconOnly,s,o;if(n){n=" "+n}if(i&&!i.getText()&&i.getIcon&&i.getIcon()){var c=t.getIconInfo(i.getIcon());if(c){o=c.text||c.name}}s={value:o?a._getValueIcon().getId():a.getId()+"-label"+n,append:true};e.accessibilityState(a,{role:this.getAriaRole(a),disabled:!a.getEnabled(),readonly:r?undefined:a.getEnabled()&&!a.getEditable(),expanded:a.isOpen(),invalid:a.getValueState()===l.Error?true:undefined,labelledby:r?undefined:s,haspopup:r?true:undefined})};return o},true);