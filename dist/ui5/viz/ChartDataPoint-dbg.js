'use strict';

/* @flow */

/**
 * @example
 * Sample Usage (XML View)
 *
 * @description
 * This element must be used with the <code>ui5.viz.Chart</code> control and was designed to work best in XML views and in combination with data binding.
 *
 * @type {xml} Markdown code type.
 * @code
 * <Chart>
 *   <!-- tbd -->
 * </Chart>
 */
sap.ui.define(['sap/ui/core/Element', './library'], function (Element, library) {
  /**
     * Constructor for a new <code>ui5.viz.ChartDataPoint</code>.
     *
     * @param {string} [sId] Id for the new control, generated automatically if no id is given
     * @param {object} [mSettings] Initial settings for the new control
     *
     * @class
     * The <code>ChartDataPoint</code> control: ChartDataPoint container for bar, line and other chart types. Based on C3.js..
     *
     * @extends sap.ui.core.Element
     *
     * @author PulseShift GmbH
     *
     * @constructor
     * @public
     * @alias ui5.viz.ChartDataPoint
     */
  return Element.extend('ui5.viz.ChartDataPoint', {
    /* =========================================================== */
    /* meta data definition                                        */
    /* =========================================================== */

    metadata: {
      library: 'ui5.viz',
      properties: {
        /* === Appearance === */

        /**
         * Sets the representation of value as formatted text
         * Hint: Not available for chart types Bar, Step and AreaStep, yet.
         */
        highlightAnimation: {
          type: 'ui5.viz.DataPointAnimation',
          group: 'Appearance',
          defaultValue: library.DataPointAnimation.None
        },

        /**
         * Sets the type of the data point.
         */
        type: {
          type: 'ui5.viz.ChartDataPointType',
          group: 'Appearance',
          defaultValue: library.ChartDataPointType.SingleValue
        },

        /* === Data === */

        /**
         * Sets the representation of value as formatted text
         */
        label: { type: 'string', group: 'Data', defaultValue: null },

        /**
         * Sets the value the data point should represent
         * Hint: To support null as value, the type must be "any"
         */
        value: { type: 'any', group: 'Data', defaultValue: null },

        /**
         * Sets the high value the data point should represent in case of ribbon type
         * Hint: To support null as value, the type must be "any"
         */
        high: { type: 'any', group: 'Data', defaultValue: null },

        /**
         * Sets the low value the data point should represent in case of ribbon type
         * Hint: To support null as value, the type must be "any"
         */
        low: { type: 'any', group: 'Data', defaultValue: null },

        /**
         * Sets visibility of the element.
         */
        visible: {
          type: 'boolean',
          group: 'Appereance',
          defaultValue: true
        }
      },
      aggregations: {},
      associations: {},
      events: {
        /**
         * Data was updated
         * @event dataPointUpdate
         */
        dataPointUpdate: {}
      }
    },

    /* =========================================================== */
    /* private attributes                                          */
    /* =========================================================== */

    /* =========================================================== */
    /* constants                                                   */
    /* =========================================================== */

    /* =========================================================== */
    /* lifecycle methods                                           */
    /* =========================================================== */

    /**
     * Constructor for a new <code>ui5.viz.Chart</code>.
     *
     * @param {string} [sId] Id for the new control, generated automatically if no id is given
     * @param {object} [mSettings] Initial settings for the new control
     */
    constructor: function constructor() {
      Element.prototype.constructor.apply(this, arguments);
    },


    /**
     * The init() method can be used to set up, for example, internal variables or subcontrols of a composite control.
     * If the init() method is implemented, SAPUI5 invokes the method for each control instance directly after the constructor method.
     * @private
     * @override
     */
    init: function init() {},


    /**
     * The exit() method is used to clean up resources and to deregister event handlers.
     * If the exit() method is implemented, SAPUI5 core invokes the method for each control instance when it is destroyed.
     * @private
     * @override
     */
    exit: function exit() {
      // inform observers about control destroy
      this.fireDataPointUpdate();
    },


    /* =========================================================== */
    /* override methods                                            */
    /* =========================================================== */

    /**
     * Overwrites the method in order to check on supported properties.
     *
     * @param {string} [sName] Property name to be set
     * @param {boolean|string|object} [vValue] Property value to be set
     * @param {boolean} [bSuppressInvalidation] Whether invalidation to be suppressed
     * @return {ui5.viz.ChartDataPoint} This instance for chaining
     * @public
     * @override
     */
    setProperty: function setProperty(sName, vValue, bSuppressInvalidation) {
      if (['value', 'high', 'low', 'label', 'visible', 'highlightAnimation'].includes(sName)) {
        // important: update value, before fire event
        Element.prototype.setProperty.call(this, sName, vValue, true);

        // inform observers about data update
        this.fireDataPointUpdate();
      } else {
        Element.prototype.setProperty.call(this, sName, vValue, bSuppressInvalidation);
      }

      return this;
    },


    /**
     * Overwrites getter in order to make sure it is a valid value. Visible can be false due to different reasons.
     * @public
     */
    getVisible: function getVisible() {
      var v = undefined;
      if (this.getType() === library.ChartDataPointType.SingleValue) {
        var v = this.getValue();
        return this.getProperty('visible') && v !== 'null' && v !== 'undefined' && v !== null && v !== undefined;
      } else {
        var h = this.getHigh();
        var l = this.getLow();
        return this.getProperty('visible') && h !== 'null' && h !== 'undefined' && h !== null && h !== undefined && l !== 'null' && l !== 'undefined' && l !== null && l !== undefined;
      }
    },


    /**
     * Overwrites getter in order to make sure it is a valid value. As the data type is any it might also be a string (for example).
     * @public
     */
    getValue: function getValue() {
      var v = this.getProperty('value');
      return !isNaN(v) && v !== null ? parseInt(v, 10) : null;
    },


    /**
     * Overwrites getter in order to make sure it is a valid value. As the data type is any it might also be a string (for example).
     * @public
     */
    getHigh: function getHigh() {
      var h = this.getProperty('high');
      return !isNaN(h) && h !== null ? parseInt(h, 10) : null;
    },


    /**
     * Overwrites getter in order to make sure it is a valid value. As the data type is any it might also be a string (for example).
     * @public
     */
    getLow: function getLow() {
      var l = this.getProperty('low');
      return !isNaN(l) && l !== null ? parseInt(l, 10) : null;
    },


    // FIXME: add jsdoc
    getValueOrValuePair: function getValueOrValuePair() {
      var isVisible = this.getVisible();
      if (this.getType() === library.ChartDataPointType.SingleValue) {
        return isVisible ? this.getValue() : null;
      } else {
        var highValue = this.getHigh();
        var lowValue = this.getLow();
        var result = {
          high: highValue,
          low: lowValue
        };
        return isVisible ? result : { high: null, low: null };
      }
    }
  });
});