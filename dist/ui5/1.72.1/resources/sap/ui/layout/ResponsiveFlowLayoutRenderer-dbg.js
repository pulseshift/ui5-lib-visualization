/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],
	function() {
	"use strict";


	/**
	 * ResponsiveFlowLayout renderer.
	 * @namespace
	 */
	var ResponsiveFlowLayoutRenderer = {};

	/**
	 * Renders the HTML for the given control, using the provided
	 * {@link sap.ui.core.RenderManager}.
	 *
	 * @param {sap.ui.core.RenderManager}
	 *            oRm The RenderManager that can be used for writing to the render
	 *            output buffer
	 * @param {sap.ui.core.Control}
	 *            oControl An object representation of the control that should be
	 *            rendered
	 */
	(function() {
		ResponsiveFlowLayoutRenderer.render = function(oRm, oControl) {
			oRm.write("<div");
			oRm.writeControlData(oControl);
			oRm.addClass("sapUiRFL");
			oRm.writeClasses();

			var sRole = oControl._getAccessibleRole();
			var mAriaProps;
			if (sRole) {
				mAriaProps = {role: sRole};
			}

			oRm.writeAccessibilityState(oControl, mAriaProps);

			oRm.write(">"); // div element

			// rendering of content happens in oControl.fnRenderContent

			oRm.write("</div>");
		};
	}());


	return ResponsiveFlowLayoutRenderer;

}, /* bExport= */ true);
