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
     * Constructor for a new <code>ui5.viz.ChartDataPoint</code>.
     *
     * @param {string} [sId] Id for the new control, generated automatically if no id is given
     * @param {object} [mSettings] Initial settings for the new control
     *
     * @class
     * The <code>ChartDataPoint</code> control: ChartDataPoint container for bar, line and other chart types. Based on C3.js..
     *
     * @extends sap.ui.core.Control
     *
     * @author PulseShift GmbH
     * @version 1.0.0
     * @since: 1.0.0
     *
     * @constructor
     * @public
     * @alias ui5.viz.ChartDataPoint
         */
    return Control.extend('ui5.viz.ChartDataPoint', {
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
           * @since: 1.0.0
           */
          highlightAnimation: {
            type: 'ui5.viz.DataPointAnimation',
            group: 'Appearance',
            defaultValue: library.DataPointAnimation.None
          },

          /* === Data === */

          /**
           * Sets the representation of value as formatted text
           * @since: 1.0.0
           */
          label: { type: 'string', group: 'Data', defaultValue: null },

          /**
           * Sets the value the data point should represent
           * Hint: To support null as value, the type must be "any"
           * @since: 1.0.0
           */
          value: { type: 'any', group: 'Data', defaultValue: null }
        },
        aggregations: {},
        associations: {},
        events: {
          /**
           * Data was updated
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
        this.fireDataPointUpdate()
      },

      /* =========================================================== */
      /* override methods                                            */
      /* =========================================================== */

      /**
       * Overwrites the method in order to check on supported properties.
       *
       * @param sName {string} Property name to be set
       * @param vValue {boolean | string | object} Property value to be set
       * @param bSuppressInvalidation {boolean} Whether invalidation to be suppressed
       * @return {ui5.viz.ChartDataPoint} This instance for chaining
       * @public
       */
      setProperty(sName, vValue, bSuppressInvalidation) {
        if (
          ['value', 'label', 'visible', 'highlightAnimation'].includes(sName)
        ) {
          // important: update value, before fire event
          Control.prototype.setProperty.call(this, sName, vValue, true)

          // inform observers about data update
          this.fireDataPointUpdate()
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
