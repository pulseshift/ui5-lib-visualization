/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides enumeration sap.ui.model.odata.v2.BatchMode
sap.ui.define(function() {
	"use strict";


	/**
	* Different modes for retrieving the count of collections
	*
	* @enum {string}
	* @public
	* @alias sap.ui.model.odata.BatchMode
	*/
	var BatchMode = {
			/**
			 * No batch requests
			 * @public
			 */
			None: "None",

			/**
			 * Batch grouping enabled
			 * @public
			 */
			Group: "Group"
	};

	return BatchMode;

}, /* bExport= */ true);
