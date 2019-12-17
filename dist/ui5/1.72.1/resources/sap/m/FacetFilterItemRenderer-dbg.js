/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define(['./ListItemBaseRenderer', 'sap/ui/core/Renderer'],
	function(ListItemBaseRenderer, Renderer) {
	"use strict";


	var FacetFilterItemRenderer = Renderer.extend(ListItemBaseRenderer);

	/**
	 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
	 *
	 * @param {sap.ui.core.RenderManager}
	 *          oRm The RenderManager that can be used for writing to the render output buffer
	 * @param {sap.ui.core.Control}
	 *          oControl An object representation of the control that should be rendered
	 */
	FacetFilterItemRenderer.renderLIContent = function(oRm, oControl) {

		oRm.write("<div");
		if (oControl.getParent() && oControl.getParent().getWordWrap()) {
			oRm.addClass("sapMFFLITitleWrap");
		} else {
			oRm.addClass("sapMFFLITitle");
		}
		oRm.writeClasses();
		oRm.write(">");
	  oRm.writeEscaped(oControl.getText());
	  oRm.write("</div>");
	};


	return FacetFilterItemRenderer;

}, /* bExport= */ true);
