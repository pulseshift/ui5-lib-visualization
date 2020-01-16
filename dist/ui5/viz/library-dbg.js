"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Initialization Code and shared classes of library ui5.viz.
 */
sap.ui.define(['./libs/d3'], function (d3) {
  var d3VersionRequired = 5;

  var getMainVersion = function getMainVersion(d3) {
    if (d3) {
      var _d3$version$split = d3.version.split('.'),
          _d3$version$split2 = _slicedToArray(_d3$version$split, 1),
          mainVersion = _d3$version$split2[0];

      return parseInt(mainVersion, 10);
    } else {
      return 0;
    }
  }; // register d3 on global scope


  if (!window.d3 || getMainVersion(window.d3) < d3VersionRequired) {
    window.d3 = d3;
  }
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
    types: [// builtin types
    'any', 'boolean', 'float', 'int', 'object', 'string', // public simple types and enums
    'ui5.viz.ChartLegendPosition', 'ui5.viz.ChartTitlePosition', 'ui5.viz.ChartSeriesType', 'ui5.viz.DataPointType', 'ui5.viz.LineStyle', 'ui5.viz.ShapeStyle', 'ui5.viz.AnimationSpeed', 'ui5.viz.AxisType', 'ui5.viz.DataPointAnimation', 'ui5.viz.ColorPalette'],
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
  };
  /**
   * Available chart title positions.
   *
   * @enum {string}
   * @public
   */

  ui5.viz.ChartTitlePosition = {
    Start: 'Start',
    Middle: 'Middle',
    End: 'End'
  };
  /**
   * Available chart series types.
   *
   * @enum {string}
   * @public
   */

  ui5.viz.ChartSeriesType = {
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
  };
  /**
   * Available chart data point types.
   *
   * @enum {string}
   * @public
   */

  ui5.viz.DataPointType = {
    SingleValue: 'SingleValue',
    ValuePair: 'ValuePair'
  };
  /**
   * Available lines styles.
   *
   * @enum {string}
   * @public
   */

  ui5.viz.LineStyle = {
    Solid: 'Solid',
    Dashed: 'Dashed',
    Dotted: 'Dotted'
  };
  /**
   * Available shape styles.
   *
   * @enum {string}
   * @public
   */

  ui5.viz.ShapeStyle = {
    Solid: 'Solid',
    Striped: 'Striped'
  };
  /**
   * Available animation speeds for dashed line animations.
   *
   * @enum {string}
   * @public
   */

  ui5.viz.AnimationSpeed = {
    None: 'None',
    Slow: 'Slow',
    Medium: 'Medium',
    Fast: 'Fast'
  };
  /**
   * Available axis.
   *
   * @enum {string}
   * @public
   */

  ui5.viz.Axis = {
    Y: 'Y',
    Y2: 'Y2',
    X: 'X',
    Z: 'Z'
  };
  /**
   * Available axis types.
   *
   * @enum {string}
   * @public
   */

  ui5.viz.AxisType = {
    Indexed: 'Indexed',
    Category: 'Category',
    Time: 'Time'
  };
  /**
   * Available animation types to highlight data points.
   *
   * @enum {string}
   * @public
   */

  ui5.viz.DataPointAnimation = {
    None: 'None',
    Pulsate: 'Pulsate'
  };
  /**
   * Available color palettes.
   *
   * @enum {array}
   * @public
   */

  ui5.viz.ColorPalette = {
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
  };
  /**
   * Transform hexadecimal color to RGBA color.
   *
   * @function
   * @param {sap.ui.core.CSSColor} [hex] Hexadecimal color.
   * @param {float} [alpha] Alpha (0-1).
   * @return {sap.ui.core.CSSColor} RGBA color.
   * @public
   */

  ui5.viz.hexToRgba = function (hex) {
    var alpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var a = alpha >= 0 && alpha <= 1 ? alpha : 1;
    var rgbColor = ui5.viz.hexToRgbObject(hex);
    return "rgba(".concat(rgbColor.r, ",").concat(rgbColor.g, ",").concat(rgbColor.b, ",").concat(a, ")");
  };
  /**
   * Transform hexadecimal color to RGB color.
   *
   * @function
   * @param {sap.ui.core.CSSColor} [hex] Hexadecimal color.
   * @return {sap.ui.core.CSSColor} RGB color.
   * @public
   */


  ui5.viz.hexToRgb = function (hex) {
    var rgbColor = ui5.viz.hexToRgbObject(hex);
    return "rgb(".concat(rgbColor.r, ",").concat(rgbColor.g, ",").concat(rgbColor.b, ")");
  };
  /**
   * Lighten hexadecimal color.
   *
   * @function
   * @param {sap.ui.core.CSSColor} [hex] Hexadecimal color.
   * @param {float} [percent] Percentage of lighten intensity (0-100).
   * @return {sap.ui.core.CSSColor} Hexadecimal color.
   * @public
   */


  ui5.viz.lightenHexColor = function (hex) {
    var percent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    // parse hex color to RGB
    var _ui5$viz$hexToRgbObje = ui5.viz.hexToRgbObject(hex),
        red = _ui5$viz$hexToRgbObje.r,
        green = _ui5$viz$hexToRgbObje.g,
        blue = _ui5$viz$hexToRgbObje.b; // lighten RGB colors


    var lightenRed = parseInt(red * (100 + percent) / 100);
    var lightenGreen = parseInt(green * (100 + percent) / 100);
    var lightenBlue = parseInt(blue * (100 + percent) / 100); // normalize RGB colors

    var r = lightenRed < 255 ? lightenRed : 255;
    var g = lightenGreen < 255 ? lightenGreen : 255;
    var b = lightenBlue < 255 ? lightenBlue : 255; // transform RGB to hex

    var lightenRedHex = r.toString(16).length == 1 ? '0' + r.toString(16) : r.toString(16);
    var lightenGreenHex = g.toString(16).length == 1 ? '0' + g.toString(16) : g.toString(16);
    var lightenBlueHex = b.toString(16).length == 1 ? '0' + b.toString(16) : b.toString(16);
    return "#".concat(lightenRedHex).concat(lightenGreenHex).concat(lightenBlueHex);
  };
  /**
   * Darken hexadecimal color.
   *
   * @function
   * @param {sap.ui.core.CSSColor} [hex] Hexadecimal color.
   * @param {float} [alpha] Percentage of darken intensity (0-100).
   * @return {sap.ui.core.CSSColor} Hexadecimal color.
   * @public
   */


  ui5.viz.darkenHexColor = function (hex) {
    var percent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    // parse hex color to RGB
    var _ui5$viz$hexToRgbObje2 = ui5.viz.hexToRgbObject(hex),
        red = _ui5$viz$hexToRgbObje2.r,
        green = _ui5$viz$hexToRgbObje2.g,
        blue = _ui5$viz$hexToRgbObje2.b; // darken RGB colors


    var darkenRed = parseInt(red * (100 - percent) / 100);
    var darkenGreen = parseInt(green * (100 - percent) / 100);
    var darkenBlue = parseInt(blue * (100 - percent) / 100); // normalize RGB colors

    var r = darkenRed < 255 ? darkenRed : 255;
    var g = darkenGreen < 255 ? darkenGreen : 255;
    var b = darkenBlue < 255 ? darkenBlue : 255; // transform RGB to hex

    var darkenRedHex = r.toString(16).length == 1 ? '0' + r.toString(16) : r.toString(16);
    var darkenGreenHex = g.toString(16).length == 1 ? '0' + g.toString(16) : g.toString(16);
    var darkenBlueHex = b.toString(16).length == 1 ? '0' + b.toString(16) : b.toString(16);
    return "#".concat(darkenRedHex).concat(darkenGreenHex).concat(darkenBlueHex);
  };
  /**
   * Get black or white contrast color based on hexadecimal background color.
   * Useful to determine font color based on background.
   *
   * @function
   * @param {sap.ui.core.CSSColor} [hex] Hexadecimal color.
   * @return {sap.ui.core.CSSColor} Foreground contrast color (either black or white).
   * @public
   */


  ui5.viz.hexToBWContrastColor = function (hex) {
    var rgbColor = ui5.viz.hexToRgbObject(hex);
    var brightness = Math.round((parseInt(rgbColor.r, 10) * 299 + parseInt(rgbColor.g, 10) * 587 + parseInt(rgbColor.b, 10) * 114) / 1000);
    var BLACK = '#000000';
    var WHITE = '#ffffff';
    return brightness > 125 ? BLACK : WHITE;
  };
  /**
   * Transform hexadecimal color to RGB object.
   *
   * @function
   * @param {sap.ui.core.CSSColor} [hex] Hexadecimal color.
   * @return {{r: int, g: int, b: int}} RGB object.
   * @public
   */


  ui5.viz.hexToRgbObject = function (hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
      return r + r + g + g + b + b;
    });
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : {
      r: 0,
      g: 0,
      b: 0
    };
  };
  /**
   * Define default color palette.
   *
   * @function
   * @param {Array[String]} [aColorPalette] Ordered list with plain CSS colors.
   * @protected
   */


  ui5.viz.setDefaultColorPalette = function (aColorPalette) {
    ui5.viz.ColorPalette.custom = Array.isArray(aColorPalette) ? aColorPalette : null;
  };
  /**
   * Parse CSS size.
   *
   * @function
   * @param {sap.ui.core.CSSColor} sCSSSize
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
  /**
   * Takes a string and returns a valid HTML ID.
   * @param {string} [sValue] Any string.
   * @return {string} Valid HTML ID.
   * @public
   */

  ui5.viz.toValidHtmlID = function (sID) {
    return sID.replace(/^\d+/g, 'x$&').replace(/\s/g, '-').replace(/\W/g, '-');
  };

  return ui5.viz;
});