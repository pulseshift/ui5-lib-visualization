/* @flow */

/**
 * UI development toolkit enhancement for HTML5 (OpenUI5)
 * (c) Copyright 2016 PulseShift GmbH, all rights reserved.
 * Created by Jascha Quintern (fuchsvomwalde) on 28. Jul 2016.
 */
sap.ui.define(
  ['sap/ui/core/Control', './library'],
  function(Control, library) {
    /**
     * Constructor for a new <code>ui5.viz.ChartAxis</code>.
     *
     * @param {string} [sId] Id for the new control, generated automatically if no id is given
     * @param {object} [mSettings] Initial settings for the new control
     *
     * @class
     * The <code>ChartAxis</code> control: ChartAxis container for bar, line and other chart types. Based on C3.js..
     *
     * @extends sap.ui.core.Control
     *
     * @author PulseShift GmbH
     * @version 1.0.0
     * @since: 1.0.0
     *
     * @constructor
     * @public
     * @alias ui5.viz.ChartAxis
     */
    return Control.extend('ui5.viz.ChartAxis', {
      /* =========================================================== */
      /* meta data definition                                        */
      /* =========================================================== */

      metadata: {
        library: 'ui5.viz',
        properties: {
          /* === Appereance === */

          /**
           * Sets axis title
           * @since: 1.0.0
           */
          title: { type: 'string', group: 'Appereance', defaultValue: null },

          /**
           * Sets the posotion of the title
           * @since: ?
           */
          // titlePosition: { type: 'ui5.viz.AxisTitlePosition', group: 'Appereance', defaultValue: 'library.AxisTitlePosition.Default' },

          /**
           * Sets axis title visibility
           * @since: 1.0.0
           */
          showTitle: {
            type: 'boolean',
            group: 'Appereance',
            defaultValue: true
          },

          /**
           * Sets the grid lines style
           * @since: ?
           */
          // gridLinesStyle: { type: 'ui5.viz.LineStyle', group: 'Appereance', defaultValue: 'library.LineStyle.Default' },

          /**
           * Sets visibility of grid lines
           * Hint: live update by c3 API is not supported, yet, therefore we must rerender the chart
           * @since: 1.0.0
           */
          showGridLines: {
            type: 'boolean',
            group: 'Appereance',
            defaultValue: false
          },

          /**
           * Sets the minimal value of the axis.
           * @since: 1.0.0
           */
          minValue: { type: 'string', group: 'Appereance', defaultValue: null },

          /**
           * Sets the maximal value of the axis.
           * @since: 1.0.0
           */
          maxValue: { type: 'string', group: 'Appereance', defaultValue: null },

          /**
           * Sets the axis type
           * @since: 1.0.0
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
           * @since: 1.0.0
           */
          labels: { type: 'ui5.viz.ChartAxisLabel', multiple: true }
        },
        defaultAggregation: 'labels',
        associations: {},
        events: {
          /**
           * Axis was updated
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
       * The init() method can be used to set up, for example, internal variables or subcontrols of a composite control.
       * If the init() method is implemented, SAPUI5 invokes the method for each control instance directly after the constructor method.
       * @private
       * @override
       */
      init() {},

      /**
       * Constructor for a new <code>ui5.viz.Chart</code>.
       *
       * @param {string} [sId] Id for the new control, generated automatically if no id is given
       * @param {object} [mSettings] Initial settings for the new control
       */
      constructor() {
        Control.prototype.constructor.apply(this, arguments)
      },

      /**
       * Method called before control gets rendered
       * @private
       * @override
       */
      onBeforeRendering() {},

      /**
       * Renderer function of control <code>ui5.viz.Chart</code>.
       *
       * @param {object} [oRm] Render Manager
       * @param {object} [oControl] Current control (this)
       */
      renderer(oRm, oControl) {},

      /**
       * Method called after control gets rendered
       * @private
       * @override
       */
      onAfterRendering() {},

      /**
       * The exit() method is used to clean up resources and to deregister event handlers.
       * If the exit() method is implemented, SAPUI5 core invokes the method for each control instance when it is destroyed.
       * @private
       * @override
       */
      exit() {
        // inform observers about control destroy
        this.fireAxisUpdate()
      },

      /* =========================================================== */
      /* override methods                                            */
      /* =========================================================== */

      /**
       * Inserts managed object oObject to the aggregation named sAggregationName at position iIndex.
       *
       * @param sAggregationName {string} the string identifying the aggregation the managed object oObject should be inserted into.
       * @param oObject {sap.ui.base.ManagedObject} the ManagedObject to add; if empty, nothing is inserted.
       * @param iIndex {int} the 0-based index the managed object should be inserted at; for a negative value iIndex, oObject is inserted at position 0; for a value greater than the current size of the aggregation, oObject is inserted at the last position
       * @param bSuppressInvalidate {boolean} if true, this ManagedObject as well as the added child are not marked as changed
       * @return {ui5.viz.ChartSeries} This instance for chaining
       * @public
       */
      insertAggregation(
        sAggregationName,
        oObject,
        iIndex,
        bSuppressInvalidate
      ) {
        // only fire axis update if axis type is X axis
        if (
          sAggregationName === 'labels' &&
          this.getProperty('_axisType') === library.Axis.X
        ) {
          // important: update value, before fire event
          Control.prototype.insertAggregation.call(
            this,
            sAggregationName,
            oObject,
            true
          )

          // forward labelsUpdate event
          oObject.attachAxisLabelUpdate(this.fireAxisUpdate.bind(this))

          // inform observers about labels update
          this.fireAxisUpdate()
        } else {
          Control.prototype.insertAggregation.call(
            this,
            sAggregationName,
            oObject,
            iIndex,
            bSuppressInvalidate
          )
        }

        return this
      },

      /**
       * Adds some entity oObject to the aggregation identified by sAggregationName.
       *
       * @param sAggregationName {string} the string identifying the aggregation the managed object oObject should be inserted into.
       * @param oObject {sap.ui.base.ManagedObject} the ManagedObject to add; if empty, nothing is inserted.
       * @param bSuppressInvalidate {boolean} if true, this ManagedObject as well as the added child are not marked as changed
       * @return {ui5.viz.ChartSeries} This instance for chaining
       * @public
       */
      addAggregation(sAggregationName, oObject, bSuppressInvalidate) {
        // only fire axis update if axis type is X axis
        if (
          sAggregationName === 'labels' &&
          this.getProperty('_axisType') === library.Axis.X
        ) {
          // important: update value, before fire event
          Control.prototype.addAggregation.call(
            this,
            sAggregationName,
            oObject,
            true
          )

          // forward labelsUpdate event
          oObject.attachAxisLabelUpdate(this.fireAxisUpdate.bind(this))

          // inform observers about labels update
          this.fireAxisUpdate()
        } else {
          Control.prototype.addAggregation.call(
            this,
            sAggregationName,
            oObject,
            bSuppressInvalidate
          )
        }

        return this
      },

      /**
       * Removes an object from the aggregation named sAggregationName with cardinality 0..n.
       *
       * @param sAggregationName {string} the string identifying the aggregation the managed object oObject should be inserted into.
       * @param oObject {sap.ui.base.ManagedObject} the ManagedObject to add; if empty, nothing is inserted.
       * @param bSuppressInvalidate {boolean} if true, this ManagedObject as well as the added child are not marked as changed
       * @return {ui5.viz.ChartSeries} This instance for chaining
       * @public
       */
      removeAggregation(sAggregationName, oObject, bSuppressInvalidate) {
        // only fire axis update if axis type is X axis
        if (
          sAggregationName === 'labels' &&
          this.getProperty('_axisType') === library.Axis.X
        ) {
          // important: update value, before fire event
          Control.prototype.removeAggregation.call(
            this,
            sAggregationName,
            oObject,
            true
          )

          // forward labelsUpdate event
          oObject.attachAxisLabelUpdate(this.fireAxisUpdate.bind(this))

          // inform observers about labels update
          this.fireAxisUpdate()
        } else {
          Control.prototype.removeAggregation.call(
            this,
            sAggregationName,
            oObject,
            bSuppressInvalidate
          )
        }

        return this
      },

      /**
       * Removes all objects from the 0..n-aggregation named sAggregationName.
       *
       * @param sAggregationName {string} the string identifying the aggregation the managed object oObject should be inserted into.
       * @param bSuppressInvalidate {boolean} if true, this ManagedObject as well as the added child are not marked as changed
       * @return {ui5.viz.ChartSeries} This instance for chaining
       * @public
       */
      removeAllAggregation(sAggregationName, bSuppressInvalidate) {
        // only fire axis update if axis type is X axis
        if (
          sAggregationName === 'labels' &&
          this.getProperty('_axisType') === library.Axis.X
        ) {
          // important: update value, before fire event
          Control.prototype.removeAllAggregation.call(
            this,
            sAggregationName,
            true
          )

          // inform observers about labels update
          this.fireAxisUpdate()
        } else {
          Control.prototype.removeAllAggregation.call(
            this,
            sAggregationName,
            bSuppressInvalidate
          )
        }

        return this
      },

      /**
       * Destroys (all) the managed object(s) in the aggregation named sAggregationName and empties the aggregation. If the aggregation did contain any object, this ManagedObject is marked as changed.
       *
       * @param sAggregationName {string} the string identifying the aggregation the managed object oObject should be inserted into.
       * @param bSuppressInvalidate {boolean} if true, this ManagedObject as well as the added child are not marked as changed
       * @return {ui5.viz.ChartSeries} This instance for chaining
       * @public
       */
      destroyAggregation(sAggregationName, bSuppressInvalidate) {
        // only fire axis update if axis type is X axis
        if (
          sAggregationName === 'labels' &&
          this.getProperty('_axisType') === library.Axis.X
        ) {
          // important: update value, before fire event
          Control.prototype.destroyAggregation.call(
            this,
            sAggregationName,
            true
          )

          // inform observers about labels update
          this.fireAxisUpdate()
        } else {
          Control.prototype.destroyAggregation.call(
            this,
            sAggregationName,
            bSuppressInvalidate
          )
        }

        return this
      },

      /**
       * Overwrites the method in order to check on supported properties.
       *
       * @param {string} [sName] Property name to be set
       * @param {any} [vValue] Property value to be set
       * @param {boolean} [bSuppressInvalidation] Whether invalidation to be suppressed
       * @return {ui5.viz.ChartSeries} This instance for chaining
       * @public
       */
      setProperty(sName, vValue, bSuppressInvalidation) {
        // TODO: Check why change of 'minValue' or 'maxValue' are not working without rerender (simple examples are working)
        if (['title', 'showTitle', 'visible'].includes(sName)) {
          // important: update value, before fire event
          Control.prototype.setProperty.call(this, sName, vValue, true) // do not rerender

          // inform observers about data update
          this.fireAxisUpdate()
        } else {
          Control.prototype.setProperty.call(
            this,
            sName,
            vValue,
            bSuppressInvalidation
          )
        }

        return this
      }

      /* =========================================================== */
      /* public methods                                              */
      /* =========================================================== */

      /* =========================================================== */
      /* private methods                                             */
      /* =========================================================== */
    })
  },
  /* bExport= */ true
)
