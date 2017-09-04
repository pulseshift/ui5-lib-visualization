/* @flow */
//just added a comment to try a push. -lena, 04.09.17

/**
 * UI development toolkit enhancement for HTML5 (OpenUI5)
 * (c) Copyright 2016 PulseShift GmbH, all rights reserved.
 * Created by Jascha Quintern (fuchsvomwalde) on 28. Jul 2016.
 */
sap.ui.define(
  ['sap/ui/core/Control', './library'],
  function(Control, library) {
    'use strict'

    /**
     * Constructor for a new <code>ui5.viz.ChartLine</code>.
     *
     * @param {string} [sId] Id for the new control, generated automatically if no id is given
     * @param {object} [mSettings] Initial settings for the new control
     *
     * @class
     * The <code>ChartLine</code> control: ChartLine container for bar, line and other chart types. Based on C3.js..
     *
     * @extends sap.ui.core.Control
     *
     * @author PulseShift GmbH
     * @version 1.0.0
     * @since: 1.0.0
     *
     * @constructor
     * @public
     * @alias ui5.viz.ChartLine
     */
    return Control.extend('ui5.viz.ChartLine', {
      /* =========================================================== */
      /* meta data definition                                        */
      /* =========================================================== */

      metadata: {
        library: 'ui5.viz',
        properties: {
          /* === Appereance === */

          /**
           * Sets the ttitleext of the ChartLine
           * @since: 1.0.0
           */
          title: { type: 'string', group: 'Appereance', defaultValue: null },

          /**
           * Sets the position of the title
           * @since: 1.0.0
           */
          titlePosition: {
            type: 'ui5.viz.ChartTitlePosition',
            group: 'Appereance',
            defaultValue: library.ChartTitlePosition.Start
          },

          /**
           * Sets the style of the line
           * @since: 1.0.0
           */
          style: {
            type: 'ui5.viz.LineStyle',
            group: 'Appearance',
            defaultValue: library.LineStyle.Default
          },

          /**
           * Sets a custom color for the line
           * @since: 1.0.0
           */
          color: {
            type: 'sap.ui.core.CSSColor',
            group: 'Appearance',
            defaultValue: null
          },

          /**
           * Sets the referenced y axis the line value property is related to
           * @since: 1.0.0
           */
          axis: {
            type: 'ui5.viz.Axis',
            group: 'Appearance',
            defaultValue: library.Axis.Y
          },

          /**
           * Sets the visibility of a line selector.
           * @since: 1.0.0
           */
          showLineSelector: {
            type: 'boolean',
            group: 'Appearance',
            defaultValue: false
          },

          /**
           * Sets if only icon or icon with circle should be displayed.
           * @since: 1.0.0
           */
          selectorIconOnly: {
            type: 'boolean',
            group: 'Appearance',
            defaultValue: false
          },

          /**
           * Sets the the icon for the line selector.
           * @since: 1.0.0
           */
          lineSelectorIcon: {
            type: 'sap.ui.core.URI',
            group: 'Appearance',
            defaultValue: 'sap-icon://flag'
          },

          /* === Data === */

          /**
           * Sets value that is matching a position on the assigned axis
           * @since: 1.0.0
           */
          value: { type: 'string', group: 'Data', defaultValue: null }
        },
        aggregations: {},
        associations: {},
        events: {
          /**
           * Line was updated
           */
          lineUpdate: {
            parameters: {
              /**
               * Chart update event code.
               */
              code: { type: 'ui5.viz.ChartUpdateCode' }
            }
          },

          /**
           * Line selector was pressed
           */
          selectorPress: {
            parameters: {
              /**
               * Chart line that was clicked.
               */
              line: { type: 'ui5.viz.ChartLine' },

              /**
               * Dom reference of line selector.
               */
              selectorDomRef: { type: 'object' }
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
        this.fireLineUpdate({
          code: library.ChartUpdateCode.Line
        })
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
          [
            'title',
            'titlePosition',
            'style',
            'color',
            'axis',
            'value',
            'visible'
          ].includes(sName)
        ) {
          // important: update value, before fire event
          Control.prototype.setProperty.call(this, sName, vValue, true)

          // inform observers about data update
          this.fireLineUpdate({
            code: library.ChartUpdateCode.Line
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
