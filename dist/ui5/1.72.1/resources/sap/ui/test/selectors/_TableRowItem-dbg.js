/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define([
    "sap/ui/test/selectors/_BindingPath",
    "sap/m/ListBase",
    "sap/m/ListItemBase",
    "sap/ui/thirdparty/jquery"
], function (_BindingPath, ListBase, ListItemBase, $) {
    "use strict";

    /**
     * Selector generator for an item inside row in a ListBase control (eg: table)
     * example: select button in 5th table row
     * @class Control selector generator: table row
     * @extends sap.ui.test.selectors._BindingPath
     * @alias sap.ui.test.selectors._TableRowItem
     * @private
     */
    var _TableRowItem = _BindingPath.extend("sap.ui.test.selectors._TableRowItem", {

        /**
         * @param {object} oControl the control for which to generate a selector
         * @param {object} mTableSelector unique selector for the control's table
         * @param {object} mRowRelativeSelector selector for the control that is unique in the row subtree
         * @returns {object} a plain object representation of a control. Contains unique selector within row, row binding path and table selector
         * Undefined if the control is not inside a table
         * @private
         */
        _generate: function (oControl, mTableSelector, mRowRelativeSelector) {
            if (mTableSelector && mRowRelativeSelector) {
                var oRow = this._findRow(oControl);
                var oTable = this._findTable(oRow);

                var oTableBindingInfo = oTable.getBinding("items");
                var sRowBindingContextPath = oRow.getBindingContextPath && oRow.getBindingContextPath();
                var mRowSelector = {};
                // tables may not have an items binding eg: forms as tables
                if (oTableBindingInfo && sRowBindingContextPath) {
                    mRowSelector = $.extend(this._createSelectorBase(oRow, {}), {
                        bindingPath: {
                            modelName: oTableBindingInfo.model || undefined,
                            path: sRowBindingContextPath
                        },
                        ancestor: mTableSelector
                    });
                }

                this._oLogger.debug("Control " + oControl + " has table row binding context path " + sRowBindingContextPath);

                return $.extend({}, mRowRelativeSelector, {
                    ancestor: mRowSelector
                });
            } else {
                this._oLogger.debug("Control " + oControl + " does not have unique selector within row subtree or unique table selector");
            }
        },

        _getAncestors: function (oControl) {
            var mAncestors = {};
            var oRow = this._findRow(oControl);
            if (oRow) {
                mAncestors.validation = oRow;
                var oTable = this._findTable(oRow);
                if (oTable) {
                    mAncestors.selector = oTable;
                    return mAncestors;
                }
            }
        },

        _findRow: function (oControl) {
            return this._findAncestor(oControl, function (oControl) {
                return oControl instanceof ListItemBase;
            });
        },

        _findTable: function (oControl) {
            return this._findAncestor(oControl, function (oControl) {
                return oControl instanceof ListBase;
            });
        }
    });

    return _TableRowItem;
});
