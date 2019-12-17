/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/library", "sap/ui/Device"],
	function(library, Device) {
	"use strict";

	// shortcut for sap.m.ToolbarDesign
	var ToolbarDesign = library.ToolbarDesign;

	/**
	 * Panel renderer
	 * @namespace
	 */
	var PanelRenderer = {};

	/**
	 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
	 *
	 * @param {sap.ui.core.RenderManager}
	 *          oRm the RenderManager that can be used for writing to the render output buffer
	 * @param {sap.ui.core.Control}
	 *          oControl an object representation of the control that should be rendered
	 */
	PanelRenderer.render = function(oRm, oControl) {
		this.startPanel(oRm, oControl);

		this.renderHeader(oRm, oControl);

		this.renderContent(oRm, oControl);

		this.endPanel(oRm);
	};

	PanelRenderer.startPanel = function (oRm, oControl) {
		oRm.write("<div");
		oRm.writeControlData(oControl);
		oRm.addClass("sapMPanel");
		oRm.writeClasses();
		oRm.addStyle("width", oControl.getWidth());
		oRm.addStyle("height", oControl.getHeight());
		oRm.writeStyles();
		oRm.writeAccessibilityState(oControl, {
			role: oControl.getAccessibleRole().toLowerCase(),
			labelledby: oControl._getLabellingElementId()
		});
		oRm.write(">");
	};

	PanelRenderer.renderHeader = function (oRm, oControl) {
		var bIsExpandable = oControl.getExpandable(),
			bIsExpanded = oControl.getExpanded(),
			oHeaderTBar = oControl.getHeaderToolbar(),
			sHeaderClass;

		if (bIsExpandable) {
			// we need a wrapping div around icon and header
			// otherwise the border needed for both do not exact align
			oRm.write("<header");
			if (oHeaderTBar) {
				sHeaderClass = "sapMPanelWrappingDivTb";
			} else {
				sHeaderClass = "sapMPanelWrappingDiv";
			}

			oRm.addClass(sHeaderClass);
			if (bIsExpanded) {
				oRm.addClass(sHeaderClass + "Expanded");
			}

			oRm.writeClasses();
			oRm.write(">");

			var oIcon = oControl._getIcon();
			if (bIsExpanded) {
				oIcon.addStyleClass("sapMPanelExpandableIconExpanded");
			} else {
				oIcon.removeStyleClass("sapMPanelExpandableIconExpanded");
			}

			oRm.renderControl(oIcon);
		}

		// render header
		var sHeaderText = oControl.getHeaderText();

		if (oHeaderTBar) {
			oHeaderTBar.setDesign(ToolbarDesign.Transparent, true);
			oHeaderTBar.addStyleClass("sapMPanelHeaderTB");
			oRm.renderControl(oHeaderTBar);

		} else if (sHeaderText || bIsExpandable) {
			oRm.write("<h2");
			oRm.addClass("sapMPanelHdr");
			oRm.writeClasses();
			oRm.writeAttribute("id", oControl.getId() + "-header");
			oRm.write(">");
			oRm.writeEscaped(sHeaderText);
			oRm.write("</h2>");
		}

		if (bIsExpandable) {
			oRm.write("</header>");
		}

		var oInfoTBar = oControl.getInfoToolbar();

		if (oInfoTBar) {
			// render infoBar
			oInfoTBar.setDesign(ToolbarDesign.Info, true);
			oInfoTBar.addStyleClass("sapMPanelInfoTB");

			if (bIsExpandable) {
				oRm.write("<div");
				// use this class as marker class to ease selection later in onAfterRendering
				oRm.addClass("sapMPanelExpandablePart");
				oRm.writeClasses();
				oRm.write(">");
				oRm.renderControl(oInfoTBar);
				oRm.write("</div>");
			} else {
				oRm.renderControl(oInfoTBar);
			}
		}
	};

	PanelRenderer.renderContent = function (oRm, oControl) {
		this.startContent(oRm, oControl);

		this.renderChildren(oRm, oControl.getContent());

		this.endContent(oRm);
	};

	PanelRenderer.startContent = function (oRm, oControl) {
		oRm.write("<div");
		oRm.writeAttribute("id", oControl.getId() + "-content");
		oRm.addClass("sapMPanelContent");
		oRm.addClass("sapMPanelBG" + oControl.getBackgroundDesign());

		if (oControl.getExpandable()) {
			// use this class as marker class to ease selection later in onAfterRendering
			oRm.addClass("sapMPanelExpandablePart");
		}

		oRm.writeClasses();

		if (Device.browser.firefox) {
			// ensure that the content is not included in the tab chain
			// this happens in FF, when we have a scrollable content
			oRm.writeAttribute('tabindex', '-1');
		}

		oRm.write(">");
	};

	PanelRenderer.renderChildren = function (oRm, aChildren) {
		aChildren.forEach(oRm.renderControl, oRm);
	};

	PanelRenderer.endContent = function (oRm) {
		oRm.write("</div>");
	};

	PanelRenderer.endPanel = function (oRm) {
		oRm.write("</div>");
	};

	return PanelRenderer;

}, /* bExport= */ true);
