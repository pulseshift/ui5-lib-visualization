/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides default renderer for control sap.ui.unified.FileUploader
sap.ui.define(['sap/ui/unified/library', "sap/ui/thirdparty/jquery"],
	function(library, jQuery) {
	"use strict";


	/**
	 * @namespace
	 */
	var FileUploaderRenderer = function() {
	};


	/**
	 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
	 *
	 * @param {sap.ui.core.RenderManager} oRm The RenderManager that can be used for writing to the render output buffer.
	 * @param {sap.ui.core.Control} oFileUploader An object representation of the control that should be rendered.
	 */
	FileUploaderRenderer.render = function(oRm, oFileUploader) {
		var bEnabled = oFileUploader.getEnabled(),
			sTooltip = oFileUploader.getTooltip_AsString();

		oRm.write('<div');
		oRm.writeControlData(oFileUploader);
		oRm.addClass("sapUiFup");

		if (oFileUploader.getButtonOnly()) {
			oRm.addClass("sapUiFupButtonOnly");
		}

		var sClass = library.FileUploaderHelper.addFormClass();
		if (sClass) {
			oRm.addClass(sClass);
		}
		if (!bEnabled) {
			oRm.addClass("sapUiFupDisabled");
		}
		oRm.writeClasses();
		oRm.write('>');

		// form
		oRm.write('<form style="display:inline-block" enctype="multipart/form-data" method="post"');
		oRm.writeAttribute('id', oFileUploader.getId() + '-fu_form');
		oRm.writeAttributeEscaped('action', oFileUploader.getUploadUrl());
		oRm.writeAttribute('target', oFileUploader.getId() + '-frame');
		oRm.write('>');

		// the SAPUI5 TextField and Button
		oRm.write('<div ');
		if (!oFileUploader.bMobileLib) {
			oRm.write('class="sapUiFupInp"');
		}
		oRm.write('>');

		if (!oFileUploader.getButtonOnly()) {
			oRm.write('<div class="sapUiFupGroup" border="0" cellPadding="0" cellSpacing="0"><div><div>');
		} else {
			oRm.write('<div class="sapUiFupGroup" border="0" cellPadding="0" cellSpacing="0"><div><div style="display:none">');
		}
		oRm.renderControl(oFileUploader.oFilePath);
		oRm.write('</div><div>');  //-> per style margin
		oFileUploader._ensureBackwardsReference();
		oRm.renderControl(oFileUploader.oBrowse);

		oRm.write('<span id="' + oFileUploader.getId() + '-AccDescr" class="sapUiInvisibleText" aria-hidden="true">');
		oRm.writeEscaped(oFileUploader._generateAccDescriptionText());
		oRm.write('</span>');
		oRm.write('</div></div></div>');

		// hidden pure input type file (surrounded by a div which is responsible for giving the input the correct size)
		var sName = oFileUploader.getName() || oFileUploader.getId();
		oRm.write('<div class="sapUiFupInputMask"');
		if (sTooltip && sTooltip.length) {
			oRm.writeAttributeEscaped('title', sTooltip);
		}
		oRm.write('>');
		oRm.write('<input type="hidden" name="_charset_" aria-hidden="true">');
		oRm.write('<input type="hidden" id="' + oFileUploader.getId() + '-fu_data" aria-hidden="true"');
		oRm.writeAttributeEscaped('name', sName + '-data');
		oRm.writeAttributeEscaped('value', oFileUploader.getAdditionalData() || "");
		oRm.write('>');
		jQuery.each(oFileUploader.getParameters(), function(iIndex, oParam) {
			oRm.write('<input type="hidden" aria-hidden="true" ');
			oRm.writeAttributeEscaped('name', oParam.getName() || "");
			oRm.writeAttributeEscaped('value', oParam.getValue() || "");
			oRm.write('>');
		});
		oRm.write('</div>');

		oRm.write('</div>');
		oRm.write('</form>');
		oRm.write('</div>');
	};

	return FileUploaderRenderer;

}, /* bExport= */ true);