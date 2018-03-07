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
  'use strict';

  /**
   * Constructor for a new <code>ui5.viz.ChartLine</code>.
   *
   * @param {string} [sId] Id for the new control, generated automatically if no id is given
   * @param {object} [mSettings] Initial settings for the new control
   *
   * @class
   * The <code>ChartLine</code> control: ChartLine container for bar, line and other chart types. Based on C3.js..
   *
   * @extends sap.ui.core.Element
   *
   * @author PulseShift GmbH
   *
   * @constructor
   * @public
   * @alias ui5.viz.ChartLine
   */

  return Element.extend('ui5.viz.ChartLine', {
    /* =========================================================== */
    /* meta data definition                                        */
    /* =========================================================== */

    metadata: {
      library: 'ui5.viz',
      properties: {
        /* === Appereance === */

        /**
         * Sets the ttitleext of the ChartLine
         */
        title: { type: 'string', group: 'Appereance', defaultValue: null },

        /**
         * Sets the position of the title
         */
        titlePosition: {
          type: 'ui5.viz.ChartTitlePosition',
          group: 'Appereance',
          defaultValue: library.ChartTitlePosition.Start
        },

        /**
         * Sets the style of the line
         */
        style: {
          type: 'ui5.viz.LineStyle',
          group: 'Appearance',
          defaultValue: library.LineStyle.Solid
        },

        /**
         * Sets a custom color for the line
         */
        color: {
          type: 'sap.ui.core.CSSColor',
          group: 'Appearance',
          defaultValue: null
        },

        /**
         * Sets the referenced y axis the line value property is related to
         */
        axis: {
          type: 'ui5.viz.Axis',
          group: 'Appearance',
          defaultValue: library.Axis.Y
        },

        /**
         * Sets the visibility of a line selector.
         */
        showLineSelector: {
          type: 'boolean',
          group: 'Appearance',
          defaultValue: false
        },

        /**
         * Sets if only icon or icon with circle should be displayed.
         */
        selectorIconOnly: {
          type: 'boolean',
          group: 'Appearance',
          defaultValue: false
        },

        /**
         * Sets the the icon for the line selector.
         */
        lineSelectorIcon: {
          type: 'sap.ui.core.URI',
          group: 'Appearance',
          defaultValue: 'sap-icon://flag'
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
         * Sets value that is matching a position on the assigned axis
         */
        value: { type: 'string', group: 'Data', defaultValue: null }
      },
      aggregations: {},
      associations: {},
      events: {
        /**
         * Line was updated
         * @event lineUpdate
         */
        lineUpdate: {
          parameters: {
            /**
             * Chart update event code.
             * @event lineUpdate
             */
            code: { type: 'ui5.viz.ChartUpdateCode' }
          }
        },

        /**
         * Line selector was pressed
         * @event selectorPress
         */
        selectorPress: {
          parameters: {
            /**
             * Chart line that was clicked.
             * @event selectorPress
             */
            line: { type: 'ui5.viz.ChartLine' },

            /**
             * Dom reference of line selector.
             * @event selectorPress
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
      this.fireLineUpdate({
        code: library.ChartUpdateCode.Line
      });
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
      if (['title', 'titlePosition', 'style', 'color', 'axis', 'value', 'visible'].includes(sName)) {
        // important: update value, before fire event
        Element.prototype.setProperty.call(this, sName, vValue, true);

        // inform observers about data update
        this.fireLineUpdate({
          code: library.ChartUpdateCode.Line
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