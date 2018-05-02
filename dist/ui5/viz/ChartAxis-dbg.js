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
   * Constructor for a new <code>ui5.viz.ChartAxis</code>.
   *
   * @param {string} [sId] Id for the new control, generated automatically if no id is given
   * @param {object} [mSettings] Initial settings for the new control
   *
   * @class
   * The <code>ChartAxis</code> control: ChartAxis container for bar, line and other chart types. Based on C3.js..
   *
   * @extends sap.ui.core.Element
   *
   * @author PulseShift GmbH
   *
   * @constructor
   * @public
   * @alias ui5.viz.ChartAxis
   */
  return Element.extend('ui5.viz.ChartAxis', {
    /* =========================================================== */
    /* meta data definition                                        */
    /* =========================================================== */

    metadata: {
      library: 'ui5.viz',
      properties: {
        /* === Appereance === */

        /**
         * Sets axis title
         */
        title: { type: 'string', group: 'Appereance', defaultValue: null },

        /**
         * Sets the posotion of the title
         */
        // titlePosition: { type: 'ui5.viz.AxisTitlePosition', group: 'Appereance', defaultValue: 'library.AxisTitlePosition.Default' },

        /**
         * Sets axis title visibility
         */
        showTitle: {
          type: 'boolean',
          group: 'Appereance',
          defaultValue: true
        },

        /**
         * Sets the grid lines style
         */
        // gridLinesStyle: { type: 'ui5.viz.LineStyle', group: 'Appereance', defaultValue: 'library.LineStyle.Default' },

        /**
         * Sets visibility of grid lines
         * Hint: live update by c3 API is not supported, yet, therefore we must rerender the chart
         */
        showGridLines: {
          type: 'boolean',
          group: 'Appereance',
          defaultValue: false
        },

        /**
         * Sets the minimal value of the axis. (use index/position for category X-axis, too)
         */
        minValue: { type: 'string', group: 'Appereance', defaultValue: null },

        /**
         * Sets the maximal value of the axis. (use index/position for category X-axis, too)
         */
        maxValue: { type: 'string', group: 'Appereance', defaultValue: null },

        /**
         * Flag wether or not the <code>ui5.viz.ChartAxisLabel</code> should be used to define tick values.
         */
        autoTickValues: { type: 'boolean', group: 'Appereance', defaultValue: false },

        /**
         * Sets visibility of the element.
         */
        visible: {
          type: 'boolean',
          group: 'Appereance',
          defaultValue: true
        },

        /**
         * Sets the axis type
         * @private
         */
        _axisType: {
          type: 'ui5.viz.Axis',
          group: 'Data',
          hidden: true,
          defaultValue: library.Axis.X
        }
      },
      aggregations: {
        /**
         * Sets the labels displayed on the axis
         * Hint: live update by c3 API is only supported for X axis, yet, therefore we must rerender the chart
         */
        labels: { type: 'ui5.viz.ChartAxisLabel', multiple: true }
      },
      defaultAggregation: 'labels',
      associations: {},
      events: {
        /**
         * Axis was updated
         * @event axisUpdate
         */
        axisUpdate: {}
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
      this.fireAxisUpdate();
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
      // only fire axis update if axis type is X axis
      if (sAggregationName === 'labels' && this.getProperty('_axisType') === library.Axis.X) {
        // important: update value, before fire event
        Element.prototype.insertAggregation.call(this, sAggregationName, oObject, true);

        // forward labelsUpdate event
        oObject.attachAxisLabelUpdate(this.fireAxisUpdate.bind(this));

        // inform observers about labels update
        this.fireAxisUpdate();
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
      // only fire axis update if axis type is X axis
      if (sAggregationName === 'labels' && this.getProperty('_axisType') === library.Axis.X) {
        // important: update value, before fire event
        Element.prototype.addAggregation.call(this, sAggregationName, oObject, true);

        // forward labelsUpdate event
        oObject.attachAxisLabelUpdate(this.fireAxisUpdate.bind(this));

        // inform observers about labels update
        this.fireAxisUpdate();
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
      // only fire axis update if axis type is X axis
      if (sAggregationName === 'labels' && this.getProperty('_axisType') === library.Axis.X) {
        // important: update value, before fire event
        Element.prototype.removeAggregation.call(this, sAggregationName, oObject, true);

        // forward labelsUpdate event
        oObject.attachAxisLabelUpdate(this.fireAxisUpdate.bind(this));

        // inform observers about labels update
        this.fireAxisUpdate();
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
      // only fire axis update if axis type is X axis
      if (sAggregationName === 'labels' && this.getProperty('_axisType') === library.Axis.X) {
        // important: update value, before fire event
        Element.prototype.removeAllAggregation.call(this, sAggregationName, true);

        // inform observers about labels update
        this.fireAxisUpdate();
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
      // only fire axis update if axis type is X axis
      if (sAggregationName === 'labels' && this.getProperty('_axisType') === library.Axis.X) {
        // important: update value, before fire event
        Element.prototype.destroyAggregation.call(this, sAggregationName, true);

        // inform observers about labels update
        this.fireAxisUpdate();
      } else {
        Element.prototype.destroyAggregation.call(this, sAggregationName, bSuppressInvalidate);
      }

      return this;
    },


    /**
     * Overwrites the method in order to check on supported properties.
     *
     * @param {string} [sName] Property name to be set
     * @param {any} [vValue] Property value to be set
     * @param {boolean} [bSuppressInvalidation] Whether invalidation to be suppressed
     * @return {ui5.viz.ChartSeries} This instance for chaining
     * @public
     * @override
     */
    setProperty: function setProperty(sName, vValue, bSuppressInvalidation) {
      // TODO: Check why change of 'minValue' or 'maxValue' are not working without rerender (simple examples are working)
      if (['title', 'showTitle', 'visible'].includes(sName)) {
        // important: update value, before fire event
        Element.prototype.setProperty.call(this, sName, vValue, true); // do not rerender

        // inform observers about data update
        this.fireAxisUpdate();
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