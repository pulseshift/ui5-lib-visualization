/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var e={};e.render=function(e,i){var t=i.getFixContent();e.write("<div");e.addClass("sapUiSimpleFixFlex");e.writeControlData(i);e.writeClasses();e.write(">");if(t){e.renderControl(t.addStyleClass("sapUiSimpleFixFlexFixed"))}this.renderFlexContentContainer(e,i);e.write("</div>")};e.renderFlexContentContainer=function(e,i){var t=i.getFlexContent();e.write("<div");e.addClass("sapUiSimpleFixFlexFlexContentContainer");e.writeClasses();e.write(">");if(t){e.write("<div");e.addClass("sapUiSimpleFixFlexFlexContent");e.writeClasses();e.write(">");t.forEach(function(i){e.renderControl(i)});e.write("</div>")}e.write("</div>")};return e},true);