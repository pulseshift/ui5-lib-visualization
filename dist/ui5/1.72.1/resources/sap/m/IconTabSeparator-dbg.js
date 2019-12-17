/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides control sap.m.IconTabSeparator.
sap.ui.define(['./library', 'sap/ui/core/Element', 'sap/ui/core/Item'],
	function(library, Element, Item) {
	"use strict";



	// shortcut for sap.m.ImageHelper
	var ImageHelper = library.ImageHelper;



	/**
	 * Constructor for a new IconTabSeparator.
	 *
	 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
	 * @param {object} [mSettings] Initial settings for the new control
	 *
	 * @class
	 * Represents an Icon used to separate 2 tab filters.
	 *
	 * @extends sap.ui.core.Element
	 * @implements sap.m.IconTab
	 *
	 * @author SAP SE
	 * @version 1.72.1
	 *
	 * @constructor
	 * @public
	 * @alias sap.m.IconTabSeparator
	 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
	 */
	var IconTabSeparator = Element.extend("sap.m.IconTabSeparator", /** @lends sap.m.IconTabSeparator.prototype */ { metadata : {

		interfaces : [
			"sap.m.IconTab"
		],
		library : "sap.m",
		designtime: "sap/m/designtime/IconTabSeparator.designtime",
		properties : {

			/**
			 * The icon to display for this separator. If no icon is given, a separator line is used instead.
			 */
			icon : {type : "sap.ui.core.URI", group : "Misc", defaultValue : ''},

			/**
			 * Specifies whether the separator is rendered.
			 */
			visible : {type : "boolean", group : "Behavior", defaultValue : true},

			/**
			 * If set to true, it sends one or more requests,
			 * trying to get the density perfect version of the image if this version of
			 * the image doesn't exist on the server. Default value is set to true.
			 *
			 * If bandwidth is key for the application, set this value to false.
			 */
			iconDensityAware : {type : "boolean", group : "Appearance", defaultValue : true}
		}
	}});

	/**
	 * Lazy load feed icon image.
	 *
	 * @param {Array} aCssClasses Array of CSS classes, which will be added if the image needs to be created.
	 * @param {sap.ui.core.Control} oParent This element's parent.
	 * @private
	 */
	IconTabSeparator.prototype._getImageControl = function(aCssClasses, oParent) {
		var mProperties = {
			src : this.getIcon(),
			densityAware : this.getIconDensityAware(),
			useIconTooltip : false
		};

		this._oImageControl = ImageHelper.getImageControl(this.getId() + "-icon", this._oImageControl, oParent, mProperties, aCssClasses);

		return this._oImageControl;
	};

	/**
	 * Function is called when exiting the element.
	 *
	 * @private
	 */
	IconTabSeparator.prototype.exit = function(oEvent) {

		if (this._oImageControl) {
			this._oImageControl.destroy();
		}

		if (Item.prototype.exit) {
			Item.prototype.exit.call(this, oEvent);
		}
	};

	/**
	 * Renders the item in the IconTabHeader.
	 * @param {sap.ui.core.RenderManager} rm the RenderManager that can be used for writing to the render output buffer
	 * @protected
	 */
	IconTabSeparator.prototype.render = function (rm) {

		if (!this.getVisible()) {
			return;
		}

		var icon = this.getIcon(),
			iconTabHeader = this.getParent(),
			resourceBundle = sap.ui.getCore().getLibraryResourceBundle('sap.m'),
			ariaParams = '';

		if (icon) {
			ariaParams += 'role="img" aria-label="' + resourceBundle.getText("ICONTABBAR_NEXTSTEP") + '"';
		} else {
			ariaParams += 'role="separator"';
		}

		rm.write('<div ' + ariaParams + ' ');

		rm.writeElementData(this);
		rm.addClass("sapMITBItem");
		rm.addClass("sapMITBSep");

		if (!icon) {
			rm.addClass("sapMITBSepLine");
		}
		rm.writeClasses();
		rm.write(">");

		if (icon) {
			rm.renderControl(this._getImageControl(['sapMITBSepIcon'], iconTabHeader));
		}

		rm.write("</div>");
	};

	/**
	 * Renders this item in the IconTabSelectList.
	 * @param {sap.ui.core.RenderManager} rm the RenderManager that can be used for writing to the render output buffer
	 * @param {sap.m.IconTabBarSelectList} selectList the select list in which this filter is rendered
	 * @protected
	 */
	IconTabSeparator.prototype.renderInSelectList = function (rm, selectList) {

	};

	return IconTabSeparator;

});
