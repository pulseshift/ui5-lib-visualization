/* @flow */

/**
 * UI development toolkit enhancement for HTML5 (OpenUI5)
 * (c) Copyright 2016 PulseShift GmbH, all rights reserved.
 * Created by Jascha Quintern (fuchsvomwalde) on 28. Jul 2016.
 */
sap.ui.define(
  [
    'sap/ui/core/Control', 
    './library'
  ],
  function(Control) {
    /**
     * Constructor for a new <code>ui5.viz.Color</code>.
     *
     * @param {string} [sId] Id for the new control, generated automatically if no id is given
     * @param {object} [mSettings] Initial settings for the new control
     *
     * @class
     * The <code>Color</code> control: Color container for bar, line and other chart types. Based on C3.js..
     *
     * @extends sap.ui.core.Control
     *
     * @author PulseShift GmbH
     * @version 1.0.0
     * @since: 1.0.0
     *
     * @constructor
     * @public
     * @alias ui5.viz.Color
     */
    return Control.extend('ui5.viz.Color', {
      /* =========================================================== */
      /* meta data definition                                        */
      /* =========================================================== */

      metadata: {
        library: 'ui5.viz',
        properties: {
          /* === Appereance === */

          /**
           * Sets the CSS value for the color
           * @since: 1.0.0
           */
          color: {
            type: 'sap.ui.core.CSSColor',
            group: 'Appereance',
            defaultValue: null
          }
        },
        aggregations: {},
        associations: {},
        events: {}
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
      }

      /**
       * Method called before control gets rendered
       * @private
       * @override
       */
      // onBeforeRendering() {},

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
      // onAfterRendering() {},

      /**
       * The exit() method is used to clean up resources and to deregister event handlers.
       * If the exit() method is implemented, SAPUI5 core invokes the method for each control instance when it is destroyed.
       * @private
       * @override
       */
      // exit() {},

      /* =========================================================== */
      /* override methods                                            */
      /* =========================================================== */

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
