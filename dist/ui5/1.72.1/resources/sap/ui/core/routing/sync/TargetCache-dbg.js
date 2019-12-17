/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/Log", "sap/ui/core/mvc/View"], function(Log, View) {
	"use strict";

	/**
	 * Provide methods for sap.ui.core.routing.Views in sync mode
	 * @private
	 * @experimental
	 * @since 1.33
	 */
	return {

		/**
		 * @private
		 */
		_getObjectWithGlobalId : function (oOptions) {
			function fnCreateView() {
				oOptions.viewName = oOptions.name;
				delete oOptions.name;
				return View._legacyCreate(oOptions);
			}

			var oView,
				sViewName = oOptions.name,
				oInstanceCache;

			this._checkName(sViewName, "View");

			oInstanceCache = this._oCache.view[sViewName];
			oView = oInstanceCache && oInstanceCache[oOptions.id];

			if (oView) {
				return oView;
			}

			if (this._oComponent) {
				oView = this._oComponent.runAsOwner(fnCreateView);
			} else {
				oView = fnCreateView();
			}

			oInstanceCache = this._oCache.view[sViewName];

			if (!oInstanceCache) {
				oInstanceCache = this._oCache.view[sViewName] = {};
				// save the object also to the undefined key if this is the first view created for its class
				oInstanceCache[undefined] = oView;
			}

			if (oOptions.id !== undefined) {
				oInstanceCache[oOptions.id] = oView;
			}

			this.fireCreated({
				object: oView,
				type: "View",
				options: oOptions
			});

			return oView;
		},

		_getViewWithGlobalId : function (oOptions) {
			if (oOptions && !oOptions.name) {
				oOptions.name = oOptions.viewName;
			}
			return this._getObjectWithGlobalId(oOptions);
		}
	};
});
