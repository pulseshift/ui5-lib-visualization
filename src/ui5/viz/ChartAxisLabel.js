/* @flow */

/**
 * UI development toolkit enhancement for HTML5 (OpenUI5)
 * (c) Copyright 2016 PulseShift GmbH, all rights reserved.
 * Created by Jascha Quintern (fuchsvomwalde) on 28. Jul 2016.
 */
sap.ui.define(
  ['sap/ui/core/Element', './library'],
  function(Element, library) {
    /**
     * Constructor for a new <code>ui5.viz.ChartAxisLabel</code>.
     *
     * @param {string} [sId] Id for the new control, generated automatically if no id is given
     * @param {object} [mSettings] Initial settings for the new control
     *
     * @class
     * The <code>ChartAxisLabel</code> control: ChartAxisLabel container for bar, line and other chart types. Based on C3.js..
     *
     * @extends sap.ui.core.Element
     *
     * @author PulseShift GmbH
     * @version 1.0.0
     * @since: 1.0.0
     *
     * @constructor
     * @public
     * @alias ui5.viz.ChartAxisLabel
     */
    return Element.extend('ui5.viz.ChartAxisLabel', {
      /* =========================================================== */
      /* meta data definition                                        */
      /* =========================================================== */

      metadata: {
        library: 'ui5.viz',
        properties: {
          /* === Appereance === */

          /**
           * Sets axis value
           * @since: 1.0.0
           */
          value: { type: 'any', group: 'Appereance', defaultValue: null },

          /**
           * Sets axis label title
           * @since: 1.0.0
           */
          title: { type: 'string', group: 'Appereance', defaultValue: null },

          /**
           * Sets axis label icon
           * @since: ?
           */
          // icon: { type: "sap.ui.core.URI", group: "Appereance", defaultValue: false }

          /**
           * Sets visibility of the element.
           * @since: 1.0.0
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
           */
          axisLabelUpdate: {}
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
      constructor() {
        Element.prototype.constructor.apply(this, arguments)
      },

      /**
       * The init() method can be used to set up, for example, internal variables or subcontrols of a composite control.
       * If the init() method is implemented, SAPUI5 invokes the method for each control instance directly after the constructor method.
       * @private
       * @override
       */
      init() {},

      /**
       * The exit() method is used to clean up resources and to deregister event handlers.
       * If the exit() method is implemented, SAPUI5 core invokes the method for each control instance when it is destroyed.
       * @private
       * @override
       */
      exit() {
        // inform observers about control destroy
        this.fireAxisLabelUpdate()
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
        // to be compatible with chart type category, we must convert all values to string
        if (sName === 'value' && vValue !== null && vValue !== undefined) {
          vValue = vValue.toString()
        }

        if (['value', 'title', 'visible'].includes(sName)) {
          // important: update value, before fire event
          Element.prototype.setProperty.call(this, sName, vValue, true)

          // inform observers about data update
          this.fireAxisLabelUpdate()
        } else {
          Element.prototype.setProperty.call(
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
