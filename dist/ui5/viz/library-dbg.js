'use strict';

/* @flow */

/**
 * Initialization Code and shared classes of library ui5.viz.
 */
sap.ui.define([
// library dependency
'sap/ui/thirdparty/d3'], function () {
  /**
   * PulseShift OpenUI5 library with visualization functionalities.
   *
   * @namespace
   * @name ui5.viz
   * @author PulseShift GmbH
   * @version 1.0.0
   * @public
   */
  sap.ui.getCore().initLibrary({
    name: 'ui5.viz',
    version: '1.0.0',
    dependencies: [],
    types: [
    // builtin types
    'any', 'boolean', 'float', 'int', 'object', 'string', 'void',

    // public simple types and enums
    'ui5.viz.ChartLegendPosition', 'ui5.viz.ChartTitlePosition', 'ui5.viz.ChartSeriesType', 'ui5.viz.ChartDataPointType', 'ui5.viz.LineStyle', 'ui5.viz.ShapeStyle', 'ui5.viz.AnimationSpeed', 'ui5.viz.AxisType', 'ui5.viz.DataPointAnimation', 'ui5.viz.ColorPalette'],
    interfaces: [],
    controls: ['ui5.viz.Chart', 'ui5.viz.ChartSeries', 'ui5.viz.ChartDataPoint', 'ui5.viz.ChartLine', 'ui5.viz.ChartArea', 'ui5.viz.ChartAxis', 'ui5.viz.ChartAxisLabel', 'ui5.viz.Color'],
    elements: []
  });

  /**
   * Available chart legend positions.
   *
   * @enum {string}
   * @public
   */
  ui5.viz.ChartLegendPosition = {
    Right: 'Right',
    Bottom: 'Bottom'

    /**
     * Available chart title positions.
     *
     * @enum {string}
     * @public
     */
  };ui5.viz.ChartTitlePosition = {
    Start: 'Start',
    Middle: 'Middle',
    End: 'End'

    /**
     * Available chart series types.
     *
     * @enum {string}
     * @public
     */
  };ui5.viz.ChartSeriesType = {
    Spline: 'spline',
    Line: 'line',
    Bar: 'bar',
    Step: 'step',
    AreaLine: 'area',
    AreaSpline: 'area-spline',
    AreaStep: 'area-step',
    RibbonLine: 'ribbon-line',
    RibbonStep: 'ribbon-step',
    RibbonSpline: 'ribbon-spline'

    /**
     * Available chart data point types.
     *
     * @enum {string}
     * @public
     */
  };ui5.viz.ChartDataPointType = {
    SingleValue: 'SingleValue',
    ValuePair: 'ValuePair'

    /**
     * Available lines styles.
     *
     * @enum {string}
     * @public
     */
  };ui5.viz.LineStyle = {
    Solid: 'Solid',
    Dashed: 'Dashed',
    Dotted: 'Dotted'

    /**
     * Available shape styles.
     *
     * @enum {string}
     * @public
     */
  };ui5.viz.ShapeStyle = {
    Solid: 'Solid',
    Striped: 'Striped'

    /**
     * Available animation speeds for dashed line animations.
     *
     * @enum {string}
     * @public
     */
  };ui5.viz.AnimationSpeed = {
    None: 'None',
    Slow: 'Slow',
    Medium: 'Medium',
    Fast: 'Fast'

    /**
     * Available axis.
     *
     * @enum {string}
     * @public
     */
  };ui5.viz.Axis = {
    Y: 'Y',
    Y2: 'Y2',
    X: 'X',
    Z: 'Z'

    /**
     * Available axis types.
     *
     * @enum {string}
     * @public
     */
  };ui5.viz.AxisType = {
    Indexed: 'Indexed',
    Category: 'Category',
    Time: 'Time'

    /**
     * Available animation types to highlight data points.
     *
     * @enum {string}
     * @public
     */
  };ui5.viz.DataPointAnimation = {
    None: 'None',
    Pulsate: 'Pulsate'

    /**
     * Available color palettes.
     *
     * @enum {array}
     * @public
     */
  };ui5.viz.ColorPalette = {
    // custom color palette (if set, this will be retrieved as new default)
    custom: null,

    // set of unordered material design colors (shape 500)
    Material500: ['#2196F3', // blue
    '#4CAF50', // green
    '#FF9800', // orange
    '#E91E63', // pink
    '#00BCD4', // cyan
    '#FFEB3B', // yellow
    '#673AB7', // deep purple
    '#009688', // teal
    '#FFC107', // amber
    '#03A9F4', // light blue
    '#CDDC39', // lime
    '#9C27B0', // purple
    '#D32F2F', // red
    '#3F51B5', // indigo
    '#8BC34A', // light green
    '#FF5722' // deep orange
    ],

    // set of ordered material design colors (shape 500)
    Material500S: ['#2196F3', '#03A9F4', '#00BCD4', '#009688', '#4CAF50', '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800', '#FF5722', '#D32F2F', '#E91E63', '#9C27B0', '#673AB7', '#3F51B5'],

    // set of unordered material design colors (shape 300)
    Material300: ['#64B5F6', '#81C784', '#FFB74D', '#F06292', '#4DD0E1', '#FFF176', '#9575CD', '#4DB6AC', '#FFD54F', '#4FC3F7', '#DCE775', '#BA68C8', '#E57373', '#7986CB', '#AED581', '#FF8A65'],

    // set of ordered material design colors (shape 300)
    Material300S: ['#64B5F6', '#4FC3F7', '#4DD0E1', '#4DB6AC', '#81C784', '#AED581', '#DCE775', '#FFF176', '#FFD54F', '#FFB74D', '#FF8A65', '#E57373', '#F06292', '#BA68C8', '#9575CD', '#7986CB']

    /**
     * Define default color palette.
     *
     * @function
     * @param {Array[String]} [aColorPalette] Ordered list with plain CSS colors.
     * @protected
     */
  };ui5.viz.setDefaultColorPalette = function (aColorPalette) {
    ui5.viz.ColorPalette.custom = Array.isArray(aColorPalette) ? aColorPalette : null;
  };

  /**
   * Parse CSS size.
   *
   * @function
   * @param {string} sCSSSize
   * @return { value: {string}, unit: {string} }
   * @protected
   */
  ui5.viz.parseCSSSize = function (sCSSSize) {
    var aUnitMatches = sCSSSize.match(/^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/i) || [];
    return {
      value: parseFloat(sCSSSize, 10),
      unit: aUnitMatches[2] ? aUnitMatches[2].toLowerCase() : 'px'
    };
  };

  /**
   * Available chart update event codes.
   *
   * @enum {string}
   * @protected
   */
  ui5.viz.ChartUpdateCode = {
    DataPoint: 'DataPoint',
    Line: 'Line',
    Area: 'Area'
  };

  return ui5.viz;
});