/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/Log"], function(Log) {
	"use strict";

	/**
	 * Provide methods for sap.ui.core.routing.Targets in async mode
	 * @private
	 * @experimental
	 * @since 1.33
	 */
	return {
		/**
		 * Creates a view and puts it in an aggregation of the specified control.
		 *
		 * @param {string|string[]} vTargets the key of the target as specified in the {@link #constructor}. To display multiple targets you may also pass an array of keys.
		 * @param {object} [vData] an object that will be passed to the display event in the data property. If the target has parents, the data will also be passed to them.
		 * @param {string} [sTitleTarget] the name of the target from which the title option is taken for firing the {@link sap.ui.core.routing.Targets#event:titleChanged titleChanged} event
		 * @private
		 * @returns {Promise} resolving with {{name: *, view: *, control: *}|undefined} for every vTargets, object for single, array for multiple
		 */
		display : function (vTargets, vData, sTitleTarget) {
			var oSequencePromise = Promise.resolve();
			return this._display(vTargets, vData, sTitleTarget, oSequencePromise);
		},

		/**
		 * hook to distinguish between the router and an application calling this
		 * @param {array|object} vTargets targets or single target to be displayed
		 * @param {object} vData  an object that will be passed to the display event in the data property. If the
				target has parents, the data will also be passed to them.
		 * @param {string} sTitleTarget the name of the target from which the title option is taken for firing the {@link sap.ui.core.routing.Targets#event:titleChanged titleChanged} event
		 * @param {Promise} oSequencePromise the promise for chaining
		 * @return {Promise} resolving with {{name: *, view: *, control: *}|undefined} for every vTargets, object for single, array for multiple
		 *
		 * @private
		 */
		_display : function (vTargets, vData, sTitleTarget, oSequencePromise) {
			var that = this,
				aViewInfos = [];

			if (!Array.isArray(vTargets)) {
				vTargets = [vTargets];
			}

			this._attachTitleChanged(vTargets, sTitleTarget);

			return this._alignTargetsInfo(vTargets).reduce(function(oPromise, oTargetInfo) {
				var oTargetCreateInfo = {
					prefix: oTargetInfo.prefix
				};

				// gather view infos while processing Promise chain
				return that._displaySingleTarget(oTargetInfo, vData, oPromise, oTargetCreateInfo).then(function(oViewInfo) {
					oViewInfo = oViewInfo || {};
					oViewInfo.targetInfo = oTargetInfo;
					aViewInfos.push(oViewInfo);
				});
			}, oSequencePromise).then(function() {
				return aViewInfos;
			});
		},

		/**
		 * Displays a single target
		 *
		 * @param {string} sName name of the single target
		 * @param {any} vData an object that will be passed to the display event in the data property.
		 * @param {Promise} oSequencePromise the promise which for chaining
		 * @param {object} [oTargetCreateInfo] the object which contains extra information for the creation of the target
		 * @param {function} [oTargetCreateInfo.afterCreate] the function which is called after a target View/Component is instantiated
		 * @param {string} [oTargetCreateInfo.prefix] the prefix which will be used by the RouterHashChanger of the target
		 * @private
		 */
		_displaySingleTarget : function (oTargetInfo, vData, oSequencePromise, oTargetCreateInfo) {
			var sName = oTargetInfo.name,
				oTarget = this.getTarget(sName);

			if (oTarget !== undefined) {
				return oTarget._display(vData, oSequencePromise, oTargetCreateInfo);
			} else {
				var sErrorMessage = "The target with the name \"" + sName + "\" does not exist!";
				Log.error(sErrorMessage, this);
				return Promise.resolve({
					name: sName,
					error: sErrorMessage
				});
			}
		}
	};
});
