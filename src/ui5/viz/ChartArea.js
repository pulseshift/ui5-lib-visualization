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
     * Constructor for a new <code>ui5.viz.ChartArea</code>.
     *
     * @param {string} [sId] Id for the new control, generated automatically if no id is given
     * @param {object} [mSettings] Initial settings for the new control
     *
     * @class
     * The <code>ChartArea</code> control: ChartArea container for bar, line and other chart types. Based on C3.js..
     *
     * @extends sap.ui.core.Element
     *
     * @author PulseShift GmbH
     * @version 1.0.0
     * @since: 1.0.0
     *
     * @constructor
     * @public
     * @alias ui5.viz.ChartArea
     */
    return Element.extend('ui5.viz.ChartArea', {
      /* =========================================================== */
      /* meta data definition                                        */
      /* =========================================================== */

      metadata: {
        library: 'ui5.viz',
        properties: {
          /* === Appereance === */

          /**
           * Sets the ttitleext of the ChartArea
           * @since: 1.0.0
           */
          title: { type: 'string', group: 'Appereance', defaultValue: null },

          /**
           * Sets the position of the title
           * @since: ?
           */
          // titlePosition: { type: "ui5.viz.ChartTitlePosition", group: "Appereance", defaultValue: library.ChartTitlePosition.Start },

          /**
           * Sets the style of the shape
           * @since: 1.0.0
           */
          style: {
            type: 'ui5.viz.ShapeStyle',
            group: 'Appearance',
            defaultValue: library.ShapeStyle.Default
          },

          /**
           * Sets a custom color for the area
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
            defaultValue: library.Axis.X
          },

          /**
           * Sets visibility of the element.
           * @since: 1.0.0
           */
          visible: {
            type: 'boolean',
            group: 'Appereance',
            defaultValue: true
          },

          /* === Data === */

          /**
           * Sets value that is matching a start position on the assigned axis
           * @since: 1.0.0
           */
          startValue: { type: 'string', group: 'Data', defaultValue: null },

          /**
           * Sets value that is matching a end position on the assigned axis
           * @since: 1.0.0
           */
          endValue: { type: 'string', group: 'Data', defaultValue: null }
        },
        aggregations: {},
        associations: {},
        events: {
          /**
           * Line was updated
           */
          areaUpdate: {
            parameters: {
              /**
               * Chart update event code.
               */
              code: { type: 'ui5.viz.ChartUpdateCode' }
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
        this.fireAreaUpdate({
          code: library.ChartUpdateCode.Area
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
            'style',
            'color',
            'axis',
            'title',
            'startValue',
            'endValue',
            'visible'
          ].includes(sName)
        ) {
          // important: update value, before fire event
          Element.prototype.setProperty.call(this, sName, vValue, true)

          // inform observers about control destroy
          this.fireAreaUpdate({
            code: library.ChartUpdateCode.Area
          })
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
