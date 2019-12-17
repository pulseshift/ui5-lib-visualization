/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides the base implementation for all model implementations
sap.ui.define(['sap/ui/base/Object'],
	function(BaseObject) {
	"use strict";


	/**
	 * Constructor for a new Type.
	 *
	 * @class
	 * This is an abstract base class for type objects.
	 * @abstract
	 *
	 * @extends sap.ui.base.Object
	 *
	 * @author SAP SE
	 * @version 1.72.1
	 *
	 * @public
	 * @alias sap.ui.model.Type
	 */
	var Type = BaseObject.extend("sap.ui.model.Type", /** @lends sap.ui.model.Type.prototype */ {

		constructor : function () {
			BaseObject.apply(this, arguments);
			this.sName = "Type";
		},

		metadata : {
			"abstract" : true,
			publicMethods : [
			// methods
			"getName"
		  ]
		}

	});


	/**
	 * Returns the name of this type.
	 *
	 * @return {string} the name of this type
	 * @public
	 */
	Type.prototype.getName = function() {
		return this.sName;
	};

	/**
	 * Returns a simple string representation of this type.
	 *
	 * Mainly useful for tracing purposes.
	 * @public
	 * @return {string} a string description of this type
	 */
	Type.prototype.toString = function() {
		return "Type " + this.getMetadata().getName();
	};

	return Type;

});
