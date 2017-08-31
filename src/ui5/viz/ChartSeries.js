/* @flow */

/**
 * UI development toolkit enhancement for HTML5 (OpenUI5)
 * (c) Copyright 2016 PulseShift GmbH, all rights reserved.
 * Created by Jascha Quintern (fuchsvomwalde) on 20. Jul 2016.
 */
sap.ui.define(
  ['sap/ui/core/Control', './library'],
  function(Control, library) {
    /**
     * Constructor for a new <code>ui5.viz.ChartSeries</code>.
     *
     * @param {string} [sId] Id for the new control, generated automatically if no id is given
     * @param {object} [mSettings] Initial settings for the new control
     *
     * @class
     * The <code>ChartSeries</code> control: ChartSeries container for bar, line and other chart types. Based on C3.js..
     *
     * @extends sap.ui.core.Control
     *
     * @author PulseShift GmbH
     * @version 1.0.0
     * @since: 1.0.0
     *
     * @constructor
     * @public
     * @alias ui5.viz.ChartSeries
     */
    return Control.extend('ui5.viz.ChartSeries', {
      /* =========================================================== */
      /* meta data definition                                        */
      /* =========================================================== */

      metadata: {
        library: 'ui5.viz',
        properties: {
          /* === Appearance === */

          /**
           * Shows or hides series and legend
           * @since: 1.0.0
           */
          type: {
            type: 'ui5.viz.ChartSeriesType',
            group: 'Appearance',
            defaultValue: library.ChartSeriesType.Spline
          },

          /**
           * Name of the series
           * @since: 1.0.0
           */
          name: { type: 'string', group: 'Appearance', defaultValue: null },

          /**
           * Sets a custom color for the series, overwriting the default color palette
           * @since: 1.0.0
           */
          color: {
            type: 'sap.ui.core.CSSColor',
            group: 'Appearance',
            defaultValue: null
          },

          /**
           * Sets visibility of labels
           * @since: 1.0.0
           */
          showLabels: {
            type: 'boolean',
            group: 'Appearance',
            defaultValue: false
          },

          /**
           * Sets style of series lines (supported types: line, spline, step, area, area-spline, area-step)
           * @since: 1.0.0
           */
          lineStyle: {
            type: 'ui5.viz.LineStyle',
            group: 'Appearance',
            defaultValue: library.LineStyle.Default
          },

          /**
           * Sets style of series shape (supported types: bar)
           * @since: 1.0.0
           */
          shapeStyle: {
            type: 'ui5.viz.ShapeStyle',
            group: 'Appearance',
            defaultValue: library.ShapeStyle.Default
          },

          /**
           * Sets speed of animated dashes / dots (none, slow, medium, fast)
           * @since: 1.0.0
           */
          lineAnimationSpeed: {
            type: 'ui5.viz.AnimationSpeed',
            group: 'Appearance',
            defaultValue: library.AnimationSpeed.None
          },

          /**
           * Sets if line animation should run forwards or backwards
           * @since: 1.0.0
           */
          lineAnimationForwards: {
            type: 'boolean',
            group: 'Appearance',
            defaultValue: true
          },

          /**
           * ChartSeries with the same group key are displayed as a cluster (e.g. stacked bar)
           * @since: 1.0.0
           */
          groupKey: { type: 'string', group: 'Appearance', defaultValue: null },

          /**
           * Sets the referenced y axis the ChartSeriesData value property is related to
           * @since: 1.0.0
           */
          yAxis: {
            type: 'ui5.viz.Axis',
            group: 'Appearance',
            defaultValue: library.Axis.Y
          },

          /* === Data === */

          /**
           * Unique key for the series
           * @since: 1.0.0
           */
          key: { type: 'string', group: 'Data', defaultValue: null }
        },
        aggregations: {
          /**
           * Defines the data points of our series
           * @since: 1.0.0
           */
          data: { type: 'ui5.viz.ChartDataPoint', multiple: true }
        },
        defaultAggregation: 'data',
        associations: {},
        events: {
          /**
           * Series was updated
           */
          seriesDataUpdate: {
            parameters: {
              /**
               * Chart update event code.
               */
              code: { type: 'ui5.viz.ChartUpdateCode' }
            }
          },

          /**
           * Series visibility have changed
           */
          seriesVisibilityChange: {
            parameters: {
              /**
               * Reference to respective series.
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
      // renderer(oRm, oControl) {},

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
        this.fireSeriesDataUpdate({
          code: library.ChartUpdateCode.DataPoint
        })
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
        if (sAggregationName === 'data') {
          // important: update value, before fire event
          Control.prototype.insertAggregation.call(
            this,
            sAggregationName,
            oObject,
            true
          )

          // forward dataUpdate event
          oObject.attachDataPointUpdate(() => {
            this.fireSeriesDataUpdate({
              code: library.ChartUpdateCode.DataPoint
            })
          })

          // inform observers about data update
          this.fireSeriesDataUpdate({
            code: library.ChartUpdateCode.DataPoint
          })
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
        if (sAggregationName === 'data') {
          // important: update value, before fire event
          Control.prototype.addAggregation.call(
            this,
            sAggregationName,
            oObject,
            true
          )

          // forward dataUpdate event
          oObject.attachDataPointUpdate(() => {
            this.fireSeriesDataUpdate({
              code: library.ChartUpdateCode.DataPoint
            })
          })

          // inform observers about data update
          this.fireSeriesDataUpdate({
            code: library.ChartUpdateCode.DataPoint
          })
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
        if (sAggregationName === 'data') {
          // important: update value, before fire event
          Control.prototype.removeAggregation.call(
            this,
            sAggregationName,
            oObject,
            true
          )

          // forward dataUpdate event
          oObject.attachDataPointUpdate(() => {
            this.fireSeriesDataUpdate({
              code: library.ChartUpdateCode.DataPoint
            })
          })

          // inform observers about data update
          this.fireSeriesDataUpdate({
            code: library.ChartUpdateCode.DataPoint
          })
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
        if (sAggregationName === 'data') {
          // important: update value, before fire event
          Control.prototype.removeAllAggregation.call(
            this,
            sAggregationName,
            true
          )

          // inform observers about data update
          this.fireSeriesDataUpdate({
            code: library.ChartUpdateCode.DataPoint
          })
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
        if (sAggregationName === 'data') {
          // important: update value, before fire event
          Control.prototype.destroyAggregation.call(
            this,
            sAggregationName,
            true
          )

          // inform observers about data update
          this.fireSeriesDataUpdate({
            code: library.ChartUpdateCode.DataPoint
          })
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
       * @param sName {string} Property name to be set
       * @param vValue {boolean | string | object} Property value to be set
       * @param bSuppressInvalidation {boolean} Whether invalidation to be suppressed
       * @return {ui5.viz.ChartSeries} This instance for chaining
       * @public
       */
      setProperty(sName, vValue, bSuppressInvalidation) {
        if (
          [
            'type',
            'name',
            'color',
            'showLabels',
            'groupKey',
            'visible',
            'yAxis',
            'lineStyle',
            'shapeStyle',
            'lineAnimationSpeed',
            'lineAnimationForwards'
          ].includes(sName)
        ) {
          // important: update value, before fire event
          Control.prototype.setProperty.call(this, sName, vValue, true) // do not rerender

          // inform observers about data update
          this.fireSeriesDataUpdate()
        } else if (sName === 'visible') {
          // important: update value, before fire event
          Control.prototype.setProperty.call(this, sName, vValue, true) // do not rerender

          // inform observers about show/hide series
          this.fireSeriesVisibilityChange({
            chartSeries: this
          })
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
