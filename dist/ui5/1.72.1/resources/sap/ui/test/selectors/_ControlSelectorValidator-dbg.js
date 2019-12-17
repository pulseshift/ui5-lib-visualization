/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

 // private
sap.ui.define([
    'sap/ui/base/ManagedObject',
    "sap/ui/test/_OpaLogger",
    'sap/ui/test/_ControlFinder',
    'sap/ui/thirdparty/jquery'
], function (ManagedObject, _OpaLogger, _ControlFinder, $) {
	"use strict";

    var _ControlSelectorValidator = ManagedObject.extend("sap.ui.test.selectors._ControlSelectorValidator", {
        constructor: function (aSelectors, oValidationAncestor) {
            this.aSelectors = aSelectors;
            this.oValidationAncestor = oValidationAncestor;
            this._oLogger = _OpaLogger.getLogger("sap.ui.test.selectors._ControlSelectorValidator");
        },

        // test selector for uniqueness and gather results in aSelectors
        _validate: function (mSelector) {
            if (mSelector) {
                // use $.extend because _findControls will manipulate the selector object
                var aLocatedControls = _ControlFinder._findControls($.extend({}, mSelector));

                if (this.oValidationAncestor && aLocatedControls.length > 1) {
                    // the control should be unique among siblings
                    aLocatedControls = aLocatedControls.filter(function (oControl) {
                        return this._hasAncestor(oControl, this.oValidationAncestor);
                    }.bind(this));
                }

                if (aLocatedControls.length === 1) {
                    this._oLogger.debug("Selector matched a single control: " + JSON.stringify(mSelector));
                    this.aSelectors.push(mSelector);
                } else {
                    this._oLogger.debug("Selector matched multiple controls: " + JSON.stringify(mSelector));
                }
            }
        },

        _hasAncestor: function (oControl, oAncestor) {
            var oParent = oControl.getParent();
            return !!oParent && (oParent === oAncestor || this._hasAncestor(oParent, oAncestor));
        }
    });

    return _ControlSelectorValidator;
});
