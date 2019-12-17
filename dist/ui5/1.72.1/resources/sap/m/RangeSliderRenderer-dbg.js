/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define(["sap/ui/core/Renderer", "./SliderRenderer", "sap/ui/core/InvisibleText"], function (Renderer, SliderRenderer, InvisibleText) {
	"use strict";

	/**
	 * RangeSlider renderer.
	 * @namespace
	 */
	var RangeSliderRenderer = Renderer.extend(SliderRenderer);

	RangeSliderRenderer.renderHandles = function (oRM, oControl, sRangeSliderLabels) {
		this.renderHandle(oRM, oControl, {
			id: oControl.getId() + "-handle1",
			position: "start",
			forwardedLabels: sRangeSliderLabels
		});
		this.renderHandle(oRM, oControl, {
			id: oControl.getId() + "-handle2",
			position: "end",
			forwardedLabels: sRangeSliderLabels
		});

		// Render ARIA labels
		oRM.renderControl(oControl._mHandleTooltip.start.label);
		oRM.renderControl(oControl._mHandleTooltip.end.label);
		oRM.renderControl(oControl.getAggregation("_handlesLabels")[2]);
	};

	/**
	 * Used to render each of the handles of the RangeSlider.
	 *
	 * @param {sap.ui.core.RenderManager} oRM The RenderManager that can be used for writing to the render output buffer.
	 * @param {sap.ui.core.Control} oControl An object representation of the slider that should be rendered.
	 * @param {object} mOptions Options used for specificity of the handles
	 */
	RangeSliderRenderer.renderHandle = function (oRM, oControl, mOptions) {
		var fValue,
			aRange = oControl.getRange(),
			bEnabled = oControl.getEnabled(),
			bRTL = sap.ui.getCore().getConfiguration().getRTL();

		oRM.write("<span");

		if (mOptions && (mOptions.id !== undefined)) {
			oRM.writeAttributeEscaped("id", mOptions.id);
		}
		if (mOptions && (mOptions.position !== undefined)) {
			fValue = aRange[mOptions.position === "start" ? 0 : 1];

			oRM.writeAttribute("data-range-val", mOptions.position);
			oRM.writeAttribute("aria-labelledby", (mOptions.forwardedLabels + " " + oControl._mHandleTooltip[mOptions.position].label.getId()).trim());

			if (oControl.getInputsAsTooltips()) {
				oRM.writeAttribute("aria-describedby", InvisibleText.getStaticId("sap.m", "SLIDER_INPUT_TOOLTIP"));
			}
		}
		if (oControl.getShowHandleTooltip() && !oControl.getShowAdvancedTooltip()) {
			this.writeHandleTooltip(oRM, oControl);
		}

		oRM.addClass(SliderRenderer.CSS_CLASS + "Handle");

		if (mOptions && (mOptions.id !== undefined) && mOptions.id === (oControl.getId() + "-handle1")) {
			oRM.addStyle(bRTL ? "right" : "left", aRange[0]);
		}
		if (mOptions && (mOptions.id !== undefined) && mOptions.id === (oControl.getId() + "-handle2")) {
			oRM.addStyle(bRTL ? "right" : "left", aRange[1]);
		}

		this.writeAccessibilityState(oRM, oControl, fValue);
		oRM.writeClasses();
		oRM.writeStyles();

		if (bEnabled) {
			oRM.writeAttribute("tabindex", "0");
		}
		oRM.write("></span>");
	};

	/**
	 * Writes the accessibility state to the control.
	 * To be overwritten by subclasses.
	 *
	 * @param {sap.ui.core.RenderManager} oRm The RenderManager that can be used for writing to the render output buffer.
	 * @param {sap.ui.core.Control} oSlider An object representation of the control that should be rendered.
	 * @param {string} fValue The current value for the accessibility state
	 */
	RangeSliderRenderer.writeAccessibilityState = function(oRm, oSlider, fValue) {
		var bNotNumericalLabel = oSlider._isElementsFormatterNotNumerical(fValue),
			sScaleLabel = oSlider._formatValueByCustomElement(fValue),
			sValueNow;

		if (oSlider._getUsedScale() && !bNotNumericalLabel) {
			sValueNow = sScaleLabel;
		} else {
			sValueNow = oSlider.toFixed(fValue);
		}

		oRm.writeAccessibilityState(oSlider, {
			role: "slider",
			orientation: "horizontal",
			valuemin: oSlider.toFixed(oSlider.getMin()),
			valuemax: oSlider.toFixed(oSlider.getMax()),
			valuenow: sValueNow
		});

		if (bNotNumericalLabel) {
			oRm.writeAccessibilityState(oSlider, {
				valuetext: sScaleLabel
			});
		}
	};

	/**
	 * Renders the lower range label under the left part of the RangeSlider control.
	 *
	 * @param {sap.ui.core.RenderManager} oRM The RenderManager that can be used for writing to the render output buffer.
	 * @param {sap.ui.core.Control} oControl An object representation of the slider that should be rendered.
	 */
	RangeSliderRenderer.renderStartLabel = function (oRM, oControl) {
		oRM.write("<div");
		oRM.addClass(SliderRenderer.CSS_CLASS + "RangeLabel");
		oRM.writeClasses();
		oRM.write(">");

		oRM.write(oControl.getMin());

		oRM.write("</div>");
	};

	/**
	 * Renders the higher range label under the right part of the RangeSlider control.
	 *
	 * @param {sap.ui.core.RenderManager} oRM The RenderManager that can be used for writing to the render output buffer.
	 * @param {sap.ui.core.Control} oControl An object representation of the slider that should be rendered.
	 */
	RangeSliderRenderer.renderEndLabel = function (oRM, oControl) {
		oRM.write("<div");
		oRM.addClass(SliderRenderer.CSS_CLASS + "RangeLabel");
		oRM.addStyle("width", oControl._getMaxTooltipWidth() + "px");
		oRM.writeClasses();
		oRM.writeStyles();
		oRM.write(">");

		oRM.write(oControl.getMax());

		oRM.write("</div>");
	};

	/**
	 * Renders the label under the RangeSlider control.
	 *
	 * @param {sap.ui.core.RenderManager} oRM The RenderManager that can be used for writing to the render output buffer.
	 * @param {sap.ui.core.Control} oControl An object representation of the slider that should be rendered.
	 */
	RangeSliderRenderer.renderLabels = function (oRM, oControl) {
		oRM.write("<div");
		oRM.addClass();
		oRM.addClass(SliderRenderer.CSS_CLASS + "Labels");
		oRM.writeClasses();
		oRM.write(">");

		this.renderStartLabel(oRM, oControl);
		this.renderEndLabel(oRM, oControl);

		oRM.write("</div>");
	};

	RangeSliderRenderer.renderProgressIndicator = function(oRm, oSlider, sForwardedLabels) {
		var aRange = oSlider.getRange();

		aRange[0] = oSlider.toFixed(aRange[0], oSlider._iDecimalPrecision);
		aRange[1] = oSlider.toFixed(aRange[1], oSlider._iDecimalPrecision);

		oRm.write("<div");
		oRm.writeAttribute("id", oSlider.getId() + "-progress");
		if (oSlider.getEnabled()) {
			oRm.writeAttribute("tabindex", "0");
		}
		this.addProgressIndicatorClass(oRm, oSlider);
		oRm.addStyle("width", oSlider._sProgressValue);
		oRm.writeClasses();
		oRm.writeStyles();

		oRm.writeAccessibilityState(oSlider, {
			role: "slider",
			orientation: "horizontal",
			valuemin: oSlider.toFixed(oSlider.getMin()),
			valuemax: oSlider.toFixed(oSlider.getMax()),
			valuetext: oSlider._oResourceBundle.getText('RANGE_SLIDER_RANGE_ANNOUNCEMENT', aRange.map(oSlider._formatValueByCustomElement, oSlider)),
			labelledby: (sForwardedLabels + " " + oSlider.getAggregation("_handlesLabels")[2].getId()).trim() // range label
		});

		oRm.write('></div>');
	};

	RangeSliderRenderer.addClass = function(oRm, oSlider) {
		SliderRenderer.addClass(oRm, oSlider);
		oRm.addClass("sapMRangeSlider");
	};

	return RangeSliderRenderer;
}, /* bExport= */ true);