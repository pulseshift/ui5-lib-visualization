/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([
	'./InputBaseRenderer',
	'sap/ui/core/Renderer',
	'sap/ui/core/LabelEnablement',
	'sap/ui/Device'
],
	function(InputBaseRenderer, Renderer, LabelEnablement, Device) {
		"use strict";

		/**
		 * ComboBoxTextFiel renderer.
		 *
		 * @namespace
		 */
		var ComboBoxTextFieldRenderer = Renderer.extend(InputBaseRenderer);

		/**
		 * CSS class to be applied to the root element of the control.
		 *
		 * @readonly
		 * @const {string}
		 */
		ComboBoxTextFieldRenderer.CSS_CLASS_COMBOBOXTEXTFIELD = "sapMComboBoxTextField";

		/**
		 * Add attributes to the input element.
		 *
		 * @param {sap.ui.core.RenderManager} oRm The RenderManager that can be used for writing to the render output buffer.
		 * @param {sap.ui.core.Control} oControl An object representation of the control that should be rendered.
		 */
		ComboBoxTextFieldRenderer.writeInnerAttributes = function(oRm, oControl) {
			oRm.writeAttribute("autocomplete", "off");
			oRm.writeAttribute("autocorrect", "off");
			oRm.writeAttribute("autocapitalize", "off");
			oRm.writeAttribute("type", "text");
		};

		/**
		 * Add role combobox to the outer div.
		 *
		 * @param {sap.ui.core.RenderManager} oRm The RenderManager that can be used for writing to the render output buffer.
		 * @param {sap.ui.core.Control} oControl An object representation of the control that should be rendered.
		 */
		ComboBoxTextFieldRenderer.writeAccAttributes = function(oRm, oControl) {
			if (sap.ui.getCore().getConfiguration().getAccessibility()) {
				oRm.writeAttribute("aria-haspopup", "listbox");
				oRm.writeAttribute("aria-autocomplete", "inline");
				oRm.writeAttribute("role", "combobox");
			}
		};

		/**
		 * Retrieves the ARIA role for the control.
		 * To be overwritten by subclasses.
		 *
		 */
		ComboBoxTextFieldRenderer.getAriaRole = function() {};


		/**
		 * Returns the inner aria describedby ids for the accessibility.
		 *
		 * @param {sap.ui.core.Control} oControl an object representation of the control.
		 * @returns {String|undefined}
		 */
		ComboBoxTextFieldRenderer.getAriaDescribedBy = function(oControl) {
			var sAriaDescribedBy = InputBaseRenderer.getAriaDescribedBy.apply(this, arguments);
			if (Device.browser.msie) {
				return (sAriaDescribedBy || "") + " " + oControl.oInvisibleText.getId();
			}
			return sAriaDescribedBy;
		};

		/**
		 * Add extra styles for input container.
		 *
		 * @param {sap.ui.core.RenderManager} oRm The RenderManager that can be used for writing to the render output buffer.
		 * @param {sap.ui.core.Control} oControl An object representation of the control that should be rendered.
		 */
		ComboBoxTextFieldRenderer.addOuterStyles = function(oRm, oControl) {
			oRm.addStyle("max-width", oControl.getMaxWidth());
		};

		return ComboBoxTextFieldRenderer;
	}, true);