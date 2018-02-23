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
   * Constructor for a new <code>ui5.viz.ChartSeries</code>.
   *
   * @param {string} [sId] Id for the new control, generated automatically if no id is given
   * @param {object} [mSettings] Initial settings for the new control
   *
   * @class
   * The <code>ChartSeries</code> control: ChartSeries container for bar, line and other chart types. Based on C3.js..
   *
   * @extends sap.ui.core.Element
   *
   * @author PulseShift GmbH
   *
   * @constructor
   * @public
   * @alias ui5.viz.ChartSeries
   */
  return Element.extend('ui5.viz.ChartSeries', {
    /* =========================================================== */
    /* meta data definition                                        */
    /* =========================================================== */

    metadata: {
      library: 'ui5.viz',
      properties: {
        /* === Appearance === */

        /**
         * Shows or hides series and legend
         */
        type: {
          type: 'ui5.viz.ChartSeriesType',
          group: 'Appearance',
          defaultValue: library.ChartSeriesType.Spline
        },

        /**
         * Name of the series
         */
        name: { type: 'string', group: 'Appearance', defaultValue: null },

        /**
         * Sets a custom color for the series, overwriting the default color palette
         */
        color: {
          type: 'sap.ui.core.CSSColor',
          group: 'Appearance',
          defaultValue: null
        },

        /**
         * Sets visibility of labels
         */
        showLabels: {
          type: 'boolean',
          group: 'Appearance',
          defaultValue: false
        },

        /**
         * Sets style of series lines (supported types: line, spline, step, area, area-spline, area-step)
         */
        lineStyle: {
          type: 'ui5.viz.LineStyle',
          group: 'Appearance',
          defaultValue: library.LineStyle.Default
        },

        /**
         * Sets style of series shape (supported types: bar)
         */
        shapeStyle: {
          type: 'ui5.viz.ShapeStyle',
          group: 'Appearance',
          defaultValue: library.ShapeStyle.Default
        },

        /**
         * Sets speed of animated dashes / dots (none, slow, medium, fast)
         */
        lineAnimationSpeed: {
          type: 'ui5.viz.AnimationSpeed',
          group: 'Appearance',
          defaultValue: library.AnimationSpeed.None
        },

        /**
         * Sets if line animation should run forwards or backwards
         */
        lineAnimationForwards: {
          type: 'boolean',
          group: 'Appearance',
          defaultValue: true
        },

        /**
         * ChartSeries with the same group key are displayed as a cluster (e.g. stacked bar)
         */
        groupKey: { type: 'string', group: 'Appearance', defaultValue: null },

        /**
         * Sets the referenced y axis the ChartSeriesData value property is related to
         */
        yAxis: {
          type: 'ui5.viz.Axis',
          group: 'Appearance',
          defaultValue: library.Axis.Y
        },

        /**
         * Sets visibility of the element.
         */
        visible: {
          type: 'boolean',
          group: 'Appereance',
          defaultValue: true
        },

        /* === Data === */

        /**
         * Unique key for the series
         */
        key: { type: 'string', group: 'Data', defaultValue: null }
      },
      aggregations: {
        /**
         * Defines the data points of our series
         */
        data: { type: 'ui5.viz.ChartDataPoint', multiple: true }
      },
      defaultAggregation: 'data',
      associations: {},
      events: {
        /**
         * Series was updated
         * @event seriesDataUpdate
         */
        seriesDataUpdate: {
          parameters: {
            /**
             * Chart update event code.
             * @event seriesDataUpdate
             */
            code: { type: 'ui5.viz.ChartUpdateCode' }
          }
        },

        /**
         * Series visibility have changed
         * @event seriesVisibilityChange
         */
        seriesVisibilityChange: {
          parameters: {
            /**
             * Reference to respective series.
             * @event seriesVisibilityChange
             */
            chartSeries: { type: 'ui5.viz.ChartSeries' }
          }
        }
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
      this.fireSeriesDataUpdate({
        code: library.ChartUpdateCode.DataPoint
      });
    },


    /* =========================================================== */
    /* override methods                                            */
    /* =========================================================== */

    /**
     * Inserts managed object oObject to the aggregation named sAggregationName at position iIndex.
     *
     * @param {string} [sAggregationName] the string identifying the aggregation the managed object oObject should be inserted into.
     * @param {sap.ui.base.ManagedObject} [oObject] the ManagedObject to add; if empty, nothing is inserted.
     * @param {int} [iIndex] the 0-based index the managed object should be inserted at; for a negative value iIndex, oObject is inserted at position 0; for a value greater than the current size of the aggregation, oObject is inserted at the last position
     * @param {boolean} [bSuppressInvalidate] if true, this ManagedObject as well as the added child are not marked as changed
     * @return {ui5.viz.ChartSeries} This instance for chaining
     * @public
     * @override
     */
    insertAggregation: function insertAggregation(sAggregationName, oObject, iIndex, bSuppressInvalidate) {
      var _this = this;

      if (sAggregationName === 'data') {
        // important: update value, before fire event
        Element.prototype.insertAggregation.call(this, sAggregationName, oObject, true);

        // forward dataUpdate event
        oObject.attachDataPointUpdate(function () {
          _this.fireSeriesDataUpdate({
            code: library.ChartUpdateCode.DataPoint
          });
        });

        // inform observers about data update
        this.fireSeriesDataUpdate({
          code: library.ChartUpdateCode.DataPoint
        });
      } else {
        Element.prototype.insertAggregation.call(this, sAggregationName, oObject, iIndex, bSuppressInvalidate);
      }

      return this;
    },


    /**
     * Adds some entity oObject to the aggregation identified by sAggregationName.
     *
     * @param {string} [sAggregationName] the string identifying the aggregation the managed object oObject should be inserted into.
     * @param {sap.ui.base.ManagedObject} [oObject] the ManagedObject to add; if empty, nothing is inserted.
     * @param {boolean} [bSuppressInvalidate] if true, this ManagedObject as well as the added child are not marked as changed
     * @return {ui5.viz.ChartSeries} This instance for chaining
     * @public
     * @override
     */
    addAggregation: function addAggregation(sAggregationName, oObject, bSuppressInvalidate) {
      var _this2 = this;

      if (sAggregationName === 'data') {
        // important: update value, before fire event
        Element.prototype.addAggregation.call(this, sAggregationName, oObject, true);

        // forward dataUpdate event
        oObject.attachDataPointUpdate(function () {
          _this2.fireSeriesDataUpdate({
            code: library.ChartUpdateCode.DataPoint
          });
        });

        // inform observers about data update
        this.fireSeriesDataUpdate({
          code: library.ChartUpdateCode.DataPoint
        });
      } else {
        Element.prototype.addAggregation.call(this, sAggregationName, oObject, bSuppressInvalidate);
      }

      return this;
    },


    /**
     * Removes an object from the aggregation named sAggregationName with cardinality 0..n.
     *
     * @param {string} [sAggregationName] the string identifying the aggregation the managed object oObject should be inserted into.
     * @param {sap.ui.base.ManagedObject} [oObject] the ManagedObject to add; if empty, nothing is inserted.
     * @param {boolean} [bSuppressInvalidate] if true, this ManagedObject as well as the added child are not marked as changed
     * @return {ui5.viz.ChartSeries} This instance for chaining
     * @public
     * @override
     */
    removeAggregation: function removeAggregation(sAggregationName, oObject, bSuppressInvalidate) {
      var _this3 = this;

      if (sAggregationName === 'data') {
        // important: update value, before fire event
        Element.prototype.removeAggregation.call(this, sAggregationName, oObject, true);

        // forward dataUpdate event
        oObject.attachDataPointUpdate(function () {
          _this3.fireSeriesDataUpdate({
            code: library.ChartUpdateCode.DataPoint
          });
        });

        // inform observers about data update
        this.fireSeriesDataUpdate({
          code: library.ChartUpdateCode.DataPoint
        });
      } else {
        Element.prototype.removeAggregation.call(this, sAggregationName, oObject, bSuppressInvalidate);
      }

      return this;
    },


    /**
     * Removes all objects from the 0..n-aggregation named sAggregationName.
     *
     * @param {string} [sAggregationName] the string identifying the aggregation the managed object oObject should be inserted into.
     * @param {boolean} [bSuppressInvalidate] if true, this ManagedObject as well as the added child are not marked as changed
     * @return {ui5.viz.ChartSeries} This instance for chaining
     * @public
     * @override
     */
    removeAllAggregation: function removeAllAggregation(sAggregationName, bSuppressInvalidate) {
      if (sAggregationName === 'data') {
        // important: update value, before fire event
        Element.prototype.removeAllAggregation.call(this, sAggregationName, true);

        // inform observers about data update
        this.fireSeriesDataUpdate({
          code: library.ChartUpdateCode.DataPoint
        });
      } else {
        Element.prototype.removeAllAggregation.call(this, sAggregationName, bSuppressInvalidate);
      }

      return this;
    },


    /**
     * Destroys (all) the managed object(s) in the aggregation named sAggregationName and empties the aggregation. If the aggregation did contain any object, this ManagedObject is marked as changed.
     *
     * @param {string} [sAggregationName] the string identifying the aggregation the managed object oObject should be inserted into.
     * @param {boolean} [bSuppressInvalidate] if true, this ManagedObject as well as the added child are not marked as changed
     * @return {ui5.viz.ChartSeries} This instance for chaining
     * @public
     * @override
     */
    destroyAggregation: function destroyAggregation(sAggregationName, bSuppressInvalidate) {
      if (sAggregationName === 'data') {
        // important: update value, before fire event
        Element.prototype.destroyAggregation.call(this, sAggregationName, true);

        // inform observers about data update
        this.fireSeriesDataUpdate({
          code: library.ChartUpdateCode.DataPoint
        });
      } else {
        Element.prototype.destroyAggregation.call(this, sAggregationName, bSuppressInvalidate);
      }

      return this;
    },


    /**
     * Overwrites the method in order to check on supported properties.
     *
     * @param {string} [sName] Property name to be set
     * @param {boolean|string|object} [vValue] Property value to be set
     * @param {boolean} [bSuppressInvalidation] Whether invalidation to be suppressed
     * @return {ui5.viz.ChartSeries} This instance for chaining
     * @public
     * @override
     */
    setProperty: function setProperty(sName, vValue, bSuppressInvalidation) {
      if (['type', 'name', 'color', 'showLabels', 'groupKey', 'visible', 'yAxis', 'lineStyle', 'shapeStyle', 'lineAnimationSpeed', 'lineAnimationForwards'].includes(sName)) {
        // important: update value, before fire event
        Element.prototype.setProperty.call(this, sName, vValue, true); // do not rerender

        // inform observers about data update
        this.fireSeriesDataUpdate();
      } else if (sName === 'visible') {
        // important: update value, before fire event
        Element.prototype.setProperty.call(this, sName, vValue, true); // do not rerender

        // inform observers about show/hide series
        this.fireSeriesVisibilityChange({
          chartSeries: this
        });
      } else {
        Element.prototype.setProperty.call(this, sName, vValue, bSuppressInvalidation);
      }

      return this;
    }

    /* =========================================================== */
    /* public methods                                              */
    /* =========================================================== */

    /* =========================================================== */
    /* private methods                                             */
    /* =========================================================== */

  });
},
/* bExport= */true);