"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

sap.ui.define([], function () {
  var t = {},
      e = { exports: null };return function (n) {
    if ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && void 0 !== e) e.exports = n();else if ("function" == typeof define && define.amd) define([], n);else {
      ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).c3 = n();
    }
  }(function () {
    return function t(e, n, i) {
      function r(o, s) {
        if (!n[o]) {
          if (!e[o]) {
            var u = "function" == typeof require && require;if (!s && u) return u(o, !0);if (a) return a(o, !0);var c = new Error("Cannot find module '" + o + "'");throw c.code = "MODULE_NOT_FOUND", c;
          }var l = n[o] = { exports: {} };e[o][0].call(l.exports, function (t) {
            var n = e[o][1][t];return r(n || t);
          }, l, l.exports, t, e, n, i);
        }return n[o].exports;
      }for (var a = "function" == typeof require && require, o = 0; o < i.length; o++) {
        r(i[o]);
      }return r;
    }({ 1: [function (t, e, n) {
        "use strict";
        var i = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
          return typeof t === "undefined" ? "undefined" : _typeof(t);
        } : function (t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
        };!function (t, r) {
          "object" === (void 0 === n ? "undefined" : i(n)) && void 0 !== e ? e.exports = r() : t.c3 = r();
        }(void 0, function () {
          function e(t, e) {
            var n = this;n.component = t, n.params = e || {}, n.d3 = t.d3, n.scale = n.d3.scale.linear(), n.range, n.orient = "bottom", n.innerTickSize = 6, n.outerTickSize = this.params.withOuterTick ? 6 : 0, n.tickPadding = 3, n.tickValues = null, n.tickFormat, n.tickArguments, n.tickOffset = 0, n.tickCulling = !0, n.tickCentered, n.tickTextCharSize, n.tickTextRotate = n.params.tickTextRotate, n.tickLength, n.axis = n.generateAxis();
          }function n(t, e, n) {
            this.owner = t, V.chart.internal[e] = n;
          }function r(t) {
            var e = this.internal = new a(this);e.loadConfig(t), e.beforeInit(t), e.init(), e.afterInit(t), function t(e, n, i) {
              Object.keys(e).forEach(function (r) {
                n[r] = e[r].bind(i), Object.keys(e[r]).length > 0 && t(e[r], n[r], i);
              });
            }(M, this, this);
          }function a(e) {
            var n = this;n.d3 = window.d3 ? window.d3 : void 0 !== t ? t("d3") : void 0, n.api = e, n.config = n.getDefaultConfig(), n.data = {}, n.cache = {}, n.axes = {};
          }var o,
              s,
              u = { target: "c3-target", chart: "c3-chart", chartLine: "c3-chart-line", chartLines: "c3-chart-lines", chartBar: "c3-chart-bar", chartBars: "c3-chart-bars", chartText: "c3-chart-text", chartTexts: "c3-chart-texts", chartArc: "c3-chart-arc", chartArcs: "c3-chart-arcs", chartArcsTitle: "c3-chart-arcs-title", chartArcsBackground: "c3-chart-arcs-background", chartArcsGaugeUnit: "c3-chart-arcs-gauge-unit", chartArcsGaugeMax: "c3-chart-arcs-gauge-max", chartArcsGaugeMin: "c3-chart-arcs-gauge-min", selectedCircle: "c3-selected-circle", selectedCircles: "c3-selected-circles", eventRect: "c3-event-rect", eventRects: "c3-event-rects", eventRectsSingle: "c3-event-rects-single", eventRectsMultiple: "c3-event-rects-multiple", zoomRect: "c3-zoom-rect", brush: "c3-brush", focused: "c3-focused", defocused: "c3-defocused", region: "c3-region", regions: "c3-regions", title: "c3-title", tooltipContainer: "c3-tooltip-container", tooltip: "c3-tooltip", tooltipName: "c3-tooltip-name", shape: "c3-shape", shapes: "c3-shapes", line: "c3-line", lines: "c3-lines", bar: "c3-bar", bars: "c3-bars", circle: "c3-circle", circles: "c3-circles", arc: "c3-arc", arcLabelLine: "c3-arc-label-line", arcs: "c3-arcs", area: "c3-area", areas: "c3-areas", empty: "c3-empty", text: "c3-text", texts: "c3-texts", gaugeValue: "c3-gauge-value", grid: "c3-grid", gridLines: "c3-grid-lines", gridLineCircleText: "c3-grid-lines-circle-text", gridLineCircle: "c3-grid-lines-circle", gridLineCircleHover: "c3-grid-lines-circle-hover", regionArea: "c3-region-area", regionStripe: "c3-region-stripe", regionText: "c3-region-text", xgrid: "c3-xgrid", xgrids: "c3-xgrids", xgridLine: "c3-xgrid-line", xgridLines: "c3-xgrid-lines", xgridFocus: "c3-xgrid-focus", ygrid: "c3-ygrid", ygrids: "c3-ygrids", ygridLine: "c3-ygrid-line", ygridLines: "c3-ygrid-lines", axis: "c3-axis", axisX: "c3-axis-x", axisXLabel: "c3-axis-x-label", axisY: "c3-axis-y", axisYLabel: "c3-axis-y-label", axisY2: "c3-axis-y2", axisY2Label: "c3-axis-y2-label", legendBackground: "c3-legend-background", legendItem: "c3-legend-item", legendItemEvent: "c3-legend-item-event", legendItemTile: "c3-legend-item-tile", legendItemHidden: "c3-legend-item-hidden", legendItemFocused: "c3-legend-item-focused", dragarea: "c3-dragarea", EXPANDED: "_expanded_", SELECTED: "_selected_", INCLUDED: "_included_" },
              c = "function" == typeof Symbol && "symbol" === i(Symbol.iterator) ? function (t) {
            return void 0 === t ? "undefined" : i(t);
          } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : i(t);
          },
              l = (function () {
            function t(t) {
              this.value = t;
            }function e(e) {
              function n(r, a) {
                try {
                  var o = e[r](a),
                      s = o.value;s instanceof t ? Promise.resolve(s.value).then(function (t) {
                    n("next", t);
                  }, function (t) {
                    n("throw", t);
                  }) : i(o.done ? "return" : "normal", o.value);
                } catch (t) {
                  i("throw", t);
                }
              }function i(t, e) {
                switch (t) {case "return":
                    r.resolve({ value: e, done: !0 });break;case "throw":
                    r.reject(e);break;default:
                    r.resolve({ value: e, done: !1 });}(r = r.next) ? n(r.key, r.arg) : a = null;
              }var r, a;this._invoke = function (t, e) {
                return new Promise(function (i, o) {
                  var s = { key: t, arg: e, resolve: i, reject: o, next: null };a ? a = a.next = s : (r = a = s, n(t, e));
                });
              }, "function" != typeof e.return && (this.return = void 0);
            }"function" == typeof Symbol && Symbol.asyncIterator && (e.prototype[Symbol.asyncIterator] = function () {
              return this;
            }), e.prototype.next = function (t) {
              return this._invoke("next", t);
            }, e.prototype.throw = function (t) {
              return this._invoke("throw", t);
            }, e.prototype.return = function (t) {
              return this._invoke("return", t);
            };
          }(), function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
          }),
              h = function h(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === e ? "undefined" : i(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
          },
              d = function d(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" !== (void 0 === e ? "undefined" : i(e)) && "function" != typeof e ? t : e;
          },
              f = function f(t) {
            return t || 0 === t;
          },
              g = function g(t) {
            return "function" == typeof t;
          },
              p = function p(t) {
            return Array.isArray(t);
          },
              x = function x(t) {
            return "string" == typeof t;
          },
              _ = function _(t) {
            return void 0 === t;
          },
              y = function y(t) {
            return void 0 !== t;
          },
              v = function v(t) {
            return 10 * Math.ceil(t / 10);
          },
              m = function m(t) {
            return Math.ceil(t) + .5;
          },
              w = function w(t) {
            return t[1] - t[0];
          },
              S = function S(t) {
            return void 0 === t || null === t || x(t) && 0 === t.length || "object" === (void 0 === t ? "undefined" : c(t)) && 0 === Object.keys(t).length;
          },
              b = function b(t) {
            return !E.isEmpty(t);
          },
              A = function A(t, e, n) {
            return y(t[e]) ? t[e] : n;
          },
              T = function T(t, e) {
            var n = !1;return Object.keys(t).forEach(function (i) {
              t[i] === e && (n = !0);
            }), n;
          },
              P = function P(t) {
            return "string" == typeof t ? t.replace(/</g, "&lt;").replace(/>/g, "&gt;") : t;
          },
              C = function C(t) {
            var e = t.getBoundingClientRect(),
                n = [t.pathSegList.getItem(0), t.pathSegList.getItem(1)];return { x: n[0].x, y: Math.min(n[0].y, n[1].y), width: e.width, height: e.height };
          };(s = e.prototype).axisX = function (t, e, n) {
            t.attr("transform", function (t) {
              return "translate(" + Math.ceil(e(t) + n) + ", 0)";
            });
          }, s.axisY = function (t, e) {
            t.attr("transform", function (t) {
              return "translate(0," + Math.ceil(e(t)) + ")";
            });
          }, s.scaleExtent = function (t) {
            var e = t[0],
                n = t[t.length - 1];return e < n ? [e, n] : [n, e];
          }, s.generateTicks = function (t) {
            var e,
                n,
                i = this,
                r = [];if (t.ticks) return t.ticks.apply(t, i.tickArguments);for (n = t.domain(), e = Math.ceil(n[0]); e < n[1]; e++) {
              r.push(e);
            }return r.length > 0 && r[0] > 0 && r.unshift(r[0] - (r[1] - r[0])), r;
          }, s.copyScale = function () {
            var t,
                e = this,
                n = e.scale.copy();return e.params.isCategory && (t = e.scale.domain(), n.domain([t[0], t[1] - 1])), n;
          }, s.textFormatted = function (t) {
            var e = this,
                n = e.tickFormat ? e.tickFormat(t) : t;return void 0 !== n ? n : "";
          }, s.updateRange = function () {
            var t = this;return t.range = t.scale.rangeExtent ? t.scale.rangeExtent() : t.scaleExtent(t.scale.range()), t.range;
          }, s.updateTickTextCharSize = function (t) {
            var e = this;if (e.tickTextCharSize) return e.tickTextCharSize;var n = { h: 11.5, w: 5.5 };return t.select("text").text(function (t) {
              return e.textFormatted(t);
            }).each(function (t) {
              var i = this.getBoundingClientRect(),
                  r = e.textFormatted(t),
                  a = i.height,
                  o = r ? i.width / r.length : void 0;a && o && (n.h = a, n.w = o);
            }).text(""), e.tickTextCharSize = n, n;
          }, s.transitionise = function (t) {
            return this.params.withoutTransition ? t : this.d3.transition(t);
          }, s.isVertical = function () {
            return "left" === this.orient || "right" === this.orient;
          }, s.tspanData = function (t, e, n, i) {
            var r = this,
                a = r.params.tickMultiline ? r.splitTickText(t, n, i) : [].concat(r.textFormatted(t));return a.map(function (t) {
              return { index: e, splitted: t, length: a.length };
            });
          }, s.splitTickText = function (t, e, n) {
            function i(t, e) {
              a = void 0;for (var n = 1; n < e.length; n++) {
                if (" " === e.charAt(n) && (a = n), r = e.substr(0, n + 1), o = s.tickTextCharSize.w * r.length, c < o) return i(t.concat(e.substr(0, a || n)), e.slice(a ? a + 1 : n));
              }return t.concat(e);
            }var r,
                a,
                o,
                s = this,
                u = s.textFormatted(t),
                c = s.params.tickWidth,
                l = [];return "[object Array]" === Object.prototype.toString.call(u) ? u : ((!c || c <= 0) && (c = s.isVertical() ? 95 : s.params.isCategory ? Math.ceil(n(e[1]) - n(e[0])) - 12 : 110), i(l, u + ""));
          }, s.updateTickLength = function () {
            var t = this;t.tickLength = Math.max(t.innerTickSize, 0) + t.tickPadding;
          }, s.lineY2 = function (t) {
            var e = this,
                n = e.scale(t) + (e.tickCentered ? 0 : e.tickOffset);return e.range[0] < n && n < e.range[1] ? e.innerTickSize : 0;
          }, s.textY = function () {
            var t = this,
                e = t.tickTextRotate;return e ? 11.5 - e / 15 * 2.5 * (e > 0 ? 1 : -1) : t.tickLength;
          }, s.textTransform = function () {
            var t = this.tickTextRotate;return t ? "rotate(" + t + ")" : "";
          }, s.textTextAnchor = function () {
            var t = this.tickTextRotate;return t ? t > 0 ? "start" : "end" : "middle";
          }, s.tspanDx = function () {
            var t = this.tickTextRotate;return t ? 8 * Math.sin(Math.PI * (t / 180)) : 0;
          }, s.tspanDy = function (t, e) {
            var n = this,
                i = n.tickTextCharSize.h;return 0 === e && (i = n.isVertical() ? -((t.length - 1) * (n.tickTextCharSize.h / 2) - 3) : ".71em"), i;
          }, s.generateAxis = function () {
            function t(r) {
              r.each(function () {
                var r,
                    a,
                    o,
                    s = t.g = n.select(this),
                    u = this.__chart__ || e.scale,
                    c = this.__chart__ = e.copyScale(),
                    l = e.tickValues ? e.tickValues : e.generateTicks(c),
                    h = s.selectAll(".tick").data(l, c),
                    d = h.enter().insert("g", ".domain").attr("class", "tick").style("opacity", 1e-6),
                    f = h.exit().remove(),
                    g = e.transitionise(h).style("opacity", 1);i.isCategory ? (e.tickOffset = Math.ceil((c(1) - c(0)) / 2), a = e.tickCentered ? 0 : e.tickOffset, o = e.tickCentered ? e.tickOffset : 0) : e.tickOffset = a = 0, d.append("line"), d.append("text"), e.updateRange(), e.updateTickLength(), e.updateTickTextCharSize(s.select(".tick"));var p = g.select("line"),
                    x = g.select("text"),
                    _ = h.select("text").selectAll("tspan").data(function (t, n) {
                  return e.tspanData(t, n, l, c);
                });_.enter().append("tspan"), _.exit().remove(), _.text(function (t) {
                  return t.splitted;
                });var y = s.selectAll(".domain").data([0]),
                    v = (y.enter().append("path").attr("class", "domain"), e.transitionise(y));switch (e.orient) {case "bottom":
                    r = e.axisX, p.attr("x1", a).attr("x2", a).attr("y2", function (t, n) {
                      return e.lineY2(t, n);
                    }), x.attr("x", 0).attr("y", function (t, n) {
                      return e.textY(t, n);
                    }).attr("transform", function (t, n) {
                      return e.textTransform(t, n);
                    }).style("text-anchor", function (t, n) {
                      return e.textTextAnchor(t, n);
                    }), _.attr("x", 0).attr("dy", function (t, n) {
                      return e.tspanDy(t, n);
                    }).attr("dx", function (t, n) {
                      return e.tspanDx(t, n);
                    }), v.attr("d", "M" + e.range[0] + "," + e.outerTickSize + "V0H" + e.range[1] + "V" + e.outerTickSize);break;case "top":
                    r = e.axisX, p.attr("x2", 0).attr("y2", -e.innerTickSize), x.attr("x", 0).attr("y", -e.tickLength).style("text-anchor", "middle"), _.attr("x", 0).attr("dy", "0em"), v.attr("d", "M" + e.range[0] + "," + -e.outerTickSize + "V0H" + e.range[1] + "V" + -e.outerTickSize);break;case "left":
                    r = e.axisY, p.attr("x2", -e.innerTickSize).attr("y1", o).attr("y2", o), x.attr("x", -e.tickLength).attr("y", e.tickOffset).style("text-anchor", "end"), _.attr("x", -e.tickLength).attr("dy", function (t, n) {
                      return e.tspanDy(t, n);
                    }), v.attr("d", "M" + -e.outerTickSize + "," + e.range[0] + "H0V" + e.range[1] + "H" + -e.outerTickSize);break;case "right":
                    r = e.axisY, p.attr("x2", e.innerTickSize).attr("y2", 0), x.attr("x", e.tickLength).attr("y", 0).style("text-anchor", "start"), _.attr("x", e.tickLength).attr("dy", function (t, n) {
                      return e.tspanDy(t, n);
                    }), v.attr("d", "M" + e.outerTickSize + "," + e.range[0] + "H0V" + e.range[1] + "H" + e.outerTickSize);}if (c.rangeBand) {
                  var m = c,
                      w = m.rangeBand() / 2;u = c = function c(t) {
                    return m(t) + w;
                  };
                } else u.rangeBand ? u = c : f.call(r, c, e.tickOffset);d.call(r, u, e.tickOffset), g.call(r, c, e.tickOffset);
              });
            }var e = this,
                n = e.d3,
                i = e.params;return t.scale = function (n) {
              return arguments.length ? (e.scale = n, t) : e.scale;
            }, t.orient = function (n) {
              return arguments.length ? (e.orient = n in { top: 1, right: 1, bottom: 1, left: 1 } ? n + "" : "bottom", t) : e.orient;
            }, t.tickFormat = function (n) {
              return arguments.length ? (e.tickFormat = n, t) : e.tickFormat;
            }, t.tickCentered = function (n) {
              return arguments.length ? (e.tickCentered = n, t) : e.tickCentered;
            }, t.tickOffset = function () {
              return e.tickOffset;
            }, t.tickInterval = function () {
              var n;return (n = i.isCategory ? 2 * e.tickOffset : (t.g.select("path.domain").node().getTotalLength() - 2 * e.outerTickSize) / t.g.selectAll("line").size()) === 1 / 0 ? 0 : n;
            }, t.ticks = function () {
              return arguments.length ? (e.tickArguments = arguments, t) : e.tickArguments;
            }, t.tickCulling = function (n) {
              return arguments.length ? (e.tickCulling = n, t) : e.tickCulling;
            }, t.tickValues = function (n) {
              if ("function" == typeof n) e.tickValues = function () {
                return n(e.scale.domain());
              };else {
                if (!arguments.length) return e.tickValues;e.tickValues = n;
              }return t;
            }, t;
          };var L = function (t) {
            function i(t) {
              l(this, i);var n = { fn: o, internal: { fn: s } },
                  r = d(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, t, "axis", n));return r.d3 = t.d3, r.internal = e, r;
            }return h(i, n), i;
          }();(o = L.prototype).init = function () {
            var t = this.owner,
                e = t.config,
                n = t.main;t.axes.x = n.append("g").attr("class", u.axis + " " + u.axisX).attr("clip-path", t.clipPathForXAxis).attr("transform", t.getTranslate("x")).style("visibility", e.axis_x_show ? "visible" : "hidden"), t.axes.x.append("text").attr("class", u.axisXLabel).attr("transform", e.axis_rotated ? "rotate(-90)" : "").style("text-anchor", this.textAnchorForXAxisLabel.bind(this)), t.axes.y = n.append("g").attr("class", u.axis + " " + u.axisY).attr("clip-path", e.axis_y_inner ? "" : t.clipPathForYAxis).attr("transform", t.getTranslate("y")).style("visibility", e.axis_y_show ? "visible" : "hidden"), t.axes.y.append("text").attr("class", u.axisYLabel).attr("transform", e.axis_rotated ? "" : "rotate(-90)").style("text-anchor", this.textAnchorForYAxisLabel.bind(this)), t.axes.y2 = n.append("g").attr("class", u.axis + " " + u.axisY2).attr("transform", t.getTranslate("y2")).style("visibility", e.axis_y2_show ? "visible" : "hidden"), t.axes.y2.append("text").attr("class", u.axisY2Label).attr("transform", e.axis_rotated ? "" : "rotate(-90)").style("text-anchor", this.textAnchorForY2AxisLabel.bind(this));
          }, o.getXAxis = function (t, e, n, i, r, a, o) {
            var s = this.owner,
                u = s.config,
                c = { isCategory: s.isCategorized(), withOuterTick: r, tickMultiline: u.axis_x_tick_multiline, tickWidth: u.axis_x_tick_width, tickTextRotate: o ? 0 : u.axis_x_tick_rotate, withoutTransition: a },
                l = new this.internal(this, c).axis.scale(t).orient(e);return s.isTimeSeries() && i && "function" != typeof i && (i = i.map(function (t) {
              return s.parseDate(t);
            })), l.tickFormat(n).tickValues(i), s.isCategorized() && (l.tickCentered(u.axis_x_tick_centered), S(u.axis_x_tick_culling) && (u.axis_x_tick_culling = !1)), l;
          }, o.updateXAxisTickValues = function (t, e) {
            var n,
                i = this.owner,
                r = i.config;return (r.axis_x_tick_fit || r.axis_x_tick_count) && (n = this.generateTickValues(i.mapTargetsToUniqueXs(t), r.axis_x_tick_count, i.isTimeSeries())), e ? e.tickValues(n) : (i.xAxis.tickValues(n), i.subXAxis.tickValues(n)), n;
          }, o.getYAxis = function (t, e, n, i, r, a, o) {
            var s = this.owner,
                u = s.config,
                c = { withOuterTick: r, withoutTransition: a, tickTextRotate: o ? 0 : u.axis_y_tick_rotate },
                l = new this.internal(this, c).axis.scale(t).orient(e).tickFormat(n);return s.isTimeSeriesY() ? l.ticks(s.d3.time[u.axis_y_tick_time_value], u.axis_y_tick_time_interval) : l.tickValues(i), l;
          }, o.getId = function (t) {
            var e = this.owner.config;return t in e.data_axes ? e.data_axes[t] : "y";
          }, o.getXAxisTickFormat = function () {
            var t = this.owner,
                e = t.config,
                n = t.isTimeSeries() ? t.defaultAxisTimeFormat : t.isCategorized() ? t.categoryName : function (t) {
              return t < 0 ? t.toFixed(0) : t;
            };return e.axis_x_tick_format && (g(e.axis_x_tick_format) ? n = e.axis_x_tick_format : t.isTimeSeries() && (n = function n(_n2) {
              return _n2 ? t.axisTimeFormat(e.axis_x_tick_format)(_n2) : "";
            })), g(n) ? function (e) {
              return n.call(t, e);
            } : n;
          }, o.getTickValues = function (t, e) {
            return t || (e ? e.tickValues() : void 0);
          }, o.getXAxisTickValues = function () {
            return this.getTickValues(this.owner.config.axis_x_tick_values, this.owner.xAxis);
          }, o.getYAxisTickValues = function () {
            return this.getTickValues(this.owner.config.axis_y_tick_values, this.owner.yAxis);
          }, o.getY2AxisTickValues = function () {
            return this.getTickValues(this.owner.config.axis_y2_tick_values, this.owner.y2Axis);
          }, o.getLabelOptionByAxisId = function (t) {
            var e,
                n = this.owner.config;return "y" === t ? e = n.axis_y_label : "y2" === t ? e = n.axis_y2_label : "x" === t && (e = n.axis_x_label), e;
          }, o.getLabelText = function (t) {
            var e = this.getLabelOptionByAxisId(t);return x(e) ? e : e ? e.text : null;
          }, o.setLabelText = function (t, e) {
            var n = this.owner.config,
                i = this.getLabelOptionByAxisId(t);x(i) ? "y" === t ? n.axis_y_label = e : "y2" === t ? n.axis_y2_label = e : "x" === t && (n.axis_x_label = e) : i && (i.text = e);
          }, o.getLabelPosition = function (t, e) {
            var n = this.getLabelOptionByAxisId(t),
                i = n && "object" === (void 0 === n ? "undefined" : c(n)) && n.position ? n.position : e;return { isInner: i.indexOf("inner") >= 0, isOuter: i.indexOf("outer") >= 0, isLeft: i.indexOf("left") >= 0, isCenter: i.indexOf("center") >= 0, isRight: i.indexOf("right") >= 0, isTop: i.indexOf("top") >= 0, isMiddle: i.indexOf("middle") >= 0, isBottom: i.indexOf("bottom") >= 0 };
          }, o.getXAxisLabelPosition = function () {
            return this.getLabelPosition("x", this.owner.config.axis_rotated ? "inner-top" : "inner-right");
          }, o.getYAxisLabelPosition = function () {
            return this.getLabelPosition("y", this.owner.config.axis_rotated ? "inner-right" : "inner-top");
          }, o.getY2AxisLabelPosition = function () {
            return this.getLabelPosition("y2", this.owner.config.axis_rotated ? "inner-right" : "inner-top");
          }, o.getLabelPositionById = function (t) {
            return "y2" === t ? this.getY2AxisLabelPosition() : "y" === t ? this.getYAxisLabelPosition() : this.getXAxisLabelPosition();
          }, o.textForXAxisLabel = function () {
            return this.getLabelText("x");
          }, o.textForYAxisLabel = function () {
            return this.getLabelText("y");
          }, o.textForY2AxisLabel = function () {
            return this.getLabelText("y2");
          }, o.xForAxisLabel = function (t, e) {
            var n = this.owner;return t ? e.isLeft ? 0 : e.isCenter ? n.width / 2 : n.width : e.isBottom ? -n.height : e.isMiddle ? -n.height / 2 : 0;
          }, o.dxForAxisLabel = function (t, e) {
            return t ? e.isLeft ? "0.5em" : e.isRight ? "-0.5em" : "0" : e.isTop ? "-0.5em" : e.isBottom ? "0.5em" : "0";
          }, o.textAnchorForAxisLabel = function (t, e) {
            return t ? e.isLeft ? "start" : e.isCenter ? "middle" : "end" : e.isBottom ? "start" : e.isMiddle ? "middle" : "end";
          }, o.xForXAxisLabel = function () {
            return this.xForAxisLabel(!this.owner.config.axis_rotated, this.getXAxisLabelPosition());
          }, o.xForYAxisLabel = function () {
            return this.xForAxisLabel(this.owner.config.axis_rotated, this.getYAxisLabelPosition());
          }, o.xForY2AxisLabel = function () {
            return this.xForAxisLabel(this.owner.config.axis_rotated, this.getY2AxisLabelPosition());
          }, o.dxForXAxisLabel = function () {
            return this.dxForAxisLabel(!this.owner.config.axis_rotated, this.getXAxisLabelPosition());
          }, o.dxForYAxisLabel = function () {
            return this.dxForAxisLabel(this.owner.config.axis_rotated, this.getYAxisLabelPosition());
          }, o.dxForY2AxisLabel = function () {
            return this.dxForAxisLabel(this.owner.config.axis_rotated, this.getY2AxisLabelPosition());
          }, o.dyForXAxisLabel = function () {
            var t = this.owner.config,
                e = this.getXAxisLabelPosition();return t.axis_rotated ? e.isInner ? "1.2em" : -25 - this.getMaxTickWidth("x") : e.isInner ? "-0.5em" : t.axis_x_height ? t.axis_x_height - 10 : "3em";
          }, o.dyForYAxisLabel = function () {
            var t = this.owner,
                e = this.getYAxisLabelPosition();return t.config.axis_rotated ? e.isInner ? "-0.5em" : "3em" : e.isInner ? "1.2em" : -10 - (t.config.axis_y_inner ? 0 : this.getMaxTickWidth("y") + 10);
          }, o.dyForY2AxisLabel = function () {
            var t = this.owner,
                e = this.getY2AxisLabelPosition();return t.config.axis_rotated ? e.isInner ? "1.2em" : "-2.2em" : e.isInner ? "-0.5em" : 15 + (t.config.axis_y2_inner ? 0 : this.getMaxTickWidth("y2") + 15);
          }, o.textAnchorForXAxisLabel = function () {
            var t = this.owner;return this.textAnchorForAxisLabel(!t.config.axis_rotated, this.getXAxisLabelPosition());
          }, o.textAnchorForYAxisLabel = function () {
            var t = this.owner;return this.textAnchorForAxisLabel(t.config.axis_rotated, this.getYAxisLabelPosition());
          }, o.textAnchorForY2AxisLabel = function () {
            var t = this.owner;return this.textAnchorForAxisLabel(t.config.axis_rotated, this.getY2AxisLabelPosition());
          }, o.getMaxTickWidth = function (t, e) {
            var n,
                i,
                r,
                a,
                o = this.owner,
                s = o.config,
                u = 0;return e && o.currentMaxTickWidths[t] ? o.currentMaxTickWidths[t] : (o.svg && (n = o.filterTargetsToShow(o.data.targets), "y" === t ? (i = o.y.copy().domain(o.getYDomain(n, "y")), r = this.getYAxis(i, o.yOrient, s.axis_y_tick_format, o.yAxisTickValues, !1, !0, !0)) : "y2" === t ? (i = o.y2.copy().domain(o.getYDomain(n, "y2")), r = this.getYAxis(i, o.y2Orient, s.axis_y2_tick_format, o.y2AxisTickValues, !1, !0, !0)) : (i = o.x.copy().domain(o.getXDomain(n)), r = this.getXAxis(i, o.xOrient, o.xAxisTickFormat, o.xAxisTickValues, !1, !0, !0), this.updateXAxisTickValues(n, r)), (a = o.d3.select("body").append("div").classed("c3", !0)).append("svg").style("visibility", "hidden").style("position", "fixed").style("top", 0).style("left", 0).append("g").call(r).each(function () {
              o.d3.select(this).selectAll("text").each(function () {
                var t = this.getBoundingClientRect();u < t.width && (u = t.width);
              }), a.remove();
            })), o.currentMaxTickWidths[t] = u <= 0 ? o.currentMaxTickWidths[t] : u, o.currentMaxTickWidths[t]);
          }, o.updateLabels = function (t) {
            var e = this.owner,
                n = e.main.select("." + u.axisX + " ." + u.axisXLabel),
                i = e.main.select("." + u.axisY + " ." + u.axisYLabel),
                r = e.main.select("." + u.axisY2 + " ." + u.axisY2Label);(t ? n.transition() : n).attr("x", this.xForXAxisLabel.bind(this)).attr("dx", this.dxForXAxisLabel.bind(this)).attr("dy", this.dyForXAxisLabel.bind(this)).text(this.textForXAxisLabel.bind(this)), (t ? i.transition() : i).attr("x", this.xForYAxisLabel.bind(this)).attr("dx", this.dxForYAxisLabel.bind(this)).attr("dy", this.dyForYAxisLabel.bind(this)).text(this.textForYAxisLabel.bind(this)), (t ? r.transition() : r).attr("x", this.xForY2AxisLabel.bind(this)).attr("dx", this.dxForY2AxisLabel.bind(this)).attr("dy", this.dyForY2AxisLabel.bind(this)).text(this.textForY2AxisLabel.bind(this));
          }, o.getPadding = function (t, e, n, i) {
            var r = "number" == typeof t ? t : t[e];return f(r) ? "ratio" === t.unit ? t[e] * i : this.convertPixelsToAxisPadding(r, i) : n;
          }, o.convertPixelsToAxisPadding = function (t, e) {
            var n = this.owner;return e * (t / (n.config.axis_rotated ? n.width : n.height));
          }, o.generateTickValues = function (t, e, n) {
            var i,
                r,
                a,
                o,
                s,
                u,
                c,
                l = t;if (e) if (1 === (i = g(e) ? e() : e)) l = [t[0]];else if (2 === i) l = [t[0], t[t.length - 1]];else if (i > 2) {
              for (o = i - 2, r = t[0], s = ((a = t[t.length - 1]) - r) / (o + 1), l = [r], u = 0; u < o; u++) {
                c = +r + s * (u + 1), l.push(n ? new Date(c) : c);
              }l.push(a);
            }return n || (l = l.sort(function (t, e) {
              return t - e;
            })), l;
          }, o.generateTransitions = function (t) {
            var e = this.owner.axes;return { axisX: t ? e.x.transition().duration(t) : e.x, axisY: t ? e.y.transition().duration(t) : e.y, axisY2: t ? e.y2.transition().duration(t) : e.y2, axisSubX: t ? e.subx.transition().duration(t) : e.subx };
          }, o.redraw = function (t, e) {
            var n = this.owner;n.axes.x.style("opacity", e ? 0 : 1), n.axes.y.style("opacity", e ? 0 : 1), n.axes.y2.style("opacity", e ? 0 : 1), n.axes.subx.style("opacity", e ? 0 : 1), t.axisX.call(n.xAxis), t.axisY.call(n.yAxis), t.axisY2.call(n.y2Axis), t.axisSubX.call(n.subXAxis);
          };var M,
              E,
              V = { version: "0.4.21" };return V.generate = function (t) {
            return new r(t);
          }, V.chart = { fn: r.prototype, internal: { fn: a.prototype } }, M = V.chart.fn, E = V.chart.internal.fn, E.beforeInit = function () {}, E.afterInit = function () {}, E.init = function () {
            var t = this,
                e = t.config;if (t.initParams(), e.data_url) t.convertUrlToData(e.data_url, e.data_mimeType, e.data_headers, e.data_keys, t.initWithData);else if (e.data_json) t.initWithData(t.convertJsonToData(e.data_json, e.data_keys));else if (e.data_rows) t.initWithData(t.convertRowsToData(e.data_rows));else {
              if (!e.data_columns) throw Error("url or json or rows or columns is required.");t.initWithData(t.convertColumnsToData(e.data_columns));
            }
          }, E.initParams = function () {
            var t = this,
                e = t.d3,
                n = t.config;t.clipId = "c3-" + +new Date() + "-clip", t.clipIdForXAxis = t.clipId + "-xaxis", t.clipIdForYAxis = t.clipId + "-yaxis", t.clipIdForGrid = t.clipId + "-grid", t.clipIdForSubchart = t.clipId + "-subchart", t.clipPath = t.getClipPath(t.clipId), t.clipPathForXAxis = t.getClipPath(t.clipIdForXAxis), t.clipPathForYAxis = t.getClipPath(t.clipIdForYAxis), t.clipPathForGrid = t.getClipPath(t.clipIdForGrid), t.clipPathForSubchart = t.getClipPath(t.clipIdForSubchart), t.dragStart = null, t.dragging = !1, t.flowing = !1, t.cancelClick = !1, t.mouseover = !1, t.transiting = !1, t.color = t.generateColor(), t.levelColor = t.generateLevelColor(), t.dataTimeFormat = n.data_xLocaltime ? e.time.format : e.time.format.utc, t.axisTimeFormat = n.axis_x_localtime ? e.time.format : e.time.format.utc, t.defaultAxisTimeFormat = t.axisTimeFormat.multi([[".%L", function (t) {
              return t.getMilliseconds();
            }], [":%S", function (t) {
              return t.getSeconds();
            }], ["%I:%M", function (t) {
              return t.getMinutes();
            }], ["%I %p", function (t) {
              return t.getHours();
            }], ["%-m/%-d", function (t) {
              return t.getDay() && 1 !== t.getDate();
            }], ["%-m/%-d", function (t) {
              return 1 !== t.getDate();
            }], ["%-m/%-d", function (t) {
              return t.getMonth();
            }], ["%Y/%-m/%-d", function () {
              return !0;
            }]]), t.hiddenTargetIds = [], t.hiddenLegendIds = [], t.focusedTargetIds = [], t.defocusedTargetIds = [], t.xOrient = n.axis_rotated ? "left" : "bottom", t.yOrient = n.axis_rotated ? n.axis_y_inner ? "top" : "bottom" : n.axis_y_inner ? "right" : "left", t.y2Orient = n.axis_rotated ? n.axis_y2_inner ? "bottom" : "top" : n.axis_y2_inner ? "left" : "right", t.subXOrient = n.axis_rotated ? "left" : "bottom", t.isLegendRight = "right" === n.legend_position, t.isLegendInset = "inset" === n.legend_position, t.isLegendTop = "top-left" === n.legend_inset_anchor || "top-right" === n.legend_inset_anchor, t.isLegendLeft = "top-left" === n.legend_inset_anchor || "bottom-left" === n.legend_inset_anchor, t.legendStep = 0, t.legendItemWidth = 0, t.legendItemHeight = 0, t.currentMaxTickWidths = { x: 0, y: 0, y2: 0 }, t.rotated_padding_left = 30, t.rotated_padding_right = n.axis_rotated && !n.axis_x_show ? 0 : 30, t.rotated_padding_top = 5, t.withoutFadeIn = {}, t.intervalForObserveInserted = void 0, t.axes.subx = e.selectAll([]);
          }, E.initChartElements = function () {
            this.initBar && this.initBar(), this.initLine && this.initLine(), this.initArc && this.initArc(), this.initGauge && this.initGauge(), this.initText && this.initText();
          }, E.initWithData = function (t) {
            var e,
                n,
                i = this,
                r = i.d3,
                a = i.config,
                o = !0;i.axis = new L(i), i.initPie && i.initPie(), i.initBrush && i.initBrush(), i.initZoom && i.initZoom(), a.bindto ? "function" == typeof a.bindto.node ? i.selectChart = a.bindto : i.selectChart = r.select(a.bindto) : i.selectChart = r.selectAll([]), i.selectChart.empty() && (i.selectChart = r.select(document.createElement("div")).style("opacity", 0), i.observeInserted(i.selectChart), o = !1), i.selectChart.html("").classed("c3", !0), i.data.xs = {}, i.data.targets = i.convertDataToTargets(t), a.data_filter && (i.data.targets = i.data.targets.filter(a.data_filter)), a.data_hide && i.addHiddenTargetIds(!0 === a.data_hide ? i.mapToIds(i.data.targets) : a.data_hide), a.legend_hide && i.addHiddenLegendIds(!0 === a.legend_hide ? i.mapToIds(i.data.targets) : a.legend_hide), i.updateSizes(), i.updateScales(), i.x.domain(r.extent(i.getXDomain(i.data.targets))), i.y.domain(i.getYDomain(i.data.targets, "y")), i.y2.domain(i.getYDomain(i.data.targets, "y2")), i.subX.domain(i.x.domain()), i.subY.domain(i.y.domain()), i.subY2.domain(i.y2.domain()), i.orgXDomain = i.x.domain(), i.brush && i.brush.scale(i.subX), a.zoom_enabled && i.zoom.scale(i.x), i.svg = i.selectChart.append("svg").style("overflow", "hidden").on("mouseenter", function () {
              return a.onmouseover.call(i);
            }).on("mouseleave", function () {
              return a.onmouseout.call(i);
            }), i.config.svg_classname && i.svg.attr("class", i.config.svg_classname), e = i.svg.append("defs"), i.clipChart = i.appendClip(e, i.clipId), i.clipXAxis = i.appendClip(e, i.clipIdForXAxis), i.clipYAxis = i.appendClip(e, i.clipIdForYAxis), i.clipGrid = i.appendClip(e, i.clipIdForGrid), i.clipSubchart = i.appendClip(e, i.clipIdForSubchart), i.updateSvgSize(), n = i.main = i.svg.append("g").attr("transform", i.getTranslate("main")), i.initSubchart && i.initSubchart(), i.initTooltip && i.initTooltip(), i.initLegend && i.initLegend(), i.initTitle && i.initTitle(), n.append("text").attr("class", u.text + " " + u.empty).attr("text-anchor", "middle").attr("dominant-baseline", "middle"), i.initRegion(), i.initGrid(), n.append("g").attr("clip-path", i.clipPath).attr("class", u.chart), a.grid_lines_front && i.initGridLines(), i.initEventRect(), i.initChartElements(), n.insert("rect", a.zoom_privileged ? null : "g." + u.regions).attr("class", u.zoomRect).attr("width", i.width).attr("height", i.height).style("opacity", 0).on("dblclick.zoom", null), a.axis_x_extent && i.brush.extent(i.getDefaultExtent()), i.axis.init(), i.updateTargets(i.data.targets), o && (i.updateDimension(), i.config.oninit.call(i), i.redraw({ withTransition: !1, withTransform: !0, withUpdateXDomain: !0, withUpdateOrgXDomain: !0, withTransitionForAxis: !1 })), i.bindResize(), i.api.element = i.selectChart.node();
          }, E.smoothLines = function (t, e) {
            var n = this;"grid" === e && t.each(function () {
              var t = n.d3.select(this),
                  e = t.attr("x1"),
                  i = t.attr("x2"),
                  r = t.attr("y1"),
                  a = t.attr("y2");t.attr({ x1: Math.ceil(e), x2: Math.ceil(i), y1: Math.ceil(r), y2: Math.ceil(a) });
            });
          }, E.updateSizes = function () {
            var t = this,
                e = t.config,
                n = t.legend ? t.getLegendHeight() : 0,
                i = t.legend ? t.getLegendWidth() : 0,
                r = t.isLegendRight || t.isLegendInset ? 0 : n,
                a = t.hasArcType(),
                o = e.axis_rotated || a ? 0 : t.getHorizontalAxisHeight("x"),
                s = e.subchart_show && !a ? e.subchart_size_height + o : 0;t.currentWidth = t.getCurrentWidth(), t.currentHeight = t.getCurrentHeight(), t.margin = e.axis_rotated ? { top: t.getHorizontalAxisHeight("y2") + t.getCurrentPaddingTop(), right: a ? 0 : t.getCurrentPaddingRight(), bottom: t.getHorizontalAxisHeight("y") + r + t.getCurrentPaddingBottom(), left: s + (a ? 0 : t.getCurrentPaddingLeft()) } : { top: 4 + t.getCurrentPaddingTop(), right: a ? 0 : t.getCurrentPaddingRight(), bottom: o + s + r + t.getCurrentPaddingBottom(), left: a ? 0 : t.getCurrentPaddingLeft() }, t.margin2 = e.axis_rotated ? { top: t.margin.top, right: NaN, bottom: 20 + r, left: t.rotated_padding_left } : { top: t.currentHeight - s - r, right: NaN, bottom: o + r, left: t.margin.left }, t.margin3 = { top: 0, right: NaN, bottom: 0, left: 0 }, t.updateSizeForLegend && t.updateSizeForLegend(n, i), t.width = t.currentWidth - t.margin.left - t.margin.right, t.height = t.currentHeight - t.margin.top - t.margin.bottom, t.width < 0 && (t.width = 0), t.height < 0 && (t.height = 0), t.width2 = e.axis_rotated ? t.margin.left - t.rotated_padding_left - t.rotated_padding_right : t.width, t.height2 = e.axis_rotated ? t.height : t.currentHeight - t.margin2.top - t.margin2.bottom, t.width2 < 0 && (t.width2 = 0), t.height2 < 0 && (t.height2 = 0), t.arcWidth = t.width - (t.isLegendRight ? i + 10 : 0), t.arcHeight = t.height - (t.isLegendRight ? 0 : 10), t.hasType("gauge") && !e.gauge_fullCircle && (t.arcHeight += t.height - t.getGaugeLabelHeight()), t.updateRadius && t.updateRadius(), t.isLegendRight && a && (t.margin3.left = t.arcWidth / 2 + 1.1 * t.radiusExpanded);
          }, E.updateTargets = function (t) {
            var e = this;e.updateTargetsForText(t), e.updateTargetsForBar(t), e.updateTargetsForLine(t), e.hasArcType() && e.updateTargetsForArc && e.updateTargetsForArc(t), e.updateTargetsForSubchart && e.updateTargetsForSubchart(t), e.showTargets();
          }, E.showTargets = function () {
            var t = this;t.svg.selectAll("." + u.target).filter(function (e) {
              return t.isTargetToShow(e.id);
            }).transition().duration(t.config.transition_duration).style("opacity", 1);
          }, E.redraw = function (t, e) {
            var n,
                i,
                r,
                a,
                o,
                s,
                c,
                l,
                h,
                d,
                f,
                g,
                p,
                x,
                _,
                y,
                v,
                m,
                w,
                S,
                b,
                T,
                P,
                C,
                L,
                M,
                E,
                V,
                G,
                k = this,
                R = k.main,
                O = k.d3,
                I = k.config,
                D = k.getShapeIndices(k.isAreaType),
                N = k.getShapeIndices(k.isBarType),
                F = k.getShapeIndices(k.isLineType),
                z = k.hasArcType(),
                X = k.filterTargetsToShow(k.data.targets),
                H = k.xv.bind(k);if (t = t || {}, n = A(t, "withY", !0), i = A(t, "withSubchart", !0), r = A(t, "withTransition", !0), s = A(t, "withTransform", !1), c = A(t, "withUpdateXDomain", !1), l = A(t, "withUpdateOrgXDomain", !1), h = A(t, "withTrimXDomain", !0), p = A(t, "withUpdateXAxis", c), d = A(t, "withLegend", !1), f = A(t, "withEventRect", !0), g = A(t, "withDimension", !0), a = A(t, "withTransitionForExit", r), o = A(t, "withTransitionForAxis", r), w = r ? I.transition_duration : 0, S = a ? w : 0, b = o ? w : 0, e = e || k.axis.generateTransitions(b), d && I.legend_show ? k.updateLegend(k.mapToIds(k.data.targets), t, e) : g && k.updateDimension(!0), k.isCategorized() && 0 === X.length && k.x.domain([0, k.axes.x.selectAll(".tick").size()]), X.length ? (k.updateXDomain(X, c, l, h), I.axis_x_tick_values || (C = k.axis.updateXAxisTickValues(X))) : (k.xAxis.tickValues([]), k.subXAxis.tickValues([])), I.zoom_rescale && !t.flow && (E = k.x.orgDomain()), k.y.domain(k.getYDomain(X, "y", E)), k.y2.domain(k.getYDomain(X, "y2", E)), !I.axis_y_tick_values && I.axis_y_tick_count && k.yAxis.tickValues(k.axis.generateTickValues(k.y.domain(), I.axis_y_tick_count)), !I.axis_y2_tick_values && I.axis_y2_tick_count && k.y2Axis.tickValues(k.axis.generateTickValues(k.y2.domain(), I.axis_y2_tick_count)), k.axis.redraw(e, z), k.axis.updateLabels(r), (c || p) && X.length) if (I.axis_x_tick_culling && C) {
              for (L = 1; L < C.length; L++) {
                if (C.length / L < I.axis_x_tick_culling_max) {
                  M = L;break;
                }
              }k.svg.selectAll("." + u.axisX + " .tick text").each(function (t) {
                var e = C.indexOf(t);e >= 0 && O.select(this).style("display", e % M ? "none" : "block");
              });
            } else k.svg.selectAll("." + u.axisX + " .tick text").style("display", "block");x = k.generateDrawArea ? k.generateDrawArea(D, !1) : void 0, _ = k.generateDrawBar ? k.generateDrawBar(N) : void 0, y = k.generateDrawLine ? k.generateDrawLine(F, !1) : void 0, v = k.generateXYForText(D, N, F, !0), m = k.generateXYForText(D, N, F, !1), n && (k.subY.domain(k.getYDomain(X, "y")), k.subY2.domain(k.getYDomain(X, "y2"))), k.updateXgridFocus(), R.select("text." + u.text + "." + u.empty).attr("x", k.width / 2).attr("y", k.height / 2).text(I.data_empty_label_text).transition().style("opacity", X.length ? 0 : 1), k.updateGrid(w), k.updateRegion(w), k.updateBar(S), k.updateLine(S), k.updateArea(S), k.updateCircle(), k.hasDataLabel() && k.updateText(S), k.redrawTitle && k.redrawTitle(), k.redrawArc && k.redrawArc(w, S, s), k.redrawSubchart && k.redrawSubchart(i, e, w, S, D, N, F), R.selectAll("." + u.selectedCircles).filter(k.isBarType.bind(k)).selectAll("circle").remove(), I.interaction_enabled && !t.flow && f && (k.redrawEventRect(), k.updateZoom && k.updateZoom()), k.updateCircleY(), V = (k.config.axis_rotated ? k.circleY : k.circleX).bind(k), G = (k.config.axis_rotated ? k.circleX : k.circleY).bind(k), t.flow && (P = k.generateFlow({ targets: X, flow: t.flow, duration: t.flow.duration, drawBar: _, drawLine: y, drawArea: x, cx: V, cy: G, xv: H, xForText: v, yForText: m })), (w || P) && k.isTabVisible() ? O.transition().duration(w).each(function () {
              var e = [];[k.redrawBar(_, !0), k.redrawLine(y, !0), k.redrawArea(x, !0), k.redrawCircle(V, G, !0), k.redrawText(v, m, t.flow, !0), k.redrawRegion(!0), k.redrawGrid(!0)].forEach(function (t) {
                t.forEach(function (t) {
                  e.push(t);
                });
              }), T = k.generateWait(), e.forEach(function (t) {
                T.add(t);
              });
            }).call(T, function () {
              P && P(), I.onrendered && I.onrendered.call(k);
            }) : (k.redrawBar(_), k.redrawLine(y), k.redrawArea(x), k.redrawCircle(V, G), k.redrawText(v, m, t.flow), k.redrawRegion(), k.redrawGrid(), I.onrendered && I.onrendered.call(k)), k.mapToIds(k.data.targets).forEach(function (t) {
              k.withoutFadeIn[t] = !0;
            });
          }, E.updateAndRedraw = function (t) {
            var e,
                n = this,
                i = n.config;(t = t || {}).withTransition = A(t, "withTransition", !0), t.withTransform = A(t, "withTransform", !1), t.withLegend = A(t, "withLegend", !1), t.withUpdateXDomain = !0, t.withUpdateOrgXDomain = !0, t.withTransitionForExit = !1, t.withTransitionForTransform = A(t, "withTransitionForTransform", t.withTransition), n.updateSizes(), t.withLegend && i.legend_show || (e = n.axis.generateTransitions(t.withTransitionForAxis ? i.transition_duration : 0), n.updateScales(), n.updateSvgSize(), n.transformAll(t.withTransitionForTransform, e)), n.redraw(t, e);
          }, E.redrawWithoutRescale = function () {
            this.redraw({ withY: !1, withSubchart: !1, withEventRect: !1, withTransitionForAxis: !1 });
          }, E.isTimeSeries = function () {
            return "timeseries" === this.config.axis_x_type;
          }, E.isCategorized = function () {
            return this.config.axis_x_type.indexOf("categor") >= 0;
          }, E.isCustomX = function () {
            var t = this,
                e = t.config;return !t.isTimeSeries() && (e.data_x || b(e.data_xs));
          }, E.isTimeSeriesY = function () {
            return "timeseries" === this.config.axis_y_type;
          }, E.getTranslate = function (t) {
            var e,
                n,
                i = this,
                r = i.config;return "main" === t ? (e = m(i.margin.left), n = m(i.margin.top)) : "context" === t ? (e = m(i.margin2.left), n = m(i.margin2.top)) : "legend" === t ? (e = i.margin3.left, n = i.margin3.top) : "x" === t ? (e = 0, n = r.axis_rotated ? 0 : i.height) : "y" === t ? (e = 0, n = r.axis_rotated ? i.height : 0) : "y2" === t ? (e = r.axis_rotated ? 0 : i.width, n = r.axis_rotated ? 1 : 0) : "subx" === t ? (e = 0, n = r.axis_rotated ? 0 : i.height2) : "arc" === t && (e = i.arcWidth / 2, n = i.arcHeight / 2 - (i.hasType("gauge") ? 6 : 0)), "translate(" + e + "," + n + ")";
          }, E.initialOpacity = function (t) {
            return null !== t.value && this.withoutFadeIn[t.id] ? 1 : 0;
          }, E.initialOpacityForCircle = function (t) {
            return null !== t.value && this.withoutFadeIn[t.id] ? this.opacityForCircle(t) : 0;
          }, E.opacityForCircle = function (t) {
            var e = (g(this.config.point_show) ? this.config.point_show(t) : this.config.point_show) ? 1 : 0;return f(t.value) ? this.isScatterType(t) ? .5 : e : 0;
          }, E.opacityForText = function () {
            return this.hasDataLabel() ? 1 : 0;
          }, E.xx = function (t) {
            return t ? this.x(t.x) : null;
          }, E.xv = function (t) {
            var e = this,
                n = t.value;return e.isTimeSeries() ? n = e.parseDate(t.value) : e.isCategorized() && "string" == typeof t.value && (n = e.config.axis_x_categories.indexOf(t.value)), Math.ceil(e.x(n));
          }, E.yv = function (t) {
            var e = this,
                n = t.axis && "y2" === t.axis ? e.y2 : e.y;return Math.ceil(n(t.value));
          }, E.subxx = function (t) {
            return t ? this.subX(t.x) : null;
          }, E.transformMain = function (t, e) {
            var n,
                i,
                r,
                a = this;e && e.axisX ? n = e.axisX : (n = a.main.select("." + u.axisX), t && (n = n.transition())), e && e.axisY ? i = e.axisY : (i = a.main.select("." + u.axisY), t && (i = i.transition())), e && e.axisY2 ? r = e.axisY2 : (r = a.main.select("." + u.axisY2), t && (r = r.transition())), (t ? a.main.transition() : a.main).attr("transform", a.getTranslate("main")), n.attr("transform", a.getTranslate("x")), i.attr("transform", a.getTranslate("y")), r.attr("transform", a.getTranslate("y2")), a.main.select("." + u.chartArcs).attr("transform", a.getTranslate("arc"));
          }, E.transformAll = function (t, e) {
            var n = this;n.transformMain(t, e), n.config.subchart_show && n.transformContext(t, e), n.legend && n.transformLegend(t);
          }, E.updateSvgSize = function () {
            var t = this,
                e = t.svg.select(".c3-brush .background");t.svg.attr("width", t.currentWidth).attr("height", t.currentHeight), t.svg.selectAll(["#" + t.clipId, "#" + t.clipIdForGrid]).select("rect").attr("width", t.width).attr("height", t.height), t.svg.select("#" + t.clipIdForXAxis).select("rect").attr("x", t.getXAxisClipX.bind(t)).attr("y", t.getXAxisClipY.bind(t)).attr("width", t.getXAxisClipWidth.bind(t)).attr("height", t.getXAxisClipHeight.bind(t)), t.svg.select("#" + t.clipIdForYAxis).select("rect").attr("x", t.getYAxisClipX.bind(t)).attr("y", t.getYAxisClipY.bind(t)).attr("width", t.getYAxisClipWidth.bind(t)).attr("height", t.getYAxisClipHeight.bind(t)), t.svg.select("#" + t.clipIdForSubchart).select("rect").attr("width", t.width).attr("height", e.size() ? e.attr("height") : 0), t.svg.select("." + u.zoomRect).attr("width", t.width).attr("height", t.height), t.selectChart.style("max-height", t.currentHeight + "px");
          }, E.updateDimension = function (t) {
            var e = this;t || (e.config.axis_rotated ? (e.axes.x.call(e.xAxis), e.axes.subx.call(e.subXAxis)) : (e.axes.y.call(e.yAxis), e.axes.y2.call(e.y2Axis))), e.updateSizes(), e.updateScales(), e.updateSvgSize(), e.transformAll(!1);
          }, E.observeInserted = function (t) {
            var e,
                n = this;"undefined" != typeof MutationObserver ? (e = new MutationObserver(function (i) {
              i.forEach(function (i) {
                "childList" === i.type && i.previousSibling && (e.disconnect(), n.intervalForObserveInserted = window.setInterval(function () {
                  t.node().parentNode && (window.clearInterval(n.intervalForObserveInserted), n.updateDimension(), n.brush && n.brush.update(), n.config.oninit.call(n), n.redraw({ withTransform: !0, withUpdateXDomain: !0, withUpdateOrgXDomain: !0, withTransition: !1, withTransitionForTransform: !1, withLegend: !0 }), t.transition().style("opacity", 1));
                }, 10));
              });
            })).observe(t.node(), { attributes: !0, childList: !0, characterData: !0 }) : window.console.error("MutationObserver not defined.");
          }, E.bindResize = function () {
            var t = this,
                e = t.config;if (t.resizeFunction = t.generateResize(), t.resizeFunction.add(function () {
              e.onresize.call(t);
            }), e.resize_auto && t.resizeFunction.add(function () {
              void 0 !== t.resizeTimeout && window.clearTimeout(t.resizeTimeout), t.resizeTimeout = window.setTimeout(function () {
                delete t.resizeTimeout, t.api.flush();
              }, 100);
            }), t.resizeFunction.add(function () {
              e.onresized.call(t);
            }), t.resizeIfElementDisplayed = function () {
              null != t.api && t.api.element.offsetParent && t.resizeFunction();
            }, window.attachEvent) window.attachEvent("onresize", t.resizeIfElementDisplayed);else if (window.addEventListener) window.addEventListener("resize", t.resizeIfElementDisplayed, !1);else {
              var n = window.onresize;n ? n.add && n.remove || (n = t.generateResize()).add(window.onresize) : n = t.generateResize(), n.add(t.resizeFunction), window.onresize = function () {
                t.api.element.offsetParent && n();
              };
            }
          }, E.generateResize = function () {
            function t() {
              e.forEach(function (t) {
                t();
              });
            }var e = [];return t.add = function (t) {
              e.push(t);
            }, t.remove = function (t) {
              for (var n = 0; n < e.length; n++) {
                if (e[n] === t) {
                  e.splice(n, 1);break;
                }
              }
            }, t;
          }, E.endall = function (t, e) {
            var n = 0;t.each(function () {
              ++n;
            }).each("end", function () {
              --n || e.apply(this, arguments);
            });
          }, E.generateWait = function () {
            var t = [],
                e = function e(_e2, n) {
              var i = setInterval(function () {
                var e = 0;t.forEach(function (t) {
                  if (t.empty()) e += 1;else try {
                    t.transition();
                  } catch (t) {
                    e += 1;
                  }
                }), e === t.length && (clearInterval(i), n && n());
              }, 10);
            };return e.add = function (e) {
              t.push(e);
            }, e;
          }, E.parseDate = function (t) {
            var e,
                n = this;return t instanceof Date ? e = t : "string" == typeof t ? e = n.dataTimeFormat(n.config.data_xFormat).parse(t) : "object" === (void 0 === t ? "undefined" : c(t)) ? e = new Date(+t) : "number" != typeof t || isNaN(t) || (e = new Date(+t)), e && !isNaN(+e) || window.console.error("Failed to parse x '" + t + "' to Date object"), e;
          }, E.isTabVisible = function () {
            var t;return void 0 !== document.hidden ? t = "hidden" : void 0 !== document.mozHidden ? t = "mozHidden" : void 0 !== document.msHidden ? t = "msHidden" : void 0 !== document.webkitHidden && (t = "webkitHidden"), !document[t];
          }, E.isValue = f, E.isFunction = g, E.isString = x, E.isUndefined = _, E.isDefined = y, E.ceil10 = v, E.asHalfPixel = m, E.diffDomain = w, E.isEmpty = S, E.notEmpty = b, E.notEmpty = b, E.getOption = A, E.hasValue = T, E.sanitise = P, E.getPathBox = C, E.CLASS = u, Function.prototype.bind || (Function.prototype.bind = function (t) {
            if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var e = Array.prototype.slice.call(arguments, 1),
                n = this,
                i = function i() {},
                r = function r() {
              return n.apply(this instanceof i ? this : t, e.concat(Array.prototype.slice.call(arguments)));
            };return i.prototype = this.prototype, r.prototype = new i(), r;
          }), "SVGPathSeg" in window || (window.SVGPathSeg = function (t, e, n) {
            this.pathSegType = t, this.pathSegTypeAsLetter = e, this._owningPathSegList = n;
          }, window.SVGPathSeg.prototype.classname = "SVGPathSeg", window.SVGPathSeg.PATHSEG_UNKNOWN = 0, window.SVGPathSeg.PATHSEG_CLOSEPATH = 1, window.SVGPathSeg.PATHSEG_MOVETO_ABS = 2, window.SVGPathSeg.PATHSEG_MOVETO_REL = 3, window.SVGPathSeg.PATHSEG_LINETO_ABS = 4, window.SVGPathSeg.PATHSEG_LINETO_REL = 5, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS = 6, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL = 7, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS = 8, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL = 9, window.SVGPathSeg.PATHSEG_ARC_ABS = 10, window.SVGPathSeg.PATHSEG_ARC_REL = 11, window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS = 12, window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL = 13, window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS = 14, window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL = 15, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS = 16, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL = 17, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS = 18, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL = 19, window.SVGPathSeg.prototype._segmentChanged = function () {
            this._owningPathSegList && this._owningPathSegList.segmentChanged(this);
          }, window.SVGPathSegClosePath = function (t) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CLOSEPATH, "z", t);
          }, window.SVGPathSegClosePath.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegClosePath.prototype.toString = function () {
            return "[object SVGPathSegClosePath]";
          }, window.SVGPathSegClosePath.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter;
          }, window.SVGPathSegClosePath.prototype.clone = function () {
            return new window.SVGPathSegClosePath(void 0);
          }, window.SVGPathSegMovetoAbs = function (t, e, n) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_MOVETO_ABS, "M", t), this._x = e, this._y = n;
          }, window.SVGPathSegMovetoAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegMovetoAbs.prototype.toString = function () {
            return "[object SVGPathSegMovetoAbs]";
          }, window.SVGPathSegMovetoAbs.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
          }, window.SVGPathSegMovetoAbs.prototype.clone = function () {
            return new window.SVGPathSegMovetoAbs(void 0, this._x, this._y);
          }, Object.defineProperty(window.SVGPathSegMovetoAbs.prototype, "x", { get: function get() {
              return this._x;
            }, set: function set(t) {
              this._x = t, this._segmentChanged();
            }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegMovetoAbs.prototype, "y", { get: function get() {
              return this._y;
            }, set: function set(t) {
              this._y = t, this._segmentChanged();
            }, enumerable: !0 }), window.SVGPathSegMovetoRel = function (t, e, n) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_MOVETO_REL, "m", t), this._x = e, this._y = n;
          }, window.SVGPathSegMovetoRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegMovetoRel.prototype.toString = function () {
            return "[object SVGPathSegMovetoRel]";
          }, window.SVGPathSegMovetoRel.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
          }, window.SVGPathSegMovetoRel.prototype.clone = function () {
            return new window.SVGPathSegMovetoRel(void 0, this._x, this._y);
          }, Object.defineProperty(window.SVGPathSegMovetoRel.prototype, "x", { get: function get() {
              return this._x;
            }, set: function set(t) {
              this._x = t, this._segmentChanged();
            }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegMovetoRel.prototype, "y", { get: function get() {
              return this._y;
            }, set: function set(t) {
              this._y = t, this._segmentChanged();
            }, enumerable: !0 }), window.SVGPathSegLinetoAbs = function (t, e, n) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_ABS, "L", t), this._x = e, this._y = n;
          }, window.SVGPathSegLinetoAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegLinetoAbs.prototype.toString = function () {
            return "[object SVGPathSegLinetoAbs]";
          }, window.SVGPathSegLinetoAbs.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
          }, window.SVGPathSegLinetoAbs.prototype.clone = function () {
            return new window.SVGPathSegLinetoAbs(void 0, this._x, this._y);
          }, Object.defineProperty(window.SVGPathSegLinetoAbs.prototype, "x", { get: function get() {
              return this._x;
            }, set: function set(t) {
              this._x = t, this._segmentChanged();
            }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegLinetoAbs.prototype, "y", { get: function get() {
              return this._y;
            }, set: function set(t) {
              this._y = t, this._segmentChanged();
            }, enumerable: !0 }), window.SVGPathSegLinetoRel = function (t, e, n) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_REL, "l", t), this._x = e, this._y = n;
          }, window.SVGPathSegLinetoRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegLinetoRel.prototype.toString = function () {
            return "[object SVGPathSegLinetoRel]";
          }, window.SVGPathSegLinetoRel.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
          }, window.SVGPathSegLinetoRel.prototype.clone = function () {
            return new window.SVGPathSegLinetoRel(void 0, this._x, this._y);
          }, Object.defineProperty(window.SVGPathSegLinetoRel.prototype, "x", { get: function get() {
              return this._x;
            }, set: function set(t) {
              this._x = t, this._segmentChanged();
            }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegLinetoRel.prototype, "y", { get: function get() {
              return this._y;
            }, set: function set(t) {
              this._y = t, this._segmentChanged();
            }, enumerable: !0 }), window.SVGPathSegCurvetoCubicAbs = function (t, e, n, i, r, a, o) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS, "C", t), this._x = e, this._y = n, this._x1 = i, this._y1 = r, this._x2 = a, this._y2 = o;
          }, window.SVGPathSegCurvetoCubicAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegCurvetoCubicAbs.prototype.toString = function () {
            return "[object SVGPathSegCurvetoCubicAbs]";
          }, window.SVGPathSegCurvetoCubicAbs.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y;
          }, window.SVGPathSegCurvetoCubicAbs.prototype.clone = function () {
            return new window.SVGPathSegCurvetoCubicAbs(void 0, this._x, this._y, this._x1, this._y1, this._x2, this._y2);
          }, Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "x", { get: function get() {
              return this._x;
            }, set: function set(t) {
              this._x = t, this._segmentChanged();
            }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "y", { get: function get() {
              return this._y;
            }, set: function set(t) {
              this._y = t, this._segmentChanged();
            }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "x1", { get: function get() {
              return this._x1;
            }, set: function set(t) {
              this._x1 = t, this._segmentChanged();
            }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "y1", { get: function get() {
              return this._y1;
            }, set: function set(t) {
              this._y1 = t, this._segmentChanged();
            }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "x2", { get: function get() {
              return this._x2;
            }, set: function set(t) {
              this._x2 = t, this._segmentChanged();
            }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "y2", { get: function get() {
              return this._y2;
            }, set: function set(t) {
              this._y2 = t, this._segmentChanged();
            }, enumerable: !0 }), window.SVGPathSegCurvetoCubicRel = function (t, e, n, i, r, a, o) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL, "c", t), this._x = e, this._y = n, this._x1 = i, this._y1 = r, this._x2 = a, this._y2 = o;
          }, window.SVGPathSegCurvetoCubicRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegCurvetoCubicRel.prototype.toString = function () {
            return "[object SVGPathSegCurvetoCubicRel]";
          }, window.SVGPathSegCurvetoCubicRel.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y;
          }, window.SVGPathSegCurvetoCubicRel.prototype.clone = function () {
            return new window.SVGPathSegCurvetoCubicRel(void 0, this._x, this._y, this._x1, this._y1, this._x2, this._y2);
          }, Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "x", { get: function get() {
              return this._x;
            }, set: function set(t) {
              this._x = t, this._segmentChanged();
            }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "y", { get: function get() {
              return this._y;
            }, set: function set(t) {
              this._y = t, this._segmentChanged();
            }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "x1", { get: function get() {
              return this._x1;
            }, set: function set(t) {
              this._x1 = t, this._segmentChanged();
            }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "y1", { get: function get() {
              return this._y1;
            }, set: function set(t) {
              this._y1 = t, this._segmentChanged();
            }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "x2", { get: function get() {
              return this._x2;
            }, set: function set(t) {
              this._x2 = t, this._segmentChanged();
            }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "y2", { get: function get() {
              return this._y2;
            }, set: function set(t) {
              this._y2 = t, this._segmentChanged();
            }, enumerable: !0 }), window.SVGPathSegCurvetoQuadraticAbs = function (t, e, n, i, r) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS, "Q", t), this._x = e, this._y = n, this._x1 = i, this._y1 = r;
          }, window.SVGPathSegCurvetoQuadraticAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegCurvetoQuadraticAbs.prototype.toString = function () {
            return "[object SVGPathSegCurvetoQuadraticAbs]";
          }, window.SVGPathSegCurvetoQuadraticAbs.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x + " " + this._y;
          }, window.SVGPathSegCurvetoQuadraticAbs.prototype.clone = function () {
            return new window.SVGPathSegCurvetoQuadraticAbs(void 0, this._x, this._y, this._x1, this._y1);
          }, Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "x", { get: function get() {
              return this._x;
            }, set: function set(t) {
              this._x = t, this._segmentChanged();
            }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "y", { get: function get() {
              return this._y;
            }, set: function set(t) {
              this._y = t, this._segmentChanged();
            }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "x1", { get: function get() {
              return this._x1;
            }, set: function set(t) {
              this._x1 = t, this._segmentChanged();
            }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "y1", { get: function get() {
              return this._y1;
            }, set: function set(t) {
              this._y1 = t, this._segmentChanged();
            }, enumerable: !0 }), window.SVGPathSegCurvetoQuadraticRel = function (t, e, n, i, r) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL, "q", t), this._x = e, this._y = n, this._x1 = i, this._y1 = r;
          }, window.SVGPathSegCurvetoQuadraticRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegCurvetoQuadraticRel.prototype.toString = function () {
            return "[object SVGPathSegCurvetoQuadraticRel]";
          }, window.SVGPathSegCurvetoQuadraticRel.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x + " " + this._y;
          }, window.SVGPathSegCurvetoQuadraticRel.prototype.clone = function () {
            return new window.SVGPathSegCurvetoQuadraticRel(void 0, this._x, this._y, this._x1, this._y1);
          }, Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "x", { get: function get() {
              return this._x;
            }, set: function set(t) {
              this._x = t, this._segmentChanged();
            }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "y", { get: function get() {
              return this._y;
            }, set: function set(t) {
              this._y = t, this._segmentChanged();
            }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "x1", { get: function get() {
              return this._x1;
            }, set: function set(t) {
              this._x1 = t, this._segmentChanged();
            }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "y1", { get: function get() {
              return this._y1;
            }, set: function set(t) {
              this._y1 = t, this._segmentChanged();
            }, enumerable: !0 }), window.SVGPathSegArcAbs = function (t, e, n, i, r, a, o, s) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_ARC_ABS, "A", t), this._x = e, this._y = n, this._r1 = i, this._r2 = r, this._angle = a, this._largeArcFlag = o, this._sweepFlag = s;
          }, window.SVGPathSegArcAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegArcAbs.prototype.toString = function () {
            return "[object SVGPathSegArcAbs]";
          }, window.SVGPathSegArcAbs.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._r1 + " " + this._r2 + " " + this._angle + " " + (this._largeArcFlag ? "1" : "0") + " " + (this._sweepFlag ? "1" : "0") + " " + this._x + " " + this._y;
          }, window.SVGPathSegArcAbs.prototype.clone = function () {
            return new window.SVGPathSegArcAbs(void 0, this._x, this._y, this._r1, this._r2, this._angle, this._largeArcFlag, this._sweepFlag);
          }, Object.defineProperty(window.SVGPathSegArcAbs.prototype, "x", { get: function get() {
              return this._x;
            }, set: function set(t) {
              this._x = t, this._segmentChanged();
            }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegArcAbs.prototype, "y", { get: function get() {
              return this._y;
            }, set: function set(t) {
              this._y = t, this._segmentChanged();
            }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegArcAbs.prototype, "r1", { get: function get() {
              return this._r1;
            }, set: function set(t) {
              this._r1 = t, this._segmentChanged();
            }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegArcAbs.prototype, "r2", { get: function get() {
              return this._r2;
            }, set: function set(t) {
              this._r2 = t, this._segmentChanged();
            }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegArcAbs.prototype, "angle", { get: function get() {
              return this._angle;
            }, set: function set(t) {
              this._angle = t, this._segmentChanged();
            }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegArcAbs.prototype, "largeArcFlag", { get: function get() {
              return this._largeArcFlag;
            }, set: function set(t) {
              this._largeArcFlag = t, this._segmentChanged();
            }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegArcAbs.prototype, "sweepFlag", { get: function get() {
              return this._sweepFlag;
            }, set: function set(t) {
              this._sweepFlag = t, this._segmentChanged();
            }, enumerable: !0 }), window.SVGPathSegArcRel = function (t, e, n, i, r, a, o, s) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_ARC_REL, "a", t), this._x = e, this._y = n, this._r1 = i, this._r2 = r, this._angle = a, this._largeArcFlag = o, this._sweepFlag = s;
          }, window.SVGPathSegArcRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegArcRel.prototype.toString = function () {
            return "[object SVGPathSegArcRel]";
          }, window.SVGPathSegArcRel.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._r1 + " " + this._r2 + " " + this._angle + " " + (this._largeArcFlag ? "1" : "0") + " " + (this._sweepFlag ? "1" : "0") + " " + this._x + " " + this._y;
          }, window.SVGPathSegArcRel.prototype.clone = function () {
            return new window.SVGPathSegArcRel(void 0, this._x, this._y, this._r1, this._r2, this._angle, this._largeArcFlag, this._sweepFlag);
          }, Object.defineProperty(window.SVGPathSegArcRel.prototype, "x", { get: function get() {
              return this._x;
            }, set: function set(t) {
              this._x = t, this._segmentChanged();
            }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegArcRel.prototype, "y", { get: function get() {
              return this._y;
            }, set: function set(t) {
              this._y = t, this._segmentChanged();
            }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegArcRel.prototype, "r1", { get: function get() {
              return this._r1;
            }, set: function set(t) {
              this._r1 = t, this._segmentChanged();
            }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegArcRel.prototype, "r2", { get: function get() {
              return this._r2;
            }, set: function set(t) {
              this._r2 = t, this._segmentChanged();
            }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegArcRel.prototype, "angle", { get: function get() {
              return this._angle;
            }, set: function set(t) {
              this._angle = t, this._segmentChanged();
            }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegArcRel.prototype, "largeArcFlag", { get: function get() {
              return this._largeArcFlag;
            }, set: function set(t) {
              this._largeArcFlag = t, this._segmentChanged();
            }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegArcRel.prototype, "sweepFlag", { get: function get() {
              return this._sweepFlag;
            }, set: function set(t) {
              this._sweepFlag = t, this._segmentChanged();
            }, enumerable: !0 }), window.SVGPathSegLinetoHorizontalAbs = function (t, e) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS, "H", t), this._x = e;
          }, window.SVGPathSegLinetoHorizontalAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegLinetoHorizontalAbs.prototype.toString = function () {
            return "[object SVGPathSegLinetoHorizontalAbs]";
          }, window.SVGPathSegLinetoHorizontalAbs.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._x;
          }, window.SVGPathSegLinetoHorizontalAbs.prototype.clone = function () {
            return new window.SVGPathSegLinetoHorizontalAbs(void 0, this._x);
          }, Object.defineProperty(window.SVGPathSegLinetoHorizontalAbs.prototype, "x", { get: function get() {
              return this._x;
            }, set: function set(t) {
              this._x = t, this._segmentChanged();
            }, enumerable: !0 }), window.SVGPathSegLinetoHorizontalRel = function (t, e) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL, "h", t), this._x = e;
          }, window.SVGPathSegLinetoHorizontalRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegLinetoHorizontalRel.prototype.toString = function () {
            return "[object SVGPathSegLinetoHorizontalRel]";
          }, window.SVGPathSegLinetoHorizontalRel.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._x;
          }, window.SVGPathSegLinetoHorizontalRel.prototype.clone = function () {
            return new window.SVGPathSegLinetoHorizontalRel(void 0, this._x);
          }, Object.defineProperty(window.SVGPathSegLinetoHorizontalRel.prototype, "x", { get: function get() {
              return this._x;
            }, set: function set(t) {
              this._x = t, this._segmentChanged();
            }, enumerable: !0 }), window.SVGPathSegLinetoVerticalAbs = function (t, e) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS, "V", t), this._y = e;
          }, window.SVGPathSegLinetoVerticalAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegLinetoVerticalAbs.prototype.toString = function () {
            return "[object SVGPathSegLinetoVerticalAbs]";
          }, window.SVGPathSegLinetoVerticalAbs.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._y;
          }, window.SVGPathSegLinetoVerticalAbs.prototype.clone = function () {
            return new window.SVGPathSegLinetoVerticalAbs(void 0, this._y);
          }, Object.defineProperty(window.SVGPathSegLinetoVerticalAbs.prototype, "y", { get: function get() {
              return this._y;
            }, set: function set(t) {
              this._y = t, this._segmentChanged();
            }, enumerable: !0 }), window.SVGPathSegLinetoVerticalRel = function (t, e) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL, "v", t), this._y = e;
          }, window.SVGPathSegLinetoVerticalRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegLinetoVerticalRel.prototype.toString = function () {
            return "[object SVGPathSegLinetoVerticalRel]";
          }, window.SVGPathSegLinetoVerticalRel.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._y;
          }, window.SVGPathSegLinetoVerticalRel.prototype.clone = function () {
            return new window.SVGPathSegLinetoVerticalRel(void 0, this._y);
          }, Object.defineProperty(window.SVGPathSegLinetoVerticalRel.prototype, "y", { get: function get() {
              return this._y;
            }, set: function set(t) {
              this._y = t, this._segmentChanged();
            }, enumerable: !0 }), window.SVGPathSegCurvetoCubicSmoothAbs = function (t, e, n, i, r) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS, "S", t), this._x = e, this._y = n, this._x2 = i, this._y2 = r;
          }, window.SVGPathSegCurvetoCubicSmoothAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegCurvetoCubicSmoothAbs.prototype.toString = function () {
            return "[object SVGPathSegCurvetoCubicSmoothAbs]";
          }, window.SVGPathSegCurvetoCubicSmoothAbs.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y;
          }, window.SVGPathSegCurvetoCubicSmoothAbs.prototype.clone = function () {
            return new window.SVGPathSegCurvetoCubicSmoothAbs(void 0, this._x, this._y, this._x2, this._y2);
          }, Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "x", { get: function get() {
              return this._x;
            }, set: function set(t) {
              this._x = t, this._segmentChanged();
            }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "y", { get: function get() {
              return this._y;
            }, set: function set(t) {
              this._y = t, this._segmentChanged();
            }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "x2", { get: function get() {
              return this._x2;
            }, set: function set(t) {
              this._x2 = t, this._segmentChanged();
            }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "y2", { get: function get() {
              return this._y2;
            }, set: function set(t) {
              this._y2 = t, this._segmentChanged();
            }, enumerable: !0 }), window.SVGPathSegCurvetoCubicSmoothRel = function (t, e, n, i, r) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL, "s", t), this._x = e, this._y = n, this._x2 = i, this._y2 = r;
          }, window.SVGPathSegCurvetoCubicSmoothRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegCurvetoCubicSmoothRel.prototype.toString = function () {
            return "[object SVGPathSegCurvetoCubicSmoothRel]";
          }, window.SVGPathSegCurvetoCubicSmoothRel.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y;
          }, window.SVGPathSegCurvetoCubicSmoothRel.prototype.clone = function () {
            return new window.SVGPathSegCurvetoCubicSmoothRel(void 0, this._x, this._y, this._x2, this._y2);
          }, Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "x", { get: function get() {
              return this._x;
            }, set: function set(t) {
              this._x = t, this._segmentChanged();
            }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "y", { get: function get() {
              return this._y;
            }, set: function set(t) {
              this._y = t, this._segmentChanged();
            }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "x2", { get: function get() {
              return this._x2;
            }, set: function set(t) {
              this._x2 = t, this._segmentChanged();
            }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "y2", { get: function get() {
              return this._y2;
            }, set: function set(t) {
              this._y2 = t, this._segmentChanged();
            }, enumerable: !0 }), window.SVGPathSegCurvetoQuadraticSmoothAbs = function (t, e, n) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS, "T", t), this._x = e, this._y = n;
          }, window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype.toString = function () {
            return "[object SVGPathSegCurvetoQuadraticSmoothAbs]";
          }, window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
          }, window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype.clone = function () {
            return new window.SVGPathSegCurvetoQuadraticSmoothAbs(void 0, this._x, this._y);
          }, Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype, "x", { get: function get() {
              return this._x;
            }, set: function set(t) {
              this._x = t, this._segmentChanged();
            }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype, "y", { get: function get() {
              return this._y;
            }, set: function set(t) {
              this._y = t, this._segmentChanged();
            }, enumerable: !0 }), window.SVGPathSegCurvetoQuadraticSmoothRel = function (t, e, n) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL, "t", t), this._x = e, this._y = n;
          }, window.SVGPathSegCurvetoQuadraticSmoothRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegCurvetoQuadraticSmoothRel.prototype.toString = function () {
            return "[object SVGPathSegCurvetoQuadraticSmoothRel]";
          }, window.SVGPathSegCurvetoQuadraticSmoothRel.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
          }, window.SVGPathSegCurvetoQuadraticSmoothRel.prototype.clone = function () {
            return new window.SVGPathSegCurvetoQuadraticSmoothRel(void 0, this._x, this._y);
          }, Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothRel.prototype, "x", { get: function get() {
              return this._x;
            }, set: function set(t) {
              this._x = t, this._segmentChanged();
            }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothRel.prototype, "y", { get: function get() {
              return this._y;
            }, set: function set(t) {
              this._y = t, this._segmentChanged();
            }, enumerable: !0 }), window.SVGPathElement.prototype.createSVGPathSegClosePath = function () {
            return new window.SVGPathSegClosePath(void 0);
          }, window.SVGPathElement.prototype.createSVGPathSegMovetoAbs = function (t, e) {
            return new window.SVGPathSegMovetoAbs(void 0, t, e);
          }, window.SVGPathElement.prototype.createSVGPathSegMovetoRel = function (t, e) {
            return new window.SVGPathSegMovetoRel(void 0, t, e);
          }, window.SVGPathElement.prototype.createSVGPathSegLinetoAbs = function (t, e) {
            return new window.SVGPathSegLinetoAbs(void 0, t, e);
          }, window.SVGPathElement.prototype.createSVGPathSegLinetoRel = function (t, e) {
            return new window.SVGPathSegLinetoRel(void 0, t, e);
          }, window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicAbs = function (t, e, n, i, r, a) {
            return new window.SVGPathSegCurvetoCubicAbs(void 0, t, e, n, i, r, a);
          }, window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicRel = function (t, e, n, i, r, a) {
            return new window.SVGPathSegCurvetoCubicRel(void 0, t, e, n, i, r, a);
          }, window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticAbs = function (t, e, n, i) {
            return new window.SVGPathSegCurvetoQuadraticAbs(void 0, t, e, n, i);
          }, window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticRel = function (t, e, n, i) {
            return new window.SVGPathSegCurvetoQuadraticRel(void 0, t, e, n, i);
          }, window.SVGPathElement.prototype.createSVGPathSegArcAbs = function (t, e, n, i, r, a, o) {
            return new window.SVGPathSegArcAbs(void 0, t, e, n, i, r, a, o);
          }, window.SVGPathElement.prototype.createSVGPathSegArcRel = function (t, e, n, i, r, a, o) {
            return new window.SVGPathSegArcRel(void 0, t, e, n, i, r, a, o);
          }, window.SVGPathElement.prototype.createSVGPathSegLinetoHorizontalAbs = function (t) {
            return new window.SVGPathSegLinetoHorizontalAbs(void 0, t);
          }, window.SVGPathElement.prototype.createSVGPathSegLinetoHorizontalRel = function (t) {
            return new window.SVGPathSegLinetoHorizontalRel(void 0, t);
          }, window.SVGPathElement.prototype.createSVGPathSegLinetoVerticalAbs = function (t) {
            return new window.SVGPathSegLinetoVerticalAbs(void 0, t);
          }, window.SVGPathElement.prototype.createSVGPathSegLinetoVerticalRel = function (t) {
            return new window.SVGPathSegLinetoVerticalRel(void 0, t);
          }, window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothAbs = function (t, e, n, i) {
            return new window.SVGPathSegCurvetoCubicSmoothAbs(void 0, t, e, n, i);
          }, window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothRel = function (t, e, n, i) {
            return new window.SVGPathSegCurvetoCubicSmoothRel(void 0, t, e, n, i);
          }, window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothAbs = function (t, e) {
            return new window.SVGPathSegCurvetoQuadraticSmoothAbs(void 0, t, e);
          }, window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothRel = function (t, e) {
            return new window.SVGPathSegCurvetoQuadraticSmoothRel(void 0, t, e);
          }, "getPathSegAtLength" in window.SVGPathElement.prototype || (window.SVGPathElement.prototype.getPathSegAtLength = function (t) {
            if (void 0 === t || !isFinite(t)) throw "Invalid arguments.";var e = document.createElementNS("http://www.w3.org/2000/svg", "path");e.setAttribute("d", this.getAttribute("d"));var n = e.pathSegList.numberOfItems - 1;if (n <= 0) return 0;do {
              if (e.pathSegList.removeItem(n), t > e.getTotalLength()) break;n--;
            } while (n > 0);return n;
          })), "SVGPathSegList" in window || (window.SVGPathSegList = function (t) {
            this._pathElement = t, this._list = this._parsePath(this._pathElement.getAttribute("d")), this._mutationObserverConfig = { attributes: !0, attributeFilter: ["d"] }, this._pathElementMutationObserver = new MutationObserver(this._updateListFromPathMutations.bind(this)), this._pathElementMutationObserver.observe(this._pathElement, this._mutationObserverConfig);
          }, window.SVGPathSegList.prototype.classname = "SVGPathSegList", Object.defineProperty(window.SVGPathSegList.prototype, "numberOfItems", { get: function get() {
              return this._checkPathSynchronizedToList(), this._list.length;
            }, enumerable: !0 }), Object.defineProperty(window.SVGPathElement.prototype, "pathSegList", { get: function get() {
              return this._pathSegList || (this._pathSegList = new window.SVGPathSegList(this)), this._pathSegList;
            }, enumerable: !0 }), Object.defineProperty(window.SVGPathElement.prototype, "normalizedPathSegList", { get: function get() {
              return this.pathSegList;
            }, enumerable: !0 }), Object.defineProperty(window.SVGPathElement.prototype, "animatedPathSegList", { get: function get() {
              return this.pathSegList;
            }, enumerable: !0 }), Object.defineProperty(window.SVGPathElement.prototype, "animatedNormalizedPathSegList", { get: function get() {
              return this.pathSegList;
            }, enumerable: !0 }), window.SVGPathSegList.prototype._checkPathSynchronizedToList = function () {
            this._updateListFromPathMutations(this._pathElementMutationObserver.takeRecords());
          }, window.SVGPathSegList.prototype._updateListFromPathMutations = function (t) {
            if (this._pathElement) {
              var e = !1;t.forEach(function (t) {
                "d" == t.attributeName && (e = !0);
              }), e && (this._list = this._parsePath(this._pathElement.getAttribute("d")));
            }
          }, window.SVGPathSegList.prototype._writeListToPath = function () {
            this._pathElementMutationObserver.disconnect(), this._pathElement.setAttribute("d", window.SVGPathSegList._pathSegArrayAsString(this._list)), this._pathElementMutationObserver.observe(this._pathElement, this._mutationObserverConfig);
          }, window.SVGPathSegList.prototype.segmentChanged = function (t) {
            this._writeListToPath();
          }, window.SVGPathSegList.prototype.clear = function () {
            this._checkPathSynchronizedToList(), this._list.forEach(function (t) {
              t._owningPathSegList = null;
            }), this._list = [], this._writeListToPath();
          }, window.SVGPathSegList.prototype.initialize = function (t) {
            return this._checkPathSynchronizedToList(), this._list = [t], t._owningPathSegList = this, this._writeListToPath(), t;
          }, window.SVGPathSegList.prototype._checkValidIndex = function (t) {
            if (isNaN(t) || t < 0 || t >= this.numberOfItems) throw "INDEX_SIZE_ERR";
          }, window.SVGPathSegList.prototype.getItem = function (t) {
            return this._checkPathSynchronizedToList(), this._checkValidIndex(t), this._list[t];
          }, window.SVGPathSegList.prototype.insertItemBefore = function (t, e) {
            return this._checkPathSynchronizedToList(), e > this.numberOfItems && (e = this.numberOfItems), t._owningPathSegList && (t = t.clone()), this._list.splice(e, 0, t), t._owningPathSegList = this, this._writeListToPath(), t;
          }, window.SVGPathSegList.prototype.replaceItem = function (t, e) {
            return this._checkPathSynchronizedToList(), t._owningPathSegList && (t = t.clone()), this._checkValidIndex(e), this._list[e] = t, t._owningPathSegList = this, this._writeListToPath(), t;
          }, window.SVGPathSegList.prototype.removeItem = function (t) {
            this._checkPathSynchronizedToList(), this._checkValidIndex(t);var e = this._list[t];return this._list.splice(t, 1), this._writeListToPath(), e;
          }, window.SVGPathSegList.prototype.appendItem = function (t) {
            return this._checkPathSynchronizedToList(), t._owningPathSegList && (t = t.clone()), this._list.push(t), t._owningPathSegList = this, this._writeListToPath(), t;
          }, window.SVGPathSegList._pathSegArrayAsString = function (t) {
            var e = "",
                n = !0;return t.forEach(function (t) {
              n ? (n = !1, e += t._asPathString()) : e += " " + t._asPathString();
            }), e;
          }, window.SVGPathSegList.prototype._parsePath = function (t) {
            if (!t || 0 == t.length) return [];var e = this,
                n = function n() {
              this.pathSegList = [];
            };n.prototype.appendSegment = function (t) {
              this.pathSegList.push(t);
            };var i = function i(t) {
              this._string = t, this._currentIndex = 0, this._endIndex = this._string.length, this._previousCommand = window.SVGPathSeg.PATHSEG_UNKNOWN, this._skipOptionalSpaces();
            };i.prototype._isCurrentSpace = function () {
              var t = this._string[this._currentIndex];return t <= " " && (" " == t || "\n" == t || "\t" == t || "\r" == t || "\f" == t);
            }, i.prototype._skipOptionalSpaces = function () {
              for (; this._currentIndex < this._endIndex && this._isCurrentSpace();) {
                this._currentIndex++;
              }return this._currentIndex < this._endIndex;
            }, i.prototype._skipOptionalSpacesOrDelimiter = function () {
              return !(this._currentIndex < this._endIndex && !this._isCurrentSpace() && "," != this._string.charAt(this._currentIndex)) && (this._skipOptionalSpaces() && this._currentIndex < this._endIndex && "," == this._string.charAt(this._currentIndex) && (this._currentIndex++, this._skipOptionalSpaces()), this._currentIndex < this._endIndex);
            }, i.prototype.hasMoreData = function () {
              return this._currentIndex < this._endIndex;
            }, i.prototype.peekSegmentType = function () {
              var t = this._string[this._currentIndex];return this._pathSegTypeFromChar(t);
            }, i.prototype._pathSegTypeFromChar = function (t) {
              switch (t) {case "Z":case "z":
                  return window.SVGPathSeg.PATHSEG_CLOSEPATH;case "M":
                  return window.SVGPathSeg.PATHSEG_MOVETO_ABS;case "m":
                  return window.SVGPathSeg.PATHSEG_MOVETO_REL;case "L":
                  return window.SVGPathSeg.PATHSEG_LINETO_ABS;case "l":
                  return window.SVGPathSeg.PATHSEG_LINETO_REL;case "C":
                  return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS;case "c":
                  return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL;case "Q":
                  return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS;case "q":
                  return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL;case "A":
                  return window.SVGPathSeg.PATHSEG_ARC_ABS;case "a":
                  return window.SVGPathSeg.PATHSEG_ARC_REL;case "H":
                  return window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS;case "h":
                  return window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL;case "V":
                  return window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS;case "v":
                  return window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL;case "S":
                  return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS;case "s":
                  return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL;case "T":
                  return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS;case "t":
                  return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL;default:
                  return window.SVGPathSeg.PATHSEG_UNKNOWN;}
            }, i.prototype._nextCommandHelper = function (t, e) {
              return ("+" == t || "-" == t || "." == t || t >= "0" && t <= "9") && e != window.SVGPathSeg.PATHSEG_CLOSEPATH ? e == window.SVGPathSeg.PATHSEG_MOVETO_ABS ? window.SVGPathSeg.PATHSEG_LINETO_ABS : e == window.SVGPathSeg.PATHSEG_MOVETO_REL ? window.SVGPathSeg.PATHSEG_LINETO_REL : e : window.SVGPathSeg.PATHSEG_UNKNOWN;
            }, i.prototype.initialCommandIsMoveTo = function () {
              if (!this.hasMoreData()) return !0;var t = this.peekSegmentType();return t == window.SVGPathSeg.PATHSEG_MOVETO_ABS || t == window.SVGPathSeg.PATHSEG_MOVETO_REL;
            }, i.prototype._parseNumber = function () {
              var t = 0,
                  e = 0,
                  n = 1,
                  i = 0,
                  r = 1,
                  a = 1,
                  o = this._currentIndex;if (this._skipOptionalSpaces(), this._currentIndex < this._endIndex && "+" == this._string.charAt(this._currentIndex) ? this._currentIndex++ : this._currentIndex < this._endIndex && "-" == this._string.charAt(this._currentIndex) && (this._currentIndex++, r = -1), !(this._currentIndex == this._endIndex || (this._string.charAt(this._currentIndex) < "0" || this._string.charAt(this._currentIndex) > "9") && "." != this._string.charAt(this._currentIndex))) {
                for (var s = this._currentIndex; this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= "0" && this._string.charAt(this._currentIndex) <= "9";) {
                  this._currentIndex++;
                }if (this._currentIndex != s) for (var u = this._currentIndex - 1, c = 1; u >= s;) {
                  e += c * (this._string.charAt(u--) - "0"), c *= 10;
                }if (this._currentIndex < this._endIndex && "." == this._string.charAt(this._currentIndex)) {
                  if (++this._currentIndex >= this._endIndex || this._string.charAt(this._currentIndex) < "0" || this._string.charAt(this._currentIndex) > "9") return;for (; this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= "0" && this._string.charAt(this._currentIndex) <= "9";) {
                    n *= 10, i += (this._string.charAt(this._currentIndex) - "0") / n, this._currentIndex += 1;
                  }
                }if (this._currentIndex != o && this._currentIndex + 1 < this._endIndex && ("e" == this._string.charAt(this._currentIndex) || "E" == this._string.charAt(this._currentIndex)) && "x" != this._string.charAt(this._currentIndex + 1) && "m" != this._string.charAt(this._currentIndex + 1)) {
                  if (this._currentIndex++, "+" == this._string.charAt(this._currentIndex) ? this._currentIndex++ : "-" == this._string.charAt(this._currentIndex) && (this._currentIndex++, a = -1), this._currentIndex >= this._endIndex || this._string.charAt(this._currentIndex) < "0" || this._string.charAt(this._currentIndex) > "9") return;for (; this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= "0" && this._string.charAt(this._currentIndex) <= "9";) {
                    t *= 10, t += this._string.charAt(this._currentIndex) - "0", this._currentIndex++;
                  }
                }var l = e + i;if (l *= r, t && (l *= Math.pow(10, a * t)), o != this._currentIndex) return this._skipOptionalSpacesOrDelimiter(), l;
              }
            }, i.prototype._parseArcFlag = function () {
              if (!(this._currentIndex >= this._endIndex)) {
                var t = !1,
                    e = this._string.charAt(this._currentIndex++);if ("0" == e) t = !1;else {
                  if ("1" != e) return;t = !0;
                }return this._skipOptionalSpacesOrDelimiter(), t;
              }
            }, i.prototype.parseSegment = function () {
              var t = this._string[this._currentIndex],
                  n = this._pathSegTypeFromChar(t);if (n == window.SVGPathSeg.PATHSEG_UNKNOWN) {
                if (this._previousCommand == window.SVGPathSeg.PATHSEG_UNKNOWN) return null;if ((n = this._nextCommandHelper(t, this._previousCommand)) == window.SVGPathSeg.PATHSEG_UNKNOWN) return null;
              } else this._currentIndex++;switch (this._previousCommand = n, n) {case window.SVGPathSeg.PATHSEG_MOVETO_REL:
                  return new window.SVGPathSegMovetoRel(e, this._parseNumber(), this._parseNumber());case window.SVGPathSeg.PATHSEG_MOVETO_ABS:
                  return new window.SVGPathSegMovetoAbs(e, this._parseNumber(), this._parseNumber());case window.SVGPathSeg.PATHSEG_LINETO_REL:
                  return new window.SVGPathSegLinetoRel(e, this._parseNumber(), this._parseNumber());case window.SVGPathSeg.PATHSEG_LINETO_ABS:
                  return new window.SVGPathSegLinetoAbs(e, this._parseNumber(), this._parseNumber());case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL:
                  return new window.SVGPathSegLinetoHorizontalRel(e, this._parseNumber());case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS:
                  return new window.SVGPathSegLinetoHorizontalAbs(e, this._parseNumber());case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL:
                  return new window.SVGPathSegLinetoVerticalRel(e, this._parseNumber());case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS:
                  return new window.SVGPathSegLinetoVerticalAbs(e, this._parseNumber());case window.SVGPathSeg.PATHSEG_CLOSEPATH:
                  return this._skipOptionalSpaces(), new window.SVGPathSegClosePath(e);case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL:
                  i = { x1: this._parseNumber(), y1: this._parseNumber(), x2: this._parseNumber(), y2: this._parseNumber(), x: this._parseNumber(), y: this._parseNumber() };return new window.SVGPathSegCurvetoCubicRel(e, i.x, i.y, i.x1, i.y1, i.x2, i.y2);case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS:
                  i = { x1: this._parseNumber(), y1: this._parseNumber(), x2: this._parseNumber(), y2: this._parseNumber(), x: this._parseNumber(), y: this._parseNumber() };return new window.SVGPathSegCurvetoCubicAbs(e, i.x, i.y, i.x1, i.y1, i.x2, i.y2);case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:
                  i = { x2: this._parseNumber(), y2: this._parseNumber(), x: this._parseNumber(), y: this._parseNumber() };return new window.SVGPathSegCurvetoCubicSmoothRel(e, i.x, i.y, i.x2, i.y2);case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:
                  i = { x2: this._parseNumber(), y2: this._parseNumber(), x: this._parseNumber(), y: this._parseNumber() };return new window.SVGPathSegCurvetoCubicSmoothAbs(e, i.x, i.y, i.x2, i.y2);case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL:
                  i = { x1: this._parseNumber(), y1: this._parseNumber(), x: this._parseNumber(), y: this._parseNumber() };return new window.SVGPathSegCurvetoQuadraticRel(e, i.x, i.y, i.x1, i.y1);case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS:
                  i = { x1: this._parseNumber(), y1: this._parseNumber(), x: this._parseNumber(), y: this._parseNumber() };return new window.SVGPathSegCurvetoQuadraticAbs(e, i.x, i.y, i.x1, i.y1);case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL:
                  return new window.SVGPathSegCurvetoQuadraticSmoothRel(e, this._parseNumber(), this._parseNumber());case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS:
                  return new window.SVGPathSegCurvetoQuadraticSmoothAbs(e, this._parseNumber(), this._parseNumber());case window.SVGPathSeg.PATHSEG_ARC_REL:
                  i = { x1: this._parseNumber(), y1: this._parseNumber(), arcAngle: this._parseNumber(), arcLarge: this._parseArcFlag(), arcSweep: this._parseArcFlag(), x: this._parseNumber(), y: this._parseNumber() };return new window.SVGPathSegArcRel(e, i.x, i.y, i.x1, i.y1, i.arcAngle, i.arcLarge, i.arcSweep);case window.SVGPathSeg.PATHSEG_ARC_ABS:
                  var i = { x1: this._parseNumber(), y1: this._parseNumber(), arcAngle: this._parseNumber(), arcLarge: this._parseArcFlag(), arcSweep: this._parseArcFlag(), x: this._parseNumber(), y: this._parseNumber() };return new window.SVGPathSegArcAbs(e, i.x, i.y, i.x1, i.y1, i.arcAngle, i.arcLarge, i.arcSweep);default:
                  throw "Unknown path seg type.";}
            };var r = new n(),
                a = new i(t);if (!a.initialCommandIsMoveTo()) return [];for (; a.hasMoreData();) {
              var o = a.parseSegment();if (!o) return [];r.appendSegment(o);
            }return r.pathSegList;
          }), M.axis = function () {}, M.axis.labels = function (t) {
            var e = this.internal;arguments.length && (Object.keys(t).forEach(function (n) {
              e.axis.setLabelText(n, t[n]);
            }), e.axis.updateLabels());
          }, M.axis.max = function (t) {
            var e = this.internal,
                n = e.config;if (!arguments.length) return { x: n.axis_x_max, y: n.axis_y_max, y2: n.axis_y2_max };"object" === (void 0 === t ? "undefined" : c(t)) ? (f(t.x) && (n.axis_x_max = t.x), f(t.y) && (n.axis_y_max = t.y), f(t.y2) && (n.axis_y2_max = t.y2)) : n.axis_y_max = n.axis_y2_max = t, e.redraw({ withUpdateOrgXDomain: !0, withUpdateXDomain: !0 });
          }, M.axis.min = function (t) {
            var e = this.internal,
                n = e.config;if (!arguments.length) return { x: n.axis_x_min, y: n.axis_y_min, y2: n.axis_y2_min };"object" === (void 0 === t ? "undefined" : c(t)) ? (f(t.x) && (n.axis_x_min = t.x), f(t.y) && (n.axis_y_min = t.y), f(t.y2) && (n.axis_y2_min = t.y2)) : n.axis_y_min = n.axis_y2_min = t, e.redraw({ withUpdateOrgXDomain: !0, withUpdateXDomain: !0 });
          }, M.axis.range = function (t) {
            if (!arguments.length) return { max: this.axis.max(), min: this.axis.min() };y(t.max) && this.axis.max(t.max), y(t.min) && this.axis.min(t.min);
          }, M.axis.showY2 = function (t) {
            var e = this.internal,
                n = e.config;n.axis_y2_show = !!t, e.axes.y2.style("visibility", n.axis_y2_show ? "visible" : "hidden"), e.redraw();
          }, M.axis.showY = function (t) {
            var e = this.internal,
                n = e.config;n.axis_y_show = !!t, e.axes.y.style("visibility", n.axis_y_show ? "visible" : "hidden"), e.redraw();
          }, M.axis.showX = function (t) {
            var e = this.internal,
                n = e.config;n.axis_x_show = !!t, e.axes.x.style("visibility", n.axis_x_show ? "visible" : "hidden"), e.redraw();
          }, M.category = function (t, e) {
            var n = this.internal,
                i = n.config;return arguments.length > 1 && (i.axis_x_categories[t] = e, n.redraw()), i.axis_x_categories[t];
          }, M.categories = function (t) {
            var e = this.internal,
                n = e.config;return arguments.length ? (n.axis_x_categories = t, e.redraw(), n.axis_x_categories) : n.axis_x_categories;
          }, M.resize = function (t) {
            var e = this.internal.config;e.size_width = t ? t.width : null, e.size_height = t ? t.height : null, this.flush();
          }, M.flush = function () {
            this.internal.updateAndRedraw({ withLegend: !0, withTransition: !1, withTransitionForTransform: !1 });
          }, M.destroy = function () {
            var t = this.internal;if (window.clearInterval(t.intervalForObserveInserted), void 0 !== t.resizeTimeout && window.clearTimeout(t.resizeTimeout), window.detachEvent) window.detachEvent("onresize", t.resizeIfElementDisplayed);else if (window.removeEventListener) window.removeEventListener("resize", t.resizeIfElementDisplayed);else {
              var e = window.onresize;e && e.add && e.remove && e.remove(t.resizeFunction);
            }return t.resizeFunction.remove(), t.selectChart.classed("c3", !1).html(""), Object.keys(t).forEach(function (e) {
              t[e] = null;
            }), null;
          }, M.color = function (t) {
            return this.internal.color(t);
          }, M.data = function (t) {
            var e = this.internal.data.targets;return void 0 === t ? e : e.filter(function (e) {
              return [].concat(t).indexOf(e.id) >= 0;
            });
          }, M.data.shown = function (t) {
            return this.internal.filterTargetsToShow(this.data(t));
          }, M.data.values = function (t) {
            var e,
                n = null;return t && (n = (e = this.data(t))[0] ? e[0].values.map(function (t) {
              return t.value;
            }) : null), n;
          }, M.data.names = function (t) {
            return this.internal.clearLegendItemTextBoxCache(), this.internal.updateDataAttributes("names", t);
          }, M.data.colors = function (t) {
            return this.internal.updateDataAttributes("colors", t);
          }, M.data.axes = function (t) {
            return this.internal.updateDataAttributes("axes", t);
          }, M.flow = function (t) {
            var e,
                n,
                i,
                r,
                a,
                o,
                s,
                u = this.internal,
                c = [],
                l = u.getMaxDataCount(),
                h = 0,
                d = 0;if (t.json) n = u.convertJsonToData(t.json, t.keys);else if (t.rows) n = u.convertRowsToData(t.rows);else {
              if (!t.columns) return;n = u.convertColumnsToData(t.columns);
            }e = u.convertDataToTargets(n, !0), u.data.targets.forEach(function (t) {
              var n,
                  i,
                  r = !1;for (n = 0; n < e.length; n++) {
                if (t.id === e[n].id) {
                  for (r = !0, t.values[t.values.length - 1] && (d = t.values[t.values.length - 1].index + 1), h = e[n].values.length, i = 0; i < h; i++) {
                    e[n].values[i].index = d + i, u.isTimeSeries() || (e[n].values[i].x = d + i);
                  }t.values = t.values.concat(e[n].values), e.splice(n, 1);break;
                }
              }r || c.push(t.id);
            }), u.data.targets.forEach(function (t) {
              var e, n;for (e = 0; e < c.length; e++) {
                if (t.id === c[e]) for (d = t.values[t.values.length - 1].index + 1, n = 0; n < h; n++) {
                  t.values.push({ id: t.id, index: d + n, x: u.isTimeSeries() ? u.getOtherTargetX(d + n) : d + n, value: null });
                }
              }
            }), u.data.targets.length && e.forEach(function (t) {
              var e,
                  n = [];for (e = u.data.targets[0].values[0].index; e < d; e++) {
                n.push({ id: t.id, index: e, x: u.isTimeSeries() ? u.getOtherTargetX(e) : e, value: null });
              }t.values.forEach(function (t) {
                t.index += d, u.isTimeSeries() || (t.x += d);
              }), t.values = n.concat(t.values);
            }), u.data.targets = u.data.targets.concat(e), u.getMaxDataCount(), a = (r = u.data.targets[0]).values[0], y(t.to) ? (h = 0, s = u.isTimeSeries() ? u.parseDate(t.to) : t.to, r.values.forEach(function (t) {
              t.x < s && h++;
            })) : y(t.length) && (h = t.length), l ? 1 === l && u.isTimeSeries() && (o = (r.values[r.values.length - 1].x - a.x) / 2, i = [new Date(+a.x - o), new Date(+a.x + o)], u.updateXDomain(null, !0, !0, !1, i)) : (o = u.isTimeSeries() ? r.values.length > 1 ? r.values[r.values.length - 1].x - a.x : a.x - u.getXDomain(u.data.targets)[0] : 1, i = [a.x - o, a.x], u.updateXDomain(null, !0, !0, !1, i)), u.updateTargets(u.data.targets), u.redraw({ flow: { index: a.index, length: h, duration: f(t.duration) ? t.duration : u.config.transition_duration, done: t.done, orgDataCount: l }, withLegend: !0, withTransition: l > 1, withTrimXDomain: !1, withUpdateXAxis: !0 });
          }, E.generateFlow = function (t) {
            var e = this,
                n = e.config,
                i = e.d3;return function () {
              var r,
                  a,
                  o,
                  s = t.targets,
                  c = t.flow,
                  l = t.drawBar,
                  h = t.drawLine,
                  d = t.drawArea,
                  f = t.cx,
                  g = t.cy,
                  p = t.xv,
                  x = t.xForText,
                  _ = t.yForText,
                  y = t.duration,
                  v = 1,
                  m = c.index,
                  S = c.length,
                  b = e.getValueOnIndex(e.data.targets[0].values, m),
                  A = e.getValueOnIndex(e.data.targets[0].values, m + S),
                  T = e.x.domain(),
                  P = c.duration || y,
                  C = c.done || function () {},
                  L = e.generateWait(),
                  M = e.xgrid || i.selectAll([]),
                  E = e.xgridLines || i.selectAll([]),
                  V = e.mainRegion || i.selectAll([]),
                  G = e.mainText || i.selectAll([]),
                  k = e.mainBar || i.selectAll([]),
                  R = e.mainLine || i.selectAll([]),
                  O = e.mainArea || i.selectAll([]),
                  I = e.mainCircle || i.selectAll([]);e.flowing = !0, e.data.targets.forEach(function (t) {
                t.values.splice(0, S);
              }), o = e.updateXDomain(s, !0, !0), e.updateXGrid && e.updateXGrid(!0), c.orgDataCount ? r = 1 === c.orgDataCount || (b && b.x) === (A && A.x) ? e.x(T[0]) - e.x(o[0]) : e.isTimeSeries() ? e.x(T[0]) - e.x(o[0]) : e.x(b.x) - e.x(A.x) : 1 !== e.data.targets[0].values.length ? r = e.x(T[0]) - e.x(o[0]) : e.isTimeSeries() ? (b = e.getValueOnIndex(e.data.targets[0].values, 0), A = e.getValueOnIndex(e.data.targets[0].values, e.data.targets[0].values.length - 1), r = e.x(b.x) - e.x(A.x)) : r = w(o) / 2, v = w(T) / w(o), a = "translate(" + r + ",0) scale(" + v + ",1)", e.hideXGridFocus(), i.transition().ease("linear").duration(P).each(function () {
                L.add(e.axes.x.transition().call(e.xAxis)), L.add(k.transition().attr("transform", a)), L.add(R.transition().attr("transform", a)), L.add(O.transition().attr("transform", a)), L.add(I.transition().attr("transform", a)), L.add(G.transition().attr("transform", a)), L.add(V.filter(e.isRegionOnX).transition().attr("transform", a)), L.add(M.transition().attr("transform", a)), L.add(E.transition().attr("transform", a));
              }).call(L, function () {
                var t,
                    i = [],
                    r = [],
                    a = [];if (S) {
                  for (t = 0; t < S; t++) {
                    i.push("." + u.shape + "-" + (m + t)), r.push("." + u.text + "-" + (m + t)), a.push("." + u.eventRect + "-" + (m + t));
                  }e.svg.selectAll("." + u.shapes).selectAll(i).remove(), e.svg.selectAll("." + u.texts).selectAll(r).remove(), e.svg.selectAll("." + u.eventRects).selectAll(a).remove(), e.svg.select("." + u.xgrid).remove();
                }M.attr("transform", null).attr(e.xgridAttr), E.attr("transform", null), E.select("line").attr("x1", n.axis_rotated ? 0 : p).attr("x2", n.axis_rotated ? e.width : p), E.select("text").attr("x", n.axis_rotated ? e.width : 0).attr("y", p), k.attr("transform", null).attr("d", l), R.attr("transform", null).attr("d", h), O.attr("transform", null).attr("d", d), I.attr("transform", null).attr("cx", f).attr("cy", g), G.attr("transform", null).attr("x", x).attr("y", _).style("fill-opacity", e.opacityForText.bind(e)), V.attr("transform", null), V.select("rect").filter(e.isRegionOnX).attr("x", e.regionX.bind(e)).attr("width", e.regionWidth.bind(e)), n.interaction_enabled && e.redrawEventRect(), C(), e.flowing = !1;
              });
            };
          }, M.focus = function (t) {
            var e,
                n = this.internal;t = n.mapToTargetIds(t), e = n.svg.selectAll(n.selectorTargets(t.filter(n.isTargetToShow, n))), this.revert(), this.defocus(), e.classed(u.focused, !0).classed(u.defocused, !1), n.hasArcType() && n.expandArc(t), n.toggleFocusLegend(t, !0), n.focusedTargetIds = t, n.defocusedTargetIds = n.defocusedTargetIds.filter(function (e) {
              return t.indexOf(e) < 0;
            });
          }, M.defocus = function (t) {
            var e = this.internal;t = e.mapToTargetIds(t), e.svg.selectAll(e.selectorTargets(t.filter(e.isTargetToShow, e))).classed(u.focused, !1).classed(u.defocused, !0), e.hasArcType() && e.unexpandArc(t), e.toggleFocusLegend(t, !1), e.focusedTargetIds = e.focusedTargetIds.filter(function (e) {
              return t.indexOf(e) < 0;
            }), e.defocusedTargetIds = t;
          }, M.revert = function (t) {
            var e = this.internal;t = e.mapToTargetIds(t), e.svg.selectAll(e.selectorTargets(t)).classed(u.focused, !1).classed(u.defocused, !1), e.hasArcType() && e.unexpandArc(t), e.config.legend_show && (e.showLegend(t.filter(e.isLegendToShow.bind(e))), e.legend.selectAll(e.selectorLegends(t)).filter(function () {
              return e.d3.select(this).classed(u.legendItemFocused);
            }).classed(u.legendItemFocused, !1)), e.focusedTargetIds = [], e.defocusedTargetIds = [];
          }, M.xgrids = function (t) {
            var e = this.internal,
                n = e.config;return t ? (n.grid_x_lines = t, e.redrawWithoutRescale(), n.grid_x_lines) : n.grid_x_lines;
          }, M.xgrids.add = function (t) {
            var e = this.internal;return this.xgrids(e.config.grid_x_lines.concat(t || []));
          }, M.xgrids.remove = function (t) {
            this.internal.removeGridLines(t, !0);
          }, M.ygrids = function (t) {
            var e = this.internal,
                n = e.config;return t ? (n.grid_y_lines = t, e.redrawWithoutRescale(), n.grid_y_lines) : n.grid_y_lines;
          }, M.ygrids.add = function (t) {
            var e = this.internal;return this.ygrids(e.config.grid_y_lines.concat(t || []));
          }, M.ygrids.remove = function (t) {
            this.internal.removeGridLines(t, !1);
          }, M.groups = function (t) {
            var e = this.internal,
                n = e.config;return _(t) ? n.data_groups : (n.data_groups = t, e.redraw(), n.data_groups);
          }, M.legend = function () {}, M.legend.show = function (t) {
            var e = this.internal;e.showLegend(e.mapToTargetIds(t)), e.updateAndRedraw({ withLegend: !0 });
          }, M.legend.hide = function (t) {
            var e = this.internal;e.hideLegend(e.mapToTargetIds(t)), e.updateAndRedraw({ withLegend: !0 });
          }, M.load = function (t) {
            var e = this.internal,
                n = e.config;t.xs && e.addXs(t.xs), "names" in t && M.data.names.bind(this)(t.names), "classes" in t && Object.keys(t.classes).forEach(function (e) {
              n.data_classes[e] = t.classes[e];
            }), "categories" in t && e.isCategorized() && (n.axis_x_categories = t.categories), "axes" in t && Object.keys(t.axes).forEach(function (e) {
              n.data_axes[e] = t.axes[e];
            }), "colors" in t && Object.keys(t.colors).forEach(function (e) {
              n.data_colors[e] = t.colors[e];
            }), "cacheIds" in t && e.hasCaches(t.cacheIds) ? e.load(e.getCaches(t.cacheIds), t.done) : "unload" in t ? e.unload(e.mapToTargetIds("boolean" == typeof t.unload && t.unload ? null : t.unload), function () {
              e.loadFromArgs(t);
            }) : e.loadFromArgs(t);
          }, M.unload = function (t) {
            var e = this.internal;(t = t || {}) instanceof Array ? t = { ids: t } : "string" == typeof t && (t = { ids: [t] }), e.unload(e.mapToTargetIds(t.ids), function () {
              e.redraw({ withUpdateOrgXDomain: !0, withUpdateXDomain: !0, withLegend: !0 }), t.done && t.done();
            });
          }, M.regions = function (t) {
            var e = this.internal,
                n = e.config;return t ? (n.regions = t, e.redrawWithoutRescale(), n.regions) : n.regions;
          }, M.regions.add = function (t) {
            var e = this.internal,
                n = e.config;return t ? (n.regions = n.regions.concat(t), e.redrawWithoutRescale(), n.regions) : n.regions;
          }, M.regions.remove = function (t) {
            var e,
                n,
                i,
                r = this.internal,
                a = r.config;return t = t || {}, e = r.getOption(t, "duration", a.transition_duration), n = r.getOption(t, "classes", [u.region]), i = r.main.select("." + u.regions).selectAll(n.map(function (t) {
              return "." + t;
            })), (e ? i.transition().duration(e) : i).style("opacity", 0).remove(), a.regions = a.regions.filter(function (t) {
              var e = !1;return !t.class || (t.class.split(" ").forEach(function (t) {
                n.indexOf(t) >= 0 && (e = !0);
              }), !e);
            }), a.regions;
          }, M.selected = function (t) {
            var e = this.internal,
                n = e.d3;return n.merge(e.main.selectAll("." + u.shapes + e.getTargetSelectorSuffix(t)).selectAll("." + u.shape).filter(function () {
              return n.select(this).classed(u.SELECTED);
            }).map(function (t) {
              return t.map(function (t) {
                var e = t.__data__;return e.data ? e.data : e;
              });
            }));
          }, M.select = function (t, e, n) {
            var i = this.internal,
                r = i.d3,
                a = i.config;a.data_selection_enabled && i.main.selectAll("." + u.shapes).selectAll("." + u.shape).each(function (o, s) {
              var c = r.select(this),
                  l = o.data ? o.data.id : o.id,
                  h = i.getToggle(this, o).bind(i),
                  d = a.data_selection_grouped || !t || t.indexOf(l) >= 0,
                  f = !e || e.indexOf(s) >= 0,
                  g = c.classed(u.SELECTED);c.classed(u.line) || c.classed(u.area) || (d && f ? a.data_selection_isselectable(o) && !g && h(!0, c.classed(u.SELECTED, !0), o, s) : y(n) && n && g && h(!1, c.classed(u.SELECTED, !1), o, s));
            });
          }, M.unselect = function (t, e) {
            var n = this.internal,
                i = n.d3,
                r = n.config;r.data_selection_enabled && n.main.selectAll("." + u.shapes).selectAll("." + u.shape).each(function (a, o) {
              var s = i.select(this),
                  c = a.data ? a.data.id : a.id,
                  l = n.getToggle(this, a).bind(n),
                  h = r.data_selection_grouped || !t || t.indexOf(c) >= 0,
                  d = !e || e.indexOf(o) >= 0,
                  f = s.classed(u.SELECTED);s.classed(u.line) || s.classed(u.area) || h && d && r.data_selection_isselectable(a) && f && l(!1, s.classed(u.SELECTED, !1), a, o);
            });
          }, M.show = function (t, e) {
            var n,
                i = this.internal;t = i.mapToTargetIds(t), e = e || {}, i.removeHiddenTargetIds(t), (n = i.svg.selectAll(i.selectorTargets(t))).transition().style("opacity", 1, "important").call(i.endall, function () {
              n.style("opacity", null).style("opacity", 1);
            }), e.withLegend && i.showLegend(t), i.redraw({ withUpdateOrgXDomain: !0, withUpdateXDomain: !0, withLegend: !0 });
          }, M.hide = function (t, e) {
            var n,
                i = this.internal;t = i.mapToTargetIds(t), e = e || {}, i.addHiddenTargetIds(t), (n = i.svg.selectAll(i.selectorTargets(t))).transition().style("opacity", 0, "important").call(i.endall, function () {
              n.style("opacity", null).style("opacity", 0);
            }), e.withLegend && i.hideLegend(t), i.redraw({ withUpdateOrgXDomain: !0, withUpdateXDomain: !0, withLegend: !0 });
          }, M.toggle = function (t, e) {
            var n = this,
                i = this.internal;i.mapToTargetIds(t).forEach(function (t) {
              i.isTargetToShow(t) ? n.hide(t, e) : n.show(t, e);
            });
          }, M.tooltip = function () {}, M.tooltip.show = function (t) {
            var e,
                n,
                i = this.internal;t.mouse && (n = t.mouse), t.data ? i.isMultipleX() ? (n = [i.x(t.data.x), i.getYScale(t.data.id)(t.data.value)], e = null) : e = f(t.data.index) ? t.data.index : i.getIndexByX(t.data.x) : void 0 !== t.x ? e = i.getIndexByX(t.x) : void 0 !== t.index && (e = t.index), i.dispatchEvent("mouseover", e, n), i.dispatchEvent("mousemove", e, n), i.config.tooltip_onshow.call(i, t.data);
          }, M.tooltip.hide = function () {
            this.internal.dispatchEvent("mouseout", 0), this.internal.config.tooltip_onhide.call(this);
          }, M.transform = function (t, e) {
            var n = this.internal,
                i = ["pie", "donut"].indexOf(t) >= 0 ? { withTransform: !0 } : null;n.transformTo(e, t, i);
          }, E.transformTo = function (t, e, n) {
            var i = this,
                r = !i.hasArcType(),
                a = n || { withTransitionForAxis: r };a.withTransitionForTransform = !1, i.transiting = !1, i.setTargetType(t, e), i.updateTargets(i.data.targets), i.updateAndRedraw(a);
          }, M.x = function (t) {
            var e = this.internal;return arguments.length && (e.updateTargetX(e.data.targets, t), e.redraw({ withUpdateOrgXDomain: !0, withUpdateXDomain: !0 })), e.data.xs;
          }, M.xs = function (t) {
            var e = this.internal;return arguments.length && (e.updateTargetXs(e.data.targets, t), e.redraw({ withUpdateOrgXDomain: !0, withUpdateXDomain: !0 })), e.data.xs;
          }, M.zoom = function (t) {
            var e = this.internal;return t && (e.isTimeSeries() && (t = t.map(function (t) {
              return e.parseDate(t);
            })), e.brush.extent(t), e.redraw({ withUpdateXDomain: !0, withY: e.config.zoom_rescale }), e.config.zoom_onzoom.call(this, e.x.orgDomain())), e.brush.extent();
          }, M.zoom.enable = function (t) {
            var e = this.internal;e.config.zoom_enabled = t, e.updateAndRedraw();
          }, M.unzoom = function () {
            var t = this.internal;t.brush.clear().update(), t.redraw({ withUpdateXDomain: !0 });
          }, M.zoom.max = function (t) {
            var e = this.internal,
                n = e.config,
                i = e.d3;if (0 !== t && !t) return n.zoom_x_max;n.zoom_x_max = i.max([e.orgXDomain[1], t]);
          }, M.zoom.min = function (t) {
            var e = this.internal,
                n = e.config,
                i = e.d3;if (0 !== t && !t) return n.zoom_x_min;n.zoom_x_min = i.min([e.orgXDomain[0], t]);
          }, M.zoom.range = function (t) {
            if (!arguments.length) return { max: this.domain.max(), min: this.domain.min() };y(t.max) && this.domain.max(t.max), y(t.min) && this.domain.min(t.min);
          }, E.initPie = function () {
            var t = this,
                e = t.d3;t.pie = e.layout.pie().value(function (t) {
              return t.values.reduce(function (t, e) {
                return t + e.value;
              }, 0);
            }), t.pie.sort(t.getOrderFunction() || null);
          }, E.updateRadius = function () {
            var t = this,
                e = t.config,
                n = e.gauge_width || e.donut_width,
                i = t.filterTargetsToShow(t.data.targets).length * t.config.gauge_arcs_minWidth;t.radiusExpanded = Math.min(t.arcWidth, t.arcHeight) / 2 * (t.hasType("gauge") ? .85 : 1), t.radius = .95 * t.radiusExpanded, t.innerRadiusRatio = n ? (t.radius - n) / t.radius : .6, t.innerRadius = t.hasType("donut") || t.hasType("gauge") ? t.radius * t.innerRadiusRatio : 0, t.gaugeArcWidth = n || (i <= t.radius - t.innerRadius ? t.radius - t.innerRadius : i <= t.radius ? i : t.radius);
          }, E.updateArc = function () {
            var t = this;t.svgArc = t.getSvgArc(), t.svgArcExpanded = t.getSvgArcExpanded(), t.svgArcExpandedSub = t.getSvgArcExpanded(.98);
          }, E.updateAngle = function (t) {
            var e,
                n,
                i,
                r,
                a = this,
                o = a.config,
                s = !1,
                u = 0;return o ? (a.pie(a.filterTargetsToShow(a.data.targets)).forEach(function (e) {
              s || e.data.id !== t.data.id || (s = !0, (t = e).index = u), u++;
            }), isNaN(t.startAngle) && (t.startAngle = 0), isNaN(t.endAngle) && (t.endAngle = t.startAngle), a.isGaugeType(t.data) && (e = o.gauge_min, n = o.gauge_max, i = Math.PI * (o.gauge_fullCircle ? 2 : 1) / (n - e), r = t.value < e ? 0 : t.value < n ? t.value - e : n - e, t.startAngle = o.gauge_startingAngle, t.endAngle = t.startAngle + i * r), s ? t : null) : null;
          }, E.getSvgArc = function () {
            var t = this,
                e = t.hasType("gauge"),
                n = t.gaugeArcWidth / t.filterTargetsToShow(t.data.targets).length,
                i = t.d3.svg.arc().outerRadius(function (i) {
              return e ? t.radius - n * i.index : t.radius;
            }).innerRadius(function (i) {
              return e ? t.radius - n * (i.index + 1) : t.innerRadius;
            }),
                r = function r(e, n) {
              var r;return n ? i(e) : (r = t.updateAngle(e)) ? i(r) : "M 0 0";
            };return r.centroid = i.centroid, r;
          }, E.getSvgArcExpanded = function (t) {
            t = t || 1;var e = this,
                n = e.hasType("gauge"),
                i = e.gaugeArcWidth / e.filterTargetsToShow(e.data.targets).length,
                r = Math.min(e.radiusExpanded * t - e.radius, .8 * i - 100 * (1 - t)),
                a = e.d3.svg.arc().outerRadius(function (a) {
              return n ? e.radius - i * a.index + r : e.radiusExpanded * t;
            }).innerRadius(function (t) {
              return n ? e.radius - i * (t.index + 1) : e.innerRadius;
            });return function (t) {
              var n = e.updateAngle(t);return n ? a(n) : "M 0 0";
            };
          }, E.getArc = function (t, e, n) {
            return n || this.isArcType(t.data) ? this.svgArc(t, e) : "M 0 0";
          }, E.transformForArcLabel = function (t) {
            var e,
                n,
                i,
                r,
                a,
                o = this,
                s = o.config,
                u = o.updateAngle(t),
                c = "",
                l = o.hasType("gauge");if (u && !l) e = this.svgArc.centroid(u), n = isNaN(e[0]) ? 0 : e[0], i = isNaN(e[1]) ? 0 : e[1], r = Math.sqrt(n * n + i * i), c = "translate(" + n * (a = o.hasType("donut") && s.donut_label_ratio ? g(s.donut_label_ratio) ? s.donut_label_ratio(t, o.radius, r) : s.donut_label_ratio : o.hasType("pie") && s.pie_label_ratio ? g(s.pie_label_ratio) ? s.pie_label_ratio(t, o.radius, r) : s.pie_label_ratio : o.radius && r ? (36 / o.radius > .375 ? 1.175 - 36 / o.radius : .8) * o.radius / r : 0) + "," + i * a + ")";else if (u && l && o.filterTargetsToShow(o.data.targets).length > 1) {
              var h = Math.sin(u.endAngle - Math.PI / 2);c = "translate(" + (n = Math.cos(u.endAngle - Math.PI / 2) * (o.radiusExpanded + 25)) + "," + (i = h * (o.radiusExpanded + 15 - Math.abs(10 * h)) + 3) + ")";
            }return c;
          }, E.getArcRatio = function (t) {
            var e = this,
                n = e.config,
                i = Math.PI * (e.hasType("gauge") && !n.gauge_fullCircle ? 1 : 2);return t ? (t.endAngle - t.startAngle) / i : null;
          }, E.convertToArcData = function (t) {
            return this.addName({ id: t.data.id, value: t.value, ratio: this.getArcRatio(t), index: t.index });
          }, E.textForArcLabel = function (t) {
            var e,
                n,
                i,
                r,
                a,
                o = this;return o.shouldShowArcLabel() ? (e = o.updateAngle(t), n = e ? e.value : null, i = o.getArcRatio(e), r = t.data.id, o.hasType("gauge") || o.meetsArcLabelThreshold(i) ? (a = o.getArcLabelFormat()) ? a(n, i, r) : o.defaultArcValueFormat(n, i) : "") : "";
          }, E.textForGaugeMinMax = function (t, e) {
            var n = this.getGaugeLabelExtents();return n ? n(t, e) : t;
          }, E.expandArc = function (t) {
            var e,
                n = this;n.transiting ? e = window.setInterval(function () {
              n.transiting || (window.clearInterval(e), n.legend.selectAll(".c3-legend-item-focused").size() > 0 && n.expandArc(t));
            }, 10) : (t = n.mapToTargetIds(t), n.svg.selectAll(n.selectorTargets(t, "." + u.chartArc)).each(function (t) {
              n.shouldExpand(t.data.id) && n.d3.select(this).selectAll("path").transition().duration(n.expandDuration(t.data.id)).attr("d", n.svgArcExpanded).transition().duration(2 * n.expandDuration(t.data.id)).attr("d", n.svgArcExpandedSub).each(function (t) {
                n.isDonutType(t.data);
              });
            }));
          }, E.unexpandArc = function (t) {
            var e = this;e.transiting || (t = e.mapToTargetIds(t), e.svg.selectAll(e.selectorTargets(t, "." + u.chartArc)).selectAll("path").transition().duration(function (t) {
              return e.expandDuration(t.data.id);
            }).attr("d", e.svgArc), e.svg.selectAll("." + u.arc));
          }, E.expandDuration = function (t) {
            var e = this,
                n = e.config;return e.isDonutType(t) ? n.donut_expand_duration : e.isGaugeType(t) ? n.gauge_expand_duration : e.isPieType(t) ? n.pie_expand_duration : 50;
          }, E.shouldExpand = function (t) {
            var e = this,
                n = e.config;return e.isDonutType(t) && n.donut_expand || e.isGaugeType(t) && n.gauge_expand || e.isPieType(t) && n.pie_expand;
          }, E.shouldShowArcLabel = function () {
            var t = this,
                e = t.config,
                n = !0;return t.hasType("donut") ? n = e.donut_label_show : t.hasType("pie") && (n = e.pie_label_show), n;
          }, E.meetsArcLabelThreshold = function (t) {
            var e = this,
                n = e.config;return t >= (e.hasType("donut") ? n.donut_label_threshold : n.pie_label_threshold);
          }, E.getArcLabelFormat = function () {
            var t = this,
                e = t.config,
                n = e.pie_label_format;return t.hasType("gauge") ? n = e.gauge_label_format : t.hasType("donut") && (n = e.donut_label_format), n;
          }, E.getGaugeLabelExtents = function () {
            return this.config.gauge_label_extents;
          }, E.getArcTitle = function () {
            var t = this;return t.hasType("donut") ? t.config.donut_title : "";
          }, E.updateTargetsForArc = function (t) {
            var e,
                n = this,
                i = n.main,
                r = n.classChartArc.bind(n),
                a = n.classArcs.bind(n),
                o = n.classFocus.bind(n);(e = i.select("." + u.chartArcs).selectAll("." + u.chartArc).data(n.pie(t)).attr("class", function (t) {
              return r(t) + o(t.data);
            }).enter().append("g").attr("class", r)).append("g").attr("class", a), e.append("text").attr("dy", n.hasType("gauge") ? "-.1em" : ".35em").style("opacity", 0).style("text-anchor", "middle").style("pointer-events", "none");
          }, E.initArc = function () {
            var t = this;t.arcs = t.main.select("." + u.chart).append("g").attr("class", u.chartArcs).attr("transform", t.getTranslate("arc")), t.arcs.append("text").attr("class", u.chartArcsTitle).style("text-anchor", "middle").text(t.getArcTitle());
          }, E.redrawArc = function (t, e, n) {
            var i,
                r,
                a,
                o = this,
                s = o.d3,
                c = o.config,
                l = o.main,
                h = o.hasType("gauge");if ((i = l.selectAll("." + u.arcs).selectAll("." + u.arc).data(o.arcData.bind(o))).enter().append("path").attr("class", o.classArc.bind(o)).style("fill", function (t) {
              return o.color(t.data);
            }).style("cursor", function (t) {
              return c.interaction_enabled && c.data_selection_isselectable(t) ? "pointer" : null;
            }).each(function (t) {
              o.isGaugeType(t.data) && (t.startAngle = t.endAngle = c.gauge_startingAngle), this._current = t;
            }), h && ((a = l.selectAll("." + u.arcs).selectAll("." + u.arcLabelLine).data(o.arcData.bind(o))).enter().append("rect").attr("class", function (t) {
              return u.arcLabelLine + " " + u.target + " " + u.target + "-" + t.data.id;
            }), 1 === o.filterTargetsToShow(o.data.targets).length ? a.style("display", "none") : a.style("fill", function (t) {
              return c.color_pattern.length > 0 ? o.levelColor(t.data.values[0].value) : o.color(t.data);
            }).style("display", c.gauge_labelLine_show ? "" : "none").each(function (t) {
              var e = 0,
                  n = 0,
                  i = 0,
                  r = "";if (o.hiddenTargetIds.indexOf(t.data.id) < 0) {
                var a = o.updateAngle(t),
                    u = o.gaugeArcWidth / o.filterTargetsToShow(o.data.targets).length * (a.index + 1),
                    c = a.endAngle - Math.PI / 2,
                    l = o.radius - u,
                    h = c - (0 === l ? 0 : 1 / l);e = o.radiusExpanded - o.radius + u, n = Math.cos(h) * l, i = Math.sin(h) * l, r = "rotate(" + 180 * c / Math.PI + ", " + n + ", " + i + ")";
              }s.select(this).attr({ x: n, y: i, width: e, height: 2, transform: r }).style("stroke-dasharray", "0, " + (e + 2) + ", 0");
            })), i.attr("transform", function (t) {
              return !o.isGaugeType(t.data) && n ? "scale(0)" : "";
            }).on("mouseover", c.interaction_enabled ? function (t) {
              var e, n;o.transiting || (e = o.updateAngle(t)) && (n = o.convertToArcData(e), o.expandArc(e.data.id), o.api.focus(e.data.id), o.toggleFocusLegend(e.data.id, !0), o.config.data_onmouseover(n, this));
            } : null).on("mousemove", c.interaction_enabled ? function (t) {
              var e,
                  n = o.updateAngle(t);n && (e = [o.convertToArcData(n)], o.showTooltip(e, this));
            } : null).on("mouseout", c.interaction_enabled ? function (t) {
              var e, n;o.transiting || (e = o.updateAngle(t)) && (n = o.convertToArcData(e), o.unexpandArc(e.data.id), o.api.revert(), o.revertLegend(), o.hideTooltip(), o.config.data_onmouseout(n, this));
            } : null).on("click", c.interaction_enabled ? function (t, e) {
              var n,
                  i = o.updateAngle(t);i && (n = o.convertToArcData(i), o.toggleShape && o.toggleShape(this, n, e), o.config.data_onclick.call(o.api, n, this));
            } : null).each(function () {
              o.transiting = !0;
            }).transition().duration(t).attrTween("d", function (t) {
              var e,
                  n = o.updateAngle(t);return n ? (isNaN(this._current.startAngle) && (this._current.startAngle = 0), isNaN(this._current.endAngle) && (this._current.endAngle = this._current.startAngle), e = s.interpolate(this._current, n), this._current = e(0), function (n) {
                var i = e(n);return i.data = t.data, o.getArc(i, !0);
              }) : function () {
                return "M 0 0";
              };
            }).attr("transform", n ? "scale(1)" : "").style("fill", function (t) {
              return o.levelColor ? o.levelColor(t.data.values[0].value) : o.color(t.data.id);
            }).call(o.endall, function () {
              o.transiting = !1;
            }), i.exit().transition().duration(e).style("opacity", 0).remove(), l.selectAll("." + u.chartArc).select("text").style("opacity", 0).attr("class", function (t) {
              return o.isGaugeType(t.data) ? u.gaugeValue : "";
            }).text(o.textForArcLabel.bind(o)).attr("transform", o.transformForArcLabel.bind(o)).style("font-size", function (t) {
              return o.isGaugeType(t.data) && 1 === o.filterTargetsToShow(o.data.targets).length ? Math.round(o.radius / 5) + "px" : "";
            }).transition().duration(t).style("opacity", function (t) {
              return o.isTargetToShow(t.data.id) && o.isArcType(t.data) ? 1 : 0;
            }), l.select("." + u.chartArcsTitle).style("opacity", o.hasType("donut") || h ? 1 : 0), h) {
              var d = 0;(r = o.arcs.select("g." + u.chartArcsBackground).selectAll("path." + u.chartArcsBackground).data(o.data.targets)).enter().append("path"), r.attr("class", function (t, e) {
                return u.chartArcsBackground + " " + u.chartArcsBackground + "-" + e;
              }).attr("d", function (t) {
                if (o.hiddenTargetIds.indexOf(t.id) >= 0) return "M 0 0";var e = { data: [{ value: c.gauge_max }], startAngle: c.gauge_startingAngle, endAngle: -1 * c.gauge_startingAngle * (c.gauge_fullCircle ? Math.PI : 1), index: d++ };return o.getArc(e, !0, !0);
              }), r.exit().remove(), o.arcs.select("." + u.chartArcsGaugeUnit).attr("dy", ".75em").text(c.gauge_label_show ? c.gauge_units : ""), o.arcs.select("." + u.chartArcsGaugeMin).attr("dx", -1 * (o.innerRadius + (o.radius - o.innerRadius) / (c.gauge_fullCircle ? 1 : 2)) + "px").attr("dy", "1.2em").text(c.gauge_label_show ? o.textForGaugeMinMax(c.gauge_min, !1) : ""), o.arcs.select("." + u.chartArcsGaugeMax).attr("dx", o.innerRadius + (o.radius - o.innerRadius) / (c.gauge_fullCircle ? 1 : 2) + "px").attr("dy", "1.2em").text(c.gauge_label_show ? o.textForGaugeMinMax(c.gauge_max, !0) : "");
            }
          }, E.initGauge = function () {
            var t = this.arcs;this.hasType("gauge") && (t.append("g").attr("class", u.chartArcsBackground), t.append("text").attr("class", u.chartArcsGaugeUnit).style("text-anchor", "middle").style("pointer-events", "none"), t.append("text").attr("class", u.chartArcsGaugeMin).style("text-anchor", "middle").style("pointer-events", "none"), t.append("text").attr("class", u.chartArcsGaugeMax).style("text-anchor", "middle").style("pointer-events", "none"));
          }, E.getGaugeLabelHeight = function () {
            return this.config.gauge_label_show ? 20 : 0;
          }, E.hasCaches = function (t) {
            for (var e = 0; e < t.length; e++) {
              if (!(t[e] in this.cache)) return !1;
            }return !0;
          }, E.addCache = function (t, e) {
            this.cache[t] = this.cloneTarget(e);
          }, E.getCaches = function (t) {
            var e,
                n = [];for (e = 0; e < t.length; e++) {
              t[e] in this.cache && n.push(this.cloneTarget(this.cache[t[e]]));
            }return n;
          }, E.categoryName = function (t) {
            var e = this.config;return t < e.axis_x_categories.length ? e.axis_x_categories[t] : t;
          }, E.generateClass = function (t, e) {
            return " " + t + " " + t + this.getTargetSelectorSuffix(e);
          }, E.classText = function (t) {
            return this.generateClass(u.text, t.index);
          }, E.classTexts = function (t) {
            return this.generateClass(u.texts, t.id);
          }, E.classShape = function (t) {
            return this.generateClass(u.shape, t.index);
          }, E.classShapes = function (t) {
            return this.generateClass(u.shapes, t.id);
          }, E.classLine = function (t) {
            return this.classShape(t) + this.generateClass(u.line, t.id);
          }, E.classLines = function (t) {
            return this.classShapes(t) + this.generateClass(u.lines, t.id);
          }, E.classCircle = function (t) {
            return this.classShape(t) + this.generateClass(u.circle, t.index);
          }, E.classCircles = function (t) {
            return this.classShapes(t) + this.generateClass(u.circles, t.id);
          }, E.classBar = function (t) {
            return this.classShape(t) + this.generateClass(u.bar, t.index);
          }, E.classBars = function (t) {
            return this.classShapes(t) + this.generateClass(u.bars, t.id);
          }, E.classArc = function (t) {
            return this.classShape(t.data) + this.generateClass(u.arc, t.data.id);
          }, E.classArcs = function (t) {
            return this.classShapes(t.data) + this.generateClass(u.arcs, t.data.id);
          }, E.classArea = function (t) {
            return this.classShape(t) + this.generateClass(u.area, t.id);
          }, E.classAreas = function (t) {
            return this.classShapes(t) + this.generateClass(u.areas, t.id);
          }, E.classRegion = function (t, e) {
            return this.generateClass(u.region, e) + " " + ("class" in t ? t.class : "");
          }, E.classEvent = function (t) {
            return this.generateClass(u.eventRect, t.index);
          }, E.classTarget = function (t) {
            var e = this,
                n = e.config.data_classes[t],
                i = "";return n && (i = " " + u.target + "-" + n), e.generateClass(u.target, t) + i;
          }, E.classFocus = function (t) {
            return this.classFocused(t) + this.classDefocused(t);
          }, E.classFocused = function (t) {
            return " " + (this.focusedTargetIds.indexOf(t.id) >= 0 ? u.focused : "");
          }, E.classDefocused = function (t) {
            return " " + (this.defocusedTargetIds.indexOf(t.id) >= 0 ? u.defocused : "");
          }, E.classChartText = function (t) {
            return u.chartText + this.classTarget(t.id);
          }, E.classChartLine = function (t) {
            return u.chartLine + this.classTarget(t.id);
          }, E.classChartBar = function (t) {
            return u.chartBar + this.classTarget(t.id);
          }, E.classChartArc = function (t) {
            return u.chartArc + this.classTarget(t.data.id);
          }, E.getTargetSelectorSuffix = function (t) {
            return t || 0 === t ? ("-" + t).replace(/[\s?!@#$%^&*()_=+,.<>'":;\[\]\/|~`{}\\]/g, "-") : "";
          }, E.selectorTarget = function (t, e) {
            return (e || "") + "." + u.target + this.getTargetSelectorSuffix(t);
          }, E.selectorTargets = function (t, e) {
            var n = this;return (t = t || []).length ? t.map(function (t) {
              return n.selectorTarget(t, e);
            }) : null;
          }, E.selectorLegend = function (t) {
            return "." + u.legendItem + this.getTargetSelectorSuffix(t);
          }, E.selectorLegends = function (t) {
            var e = this;return t && t.length ? t.map(function (t) {
              return e.selectorLegend(t);
            }) : null;
          }, E.getClipPath = function (t) {
            return "url(" + (window.navigator.appVersion.toLowerCase().indexOf("msie 9.") >= 0 ? "" : document.URL.split("#")[0]) + "#" + t + ")";
          }, E.appendClip = function (t, e) {
            return t.append("clipPath").attr("id", e).append("rect");
          }, E.getAxisClipX = function (t) {
            var e = Math.max(30, this.margin.left);return t ? -(1 + e) : -(e - 1);
          }, E.getAxisClipY = function (t) {
            return t ? -20 : -this.margin.top;
          }, E.getXAxisClipX = function () {
            var t = this;return t.getAxisClipX(!t.config.axis_rotated);
          }, E.getXAxisClipY = function () {
            var t = this;return t.getAxisClipY(!t.config.axis_rotated);
          }, E.getYAxisClipX = function () {
            var t = this;return t.config.axis_y_inner ? -1 : t.getAxisClipX(t.config.axis_rotated);
          }, E.getYAxisClipY = function () {
            var t = this;return t.getAxisClipY(t.config.axis_rotated);
          }, E.getAxisClipWidth = function (t) {
            var e = this,
                n = Math.max(30, e.margin.left),
                i = Math.max(30, e.margin.right);return t ? e.width + 2 + n + i : e.margin.left + 20;
          }, E.getAxisClipHeight = function (t) {
            return (t ? this.margin.bottom : this.margin.top + this.height) + 20;
          }, E.getXAxisClipWidth = function () {
            var t = this;return t.getAxisClipWidth(!t.config.axis_rotated);
          }, E.getXAxisClipHeight = function () {
            var t = this;return t.getAxisClipHeight(!t.config.axis_rotated);
          }, E.getYAxisClipWidth = function () {
            var t = this;return t.getAxisClipWidth(t.config.axis_rotated) + (t.config.axis_y_inner ? 20 : 0);
          }, E.getYAxisClipHeight = function () {
            var t = this;return t.getAxisClipHeight(t.config.axis_rotated);
          }, E.generateColor = function () {
            var t = this,
                e = t.config,
                n = t.d3,
                i = e.data_colors,
                r = b(e.color_pattern) ? e.color_pattern : n.scale.category10().range(),
                a = e.data_color,
                o = [];return function (t) {
              var e,
                  n = t.id || t.data && t.data.id || t;return i[n] instanceof Function ? e = i[n](t) : i[n] ? e = i[n] : (o.indexOf(n) < 0 && o.push(n), e = r[o.indexOf(n) % r.length], i[n] = e), a instanceof Function ? a(e, t) : e;
            };
          }, E.generateLevelColor = function () {
            var t = this.config,
                e = t.color_pattern,
                n = t.color_threshold,
                i = "value" === n.unit,
                r = n.values && n.values.length ? n.values : [],
                a = n.max || 100;return b(t.color_threshold) ? function (t) {
              var n,
                  o = e[e.length - 1];for (n = 0; n < r.length; n++) {
                if ((i ? t : 100 * t / a) < r[n]) {
                  o = e[n];break;
                }
              }return o;
            } : null;
          }, E.getDefaultConfig = function () {
            var t = { bindto: "#chart", svg_classname: void 0, size_width: void 0, size_height: void 0, padding_left: void 0, padding_right: void 0, padding_top: void 0, padding_bottom: void 0, resize_auto: !0, zoom_enabled: !1, zoom_extent: void 0, zoom_privileged: !1, zoom_rescale: !1, zoom_onzoom: function zoom_onzoom() {}, zoom_onzoomstart: function zoom_onzoomstart() {}, zoom_onzoomend: function zoom_onzoomend() {}, zoom_x_min: void 0, zoom_x_max: void 0, interaction_brighten: !0, interaction_enabled: !0, onmouseover: function onmouseover() {}, onmouseout: function onmouseout() {}, onresize: function onresize() {}, onresized: function onresized() {}, oninit: function oninit() {}, onrendered: function onrendered() {}, transition_duration: 350, data_x: void 0, data_xs: {}, data_xFormat: "%Y-%m-%d", data_xLocaltime: !0, data_xSort: !0, data_idConverter: function data_idConverter(t) {
                return t;
              }, data_names: {}, data_classes: {}, data_groups: [], data_axes: {}, data_type: void 0, data_types: {}, data_labels: {}, data_order: "desc", data_regions: {}, data_color: void 0, data_colors: {}, data_hide: !1, data_filter: void 0, data_selection_enabled: !1, data_selection_grouped: !1, data_selection_isselectable: function data_selection_isselectable() {
                return !0;
              }, data_selection_multiple: !0, data_selection_draggable: !1, data_onclick: function data_onclick() {}, data_onmouseover: function data_onmouseover() {}, data_onmouseout: function data_onmouseout() {}, data_onselected: function data_onselected() {}, data_onunselected: function data_onunselected() {}, data_url: void 0, data_headers: void 0, data_json: void 0, data_rows: void 0, data_columns: void 0, data_mimeType: void 0, data_keys: void 0, data_empty_label_text: "", subchart_show: !1, subchart_size_height: 60, subchart_axis_x_show: !0, subchart_onbrush: function subchart_onbrush() {}, color_pattern: [], color_threshold: {}, legend_show: !0, legend_hide: !1, legend_position: "bottom", legend_inset_anchor: "top-left", legend_inset_x: 10, legend_inset_y: 0, legend_inset_step: void 0, legend_item_onclick: void 0, legend_item_onmouseover: void 0, legend_item_onmouseout: void 0, legend_equally: !1, legend_padding: 0, legend_item_tile_width: 10, legend_item_tile_height: 10, axis_rotated: !1, axis_x_show: !0, axis_x_type: "indexed", axis_x_localtime: !0, axis_x_categories: [], axis_x_tick_centered: !1, axis_x_tick_format: void 0, axis_x_tick_culling: {}, axis_x_tick_culling_max: 10, axis_x_tick_count: void 0, axis_x_tick_fit: !0, axis_x_tick_values: null, axis_x_tick_rotate: 0, axis_x_tick_outer: !0, axis_x_tick_multiline: !0, axis_x_tick_width: null, axis_x_max: void 0, axis_x_min: void 0, axis_x_padding: {}, axis_x_height: void 0, axis_x_extent: void 0, axis_x_label: {}, axis_y_show: !0, axis_y_type: void 0, axis_y_max: void 0, axis_y_min: void 0, axis_y_inverted: !1, axis_y_center: void 0, axis_y_inner: void 0, axis_y_label: {}, axis_y_tick_format: void 0, axis_y_tick_outer: !0, axis_y_tick_values: null, axis_y_tick_rotate: 0, axis_y_tick_count: void 0, axis_y_tick_time_value: void 0, axis_y_tick_time_interval: void 0, axis_y_padding: {}, axis_y_default: void 0, axis_y2_show: !1, axis_y2_max: void 0, axis_y2_min: void 0, axis_y2_inverted: !1, axis_y2_center: void 0, axis_y2_inner: void 0, axis_y2_label: {}, axis_y2_tick_format: void 0, axis_y2_tick_outer: !0, axis_y2_tick_values: null, axis_y2_tick_count: void 0, axis_y2_padding: {}, axis_y2_default: void 0, grid_x_show: !1, grid_x_type: "tick", grid_x_lines: [], grid_y_show: !1, grid_y_lines: [], grid_y_ticks: 10, grid_focus_show: !0, grid_lines_front: !0, point_show: !0, point_r: 2.5, point_sensitivity: 10, point_focus_expand_enabled: !0, point_focus_expand_r: void 0, point_select_r: void 0, line_connectNull: !1, line_step_type: "step", bar_width: void 0, bar_width_ratio: .6, bar_width_max: void 0, bar_zerobased: !0, bar_space: 0, area_zerobased: !0, area_above: !1, pie_label_show: !0, pie_label_format: void 0, pie_label_threshold: .05, pie_label_ratio: void 0, pie_expand: {}, pie_expand_duration: 50, gauge_fullCircle: !1, gauge_label_show: !0, gauge_labelLine_show: !0, gauge_label_format: void 0, gauge_min: 0, gauge_max: 100, gauge_startingAngle: -1 * Math.PI / 2, gauge_label_extents: void 0, gauge_units: void 0, gauge_width: void 0, gauge_arcs_minWidth: 5, gauge_expand: {}, gauge_expand_duration: 50, donut_label_show: !0, donut_label_format: void 0, donut_label_threshold: .05, donut_label_ratio: void 0, donut_width: void 0, donut_title: "", donut_expand: {}, donut_expand_duration: 50, spline_interpolation_type: "cardinal", regions: [], tooltip_show: !0, tooltip_grouped: !0, tooltip_order: void 0, tooltip_format_title: void 0, tooltip_format_name: void 0, tooltip_format_value: void 0, tooltip_position: void 0, tooltip_contents: function tooltip_contents(t, e, n, i) {
                return this.getTooltipContent ? this.getTooltipContent(t, e, n, i) : "";
              }, tooltip_init_show: !1, tooltip_init_x: 0, tooltip_init_position: { top: "0px", left: "50px" }, tooltip_onshow: function tooltip_onshow() {}, tooltip_onhide: function tooltip_onhide() {}, title_text: void 0, title_padding: { top: 0, right: 0, bottom: 0, left: 0 }, title_position: "top-center" };return Object.keys(this.additionalConfig).forEach(function (e) {
              t[e] = this.additionalConfig[e];
            }, this), t;
          }, E.additionalConfig = {}, E.loadConfig = function (t) {
            function e() {
              var t = i.shift();return t && n && "object" === (void 0 === n ? "undefined" : c(n)) && t in n ? (n = n[t], e()) : t ? void 0 : n;
            }var n,
                i,
                r,
                a = this.config;Object.keys(a).forEach(function (o) {
              n = t, i = o.split("_"), r = e(), y(r) && (a[o] = r);
            });
          }, E.convertUrlToData = function (t, e, n, i, r) {
            var a = this,
                o = e || "csv",
                s = a.d3.xhr(t);n && Object.keys(n).forEach(function (t) {
              s.header(t, n[t]);
            }), s.get(function (t, e) {
              var n,
                  s = e.response || e.responseText;if (!e) throw new Error(t.responseURL + " " + t.status + " (" + t.statusText + ")");n = "json" === o ? a.convertJsonToData(JSON.parse(s), i) : "tsv" === o ? a.convertTsvToData(s) : a.convertCsvToData(s), r.call(a, n);
            });
          }, E.convertXsvToData = function (t, e) {
            var n,
                i = e.parseRows(t);return 1 === i.length ? (n = [{}], i[0].forEach(function (t) {
              n[0][t] = null;
            })) : n = e.parse(t), n;
          }, E.convertCsvToData = function (t) {
            return this.convertXsvToData(t, this.d3.csv);
          }, E.convertTsvToData = function (t) {
            return this.convertXsvToData(t, this.d3.tsv);
          }, E.convertJsonToData = function (t, e) {
            var n,
                i,
                r = this,
                a = [];return e ? (e.x ? (n = e.value.concat(e.x), r.config.data_x = e.x) : n = e.value, a.push(n), t.forEach(function (t) {
              var e = [];n.forEach(function (n) {
                var i = r.findValueInJson(t, n);_(i) && (i = null), e.push(i);
              }), a.push(e);
            }), i = r.convertRowsToData(a)) : (Object.keys(t).forEach(function (e) {
              a.push([e].concat(t[e]));
            }), i = r.convertColumnsToData(a)), i;
          }, E.findValueInJson = function (t, e) {
            for (var n = (e = (e = e.replace(/\[(\w+)\]/g, ".$1")).replace(/^\./, "")).split("."), i = 0; i < n.length; ++i) {
              var r = n[i];if (!(r in t)) return;t = t[r];
            }return t;
          }, E.convertRowsToData = function (t) {
            for (var e = [], n = t[0], i = 1; i < t.length; i++) {
              for (var r = {}, a = 0; a < t[i].length; a++) {
                if (_(t[i][a])) throw new Error("Source data is missing a component at (" + i + "," + a + ")!");r[n[a]] = t[i][a];
              }e.push(r);
            }return e;
          }, E.convertColumnsToData = function (t) {
            for (var e = [], n = 0; n < t.length; n++) {
              for (var i = t[n][0], r = 1; r < t[n].length; r++) {
                if (_(e[r - 1]) && (e[r - 1] = {}), _(t[n][r])) throw new Error("Source data is missing a component at (" + n + "," + r + ")!");e[r - 1][i] = t[n][r];
              }
            }return e;
          }, E.convertDataToTargets = function (t, e) {
            var n,
                i = this,
                r = i.config,
                a = i.d3.keys(t[0]).filter(i.isNotX, i),
                o = i.d3.keys(t[0]).filter(i.isX, i);return a.forEach(function (n) {
              var a = i.getXKey(n);i.isCustomX() || i.isTimeSeries() ? o.indexOf(a) >= 0 ? i.data.xs[n] = (e && i.data.xs[n] ? i.data.xs[n] : []).concat(t.map(function (t) {
                return t[a];
              }).filter(f).map(function (t, e) {
                return i.generateTargetX(t, n, e);
              })) : r.data_x ? i.data.xs[n] = i.getOtherTargetXs() : b(r.data_xs) && (i.data.xs[n] = i.getXValuesOfXKey(a, i.data.targets)) : i.data.xs[n] = t.map(function (t, e) {
                return e;
              });
            }), a.forEach(function (t) {
              if (!i.data.xs[t]) throw new Error('x is not defined for id = "' + t + '".');
            }), (n = a.map(function (e, n) {
              var a = r.data_idConverter(e);return { id: a, id_org: e, values: t.map(function (t, o) {
                  var s,
                      u = t[i.getXKey(e)],
                      l = null === t[e] || isNaN(t[e]) || i.isRibbonType(e) ? null : +t[e],
                      h = i.isRibbonType(e) && function (t) {
                    var e = "object" === (void 0 === t ? "undefined" : c(t)) && t.hasOwnProperty("high") && !isNaN(t.high),
                        n = "object" === (void 0 === t ? "undefined" : c(t)) && t.hasOwnProperty("low") && !isNaN(t.low);return e && n;
                  }(t[e]) ? t[e] : void 0;return i.isCustomX() && i.isCategorized() && 0 === n && !_(u) ? (0 === n && 0 === o && (r.axis_x_categories = []), -1 === (s = r.axis_x_categories.indexOf(u)) && (s = r.axis_x_categories.length, r.axis_x_categories.push(u))) : s = i.generateTargetX(u, e, o), (_(t[e]) || i.data.xs[e].length <= o) && (s = void 0), { x: s, value: l, id: a, ribbonYs: h };
                }).filter(function (t) {
                  return y(t.x);
                }) };
            })).forEach(function (t) {
              var e;r.data_xSort && (t.values = t.values.sort(function (t, e) {
                return (t.x || 0 === t.x ? t.x : 1 / 0) - (e.x || 0 === e.x ? e.x : 1 / 0);
              })), e = 0, t.values.forEach(function (t) {
                t.index = e++;
              }), i.data.xs[t.id].sort(function (t, e) {
                return t - e;
              });
            }), i.hasNegativeValue = i.hasNegativeValueInTargets(n), i.hasPositiveValue = i.hasPositiveValueInTargets(n), r.data_type && i.setTargetType(i.mapToIds(n).filter(function (t) {
              return !(t in r.data_types);
            }), r.data_type), n.forEach(function (t) {
              i.addCache(t.id_org, t);
            }), n;
          }, E.isX = function (t) {
            var e = this.config;return e.data_x && t === e.data_x || b(e.data_xs) && T(e.data_xs, t);
          }, E.isNotX = function (t) {
            return !this.isX(t);
          }, E.getXKey = function (t) {
            var e = this.config;return e.data_x ? e.data_x : b(e.data_xs) ? e.data_xs[t] : null;
          }, E.getXValuesOfXKey = function (t, e) {
            var n,
                i = this;return (e && b(e) ? i.mapToIds(e) : []).forEach(function (e) {
              i.getXKey(e) === t && (n = i.data.xs[e]);
            }), n;
          }, E.getIndexByX = function (t) {
            var e = this,
                n = e.filterByX(e.data.targets, t);return n.length ? n[0].index : null;
          }, E.getXValue = function (t, e) {
            var n = this;return t in n.data.xs && n.data.xs[t] && f(n.data.xs[t][e]) ? n.data.xs[t][e] : e;
          }, E.getOtherTargetXs = function () {
            var t = this,
                e = Object.keys(t.data.xs);return e.length ? t.data.xs[e[0]] : null;
          }, E.getOtherTargetX = function (t) {
            var e = this.getOtherTargetXs();return e && t < e.length ? e[t] : null;
          }, E.addXs = function (t) {
            var e = this;Object.keys(t).forEach(function (n) {
              e.config.data_xs[n] = t[n];
            });
          }, E.hasMultipleX = function (t) {
            return this.d3.set(Object.keys(t).map(function (e) {
              return t[e];
            })).size() > 1;
          }, E.isMultipleX = function () {
            return b(this.config.data_xs) || !this.config.data_xSort || this.hasType("scatter");
          }, E.addName = function (t) {
            var e,
                n = this;return t && (e = n.config.data_names[t.id], t.name = void 0 !== e ? e : t.id), t;
          }, E.getValueOnIndex = function (t, e) {
            var n = t.filter(function (t) {
              return t.index === e;
            });return n.length ? n[0] : null;
          }, E.updateTargetX = function (t, e) {
            var n = this;t.forEach(function (t) {
              t.values.forEach(function (i, r) {
                i.x = n.generateTargetX(e[r], t.id, r);
              }), n.data.xs[t.id] = e;
            });
          }, E.updateTargetXs = function (t, e) {
            var n = this;t.forEach(function (t) {
              e[t.id] && n.updateTargetX([t], e[t.id]);
            });
          }, E.generateTargetX = function (t, e, n) {
            var i = this;return i.isTimeSeries() ? t ? i.parseDate(t) : i.parseDate(i.getXValue(e, n)) : i.isCustomX() && !i.isCategorized() ? f(t) ? +t : i.getXValue(e, n) : n;
          }, E.cloneTarget = function (t) {
            return { id: t.id, id_org: t.id_org, values: t.values.map(function (t) {
                return { x: t.x, value: t.value, id: t.id };
              }) };
          }, E.updateXs = function () {
            var t = this;t.data.targets.length && (t.xs = [], t.data.targets[0].values.forEach(function (e) {
              t.xs[e.index] = e.x;
            }));
          }, E.getPrevX = function (t) {
            var e = this.xs[t - 1];return void 0 !== e ? e : null;
          }, E.getNextX = function (t) {
            var e = this.xs[t + 1];return void 0 !== e ? e : null;
          }, E.getMaxDataCount = function () {
            var t = this;return t.d3.max(t.data.targets, function (t) {
              return t.values.length;
            });
          }, E.getMaxDataCountTarget = function (t) {
            var e,
                n = t.length,
                i = 0;return n > 1 ? t.forEach(function (t) {
              t.values.length > i && (e = t, i = t.values.length);
            }) : e = n ? t[0] : null, e;
          }, E.getEdgeX = function (t) {
            var e = this;return t.length ? [e.d3.min(t, function (t) {
              return t.values[0].x;
            }), e.d3.max(t, function (t) {
              return t.values[t.values.length - 1].x;
            })] : [0, 0];
          }, E.mapToIds = function (t) {
            return t.map(function (t) {
              return t.id;
            });
          }, E.mapToTargetIds = function (t) {
            var e = this;return t ? [].concat(t) : e.mapToIds(e.data.targets);
          }, E.hasTarget = function (t, e) {
            var n,
                i = this.mapToIds(t);for (n = 0; n < i.length; n++) {
              if (i[n] === e) return !0;
            }return !1;
          }, E.isTargetToShow = function (t) {
            return this.hiddenTargetIds.indexOf(t) < 0;
          }, E.isLegendToShow = function (t) {
            return this.hiddenLegendIds.indexOf(t) < 0;
          }, E.filterTargetsToShow = function (t) {
            var e = this;return t.filter(function (t) {
              return e.isTargetToShow(t.id);
            });
          }, E.mapTargetsToUniqueXs = function (t) {
            var e = this,
                n = e.d3.set(e.d3.merge(t.map(function (t) {
              return t.values.map(function (t) {
                return +t.x;
              });
            }))).values();return (n = e.isTimeSeries() ? n.map(function (t) {
              return new Date(+t);
            }) : n.map(function (t) {
              return +t;
            })).sort(function (t, e) {
              return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
            });
          }, E.addHiddenTargetIds = function (t) {
            t = t instanceof Array ? t : new Array(t);for (var e = 0; e < t.length; e++) {
              this.hiddenTargetIds.indexOf(t[e]) < 0 && (this.hiddenTargetIds = this.hiddenTargetIds.concat(t[e]));
            }
          }, E.removeHiddenTargetIds = function (t) {
            this.hiddenTargetIds = this.hiddenTargetIds.filter(function (e) {
              return t.indexOf(e) < 0;
            });
          }, E.addHiddenLegendIds = function (t) {
            t = t instanceof Array ? t : new Array(t);for (var e = 0; e < t.length; e++) {
              this.hiddenLegendIds.indexOf(t[e]) < 0 && (this.hiddenLegendIds = this.hiddenLegendIds.concat(t[e]));
            }
          }, E.removeHiddenLegendIds = function (t) {
            this.hiddenLegendIds = this.hiddenLegendIds.filter(function (e) {
              return t.indexOf(e) < 0;
            });
          }, E.getValuesAsIdKeyed = function (t, e) {
            var n = this,
                i = {};return t.forEach(function (t) {
              i[t.id] = [], t.values.forEach(function (r) {
                n.isRibbonType(r.id) ? e ? i[t.id].push(r.ribbonYs.high) : i[t.id].push(r.ribbonYs.low) : i[t.id].push(r.value);
              });
            }), i;
          }, E.checkValueInTargets = function (t, e) {
            var n,
                i,
                r,
                a = Object.keys(t);for (n = 0; n < a.length; n++) {
              for (r = t[a[n]].values, i = 0; i < r.length; i++) {
                if (e(r[i].value)) return !0;
              }
            }return !1;
          }, E.hasNegativeValueInTargets = function (t) {
            return this.checkValueInTargets(t, function (t) {
              return t < 0;
            });
          }, E.hasPositiveValueInTargets = function (t) {
            return this.checkValueInTargets(t, function (t) {
              return t > 0;
            });
          }, E.isOrderDesc = function () {
            var t = this.config;return "string" == typeof t.data_order && "desc" === t.data_order.toLowerCase();
          }, E.isOrderAsc = function () {
            var t = this.config;return "string" == typeof t.data_order && "asc" === t.data_order.toLowerCase();
          }, E.getOrderFunction = function () {
            var t = this,
                e = t.config,
                n = t.isOrderAsc(),
                i = t.isOrderDesc();if (n || i) return function (t, e) {
              var n = function n(t, e) {
                return t + Math.abs(e.value);
              },
                  r = t.values.reduce(n, 0),
                  a = e.values.reduce(n, 0);return i ? a - r : r - a;
            };if (g(e.data_order)) return e.data_order;if (p(e.data_order)) {
              var r = e.data_order;return function (t, e) {
                return r.indexOf(t.id) - r.indexOf(e.id);
              };
            }
          }, E.orderTargets = function (t) {
            var e = this.getOrderFunction();return e && (t.sort(e), (this.isOrderAsc() || this.isOrderDesc()) && t.reverse()), t;
          }, E.filterByX = function (t, e) {
            return this.d3.merge(t.map(function (t) {
              return t.values;
            })).filter(function (t) {
              return t.x - e == 0;
            });
          }, E.filterRemoveNull = function (t) {
            return t.filter(function (t) {
              return f(t.value);
            });
          }, E.filterByXDomain = function (t, e) {
            return t.map(function (t) {
              return { id: t.id, id_org: t.id_org, values: t.values.filter(function (t) {
                  return e[0] <= t.x && t.x <= e[1];
                }) };
            });
          }, E.hasDataLabel = function () {
            var t = this.config;return !("boolean" != typeof t.data_labels || !t.data_labels) || !("object" !== c(t.data_labels) || !b(t.data_labels));
          }, E.getDataLabelLength = function (t, e, n) {
            var i = this,
                r = [0, 0];return i.selectChart.select("svg").selectAll(".dummy").data([t, e]).enter().append("text").text(function (t) {
              return i.dataLabelFormat(t.id)(t);
            }).each(function (t, e) {
              r[e] = 1.3 * this.getBoundingClientRect()[n];
            }).remove(), r;
          }, E.isNoneArc = function (t) {
            return this.hasTarget(this.data.targets, t.id);
          }, E.isArc = function (t) {
            return "data" in t && this.hasTarget(this.data.targets, t.data.id);
          }, E.findSameXOfValues = function (t, e) {
            var n,
                i = t[e].x,
                r = [];for (n = e - 1; n >= 0 && i === t[n].x; n--) {
              r.push(t[n]);
            }for (n = e; n < t.length && i === t[n].x; n++) {
              r.push(t[n]);
            }return r;
          }, E.findClosestFromTargets = function (t, e) {
            var n,
                i = this;return n = t.map(function (t) {
              return i.findClosest(t.values, e);
            }), i.findClosest(n, e);
          }, E.findClosest = function (t, e) {
            var n,
                i = this,
                r = i.config.point_sensitivity;return t.filter(function (t) {
              return t && i.isBarType(t.id);
            }).forEach(function (t) {
              var e = i.main.select("." + u.bars + i.getTargetSelectorSuffix(t.id) + " ." + u.bar + "-" + t.index).node();!n && i.isWithinBar(e) && (n = t);
            }), t.filter(function (t) {
              return t && !i.isBarType(t.id);
            }).forEach(function (t) {
              var a = i.dist(t, e);a < r && (r = a, n = t);
            }), n;
          }, E.dist = function (t, e) {
            var n = this,
                i = n.config,
                r = i.axis_rotated ? 1 : 0,
                a = i.axis_rotated ? 0 : 1,
                o = n.circleY(t, t.index),
                s = n.x(t.x);return Math.sqrt(Math.pow(s - e[r], 2) + Math.pow(o - e[a], 2));
          }, E.convertValuesToStep = function (t) {
            var e,
                n = [].concat(t);if (!this.isCategorized()) return t;for (e = t.length + 1; 0 < e; e--) {
              n[e] = n[e - 1];
            }return n[0] = { x: n[0].x - 1, value: n[0].value, id: n[0].id }, n[t.length + 1] = { x: n[t.length].x + 1, value: n[t.length].value, id: n[t.length].id }, n;
          }, E.updateDataAttributes = function (t, e) {
            var n = this,
                i = n.config["data_" + t];return void 0 === e ? i : (Object.keys(e).forEach(function (t) {
              i[t] = e[t];
            }), n.redraw({ withLegend: !0 }), i);
          }, E.load = function (t, e) {
            var n = this;t && (e.filter && (t = t.filter(e.filter)), (e.type || e.types) && t.forEach(function (t) {
              var i = e.types && e.types[t.id] ? e.types[t.id] : e.type;n.setTargetType(t.id, i);
            }), n.data.targets.forEach(function (e) {
              for (var n = 0; n < t.length; n++) {
                if (e.id === t[n].id) {
                  e.values = t[n].values, t.splice(n, 1);break;
                }
              }
            }), n.data.targets = n.data.targets.concat(t)), n.updateTargets(n.data.targets), n.redraw({ withUpdateOrgXDomain: !0, withUpdateXDomain: !0, withLegend: !0 }), e.done && e.done();
          }, E.loadFromArgs = function (t) {
            var e = this;t.data ? e.load(e.convertDataToTargets(t.data), t) : t.url ? e.convertUrlToData(t.url, t.mimeType, t.headers, t.keys, function (n) {
              e.load(e.convertDataToTargets(n), t);
            }) : t.json ? e.load(e.convertDataToTargets(e.convertJsonToData(t.json, t.keys)), t) : t.rows ? e.load(e.convertDataToTargets(e.convertRowsToData(t.rows)), t) : t.columns ? e.load(e.convertDataToTargets(e.convertColumnsToData(t.columns)), t) : e.load(null, t);
          }, E.unload = function (t, e) {
            var n = this;e || (e = function e() {}), (t = t.filter(function (t) {
              return n.hasTarget(n.data.targets, t);
            })) && 0 !== t.length ? (n.svg.selectAll(t.map(function (t) {
              return n.selectorTarget(t);
            })).transition().style("opacity", 0).remove().call(n.endall, e), t.forEach(function (t) {
              n.withoutFadeIn[t] = !1, n.legend && n.legend.selectAll("." + u.legendItem + n.getTargetSelectorSuffix(t)).remove(), n.data.targets = n.data.targets.filter(function (e) {
                return e.id !== t;
              });
            })) : e();
          }, E.getYDomainMin = function (t) {
            var e,
                n,
                i,
                r,
                a,
                o,
                s = this,
                u = s.config,
                c = s.mapToIds(t),
                l = s.getValuesAsIdKeyed(t, !1);if (u.data_groups.length > 0) for (o = s.hasNegativeValueInTargets(t), e = 0; e < u.data_groups.length; e++) {
              if (0 !== (r = u.data_groups[e].filter(function (t) {
                return c.indexOf(t) >= 0;
              })).length) for (i = r[0], o && l[i] && l[i].forEach(function (t, e) {
                l[i][e] = t < 0 ? t : 0;
              }), n = 1; n < r.length; n++) {
                a = r[n], l[a] && l[a].forEach(function (t, e) {
                  s.axis.getId(a) !== s.axis.getId(i) || !l[i] || o && +t > 0 || (l[i][e] += +t);
                });
              }
            }return s.d3.min(Object.keys(l).map(function (t) {
              return s.d3.min(l[t]);
            }));
          }, E.getYDomainMax = function (t) {
            var e,
                n,
                i,
                r,
                a,
                o,
                s = this,
                u = s.config,
                c = s.mapToIds(t),
                l = s.getValuesAsIdKeyed(t, !0);if (u.data_groups.length > 0) for (o = s.hasPositiveValueInTargets(t), e = 0; e < u.data_groups.length; e++) {
              if (0 !== (r = u.data_groups[e].filter(function (t) {
                return c.indexOf(t) >= 0;
              })).length) for (i = r[0], o && l[i] && l[i].forEach(function (t, e) {
                l[i][e] = t > 0 ? t : 0;
              }), n = 1; n < r.length; n++) {
                a = r[n], l[a] && l[a].forEach(function (t, e) {
                  s.axis.getId(a) !== s.axis.getId(i) || !l[i] || o && +t < 0 || (l[i][e] += +t);
                });
              }
            }return s.d3.max(Object.keys(l).map(function (t) {
              return s.d3.max(l[t]);
            }));
          }, E.getYDomain = function (t, e, n) {
            var i,
                r,
                a,
                o,
                s,
                u,
                c,
                l,
                h,
                d,
                g = this,
                p = g.config,
                x = t.filter(function (t) {
              return g.axis.getId(t.id) === e;
            }),
                _ = n ? g.filterByXDomain(x, n) : x,
                y = "y2" === e ? p.axis_y2_min : p.axis_y_min,
                v = "y2" === e ? p.axis_y2_max : p.axis_y_max,
                m = g.getYDomainMin(_),
                S = g.getYDomainMax(_),
                A = "y2" === e ? p.axis_y2_center : p.axis_y_center,
                T = g.hasType("bar", _) && p.bar_zerobased || g.hasType("area", _) && p.area_zerobased,
                P = "y2" === e ? p.axis_y2_inverted : p.axis_y_inverted,
                C = g.hasDataLabel() && p.axis_rotated,
                L = g.hasDataLabel() && !p.axis_rotated;return m = f(y) ? y : f(v) ? m < v ? m : v - 10 : m, S = f(v) ? v : f(y) ? y < S ? S : y + 10 : S, 0 === _.length ? "y2" === e ? g.y2.domain() : g.y.domain() : (isNaN(m) && (m = 0), isNaN(S) && (S = m), m === S && (m < 0 ? S = 0 : m = 0), h = m >= 0 && S >= 0, d = m <= 0 && S <= 0, (f(y) && h || f(v) && d) && (T = !1), T && (h && (m = 0), d && (S = 0)), r = Math.abs(S - m), a = o = .1 * r, void 0 !== A && (S = A + (s = Math.max(Math.abs(m), Math.abs(S))), m = A - s), C ? (u = g.getDataLabelLength(m, S, "width"), c = w(g.y.range()), a += r * ((l = [u[0] / c, u[1] / c])[1] / (1 - l[0] - l[1])), o += r * (l[0] / (1 - l[0] - l[1]))) : L && (u = g.getDataLabelLength(m, S, "height"), a += g.axis.convertPixelsToAxisPadding(u[1], r), o += g.axis.convertPixelsToAxisPadding(u[0], r)), "y" === e && b(p.axis_y_padding) && (a = g.axis.getPadding(p.axis_y_padding, "top", a, r), o = g.axis.getPadding(p.axis_y_padding, "bottom", o, r)), "y2" === e && b(p.axis_y2_padding) && (a = g.axis.getPadding(p.axis_y2_padding, "top", a, r), o = g.axis.getPadding(p.axis_y2_padding, "bottom", o, r)), T && (h && (o = m), d && (a = -S)), i = [m - o, S + a], P ? i.reverse() : i);
          }, E.getXDomainMin = function (t) {
            var e = this,
                n = e.config;return y(n.axis_x_min) ? e.isTimeSeries() ? this.parseDate(n.axis_x_min) : n.axis_x_min : e.d3.min(t, function (t) {
              return e.d3.min(t.values, function (t) {
                return t.x;
              });
            });
          }, E.getXDomainMax = function (t) {
            var e = this,
                n = e.config;return y(n.axis_x_max) ? e.isTimeSeries() ? this.parseDate(n.axis_x_max) : n.axis_x_max : e.d3.max(t, function (t) {
              return e.d3.max(t.values, function (t) {
                return t.x;
              });
            });
          }, E.getXDomainPadding = function (t) {
            var e,
                n,
                i,
                r,
                a = this,
                o = a.config,
                s = t[1] - t[0];return n = a.isCategorized() ? 0 : a.hasType("bar") ? (e = a.getMaxDataCount()) > 1 ? s / (e - 1) / 2 : .5 : .01 * s, "object" === c(o.axis_x_padding) && b(o.axis_x_padding) ? (i = f(o.axis_x_padding.left) ? o.axis_x_padding.left : n, r = f(o.axis_x_padding.right) ? o.axis_x_padding.right : n) : i = r = "number" == typeof o.axis_x_padding ? o.axis_x_padding : n, { left: i, right: r };
          }, E.getXDomain = function (t) {
            var e = this,
                n = [e.getXDomainMin(t), e.getXDomainMax(t)],
                i = n[0],
                r = n[1],
                a = e.getXDomainPadding(n),
                o = 0,
                s = 0;return i - r != 0 || e.isCategorized() || (e.isTimeSeries() ? (i = new Date(.5 * i.getTime()), r = new Date(1.5 * r.getTime())) : (i = 0 === i ? 1 : .5 * i, r = 0 === r ? -1 : 1.5 * r)), (i || 0 === i) && (o = e.isTimeSeries() ? new Date(i.getTime() - a.left) : i - a.left), (r || 0 === r) && (s = e.isTimeSeries() ? new Date(r.getTime() + a.right) : r + a.right), [o, s];
          }, E.updateXDomain = function (t, e, n, i, r) {
            var a = this,
                o = a.config;return n && (a.x.domain(r || a.d3.extent(a.getXDomain(t))), a.orgXDomain = a.x.domain(), o.zoom_enabled && a.zoom.scale(a.x).updateScaleExtent(), a.subX.domain(a.x.domain()), a.brush && a.brush.scale(a.subX)), e && (a.x.domain(r || (!a.brush || a.brush.empty() ? a.orgXDomain : a.brush.extent())), o.zoom_enabled && a.zoom.scale(a.x).updateScaleExtent()), i && a.x.domain(a.trimXDomain(a.x.orgDomain())), a.x.domain();
          }, E.trimXDomain = function (t) {
            var e = this.getZoomDomain(),
                n = e[0],
                i = e[1];return t[0] <= n && (t[1] = +t[1] + (n - t[0]), t[0] = n), i <= t[1] && (t[0] = +t[0] - (t[1] - i), t[1] = i), t;
          }, E.drag = function (t) {
            var e,
                n,
                i,
                r,
                a,
                o,
                s,
                c,
                l = this,
                h = l.config,
                d = l.main,
                f = l.d3;l.hasArcType() || h.data_selection_enabled && (h.zoom_enabled && !l.zoom.altDomain || h.data_selection_multiple && (e = l.dragStart[0], n = l.dragStart[1], i = t[0], r = t[1], a = Math.min(e, i), o = Math.max(e, i), s = h.data_selection_grouped ? l.margin.top : Math.min(n, r), c = h.data_selection_grouped ? l.height : Math.max(n, r), d.select("." + u.dragarea).attr("x", a).attr("y", s).attr("width", o - a).attr("height", c - s), d.selectAll("." + u.shapes).selectAll("." + u.shape).filter(function (t) {
              return h.data_selection_isselectable(t);
            }).each(function (t, e) {
              var n,
                  i,
                  r,
                  h,
                  d,
                  g,
                  p = f.select(this),
                  x = p.classed(u.SELECTED),
                  _ = p.classed(u.INCLUDED),
                  y = !1;if (p.classed(u.circle)) n = 1 * p.attr("cx"), i = 1 * p.attr("cy"), d = l.togglePoint, y = a < n && n < o && s < i && i < c;else {
                if (!p.classed(u.bar)) return;n = (g = C(this)).x, i = g.y, r = g.width, h = g.height, d = l.togglePath, y = !(o < n || n + r < a || c < i || i + h < s);
              }y ^ _ && (p.classed(u.INCLUDED, !_), p.classed(u.SELECTED, !x), d.call(l, !x, p, t, e));
            })));
          }, E.dragstart = function (t) {
            var e = this,
                n = e.config;e.hasArcType() || n.data_selection_enabled && (e.dragStart = t, e.main.select("." + u.chart).append("rect").attr("class", u.dragarea).style("opacity", .1), e.dragging = !0);
          }, E.dragend = function () {
            var t = this,
                e = t.config;t.hasArcType() || e.data_selection_enabled && (t.main.select("." + u.dragarea).transition().duration(100).style("opacity", 0).remove(), t.main.selectAll("." + u.shape).classed(u.INCLUDED, !1), t.dragging = !1);
          }, E.getYFormat = function (t) {
            var e = this,
                n = t && !e.hasType("gauge") ? e.defaultArcValueFormat : e.yFormat,
                i = t && !e.hasType("gauge") ? e.defaultArcValueFormat : e.y2Format;return function (t, r, a) {
              return ("y2" === e.axis.getId(a) ? i : n).call(e, t, r);
            };
          }, E.yFormat = function (t) {
            var e = this,
                n = e.config;return (n.axis_y_tick_format ? n.axis_y_tick_format : e.defaultValueFormat)(t);
          }, E.y2Format = function (t) {
            var e = this,
                n = e.config;return (n.axis_y2_tick_format ? n.axis_y2_tick_format : e.defaultValueFormat)(t);
          }, E.defaultValueFormat = function (t) {
            return f(t) ? +t : "";
          }, E.defaultArcValueFormat = function (t, e) {
            return (100 * e).toFixed(1) + "%";
          }, E.dataLabelFormat = function (t) {
            var e = this.config.data_labels,
                n = function n(t) {
              return f(t) ? +t : "";
            };return "function" == typeof e.format ? e.format : "object" === c(e.format) ? e.format[t] ? !0 === e.format[t] ? n : e.format[t] : function () {
              return "";
            } : n;
          }, E.initGrid = function () {
            var t = this,
                e = t.config,
                n = t.d3;t.grid = t.main.append("g").attr("clip-path", t.clipPathForGrid).attr("class", u.grid), e.grid_x_show && t.grid.append("g").attr("class", u.xgrids), e.grid_y_show && t.grid.append("g").attr("class", u.ygrids), e.grid_focus_show && t.grid.append("g").attr("class", u.xgridFocus).append("line").attr("class", u.xgridFocus), t.xgrid = n.selectAll([]), e.grid_lines_front || t.initGridLines();
          }, E.initGridLines = function () {
            var t = this,
                e = t.d3;t.gridLines = t.main.append("g").attr("clip-path", t.clipPathForGrid).attr("class", u.grid + " " + u.gridLines), t.gridLines.append("g").attr("class", u.xgridLines), t.gridLines.append("g").attr("class", u.ygridLines), t.xgridLines = e.selectAll([]);
          }, E.updateXGrid = function (t) {
            var e = this,
                n = e.config,
                i = e.d3,
                r = e.generateGridData(n.grid_x_type, e.x),
                a = e.isCategorized() ? e.xAxis.tickOffset() : 0;e.xgridAttr = n.axis_rotated ? { x1: 0, x2: e.width, y1: function y1(t) {
                return e.x(t) - a;
              }, y2: function y2(t) {
                return e.x(t) - a;
              } } : { x1: function x1(t) {
                return e.x(t) + a;
              }, x2: function x2(t) {
                return e.x(t) + a;
              }, y1: 0, y2: e.height }, e.xgrid = e.main.select("." + u.xgrids).selectAll("." + u.xgrid).data(r), e.xgrid.enter().append("line").attr("class", u.xgrid), t || e.xgrid.attr(e.xgridAttr).style("opacity", function () {
              return +i.select(this).attr(n.axis_rotated ? "y1" : "x1") === (n.axis_rotated ? e.height : 0) ? 0 : 1;
            }), e.xgrid.exit().remove();
          }, E.updateYGrid = function () {
            var t = this,
                e = t.config,
                n = t.yAxis.tickValues() || t.y.ticks(e.grid_y_ticks);t.ygrid = t.main.select("." + u.ygrids).selectAll("." + u.ygrid).data(n), t.ygrid.enter().append("line").attr("class", u.ygrid), t.ygrid.attr("x1", e.axis_rotated ? t.y : 0).attr("x2", e.axis_rotated ? t.y : t.width).attr("y1", e.axis_rotated ? 0 : t.y).attr("y2", e.axis_rotated ? t.height : t.y), t.ygrid.exit().remove(), t.smoothLines(t.ygrid, "grid");
          }, E.gridTextAnchor = function (t) {
            return t.position ? t.position : "end";
          }, E.gridTextDx = function (t) {
            return "start" === t.position ? 4 : "middle" === t.position ? 0 : -4;
          }, E.xGridTextX = function (t) {
            return "start" === t.position ? -this.height : "middle" === t.position ? -this.height / 2 : 0;
          }, E.yGridTextX = function (t) {
            return "start" === t.position ? 0 : "middle" === t.position ? this.width / 2 : this.width;
          }, E.updateGrid = function (t) {
            var e,
                n,
                i,
                r = this,
                a = r.main,
                o = r.config;r.grid.style("visibility", r.hasArcType() ? "hidden" : "visible"), a.select("line." + u.xgridFocus).style("visibility", "hidden"), o.grid_x_show && r.updateXGrid(), r.xgridLines = a.select("." + u.xgridLines).selectAll("." + u.xgridLine).data(o.grid_x_lines), (e = r.xgridLines.enter().append("g").attr("class", function (t) {
              return u.xgridLine + (t.class ? " " + t.class : "");
            })).append("line").style("opacity", 0), e.append("text").attr("text-anchor", r.gridTextAnchor).attr("transform", o.axis_rotated ? "" : "rotate(-90)").attr("dx", r.gridTextDx).attr("dy", -5).style("opacity", 0), e.append("text").attr("text-anchor", "middle").attr("class", u.gridLineCircleText).attr("dx", 1).attr("dy", 14).attr("y", 15).text("").style("opacity", 0), e.append("circle").attr("class", u.gridLineCircle).attr("r", 15).attr("cy", 21).attr("fill", "transparent").attr("stroke-width", 2).style("opacity", 0), e.append("circle").attr("class", u.gridLineCircleHover).attr("r", 15).attr("cy", 21).attr("fill", "transparent").attr("stroke-width", 1).attr("stroke-linecap", "round").attr("stroke-dasharray", "1 3").on("mouseover", function () {
              this.setAttribute("r", "20");
            }).on("mouseout", function () {
              this.setAttribute("r", "15");
            }).style("opacity", 0), r.xgridLines.exit().transition().duration(t).style("opacity", 0).remove(), o.grid_y_show && r.updateYGrid(), r.ygridLines = a.select("." + u.ygridLines).selectAll("." + u.ygridLine).data(o.grid_y_lines), (n = r.ygridLines.enter().append("g").attr("class", function (t) {
              return u.ygridLine + (t.class ? " " + t.class : "");
            })).append("line").style("opacity", 0), n.append("text").attr("text-anchor", r.gridTextAnchor).attr("transform", o.axis_rotated ? "rotate(-90)" : "").attr("dx", r.gridTextDx).attr("dy", -5).style("opacity", 0), i = r.yv.bind(r), r.ygridLines.select("line").transition().duration(t).attr("x1", o.axis_rotated ? i : 0).attr("x2", o.axis_rotated ? i : r.width).attr("y1", o.axis_rotated ? 0 : i).attr("y2", o.axis_rotated ? r.height : i).style("opacity", 1), r.ygridLines.select("text").transition().duration(t).attr("x", o.axis_rotated ? r.xGridTextX.bind(r) : r.yGridTextX.bind(r)).attr("y", i).text(function (t) {
              return t.text;
            }).style("opacity", 1), r.ygridLines.exit().transition().duration(t).style("opacity", 0).remove();
          }, E.redrawGrid = function (t) {
            var e = this,
                n = e.config,
                i = e.xv.bind(e),
                r = e.xgridLines.select("line"),
                a = e.xgridLines.select("circle." + u.gridLineCircle),
                o = e.xgridLines.select("circle." + u.gridLineCircleHover),
                s = e.xgridLines.select("text." + u.gridLineCircleText),
                c = e.xgridLines.select("text");return [(t ? r.transition() : r).attr("x1", n.axis_rotated ? 0 : i).attr("x2", n.axis_rotated ? e.width : i).attr("y1", n.axis_rotated ? i : function (t) {
              return t.showSelector ? 35 : 0;
            }).attr("y2", n.axis_rotated ? i : e.height).style("opacity", 1), (t ? a.transition() : a).attr("cx", n.axis_rotated ? 0 : i).style("opacity", 1), (t ? o.transition() : o).attr("cx", n.axis_rotated ? 0 : i).style("opacity", 1), (t ? s.transition() : s).attr("x", i).style("opacity", 1), (t ? c.transition() : c).attr("x", n.axis_rotated ? e.yGridTextX.bind(e) : e.xGridTextX.bind(e)).attr("y", i).text(function (t) {
              return t.text;
            }).style("opacity", 1)];
          }, E.showXGridFocus = function (t) {
            var e = this,
                n = e.config,
                i = t.filter(function (t) {
              if (t) var e = void 0 == t.ribbonYs ? null : f(t.ribbonYs.high) && f(t.ribbonYs.low);return t && (f(t.value) || e);
            }),
                r = e.main.selectAll("line." + u.xgridFocus),
                a = e.xx.bind(e);n.tooltip_show && (e.hasType("scatter") || e.hasArcType() || (r.style("visibility", "visible").data([i[0]]).attr(n.axis_rotated ? "y1" : "x1", a).attr(n.axis_rotated ? "y2" : "x2", a), e.smoothLines(r, "grid")));
          }, E.hideXGridFocus = function () {
            this.main.select("line." + u.xgridFocus).style("visibility", "hidden");
          }, E.updateXgridFocus = function () {
            var t = this,
                e = t.config;t.main.select("line." + u.xgridFocus).attr("x1", e.axis_rotated ? 0 : -10).attr("x2", e.axis_rotated ? t.width : -10).attr("y1", e.axis_rotated ? -10 : 0).attr("y2", e.axis_rotated ? -10 : t.height);
          }, E.generateGridData = function (t, e) {
            var n,
                i,
                r,
                a,
                o = this,
                s = [],
                c = o.main.select("." + u.axisX).selectAll(".tick").size();if ("year" === t) for (i = (n = o.getXDomain())[0].getFullYear(), r = n[1].getFullYear(), a = i; a <= r; a++) {
              s.push(new Date(a + "-01-01 00:00:00"));
            } else (s = e.ticks(10)).length > c && (s = s.filter(function (t) {
              return ("" + t).indexOf(".") < 0;
            }));return s;
          }, E.getGridFilterToRemove = function (t) {
            return t ? function (e) {
              var n = !1;return [].concat(t).forEach(function (t) {
                ("value" in t && e.value === t.value || "class" in t && e.class === t.class) && (n = !0);
              }), n;
            } : function () {
              return !0;
            };
          }, E.removeGridLines = function (t, e) {
            var n = this,
                i = n.config,
                r = n.getGridFilterToRemove(t),
                a = function a(t) {
              return !r(t);
            },
                o = e ? u.xgridLines : u.ygridLines,
                s = e ? u.xgridLine : u.ygridLine;n.main.select("." + o).selectAll("." + s).filter(r).transition().duration(i.transition_duration).style("opacity", 0).remove(), e ? i.grid_x_lines = i.grid_x_lines.filter(a) : i.grid_y_lines = i.grid_y_lines.filter(a);
          }, E.initEventRect = function () {
            this.main.select("." + u.chart).append("g").attr("class", u.eventRects).style("fill-opacity", 0);
          }, E.redrawEventRect = function () {
            var t,
                e,
                n = this,
                i = n.config,
                r = n.isMultipleX(),
                a = n.main.select("." + u.eventRects).style("cursor", i.zoom_enabled ? i.axis_rotated ? "ns-resize" : "ew-resize" : null).classed(u.eventRectsMultiple, r).classed(u.eventRectsSingle, !r);a.selectAll("." + u.eventRect).remove(), n.eventRect = a.selectAll("." + u.eventRect), r ? (t = n.eventRect.data([0]), n.generateEventRectsForMultipleXs(t.enter()), n.updateEventRect(t)) : (e = n.getMaxDataCountTarget(n.data.targets), a.datum(e ? e.values : []), n.eventRect = a.selectAll("." + u.eventRect), t = n.eventRect.data(function (t) {
              return t;
            }), n.generateEventRectsForSingleX(t.enter()), n.updateEventRect(t), t.exit().remove());
          }, E.updateEventRect = function (t) {
            var e,
                n,
                i,
                r,
                a,
                o,
                s = this,
                u = s.config;t = t || s.eventRect.data(function (t) {
              return t;
            }), s.isMultipleX() ? (e = 0, n = 0, i = s.width, r = s.height) : (!s.isCustomX() && !s.isTimeSeries() || s.isCategorized() ? (a = s.getEventRectWidth(), o = function o(t) {
              return s.x(t.x) - a / 2;
            }) : (s.updateXs(), a = function a(t) {
              var e = s.getPrevX(t.index),
                  n = s.getNextX(t.index);return null === e && null === n ? u.axis_rotated ? s.height : s.width : (null === e && (e = s.x.domain()[0]), null === n && (n = s.x.domain()[1]), Math.max(0, (s.x(n) - s.x(e)) / 2));
            }, o = function o(t) {
              var e = s.getPrevX(t.index),
                  n = s.getNextX(t.index),
                  i = s.data.xs[t.id][t.index];return null === e && null === n ? 0 : (null === e && (e = s.x.domain()[0]), (s.x(i) + s.x(e)) / 2);
            }), e = u.axis_rotated ? 0 : o, n = u.axis_rotated ? o : 0, i = u.axis_rotated ? s.width : a, r = u.axis_rotated ? a : s.height), t.attr("class", s.classEvent.bind(s)).attr("x", e).attr("y", n).attr("width", i).attr("height", r);
          }, E.generateEventRectsForSingleX = function (t) {
            var e = this,
                n = e.d3,
                i = e.config;t.append("rect").attr("class", e.classEvent.bind(e)).style("cursor", i.data_selection_enabled && i.data_selection_grouped ? "pointer" : null).on("mouseover", function (t) {
              var n = t.index;e.dragging || e.flowing || e.hasArcType() || (i.point_focus_expand_enabled && e.expandCircles(n, null, !0), e.expandBars(n, null, !0), e.main.selectAll("." + u.shape + "-" + n).each(function (t) {
                i.data_onmouseover.call(e.api, t);
              }));
            }).on("mouseout", function (t) {
              var n = t.index;e.config && (e.hasArcType() || (e.hideXGridFocus(), e.hideTooltip(), e.unexpandCircles(), e.unexpandBars(), e.main.selectAll("." + u.shape + "-" + n).each(function (t) {
                i.data_onmouseout.call(e.api, t);
              })));
            }).on("mousemove", function (t) {
              var r,
                  a = t.index,
                  o = e.svg.select("." + u.eventRect + "-" + a);e.dragging || e.flowing || e.hasArcType() || (e.isStepType(t) && "step-after" === e.config.line_step_type && n.mouse(this)[0] < e.x(e.getXValue(t.id, a)) && (a -= 1), r = e.filterTargetsToShow(e.data.targets).map(function (t) {
                return e.addName(e.getValueOnIndex(t.values, a));
              }), i.tooltip_grouped && (e.showTooltip(r, this), e.showXGridFocus(r)), (!i.tooltip_grouped || i.data_selection_enabled && !i.data_selection_grouped) && e.main.selectAll("." + u.shape + "-" + a).each(function () {
                n.select(this).classed(u.EXPANDED, !0), i.data_selection_enabled && o.style("cursor", i.data_selection_grouped ? "pointer" : null), i.tooltip_grouped || (e.hideXGridFocus(), e.hideTooltip(), i.data_selection_grouped || (e.unexpandCircles(a), e.unexpandBars(a)));
              }).filter(function (t) {
                return e.isWithinShape(this, t);
              }).each(function (t) {
                i.data_selection_enabled && (i.data_selection_grouped || i.data_selection_isselectable(t)) && o.style("cursor", "pointer"), i.tooltip_grouped || (e.showTooltip([t], this), e.showXGridFocus([t]), i.point_focus_expand_enabled && e.expandCircles(a, t.id, !0), e.expandBars(a, t.id, !0));
              }));
            }).on("click", function (t) {
              var r = t.index;!e.hasArcType() && e.toggleShape && (e.cancelClick ? e.cancelClick = !1 : (e.isStepType(t) && "step-after" === i.line_step_type && n.mouse(this)[0] < e.x(e.getXValue(t.id, r)) && (r -= 1), e.main.selectAll("." + u.shape + "-" + r).each(function (t) {
                (i.data_selection_grouped || e.isWithinShape(this, t)) && (e.toggleShape(this, t, r), e.config.data_onclick.call(e.api, t, this));
              })));
            }).call(i.data_selection_draggable && e.drag ? n.behavior.drag().origin(Object).on("drag", function () {
              e.drag(n.mouse(this));
            }).on("dragstart", function () {
              e.dragstart(n.mouse(this));
            }).on("dragend", function () {
              e.dragend();
            }) : function () {});
          }, E.generateEventRectsForMultipleXs = function (t) {
            function e() {
              n.svg.select("." + u.eventRect).style("cursor", null), n.hideXGridFocus(), n.hideTooltip(), n.unexpandCircles(), n.unexpandBars();
            }var n = this,
                i = n.d3,
                r = n.config;t.append("rect").attr("x", 0).attr("y", 0).attr("width", n.width).attr("height", n.height).attr("class", u.eventRect).on("mouseout", function () {
              n.config && (n.hasArcType() || e());
            }).on("mousemove", function () {
              var t,
                  a,
                  o,
                  s = n.filterTargetsToShow(n.data.targets);n.dragging || n.hasArcType(s) || (t = i.mouse(this), a = n.findClosestFromTargets(s, t), !n.mouseover || a && a.id === n.mouseover.id || (r.data_onmouseout.call(n.api, n.mouseover), n.mouseover = void 0), a ? (o = (n.isScatterType(a) || !r.tooltip_grouped ? [a] : n.filterByX(s, a.x)).map(function (t) {
                return n.addName(t);
              }), n.showTooltip(o, this), r.point_focus_expand_enabled && n.expandCircles(a.index, a.id, !0), n.expandBars(a.index, a.id, !0), n.showXGridFocus(o), (n.isBarType(a.id) || n.dist(a, t) < r.point_sensitivity) && (n.svg.select("." + u.eventRect).style("cursor", "pointer"), n.mouseover || (r.data_onmouseover.call(n.api, a), n.mouseover = a))) : e());
            }).on("click", function () {
              var t,
                  e,
                  a = n.filterTargetsToShow(n.data.targets);n.hasArcType(a) || (t = i.mouse(this), (e = n.findClosestFromTargets(a, t)) && (n.isBarType(e.id) || n.dist(e, t) < r.point_sensitivity) && n.main.selectAll("." + u.shapes + n.getTargetSelectorSuffix(e.id)).selectAll("." + u.shape + "-" + e.index).each(function () {
                (r.data_selection_grouped || n.isWithinShape(this, e)) && (n.toggleShape(this, e, e.index), n.config.data_onclick.call(n.api, e, this));
              }));
            }).call(r.data_selection_draggable && n.drag ? i.behavior.drag().origin(Object).on("drag", function () {
              n.drag(i.mouse(this));
            }).on("dragstart", function () {
              n.dragstart(i.mouse(this));
            }).on("dragend", function () {
              n.dragend();
            }) : function () {});
          }, E.dispatchEvent = function (t, e, n) {
            var i = this,
                r = "." + u.eventRect + (i.isMultipleX() ? "" : "-" + e),
                a = i.main.select(r).node(),
                o = a.getBoundingClientRect(),
                s = o.left + (n ? n[0] : 0),
                c = o.top + (n ? n[1] : 0),
                l = document.createEvent("MouseEvents");l.initMouseEvent(t, !0, !0, window, 0, s, c, s, c, !1, !1, !1, !1, 0, null), a.dispatchEvent(l);
          }, E.initLegend = function () {
            var t = this;if (t.legendItemTextBox = {}, t.legendHasRendered = !1, t.legend = t.svg.append("g").attr("transform", t.getTranslate("legend")), !t.config.legend_show) return t.legend.style("visibility", "hidden"), void (t.hiddenLegendIds = t.mapToIds(t.data.targets));t.updateLegendWithDefaults();
          }, E.updateLegendWithDefaults = function () {
            var t = this;t.updateLegend(t.mapToIds(t.data.targets), { withTransform: !1, withTransitionForTransform: !1, withTransition: !1 });
          }, E.updateSizeForLegend = function (t, e) {
            var n = this,
                i = n.config,
                r = { top: n.isLegendTop ? n.getCurrentPaddingTop() + i.legend_inset_y + 5.5 : n.currentHeight - t - n.getCurrentPaddingBottom() - i.legend_inset_y, left: n.isLegendLeft ? n.getCurrentPaddingLeft() + i.legend_inset_x + .5 : n.currentWidth - e - n.getCurrentPaddingRight() - i.legend_inset_x + .5 };n.margin3 = { top: n.isLegendRight ? 0 : n.isLegendInset ? r.top : n.currentHeight - t, right: NaN, bottom: 0, left: n.isLegendRight ? n.currentWidth - e : n.isLegendInset ? r.left : 0 };
          }, E.transformLegend = function (t) {
            var e = this;(t ? e.legend.transition() : e.legend).attr("transform", e.getTranslate("legend"));
          }, E.updateLegendStep = function (t) {
            this.legendStep = t;
          }, E.updateLegendItemWidth = function (t) {
            this.legendItemWidth = t;
          }, E.updateLegendItemHeight = function (t) {
            this.legendItemHeight = t;
          }, E.getLegendWidth = function () {
            var t = this;return t.config.legend_show ? t.isLegendRight || t.isLegendInset ? t.legendItemWidth * (t.legendStep + 1) : t.currentWidth : 0;
          }, E.getLegendHeight = function () {
            var t = this,
                e = 0;return t.config.legend_show && (e = t.isLegendRight ? t.currentHeight : Math.max(20, t.legendItemHeight) * (t.legendStep + 1)), e;
          }, E.opacityForLegend = function (t) {
            return t.classed(u.legendItemHidden) ? null : 1;
          }, E.opacityForUnfocusedLegend = function (t) {
            return t.classed(u.legendItemHidden) ? null : .3;
          }, E.toggleFocusLegend = function (t, e) {
            var n = this;t = n.mapToTargetIds(t), n.legend.selectAll("." + u.legendItem).filter(function (e) {
              return t.indexOf(e) >= 0;
            }).classed(u.legendItemFocused, e).transition().duration(100).style("opacity", function () {
              return (e ? n.opacityForLegend : n.opacityForUnfocusedLegend).call(n, n.d3.select(this));
            });
          }, E.revertLegend = function () {
            var t = this,
                e = t.d3;t.legend.selectAll("." + u.legendItem).classed(u.legendItemFocused, !1).transition().duration(100).style("opacity", function () {
              return t.opacityForLegend(e.select(this));
            });
          }, E.showLegend = function (t) {
            var e = this,
                n = e.config;n.legend_show || (n.legend_show = !0, e.legend.style("visibility", "visible"), e.legendHasRendered || e.updateLegendWithDefaults()), e.removeHiddenLegendIds(t), e.legend.selectAll(e.selectorLegends(t)).style("visibility", "visible").transition().style("opacity", function () {
              return e.opacityForLegend(e.d3.select(this));
            });
          }, E.hideLegend = function (t) {
            var e = this,
                n = e.config;n.legend_show && S(t) && (n.legend_show = !1, e.legend.style("visibility", "hidden")), e.addHiddenLegendIds(t), e.legend.selectAll(e.selectorLegends(t)).style("opacity", 0).style("visibility", "hidden");
          }, E.clearLegendItemTextBoxCache = function () {
            this.legendItemTextBox = {};
          }, E.updateLegend = function (t, e, n) {
            function i(t, e) {
              return b.legendItemTextBox[e] || (b.legendItemTextBox[e] = b.getTextRect(t.textContent, u.legendItem, t)), b.legendItemTextBox[e];
            }function r(e, n, r) {
              function a(t, e) {
                e || (o = (g - G - f) / 2) < E && (o = (g - f) / 2, G = 0, N++), D[t] = N, I[N] = b.isLegendInset ? 10 : o, k[t] = G, G += f;
              }var o,
                  s,
                  u = 0 === r,
                  c = r === t.length - 1,
                  l = i(e, n),
                  h = l.width + V + (!c || b.isLegendRight || b.isLegendInset ? C : 0) + T.legend_padding,
                  d = l.height + P,
                  f = b.isLegendRight || b.isLegendInset ? d : h,
                  g = b.isLegendRight || b.isLegendInset ? b.getLegendHeight() : b.getLegendWidth();u && (G = 0, N = 0, L = 0, M = 0), !T.legend_show || b.isLegendToShow(n) ? (R[n] = h, O[n] = d, (!L || h >= L) && (L = h), (!M || d >= M) && (M = d), s = b.isLegendRight || b.isLegendInset ? M : L, T.legend_equally ? (Object.keys(R).forEach(function (t) {
                R[t] = L;
              }), Object.keys(O).forEach(function (t) {
                O[t] = M;
              }), (o = (g - s * t.length) / 2) < E ? (G = 0, N = 0, t.forEach(function (t) {
                a(t);
              })) : a(n, !0)) : a(n)) : R[n] = O[n] = D[n] = k[n] = 0;
            }var a,
                o,
                s,
                c,
                l,
                h,
                d,
                f,
                g,
                p,
                x,
                _,
                v,
                m,
                w,
                S,
                b = this,
                T = b.config,
                P = 4,
                C = 10,
                L = 0,
                M = 0,
                E = 10,
                V = T.legend_item_tile_width + 5,
                G = 0,
                k = {},
                R = {},
                O = {},
                I = [0],
                D = {},
                N = 0;t = t.filter(function (t) {
              return !y(T.data_names[t]) || null !== T.data_names[t];
            }), x = A(e = e || {}, "withTransition", !0), _ = A(e, "withTransitionForTransform", !0), b.isLegendInset && (N = T.legend_inset_step ? T.legend_inset_step : t.length, b.updateLegendStep(N)), b.isLegendRight ? (a = function a(t) {
              return L * D[t];
            }, c = function c(t) {
              return I[D[t]] + k[t];
            }) : b.isLegendInset ? (a = function a(t) {
              return L * D[t] + 10;
            }, c = function c(t) {
              return I[D[t]] + k[t];
            }) : (a = function a(t) {
              return I[D[t]] + k[t];
            }, c = function c(t) {
              return M * D[t];
            }), o = function o(t, e) {
              return a(t, e) + 4 + T.legend_item_tile_width;
            }, l = function l(t, e) {
              return c(t, e) + 9;
            }, s = function s(t, e) {
              return a(t, e);
            }, h = function h(t, e) {
              return c(t, e) - 5;
            }, d = function d(t, e) {
              return a(t, e) - 2;
            }, f = function f(t, e) {
              return a(t, e) - 2 + T.legend_item_tile_width;
            }, g = function g(t, e) {
              return c(t, e) + 4;
            }, (p = b.legend.selectAll("." + u.legendItem).data(t).enter().append("g").attr("class", function (t) {
              return b.generateClass(u.legendItem, t);
            }).style("visibility", function (t) {
              return b.isLegendToShow(t) ? "visible" : "hidden";
            }).style("cursor", "pointer").on("click", function (t) {
              T.legend_item_onclick ? T.legend_item_onclick.call(b, t) : b.d3.event.altKey ? (b.api.hide(), b.api.show(t)) : (b.api.toggle(t), b.isTargetToShow(t) ? b.api.focus(t) : b.api.revert());
            }).on("mouseover", function (t) {
              T.legend_item_onmouseover ? T.legend_item_onmouseover.call(b, t) : (b.d3.select(this).classed(u.legendItemFocused, !0), !b.transiting && b.isTargetToShow(t) && b.api.focus(t));
            }).on("mouseout", function (t) {
              T.legend_item_onmouseout ? T.legend_item_onmouseout.call(b, t) : (b.d3.select(this).classed(u.legendItemFocused, !1), b.api.revert());
            })).append("text").text(function (t) {
              return y(T.data_names[t]) ? T.data_names[t] : t;
            }).each(function (t, e) {
              r(this, t, e);
            }).style("pointer-events", "none").attr("x", b.isLegendRight || b.isLegendInset ? o : -200).attr("y", b.isLegendRight || b.isLegendInset ? -200 : l), p.append("rect").attr("class", u.legendItemEvent).style("fill-opacity", 0).attr("x", b.isLegendRight || b.isLegendInset ? s : -200).attr("y", b.isLegendRight || b.isLegendInset ? -200 : h), p.append("line").attr("class", u.legendItemTile).style("stroke", b.color).style("pointer-events", "none").attr("x1", b.isLegendRight || b.isLegendInset ? d : -200).attr("y1", b.isLegendRight || b.isLegendInset ? -200 : g).attr("x2", b.isLegendRight || b.isLegendInset ? f : -200).attr("y2", b.isLegendRight || b.isLegendInset ? -200 : g).attr("stroke-width", T.legend_item_tile_height), S = b.legend.select("." + u.legendBackground + " rect"), b.isLegendInset && L > 0 && 0 === S.size() && (S = b.legend.insert("g", "." + u.legendItem).attr("class", u.legendBackground).append("rect")), v = b.legend.selectAll("text").data(t).text(function (t) {
              return y(T.data_names[t]) ? T.data_names[t] : t;
            }).each(function (t, e) {
              r(this, t, e);
            }), (x ? v.transition() : v).attr("x", o).attr("y", l), m = b.legend.selectAll("rect." + u.legendItemEvent).data(t), (x ? m.transition() : m).attr("width", function (t) {
              return R[t];
            }).attr("height", function (t) {
              return O[t];
            }).attr("x", s).attr("y", h), w = b.legend.selectAll("line." + u.legendItemTile).data(t), (x ? w.transition() : w).style("stroke", b.levelColor ? function (t) {
              return b.levelColor(b.cache[t].values[0].value);
            } : b.color).attr("x1", d).attr("y1", g).attr("x2", f).attr("y2", g), S && (x ? S.transition() : S).attr("height", b.getLegendHeight() - 12).attr("width", L * (N + 1) + 10), b.legend.selectAll("." + u.legendItem).classed(u.legendItemHidden, function (t) {
              return !b.isTargetToShow(t);
            }), b.updateLegendItemWidth(L), b.updateLegendItemHeight(M), b.updateLegendStep(N), b.updateSizes(), b.updateScales(), b.updateSvgSize(), b.transformAll(_, n), b.legendHasRendered = !0;
          }, E.initRegion = function () {
            var t = this;t.region = t.main.append("g").attr("clip-path", t.clipPath).attr("class", u.regions);
          }, E.updateRegion = function (t) {
            var e = this,
                n = e.config;e.region.style("visibility", e.hasArcType() ? "hidden" : "visible"), e.mainRegion = e.main.select("." + u.regions).selectAll("." + u.region).data(n.regions);var i = e.mainRegion.enter().append("g");i.append("rect").attr("class", u.regionArea).style("fill-opacity", 0), i.append("rect").attr("class", u.regionStripe).style("fill-opacity", 0), i.append("text").attr("class", u.regionText).attr("dy", "0.5rem").attr("text-anchor", "end").text(function (t) {
              return t.text ? t.text : "";
            }).style("fill-opacity", 0), e.mainRegion.enter().append("g").append("rect").style("fill-opacity", 0), e.mainRegion.attr("class", e.classRegion.bind(e)), e.mainRegion.exit().transition().duration(t).style("opacity", 0).remove();
          }, E.redrawRegion = function (t) {
            var e = this,
                n = e.mainRegion.selectAll("rect." + u.regionArea).each(function () {
              var t = e.d3.select(this.parentNode).datum();e.d3.select(this).datum(t);
            }),
                i = e.mainRegion.selectAll("rect." + u.regionStripe).each(function () {
              var t = e.d3.select(this.parentNode).datum();e.d3.select(this).datum(t);
            }),
                r = e.mainRegion.selectAll("text." + u.regionText).each(function () {
              var t = e.d3.select(this.parentNode).datum();e.d3.select(this).datum(t);
            }),
                a = e.regionX.bind(e),
                o = e.regionY.bind(e),
                s = e.regionWidth.bind(e),
                c = e.regionHeight.bind(e);return [(t ? n.transition() : n).attr("x", a).attr("y", o).attr("width", s).attr("height", c).style("fill-opacity", function (t) {
              return f(t.opacity) ? t.opacity : .2;
            }), (t ? i.transition() : i).attr("x", a).attr("y", o).attr("width", s).attr("height", 2).style("fill-opacity", function (t) {
              return f(t.opacity) ? t.opacity : 1;
            }), (t ? r.transition() : r).attr("x", -50).attr("y", function (t) {
              return a(t) + s(t) / 2;
            }).style("fill-opacity", function (t) {
              return f(t.opacity) ? t.opacity : 1;
            })];
          }, E.regionX = function (t) {
            var e = this,
                n = e.config,
                i = "y" === t.axis ? e.y : e.y2;return "y" === t.axis || "y2" === t.axis ? n.axis_rotated && "start" in t ? i(t.start) : 0 : n.axis_rotated ? 0 : "start" in t ? e.x(e.isTimeSeries() ? e.parseDate(t.start) : t.start) : 0;
          }, E.regionY = function (t) {
            var e = this,
                n = e.config,
                i = "y" === t.axis ? e.y : e.y2;return "y" === t.axis || "y2" === t.axis ? n.axis_rotated ? 0 : "end" in t ? i(t.end) : 0 : n.axis_rotated && "start" in t ? e.x(e.isTimeSeries() ? e.parseDate(t.start) : t.start) : 0;
          }, E.regionWidth = function (t) {
            var e,
                n = this,
                i = n.config,
                r = n.regionX(t),
                a = "y" === t.axis ? n.y : n.y2;return (e = "y" === t.axis || "y2" === t.axis ? i.axis_rotated && "end" in t ? a(t.end) : n.width : i.axis_rotated ? n.width : "end" in t ? n.x(n.isTimeSeries() ? n.parseDate(t.end) : t.end) : n.width) < r ? 0 : e - r;
          }, E.regionHeight = function (t) {
            var e,
                n = this,
                i = n.config,
                r = this.regionY(t),
                a = "y" === t.axis ? n.y : n.y2;return (e = "y" === t.axis || "y2" === t.axis ? i.axis_rotated ? n.height : "start" in t ? a(t.start) : n.height : i.axis_rotated && "end" in t ? n.x(n.isTimeSeries() ? n.parseDate(t.end) : t.end) : n.height) < r ? 0 : e - r;
          }, E.isRegionOnX = function (t) {
            return !t.axis || "x" === t.axis;
          }, E.getScale = function (t, e, n) {
            return (n ? this.d3.time.scale() : this.d3.scale.linear()).range([t, e]);
          }, E.getX = function (t, e, n, i) {
            var r,
                a = this,
                o = a.getScale(t, e, a.isTimeSeries()),
                s = n ? o.domain(n) : o;a.isCategorized() ? (i = i || function () {
              return 0;
            }, o = function o(t, e) {
              var n = s(t) + i(t);return e ? n : Math.ceil(n);
            }) : o = function o(t, e) {
              var n = s(t);return e ? n : Math.ceil(n);
            };for (r in s) {
              o[r] = s[r];
            }return o.orgDomain = function () {
              return s.domain();
            }, a.isCategorized() && (o.domain = function (t) {
              return arguments.length ? (s.domain(t), o) : (t = this.orgDomain(), [t[0], t[1] + 1]);
            }), o;
          }, E.getY = function (t, e, n) {
            var i = this.getScale(t, e, this.isTimeSeriesY());return n && i.domain(n), i;
          }, E.getYScale = function (t) {
            return "y2" === this.axis.getId(t) ? this.y2 : this.y;
          }, E.getSubYScale = function (t) {
            return "y2" === this.axis.getId(t) ? this.subY2 : this.subY;
          }, E.updateScales = function () {
            var t = this,
                e = t.config,
                n = !t.x;t.xMin = e.axis_rotated ? 1 : 0, t.xMax = e.axis_rotated ? t.height : t.width, t.yMin = e.axis_rotated ? 0 : t.height, t.yMax = e.axis_rotated ? t.width : 1, t.subXMin = t.xMin, t.subXMax = t.xMax, t.subYMin = e.axis_rotated ? 0 : t.height2, t.subYMax = e.axis_rotated ? t.width2 : 1, t.x = t.getX(t.xMin, t.xMax, n ? void 0 : t.x.orgDomain(), function () {
              return t.xAxis.tickOffset();
            }), t.y = t.getY(t.yMin, t.yMax, n ? e.axis_y_default : t.y.domain()), t.y2 = t.getY(t.yMin, t.yMax, n ? e.axis_y2_default : t.y2.domain()), t.subX = t.getX(t.xMin, t.xMax, t.orgXDomain, function (e) {
              return e % 1 ? 0 : t.subXAxis.tickOffset();
            }), t.subY = t.getY(t.subYMin, t.subYMax, n ? e.axis_y_default : t.subY.domain()), t.subY2 = t.getY(t.subYMin, t.subYMax, n ? e.axis_y2_default : t.subY2.domain()), t.xAxisTickFormat = t.axis.getXAxisTickFormat(), t.xAxisTickValues = t.axis.getXAxisTickValues(), t.yAxisTickValues = t.axis.getYAxisTickValues(), t.y2AxisTickValues = t.axis.getY2AxisTickValues(), t.xAxis = t.axis.getXAxis(t.x, t.xOrient, t.xAxisTickFormat, t.xAxisTickValues, e.axis_x_tick_outer), t.subXAxis = t.axis.getXAxis(t.subX, t.subXOrient, t.xAxisTickFormat, t.xAxisTickValues, e.axis_x_tick_outer), t.yAxis = t.axis.getYAxis(t.y, t.yOrient, e.axis_y_tick_format, t.yAxisTickValues, e.axis_y_tick_outer), t.y2Axis = t.axis.getYAxis(t.y2, t.y2Orient, e.axis_y2_tick_format, t.y2AxisTickValues, e.axis_y2_tick_outer), n || (t.brush && t.brush.scale(t.subX), e.zoom_enabled && t.zoom.scale(t.x)), t.updateArc && t.updateArc();
          }, E.selectPoint = function (t, e, n) {
            var i = this,
                r = i.config,
                a = (r.axis_rotated ? i.circleY : i.circleX).bind(i),
                o = (r.axis_rotated ? i.circleX : i.circleY).bind(i),
                s = i.pointSelectR.bind(i);r.data_onselected.call(i.api, e, t.node()), i.main.select("." + u.selectedCircles + i.getTargetSelectorSuffix(e.id)).selectAll("." + u.selectedCircle + "-" + n).data([e]).enter().append("circle").attr("class", function () {
              return i.generateClass(u.selectedCircle, n);
            }).attr("cx", a).attr("cy", o).attr("stroke", function () {
              return i.color(e);
            }).attr("r", function (t) {
              return 1.4 * i.pointSelectR(t);
            }).transition().duration(100).attr("r", s);
          }, E.unselectPoint = function (t, e, n) {
            var i = this;i.config.data_onunselected.call(i.api, e, t.node()), i.main.select("." + u.selectedCircles + i.getTargetSelectorSuffix(e.id)).selectAll("." + u.selectedCircle + "-" + n).transition().duration(100).attr("r", 0).remove();
          }, E.togglePoint = function (t, e, n, i) {
            t ? this.selectPoint(e, n, i) : this.unselectPoint(e, n, i);
          }, E.selectPath = function (t, e) {
            var n = this;n.config.data_onselected.call(n, e, t.node()), n.config.interaction_brighten && t.transition().duration(100).style("fill", function () {
              return n.d3.rgb(n.color(e)).brighter(.75);
            });
          }, E.unselectPath = function (t, e) {
            var n = this;n.config.data_onunselected.call(n, e, t.node()), n.config.interaction_brighten && t.transition().duration(100).style("fill", function () {
              return n.color(e);
            });
          }, E.togglePath = function (t, e, n, i) {
            t ? this.selectPath(e, n, i) : this.unselectPath(e, n, i);
          }, E.getToggle = function (t, e) {
            var n,
                i = this;return "circle" === t.nodeName ? n = i.isStepType(e) ? function () {} : i.togglePoint : "path" === t.nodeName && (n = i.togglePath), n;
          }, E.toggleShape = function (t, e, n) {
            var i = this,
                r = i.d3,
                a = i.config,
                o = r.select(t),
                s = o.classed(u.SELECTED),
                c = i.getToggle(t, e).bind(i);a.data_selection_enabled && a.data_selection_isselectable(e) && (a.data_selection_multiple || i.main.selectAll("." + u.shapes + (a.data_selection_grouped ? i.getTargetSelectorSuffix(e.id) : "")).selectAll("." + u.shape).each(function (t, e) {
              var n = r.select(this);n.classed(u.SELECTED) && c(!1, n.classed(u.SELECTED, !1), t, e);
            }), o.classed(u.SELECTED, !s), c(!s, o, e, n));
          }, E.initBar = function () {
            this.main.select("." + u.chart).append("g").attr("class", u.chartBars);
          }, E.updateTargetsForBar = function (t) {
            var e = this,
                n = e.config,
                i = e.classChartBar.bind(e),
                r = e.classBars.bind(e),
                a = e.classFocus.bind(e);e.main.select("." + u.chartBars).selectAll("." + u.chartBar).data(t).attr("class", function (t) {
              return i(t) + a(t);
            }).enter().append("g").attr("class", i).style("pointer-events", "none").append("g").attr("class", r).style("cursor", function (t) {
              return n.data_selection_isselectable(t) ? "pointer" : null;
            });
          }, E.updateBar = function (t) {
            var e = this,
                n = e.barData.bind(e),
                i = e.classBar.bind(e),
                r = e.initialOpacity.bind(e),
                a = function a(t) {
              return e.color(t.id);
            };e.mainBar = e.main.selectAll("." + u.bars).selectAll("." + u.bar).data(n), e.mainBar.enter().append("path").attr("class", i).style("stroke", a).style("fill", a), e.mainBar.style("opacity", r), e.mainBar.exit().transition().duration(t).remove();
          }, E.redrawBar = function (t, e) {
            return [(e ? this.mainBar.transition(Math.random().toString()) : this.mainBar).attr("d", t).style("stroke", this.color).style("fill", this.color).style("opacity", 1)];
          }, E.getBarW = function (t, e) {
            var n = this.config,
                i = "number" == typeof n.bar_width ? n.bar_width : e ? t.tickInterval() * n.bar_width_ratio / e : 0;return n.bar_width_max && i > n.bar_width_max ? n.bar_width_max : i;
          }, E.getBars = function (t, e) {
            var n = this;return (e ? n.main.selectAll("." + u.bars + n.getTargetSelectorSuffix(e)) : n.main).selectAll("." + u.bar + (f(t) ? "-" + t : ""));
          }, E.expandBars = function (t, e, n) {
            var i = this;n && i.unexpandBars(), i.getBars(t, e).classed(u.EXPANDED, !0);
          }, E.unexpandBars = function (t) {
            this.getBars(t).classed(u.EXPANDED, !1);
          }, E.generateDrawBar = function (t, e) {
            var n = this,
                i = n.config,
                r = n.generateGetBarPoints(t, e);return function (t, e) {
              var n = r(t, e),
                  a = i.axis_rotated ? 1 : 0,
                  o = i.axis_rotated ? 0 : 1;return "M " + n[0][a] + "," + n[0][o] + " L" + n[1][a] + "," + n[1][o] + " L" + n[2][a] + "," + n[2][o] + " L" + n[3][a] + "," + n[3][o] + " z";
            };
          }, E.generateGetBarPoints = function (t, e) {
            var n = this,
                i = e ? n.subXAxis : n.xAxis,
                r = t.__max__ + 1,
                a = n.getBarW(i, r),
                o = n.getShapeX(a, r, t, !!e),
                s = n.getShapeY(!!e),
                u = n.getShapeOffset(n.isBarType, t, !!e),
                c = a * (n.config.bar_space / 2),
                l = e ? n.getSubYScale : n.getYScale;return function (t, e) {
              var i = l.call(n, t.id)(0),
                  r = u(t, e) || i,
                  h = o(t),
                  d = s(t);return n.config.axis_rotated && (0 < t.value && d < i || t.value < 0 && i < d) && (d = i), [[h + c, r], [h + c, d - (i - r)], [h + a - c, d - (i - r)], [h + a - c, r]];
            };
          }, E.isWithinBar = function (t) {
            var e = this.d3.mouse(t),
                n = t.getBoundingClientRect(),
                i = t.pathSegList.getItem(0),
                r = t.pathSegList.getItem(1),
                a = Math.min(i.x, r.x),
                o = Math.min(i.y, r.y),
                s = a + n.width + 2,
                u = o + n.height + 2,
                c = o - 2;return a - 2 < e[0] && e[0] < s && c < e[1] && e[1] < u;
          }, E.getShapeIndices = function (t) {
            var e,
                n,
                i = this,
                r = i.config,
                a = {},
                o = 0;return i.filterTargetsToShow(i.data.targets.filter(t, i)).forEach(function (t) {
              for (e = 0; e < r.data_groups.length; e++) {
                if (!(r.data_groups[e].indexOf(t.id) < 0)) for (n = 0; n < r.data_groups[e].length; n++) {
                  if (r.data_groups[e][n] in a) {
                    a[t.id] = a[r.data_groups[e][n]];break;
                  }
                }
              }_(a[t.id]) && (a[t.id] = o++);
            }), a.__max__ = o - 1, a;
          }, E.getShapeX = function (t, e, n, i) {
            var r = this,
                a = i ? r.subX : r.x;return function (i) {
              var r = i.id in n ? n[i.id] : 0;return i.x || 0 === i.x ? a(i.x) - t * (e / 2 - r) : 0;
            };
          }, E.getShapeY = function (t) {
            var e = this;return function (n) {
              return (t ? e.getSubYScale(n.id) : e.getYScale(n.id))(n.value);
            };
          }, E.getShapeOffset = function (t, e, n) {
            var i = this,
                r = i.orderTargets(i.filterTargetsToShow(i.data.targets.filter(t, i))),
                a = r.map(function (t) {
              return t.id;
            });return function (t, o) {
              var s = n ? i.getSubYScale(t.id) : i.getYScale(t.id),
                  u = s(0),
                  c = u;return r.forEach(function (n) {
                var r = i.isStepType(t) ? i.convertValuesToStep(n.values) : n.values;n.id !== t.id && e[n.id] === e[t.id] && a.indexOf(n.id) < a.indexOf(t.id) && (void 0 !== r[o] && +r[o].x == +t.x || (o = -1, r.forEach(function (e, n) {
                  e.x === t.x && (o = n);
                })), o in r && r[o].value * t.value >= 0 && (c += s(r[o].value) - u));
              }), c;
            };
          }, E.isWithinShape = function (t, e) {
            var n,
                i = this,
                r = i.d3.select(t);return i.isTargetToShow(e.id) ? "circle" === t.nodeName ? n = i.isStepType(e) ? i.isWithinStep(t, i.getYScale(e.id)(e.value)) : i.isWithinCircle(t, 1.5 * i.pointSelectR(e)) : "path" === t.nodeName && (n = !r.classed(u.bar) || i.isWithinBar(t)) : n = !1, n;
          }, E.getInterpolate = function (t) {
            var e = this,
                n = e.isInterpolationType(e.config.spline_interpolation_type) ? e.config.spline_interpolation_type : "cardinal";return e.isSplineType(t) ? n : e.isStepType(t) ? e.config.line_step_type : "linear";
          }, E.initLine = function () {
            this.main.select("." + u.chart).append("g").attr("class", u.chartLines);
          }, E.updateTargetsForLine = function (t) {
            var e,
                n = this,
                i = n.config,
                r = n.classChartLine.bind(n),
                a = n.classLines.bind(n),
                o = n.classAreas.bind(n),
                s = n.classCircles.bind(n),
                c = n.classFocus.bind(n);(e = n.main.select("." + u.chartLines).selectAll("." + u.chartLine).data(t).attr("class", function (t) {
              return r(t) + c(t);
            }).enter().append("g").attr("class", r).style("opacity", 0).style("pointer-events", "none")).append("g").attr("class", a), e.append("g").attr("class", o), e.append("g").attr("class", function (t) {
              return n.generateClass(u.selectedCircles, t.id);
            }), e.append("g").attr("class", s).style("cursor", function (t) {
              return i.data_selection_isselectable(t) ? "pointer" : null;
            }), t.forEach(function (t) {
              n.main.selectAll("." + u.selectedCircles + n.getTargetSelectorSuffix(t.id)).selectAll("." + u.selectedCircle).each(function (e) {
                e.value = t.values[e.index].value;
              });
            });
          }, E.updateLine = function (t) {
            var e = this;e.mainLine = e.main.selectAll("." + u.lines).selectAll("." + u.line).data(e.lineData.bind(e)), e.mainLine.enter().append("path").attr("class", e.classLine.bind(e)).style("stroke", e.color), e.mainLine.style("opacity", e.initialOpacity.bind(e)).style("shape-rendering", function (t) {
              return e.isStepType(t) ? "crispEdges" : "";
            }).attr("transform", null), e.mainLine.exit().transition().duration(t).style("opacity", 0).remove();
          }, E.redrawLine = function (t, e) {
            return [(e ? this.mainLine.transition(Math.random().toString()) : this.mainLine).attr("d", t).style("stroke", this.color).style("opacity", 1)];
          }, E.generateDrawLine = function (t, e) {
            var n = this,
                i = n.config,
                r = n.d3.svg.line(),
                a = n.generateGetLinePoints(t, e),
                o = e ? n.getSubYScale : n.getYScale,
                s = function s(t) {
              return (e ? n.subxx : n.xx).call(n, t);
            },
                u = function u(t, e) {
              return i.data_groups.length > 0 ? a(t, e)[0][1] : o.call(n, t.id)(t.value);
            };return r = i.axis_rotated ? r.x(u).y(s) : r.x(s).y(u), i.line_connectNull || (r = r.defined(function (t) {
              return null != t.value;
            })), function (t) {
              var a,
                  s = i.line_connectNull ? n.filterRemoveNull(t.values) : t.values,
                  u = e ? n.x : n.subX,
                  c = o.call(n, t.id),
                  l = 0,
                  h = 0;return n.isLineType(t) ? i.data_regions[t.id] ? a = n.lineWithRegions(s, u, c, i.data_regions[t.id]) : (n.isStepType(t) && (s = n.convertValuesToStep(s)), a = r.interpolate(n.getInterpolate(t))(s)) : (s[0] && (l = u(s[0].x), h = c(s[0].value)), a = i.axis_rotated ? "M " + h + " " + l : "M " + l + " " + h), a || "M 0 0";
            };
          }, E.generateGetLinePoints = function (t, e) {
            var n = this,
                i = n.config,
                r = t.__max__ + 1,
                a = n.getShapeX(0, r, t, !!e),
                o = n.getShapeY(!!e),
                s = n.getShapeOffset(n.isLineType, t, !!e),
                u = e ? n.getSubYScale : n.getYScale;return function (t, e) {
              var r = u.call(n, t.id)(0),
                  c = s(t, e) || r,
                  l = a(t),
                  h = o(t);return i.axis_rotated && (0 < t.value && h < r || t.value < 0 && r < h) && (h = r), [[l, h - (r - c)], [l, h - (r - c)], [l, h - (r - c)], [l, h - (r - c)]];
            };
          }, E.lineWithRegions = function (t, e, n, i) {
            function r(t) {
              return "M" + t[0][0] + " " + t[0][1] + " " + t[1][0] + " " + t[1][1];
            }var a,
                o,
                s,
                u,
                c,
                l,
                h,
                d,
                f,
                g,
                p,
                x = this,
                v = x.config,
                m = "M",
                w = x.isCategorized() ? .5 : 0,
                S = [];if (y(i)) for (a = 0; a < i.length; a++) {
              S[a] = {}, _(i[a].start) ? S[a].start = t[0].x : S[a].start = x.isTimeSeries() ? x.parseDate(i[a].start) : i[a].start, _(i[a].end) ? S[a].end = t[t.length - 1].x : S[a].end = x.isTimeSeries() ? x.parseDate(i[a].end) : i[a].end;
            }for (g = v.axis_rotated ? function (t) {
              return n(t.value);
            } : function (t) {
              return e(t.x);
            }, p = v.axis_rotated ? function (t) {
              return e(t.x);
            } : function (t) {
              return n(t.value);
            }, s = x.isTimeSeries() ? function (t, i, a, o) {
              var s,
                  u = t.x.getTime(),
                  l = i.x - t.x,
                  h = new Date(u + l * a),
                  d = new Date(u + l * (a + o));return s = v.axis_rotated ? [[n(c(a)), e(h)], [n(c(a + o)), e(d)]] : [[e(h), n(c(a))], [e(d), n(c(a + o))]], r(s);
            } : function (t, i, a, o) {
              var s;return s = v.axis_rotated ? [[n(c(a), !0), e(u(a))], [n(c(a + o), !0), e(u(a + o))]] : [[e(u(a), !0), n(c(a))], [e(u(a + o), !0), n(c(a + o))]], r(s);
            }, a = 0; a < t.length; a++) {
              if (_(S) || !function (t, e) {
                var n;for (n = 0; n < e.length; n++) {
                  if (e[n].start < t && t <= e[n].end) return !0;
                }return !1;
              }(t[a].x, S)) m += " " + g(t[a]) + " " + p(t[a]);else for (u = x.getScale(t[a - 1].x + w, t[a].x + w, x.isTimeSeries()), c = x.getScale(t[a - 1].value, t[a].value), l = e(t[a].x) - e(t[a - 1].x), h = n(t[a].value) - n(t[a - 1].value), f = 2 * (d = 2 / Math.sqrt(Math.pow(l, 2) + Math.pow(h, 2))), o = d; o <= 1; o += f) {
                m += s(t[a - 1], t[a], o, d);
              }
            }return m;
          }, E.updateArea = function (t) {
            var e = this,
                n = e.d3;e.mainArea = e.main.selectAll("." + u.areas).selectAll("." + u.area).data(e.lineData.bind(e)), e.mainArea.enter().append("path").attr("class", e.classArea.bind(e)).style("fill", e.color).style("opacity", function () {
              return e.orgAreaOpacity = +n.select(this).style("opacity"), 0;
            }), e.mainArea.style("opacity", e.orgAreaOpacity), e.mainArea.exit().transition().duration(t).style("opacity", 0).remove();
          }, E.redrawArea = function (t, e) {
            return [(e ? this.mainArea.transition(Math.random().toString()) : this.mainArea).attr("d", t).style("fill", this.color).style("opacity", this.orgAreaOpacity)];
          }, E.generateDrawArea = function (t, e) {
            var n = this,
                i = n.config,
                r = n.d3.svg.area(),
                a = n.generateGetAreaPoints(t, e),
                o = e ? n.getSubYScale : n.getYScale,
                s = function s(t, i) {
              return (e ? n.subxx : n.xx).call(n, t);
            },
                u = function u(t, e) {
              return n.isRibbonType(t) ? i.data_groups.length > 0 ? a(t, e)[0][1] : o.call(n, t.id)(t.ribbonYs.low) : i.data_groups.length > 0 ? a(t, e)[0][1] : o.call(n, t.id)(n.getAreaBaseValue(t.id));
            },
                c = function c(t, e) {
              return n.isRibbonType(t) ? i.data_groups.length > 0 ? a(t, e)[1][1] : o.call(n, t.id)(t.ribbonYs.high) : i.data_groups.length > 0 ? a(t, e)[1][1] : o.call(n, t.id)(t.value);
            };return r = i.axis_rotated ? r.x0(u).x1(c).y(s) : r.x(s).y0(i.area_above ? 0 : u).y1(c), i.line_connectNull || (r = r.defined(function (t) {
              return n.isRibbonType(t) ? null !== t.ribbonYs : null !== t.value;
            })), function (t) {
              var e,
                  a = i.line_connectNull && !n.isRibbonType(t) ? n.filterRemoveNull(t.values) : t.values,
                  o = 0,
                  s = 0;if (n.isAreaType(t)) {
                if (n.isStepType(t) && (a = n.convertValuesToStep(a)), n.isRibbonType(t)) {
                  for (var u = 0, c = a.length, l = 0, h = 0; h < c && null === a[h].ribbonYs.low && null === a[h].ribbonYs.high; h++) {
                    u++;
                  }for (h = c - 1; h > 0 && null === a[h].ribbonYs.low && null === a[h].ribbonYs.high; h--) {
                    l++;
                  }a = a.slice(u, a.length - l);
                }e = r.interpolate(n.getInterpolate(t))(a);
              } else a[0] && (o = n.x(a[0].x), s = n.getYScale(t.id)(a[0].value)), e = i.axis_rotated ? "M " + s + " " + o : "M " + o + " " + s;return e || "M 0 0";
            };
          }, E.getAreaBaseValue = function () {
            return 0;
          }, E.generateGetAreaPoints = function (t, e) {
            var n = this,
                i = n.config,
                r = t.__max__ + 1,
                a = n.getShapeX(0, r, t, !!e),
                o = n.getShapeY(!!e),
                s = n.getShapeOffset(n.isAreaType, t, !!e),
                u = e ? n.getSubYScale : n.getYScale;return function (t, e) {
              var r = u.call(n, t.id)(0),
                  c = s(t, e) || r,
                  l = a(t),
                  h = o(t);return i.axis_rotated && (0 < t.value && h < r || t.value < 0 && r < h) && (h = r), [[l, c], [l, h - (r - c)], [l, h - (r - c)], [l, c]];
            };
          }, E.updateCircle = function () {
            var t = this;t.mainCircle = t.main.selectAll("." + u.circles).selectAll("." + u.circle).data(t.lineOrScatterData.bind(t)), t.mainCircle.enter().append("circle").attr("class", t.classCircle.bind(t)).attr("r", t.pointR.bind(t)).style("fill", t.color), t.mainCircle.style("opacity", t.initialOpacityForCircle.bind(t)), t.mainCircle.exit().remove();
          }, E.redrawCircle = function (t, e, n) {
            var i = this.main.selectAll("." + u.selectedCircle);return [(n ? this.mainCircle.transition(Math.random().toString()) : this.mainCircle).style("opacity", this.opacityForCircle.bind(this)).style("fill", this.color).attr("cx", t).attr("cy", e), (n ? i.transition(Math.random().toString()) : i).attr("cx", t).attr("cy", e)];
          }, E.circleX = function (t) {
            return t.x || 0 === t.x ? this.x(t.x) : null;
          }, E.updateCircleY = function () {
            var t,
                e,
                n = this;n.config.data_groups.length > 0 ? (t = n.getShapeIndices(n.isLineType), e = n.generateGetLinePoints(t), n.circleY = function (t, n) {
              return e(t, n)[0][1];
            }) : n.circleY = function (t) {
              return n.getYScale(t.id)(t.value);
            };
          }, E.getCircles = function (t, e) {
            var n = this;return (e ? n.main.selectAll("." + u.circles + n.getTargetSelectorSuffix(e)) : n.main).selectAll("." + u.circle + (f(t) ? "-" + t : ""));
          }, E.expandCircles = function (t, e, n) {
            var i = this,
                r = i.pointExpandedR.bind(i);n && i.unexpandCircles(), i.getCircles(t, e).classed(u.EXPANDED, !0).attr("r", r);
          }, E.unexpandCircles = function (t) {
            var e = this,
                n = e.pointR.bind(e);e.getCircles(t).filter(function () {
              return e.d3.select(this).classed(u.EXPANDED);
            }).classed(u.EXPANDED, !1).attr("r", n);
          }, E.pointR = function (t) {
            var e = this,
                n = e.config;return e.isStepType(t) ? 0 : g(n.point_r) ? n.point_r(t) : n.point_r;
          }, E.pointExpandedR = function (t) {
            var e = this,
                n = e.config;return n.point_focus_expand_enabled ? g(n.point_focus_expand_r) ? n.point_focus_expand_r(t) : n.point_focus_expand_r ? n.point_focus_expand_r : 1.75 * e.pointR(t) : e.pointR(t);
          }, E.pointSelectR = function (t) {
            var e = this,
                n = e.config;return g(n.point_select_r) ? n.point_select_r(t) : n.point_select_r ? n.point_select_r : 4 * e.pointR(t);
          }, E.isWithinCircle = function (t, e) {
            var n = this.d3,
                i = n.mouse(t),
                r = n.select(t),
                a = +r.attr("cx"),
                o = +r.attr("cy");return Math.sqrt(Math.pow(a - i[0], 2) + Math.pow(o - i[1], 2)) < e;
          }, E.isWithinStep = function (t, e) {
            return Math.abs(e - this.d3.mouse(t)[1]) < 30;
          }, E.getCurrentWidth = function () {
            var t = this,
                e = t.config;return e.size_width ? e.size_width : t.getParentWidth();
          }, E.getCurrentHeight = function () {
            var t = this,
                e = t.config,
                n = e.size_height ? e.size_height : t.getParentHeight();return n > 0 ? n : 320 / (t.hasType("gauge") && !e.gauge_fullCircle ? 2 : 1);
          }, E.getCurrentPaddingTop = function () {
            var t = this,
                e = t.config,
                n = f(e.padding_top) ? e.padding_top : 0;return t.title && t.title.node() && (n += t.getTitlePadding()), n;
          }, E.getCurrentPaddingBottom = function () {
            var t = this.config;return f(t.padding_bottom) ? t.padding_bottom : 0;
          }, E.getCurrentPaddingLeft = function (t) {
            var e = this,
                n = e.config;return f(n.padding_left) ? n.padding_left : n.axis_rotated ? n.axis_x_show ? Math.max(v(e.getAxisWidthByAxisId("x", t)), 40) : 1 : !n.axis_y_show || n.axis_y_inner ? e.axis.getYAxisLabelPosition().isOuter ? 30 : 1 : v(e.getAxisWidthByAxisId("y", t));
          }, E.getCurrentPaddingRight = function () {
            var t = this,
                e = t.config,
                n = t.isLegendRight ? t.getLegendWidth() + 20 : 0;return f(e.padding_right) ? e.padding_right + 1 : e.axis_rotated ? 10 + n : !e.axis_y2_show || e.axis_y2_inner ? 2 + n + (t.axis.getY2AxisLabelPosition().isOuter ? 20 : 0) : v(t.getAxisWidthByAxisId("y2")) + n;
          }, E.getParentRectValue = function (t) {
            for (var e, n = this.selectChart.node(); n && "BODY" !== n.tagName;) {
              try {
                e = n.getBoundingClientRect()[t];
              } catch (i) {
                "width" === t && (e = n.offsetWidth);
              }if (e) break;n = n.parentNode;
            }return e;
          }, E.getParentWidth = function () {
            return this.getParentRectValue("width");
          }, E.getParentHeight = function () {
            var t = this.selectChart.style("height");return t.indexOf("px") > 0 ? +t.replace("px", "") : 0;
          }, E.getSvgLeft = function (t) {
            var e = this,
                n = e.config,
                i = n.axis_rotated || !n.axis_rotated && !n.axis_y_inner,
                r = n.axis_rotated ? u.axisX : u.axisY,
                a = e.main.select("." + r).node(),
                o = a && i ? a.getBoundingClientRect() : { right: 0 },
                s = e.selectChart.node().getBoundingClientRect(),
                c = e.hasArcType(),
                l = o.right - s.left - (c ? 0 : e.getCurrentPaddingLeft(t));return l > 0 ? l : 0;
          }, E.getAxisWidthByAxisId = function (t, e) {
            var n = this,
                i = n.axis.getLabelPositionById(t);return n.axis.getMaxTickWidth(t, e) + (i.isInner ? 20 : 40);
          }, E.getHorizontalAxisHeight = function (t) {
            var e = this,
                n = e.config,
                i = 30;return "x" !== t || n.axis_x_show ? "x" === t && n.axis_x_height ? n.axis_x_height : "y" !== t || n.axis_y_show ? "y2" !== t || n.axis_y2_show ? ("x" === t && !n.axis_rotated && n.axis_x_tick_rotate && (i = 30 + e.axis.getMaxTickWidth(t) * Math.cos(Math.PI * (90 - n.axis_x_tick_rotate) / 180)), "y" === t && n.axis_rotated && n.axis_y_tick_rotate && (i = 30 + e.axis.getMaxTickWidth(t) * Math.cos(Math.PI * (90 - n.axis_y_tick_rotate) / 180)), i + (e.axis.getLabelPositionById(t).isInner ? 0 : 10) + ("y2" === t ? -10 : 0)) : e.rotated_padding_top : !n.legend_show || e.isLegendRight || e.isLegendInset ? 1 : 10 : 8;
          }, E.getEventRectWidth = function () {
            return Math.max(0, this.xAxis.tickInterval());
          }, E.initBrush = function () {
            var t = this,
                e = t.d3;t.brush = e.svg.brush().on("brush", function () {
              t.redrawForBrush();
            }), t.brush.update = function () {
              return t.context && t.context.select("." + u.brush).call(this), this;
            }, t.brush.scale = function (e) {
              return t.config.axis_rotated ? this.y(e) : this.x(e);
            };
          }, E.initSubchart = function () {
            var t = this,
                e = t.config,
                n = t.context = t.svg.append("g").attr("transform", t.getTranslate("context")),
                i = e.subchart_show ? "visible" : "hidden";n.style("visibility", i), n.append("g").attr("clip-path", t.clipPathForSubchart).attr("class", u.chart), n.select("." + u.chart).append("g").attr("class", u.chartBars), n.select("." + u.chart).append("g").attr("class", u.chartLines), n.append("g").attr("clip-path", t.clipPath).attr("class", u.brush).call(t.brush), t.axes.subx = n.append("g").attr("class", u.axisX).attr("transform", t.getTranslate("subx")).attr("clip-path", e.axis_rotated ? "" : t.clipPathForXAxis).style("visibility", e.subchart_axis_x_show ? i : "hidden");
          }, E.updateTargetsForSubchart = function (t) {
            var e,
                n = this,
                i = n.context,
                r = n.config,
                a = n.classChartBar.bind(n),
                o = n.classBars.bind(n),
                s = n.classChartLine.bind(n),
                c = n.classLines.bind(n),
                l = n.classAreas.bind(n);r.subchart_show && (i.select("." + u.chartBars).selectAll("." + u.chartBar).data(t).attr("class", a).enter().append("g").style("opacity", 0).attr("class", a).append("g").attr("class", o), (e = i.select("." + u.chartLines).selectAll("." + u.chartLine).data(t).attr("class", s).enter().append("g").style("opacity", 0).attr("class", s)).append("g").attr("class", c), e.append("g").attr("class", l), i.selectAll("." + u.brush + " rect").attr(r.axis_rotated ? "width" : "height", r.axis_rotated ? n.width2 : n.height2));
          }, E.updateBarForSubchart = function (t) {
            var e = this;e.contextBar = e.context.selectAll("." + u.bars).selectAll("." + u.bar).data(e.barData.bind(e)), e.contextBar.enter().append("path").attr("class", e.classBar.bind(e)).style("stroke", "none").style("fill", e.color), e.contextBar.style("opacity", e.initialOpacity.bind(e)), e.contextBar.exit().transition().duration(t).style("opacity", 0).remove();
          }, E.redrawBarForSubchart = function (t, e, n) {
            (e ? this.contextBar.transition(Math.random().toString()).duration(n) : this.contextBar).attr("d", t).style("opacity", 1);
          }, E.updateLineForSubchart = function (t) {
            var e = this;e.contextLine = e.context.selectAll("." + u.lines).selectAll("." + u.line).data(e.lineData.bind(e)), e.contextLine.enter().append("path").attr("class", e.classLine.bind(e)).style("stroke", e.color), e.contextLine.style("opacity", e.initialOpacity.bind(e)), e.contextLine.exit().transition().duration(t).style("opacity", 0).remove();
          }, E.redrawLineForSubchart = function (t, e, n) {
            (e ? this.contextLine.transition(Math.random().toString()).duration(n) : this.contextLine).attr("d", t).style("opacity", 1);
          }, E.updateAreaForSubchart = function (t) {
            var e = this,
                n = e.d3;e.contextArea = e.context.selectAll("." + u.areas).selectAll("." + u.area).data(e.lineData.bind(e)), e.contextArea.enter().append("path").attr("class", e.classArea.bind(e)).style("fill", e.color).style("opacity", function () {
              return e.orgAreaOpacity = +n.select(this).style("opacity"), 0;
            }), e.contextArea.style("opacity", 0), e.contextArea.exit().transition().duration(t).style("opacity", 0).remove();
          }, E.redrawAreaForSubchart = function (t, e, n) {
            (e ? this.contextArea.transition(Math.random().toString()).duration(n) : this.contextArea).attr("d", t).style("fill", this.color).style("opacity", this.orgAreaOpacity);
          }, E.redrawSubchart = function (t, e, n, i, r, a, o) {
            var s,
                u,
                c,
                l = this,
                h = l.d3,
                d = l.config;l.context.style("visibility", d.subchart_show ? "visible" : "hidden"), d.subchart_show && (h.event && "zoom" === h.event.type && l.brush.extent(l.x.orgDomain()).update(), t && (l.brush.empty() || l.brush.extent(l.x.orgDomain()).update(), s = l.generateDrawArea(r, !0), u = l.generateDrawBar(a, !0), c = l.generateDrawLine(o, !0), l.updateBarForSubchart(n), l.updateLineForSubchart(n), l.updateAreaForSubchart(n), l.redrawBarForSubchart(u, n, n), l.redrawLineForSubchart(c, n, n), l.redrawAreaForSubchart(s, n, n)));
          }, E.redrawForBrush = function () {
            var t = this,
                e = t.x;t.redraw({ withTransition: !1, withY: t.config.zoom_rescale, withSubchart: !1, withUpdateXDomain: !0, withDimension: !1 }), t.config.subchart_onbrush.call(t.api, e.orgDomain());
          }, E.transformContext = function (t, e) {
            var n,
                i = this;e && e.axisSubX ? n = e.axisSubX : (n = i.context.select("." + u.axisX), t && (n = n.transition())), i.context.attr("transform", i.getTranslate("context")), n.attr("transform", i.getTranslate("subx"));
          }, E.getDefaultExtent = function () {
            var t = this,
                e = t.config,
                n = g(e.axis_x_extent) ? e.axis_x_extent(t.getXDomain(t.data.targets)) : e.axis_x_extent;return t.isTimeSeries() && (n = [t.parseDate(n[0]), t.parseDate(n[1])]), n;
          }, E.initText = function () {
            var t = this;t.main.select("." + u.chart).append("g").attr("class", u.chartTexts), t.mainText = t.d3.selectAll([]);
          }, E.updateTargetsForText = function (t) {
            var e = this,
                n = e.classChartText.bind(e),
                i = e.classTexts.bind(e),
                r = e.classFocus.bind(e);e.main.select("." + u.chartTexts).selectAll("." + u.chartText).data(t).attr("class", function (t) {
              return n(t) + r(t);
            }).enter().append("g").attr("class", n).style("opacity", 0).style("pointer-events", "none").append("g").attr("class", i);
          }, E.updateText = function (t) {
            var e = this,
                n = e.config,
                i = e.barOrLineData.bind(e),
                r = e.classText.bind(e);e.mainText = e.main.selectAll("." + u.texts).selectAll("." + u.text).data(i), e.mainText.enter().append("text").attr("class", r).attr("text-anchor", function (t) {
              return n.axis_rotated ? t.value < 0 ? "end" : "start" : "middle";
            }).style("stroke", "none").style("fill", function (t) {
              return e.color(t);
            }).style("fill-opacity", 0), e.mainText.text(function (t, n, i) {
              return e.dataLabelFormat(t.id)(t.value, t.id, n, i);
            }), e.mainText.exit().transition().duration(t).style("fill-opacity", 0).remove();
          }, E.redrawText = function (t, e, n, i) {
            return [(i ? this.mainText.transition() : this.mainText).attr("x", t).attr("y", e).style("fill", this.color).style("fill-opacity", n ? 0 : this.opacityForText.bind(this))];
          }, E.getTextRect = function (t, e, n) {
            var i,
                r = this.d3.select("body").append("div").classed("c3", !0),
                a = r.append("svg").style("visibility", "hidden").style("position", "fixed").style("top", 0).style("left", 0),
                o = this.d3.select(n).style("font");return a.selectAll(".dummy").data([t]).enter().append("text").classed(e || "", !0).style("font", o).text(t).each(function () {
              i = this.getBoundingClientRect();
            }), r.remove(), i;
          }, E.generateXYForText = function (t, e, n, i) {
            var r = this,
                a = r.generateGetAreaPoints(t, !1),
                o = r.generateGetBarPoints(e, !1),
                s = r.generateGetLinePoints(n, !1),
                u = i ? r.getXForText : r.getYForText;return function (t, e) {
              var n = r.isAreaType(t) ? a : r.isBarType(t) ? o : s;return u.call(r, n(t, e), t, this);
            };
          }, E.getXForText = function (t, e, n) {
            var i,
                r,
                a = this,
                o = n.getBoundingClientRect();return a.config.axis_rotated ? (r = a.isBarType(e) ? 4 : 6, i = t[2][1] + r * (e.value < 0 ? -1 : 1)) : i = a.hasType("bar") ? (t[2][0] + t[0][0]) / 2 : t[0][0], null === e.value && (i > a.width ? i = a.width - o.width : i < 0 && (i = 4)), i;
          }, E.getYForText = function (t, e, n) {
            var i,
                r = this,
                a = n.getBoundingClientRect();return r.config.axis_rotated ? i = (t[0][0] + t[2][0] + .6 * a.height) / 2 : (i = t[2][1], e.value < 0 || 0 === e.value && !r.hasPositiveValue ? (i += a.height, r.isBarType(e) && r.isSafari() ? i -= 3 : !r.isBarType(e) && r.isChrome() && (i += 3)) : i += r.isBarType(e) ? -3 : -6), null !== e.value || r.config.axis_rotated || (i < a.height ? i = a.height : i > this.height && (i = this.height - 4)), i;
          }, E.initTitle = function () {
            var t = this;t.title = t.svg.append("text").text(t.config.title_text).attr("class", t.CLASS.title);
          }, E.redrawTitle = function () {
            var t = this;t.title.attr("x", t.xForTitle.bind(t)).attr("y", t.yForTitle.bind(t));
          }, E.xForTitle = function () {
            var t = this,
                e = t.config,
                n = e.title_position || "left";return n.indexOf("right") >= 0 ? t.currentWidth - t.getTextRect(t.title.node().textContent, t.CLASS.title, t.title.node()).width - e.title_padding.right : n.indexOf("center") >= 0 ? (t.currentWidth - t.getTextRect(t.title.node().textContent, t.CLASS.title, t.title.node()).width) / 2 : e.title_padding.left;
          }, E.yForTitle = function () {
            var t = this;return t.config.title_padding.top + t.getTextRect(t.title.node().textContent, t.CLASS.title, t.title.node()).height;
          }, E.getTitlePadding = function () {
            var t = this;return t.yForTitle() + t.config.title_padding.bottom;
          }, E.initTooltip = function () {
            var t,
                e = this,
                n = e.config;if (e.tooltip = e.selectChart.style("position", "relative").append("div").attr("class", u.tooltipContainer).style("position", "absolute").style("pointer-events", "none").style("display", "none"), n.tooltip_init_show) {
              if (e.isTimeSeries() && x(n.tooltip_init_x)) {
                for (n.tooltip_init_x = e.parseDate(n.tooltip_init_x), t = 0; t < e.data.targets[0].values.length && e.data.targets[0].values[t].x - n.tooltip_init_x != 0; t++) {}n.tooltip_init_x = t;
              }e.tooltip.html(n.tooltip_contents.call(e, e.data.targets.map(function (t) {
                return e.addName(t.values[n.tooltip_init_x]);
              }), e.axis.getXAxisTickFormat(), e.getYFormat(e.hasArcType()), e.color)), e.tooltip.style("top", n.tooltip_init_position.top).style("left", n.tooltip_init_position.left).style("display", "block");
            }
          }, E.getTooltipSortFunction = function () {
            var t = this,
                e = t.config;if (0 !== e.data_groups.length && void 0 === e.tooltip_order) {
              var n = t.orderTargets(t.data.targets).map(function (t) {
                return t.id;
              });return (t.isOrderAsc() || t.isOrderDesc()) && (n = n.reverse()), function (t, e) {
                return n.indexOf(t.id) - n.indexOf(e.id);
              };
            }var i = e.tooltip_order;void 0 === i && (i = e.data_order);var r = function r(t) {
              return t ? t.value : null;
            };if (x(i) && "asc" === i.toLowerCase()) return function (t, e) {
              return r(t) - r(e);
            };if (x(i) && "desc" === i.toLowerCase()) return function (t, e) {
              return r(e) - r(t);
            };if (g(i)) {
              var a = i;return void 0 === e.tooltip_order && (a = function a(t, e) {
                return i(t ? { id: t.id, values: [t] } : null, e ? { id: e.id, values: [e] } : null);
              }), a;
            }return p(i) ? function (t, e) {
              return i.indexOf(t.id) - i.indexOf(e.id);
            } : void 0;
          }, E.getTooltipContent = function (t, e, n, i) {
            var r,
                a,
                o,
                s,
                u,
                c,
                l = this,
                h = l.config,
                d = h.tooltip_format_title || e,
                f = h.tooltip_format_name || function (t) {
              return t;
            },
                g = h.tooltip_format_value || n,
                p = l.isOrderAsc(),
                x = [],
                _ = 0;for (a = 0; a < t.length; a++) {
              if (t[a]) {
                if (x.push({ id: t[a].id, value: t[a].value, name: t[a].name, index: t[a].index, x: t[a].x }), l.isRibbonType(t[a])) {
                  var y = t[a].name;x.push({ id: t[a].id, value: t[a].ribbonYs.low, name: y.concat(" low"), index: t[a].index, ribbonYs: t[a].ribbonYs, x: t[a].x }), x[a - _].value = t[a].ribbonYs.high, x[a - _].name = y.concat(" high");
                }
              } else _++;
            }if (0 === h.data_groups.length) x.sort(function (t, e) {
              var n = t ? t.value : null,
                  i = e ? e.value : null;return p ? n - i : i - n;
            });else {
              var v = l.orderTargets(l.data.targets).map(function (t) {
                return t.id;
              });x.sort(function (t, e) {
                var n = t ? t.value : null,
                    i = e ? e.value : null;return n > 0 && i > 0 && (n = t ? v.indexOf(t.id) : null, i = e ? v.indexOf(e.id) : null), p ? n - i : i - n;
              });
            }for (a = 0; a < x.length; a++) {
              if (x[a] && (x[a].value || 0 === x[a].value) && (r || (o = P(d ? d(x[a].x) : x[a].x), r = "<table class='" + l.CLASS.tooltip + "'>" + (o || 0 === o ? "<tr><th colspan='2'>" + o + "</th></tr>" : "")), void 0 !== (s = P(g(x[a].value, x[a].ratio, x[a].id, x[a].index, x))))) {
                if (null === x[a].name) continue;u = P(f(x[a].name, x[a].ratio, x[a].id, x[a].index)), c = l.levelColor ? l.levelColor(x[a].value) : i(x[a].id), r += "<tr class='" + l.CLASS.tooltipName + "-" + l.getTargetSelectorSuffix(x[a].id) + "'>", r += "<td class='name'><span style='background-color:" + c + "'></span>" + u + "</td>", r += "<td class='value'>" + s + "</td>", r += "</tr>";
              }
            }return r + "</table>";
          }, E.tooltipPosition = function (t, e, n, i) {
            var r,
                a,
                o,
                s,
                u,
                c = this,
                l = c.config,
                h = c.d3,
                d = c.hasArcType(),
                f = h.mouse(i);return d ? (a = (c.width - (c.isLegendRight ? c.getLegendWidth() : 0)) / 2 + f[0], s = (c.hasType("gauge") ? c.height : c.height / 2) + f[1] + 20) : (r = c.getSvgLeft(!0), l.axis_rotated ? (o = (a = r + f[0] + 100) + e, u = c.currentWidth - c.getCurrentPaddingRight(), s = c.x(t[0].x) + 20) : (o = (a = r + c.getCurrentPaddingLeft(!0) + c.x(t[0].x) + 20) + e, u = r + c.currentWidth - c.getCurrentPaddingRight(), s = f[1] + 15), o > u && (a -= o - u + 20), s + n > c.currentHeight && (s -= n + 30)), s < 0 && (s = 0), { top: s, left: a };
          }, E.showTooltip = function (t, e) {
            var n,
                i,
                r,
                a = this,
                o = a.config,
                s = a.hasArcType(),
                u = t.filter(function (t) {
              if (t) var e = void 0 == t.ribbonYs ? null : f(t.ribbonYs.high) && f(t.ribbonYs.low);return t && (f(t.value) || e);
            }),
                c = o.tooltip_position || E.tooltipPosition;0 !== u.length && o.tooltip_show && (a.tooltip.html(o.tooltip_contents.call(a, t, a.axis.getXAxisTickFormat(), a.getYFormat(s), a.color)).style("display", "block"), n = a.tooltip.property("offsetWidth"), i = a.tooltip.property("offsetHeight"), r = c.call(this, u, n, i, e), a.tooltip.style("top", r.top + "px").style("left", r.left + "px"));
          }, E.hideTooltip = function () {
            this.tooltip.style("display", "none");
          }, E.setTargetType = function (t, e) {
            var n = this,
                i = n.config;n.mapToTargetIds(t).forEach(function (t) {
              n.withoutFadeIn[t] = e === i.data_types[t], i.data_types[t] = e;
            }), t || (i.data_type = e);
          }, E.hasType = function (t, e) {
            var n = this,
                i = n.config.data_types,
                r = !1;return (e = e || n.data.targets) && e.length ? e.forEach(function (e) {
              var n = i[e.id];(n && n.indexOf(t) >= 0 || !n && "line" === t) && (r = !0);
            }) : Object.keys(i).length ? Object.keys(i).forEach(function (e) {
              i[e] === t && (r = !0);
            }) : r = n.config.data_type === t, r;
          }, E.hasArcType = function (t) {
            return this.hasType("pie", t) || this.hasType("donut", t) || this.hasType("gauge", t);
          }, E.isLineType = function (t) {
            var e = this.config,
                n = x(t) ? t : t.id;return !e.data_types[n] || ["line", "spline", "area", "area-spline", "step", "area-step", "ribbon-step", "ribbon-spline", "ribbon-line"].indexOf(e.data_types[n]) >= 0;
          }, E.isStepType = function (t) {
            var e = x(t) ? t : t.id;return ["step", "area-step", "ribbon-step"].indexOf(this.config.data_types[e]) >= 0;
          }, E.isSplineType = function (t) {
            var e = x(t) ? t : t.id;return ["spline", "area-spline", "ribbon-spline"].indexOf(this.config.data_types[e]) >= 0;
          }, E.isAreaType = function (t) {
            var e = x(t) ? t : t.id;return ["area", "area-spline", "area-step", "ribbon-step", "ribbon-spline", "ribbon-line"].indexOf(this.config.data_types[e]) >= 0;
          }, E.isRibbonType = function (t) {
            var e = x(t) ? t : t.id;return ["ribbon-step", "ribbon-spline", "ribbon-line"].indexOf(this.config.data_types[e]) >= 0;
          }, E.isBarType = function (t) {
            var e = x(t) ? t : t.id;return "bar" === this.config.data_types[e];
          }, E.isScatterType = function (t) {
            var e = x(t) ? t : t.id;return "scatter" === this.config.data_types[e];
          }, E.isPieType = function (t) {
            var e = x(t) ? t : t.id;return "pie" === this.config.data_types[e];
          }, E.isGaugeType = function (t) {
            var e = x(t) ? t : t.id;return "gauge" === this.config.data_types[e];
          }, E.isDonutType = function (t) {
            var e = x(t) ? t : t.id;return "donut" === this.config.data_types[e];
          }, E.isArcType = function (t) {
            return this.isPieType(t) || this.isDonutType(t) || this.isGaugeType(t);
          }, E.lineData = function (t) {
            return this.isLineType(t) ? [t] : [];
          }, E.arcData = function (t) {
            return this.isArcType(t.data) ? [t] : [];
          }, E.barData = function (t) {
            return this.isBarType(t) ? t.values : [];
          }, E.lineOrScatterData = function (t) {
            return this.isLineType(t) || this.isScatterType(t) ? t.values : [];
          }, E.barOrLineData = function (t) {
            return this.isBarType(t) || this.isLineType(t) ? t.values : [];
          }, E.isInterpolationType = function (t) {
            return ["linear", "linear-closed", "basis", "basis-open", "basis-closed", "bundle", "cardinal", "cardinal-open", "cardinal-closed", "monotone"].indexOf(t) >= 0;
          }, E.isSafari = function () {
            var t = window.navigator.userAgent;return t.indexOf("Safari") >= 0 && t.indexOf("Chrome") < 0;
          }, E.isChrome = function () {
            return window.navigator.userAgent.indexOf("Chrome") >= 0;
          }, E.initZoom = function () {
            var t,
                e = this,
                n = e.d3,
                i = e.config;e.zoom = n.behavior.zoom().on("zoomstart", function () {
              t = n.event.sourceEvent, e.zoom.altDomain = n.event.sourceEvent.altKey ? e.x.orgDomain() : null, i.zoom_onzoomstart.call(e.api, n.event.sourceEvent);
            }).on("zoom", function () {
              e.redrawForZoom.call(e);
            }).on("zoomend", function () {
              var r = n.event.sourceEvent;r && t.clientX === r.clientX && t.clientY === r.clientY || (e.redrawEventRect(), e.updateZoom(), i.zoom_onzoomend.call(e.api, e.x.orgDomain()));
            }), e.zoom.scale = function (t) {
              return i.axis_rotated ? this.y(t) : this.x(t);
            }, e.zoom.orgScaleExtent = function () {
              var t = i.zoom_extent ? i.zoom_extent : [1, 10];return [t[0], Math.max(e.getMaxDataCount() / t[1], t[1])];
            }, e.zoom.updateScaleExtent = function () {
              var t = w(e.x.orgDomain()) / w(e.getZoomDomain()),
                  n = this.orgScaleExtent();return this.scaleExtent([n[0] * t, n[1] * t]), this;
            };
          }, E.getZoomDomain = function () {
            var t = this,
                e = t.config,
                n = t.d3;return [n.min([t.orgXDomain[0], e.zoom_x_min]), n.max([t.orgXDomain[1], e.zoom_x_max])];
          }, E.updateZoom = function () {
            var t = this,
                e = t.config.zoom_enabled ? t.zoom : function () {};t.main.select("." + u.zoomRect).call(e).on("dblclick.zoom", null), t.main.selectAll("." + u.eventRect).call(e).on("dblclick.zoom", null);
          }, E.redrawForZoom = function () {
            var t = this,
                e = t.d3,
                n = t.config,
                i = t.zoom,
                r = t.x;if (n.zoom_enabled && 0 !== t.filterTargetsToShow(t.data.targets).length) {
              if ("mousemove" === e.event.sourceEvent.type && i.altDomain) return r.domain(i.altDomain), void i.scale(r).updateScaleExtent();t.isCategorized() && r.orgDomain()[0] === t.orgXDomain[0] && r.domain([t.orgXDomain[0] - 1e-10, r.orgDomain()[1]]), t.redraw({ withTransition: !1, withY: n.zoom_rescale, withSubchart: !1, withEventRect: !1, withDimension: !1 }), "mousemove" === e.event.sourceEvent.type && (t.cancelClick = !0), n.zoom_onzoom.call(t.api, r.orgDomain());
            }
          }, V;
        });
      }, { d3: 2 }], 2: [function (t, e, n) {
        "use strict";
        var i = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
          return typeof t === "undefined" ? "undefined" : _typeof(t);
        } : function (t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
        };!function () {
          function t(t) {
            return t && (t.ownerDocument || t.document || t).documentElement;
          }function n(t) {
            return t && (t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView);
          }function r(t, e) {
            return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
          }function a(t) {
            return null === t ? NaN : +t;
          }function o(t) {
            return !isNaN(t);
          }function s(t) {
            return { left: function left(e, n, i, r) {
                for (arguments.length < 3 && (i = 0), arguments.length < 4 && (r = e.length); i < r;) {
                  var a = i + r >>> 1;t(e[a], n) < 0 ? i = a + 1 : r = a;
                }return i;
              }, right: function right(e, n, i, r) {
                for (arguments.length < 3 && (i = 0), arguments.length < 4 && (r = e.length); i < r;) {
                  var a = i + r >>> 1;t(e[a], n) > 0 ? r = a : i = a + 1;
                }return i;
              } };
          }function u(t) {
            return t.length;
          }function c(t) {
            for (var e = 1; t * e % 1;) {
              e *= 10;
            }return e;
          }function l(t, e) {
            for (var n in e) {
              Object.defineProperty(t.prototype, n, { value: e[n], enumerable: !1 });
            }
          }function h() {
            this._ = Object.create(null);
          }function d(t) {
            return (t += "") === to || t[0] === eo ? eo + t : t;
          }function f(t) {
            return (t += "")[0] === eo ? t.slice(1) : t;
          }function g(t) {
            return d(t) in this._;
          }function p(t) {
            return (t = d(t)) in this._ && delete this._[t];
          }function x() {
            var t = [];for (var e in this._) {
              t.push(f(e));
            }return t;
          }function _() {
            var t = 0;for (var e in this._) {
              ++t;
            }return t;
          }function y() {
            for (var t in this._) {
              return !1;
            }return !0;
          }function v() {
            this._ = Object.create(null);
          }function m(t) {
            return t;
          }function w(t, e, n) {
            return function () {
              var i = n.apply(e, arguments);return i === e ? t : i;
            };
          }function S(t, e) {
            if (e in t) return e;e = e.charAt(0).toUpperCase() + e.slice(1);for (var n = 0, i = no.length; n < i; ++n) {
              var r = no[n] + e;if (r in t) return r;
            }
          }function b() {}function A() {}function T(t) {
            function e() {
              for (var e, i = n, r = -1, a = i.length; ++r < a;) {
                (e = i[r].on) && e.apply(this, arguments);
              }return t;
            }var n = [],
                i = new h();return e.on = function (e, r) {
              var a,
                  o = i.get(e);return arguments.length < 2 ? o && o.on : (o && (o.on = null, n = n.slice(0, a = n.indexOf(o)).concat(n.slice(a + 1)), i.remove(e)), r && n.push(i.set(e, { on: r })), t);
            }, e;
          }function P() {
            Ya.event.preventDefault();
          }function C() {
            for (var t, e = Ya.event; t = e.sourceEvent;) {
              e = t;
            }return e;
          }function L(t) {
            for (var e = new A(), n = 0, i = arguments.length; ++n < i;) {
              e[arguments[n]] = T(e);
            }return e.of = function (n, i) {
              return function (r) {
                try {
                  var a = r.sourceEvent = Ya.event;r.target = t, Ya.event = r, e[r.type].apply(n, i);
                } finally {
                  Ya.event = a;
                }
              };
            }, e;
          }function M(t) {
            return ro(t, uo), t;
          }function E(t) {
            return "function" == typeof t ? t : function () {
              return ao(t, this);
            };
          }function V(t) {
            return "function" == typeof t ? t : function () {
              return oo(t, this);
            };
          }function G(t, e) {
            return t = Ya.ns.qualify(t), null == e ? t.local ? function () {
              this.removeAttributeNS(t.space, t.local);
            } : function () {
              this.removeAttribute(t);
            } : "function" == typeof e ? t.local ? function () {
              var n = e.apply(this, arguments);null == n ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
            } : function () {
              var n = e.apply(this, arguments);null == n ? this.removeAttribute(t) : this.setAttribute(t, n);
            } : t.local ? function () {
              this.setAttributeNS(t.space, t.local, e);
            } : function () {
              this.setAttribute(t, e);
            };
          }function k(t) {
            return t.trim().replace(/\s+/g, " ");
          }function R(t) {
            return new RegExp("(?:^|\\s+)" + Ya.requote(t) + "(?:\\s+|$)", "g");
          }function O(t) {
            return (t + "").trim().split(/^|\s+/);
          }function I(t, e) {
            var n = (t = O(t).map(D)).length;return "function" == typeof e ? function () {
              for (var i = -1, r = e.apply(this, arguments); ++i < n;) {
                t[i](this, r);
              }
            } : function () {
              for (var i = -1; ++i < n;) {
                t[i](this, e);
              }
            };
          }function D(t) {
            var e = R(t);return function (n, i) {
              if (r = n.classList) return i ? r.add(t) : r.remove(t);var r = n.getAttribute("class") || "";i ? (e.lastIndex = 0, e.test(r) || n.setAttribute("class", k(r + " " + t))) : n.setAttribute("class", k(r.replace(e, " ")));
            };
          }function N(t, e, n) {
            return null == e ? function () {
              this.style.removeProperty(t);
            } : "function" == typeof e ? function () {
              var i = e.apply(this, arguments);null == i ? this.style.removeProperty(t) : this.style.setProperty(t, i, n);
            } : function () {
              this.style.setProperty(t, e, n);
            };
          }function F(t, e) {
            return null == e ? function () {
              delete this[t];
            } : "function" == typeof e ? function () {
              var n = e.apply(this, arguments);null == n ? delete this[t] : this[t] = n;
            } : function () {
              this[t] = e;
            };
          }function z(t) {
            return "function" == typeof t ? t : (t = Ya.ns.qualify(t)).local ? function () {
              return this.ownerDocument.createElementNS(t.space, t.local);
            } : function () {
              var e = this.ownerDocument,
                  n = this.namespaceURI;return n === co && e.documentElement.namespaceURI === co ? e.createElement(t) : e.createElementNS(n, t);
            };
          }function X() {
            var t = this.parentNode;t && t.removeChild(this);
          }function H(t) {
            return { __data__: t };
          }function Y(t) {
            return function () {
              return _so(this, t);
            };
          }function B(t) {
            return arguments.length || (t = r), function (e, n) {
              return e && n ? t(e.__data__, n.__data__) : !e - !n;
            };
          }function j(t, e) {
            for (var n = 0, i = t.length; n < i; n++) {
              for (var r, a = t[n], o = 0, s = a.length; o < s; o++) {
                (r = a[o]) && e(r, o, n);
              }
            }return t;
          }function U(t) {
            return ro(t, ho), t;
          }function q(t) {
            var e, n;return function (i, r, a) {
              var o,
                  s = t[a].update,
                  u = s.length;for (a != n && (n = a, e = 0), r >= e && (e = r + 1); !(o = s[e]) && ++e < u;) {}return o;
            };
          }function W(t, e, n) {
            function i() {
              var e = this[r];e && (this.removeEventListener(t, e, e.$), delete this[r]);
            }var r = "__on" + t,
                a = t.indexOf("."),
                o = Q;a > 0 && (t = t.slice(0, a));var s = fo.get(t);return s && (t = s, o = Z), a ? e ? function () {
              var a = o(e, ja(arguments));i.call(this), this.addEventListener(t, this[r] = a, a.$ = n), a._ = e;
            } : i : e ? b : function () {
              var e,
                  n = new RegExp("^__on([^.]+)" + Ya.requote(t) + "$");for (var i in this) {
                if (e = i.match(n)) {
                  var r = this[i];this.removeEventListener(e[1], r, r.$), delete this[i];
                }
              }
            };
          }function Q(t, e) {
            return function (n) {
              var i = Ya.event;Ya.event = n, e[0] = this.__data__;try {
                t.apply(this, e);
              } finally {
                Ya.event = i;
              }
            };
          }function Z(t, e) {
            var n = Q(t, e);return function (t) {
              var e = this,
                  i = t.relatedTarget;i && (i === e || 8 & i.compareDocumentPosition(e)) || n.call(e, t);
            };
          }function K(e) {
            var i = ".dragsuppress-" + ++po,
                r = "click" + i,
                a = Ya.select(n(e)).on("touchmove" + i, P).on("dragstart" + i, P).on("selectstart" + i, P);if (null == go && (go = !("onselectstart" in e) && S(e.style, "userSelect")), go) {
              var o = t(e).style,
                  s = o[go];o[go] = "none";
            }return function (t) {
              if (a.on(i, null), go && (o[go] = s), t) {
                var e = function e() {
                  a.on(r, null);
                };a.on(r, function () {
                  P(), e();
                }, !0), setTimeout(e, 0);
              }
            };
          }function $(t, e) {
            e.changedTouches && (e = e.changedTouches[0]);var i = t.ownerSVGElement || t;if (i.createSVGPoint) {
              var r = i.createSVGPoint();if (xo < 0) {
                var a = n(t);if (a.scrollX || a.scrollY) {
                  var o = (i = Ya.select("body").append("svg").style({ position: "absolute", top: 0, left: 0, margin: 0, padding: 0, border: "none" }, "important"))[0][0].getScreenCTM();xo = !(o.f || o.e), i.remove();
                }
              }return xo ? (r.x = e.pageX, r.y = e.pageY) : (r.x = e.clientX, r.y = e.clientY), r = r.matrixTransform(t.getScreenCTM().inverse()), [r.x, r.y];
            }var s = t.getBoundingClientRect();return [e.clientX - s.left - t.clientLeft, e.clientY - s.top - t.clientTop];
          }function J() {
            return Ya.event.changedTouches[0].identifier;
          }function tt(t) {
            return t > 0 ? 1 : t < 0 ? -1 : 0;
          }function et(t, e, n) {
            return (e[0] - t[0]) * (n[1] - t[1]) - (e[1] - t[1]) * (n[0] - t[0]);
          }function nt(t) {
            return t > 1 ? 0 : t < -1 ? vo : Math.acos(t);
          }function it(t) {
            return t > 1 ? So : t < -1 ? -So : Math.asin(t);
          }function rt(t) {
            return ((t = Math.exp(t)) - 1 / t) / 2;
          }function at(t) {
            return ((t = Math.exp(t)) + 1 / t) / 2;
          }function ot(t) {
            return ((t = Math.exp(2 * t)) - 1) / (t + 1);
          }function st(t) {
            return (t = Math.sin(t / 2)) * t;
          }function ut() {}function ct(t, e, n) {
            return this instanceof ct ? (this.h = +t, this.s = +e, void (this.l = +n)) : arguments.length < 2 ? t instanceof ct ? new ct(t.h, t.s, t.l) : bt("" + t, At, ct) : new ct(t, e, n);
          }function lt(t, e, n) {
            function i(t) {
              return t > 360 ? t -= 360 : t < 0 && (t += 360), t < 60 ? a + (o - a) * t / 60 : t < 180 ? o : t < 240 ? a + (o - a) * (240 - t) / 60 : a;
            }function r(t) {
              return Math.round(255 * i(t));
            }var a, o;return t = isNaN(t) ? 0 : (t %= 360) < 0 ? t + 360 : t, e = isNaN(e) ? 0 : e < 0 ? 0 : e > 1 ? 1 : e, n = n < 0 ? 0 : n > 1 ? 1 : n, o = n <= .5 ? n * (1 + e) : n + e - n * e, a = 2 * n - o, new vt(r(t + 120), r(t), r(t - 120));
          }function ht(t, e, n) {
            return this instanceof ht ? (this.h = +t, this.c = +e, void (this.l = +n)) : arguments.length < 2 ? t instanceof ht ? new ht(t.h, t.c, t.l) : t instanceof ft ? pt(t.l, t.a, t.b) : pt((t = Tt((t = Ya.rgb(t)).r, t.g, t.b)).l, t.a, t.b) : new ht(t, e, n);
          }function dt(t, e, n) {
            return isNaN(t) && (t = 0), isNaN(e) && (e = 0), new ft(n, Math.cos(t *= bo) * e, Math.sin(t) * e);
          }function ft(t, e, n) {
            return this instanceof ft ? (this.l = +t, this.a = +e, void (this.b = +n)) : arguments.length < 2 ? t instanceof ft ? new ft(t.l, t.a, t.b) : t instanceof ht ? dt(t.h, t.c, t.l) : Tt((t = vt(t)).r, t.g, t.b) : new ft(t, e, n);
          }function gt(t, e, n) {
            var i = (t + 16) / 116,
                r = i + e / 500,
                a = i - n / 200;return r = xt(r) * Go, i = xt(i) * ko, a = xt(a) * Ro, new vt(yt(3.2404542 * r - 1.5371385 * i - .4985314 * a), yt(-.969266 * r + 1.8760108 * i + .041556 * a), yt(.0556434 * r - .2040259 * i + 1.0572252 * a));
          }function pt(t, e, n) {
            return t > 0 ? new ht(Math.atan2(n, e) * Ao, Math.sqrt(e * e + n * n), t) : new ht(NaN, NaN, t);
          }function xt(t) {
            return t > .206893034 ? t * t * t : (t - 4 / 29) / 7.787037;
          }function _t(t) {
            return t > .008856 ? Math.pow(t, 1 / 3) : 7.787037 * t + 4 / 29;
          }function yt(t) {
            return Math.round(255 * (t <= .00304 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055));
          }function vt(t, e, n) {
            return this instanceof vt ? (this.r = ~~t, this.g = ~~e, void (this.b = ~~n)) : arguments.length < 2 ? t instanceof vt ? new vt(t.r, t.g, t.b) : bt("" + t, vt, lt) : new vt(t, e, n);
          }function mt(t) {
            return new vt(t >> 16, t >> 8 & 255, 255 & t);
          }function wt(t) {
            return mt(t) + "";
          }function St(t) {
            return t < 16 ? "0" + Math.max(0, t).toString(16) : Math.min(255, t).toString(16);
          }function bt(t, e, n) {
            var i,
                r,
                a,
                o = 0,
                s = 0,
                u = 0;if (i = /([a-z]+)\((.*)\)/.exec(t = t.toLowerCase())) switch (r = i[2].split(","), i[1]) {case "hsl":
                return n(parseFloat(r[0]), parseFloat(r[1]) / 100, parseFloat(r[2]) / 100);case "rgb":
                return e(Ct(r[0]), Ct(r[1]), Ct(r[2]));}return (a = Do.get(t)) ? e(a.r, a.g, a.b) : (null == t || "#" !== t.charAt(0) || isNaN(a = parseInt(t.slice(1), 16)) || (4 === t.length ? (o = (3840 & a) >> 4, o |= o >> 4, s = 240 & a, s |= s >> 4, u = 15 & a, u |= u << 4) : 7 === t.length && (o = (16711680 & a) >> 16, s = (65280 & a) >> 8, u = 255 & a)), e(o, s, u));
          }function At(t, e, n) {
            var i,
                r,
                a = Math.min(t /= 255, e /= 255, n /= 255),
                o = Math.max(t, e, n),
                s = o - a,
                u = (o + a) / 2;return s ? (r = u < .5 ? s / (o + a) : s / (2 - o - a), i = t == o ? (e - n) / s + (e < n ? 6 : 0) : e == o ? (n - t) / s + 2 : (t - e) / s + 4, i *= 60) : (i = NaN, r = u > 0 && u < 1 ? 0 : i), new ct(i, r, u);
          }function Tt(t, e, n) {
            var i = _t((.4124564 * (t = Pt(t)) + .3575761 * (e = Pt(e)) + .1804375 * (n = Pt(n))) / Go),
                r = _t((.2126729 * t + .7151522 * e + .072175 * n) / ko);return ft(116 * r - 16, 500 * (i - r), 200 * (r - _t((.0193339 * t + .119192 * e + .9503041 * n) / Ro)));
          }function Pt(t) {
            return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4);
          }function Ct(t) {
            var e = parseFloat(t);return "%" === t.charAt(t.length - 1) ? Math.round(2.55 * e) : e;
          }function Lt(t) {
            return "function" == typeof t ? t : function () {
              return t;
            };
          }function Mt(t) {
            return function (e, n, i) {
              return 2 === arguments.length && "function" == typeof n && (i = n, n = null), Et(e, n, t, i);
            };
          }function Et(t, e, n, i) {
            function r() {
              var t,
                  e = u.status;if (!e && Gt(u) || e >= 200 && e < 300 || 304 === e) {
                try {
                  t = n.call(a, u);
                } catch (t) {
                  return void o.error.call(a, t);
                }o.load.call(a, t);
              } else o.error.call(a, u);
            }var a = {},
                o = Ya.dispatch("beforesend", "progress", "load", "error"),
                s = {},
                u = new XMLHttpRequest(),
                c = null;return !this.XDomainRequest || "withCredentials" in u || !/^(http(s)?:)?\/\//.test(t) || (u = new XDomainRequest()), "onload" in u ? u.onload = u.onerror = r : u.onreadystatechange = function () {
              u.readyState > 3 && r();
            }, u.onprogress = function (t) {
              var e = Ya.event;Ya.event = t;try {
                o.progress.call(a, u);
              } finally {
                Ya.event = e;
              }
            }, a.header = function (t, e) {
              return t = (t + "").toLowerCase(), arguments.length < 2 ? s[t] : (null == e ? delete s[t] : s[t] = e + "", a);
            }, a.mimeType = function (t) {
              return arguments.length ? (e = null == t ? null : t + "", a) : e;
            }, a.responseType = function (t) {
              return arguments.length ? (c = t, a) : c;
            }, a.response = function (t) {
              return n = t, a;
            }, ["get", "post"].forEach(function (t) {
              a[t] = function () {
                return a.send.apply(a, [t].concat(ja(arguments)));
              };
            }), a.send = function (n, i, r) {
              if (2 === arguments.length && "function" == typeof i && (r = i, i = null), u.open(n, t, !0), null == e || "accept" in s || (s.accept = e + ",*/*"), u.setRequestHeader) for (var l in s) {
                u.setRequestHeader(l, s[l]);
              }return null != e && u.overrideMimeType && u.overrideMimeType(e), null != c && (u.responseType = c), null != r && a.on("error", r).on("load", function (t) {
                r(null, t);
              }), o.beforesend.call(a, u), u.send(null == i ? null : i), a;
            }, a.abort = function () {
              return u.abort(), a;
            }, Ya.rebind(a, o, "on"), null == i ? a : a.get(Vt(i));
          }function Vt(t) {
            return 1 === t.length ? function (e, n) {
              t(null == e ? n : null);
            } : t;
          }function Gt(t) {
            var e = t.responseType;return e && "text" !== e ? t.response : t.responseText;
          }function kt(t, e, n) {
            var i = arguments.length;i < 2 && (e = 0), i < 3 && (n = Date.now());var r = { c: t, t: n + e, n: null };return Fo ? Fo.n = r : No = r, Fo = r, zo || (Xo = clearTimeout(Xo), zo = 1, Ho(Rt)), r;
          }function Rt() {
            var t = Ot(),
                e = It() - t;e > 24 ? (isFinite(e) && (clearTimeout(Xo), Xo = setTimeout(Rt, e)), zo = 0) : (zo = 1, Ho(Rt));
          }function Ot() {
            for (var t = Date.now(), e = No; e;) {
              t >= e.t && e.c(t - e.t) && (e.c = null), e = e.n;
            }return t;
          }function It() {
            for (var t, e = No, n = 1 / 0; e;) {
              e.c ? (e.t < n && (n = e.t), e = (t = e).n) : e = t ? t.n = e.n : No = e.n;
            }return Fo = t, n;
          }function Dt(t, e) {
            return e - (t ? Math.ceil(Math.log(t) / Math.LN10) : 1);
          }function Nt(t) {
            var e = t.decimal,
                n = t.thousands,
                i = t.grouping,
                r = t.currency,
                a = i && n ? function (t, e) {
              for (var r = t.length, a = [], o = 0, s = i[0], u = 0; r > 0 && s > 0 && (u + s + 1 > e && (s = Math.max(1, e - u)), a.push(t.substring(r -= s, r + s)), !((u += s + 1) > e));) {
                s = i[o = (o + 1) % i.length];
              }return a.reverse().join(n);
            } : m;return function (t) {
              var n = Bo.exec(t),
                  i = n[1] || " ",
                  o = n[2] || ">",
                  s = n[3] || "-",
                  u = n[4] || "",
                  c = n[5],
                  l = +n[6],
                  h = n[7],
                  d = n[8],
                  f = n[9],
                  g = 1,
                  p = "",
                  x = "",
                  _ = !1,
                  y = !0;switch (d && (d = +d.substring(1)), (c || "0" === i && "=" === o) && (c = i = "0", o = "="), f) {case "n":
                  h = !0, f = "g";break;case "%":
                  g = 100, x = "%", f = "f";break;case "p":
                  g = 100, x = "%", f = "r";break;case "b":case "o":case "x":case "X":
                  "#" === u && (p = "0" + f.toLowerCase());case "c":
                  y = !1;case "d":
                  _ = !0, d = 0;break;case "s":
                  g = -1, f = "r";}"$" === u && (p = r[0], x = r[1]), "r" != f || d || (f = "g"), null != d && ("g" == f ? d = Math.max(1, Math.min(21, d)) : "e" != f && "f" != f || (d = Math.max(0, Math.min(20, d)))), f = jo.get(f) || Ft;var v = c && h;return function (t) {
                var n = x;if (_ && t % 1) return "";var r = t < 0 || 0 === t && 1 / t < 0 ? (t = -t, "-") : "-" === s ? "" : s;if (g < 0) {
                  var u = Ya.formatPrefix(t, d);t = u.scale(t), n = u.symbol + x;
                } else t *= g;var m,
                    w,
                    S = (t = f(t, d)).lastIndexOf(".");if (S < 0) {
                  var b = y ? t.lastIndexOf("e") : -1;b < 0 ? (m = t, w = "") : (m = t.substring(0, b), w = t.substring(b));
                } else m = t.substring(0, S), w = e + t.substring(S + 1);!c && h && (m = a(m, 1 / 0));var A = p.length + m.length + w.length + (v ? 0 : r.length),
                    T = A < l ? new Array(A = l - A + 1).join(i) : "";return v && (m = a(T + m, T.length ? l - w.length : 1 / 0)), r += p, t = m + w, ("<" === o ? r + t + T : ">" === o ? T + r + t : "^" === o ? T.substring(0, A >>= 1) + r + t + T.substring(A) : r + (v ? t : T + t)) + n;
              };
            };
          }function Ft(t) {
            return t + "";
          }function zt() {
            this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0]);
          }function Xt(t, e, n) {
            function i(e) {
              var n = t(e),
                  i = a(n, 1);return e - n < i - e ? n : i;
            }function r(n) {
              return e(n = t(new qo(n - 1)), 1), n;
            }function a(t, n) {
              return e(t = new qo(+t), n), t;
            }function o(t, i, a) {
              var o = r(t),
                  s = [];if (a > 1) for (; o < i;) {
                n(o) % a || s.push(new Date(+o)), e(o, 1);
              } else for (; o < i;) {
                s.push(new Date(+o)), e(o, 1);
              }return s;
            }t.floor = t, t.round = i, t.ceil = r, t.offset = a, t.range = o;var s = t.utc = Ht(t);return s.floor = s, s.round = Ht(i), s.ceil = Ht(r), s.offset = Ht(a), s.range = function (t, e, n) {
              try {
                qo = zt;var i = new zt();return i._ = t, o(i, e, n);
              } finally {
                qo = Date;
              }
            }, t;
          }function Ht(t) {
            return function (e, n) {
              try {
                qo = zt;var i = new zt();return i._ = e, t(i, n)._;
              } finally {
                qo = Date;
              }
            };
          }function Yt(t) {
            function e(t) {
              function e(e) {
                for (var n, r, a, o = [], s = -1, u = 0; ++s < i;) {
                  37 === t.charCodeAt(s) && (o.push(t.slice(u, s)), null != (r = Qo[n = t.charAt(++s)]) && (n = t.charAt(++s)), (a = m[n]) && (n = a(e, null == r ? "e" === n ? " " : "0" : r)), o.push(n), u = s + 1);
                }return o.push(t.slice(u, s)), o.join("");
              }var i = t.length;return e.parse = function (e) {
                var i = { y: 1900, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0, Z: null };if (n(i, t, e, 0) != e.length) return null;"p" in i && (i.H = i.H % 12 + 12 * i.p);var r = null != i.Z && qo !== zt,
                    a = new (r ? zt : qo)();return "j" in i ? a.setFullYear(i.y, 0, i.j) : "W" in i || "U" in i ? ("w" in i || (i.w = "W" in i ? 1 : 0), a.setFullYear(i.y, 0, 1), a.setFullYear(i.y, 0, "W" in i ? (i.w + 6) % 7 + 7 * i.W - (a.getDay() + 5) % 7 : i.w + 7 * i.U - (a.getDay() + 6) % 7)) : a.setFullYear(i.y, i.m, i.d), a.setHours(i.H + (i.Z / 100 | 0), i.M + i.Z % 100, i.S, i.L), r ? a._ : a;
              }, e.toString = function () {
                return t;
              }, e;
            }function n(t, e, n, i) {
              for (var r, a, o, s = 0, u = e.length, c = n.length; s < u;) {
                if (i >= c) return -1;if (37 === (r = e.charCodeAt(s++))) {
                  if (o = e.charAt(s++), !(a = w[o in Qo ? e.charAt(s++) : o]) || (i = a(t, n, i)) < 0) return -1;
                } else if (r != n.charCodeAt(i++)) return -1;
              }return i;
            }var i = t.dateTime,
                r = t.date,
                a = t.time,
                o = t.periods,
                s = t.days,
                u = t.shortDays,
                c = t.months,
                l = t.shortMonths;e.utc = function (t) {
              function n(t) {
                try {
                  var e = new (qo = zt)();return e._ = t, i(e);
                } finally {
                  qo = Date;
                }
              }var i = e(t);return n.parse = function (t) {
                try {
                  qo = zt;var e = i.parse(t);return e && e._;
                } finally {
                  qo = Date;
                }
              }, n.toString = i.toString, n;
            }, e.multi = e.utc.multi = ce;var h = Ya.map(),
                d = jt(s),
                f = Ut(s),
                g = jt(u),
                p = Ut(u),
                x = jt(c),
                _ = Ut(c),
                y = jt(l),
                v = Ut(l);o.forEach(function (t, e) {
              h.set(t.toLowerCase(), e);
            });var m = { a: function a(t) {
                return u[t.getDay()];
              }, A: function A(t) {
                return s[t.getDay()];
              }, b: function b(t) {
                return l[t.getMonth()];
              }, B: function B(t) {
                return c[t.getMonth()];
              }, c: e(i), d: function d(t, e) {
                return Bt(t.getDate(), e, 2);
              }, e: function e(t, _e3) {
                return Bt(t.getDate(), _e3, 2);
              }, H: function H(t, e) {
                return Bt(t.getHours(), e, 2);
              }, I: function I(t, e) {
                return Bt(t.getHours() % 12 || 12, e, 2);
              }, j: function j(t, e) {
                return Bt(1 + Uo.dayOfYear(t), e, 3);
              }, L: function L(t, e) {
                return Bt(t.getMilliseconds(), e, 3);
              }, m: function m(t, e) {
                return Bt(t.getMonth() + 1, e, 2);
              }, M: function M(t, e) {
                return Bt(t.getMinutes(), e, 2);
              }, p: function p(t) {
                return o[+(t.getHours() >= 12)];
              }, S: function S(t, e) {
                return Bt(t.getSeconds(), e, 2);
              }, U: function U(t, e) {
                return Bt(Uo.sundayOfYear(t), e, 2);
              }, w: function w(t) {
                return t.getDay();
              }, W: function W(t, e) {
                return Bt(Uo.mondayOfYear(t), e, 2);
              }, x: e(r), X: e(a), y: function y(t, e) {
                return Bt(t.getFullYear() % 100, e, 2);
              }, Y: function Y(t, e) {
                return Bt(t.getFullYear() % 1e4, e, 4);
              }, Z: se, "%": function _() {
                return "%";
              } },
                w = { a: function a(t, e, n) {
                g.lastIndex = 0;var i = g.exec(e.slice(n));return i ? (t.w = p.get(i[0].toLowerCase()), n + i[0].length) : -1;
              }, A: function A(t, e, n) {
                d.lastIndex = 0;var i = d.exec(e.slice(n));return i ? (t.w = f.get(i[0].toLowerCase()), n + i[0].length) : -1;
              }, b: function b(t, e, n) {
                y.lastIndex = 0;var i = y.exec(e.slice(n));return i ? (t.m = v.get(i[0].toLowerCase()), n + i[0].length) : -1;
              }, B: function B(t, e, n) {
                x.lastIndex = 0;var i = x.exec(e.slice(n));return i ? (t.m = _.get(i[0].toLowerCase()), n + i[0].length) : -1;
              }, c: function c(t, e, i) {
                return n(t, m.c.toString(), e, i);
              }, d: ee, e: ee, H: ie, I: ie, j: ne, L: oe, m: te, M: re, p: function p(t, e, n) {
                var i = h.get(e.slice(n, n += 2).toLowerCase());return null == i ? -1 : (t.p = i, n);
              }, S: ae, U: Wt, w: qt, W: Qt, x: function x(t, e, i) {
                return n(t, m.x.toString(), e, i);
              }, X: function X(t, e, i) {
                return n(t, m.X.toString(), e, i);
              }, y: Kt, Y: Zt, Z: $t, "%": ue };return e;
          }function Bt(t, e, n) {
            var i = t < 0 ? "-" : "",
                r = (i ? -t : t) + "",
                a = r.length;return i + (a < n ? new Array(n - a + 1).join(e) + r : r);
          }function jt(t) {
            return new RegExp("^(?:" + t.map(Ya.requote).join("|") + ")", "i");
          }function Ut(t) {
            for (var e = new h(), n = -1, i = t.length; ++n < i;) {
              e.set(t[n].toLowerCase(), n);
            }return e;
          }function qt(t, e, n) {
            Zo.lastIndex = 0;var i = Zo.exec(e.slice(n, n + 1));return i ? (t.w = +i[0], n + i[0].length) : -1;
          }function Wt(t, e, n) {
            Zo.lastIndex = 0;var i = Zo.exec(e.slice(n));return i ? (t.U = +i[0], n + i[0].length) : -1;
          }function Qt(t, e, n) {
            Zo.lastIndex = 0;var i = Zo.exec(e.slice(n));return i ? (t.W = +i[0], n + i[0].length) : -1;
          }function Zt(t, e, n) {
            Zo.lastIndex = 0;var i = Zo.exec(e.slice(n, n + 4));return i ? (t.y = +i[0], n + i[0].length) : -1;
          }function Kt(t, e, n) {
            Zo.lastIndex = 0;var i = Zo.exec(e.slice(n, n + 2));return i ? (t.y = Jt(+i[0]), n + i[0].length) : -1;
          }function $t(t, e, n) {
            return (/^[+-]\d{4}$/.test(e = e.slice(n, n + 5)) ? (t.Z = -e, n + 5) : -1
            );
          }function Jt(t) {
            return t + (t > 68 ? 1900 : 2e3);
          }function te(t, e, n) {
            Zo.lastIndex = 0;var i = Zo.exec(e.slice(n, n + 2));return i ? (t.m = i[0] - 1, n + i[0].length) : -1;
          }function ee(t, e, n) {
            Zo.lastIndex = 0;var i = Zo.exec(e.slice(n, n + 2));return i ? (t.d = +i[0], n + i[0].length) : -1;
          }function ne(t, e, n) {
            Zo.lastIndex = 0;var i = Zo.exec(e.slice(n, n + 3));return i ? (t.j = +i[0], n + i[0].length) : -1;
          }function ie(t, e, n) {
            Zo.lastIndex = 0;var i = Zo.exec(e.slice(n, n + 2));return i ? (t.H = +i[0], n + i[0].length) : -1;
          }function re(t, e, n) {
            Zo.lastIndex = 0;var i = Zo.exec(e.slice(n, n + 2));return i ? (t.M = +i[0], n + i[0].length) : -1;
          }function ae(t, e, n) {
            Zo.lastIndex = 0;var i = Zo.exec(e.slice(n, n + 2));return i ? (t.S = +i[0], n + i[0].length) : -1;
          }function oe(t, e, n) {
            Zo.lastIndex = 0;var i = Zo.exec(e.slice(n, n + 3));return i ? (t.L = +i[0], n + i[0].length) : -1;
          }function se(t) {
            var e = t.getTimezoneOffset(),
                n = e > 0 ? "-" : "+",
                i = Ja(e) / 60 | 0,
                r = Ja(e) % 60;return n + Bt(i, "0", 2) + Bt(r, "0", 2);
          }function ue(t, e, n) {
            Ko.lastIndex = 0;var i = Ko.exec(e.slice(n, n + 1));return i ? n + i[0].length : -1;
          }function ce(t) {
            for (var e = t.length, n = -1; ++n < e;) {
              t[n][0] = this(t[n][0]);
            }return function (e) {
              for (var n = 0, i = t[n]; !i[1](e);) {
                i = t[++n];
              }return i[0](e);
            };
          }function le() {}function he(t, e, n) {
            var i = n.s = t + e,
                r = i - t,
                a = i - r;n.t = t - a + (e - r);
          }function de(t, e) {
            t && es.hasOwnProperty(t.type) && es[t.type](t, e);
          }function fe(t, e, n) {
            var i,
                r = -1,
                a = t.length - n;for (e.lineStart(); ++r < a;) {
              i = t[r], e.point(i[0], i[1], i[2]);
            }e.lineEnd();
          }function ge(t, e) {
            var n = -1,
                i = t.length;for (e.polygonStart(); ++n < i;) {
              fe(t[n], e, 1);
            }e.polygonEnd();
          }function pe() {
            function t(t, e) {
              e = e * bo / 2 + vo / 4;var n = (t *= bo) - i,
                  o = n >= 0 ? 1 : -1,
                  s = o * n,
                  u = Math.cos(e),
                  c = Math.sin(e),
                  l = a * c,
                  h = r * u + l * Math.cos(s),
                  d = l * o * Math.sin(s);is.add(Math.atan2(d, h)), i = t, r = u, a = c;
            }var e, n, i, r, a;rs.point = function (o, s) {
              rs.point = t, i = (e = o) * bo, r = Math.cos(s = (n = s) * bo / 2 + vo / 4), a = Math.sin(s);
            }, rs.lineEnd = function () {
              t(e, n);
            };
          }function xe(t) {
            var e = t[0],
                n = t[1],
                i = Math.cos(n);return [i * Math.cos(e), i * Math.sin(e), Math.sin(n)];
          }function _e(t, e) {
            return t[0] * e[0] + t[1] * e[1] + t[2] * e[2];
          }function ye(t, e) {
            return [t[1] * e[2] - t[2] * e[1], t[2] * e[0] - t[0] * e[2], t[0] * e[1] - t[1] * e[0]];
          }function ve(t, e) {
            t[0] += e[0], t[1] += e[1], t[2] += e[2];
          }function me(t, e) {
            return [t[0] * e, t[1] * e, t[2] * e];
          }function we(t) {
            var e = Math.sqrt(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);t[0] /= e, t[1] /= e, t[2] /= e;
          }function Se(t) {
            return [Math.atan2(t[1], t[0]), it(t[2])];
          }function be(t, e) {
            return Ja(t[0] - e[0]) < _o && Ja(t[1] - e[1]) < _o;
          }function Ae(t, e) {
            t *= bo;var n = Math.cos(e *= bo);Te(n * Math.cos(t), n * Math.sin(t), Math.sin(e));
          }function Te(t, e, n) {
            ss += (t - ss) / ++as, us += (e - us) / as, cs += (n - cs) / as;
          }function Pe() {
            function t(t, r) {
              t *= bo;var a = Math.cos(r *= bo),
                  o = a * Math.cos(t),
                  s = a * Math.sin(t),
                  u = Math.sin(r),
                  c = Math.atan2(Math.sqrt((c = n * u - i * s) * c + (c = i * o - e * u) * c + (c = e * s - n * o) * c), e * o + n * s + i * u);os += c, ls += c * (e + (e = o)), hs += c * (n + (n = s)), ds += c * (i + (i = u)), Te(e, n, i);
            }var e, n, i;xs.point = function (r, a) {
              r *= bo;var o = Math.cos(a *= bo);e = o * Math.cos(r), n = o * Math.sin(r), i = Math.sin(a), xs.point = t, Te(e, n, i);
            };
          }function Ce() {
            xs.point = Ae;
          }function Le() {
            function t(t, e) {
              t *= bo;var n = Math.cos(e *= bo),
                  o = n * Math.cos(t),
                  s = n * Math.sin(t),
                  u = Math.sin(e),
                  c = r * u - a * s,
                  l = a * o - i * u,
                  h = i * s - r * o,
                  d = Math.sqrt(c * c + l * l + h * h),
                  f = i * o + r * s + a * u,
                  g = d && -nt(f) / d,
                  p = Math.atan2(d, f);fs += g * c, gs += g * l, ps += g * h, os += p, ls += p * (i + (i = o)), hs += p * (r + (r = s)), ds += p * (a + (a = u)), Te(i, r, a);
            }var e, n, i, r, a;xs.point = function (o, s) {
              e = o, n = s, xs.point = t, o *= bo;var u = Math.cos(s *= bo);i = u * Math.cos(o), r = u * Math.sin(o), a = Math.sin(s), Te(i, r, a);
            }, xs.lineEnd = function () {
              t(e, n), xs.lineEnd = Ce, xs.point = Ae;
            };
          }function Me(t, e) {
            function n(n, i) {
              return n = t(n, i), e(n[0], n[1]);
            }return t.invert && e.invert && (n.invert = function (n, i) {
              return (n = e.invert(n, i)) && t.invert(n[0], n[1]);
            }), n;
          }function Ee() {
            return !0;
          }function Ve(t, e, n, i, r) {
            var a = [],
                o = [];if (t.forEach(function (t) {
              if (!((e = t.length - 1) <= 0)) {
                var e,
                    n = t[0],
                    i = t[e];if (be(n, i)) {
                  r.lineStart();for (var s = 0; s < e; ++s) {
                    r.point((n = t[s])[0], n[1]);
                  }r.lineEnd();
                } else {
                  var u = new ke(n, t, null, !0),
                      c = new ke(n, null, u, !1);u.o = c, a.push(u), o.push(c), c = new ke(i, null, u = new ke(i, t, null, !1), !0), u.o = c, a.push(u), o.push(c);
                }
              }
            }), o.sort(e), Ge(a), Ge(o), a.length) {
              for (var s = 0, u = n, c = o.length; s < c; ++s) {
                o[s].e = u = !u;
              }for (var l, h, d = a[0];;) {
                for (var f = d, g = !0; f.v;) {
                  if ((f = f.n) === d) return;
                }l = f.z, r.lineStart();do {
                  if (f.v = f.o.v = !0, f.e) {
                    if (g) for (var s = 0, c = l.length; s < c; ++s) {
                      r.point((h = l[s])[0], h[1]);
                    } else i(f.x, f.n.x, 1, r);f = f.n;
                  } else {
                    if (g) for (s = (l = f.p.z).length - 1; s >= 0; --s) {
                      r.point((h = l[s])[0], h[1]);
                    } else i(f.x, f.p.x, -1, r);f = f.p;
                  }l = (f = f.o).z, g = !g;
                } while (!f.v);r.lineEnd();
              }
            }
          }function Ge(t) {
            if (e = t.length) {
              for (var e, n, i = 0, r = t[0]; ++i < e;) {
                r.n = n = t[i], n.p = r, r = n;
              }r.n = n = t[0], n.p = r;
            }
          }function ke(t, e, n, i) {
            this.x = t, this.z = e, this.o = n, this.e = i, this.v = !1, this.n = this.p = null;
          }function Re(t, e, n, i) {
            return function (r, a) {
              function o(e, n) {
                var i = r(e, n);t(e = i[0], n = i[1]) && a.point(e, n);
              }function s(t, e) {
                var n = r(t, e);x.point(n[0], n[1]);
              }function u() {
                y.point = s, x.lineStart();
              }function c() {
                y.point = o, x.lineEnd();
              }function l(t, e) {
                p.push([t, e]);var n = r(t, e);m.point(n[0], n[1]);
              }function h() {
                m.lineStart(), p = [];
              }function d() {
                l(p[0][0], p[0][1]), m.lineEnd();var t,
                    e = m.clean(),
                    n = v.buffer(),
                    i = n.length;if (p.pop(), g.push(p), p = null, i) if (1 & e) {
                  var r,
                      o = -1;if ((i = (t = n[0]).length - 1) > 0) {
                    for (w || (a.polygonStart(), w = !0), a.lineStart(); ++o < i;) {
                      a.point((r = t[o])[0], r[1]);
                    }a.lineEnd();
                  }
                } else i > 1 && 2 & e && n.push(n.pop().concat(n.shift())), f.push(n.filter(Oe));
              }var f,
                  g,
                  p,
                  x = e(a),
                  _ = r.invert(i[0], i[1]),
                  y = { point: o, lineStart: u, lineEnd: c, polygonStart: function polygonStart() {
                  y.point = l, y.lineStart = h, y.lineEnd = d, f = [], g = [];
                }, polygonEnd: function polygonEnd() {
                  y.point = o, y.lineStart = u, y.lineEnd = c, f = Ya.merge(f);var t = Fe(_, g);f.length ? (w || (a.polygonStart(), w = !0), Ve(f, De, t, n, a)) : t && (w || (a.polygonStart(), w = !0), a.lineStart(), n(null, null, 1, a), a.lineEnd()), w && (a.polygonEnd(), w = !1), f = g = null;
                }, sphere: function sphere() {
                  a.polygonStart(), a.lineStart(), n(null, null, 1, a), a.lineEnd(), a.polygonEnd();
                } },
                  v = Ie(),
                  m = e(v),
                  w = !1;return y;
            };
          }function Oe(t) {
            return t.length > 1;
          }function Ie() {
            var t,
                e = [];return { lineStart: function lineStart() {
                e.push(t = []);
              }, point: function point(e, n) {
                t.push([e, n]);
              }, lineEnd: b, buffer: function buffer() {
                var n = e;return e = [], t = null, n;
              }, rejoin: function rejoin() {
                e.length > 1 && e.push(e.pop().concat(e.shift()));
              } };
          }function De(t, e) {
            return ((t = t.x)[0] < 0 ? t[1] - So - _o : So - t[1]) - ((e = e.x)[0] < 0 ? e[1] - So - _o : So - e[1]);
          }function Ne(t, e, n, i) {
            var r,
                a,
                o = Math.sin(t - n);return Ja(o) > _o ? Math.atan((Math.sin(e) * (a = Math.cos(i)) * Math.sin(n) - Math.sin(i) * (r = Math.cos(e)) * Math.sin(t)) / (r * a * o)) : (e + i) / 2;
          }function Fe(t, e) {
            var n = t[0],
                i = t[1],
                r = [Math.sin(n), -Math.cos(n), 0],
                a = 0,
                o = 0;is.reset();for (var s = 0, u = e.length; s < u; ++s) {
              var c = e[s],
                  l = c.length;if (l) for (var h = c[0], d = h[0], f = h[1] / 2 + vo / 4, g = Math.sin(f), p = Math.cos(f), x = 1;;) {
                x === l && (x = 0);var _ = (t = c[x])[0],
                    y = t[1] / 2 + vo / 4,
                    v = Math.sin(y),
                    m = Math.cos(y),
                    w = _ - d,
                    S = w >= 0 ? 1 : -1,
                    b = S * w,
                    A = b > vo,
                    T = g * v;if (is.add(Math.atan2(T * S * Math.sin(b), p * m + T * Math.cos(b))), a += A ? w + S * mo : w, A ^ d >= n ^ _ >= n) {
                  var P = ye(xe(h), xe(t));we(P);var C = ye(r, P);we(C);var L = (A ^ w >= 0 ? -1 : 1) * it(C[2]);(i > L || i === L && (P[0] || P[1])) && (o += A ^ w >= 0 ? 1 : -1);
                }if (!x++) break;d = _, g = v, p = m, h = t;
              }
            }return (a < -_o || a < _o && is < -_o) ^ 1 & o;
          }function ze(t) {
            function e(t, e) {
              return Math.cos(t) * Math.cos(e) > r;
            }function n(t, e, n) {
              var i = [1, 0, 0],
                  a = ye(xe(t), xe(e)),
                  o = _e(a, a),
                  s = a[0],
                  u = o - s * s;if (!u) return !n && t;var c = r * o / u,
                  l = -r * s / u,
                  h = ye(i, a),
                  d = me(i, c);ve(d, me(a, l));var f = h,
                  g = _e(d, f),
                  p = _e(f, f),
                  x = g * g - p * (_e(d, d) - 1);if (!(x < 0)) {
                var _ = Math.sqrt(x),
                    y = me(f, (-g - _) / p);if (ve(y, d), y = Se(y), !n) return y;var v,
                    m = t[0],
                    w = e[0],
                    S = t[1],
                    b = e[1];w < m && (v = m, m = w, w = v);var A = w - m,
                    T = Ja(A - vo) < _o,
                    P = T || A < _o;if (!T && b < S && (v = S, S = b, b = v), P ? T ? S + b > 0 ^ y[1] < (Ja(y[0] - m) < _o ? S : b) : S <= y[1] && y[1] <= b : A > vo ^ (m <= y[0] && y[0] <= w)) {
                  var C = me(f, (-g + _) / p);return ve(C, d), [y, Se(C)];
                }
              }
            }function i(e, n) {
              var i = a ? t : vo - t,
                  r = 0;return e < -i ? r |= 1 : e > i && (r |= 2), n < -i ? r |= 4 : n > i && (r |= 8), r;
            }var r = Math.cos(t),
                a = r > 0,
                o = Ja(r) > _o;return Re(e, function (t) {
              var r, s, u, c, l;return { lineStart: function lineStart() {
                  c = u = !1, l = 1;
                }, point: function point(h, d) {
                  var f,
                      g = [h, d],
                      p = e(h, d),
                      x = a ? p ? 0 : i(h, d) : p ? i(h + (h < 0 ? vo : -vo), d) : 0;if (!r && (c = u = p) && t.lineStart(), p !== u && (f = n(r, g), (be(r, f) || be(g, f)) && (g[0] += _o, g[1] += _o, p = e(g[0], g[1]))), p !== u) l = 0, p ? (t.lineStart(), f = n(g, r), t.point(f[0], f[1])) : (f = n(r, g), t.point(f[0], f[1]), t.lineEnd()), r = f;else if (o && r && a ^ p) {
                    var _;x & s || !(_ = n(g, r, !0)) || (l = 0, a ? (t.lineStart(), t.point(_[0][0], _[0][1]), t.point(_[1][0], _[1][1]), t.lineEnd()) : (t.point(_[1][0], _[1][1]), t.lineEnd(), t.lineStart(), t.point(_[0][0], _[0][1])));
                  }!p || r && be(r, g) || t.point(g[0], g[1]), r = g, u = p, s = x;
                }, lineEnd: function lineEnd() {
                  u && t.lineEnd(), r = null;
                }, clean: function clean() {
                  return l | (c && u) << 1;
                } };
            }, fn(t, 6 * bo), a ? [0, -t] : [-vo, t - vo]);
          }function Xe(t, e, n, i) {
            return function (r) {
              var a,
                  o = r.a,
                  s = r.b,
                  u = o.x,
                  c = o.y,
                  l = 0,
                  h = 1,
                  d = s.x - u,
                  f = s.y - c;if (a = t - u, d || !(a > 0)) {
                if (a /= d, d < 0) {
                  if (a < l) return;a < h && (h = a);
                } else if (d > 0) {
                  if (a > h) return;a > l && (l = a);
                }if (a = n - u, d || !(a < 0)) {
                  if (a /= d, d < 0) {
                    if (a > h) return;a > l && (l = a);
                  } else if (d > 0) {
                    if (a < l) return;a < h && (h = a);
                  }if (a = e - c, f || !(a > 0)) {
                    if (a /= f, f < 0) {
                      if (a < l) return;a < h && (h = a);
                    } else if (f > 0) {
                      if (a > h) return;a > l && (l = a);
                    }if (a = i - c, f || !(a < 0)) {
                      if (a /= f, f < 0) {
                        if (a > h) return;a > l && (l = a);
                      } else if (f > 0) {
                        if (a < l) return;a < h && (h = a);
                      }return l > 0 && (r.a = { x: u + l * d, y: c + l * f }), h < 1 && (r.b = { x: u + h * d, y: c + h * f }), r;
                    }
                  }
                }
              }
            };
          }function He(t, e, n, i) {
            function r(i, r) {
              return Ja(i[0] - t) < _o ? r > 0 ? 0 : 3 : Ja(i[0] - n) < _o ? r > 0 ? 2 : 1 : Ja(i[1] - e) < _o ? r > 0 ? 1 : 0 : r > 0 ? 3 : 2;
            }function a(t, e) {
              return o(t.x, e.x);
            }function o(t, e) {
              var n = r(t, 1),
                  i = r(e, 1);return n !== i ? n - i : 0 === n ? e[1] - t[1] : 1 === n ? t[0] - e[0] : 2 === n ? t[1] - e[1] : e[0] - t[0];
            }return function (s) {
              function u(t) {
                for (var e = 0, n = g.length, i = t[1], r = 0; r < n; ++r) {
                  for (var a, o = 1, s = g[r], u = s.length, c = s[0]; o < u; ++o) {
                    a = s[o], c[1] <= i ? a[1] > i && et(c, a, t) > 0 && ++e : a[1] <= i && et(c, a, t) < 0 && --e, c = a;
                  }
                }return 0 !== e;
              }function c(a, s, u, c) {
                var l = 0,
                    h = 0;if (null == a || (l = r(a, u)) !== (h = r(s, u)) || o(a, s) < 0 ^ u > 0) do {
                  c.point(0 === l || 3 === l ? t : n, l > 1 ? i : e);
                } while ((l = (l + u + 4) % 4) !== h);else c.point(s[0], s[1]);
              }function l(r, a) {
                return t <= r && r <= n && e <= a && a <= i;
              }function h(t, e) {
                l(t, e) && s.point(t, e);
              }function d(t, e) {
                var n = l(t = Math.max(-ys, Math.min(ys, t)), e = Math.max(-ys, Math.min(ys, e)));if (g && p.push([t, e]), S) x = t, _ = e, y = n, S = !1, n && (s.lineStart(), s.point(t, e));else if (n && w) s.point(t, e);else {
                  var i = { a: { x: v, y: m }, b: { x: t, y: e } };P(i) ? (w || (s.lineStart(), s.point(i.a.x, i.a.y)), s.point(i.b.x, i.b.y), n || s.lineEnd(), b = !1) : n && (s.lineStart(), s.point(t, e), b = !1);
                }v = t, m = e, w = n;
              }var f,
                  g,
                  p,
                  x,
                  _,
                  y,
                  v,
                  m,
                  w,
                  S,
                  b,
                  A = s,
                  T = Ie(),
                  P = Xe(t, e, n, i),
                  C = { point: h, lineStart: function lineStart() {
                  C.point = d, g && g.push(p = []), S = !0, w = !1, v = m = NaN;
                }, lineEnd: function lineEnd() {
                  f && (d(x, _), y && w && T.rejoin(), f.push(T.buffer())), C.point = h, w && s.lineEnd();
                }, polygonStart: function polygonStart() {
                  s = T, f = [], g = [], b = !0;
                }, polygonEnd: function polygonEnd() {
                  s = A, f = Ya.merge(f);var e = u([t, i]),
                      n = b && e,
                      r = f.length;(n || r) && (s.polygonStart(), n && (s.lineStart(), c(null, null, 1, s), s.lineEnd()), r && Ve(f, a, e, c, s), s.polygonEnd()), f = g = p = null;
                } };return C;
            };
          }function Ye(t) {
            var e = 0,
                n = vo / 3,
                i = an(t),
                r = i(e, n);return r.parallels = function (t) {
              return arguments.length ? i(e = t[0] * vo / 180, n = t[1] * vo / 180) : [e / vo * 180, n / vo * 180];
            }, r;
          }function Be(t, e) {
            function n(t, e) {
              var n = Math.sqrt(a - 2 * r * Math.sin(e)) / r;return [n * Math.sin(t *= r), o - n * Math.cos(t)];
            }var i = Math.sin(t),
                r = (i + Math.sin(e)) / 2,
                a = 1 + i * (2 * r - i),
                o = Math.sqrt(a) / r;return n.invert = function (t, e) {
              var n = o - e;return [Math.atan2(t, n) / r, it((a - (t * t + n * n) * r * r) / (2 * r))];
            }, n;
          }function je() {
            function t(t, e) {
              ms += r * t - i * e, i = t, r = e;
            }var e, n, i, r;Ts.point = function (a, o) {
              Ts.point = t, e = i = a, n = r = o;
            }, Ts.lineEnd = function () {
              t(e, n);
            };
          }function Ue() {
            function t(t, e) {
              o.push("M", t, ",", e, a);
            }function e(t, e) {
              o.push("M", t, ",", e), s.point = n;
            }function n(t, e) {
              o.push("L", t, ",", e);
            }function i() {
              s.point = t;
            }function r() {
              o.push("Z");
            }var a = qe(4.5),
                o = [],
                s = { point: t, lineStart: function lineStart() {
                s.point = e;
              }, lineEnd: i, polygonStart: function polygonStart() {
                s.lineEnd = r;
              }, polygonEnd: function polygonEnd() {
                s.lineEnd = i, s.point = t;
              }, pointRadius: function pointRadius(t) {
                return a = qe(t), s;
              }, result: function result() {
                if (o.length) {
                  var t = o.join("");return o = [], t;
                }
              } };return s;
          }function qe(t) {
            return "m0," + t + "a" + t + "," + t + " 0 1,1 0," + -2 * t + "a" + t + "," + t + " 0 1,1 0," + 2 * t + "z";
          }function We(t, e) {
            ss += t, us += e, ++cs;
          }function Qe() {
            function t(t, i) {
              var r = t - e,
                  a = i - n,
                  o = Math.sqrt(r * r + a * a);ls += o * (e + t) / 2, hs += o * (n + i) / 2, ds += o, We(e = t, n = i);
            }var e, n;Cs.point = function (i, r) {
              Cs.point = t, We(e = i, n = r);
            };
          }function Ze() {
            Cs.point = We;
          }function Ke() {
            function t(t, e) {
              var n = t - i,
                  a = e - r,
                  o = Math.sqrt(n * n + a * a);ls += o * (i + t) / 2, hs += o * (r + e) / 2, ds += o, fs += (o = r * t - i * e) * (i + t), gs += o * (r + e), ps += 3 * o, We(i = t, r = e);
            }var e, n, i, r;Cs.point = function (a, o) {
              Cs.point = t, We(e = i = a, n = r = o);
            }, Cs.lineEnd = function () {
              t(e, n);
            };
          }function $e(t) {
            function e(e, n) {
              t.moveTo(e + o, n), t.arc(e, n, o, 0, mo);
            }function n(e, n) {
              t.moveTo(e, n), s.point = i;
            }function i(e, n) {
              t.lineTo(e, n);
            }function r() {
              s.point = e;
            }function a() {
              t.closePath();
            }var o = 4.5,
                s = { point: e, lineStart: function lineStart() {
                s.point = n;
              }, lineEnd: r, polygonStart: function polygonStart() {
                s.lineEnd = a;
              }, polygonEnd: function polygonEnd() {
                s.lineEnd = r, s.point = e;
              }, pointRadius: function pointRadius(t) {
                return o = t, s;
              }, result: b };return s;
          }function Je(t) {
            function e(t) {
              return (s ? i : n)(t);
            }function n(e) {
              return nn(e, function (n, i) {
                n = t(n, i), e.point(n[0], n[1]);
              });
            }function i(e) {
              function n(n, i) {
                n = t(n, i), e.point(n[0], n[1]);
              }function i() {
                v = NaN, A.point = a, e.lineStart();
              }function a(n, i) {
                var a = xe([n, i]),
                    o = t(n, i);r(v, m, y, w, S, b, v = o[0], m = o[1], y = n, w = a[0], S = a[1], b = a[2], s, e), e.point(v, m);
              }function o() {
                A.point = n, e.lineEnd();
              }function u() {
                i(), A.point = c, A.lineEnd = l;
              }function c(t, e) {
                a(h = t, d = e), f = v, g = m, p = w, x = S, _ = b, A.point = a;
              }function l() {
                r(v, m, y, w, S, b, f, g, h, p, x, _, s, e), A.lineEnd = o, o();
              }var h,
                  d,
                  f,
                  g,
                  p,
                  x,
                  _,
                  y,
                  v,
                  m,
                  w,
                  S,
                  b,
                  A = { point: n, lineStart: i, lineEnd: o, polygonStart: function polygonStart() {
                  e.polygonStart(), A.lineStart = u;
                }, polygonEnd: function polygonEnd() {
                  e.polygonEnd(), A.lineStart = i;
                } };return A;
            }function r(e, n, i, s, u, c, l, h, d, f, g, p, x, _) {
              var y = l - e,
                  v = h - n,
                  m = y * y + v * v;if (m > 4 * a && x--) {
                var w = s + f,
                    S = u + g,
                    b = c + p,
                    A = Math.sqrt(w * w + S * S + b * b),
                    T = Math.asin(b /= A),
                    P = Ja(Ja(b) - 1) < _o || Ja(i - d) < _o ? (i + d) / 2 : Math.atan2(S, w),
                    C = t(P, T),
                    L = C[0],
                    M = C[1],
                    E = L - e,
                    V = M - n,
                    G = v * E - y * V;(G * G / m > a || Ja((y * E + v * V) / m - .5) > .3 || s * f + u * g + c * p < o) && (r(e, n, i, s, u, c, L, M, P, w /= A, S /= A, b, x, _), _.point(L, M), r(L, M, P, w, S, b, l, h, d, f, g, p, x, _));
              }
            }var a = .5,
                o = Math.cos(30 * bo),
                s = 16;return e.precision = function (t) {
              return arguments.length ? (s = (a = t * t) > 0 && 16, e) : Math.sqrt(a);
            }, e;
          }function tn(t) {
            var e = Je(function (e, n) {
              return t([e * Ao, n * Ao]);
            });return function (t) {
              return on(e(t));
            };
          }function en(t) {
            this.stream = t;
          }function nn(t, e) {
            return { point: e, sphere: function sphere() {
                t.sphere();
              }, lineStart: function lineStart() {
                t.lineStart();
              }, lineEnd: function lineEnd() {
                t.lineEnd();
              }, polygonStart: function polygonStart() {
                t.polygonStart();
              }, polygonEnd: function polygonEnd() {
                t.polygonEnd();
              } };
          }function rn(t) {
            return an(function () {
              return t;
            })();
          }function an(t) {
            function e(t) {
              return t = s(t[0] * bo, t[1] * bo), [t[0] * d + u, c - t[1] * d];
            }function n(t) {
              return (t = s.invert((t[0] - u) / d, (c - t[1]) / d)) && [t[0] * Ao, t[1] * Ao];
            }function i() {
              s = Me(o = cn(_, y, v), a);var t = a(p, x);return u = f - t[0] * d, c = g + t[1] * d, r();
            }function r() {
              return l && (l.valid = !1, l = null), e;
            }var a,
                o,
                s,
                u,
                c,
                l,
                h = Je(function (t, e) {
              return t = a(t, e), [t[0] * d + u, c - t[1] * d];
            }),
                d = 150,
                f = 480,
                g = 250,
                p = 0,
                x = 0,
                _ = 0,
                y = 0,
                v = 0,
                w = _s,
                S = m,
                b = null,
                A = null;return e.stream = function (t) {
              return l && (l.valid = !1), l = on(w(o, h(S(t)))), l.valid = !0, l;
            }, e.clipAngle = function (t) {
              return arguments.length ? (w = null == t ? (b = t, _s) : ze((b = +t) * bo), r()) : b;
            }, e.clipExtent = function (t) {
              return arguments.length ? (A = t, S = t ? He(t[0][0], t[0][1], t[1][0], t[1][1]) : m, r()) : A;
            }, e.scale = function (t) {
              return arguments.length ? (d = +t, i()) : d;
            }, e.translate = function (t) {
              return arguments.length ? (f = +t[0], g = +t[1], i()) : [f, g];
            }, e.center = function (t) {
              return arguments.length ? (p = t[0] % 360 * bo, x = t[1] % 360 * bo, i()) : [p * Ao, x * Ao];
            }, e.rotate = function (t) {
              return arguments.length ? (_ = t[0] % 360 * bo, y = t[1] % 360 * bo, v = t.length > 2 ? t[2] % 360 * bo : 0, i()) : [_ * Ao, y * Ao, v * Ao];
            }, Ya.rebind(e, h, "precision"), function () {
              return a = t.apply(this, arguments), e.invert = a.invert && n, i();
            };
          }function on(t) {
            return nn(t, function (e, n) {
              t.point(e * bo, n * bo);
            });
          }function sn(t, e) {
            return [t, e];
          }function un(t, e) {
            return [t > vo ? t - mo : t < -vo ? t + mo : t, e];
          }function cn(t, e, n) {
            return t ? e || n ? Me(hn(t), dn(e, n)) : hn(t) : e || n ? dn(e, n) : un;
          }function ln(t) {
            return function (e, n) {
              return e += t, [e > vo ? e - mo : e < -vo ? e + mo : e, n];
            };
          }function hn(t) {
            var e = ln(t);return e.invert = ln(-t), e;
          }function dn(t, e) {
            function n(t, e) {
              var n = Math.cos(e),
                  s = Math.cos(t) * n,
                  u = Math.sin(t) * n,
                  c = Math.sin(e),
                  l = c * i + s * r;return [Math.atan2(u * a - l * o, s * i - c * r), it(l * a + u * o)];
            }var i = Math.cos(t),
                r = Math.sin(t),
                a = Math.cos(e),
                o = Math.sin(e);return n.invert = function (t, e) {
              var n = Math.cos(e),
                  s = Math.cos(t) * n,
                  u = Math.sin(t) * n,
                  c = Math.sin(e),
                  l = c * a - u * o;return [Math.atan2(u * a + c * o, s * i + l * r), it(l * i - s * r)];
            }, n;
          }function fn(t, e) {
            var n = Math.cos(t),
                i = Math.sin(t);return function (r, a, o, s) {
              var u = o * e;null != r ? (r = gn(n, r), a = gn(n, a), (o > 0 ? r < a : r > a) && (r += o * mo)) : (r = t + o * mo, a = t - .5 * u);for (var c, l = r; o > 0 ? l > a : l < a; l -= u) {
                s.point((c = Se([n, -i * Math.cos(l), -i * Math.sin(l)]))[0], c[1]);
              }
            };
          }function gn(t, e) {
            var n = xe(e);n[0] -= t, we(n);var i = nt(-n[1]);return ((-n[2] < 0 ? -i : i) + 2 * Math.PI - _o) % (2 * Math.PI);
          }function pn(t, e, n) {
            var i = Ya.range(t, e - _o, n).concat(e);return function (t) {
              return i.map(function (e) {
                return [t, e];
              });
            };
          }function xn(t, e, n) {
            var i = Ya.range(t, e - _o, n).concat(e);return function (t) {
              return i.map(function (e) {
                return [e, t];
              });
            };
          }function _n(t) {
            return t.source;
          }function yn(t) {
            return t.target;
          }function vn(t, e, n, i) {
            var r = Math.cos(e),
                a = Math.sin(e),
                o = Math.cos(i),
                s = Math.sin(i),
                u = r * Math.cos(t),
                c = r * Math.sin(t),
                l = o * Math.cos(n),
                h = o * Math.sin(n),
                d = 2 * Math.asin(Math.sqrt(st(i - e) + r * o * st(n - t))),
                f = 1 / Math.sin(d),
                g = d ? function (t) {
              var e = Math.sin(t *= d) * f,
                  n = Math.sin(d - t) * f,
                  i = n * u + e * l,
                  r = n * c + e * h,
                  o = n * a + e * s;return [Math.atan2(r, i) * Ao, Math.atan2(o, Math.sqrt(i * i + r * r)) * Ao];
            } : function () {
              return [t * Ao, e * Ao];
            };return g.distance = d, g;
          }function mn(t, e) {
            function n(e, n) {
              var i = Math.cos(e),
                  r = Math.cos(n),
                  a = t(i * r);return [a * r * Math.sin(e), a * Math.sin(n)];
            }return n.invert = function (t, n) {
              var i = Math.sqrt(t * t + n * n),
                  r = e(i),
                  a = Math.sin(r),
                  o = Math.cos(r);return [Math.atan2(t * a, i * o), Math.asin(i && n * a / i)];
            }, n;
          }function wn(t, e) {
            function n(t, e) {
              o > 0 ? e < -So + _o && (e = -So + _o) : e > So - _o && (e = So - _o);var n = o / Math.pow(r(e), a);return [n * Math.sin(a * t), o - n * Math.cos(a * t)];
            }var i = Math.cos(t),
                r = function r(t) {
              return Math.tan(vo / 4 + t / 2);
            },
                a = t === e ? Math.sin(t) : Math.log(i / Math.cos(e)) / Math.log(r(e) / r(t)),
                o = i * Math.pow(r(t), a) / a;return a ? (n.invert = function (t, e) {
              var n = o - e,
                  i = tt(a) * Math.sqrt(t * t + n * n);return [Math.atan2(t, n) / a, 2 * Math.atan(Math.pow(o / i, 1 / a)) - So];
            }, n) : bn;
          }function Sn(t, e) {
            function n(t, e) {
              var n = a - e;return [n * Math.sin(r * t), a - n * Math.cos(r * t)];
            }var i = Math.cos(t),
                r = t === e ? Math.sin(t) : (i - Math.cos(e)) / (e - t),
                a = i / r + t;return Ja(r) < _o ? sn : (n.invert = function (t, e) {
              var n = a - e;return [Math.atan2(t, n) / r, a - tt(r) * Math.sqrt(t * t + n * n)];
            }, n);
          }function bn(t, e) {
            return [t, Math.log(Math.tan(vo / 4 + e / 2))];
          }function An(t) {
            var e,
                n = rn(t),
                i = n.scale,
                r = n.translate,
                a = n.clipExtent;return n.scale = function () {
              var t = i.apply(n, arguments);return t === n ? e ? n.clipExtent(null) : n : t;
            }, n.translate = function () {
              var t = r.apply(n, arguments);return t === n ? e ? n.clipExtent(null) : n : t;
            }, n.clipExtent = function (t) {
              var o = a.apply(n, arguments);if (o === n) {
                if (e = null == t) {
                  var s = vo * i(),
                      u = r();a([[u[0] - s, u[1] - s], [u[0] + s, u[1] + s]]);
                }
              } else e && (o = null);return o;
            }, n.clipExtent(null);
          }function Tn(t, e) {
            return [Math.log(Math.tan(vo / 4 + e / 2)), -t];
          }function Pn(t) {
            return t[0];
          }function Cn(t) {
            return t[1];
          }function Ln(t) {
            for (var e = t.length, n = [0, 1], i = 2, r = 2; r < e; r++) {
              for (; i > 1 && et(t[n[i - 2]], t[n[i - 1]], t[r]) <= 0;) {
                --i;
              }n[i++] = r;
            }return n.slice(0, i);
          }function Mn(t, e) {
            return t[0] - e[0] || t[1] - e[1];
          }function En(t, e, n) {
            return (n[0] - e[0]) * (t[1] - e[1]) < (n[1] - e[1]) * (t[0] - e[0]);
          }function Vn(t, e, n, i) {
            var r = t[0],
                a = n[0],
                o = e[0] - r,
                s = i[0] - a,
                u = t[1],
                c = n[1],
                l = e[1] - u,
                h = i[1] - c,
                d = (s * (u - c) - h * (r - a)) / (h * o - s * l);return [r + d * o, u + d * l];
          }function Gn(t) {
            var e = t[0],
                n = t[t.length - 1];return !(e[0] - n[0] || e[1] - n[1]);
          }function kn() {
            ti(this), this.edge = this.site = this.circle = null;
          }function Rn(t) {
            var e = Xs.pop() || new kn();return e.site = t, e;
          }function On(t) {
            jn(t), Ns.remove(t), Xs.push(t), ti(t);
          }function In(t) {
            var e = t.circle,
                n = e.x,
                i = e.cy,
                r = { x: n, y: i },
                a = t.P,
                o = t.N,
                s = [t];On(t);for (var u = a; u.circle && Ja(n - u.circle.x) < _o && Ja(i - u.circle.cy) < _o;) {
              a = u.P, s.unshift(u), On(u), u = a;
            }s.unshift(u), jn(u);for (var c = o; c.circle && Ja(n - c.circle.x) < _o && Ja(i - c.circle.cy) < _o;) {
              o = c.N, s.push(c), On(c), c = o;
            }s.push(c), jn(c);var l,
                h = s.length;for (l = 1; l < h; ++l) {
              c = s[l], u = s[l - 1], Kn(c.edge, u.site, c.site, r);
            }u = s[0], (c = s[h - 1]).edge = Qn(u.site, c.site, null, r), Bn(u), Bn(c);
          }function Dn(t) {
            for (var e, n, i, r, a = t.x, o = t.y, s = Ns._; s;) {
              if ((i = Nn(s, o) - a) > _o) s = s.L;else {
                if (!((r = a - Fn(s, o)) > _o)) {
                  i > -_o ? (e = s.P, n = s) : r > -_o ? (e = s, n = s.N) : e = n = s;break;
                }if (!s.R) {
                  e = s;break;
                }s = s.R;
              }
            }var u = Rn(t);if (Ns.insert(e, u), e || n) {
              if (e === n) return jn(e), n = Rn(e.site), Ns.insert(u, n), u.edge = n.edge = Qn(e.site, u.site), Bn(e), void Bn(n);if (n) {
                jn(e), jn(n);var c = e.site,
                    l = c.x,
                    h = c.y,
                    d = t.x - l,
                    f = t.y - h,
                    g = n.site,
                    p = g.x - l,
                    x = g.y - h,
                    _ = 2 * (d * x - f * p),
                    y = d * d + f * f,
                    v = p * p + x * x,
                    m = { x: (x * y - f * v) / _ + l, y: (d * v - p * y) / _ + h };Kn(n.edge, c, g, m), u.edge = Qn(c, t, null, m), n.edge = Qn(t, g, null, m), Bn(e), Bn(n);
              } else u.edge = Qn(e.site, u.site);
            }
          }function Nn(t, e) {
            var n = t.site,
                i = n.x,
                r = n.y,
                a = r - e;if (!a) return i;var o = t.P;if (!o) return -1 / 0;var s = (n = o.site).x,
                u = n.y,
                c = u - e;if (!c) return s;var l = s - i,
                h = 1 / a - 1 / c,
                d = l / c;return h ? (-d + Math.sqrt(d * d - 2 * h * (l * l / (-2 * c) - u + c / 2 + r - a / 2))) / h + i : (i + s) / 2;
          }function Fn(t, e) {
            var n = t.N;if (n) return Nn(n, e);var i = t.site;return i.y === e ? i.x : 1 / 0;
          }function zn(t) {
            this.site = t, this.edges = [];
          }function Xn(t) {
            for (var e, n, i, r, a, o, s, u, c, l, h = t[0][0], d = t[1][0], f = t[0][1], g = t[1][1], p = Ds, x = p.length; x--;) {
              if ((a = p[x]) && a.prepare()) for (u = (s = a.edges).length, o = 0; o < u;) {
                i = (l = s[o].end()).x, r = l.y, e = (c = s[++o % u].start()).x, n = c.y, (Ja(i - e) > _o || Ja(r - n) > _o) && (s.splice(o, 0, new $n(Zn(a.site, l, Ja(i - h) < _o && g - r > _o ? { x: h, y: Ja(e - h) < _o ? n : g } : Ja(r - g) < _o && d - i > _o ? { x: Ja(n - g) < _o ? e : d, y: g } : Ja(i - d) < _o && r - f > _o ? { x: d, y: Ja(e - d) < _o ? n : f } : Ja(r - f) < _o && i - h > _o ? { x: Ja(n - f) < _o ? e : h, y: f } : null), a.site, null)), ++u);
              }
            }
          }function Hn(t, e) {
            return e.angle - t.angle;
          }function Yn() {
            ti(this), this.x = this.y = this.arc = this.site = this.cy = null;
          }function Bn(t) {
            var e = t.P,
                n = t.N;if (e && n) {
              var i = e.site,
                  r = t.site,
                  a = n.site;if (i !== a) {
                var o = r.x,
                    s = r.y,
                    u = i.x - o,
                    c = i.y - s,
                    l = a.x - o,
                    h = 2 * (u * (x = a.y - s) - c * l);if (!(h >= -yo)) {
                  var d = u * u + c * c,
                      f = l * l + x * x,
                      g = (x * d - c * f) / h,
                      p = (u * f - l * d) / h,
                      x = p + s,
                      _ = Hs.pop() || new Yn();_.arc = t, _.site = r, _.x = g + o, _.y = x + Math.sqrt(g * g + p * p), _.cy = x, t.circle = _;for (var y = null, v = zs._; v;) {
                    if (_.y < v.y || _.y === v.y && _.x <= v.x) {
                      if (!v.L) {
                        y = v.P;break;
                      }v = v.L;
                    } else {
                      if (!v.R) {
                        y = v;break;
                      }v = v.R;
                    }
                  }zs.insert(y, _), y || (Fs = _);
                }
              }
            }
          }function jn(t) {
            var e = t.circle;e && (e.P || (Fs = e.N), zs.remove(e), Hs.push(e), ti(e), t.circle = null);
          }function Un(t) {
            for (var e, n = Is, i = Xe(t[0][0], t[0][1], t[1][0], t[1][1]), r = n.length; r--;) {
              (!qn(e = n[r], t) || !i(e) || Ja(e.a.x - e.b.x) < _o && Ja(e.a.y - e.b.y) < _o) && (e.a = e.b = null, n.splice(r, 1));
            }
          }function qn(t, e) {
            var n = t.b;if (n) return !0;var i,
                r,
                a = t.a,
                o = e[0][0],
                s = e[1][0],
                u = e[0][1],
                c = e[1][1],
                l = t.l,
                h = t.r,
                d = l.x,
                f = l.y,
                g = h.x,
                p = h.y,
                x = (d + g) / 2,
                _ = (f + p) / 2;if (p === f) {
              if (x < o || x >= s) return;if (d > g) {
                if (a) {
                  if (a.y >= c) return;
                } else a = { x: x, y: u };n = { x: x, y: c };
              } else {
                if (a) {
                  if (a.y < u) return;
                } else a = { x: x, y: c };n = { x: x, y: u };
              }
            } else if (i = (d - g) / (p - f), r = _ - i * x, i < -1 || i > 1) {
              if (d > g) {
                if (a) {
                  if (a.y >= c) return;
                } else a = { x: (u - r) / i, y: u };n = { x: (c - r) / i, y: c };
              } else {
                if (a) {
                  if (a.y < u) return;
                } else a = { x: (c - r) / i, y: c };n = { x: (u - r) / i, y: u };
              }
            } else if (f < p) {
              if (a) {
                if (a.x >= s) return;
              } else a = { x: o, y: i * o + r };n = { x: s, y: i * s + r };
            } else {
              if (a) {
                if (a.x < o) return;
              } else a = { x: s, y: i * s + r };n = { x: o, y: i * o + r };
            }return t.a = a, t.b = n, !0;
          }function Wn(t, e) {
            this.l = t, this.r = e, this.a = this.b = null;
          }function Qn(t, e, n, i) {
            var r = new Wn(t, e);return Is.push(r), n && Kn(r, t, e, n), i && Kn(r, e, t, i), Ds[t.i].edges.push(new $n(r, t, e)), Ds[e.i].edges.push(new $n(r, e, t)), r;
          }function Zn(t, e, n) {
            var i = new Wn(t, null);return i.a = e, i.b = n, Is.push(i), i;
          }function Kn(t, e, n, i) {
            t.a || t.b ? t.l === n ? t.b = i : t.a = i : (t.a = i, t.l = e, t.r = n);
          }function $n(t, e, n) {
            var i = t.a,
                r = t.b;this.edge = t, this.site = e, this.angle = n ? Math.atan2(n.y - e.y, n.x - e.x) : t.l === e ? Math.atan2(r.x - i.x, i.y - r.y) : Math.atan2(i.x - r.x, r.y - i.y);
          }function Jn() {
            this._ = null;
          }function ti(t) {
            t.U = t.C = t.L = t.R = t.P = t.N = null;
          }function ei(t, e) {
            var n = e,
                i = e.R,
                r = n.U;r ? r.L === n ? r.L = i : r.R = i : t._ = i, i.U = r, n.U = i, n.R = i.L, n.R && (n.R.U = n), i.L = n;
          }function ni(t, e) {
            var n = e,
                i = e.L,
                r = n.U;r ? r.L === n ? r.L = i : r.R = i : t._ = i, i.U = r, n.U = i, n.L = i.R, n.L && (n.L.U = n), i.R = n;
          }function ii(t) {
            for (; t.L;) {
              t = t.L;
            }return t;
          }function ri(t, e) {
            var n,
                i,
                r,
                a = t.sort(ai).pop();for (Is = [], Ds = new Array(t.length), Ns = new Jn(), zs = new Jn();;) {
              if (r = Fs, a && (!r || a.y < r.y || a.y === r.y && a.x < r.x)) a.x === n && a.y === i || (Ds[a.i] = new zn(a), Dn(a), n = a.x, i = a.y), a = t.pop();else {
                if (!r) break;In(r.arc);
              }
            }e && (Un(e), Xn(e));var o = { cells: Ds, edges: Is };return Ns = zs = Is = Ds = null, o;
          }function ai(t, e) {
            return e.y - t.y || e.x - t.x;
          }function oi(t, e, n) {
            return (t.x - n.x) * (e.y - t.y) - (t.x - e.x) * (n.y - t.y);
          }function si(t) {
            return t.x;
          }function ui(t) {
            return t.y;
          }function ci(t, e, n, i, r, a) {
            if (!t(e, n, i, r, a)) {
              var o = .5 * (n + r),
                  s = .5 * (i + a),
                  u = e.nodes;u[0] && ci(t, u[0], n, i, o, s), u[1] && ci(t, u[1], o, i, r, s), u[2] && ci(t, u[2], n, s, o, a), u[3] && ci(t, u[3], o, s, r, a);
            }
          }function li(t, e, n, i, r, a, o) {
            var s,
                u = 1 / 0;return function t(c, l, h, d, f) {
              if (!(l > a || h > o || d < i || f < r)) {
                if (g = c.point) {
                  var g,
                      p = e - c.x,
                      x = n - c.y,
                      _ = p * p + x * x;if (_ < u) {
                    var y = Math.sqrt(u = _);i = e - y, r = n - y, a = e + y, o = n + y, s = g;
                  }
                }for (var v = c.nodes, m = .5 * (l + d), w = .5 * (h + f), S = (n >= w) << 1 | e >= m, b = S + 4; S < b; ++S) {
                  if (c = v[3 & S]) switch (3 & S) {case 0:
                      t(c, l, h, m, w);break;case 1:
                      t(c, m, h, d, w);break;case 2:
                      t(c, l, w, m, f);break;case 3:
                      t(c, m, w, d, f);}
                }
              }
            }(t, i, r, a, o), s;
          }function hi(t, e) {
            t = Ya.rgb(t), e = Ya.rgb(e);var n = t.r,
                i = t.g,
                r = t.b,
                a = e.r - n,
                o = e.g - i,
                s = e.b - r;return function (t) {
              return "#" + St(Math.round(n + a * t)) + St(Math.round(i + o * t)) + St(Math.round(r + s * t));
            };
          }function di(t, e) {
            var n,
                i = {},
                r = {};for (n in t) {
              n in e ? i[n] = pi(t[n], e[n]) : r[n] = t[n];
            }for (n in e) {
              n in t || (r[n] = e[n]);
            }return function (t) {
              for (n in i) {
                r[n] = i[n](t);
              }return r;
            };
          }function fi(t, e) {
            return t = +t, e = +e, function (n) {
              return t * (1 - n) + e * n;
            };
          }function gi(t, e) {
            var n,
                i,
                r,
                a = Bs.lastIndex = js.lastIndex = 0,
                o = -1,
                s = [],
                u = [];for (t += "", e += ""; (n = Bs.exec(t)) && (i = js.exec(e));) {
              (r = i.index) > a && (r = e.slice(a, r), s[o] ? s[o] += r : s[++o] = r), (n = n[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, u.push({ i: o, x: fi(n, i) })), a = js.lastIndex;
            }return a < e.length && (r = e.slice(a), s[o] ? s[o] += r : s[++o] = r), s.length < 2 ? u[0] ? (e = u[0].x, function (t) {
              return e(t) + "";
            }) : function () {
              return e;
            } : (e = u.length, function (t) {
              for (var n, i = 0; i < e; ++i) {
                s[(n = u[i]).i] = n.x(t);
              }return s.join("");
            });
          }function pi(t, e) {
            for (var n, i = Ya.interpolators.length; --i >= 0 && !(n = Ya.interpolators[i](t, e));) {}return n;
          }function xi(t, e) {
            var n,
                i = [],
                r = [],
                a = t.length,
                o = e.length,
                s = Math.min(t.length, e.length);for (n = 0; n < s; ++n) {
              i.push(pi(t[n], e[n]));
            }for (; n < a; ++n) {
              r[n] = t[n];
            }for (; n < o; ++n) {
              r[n] = e[n];
            }return function (t) {
              for (n = 0; n < s; ++n) {
                r[n] = i[n](t);
              }return r;
            };
          }function _i(t) {
            return function (e) {
              return e <= 0 ? 0 : e >= 1 ? 1 : t(e);
            };
          }function yi(t) {
            return function (e) {
              return 1 - t(1 - e);
            };
          }function vi(t) {
            return function (e) {
              return .5 * (e < .5 ? t(2 * e) : 2 - t(2 - 2 * e));
            };
          }function mi(t) {
            return t * t;
          }function wi(t) {
            return t * t * t;
          }function Si(t) {
            if (t <= 0) return 0;if (t >= 1) return 1;var e = t * t,
                n = e * t;return 4 * (t < .5 ? n : 3 * (t - e) + n - .75);
          }function bi(t) {
            return 1 - Math.cos(t * So);
          }function Ai(t) {
            return Math.pow(2, 10 * (t - 1));
          }function Ti(t) {
            return 1 - Math.sqrt(1 - t * t);
          }function Pi(t) {
            return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
          }function Ci(t, e) {
            return e -= t, function (n) {
              return Math.round(t + e * n);
            };
          }function Li(t) {
            var e = [t.a, t.b],
                n = [t.c, t.d],
                i = Ei(e),
                r = Mi(e, n),
                a = Ei(Vi(n, e, -r)) || 0;e[0] * n[1] < n[0] * e[1] && (e[0] *= -1, e[1] *= -1, i *= -1, r *= -1), this.rotate = (i ? Math.atan2(e[1], e[0]) : Math.atan2(-n[0], n[1])) * Ao, this.translate = [t.e, t.f], this.scale = [i, a], this.skew = a ? Math.atan2(r, a) * Ao : 0;
          }function Mi(t, e) {
            return t[0] * e[0] + t[1] * e[1];
          }function Ei(t) {
            var e = Math.sqrt(Mi(t, t));return e && (t[0] /= e, t[1] /= e), e;
          }function Vi(t, e, n) {
            return t[0] += n * e[0], t[1] += n * e[1], t;
          }function Gi(t) {
            return t.length ? t.pop() + "," : "";
          }function ki(t, e, n, i) {
            if (t[0] !== e[0] || t[1] !== e[1]) {
              var r = n.push("translate(", null, ",", null, ")");i.push({ i: r - 4, x: fi(t[0], e[0]) }, { i: r - 2, x: fi(t[1], e[1]) });
            } else (e[0] || e[1]) && n.push("translate(" + e + ")");
          }function Ri(t, e, n, i) {
            t !== e ? (t - e > 180 ? e += 360 : e - t > 180 && (t += 360), i.push({ i: n.push(Gi(n) + "rotate(", null, ")") - 2, x: fi(t, e) })) : e && n.push(Gi(n) + "rotate(" + e + ")");
          }function Oi(t, e, n, i) {
            t !== e ? i.push({ i: n.push(Gi(n) + "skewX(", null, ")") - 2, x: fi(t, e) }) : e && n.push(Gi(n) + "skewX(" + e + ")");
          }function Ii(t, e, n, i) {
            if (t[0] !== e[0] || t[1] !== e[1]) {
              var r = n.push(Gi(n) + "scale(", null, ",", null, ")");i.push({ i: r - 4, x: fi(t[0], e[0]) }, { i: r - 2, x: fi(t[1], e[1]) });
            } else 1 === e[0] && 1 === e[1] || n.push(Gi(n) + "scale(" + e + ")");
          }function Di(t, e) {
            var n = [],
                i = [];return t = Ya.transform(t), e = Ya.transform(e), ki(t.translate, e.translate, n, i), Ri(t.rotate, e.rotate, n, i), Oi(t.skew, e.skew, n, i), Ii(t.scale, e.scale, n, i), t = e = null, function (t) {
              for (var e, r = -1, a = i.length; ++r < a;) {
                n[(e = i[r]).i] = e.x(t);
              }return n.join("");
            };
          }function Ni(t, e) {
            return e = (e -= t = +t) || 1 / e, function (n) {
              return (n - t) / e;
            };
          }function Fi(t, e) {
            return e = (e -= t = +t) || 1 / e, function (n) {
              return Math.max(0, Math.min(1, (n - t) / e));
            };
          }function zi(t) {
            for (var e = t.source, n = t.target, i = Hi(e, n), r = [e]; e !== i;) {
              e = e.parent, r.push(e);
            }for (var a = r.length; n !== i;) {
              r.splice(a, 0, n), n = n.parent;
            }return r;
          }function Xi(t) {
            for (var e = [], n = t.parent; null != n;) {
              e.push(t), t = n, n = n.parent;
            }return e.push(t), e;
          }function Hi(t, e) {
            if (t === e) return t;for (var n = Xi(t), i = Xi(e), r = n.pop(), a = i.pop(), o = null; r === a;) {
              o = r, r = n.pop(), a = i.pop();
            }return o;
          }function Yi(t) {
            t.fixed |= 2;
          }function Bi(t) {
            t.fixed &= -7;
          }function ji(t) {
            t.fixed |= 4, t.px = t.x, t.py = t.y;
          }function Ui(t) {
            t.fixed &= -5;
          }function qi(t, e, n) {
            var i = 0,
                r = 0;if (t.charge = 0, !t.leaf) for (var a, o = t.nodes, s = o.length, u = -1; ++u < s;) {
              null != (a = o[u]) && (qi(a, e, n), t.charge += a.charge, i += a.charge * a.cx, r += a.charge * a.cy);
            }if (t.point) {
              t.leaf || (t.point.x += Math.random() - .5, t.point.y += Math.random() - .5);var c = e * n[t.point.index];t.charge += t.pointCharge = c, i += c * t.point.x, r += c * t.point.y;
            }t.cx = i / t.charge, t.cy = r / t.charge;
          }function Wi(t, e) {
            return Ya.rebind(t, e, "sort", "children", "value"), t.nodes = t, t.links = tr, t;
          }function Qi(t, e) {
            for (var n = [t]; null != (t = n.pop());) {
              if (e(t), (r = t.children) && (i = r.length)) for (var i, r; --i >= 0;) {
                n.push(r[i]);
              }
            }
          }function Zi(t, e) {
            for (var n = [t], i = []; null != (t = n.pop());) {
              if (i.push(t), (a = t.children) && (r = a.length)) for (var r, a, o = -1; ++o < r;) {
                n.push(a[o]);
              }
            }for (; null != (t = i.pop());) {
              e(t);
            }
          }function Ki(t) {
            return t.children;
          }function $i(t) {
            return t.value;
          }function Ji(t, e) {
            return e.value - t.value;
          }function tr(t) {
            return Ya.merge(t.map(function (t) {
              return (t.children || []).map(function (e) {
                return { source: t, target: e };
              });
            }));
          }function er(t) {
            return t.x;
          }function nr(t) {
            return t.y;
          }function ir(t, e, n) {
            t.y0 = e, t.y = n;
          }function rr(t) {
            return Ya.range(t.length);
          }function ar(t) {
            for (var e = -1, n = t[0].length, i = []; ++e < n;) {
              i[e] = 0;
            }return i;
          }function or(t) {
            for (var e, n = 1, i = 0, r = t[0][1], a = t.length; n < a; ++n) {
              (e = t[n][1]) > r && (i = n, r = e);
            }return i;
          }function sr(t) {
            return t.reduce(ur, 0);
          }function ur(t, e) {
            return t + e[1];
          }function cr(t, e) {
            return lr(t, Math.ceil(Math.log(e.length) / Math.LN2 + 1));
          }function lr(t, e) {
            for (var n = -1, i = +t[0], r = (t[1] - i) / e, a = []; ++n <= e;) {
              a[n] = r * n + i;
            }return a;
          }function hr(t) {
            return [Ya.min(t), Ya.max(t)];
          }function dr(t, e) {
            return t.value - e.value;
          }function fr(t, e) {
            var n = t._pack_next;t._pack_next = e, e._pack_prev = t, e._pack_next = n, n._pack_prev = e;
          }function gr(t, e) {
            t._pack_next = e, e._pack_prev = t;
          }function pr(t, e) {
            var n = e.x - t.x,
                i = e.y - t.y,
                r = t.r + e.r;return .999 * r * r > n * n + i * i;
          }function xr(t) {
            function e(t) {
              l = Math.min(t.x - t.r, l), h = Math.max(t.x + t.r, h), d = Math.min(t.y - t.r, d), f = Math.max(t.y + t.r, f);
            }if ((n = t.children) && (c = n.length)) {
              var n,
                  i,
                  r,
                  a,
                  o,
                  s,
                  u,
                  c,
                  l = 1 / 0,
                  h = -1 / 0,
                  d = 1 / 0,
                  f = -1 / 0;if (n.forEach(_r), i = n[0], i.x = -i.r, i.y = 0, e(i), c > 1 && (r = n[1], r.x = r.r, r.y = 0, e(r), c > 2)) for (mr(i, r, a = n[2]), e(a), fr(i, a), i._pack_prev = a, fr(a, r), r = i._pack_next, o = 3; o < c; o++) {
                mr(i, r, a = n[o]);var g = 0,
                    p = 1,
                    x = 1;for (s = r._pack_next; s !== r; s = s._pack_next, p++) {
                  if (pr(s, a)) {
                    g = 1;break;
                  }
                }if (1 == g) for (u = i._pack_prev; u !== s._pack_prev && !pr(u, a); u = u._pack_prev, x++) {}g ? (p < x || p == x && r.r < i.r ? gr(i, r = s) : gr(i = u, r), o--) : (fr(i, a), r = a, e(a));
              }var _ = (l + h) / 2,
                  y = (d + f) / 2,
                  v = 0;for (o = 0; o < c; o++) {
                (a = n[o]).x -= _, a.y -= y, v = Math.max(v, a.r + Math.sqrt(a.x * a.x + a.y * a.y));
              }t.r = v, n.forEach(yr);
            }
          }function _r(t) {
            t._pack_next = t._pack_prev = t;
          }function yr(t) {
            delete t._pack_next, delete t._pack_prev;
          }function vr(t, e, n, i) {
            var r = t.children;if (t.x = e += i * t.x, t.y = n += i * t.y, t.r *= i, r) for (var a = -1, o = r.length; ++a < o;) {
              vr(r[a], e, n, i);
            }
          }function mr(t, e, n) {
            var i = t.r + n.r,
                r = e.x - t.x,
                a = e.y - t.y;if (i && (r || a)) {
              var o = e.r + n.r,
                  s = r * r + a * a,
                  u = .5 + ((i *= i) - (o *= o)) / (2 * s),
                  c = Math.sqrt(Math.max(0, 2 * o * (i + s) - (i -= s) * i - o * o)) / (2 * s);n.x = t.x + u * r + c * a, n.y = t.y + u * a - c * r;
            } else n.x = t.x + i, n.y = t.y;
          }function wr(t, e) {
            return t.parent == e.parent ? 1 : 2;
          }function Sr(t) {
            var e = t.children;return e.length ? e[0] : t.t;
          }function br(t) {
            var e,
                n = t.children;return (e = n.length) ? n[e - 1] : t.t;
          }function Ar(t, e, n) {
            var i = n / (e.i - t.i);e.c -= i, e.s += n, t.c += i, e.z += n, e.m += n;
          }function Tr(t) {
            for (var e, n = 0, i = 0, r = t.children, a = r.length; --a >= 0;) {
              (e = r[a]).z += n, e.m += n, n += e.s + (i += e.c);
            }
          }function Pr(t, e, n) {
            return t.a.parent === e.parent ? t.a : n;
          }function Cr(t) {
            return 1 + Ya.max(t, function (t) {
              return t.y;
            });
          }function Lr(t) {
            return t.reduce(function (t, e) {
              return t + e.x;
            }, 0) / t.length;
          }function Mr(t) {
            var e = t.children;return e && e.length ? Mr(e[0]) : t;
          }function Er(t) {
            var e,
                n = t.children;return n && (e = n.length) ? Er(n[e - 1]) : t;
          }function Vr(t) {
            return { x: t.x, y: t.y, dx: t.dx, dy: t.dy };
          }function Gr(t, e) {
            var n = t.x + e[3],
                i = t.y + e[0],
                r = t.dx - e[1] - e[3],
                a = t.dy - e[0] - e[2];return r < 0 && (n += r / 2, r = 0), a < 0 && (i += a / 2, a = 0), { x: n, y: i, dx: r, dy: a };
          }function kr(t) {
            var e = t[0],
                n = t[t.length - 1];return e < n ? [e, n] : [n, e];
          }function Rr(t) {
            return t.rangeExtent ? t.rangeExtent() : kr(t.range());
          }function Or(t, e, n, i) {
            var r = n(t[0], t[1]),
                a = i(e[0], e[1]);return function (t) {
              return a(r(t));
            };
          }function Ir(t, e) {
            var n,
                i = 0,
                r = t.length - 1,
                a = t[i],
                o = t[r];return o < a && (n = i, i = r, r = n, n = a, a = o, o = n), t[i] = e.floor(a), t[r] = e.ceil(o), t;
          }function Dr(t) {
            return t ? { floor: function floor(e) {
                return Math.floor(e / t) * t;
              }, ceil: function ceil(e) {
                return Math.ceil(e / t) * t;
              } } : nu;
          }function Nr(t, e, n, i) {
            var r = [],
                a = [],
                o = 0,
                s = Math.min(t.length, e.length) - 1;for (t[s] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++o <= s;) {
              r.push(n(t[o - 1], t[o])), a.push(i(e[o - 1], e[o]));
            }return function (e) {
              var n = Ya.bisect(t, e, 1, s) - 1;return a[n](r[n](e));
            };
          }function Fr(t, e, n, i) {
            function r() {
              var r = Math.min(t.length, e.length) > 2 ? Nr : Or,
                  u = i ? Fi : Ni;return o = r(t, e, u, n), s = r(e, t, u, pi), a;
            }function a(t) {
              return o(t);
            }var o, s;return a.invert = function (t) {
              return s(t);
            }, a.domain = function (e) {
              return arguments.length ? (t = e.map(Number), r()) : t;
            }, a.range = function (t) {
              return arguments.length ? (e = t, r()) : e;
            }, a.rangeRound = function (t) {
              return a.range(t).interpolate(Ci);
            }, a.clamp = function (t) {
              return arguments.length ? (i = t, r()) : i;
            }, a.interpolate = function (t) {
              return arguments.length ? (n = t, r()) : n;
            }, a.ticks = function (e) {
              return Yr(t, e);
            }, a.tickFormat = function (e, n) {
              return Br(t, e, n);
            }, a.nice = function (e) {
              return Xr(t, e), r();
            }, a.copy = function () {
              return Fr(t, e, n, i);
            }, r();
          }function zr(t, e) {
            return Ya.rebind(t, e, "range", "rangeRound", "interpolate", "clamp");
          }function Xr(t, e) {
            return Ir(t, Dr(Hr(t, e)[2])), Ir(t, Dr(Hr(t, e)[2])), t;
          }function Hr(t, e) {
            null == e && (e = 10);var n = kr(t),
                i = n[1] - n[0],
                r = Math.pow(10, Math.floor(Math.log(i / e) / Math.LN10)),
                a = e / i * r;return a <= .15 ? r *= 10 : a <= .35 ? r *= 5 : a <= .75 && (r *= 2), n[0] = Math.ceil(n[0] / r) * r, n[1] = Math.floor(n[1] / r) * r + .5 * r, n[2] = r, n;
          }function Yr(t, e) {
            return Ya.range.apply(Ya, Hr(t, e));
          }function Br(t, e, n) {
            var i = Hr(t, e);if (n) {
              var r = Bo.exec(n);if (r.shift(), "s" === r[8]) {
                var a = Ya.formatPrefix(Math.max(Ja(i[0]), Ja(i[1])));return r[7] || (r[7] = "." + jr(a.scale(i[2]))), r[8] = "f", n = Ya.format(r.join("")), function (t) {
                  return n(a.scale(t)) + a.symbol;
                };
              }r[7] || (r[7] = "." + Ur(r[8], i)), n = r.join("");
            } else n = ",." + jr(i[2]) + "f";return Ya.format(n);
          }function jr(t) {
            return -Math.floor(Math.log(t) / Math.LN10 + .01);
          }function Ur(t, e) {
            var n = jr(e[2]);return t in iu ? Math.abs(n - jr(Math.max(Ja(e[0]), Ja(e[1])))) + +("e" !== t) : n - 2 * ("%" === t);
          }function qr(t, e, n, i) {
            function r(t) {
              return (n ? Math.log(t < 0 ? 0 : t) : -Math.log(t > 0 ? 0 : -t)) / Math.log(e);
            }function a(t) {
              return n ? Math.pow(e, t) : -Math.pow(e, -t);
            }function o(e) {
              return t(r(e));
            }return o.invert = function (e) {
              return a(t.invert(e));
            }, o.domain = function (e) {
              return arguments.length ? (n = e[0] >= 0, t.domain((i = e.map(Number)).map(r)), o) : i;
            }, o.base = function (n) {
              return arguments.length ? (e = +n, t.domain(i.map(r)), o) : e;
            }, o.nice = function () {
              var e = Ir(i.map(r), n ? Math : au);return t.domain(e), i = e.map(a), o;
            }, o.ticks = function () {
              var t = kr(i),
                  o = [],
                  s = t[0],
                  u = t[1],
                  c = Math.floor(r(s)),
                  l = Math.ceil(r(u)),
                  h = e % 1 ? 2 : e;if (isFinite(l - c)) {
                if (n) {
                  for (; c < l; c++) {
                    for (d = 1; d < h; d++) {
                      o.push(a(c) * d);
                    }
                  }o.push(a(c));
                } else for (o.push(a(c)); c++ < l;) {
                  for (var d = h - 1; d > 0; d--) {
                    o.push(a(c) * d);
                  }
                }for (c = 0; o[c] < s; c++) {}for (l = o.length; o[l - 1] > u; l--) {}o = o.slice(c, l);
              }return o;
            }, o.tickFormat = function (t, n) {
              if (!arguments.length) return ru;arguments.length < 2 ? n = ru : "function" != typeof n && (n = Ya.format(n));var i = Math.max(1, e * t / o.ticks().length);return function (t) {
                var o = t / a(Math.round(r(t)));return o * e < e - .5 && (o *= e), o <= i ? n(t) : "";
              };
            }, o.copy = function () {
              return qr(t.copy(), e, n, i);
            }, zr(o, t);
          }function Wr(t, e, n) {
            function i(e) {
              return t(r(e));
            }var r = Qr(e),
                a = Qr(1 / e);return i.invert = function (e) {
              return a(t.invert(e));
            }, i.domain = function (e) {
              return arguments.length ? (t.domain((n = e.map(Number)).map(r)), i) : n;
            }, i.ticks = function (t) {
              return Yr(n, t);
            }, i.tickFormat = function (t, e) {
              return Br(n, t, e);
            }, i.nice = function (t) {
              return i.domain(Xr(n, t));
            }, i.exponent = function (o) {
              return arguments.length ? (r = Qr(e = o), a = Qr(1 / e), t.domain(n.map(r)), i) : e;
            }, i.copy = function () {
              return Wr(t.copy(), e, n);
            }, zr(i, t);
          }function Qr(t) {
            return function (e) {
              return e < 0 ? -Math.pow(-e, t) : Math.pow(e, t);
            };
          }function Zr(t, e) {
            function n(n) {
              return a[((r.get(n) || ("range" === e.t ? r.set(n, t.push(n)) : NaN)) - 1) % a.length];
            }function i(e, n) {
              return Ya.range(t.length).map(function (t) {
                return e + n * t;
              });
            }var r, a, o;return n.domain = function (i) {
              if (!arguments.length) return t;t = [], r = new h();for (var a, o = -1, s = i.length; ++o < s;) {
                r.has(a = i[o]) || r.set(a, t.push(a));
              }return n[e.t].apply(n, e.a);
            }, n.range = function (t) {
              return arguments.length ? (a = t, o = 0, e = { t: "range", a: arguments }, n) : a;
            }, n.rangePoints = function (r, s) {
              arguments.length < 2 && (s = 0);var u = r[0],
                  c = r[1],
                  l = t.length < 2 ? (u = (u + c) / 2, 0) : (c - u) / (t.length - 1 + s);return a = i(u + l * s / 2, l), o = 0, e = { t: "rangePoints", a: arguments }, n;
            }, n.rangeRoundPoints = function (r, s) {
              arguments.length < 2 && (s = 0);var u = r[0],
                  c = r[1],
                  l = t.length < 2 ? (u = c = Math.round((u + c) / 2), 0) : (c - u) / (t.length - 1 + s) | 0;return a = i(u + Math.round(l * s / 2 + (c - u - (t.length - 1 + s) * l) / 2), l), o = 0, e = { t: "rangeRoundPoints", a: arguments }, n;
            }, n.rangeBands = function (r, s, u) {
              arguments.length < 2 && (s = 0), arguments.length < 3 && (u = s);var c = r[1] < r[0],
                  l = r[c - 0],
                  h = (r[1 - c] - l) / (t.length - s + 2 * u);return a = i(l + h * u, h), c && a.reverse(), o = h * (1 - s), e = { t: "rangeBands", a: arguments }, n;
            }, n.rangeRoundBands = function (r, s, u) {
              arguments.length < 2 && (s = 0), arguments.length < 3 && (u = s);var c = r[1] < r[0],
                  l = r[c - 0],
                  h = r[1 - c],
                  d = Math.floor((h - l) / (t.length - s + 2 * u));return a = i(l + Math.round((h - l - (t.length - s) * d) / 2), d), c && a.reverse(), o = Math.round(d * (1 - s)), e = { t: "rangeRoundBands", a: arguments }, n;
            }, n.rangeBand = function () {
              return o;
            }, n.rangeExtent = function () {
              return kr(e.a[0]);
            }, n.copy = function () {
              return Zr(t, e);
            }, n.domain(t);
          }function Kr(t, e) {
            function n() {
              var n = 0,
                  r = e.length;for (s = []; ++n < r;) {
                s[n - 1] = Ya.quantile(t, n / r);
              }return i;
            }function i(t) {
              if (!isNaN(t = +t)) return e[Ya.bisect(s, t)];
            }var s;return i.domain = function (e) {
              return arguments.length ? (t = e.map(a).filter(o).sort(r), n()) : t;
            }, i.range = function (t) {
              return arguments.length ? (e = t, n()) : e;
            }, i.quantiles = function () {
              return s;
            }, i.invertExtent = function (n) {
              return (n = e.indexOf(n)) < 0 ? [NaN, NaN] : [n > 0 ? s[n - 1] : t[0], n < s.length ? s[n] : t[t.length - 1]];
            }, i.copy = function () {
              return Kr(t, e);
            }, n();
          }function $r(t, e, n) {
            function i(e) {
              return n[Math.max(0, Math.min(o, Math.floor(a * (e - t))))];
            }function r() {
              return a = n.length / (e - t), o = n.length - 1, i;
            }var a, o;return i.domain = function (n) {
              return arguments.length ? (t = +n[0], e = +n[n.length - 1], r()) : [t, e];
            }, i.range = function (t) {
              return arguments.length ? (n = t, r()) : n;
            }, i.invertExtent = function (e) {
              return e = n.indexOf(e), e = e < 0 ? NaN : e / a + t, [e, e + 1 / a];
            }, i.copy = function () {
              return $r(t, e, n);
            }, r();
          }function Jr(t, e) {
            function n(n) {
              if (n <= n) return e[Ya.bisect(t, n)];
            }return n.domain = function (e) {
              return arguments.length ? (t = e, n) : t;
            }, n.range = function (t) {
              return arguments.length ? (e = t, n) : e;
            }, n.invertExtent = function (n) {
              return n = e.indexOf(n), [t[n - 1], t[n]];
            }, n.copy = function () {
              return Jr(t, e);
            }, n;
          }function ta(t) {
            function e(t) {
              return +t;
            }return e.invert = e, e.domain = e.range = function (n) {
              return arguments.length ? (t = n.map(e), e) : t;
            }, e.ticks = function (e) {
              return Yr(t, e);
            }, e.tickFormat = function (e, n) {
              return Br(t, e, n);
            }, e.copy = function () {
              return ta(t);
            }, e;
          }function ea() {
            return 0;
          }function na(t) {
            return t.innerRadius;
          }function ia(t) {
            return t.outerRadius;
          }function ra(t) {
            return t.startAngle;
          }function aa(t) {
            return t.endAngle;
          }function oa(t) {
            return t && t.padAngle;
          }function sa(t, e, n, i) {
            return (t - n) * e - (e - i) * t > 0 ? 0 : 1;
          }function ua(t, e, n, i, r) {
            var a = t[0] - e[0],
                o = t[1] - e[1],
                s = (r ? i : -i) / Math.sqrt(a * a + o * o),
                u = s * o,
                c = -s * a,
                l = t[0] + u,
                h = t[1] + c,
                d = e[0] + u,
                f = e[1] + c,
                g = (l + d) / 2,
                p = (h + f) / 2,
                x = d - l,
                _ = f - h,
                y = x * x + _ * _,
                v = n - i,
                m = l * f - d * h,
                w = (_ < 0 ? -1 : 1) * Math.sqrt(Math.max(0, v * v * y - m * m)),
                S = (m * _ - x * w) / y,
                b = (-m * x - _ * w) / y,
                A = (m * _ + x * w) / y,
                T = (-m * x + _ * w) / y,
                P = S - g,
                C = b - p,
                L = A - g,
                M = T - p;return P * P + C * C > L * L + M * M && (S = A, b = T), [[S - u, b - c], [S * n / v, b * n / v]];
          }function ca(t) {
            function e(e) {
              function o() {
                c.push("M", a(t(l), s));
              }for (var u, c = [], l = [], h = -1, d = e.length, f = Lt(n), g = Lt(i); ++h < d;) {
                r.call(this, u = e[h], h) ? l.push([+f.call(this, u, h), +g.call(this, u, h)]) : l.length && (o(), l = []);
              }return l.length && o(), c.length ? c.join("") : null;
            }var n = Pn,
                i = Cn,
                r = Ee,
                a = la,
                o = a.key,
                s = .7;return e.x = function (t) {
              return arguments.length ? (n = t, e) : n;
            }, e.y = function (t) {
              return arguments.length ? (i = t, e) : i;
            }, e.defined = function (t) {
              return arguments.length ? (r = t, e) : r;
            }, e.interpolate = function (t) {
              return arguments.length ? (o = "function" == typeof t ? a = t : (a = hu.get(t) || la).key, e) : o;
            }, e.tension = function (t) {
              return arguments.length ? (s = t, e) : s;
            }, e;
          }function la(t) {
            return t.length > 1 ? t.join("L") : t + "Z";
          }function ha(t) {
            return t.join("L") + "Z";
          }function da(t) {
            for (var e = 0, n = t.length, i = t[0], r = [i[0], ",", i[1]]; ++e < n;) {
              r.push("V", (i = t[e])[1], "H", i[0]);
            }return r.join("");
          }function fa(t) {
            for (var e = 0, n = t.length, i = t[0], r = [i[0], ",", i[1]]; ++e < n;) {
              r.push("H", (i = t[e])[0], "V", i[1]);
            }return r.join("");
          }function ga(t, e) {
            if (e.length < 1 || t.length != e.length && t.length != e.length + 2) return la(t);var n = t.length != e.length,
                i = "",
                r = t[0],
                a = t[1],
                o = e[0],
                s = o,
                u = 1;if (n && (i += "Q" + (a[0] - 2 * o[0] / 3) + "," + (a[1] - 2 * o[1] / 3) + "," + a[0] + "," + a[1], r = t[1], u = 2), e.length > 1) {
              s = e[1], a = t[u], u++, i += "C" + (r[0] + o[0]) + "," + (r[1] + o[1]) + "," + (a[0] - s[0]) + "," + (a[1] - s[1]) + "," + a[0] + "," + a[1];for (var c = 2; c < e.length; c++, u++) {
                a = t[u], s = e[c], i += "S" + (a[0] - s[0]) + "," + (a[1] - s[1]) + "," + a[0] + "," + a[1];
              }
            }if (n) {
              var l = t[u];i += "Q" + (a[0] + 2 * s[0] / 3) + "," + (a[1] + 2 * s[1] / 3) + "," + l[0] + "," + l[1];
            }return i;
          }function pa(t, e) {
            for (var n, i = [], r = (1 - e) / 2, a = t[0], o = t[1], s = 1, u = t.length; ++s < u;) {
              n = a, a = o, o = t[s], i.push([r * (o[0] - n[0]), r * (o[1] - n[1])]);
            }return i;
          }function xa(t) {
            if (t.length < 3) return la(t);var e = 1,
                n = t.length,
                i = t[0],
                r = i[0],
                a = i[1],
                o = [r, r, r, (i = t[1])[0]],
                s = [a, a, a, i[1]],
                u = [r, ",", a, "L", _a(gu, o), ",", _a(gu, s)];for (t.push(t[n - 1]); ++e <= n;) {
              i = t[e], o.shift(), o.push(i[0]), s.shift(), s.push(i[1]), ya(u, o, s);
            }return t.pop(), u.push("L", i), u.join("");
          }function _a(t, e) {
            return t[0] * e[0] + t[1] * e[1] + t[2] * e[2] + t[3] * e[3];
          }function ya(t, e, n) {
            t.push("C", _a(du, e), ",", _a(du, n), ",", _a(fu, e), ",", _a(fu, n), ",", _a(gu, e), ",", _a(gu, n));
          }function va(t, e) {
            return (e[1] - t[1]) / (e[0] - t[0]);
          }function ma(t) {
            for (var e = 0, n = t.length - 1, i = [], r = t[0], a = t[1], o = i[0] = va(r, a); ++e < n;) {
              i[e] = (o + (o = va(r = a, a = t[e + 1]))) / 2;
            }return i[e] = o, i;
          }function wa(t) {
            for (var e, n, i, r, a = [], o = ma(t), s = -1, u = t.length - 1; ++s < u;) {
              e = va(t[s], t[s + 1]), Ja(e) < _o ? o[s] = o[s + 1] = 0 : (r = (n = o[s] / e) * n + (i = o[s + 1] / e) * i) > 9 && (r = 3 * e / Math.sqrt(r), o[s] = r * n, o[s + 1] = r * i);
            }for (s = -1; ++s <= u;) {
              r = (t[Math.min(u, s + 1)][0] - t[Math.max(0, s - 1)][0]) / (6 * (1 + o[s] * o[s])), a.push([r || 0, o[s] * r || 0]);
            }return a;
          }function Sa(t) {
            for (var e, n, i, r = -1, a = t.length; ++r < a;) {
              n = (e = t[r])[0], i = e[1] - So, e[0] = n * Math.cos(i), e[1] = n * Math.sin(i);
            }return t;
          }function ba(t) {
            function e(e) {
              function u() {
                p.push("M", s(t(_), h), l, c(t(x.reverse()), h), "Z");
              }for (var d, f, g, p = [], x = [], _ = [], y = -1, v = e.length, m = Lt(n), w = Lt(r), S = n === i ? function () {
                return f;
              } : Lt(i), b = r === a ? function () {
                return g;
              } : Lt(a); ++y < v;) {
                o.call(this, d = e[y], y) ? (x.push([f = +m.call(this, d, y), g = +w.call(this, d, y)]), _.push([+S.call(this, d, y), +b.call(this, d, y)])) : x.length && (u(), x = [], _ = []);
              }return x.length && u(), p.length ? p.join("") : null;
            }var n = Pn,
                i = Pn,
                r = 0,
                a = Cn,
                o = Ee,
                s = la,
                u = s.key,
                c = s,
                l = "L",
                h = .7;return e.x = function (t) {
              return arguments.length ? (n = i = t, e) : i;
            }, e.x0 = function (t) {
              return arguments.length ? (n = t, e) : n;
            }, e.x1 = function (t) {
              return arguments.length ? (i = t, e) : i;
            }, e.y = function (t) {
              return arguments.length ? (r = a = t, e) : a;
            }, e.y0 = function (t) {
              return arguments.length ? (r = t, e) : r;
            }, e.y1 = function (t) {
              return arguments.length ? (a = t, e) : a;
            }, e.defined = function (t) {
              return arguments.length ? (o = t, e) : o;
            }, e.interpolate = function (t) {
              return arguments.length ? (u = "function" == typeof t ? s = t : (s = hu.get(t) || la).key, c = s.reverse || s, l = s.closed ? "M" : "L", e) : u;
            }, e.tension = function (t) {
              return arguments.length ? (h = t, e) : h;
            }, e;
          }function Aa(t) {
            return t.radius;
          }function Ta(t) {
            return [t.x, t.y];
          }function Pa(t) {
            return function () {
              var e = t.apply(this, arguments),
                  n = e[0],
                  i = e[1] - So;return [n * Math.cos(i), n * Math.sin(i)];
            };
          }function Ca() {
            return 64;
          }function La() {
            return "circle";
          }function Ma(t) {
            var e = Math.sqrt(t / vo);return "M0," + e + "A" + e + "," + e + " 0 1,1 0," + -e + "A" + e + "," + e + " 0 1,1 0," + e + "Z";
          }function Ea(t) {
            return function () {
              var e, n, i;(e = this[t]) && (i = e[n = e.active]) && (i.timer.c = null, i.timer.t = NaN, --e.count ? delete e[n] : delete this[t], e.active += .5, i.event && i.event.interrupt.call(this, this.__data__, i.index));
            };
          }function Va(t, e, n) {
            return ro(t, wu), t.namespace = e, t.id = n, t;
          }function Ga(t, e, n, i) {
            var r = t.id,
                a = t.namespace;return j(t, "function" == typeof n ? function (t, o, s) {
              t[a][r].tween.set(e, i(n.call(t, t.__data__, o, s)));
            } : (n = i(n), function (t) {
              t[a][r].tween.set(e, n);
            }));
          }function ka(t) {
            return null == t && (t = ""), function () {
              this.textContent = t;
            };
          }function Ra(t) {
            return null == t ? "__transition__" : "__transition_" + t + "__";
          }function Oa(t, e, n, i, r) {
            function a(n) {
              var r = f.active,
                  a = f[r];a && (a.timer.c = null, a.timer.t = NaN, --f.count, delete f[r], a.event && a.event.interrupt.call(t, t.__data__, a.index));for (var h in f) {
                if (+h < i) {
                  var p = f[h];p.timer.c = null, p.timer.t = NaN, --f.count, delete f[h];
                }
              }u.c = o, kt(function () {
                return u.c && o(n || 1) && (u.c = null, u.t = NaN), 1;
              }, 0, s), f.active = i, g.event && g.event.start.call(t, t.__data__, e), d = [], g.tween.forEach(function (n, i) {
                (i = i.call(t, t.__data__, e)) && d.push(i);
              }), l = g.ease, c = g.duration;
            }function o(r) {
              for (var a = r / c, o = l(a), s = d.length; s > 0;) {
                d[--s].call(t, o);
              }if (a >= 1) return g.event && g.event.end.call(t, t.__data__, e), --f.count ? delete f[i] : delete t[n], 1;
            }var s,
                u,
                c,
                l,
                d,
                f = t[n] || (t[n] = { active: 0, count: 0 }),
                g = f[i];g || (s = r.time, u = kt(function (t) {
              var e = g.delay;if (u.t = e + s, e <= t) return a(t - e);u.c = a;
            }, 0, s), g = f[i] = { tween: new h(), time: s, timer: u, delay: r.delay, duration: r.duration, ease: r.ease, index: e }, r = null, ++f.count);
          }function Ia(t, e, n) {
            t.attr("transform", function (t) {
              var i = e(t);return "translate(" + (isFinite(i) ? i : n(t)) + ",0)";
            });
          }function Da(t, e, n) {
            t.attr("transform", function (t) {
              var i = e(t);return "translate(0," + (isFinite(i) ? i : n(t)) + ")";
            });
          }function Na(t) {
            return t.toISOString();
          }function Fa(t, e, n) {
            function i(e) {
              return t(e);
            }function r(t, n) {
              var i = (t[1] - t[0]) / n,
                  r = Ya.bisect(Eu, i);return r == Eu.length ? [e.year, Hr(t.map(function (t) {
                return t / 31536e6;
              }), n)[2]] : r ? e[i / Eu[r - 1] < Eu[r] / i ? r - 1 : r] : [ku, Hr(t, n)[2]];
            }return i.invert = function (e) {
              return za(t.invert(e));
            }, i.domain = function (e) {
              return arguments.length ? (t.domain(e), i) : t.domain().map(za);
            }, i.nice = function (t, e) {
              function n(n) {
                return !isNaN(n) && !t.range(n, za(+n + 1), e).length;
              }var a = i.domain(),
                  o = kr(a),
                  s = null == t ? r(o, 10) : "number" == typeof t && r(o, t);return s && (t = s[0], e = s[1]), i.domain(Ir(a, e > 1 ? { floor: function floor(e) {
                  for (; n(e = t.floor(e));) {
                    e = za(e - 1);
                  }return e;
                }, ceil: function ceil(e) {
                  for (; n(e = t.ceil(e));) {
                    e = za(+e + 1);
                  }return e;
                } } : t));
            }, i.ticks = function (t, e) {
              var n = kr(i.domain()),
                  a = null == t ? r(n, 10) : "number" == typeof t ? r(n, t) : !t.range && [{ range: t }, e];return a && (t = a[0], e = a[1]), t.range(n[0], za(+n[1] + 1), e < 1 ? 1 : e);
            }, i.tickFormat = function () {
              return n;
            }, i.copy = function () {
              return Fa(t.copy(), e, n);
            }, zr(i, t);
          }function za(t) {
            return new Date(t);
          }function Xa(t) {
            return JSON.parse(t.responseText);
          }function Ha(t) {
            var e = Ua.createRange();return e.selectNode(Ua.body), e.createContextualFragment(t.responseText);
          }var Ya = { version: "3.5.17" },
              Ba = [].slice,
              ja = function ja(t) {
            return Ba.call(t);
          },
              Ua = this.document;if (Ua) try {
            ja(Ua.documentElement.childNodes)[0].nodeType;
          } catch (t) {
            ja = function ja(t) {
              for (var e = t.length, n = new Array(e); e--;) {
                n[e] = t[e];
              }return n;
            };
          }if (Date.now || (Date.now = function () {
            return +new Date();
          }), Ua) try {
            Ua.createElement("DIV").style.setProperty("opacity", 0, "");
          } catch (t) {
            var qa = this.Element.prototype,
                Wa = qa.setAttribute,
                Qa = qa.setAttributeNS,
                Za = this.CSSStyleDeclaration.prototype,
                Ka = Za.setProperty;qa.setAttribute = function (t, e) {
              Wa.call(this, t, e + "");
            }, qa.setAttributeNS = function (t, e, n) {
              Qa.call(this, t, e, n + "");
            }, Za.setProperty = function (t, e, n) {
              Ka.call(this, t, e + "", n);
            };
          }Ya.ascending = r, Ya.descending = function (t, e) {
            return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
          }, Ya.min = function (t, e) {
            var n,
                i,
                r = -1,
                a = t.length;if (1 === arguments.length) {
              for (; ++r < a;) {
                if (null != (i = t[r]) && i >= i) {
                  n = i;break;
                }
              }for (; ++r < a;) {
                null != (i = t[r]) && n > i && (n = i);
              }
            } else {
              for (; ++r < a;) {
                if (null != (i = e.call(t, t[r], r)) && i >= i) {
                  n = i;break;
                }
              }for (; ++r < a;) {
                null != (i = e.call(t, t[r], r)) && n > i && (n = i);
              }
            }return n;
          }, Ya.max = function (t, e) {
            var n,
                i,
                r = -1,
                a = t.length;if (1 === arguments.length) {
              for (; ++r < a;) {
                if (null != (i = t[r]) && i >= i) {
                  n = i;break;
                }
              }for (; ++r < a;) {
                null != (i = t[r]) && i > n && (n = i);
              }
            } else {
              for (; ++r < a;) {
                if (null != (i = e.call(t, t[r], r)) && i >= i) {
                  n = i;break;
                }
              }for (; ++r < a;) {
                null != (i = e.call(t, t[r], r)) && i > n && (n = i);
              }
            }return n;
          }, Ya.extent = function (t, e) {
            var n,
                i,
                r,
                a = -1,
                o = t.length;if (1 === arguments.length) {
              for (; ++a < o;) {
                if (null != (i = t[a]) && i >= i) {
                  n = r = i;break;
                }
              }for (; ++a < o;) {
                null != (i = t[a]) && (n > i && (n = i), r < i && (r = i));
              }
            } else {
              for (; ++a < o;) {
                if (null != (i = e.call(t, t[a], a)) && i >= i) {
                  n = r = i;break;
                }
              }for (; ++a < o;) {
                null != (i = e.call(t, t[a], a)) && (n > i && (n = i), r < i && (r = i));
              }
            }return [n, r];
          }, Ya.sum = function (t, e) {
            var n,
                i = 0,
                r = t.length,
                a = -1;if (1 === arguments.length) for (; ++a < r;) {
              o(n = +t[a]) && (i += n);
            } else for (; ++a < r;) {
              o(n = +e.call(t, t[a], a)) && (i += n);
            }return i;
          }, Ya.mean = function (t, e) {
            var n,
                i = 0,
                r = t.length,
                s = -1,
                u = r;if (1 === arguments.length) for (; ++s < r;) {
              o(n = a(t[s])) ? i += n : --u;
            } else for (; ++s < r;) {
              o(n = a(e.call(t, t[s], s))) ? i += n : --u;
            }if (u) return i / u;
          }, Ya.quantile = function (t, e) {
            var n = (t.length - 1) * e + 1,
                i = Math.floor(n),
                r = +t[i - 1],
                a = n - i;return a ? r + a * (t[i] - r) : r;
          }, Ya.median = function (t, e) {
            var n,
                i = [],
                s = t.length,
                u = -1;if (1 === arguments.length) for (; ++u < s;) {
              o(n = a(t[u])) && i.push(n);
            } else for (; ++u < s;) {
              o(n = a(e.call(t, t[u], u))) && i.push(n);
            }if (i.length) return Ya.quantile(i.sort(r), .5);
          }, Ya.variance = function (t, e) {
            var n,
                i,
                r = t.length,
                s = 0,
                u = 0,
                c = -1,
                l = 0;if (1 === arguments.length) for (; ++c < r;) {
              o(n = a(t[c])) && (u += (i = n - s) * (n - (s += i / ++l)));
            } else for (; ++c < r;) {
              o(n = a(e.call(t, t[c], c))) && (u += (i = n - s) * (n - (s += i / ++l)));
            }if (l > 1) return u / (l - 1);
          }, Ya.deviation = function () {
            var t = Ya.variance.apply(this, arguments);return t ? Math.sqrt(t) : t;
          };var $a = s(r);Ya.bisectLeft = $a.left, Ya.bisect = Ya.bisectRight = $a.right, Ya.bisector = function (t) {
            return s(1 === t.length ? function (e, n) {
              return r(t(e), n);
            } : t);
          }, Ya.shuffle = function (t, e, n) {
            (a = arguments.length) < 3 && (n = t.length, a < 2 && (e = 0));for (var i, r, a = n - e; a;) {
              r = Math.random() * a-- | 0, i = t[a + e], t[a + e] = t[r + e], t[r + e] = i;
            }return t;
          }, Ya.permute = function (t, e) {
            for (var n = e.length, i = new Array(n); n--;) {
              i[n] = t[e[n]];
            }return i;
          }, Ya.pairs = function (t) {
            for (var e = 0, n = t.length - 1, i = t[0], r = new Array(n < 0 ? 0 : n); e < n;) {
              r[e] = [i, i = t[++e]];
            }return r;
          }, Ya.transpose = function (t) {
            if (!(r = t.length)) return [];for (var e = -1, n = Ya.min(t, u), i = new Array(n); ++e < n;) {
              for (var r, a = -1, o = i[e] = new Array(r); ++a < r;) {
                o[a] = t[a][e];
              }
            }return i;
          }, Ya.zip = function () {
            return Ya.transpose(arguments);
          }, Ya.keys = function (t) {
            var e = [];for (var n in t) {
              e.push(n);
            }return e;
          }, Ya.values = function (t) {
            var e = [];for (var n in t) {
              e.push(t[n]);
            }return e;
          }, Ya.entries = function (t) {
            var e = [];for (var n in t) {
              e.push({ key: n, value: t[n] });
            }return e;
          }, Ya.merge = function (t) {
            for (var e, n, i, r = t.length, a = -1, o = 0; ++a < r;) {
              o += t[a].length;
            }for (n = new Array(o); --r >= 0;) {
              for (e = (i = t[r]).length; --e >= 0;) {
                n[--o] = i[e];
              }
            }return n;
          };var Ja = Math.abs;Ya.range = function (t, e, n) {
            if (arguments.length < 3 && (n = 1, arguments.length < 2 && (e = t, t = 0)), (e - t) / n == 1 / 0) throw new Error("infinite range");var i,
                r = [],
                a = c(Ja(n)),
                o = -1;if (t *= a, e *= a, (n *= a) < 0) for (; (i = t + n * ++o) > e;) {
              r.push(i / a);
            } else for (; (i = t + n * ++o) < e;) {
              r.push(i / a);
            }return r;
          }, Ya.map = function (t, e) {
            var n = new h();if (t instanceof h) t.forEach(function (t, e) {
              n.set(t, e);
            });else if (Array.isArray(t)) {
              var i,
                  r = -1,
                  a = t.length;if (1 === arguments.length) for (; ++r < a;) {
                n.set(r, t[r]);
              } else for (; ++r < a;) {
                n.set(e.call(t, i = t[r], r), i);
              }
            } else for (var o in t) {
              n.set(o, t[o]);
            }return n;
          };var to = "__proto__",
              eo = "\0";l(h, { has: g, get: function get(t) {
              return this._[d(t)];
            }, set: function set(t, e) {
              return this._[d(t)] = e;
            }, remove: p, keys: x, values: function values() {
              var t = [];for (var e in this._) {
                t.push(this._[e]);
              }return t;
            }, entries: function entries() {
              var t = [];for (var e in this._) {
                t.push({ key: f(e), value: this._[e] });
              }return t;
            }, size: _, empty: y, forEach: function forEach(t) {
              for (var e in this._) {
                t.call(this, f(e), this._[e]);
              }
            } }), Ya.nest = function () {
            function t(e, o, s) {
              if (s >= a.length) return i ? i.call(r, o) : n ? o.sort(n) : o;for (var u, c, l, d, f = -1, g = o.length, p = a[s++], x = new h(); ++f < g;) {
                (d = x.get(u = p(c = o[f]))) ? d.push(c) : x.set(u, [c]);
              }return e ? (c = e(), l = function l(n, i) {
                c.set(n, t(e, i, s));
              }) : (c = {}, l = function l(n, i) {
                c[n] = t(e, i, s);
              }), x.forEach(l), c;
            }function e(t, n) {
              if (n >= a.length) return t;var i = [],
                  r = o[n++];return t.forEach(function (t, r) {
                i.push({ key: t, values: e(r, n) });
              }), r ? i.sort(function (t, e) {
                return r(t.key, e.key);
              }) : i;
            }var n,
                i,
                r = {},
                a = [],
                o = [];return r.map = function (e, n) {
              return t(n, e, 0);
            }, r.entries = function (n) {
              return e(t(Ya.map, n, 0), 0);
            }, r.key = function (t) {
              return a.push(t), r;
            }, r.sortKeys = function (t) {
              return o[a.length - 1] = t, r;
            }, r.sortValues = function (t) {
              return n = t, r;
            }, r.rollup = function (t) {
              return i = t, r;
            }, r;
          }, Ya.set = function (t) {
            var e = new v();if (t) for (var n = 0, i = t.length; n < i; ++n) {
              e.add(t[n]);
            }return e;
          }, l(v, { has: g, add: function add(t) {
              return this._[d(t += "")] = !0, t;
            }, remove: p, values: x, size: _, empty: y, forEach: function forEach(t) {
              for (var e in this._) {
                t.call(this, f(e));
              }
            } }), Ya.behavior = {}, Ya.rebind = function (t, e) {
            for (var n, i = 1, r = arguments.length; ++i < r;) {
              t[n = arguments[i]] = w(t, e, e[n]);
            }return t;
          };var no = ["webkit", "ms", "moz", "Moz", "o", "O"];Ya.dispatch = function () {
            for (var t = new A(), e = -1, n = arguments.length; ++e < n;) {
              t[arguments[e]] = T(t);
            }return t;
          }, A.prototype.on = function (t, e) {
            var n = t.indexOf("."),
                i = "";if (n >= 0 && (i = t.slice(n + 1), t = t.slice(0, n)), t) return arguments.length < 2 ? this[t].on(i) : this[t].on(i, e);if (2 === arguments.length) {
              if (null == e) for (t in this) {
                this.hasOwnProperty(t) && this[t].on(i, null);
              }return this;
            }
          }, Ya.event = null, Ya.requote = function (t) {
            return t.replace(io, "\\$&");
          };var io = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,
              ro = {}.__proto__ ? function (t, e) {
            t.__proto__ = e;
          } : function (t, e) {
            for (var n in e) {
              t[n] = e[n];
            }
          },
              ao = function ao(t, e) {
            return e.querySelector(t);
          },
              oo = function oo(t, e) {
            return e.querySelectorAll(t);
          },
              _so = function so(t, e) {
            var n = t.matches || t[S(t, "matchesSelector")];return (_so = function so(t, e) {
              return n.call(t, e);
            })(t, e);
          };"function" == typeof Sizzle && (ao = function ao(t, e) {
            return Sizzle(t, e)[0] || null;
          }, oo = Sizzle, _so = Sizzle.matchesSelector), Ya.selection = function () {
            return Ya.select(Ua.documentElement);
          };var uo = Ya.selection.prototype = [];uo.select = function (t) {
            var e,
                n,
                i,
                r,
                a = [];t = E(t);for (var o = -1, s = this.length; ++o < s;) {
              a.push(e = []), e.parentNode = (i = this[o]).parentNode;for (var u = -1, c = i.length; ++u < c;) {
                (r = i[u]) ? (e.push(n = t.call(r, r.__data__, u, o)), n && "__data__" in r && (n.__data__ = r.__data__)) : e.push(null);
              }
            }return M(a);
          }, uo.selectAll = function (t) {
            var e,
                n,
                i = [];t = V(t);for (var r = -1, a = this.length; ++r < a;) {
              for (var o = this[r], s = -1, u = o.length; ++s < u;) {
                (n = o[s]) && (i.push(e = ja(t.call(n, n.__data__, s, r))), e.parentNode = n);
              }
            }return M(i);
          };var co = "http://www.w3.org/1999/xhtml",
              lo = { svg: "http://www.w3.org/2000/svg", xhtml: co, xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace", xmlns: "http://www.w3.org/2000/xmlns/" };Ya.ns = { prefix: lo, qualify: function qualify(t) {
              var e = t.indexOf(":"),
                  n = t;return e >= 0 && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)), lo.hasOwnProperty(n) ? { space: lo[n], local: t } : t;
            } }, uo.attr = function (t, e) {
            if (arguments.length < 2) {
              if ("string" == typeof t) {
                var n = this.node();return (t = Ya.ns.qualify(t)).local ? n.getAttributeNS(t.space, t.local) : n.getAttribute(t);
              }for (e in t) {
                this.each(G(e, t[e]));
              }return this;
            }return this.each(G(t, e));
          }, uo.classed = function (t, e) {
            if (arguments.length < 2) {
              if ("string" == typeof t) {
                var n = this.node(),
                    i = (t = O(t)).length,
                    r = -1;if (e = n.classList) {
                  for (; ++r < i;) {
                    if (!e.contains(t[r])) return !1;
                  }
                } else for (e = n.getAttribute("class"); ++r < i;) {
                  if (!R(t[r]).test(e)) return !1;
                }return !0;
              }for (e in t) {
                this.each(I(e, t[e]));
              }return this;
            }return this.each(I(t, e));
          }, uo.style = function (t, e, i) {
            var r = arguments.length;if (r < 3) {
              if ("string" != typeof t) {
                r < 2 && (e = "");for (i in t) {
                  this.each(N(i, t[i], e));
                }return this;
              }if (r < 2) {
                var a = this.node();return n(a).getComputedStyle(a, null).getPropertyValue(t);
              }i = "";
            }return this.each(N(t, e, i));
          }, uo.property = function (t, e) {
            if (arguments.length < 2) {
              if ("string" == typeof t) return this.node()[t];for (e in t) {
                this.each(F(e, t[e]));
              }return this;
            }return this.each(F(t, e));
          }, uo.text = function (t) {
            return arguments.length ? this.each("function" == typeof t ? function () {
              var e = t.apply(this, arguments);this.textContent = null == e ? "" : e;
            } : null == t ? function () {
              this.textContent = "";
            } : function () {
              this.textContent = t;
            }) : this.node().textContent;
          }, uo.html = function (t) {
            return arguments.length ? this.each("function" == typeof t ? function () {
              var e = t.apply(this, arguments);this.innerHTML = null == e ? "" : e;
            } : null == t ? function () {
              this.innerHTML = "";
            } : function () {
              this.innerHTML = t;
            }) : this.node().innerHTML;
          }, uo.append = function (t) {
            return t = z(t), this.select(function () {
              return this.appendChild(t.apply(this, arguments));
            });
          }, uo.insert = function (t, e) {
            return t = z(t), e = E(e), this.select(function () {
              return this.insertBefore(t.apply(this, arguments), e.apply(this, arguments) || null);
            });
          }, uo.remove = function () {
            return this.each(X);
          }, uo.data = function (t, e) {
            function n(t, n) {
              var i,
                  r,
                  a,
                  o = t.length,
                  l = n.length,
                  d = Math.min(o, l),
                  f = new Array(l),
                  g = new Array(l),
                  p = new Array(o);if (e) {
                var x,
                    _ = new h(),
                    y = new Array(o);for (i = -1; ++i < o;) {
                  (r = t[i]) && (_.has(x = e.call(r, r.__data__, i)) ? p[i] = r : _.set(x, r), y[i] = x);
                }for (i = -1; ++i < l;) {
                  (r = _.get(x = e.call(n, a = n[i], i))) ? !0 !== r && (f[i] = r, r.__data__ = a) : g[i] = H(a), _.set(x, !0);
                }for (i = -1; ++i < o;) {
                  i in y && !0 !== _.get(y[i]) && (p[i] = t[i]);
                }
              } else {
                for (i = -1; ++i < d;) {
                  r = t[i], a = n[i], r ? (r.__data__ = a, f[i] = r) : g[i] = H(a);
                }for (; i < l; ++i) {
                  g[i] = H(n[i]);
                }for (; i < o; ++i) {
                  p[i] = t[i];
                }
              }g.update = f, g.parentNode = f.parentNode = p.parentNode = t.parentNode, s.push(g), u.push(f), c.push(p);
            }var i,
                r,
                a = -1,
                o = this.length;if (!arguments.length) {
              for (t = new Array(o = (i = this[0]).length); ++a < o;) {
                (r = i[a]) && (t[a] = r.__data__);
              }return t;
            }var s = U([]),
                u = M([]),
                c = M([]);if ("function" == typeof t) for (; ++a < o;) {
              n(i = this[a], t.call(i, i.parentNode.__data__, a));
            } else for (; ++a < o;) {
              n(i = this[a], t);
            }return u.enter = function () {
              return s;
            }, u.exit = function () {
              return c;
            }, u;
          }, uo.datum = function (t) {
            return arguments.length ? this.property("__data__", t) : this.property("__data__");
          }, uo.filter = function (t) {
            var e,
                n,
                i,
                r = [];"function" != typeof t && (t = Y(t));for (var a = 0, o = this.length; a < o; a++) {
              r.push(e = []), e.parentNode = (n = this[a]).parentNode;for (var s = 0, u = n.length; s < u; s++) {
                (i = n[s]) && t.call(i, i.__data__, s, a) && e.push(i);
              }
            }return M(r);
          }, uo.order = function () {
            for (var t = -1, e = this.length; ++t < e;) {
              for (var n, i = this[t], r = i.length - 1, a = i[r]; --r >= 0;) {
                (n = i[r]) && (a && a !== n.nextSibling && a.parentNode.insertBefore(n, a), a = n);
              }
            }return this;
          }, uo.sort = function (t) {
            t = B.apply(this, arguments);for (var e = -1, n = this.length; ++e < n;) {
              this[e].sort(t);
            }return this.order();
          }, uo.each = function (t) {
            return j(this, function (e, n, i) {
              t.call(e, e.__data__, n, i);
            });
          }, uo.call = function (t) {
            var e = ja(arguments);return t.apply(e[0] = this, e), this;
          }, uo.empty = function () {
            return !this.node();
          }, uo.node = function () {
            for (var t = 0, e = this.length; t < e; t++) {
              for (var n = this[t], i = 0, r = n.length; i < r; i++) {
                var a = n[i];if (a) return a;
              }
            }return null;
          }, uo.size = function () {
            var t = 0;return j(this, function () {
              ++t;
            }), t;
          };var ho = [];Ya.selection.enter = U, Ya.selection.enter.prototype = ho, ho.append = uo.append, ho.empty = uo.empty, ho.node = uo.node, ho.call = uo.call, ho.size = uo.size, ho.select = function (t) {
            for (var e, n, i, r, a, o = [], s = -1, u = this.length; ++s < u;) {
              i = (r = this[s]).update, o.push(e = []), e.parentNode = r.parentNode;for (var c = -1, l = r.length; ++c < l;) {
                (a = r[c]) ? (e.push(i[c] = n = t.call(r.parentNode, a.__data__, c, s)), n.__data__ = a.__data__) : e.push(null);
              }
            }return M(o);
          }, ho.insert = function (t, e) {
            return arguments.length < 2 && (e = q(this)), uo.insert.call(this, t, e);
          }, Ya.select = function (e) {
            var n;return "string" == typeof e ? (n = [ao(e, Ua)]).parentNode = Ua.documentElement : (n = [e]).parentNode = t(e), M([n]);
          }, Ya.selectAll = function (t) {
            var e;return "string" == typeof t ? (e = ja(oo(t, Ua))).parentNode = Ua.documentElement : (e = ja(t)).parentNode = null, M([e]);
          }, uo.on = function (t, e, n) {
            var i = arguments.length;if (i < 3) {
              if ("string" != typeof t) {
                i < 2 && (e = !1);for (n in t) {
                  this.each(W(n, t[n], e));
                }return this;
              }if (i < 2) return (i = this.node()["__on" + t]) && i._;n = !1;
            }return this.each(W(t, e, n));
          };var fo = Ya.map({ mouseenter: "mouseover", mouseleave: "mouseout" });Ua && fo.forEach(function (t) {
            "on" + t in Ua && fo.remove(t);
          });var go,
              po = 0;Ya.mouse = function (t) {
            return $(t, C());
          };var xo = this.navigator && /WebKit/.test(this.navigator.userAgent) ? -1 : 0;Ya.touch = function (t, e, n) {
            if (arguments.length < 3 && (n = e, e = C().changedTouches), e) for (var i, r = 0, a = e.length; r < a; ++r) {
              if ((i = e[r]).identifier === n) return $(t, i);
            }
          }, Ya.behavior.drag = function () {
            function t() {
              this.on("mousedown.drag", a).on("touchstart.drag", o);
            }function e(t, e, n, a, o) {
              return function () {
                var s,
                    u = this,
                    c = Ya.event.target.correspondingElement || Ya.event.target,
                    l = u.parentNode,
                    h = i.of(u, arguments),
                    d = 0,
                    f = t(),
                    g = ".drag" + (null == f ? "" : "-" + f),
                    p = Ya.select(n(c)).on(a + g, function () {
                  var t,
                      n,
                      i = e(l, f);i && (t = i[0] - _[0], n = i[1] - _[1], d |= t | n, _ = i, h({ type: "drag", x: i[0] + s[0], y: i[1] + s[1], dx: t, dy: n }));
                }).on(o + g, function () {
                  e(l, f) && (p.on(a + g, null).on(o + g, null), x(d), h({ type: "dragend" }));
                }),
                    x = K(c),
                    _ = e(l, f);r ? (s = r.apply(u, arguments), s = [s.x - _[0], s.y - _[1]]) : s = [0, 0], h({ type: "dragstart" });
              };
            }var i = L(t, "drag", "dragstart", "dragend"),
                r = null,
                a = e(b, Ya.mouse, n, "mousemove", "mouseup"),
                o = e(J, Ya.touch, m, "touchmove", "touchend");return t.origin = function (e) {
              return arguments.length ? (r = e, t) : r;
            }, Ya.rebind(t, i, "on");
          }, Ya.touches = function (t, e) {
            return arguments.length < 2 && (e = C().touches), e ? ja(e).map(function (e) {
              var n = $(t, e);return n.identifier = e.identifier, n;
            }) : [];
          };var _o = 1e-6,
              yo = _o * _o,
              vo = Math.PI,
              mo = 2 * vo,
              wo = mo - _o,
              So = vo / 2,
              bo = vo / 180,
              Ao = 180 / vo,
              To = Math.SQRT2;Ya.interpolateZoom = function (t, e) {
            var n,
                i,
                r = t[0],
                a = t[1],
                o = t[2],
                s = e[0],
                u = e[1],
                c = e[2],
                l = s - r,
                h = u - a,
                d = l * l + h * h;if (d < yo) i = Math.log(c / o) / To, n = function n(t) {
              return [r + t * l, a + t * h, o * Math.exp(To * t * i)];
            };else {
              var f = Math.sqrt(d),
                  g = (c * c - o * o + 4 * d) / (2 * o * 2 * f),
                  p = (c * c - o * o - 4 * d) / (2 * c * 2 * f),
                  x = Math.log(Math.sqrt(g * g + 1) - g),
                  _ = Math.log(Math.sqrt(p * p + 1) - p);i = (_ - x) / To, n = function n(t) {
                var e = t * i,
                    n = at(x),
                    s = o / (2 * f) * (n * ot(To * e + x) - rt(x));return [r + s * l, a + s * h, o * n / at(To * e + x)];
              };
            }return n.duration = 1e3 * i, n;
          }, Ya.behavior.zoom = function () {
            function t(t) {
              t.on(V, h).on(Co + ".zoom", f).on("dblclick.zoom", g).on(R, d);
            }function e(t) {
              return [(t[0] - A.x) / A.k, (t[1] - A.y) / A.k];
            }function i(t) {
              return [t[0] * A.k + A.x, t[1] * A.k + A.y];
            }function r(t) {
              A.k = Math.max(C[0], Math.min(C[1], t));
            }function a(t, e) {
              e = i(e), A.x += t[0] - e[0], A.y += t[1] - e[1];
            }function o(e, n, i, o) {
              e.__chart__ = { x: A.x, y: A.y, k: A.k }, r(Math.pow(2, o)), a(x = n, i), e = Ya.select(e), M > 0 && (e = e.transition().duration(M)), e.call(t.event);
            }function s() {
              w && w.domain(m.range().map(function (t) {
                return (t - A.x) / A.k;
              }).map(m.invert)), b && b.domain(S.range().map(function (t) {
                return (t - A.y) / A.k;
              }).map(S.invert));
            }function u(t) {
              E++ || t({ type: "zoomstart" });
            }function c(t) {
              s(), t({ type: "zoom", scale: A.k, translate: [A.x, A.y] });
            }function l(t) {
              --E || (t({ type: "zoomend" }), x = null);
            }function h() {
              var t = this,
                  i = O.of(t, arguments),
                  r = 0,
                  o = Ya.select(n(t)).on(G, function () {
                r = 1, a(Ya.mouse(t), s), c(i);
              }).on(k, function () {
                o.on(G, null).on(k, null), h(r), l(i);
              }),
                  s = e(Ya.mouse(t)),
                  h = K(t);mu.call(t), u(i);
            }function d() {
              function t() {
                var t = Ya.touches(g);return f = A.k, t.forEach(function (t) {
                  t.identifier in x && (x[t.identifier] = e(t));
                }), t;
              }function n() {
                var e = Ya.event.target;Ya.select(e).on(m, i).on(w, s), S.push(e);for (var n = Ya.event.changedTouches, r = 0, a = n.length; r < a; ++r) {
                  x[n[r].identifier] = null;
                }var u = t(),
                    c = Date.now();if (1 === u.length) {
                  if (c - v < 500) {
                    l = u[0];o(g, l, x[l.identifier], Math.floor(Math.log(A.k) / Math.LN2) + 1), P();
                  }v = c;
                } else if (u.length > 1) {
                  var l = u[0],
                      h = u[1],
                      d = l[0] - h[0],
                      f = l[1] - h[1];_ = d * d + f * f;
                }
              }function i() {
                var t,
                    e,
                    n,
                    i,
                    o = Ya.touches(g);mu.call(g);for (var s = 0, u = o.length; s < u; ++s, i = null) {
                  if (n = o[s], i = x[n.identifier]) {
                    if (e) break;t = n, e = i;
                  }
                }if (i) {
                  var l = (l = n[0] - t[0]) * l + (l = n[1] - t[1]) * l,
                      h = _ && Math.sqrt(l / _);t = [(t[0] + n[0]) / 2, (t[1] + n[1]) / 2], e = [(e[0] + i[0]) / 2, (e[1] + i[1]) / 2], r(h * f);
                }v = null, a(t, e), c(p);
              }function s() {
                if (Ya.event.touches.length) {
                  for (var e = Ya.event.changedTouches, n = 0, i = e.length; n < i; ++n) {
                    delete x[e[n].identifier];
                  }for (var r in x) {
                    return void t();
                  }
                }Ya.selectAll(S).on(y, null), b.on(V, h).on(R, d), T(), l(p);
              }var f,
                  g = this,
                  p = O.of(g, arguments),
                  x = {},
                  _ = 0,
                  y = ".zoom-" + Ya.event.changedTouches[0].identifier,
                  m = "touchmove" + y,
                  w = "touchend" + y,
                  S = [],
                  b = Ya.select(g),
                  T = K(g);n(), u(p), b.on(V, null).on(R, n);
            }function f() {
              var t = O.of(this, arguments);y ? clearTimeout(y) : (mu.call(this), p = e(x = _ || Ya.mouse(this)), u(t)), y = setTimeout(function () {
                y = null, l(t);
              }, 50), P(), r(Math.pow(2, .002 * Po()) * A.k), a(x, p), c(t);
            }function g() {
              var t = Ya.mouse(this),
                  n = Math.log(A.k) / Math.LN2;o(this, t, e(t), Ya.event.shiftKey ? Math.ceil(n) - 1 : Math.floor(n) + 1);
            }var p,
                x,
                _,
                y,
                v,
                m,
                w,
                S,
                b,
                A = { x: 0, y: 0, k: 1 },
                T = [960, 500],
                C = Lo,
                M = 250,
                E = 0,
                V = "mousedown.zoom",
                G = "mousemove.zoom",
                k = "mouseup.zoom",
                R = "touchstart.zoom",
                O = L(t, "zoomstart", "zoom", "zoomend");return Co || (Co = "onwheel" in Ua ? (Po = function Po() {
              return -Ya.event.deltaY * (Ya.event.deltaMode ? 120 : 1);
            }, "wheel") : "onmousewheel" in Ua ? (Po = function Po() {
              return Ya.event.wheelDelta;
            }, "mousewheel") : (Po = function Po() {
              return -Ya.event.detail;
            }, "MozMousePixelScroll")), t.event = function (t) {
              t.each(function () {
                var t = O.of(this, arguments),
                    e = A;yu ? Ya.select(this).transition().each("start.zoom", function () {
                  A = this.__chart__ || { x: 0, y: 0, k: 1 }, u(t);
                }).tween("zoom:zoom", function () {
                  var n = T[0],
                      i = T[1],
                      r = x ? x[0] : n / 2,
                      a = x ? x[1] : i / 2,
                      o = Ya.interpolateZoom([(r - A.x) / A.k, (a - A.y) / A.k, n / A.k], [(r - e.x) / e.k, (a - e.y) / e.k, n / e.k]);return function (e) {
                    var i = o(e),
                        s = n / i[2];this.__chart__ = A = { x: r - i[0] * s, y: a - i[1] * s, k: s }, c(t);
                  };
                }).each("interrupt.zoom", function () {
                  l(t);
                }).each("end.zoom", function () {
                  l(t);
                }) : (this.__chart__ = A, u(t), c(t), l(t));
              });
            }, t.translate = function (e) {
              return arguments.length ? (A = { x: +e[0], y: +e[1], k: A.k }, s(), t) : [A.x, A.y];
            }, t.scale = function (e) {
              return arguments.length ? (A = { x: A.x, y: A.y, k: null }, r(+e), s(), t) : A.k;
            }, t.scaleExtent = function (e) {
              return arguments.length ? (C = null == e ? Lo : [+e[0], +e[1]], t) : C;
            }, t.center = function (e) {
              return arguments.length ? (_ = e && [+e[0], +e[1]], t) : _;
            }, t.size = function (e) {
              return arguments.length ? (T = e && [+e[0], +e[1]], t) : T;
            }, t.duration = function (e) {
              return arguments.length ? (M = +e, t) : M;
            }, t.x = function (e) {
              return arguments.length ? (w = e, m = e.copy(), A = { x: 0, y: 0, k: 1 }, t) : w;
            }, t.y = function (e) {
              return arguments.length ? (b = e, S = e.copy(), A = { x: 0, y: 0, k: 1 }, t) : b;
            }, Ya.rebind(t, O, "on");
          };var Po,
              Co,
              Lo = [0, 1 / 0];Ya.color = ut, ut.prototype.toString = function () {
            return this.rgb() + "";
          }, Ya.hsl = ct;var Mo = ct.prototype = new ut();Mo.brighter = function (t) {
            return t = Math.pow(.7, arguments.length ? t : 1), new ct(this.h, this.s, this.l / t);
          }, Mo.darker = function (t) {
            return t = Math.pow(.7, arguments.length ? t : 1), new ct(this.h, this.s, t * this.l);
          }, Mo.rgb = function () {
            return lt(this.h, this.s, this.l);
          }, Ya.hcl = ht;var Eo = ht.prototype = new ut();Eo.brighter = function (t) {
            return new ht(this.h, this.c, Math.min(100, this.l + Vo * (arguments.length ? t : 1)));
          }, Eo.darker = function (t) {
            return new ht(this.h, this.c, Math.max(0, this.l - Vo * (arguments.length ? t : 1)));
          }, Eo.rgb = function () {
            return dt(this.h, this.c, this.l).rgb();
          }, Ya.lab = ft;var Vo = 18,
              Go = .95047,
              ko = 1,
              Ro = 1.08883,
              Oo = ft.prototype = new ut();Oo.brighter = function (t) {
            return new ft(Math.min(100, this.l + Vo * (arguments.length ? t : 1)), this.a, this.b);
          }, Oo.darker = function (t) {
            return new ft(Math.max(0, this.l - Vo * (arguments.length ? t : 1)), this.a, this.b);
          }, Oo.rgb = function () {
            return gt(this.l, this.a, this.b);
          }, Ya.rgb = vt;var Io = vt.prototype = new ut();Io.brighter = function (t) {
            t = Math.pow(.7, arguments.length ? t : 1);var e = this.r,
                n = this.g,
                i = this.b,
                r = 30;return e || n || i ? (e && e < r && (e = r), n && n < r && (n = r), i && i < r && (i = r), new vt(Math.min(255, e / t), Math.min(255, n / t), Math.min(255, i / t))) : new vt(r, r, r);
          }, Io.darker = function (t) {
            return t = Math.pow(.7, arguments.length ? t : 1), new vt(t * this.r, t * this.g, t * this.b);
          }, Io.hsl = function () {
            return At(this.r, this.g, this.b);
          }, Io.toString = function () {
            return "#" + St(this.r) + St(this.g) + St(this.b);
          };var Do = Ya.map({ aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 });Do.forEach(function (t, e) {
            Do.set(t, mt(e));
          }), Ya.functor = Lt, Ya.xhr = Mt(m), Ya.dsv = function (t, e) {
            function n(t, n, a) {
              arguments.length < 3 && (a = n, n = null);var o = Et(t, e, null == n ? i : r(n), a);return o.row = function (t) {
                return arguments.length ? o.response(null == (n = t) ? i : r(t)) : n;
              }, o;
            }function i(t) {
              return n.parse(t.responseText);
            }function r(t) {
              return function (e) {
                return n.parse(e.responseText, t);
              };
            }function a(e) {
              return e.map(o).join(t);
            }function o(t) {
              return s.test(t) ? '"' + t.replace(/\"/g, '""') + '"' : t;
            }var s = new RegExp('["' + t + "\n]"),
                u = t.charCodeAt(0);return n.parse = function (t, e) {
              var i;return n.parseRows(t, function (t, n) {
                if (i) return i(t, n - 1);var r = new Function("d", "return {" + t.map(function (t, e) {
                  return JSON.stringify(t) + ": d[" + e + "]";
                }).join(",") + "}");i = e ? function (t, n) {
                  return e(r(t), n);
                } : r;
              });
            }, n.parseRows = function (t, e) {
              function n() {
                if (l >= c) return o;if (r) return r = !1, a;var e = l;if (34 === t.charCodeAt(e)) {
                  for (var n = e; n++ < c;) {
                    if (34 === t.charCodeAt(n)) {
                      if (34 !== t.charCodeAt(n + 1)) break;++n;
                    }
                  }return l = n + 2, 13 === (i = t.charCodeAt(n + 1)) ? (r = !0, 10 === t.charCodeAt(n + 2) && ++l) : 10 === i && (r = !0), t.slice(e + 1, n).replace(/""/g, '"');
                }for (; l < c;) {
                  var i = t.charCodeAt(l++),
                      s = 1;if (10 === i) r = !0;else if (13 === i) r = !0, 10 === t.charCodeAt(l) && (++l, ++s);else if (i !== u) continue;return t.slice(e, l - s);
                }return t.slice(e);
              }for (var i, r, a = {}, o = {}, s = [], c = t.length, l = 0, h = 0; (i = n()) !== o;) {
                for (var d = []; i !== a && i !== o;) {
                  d.push(i), i = n();
                }e && null == (d = e(d, h++)) || s.push(d);
              }return s;
            }, n.format = function (e) {
              if (Array.isArray(e[0])) return n.formatRows(e);var i = new v(),
                  r = [];return e.forEach(function (t) {
                for (var e in t) {
                  i.has(e) || r.push(i.add(e));
                }
              }), [r.map(o).join(t)].concat(e.map(function (e) {
                return r.map(function (t) {
                  return o(e[t]);
                }).join(t);
              })).join("\n");
            }, n.formatRows = function (t) {
              return t.map(a).join("\n");
            }, n;
          }, Ya.csv = Ya.dsv(",", "text/csv"), Ya.tsv = Ya.dsv("\t", "text/tab-separated-values");var No,
              Fo,
              zo,
              Xo,
              Ho = this[S(this, "requestAnimationFrame")] || function (t) {
            setTimeout(t, 17);
          };Ya.timer = function () {
            kt.apply(this, arguments);
          }, Ya.timer.flush = function () {
            Ot(), It();
          }, Ya.round = function (t, e) {
            return e ? Math.round(t * (e = Math.pow(10, e))) / e : Math.round(t);
          };var Yo = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"].map(function (t, e) {
            var n = Math.pow(10, 3 * Ja(8 - e));return { scale: e > 8 ? function (t) {
                return t / n;
              } : function (t) {
                return t * n;
              }, symbol: t };
          });Ya.formatPrefix = function (t, e) {
            var n = 0;return (t = +t) && (t < 0 && (t *= -1), e && (t = Ya.round(t, Dt(t, e))), n = 1 + Math.floor(1e-12 + Math.log(t) / Math.LN10), n = Math.max(-24, Math.min(24, 3 * Math.floor((n - 1) / 3)))), Yo[8 + n / 3];
          };var Bo = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,
              jo = Ya.map({ b: function b(t) {
              return t.toString(2);
            }, c: function c(t) {
              return String.fromCharCode(t);
            }, o: function o(t) {
              return t.toString(8);
            }, x: function x(t) {
              return t.toString(16);
            }, X: function X(t) {
              return t.toString(16).toUpperCase();
            }, g: function g(t, e) {
              return t.toPrecision(e);
            }, e: function e(t, _e4) {
              return t.toExponential(_e4);
            }, f: function f(t, e) {
              return t.toFixed(e);
            }, r: function r(t, e) {
              return (t = Ya.round(t, Dt(t, e))).toFixed(Math.max(0, Math.min(20, Dt(t * (1 + 1e-15), e))));
            } }),
              Uo = Ya.time = {},
              qo = Date;zt.prototype = { getDate: function getDate() {
              return this._.getUTCDate();
            }, getDay: function getDay() {
              return this._.getUTCDay();
            }, getFullYear: function getFullYear() {
              return this._.getUTCFullYear();
            }, getHours: function getHours() {
              return this._.getUTCHours();
            }, getMilliseconds: function getMilliseconds() {
              return this._.getUTCMilliseconds();
            }, getMinutes: function getMinutes() {
              return this._.getUTCMinutes();
            }, getMonth: function getMonth() {
              return this._.getUTCMonth();
            }, getSeconds: function getSeconds() {
              return this._.getUTCSeconds();
            }, getTime: function getTime() {
              return this._.getTime();
            }, getTimezoneOffset: function getTimezoneOffset() {
              return 0;
            }, valueOf: function valueOf() {
              return this._.valueOf();
            }, setDate: function setDate() {
              Wo.setUTCDate.apply(this._, arguments);
            }, setDay: function setDay() {
              Wo.setUTCDay.apply(this._, arguments);
            }, setFullYear: function setFullYear() {
              Wo.setUTCFullYear.apply(this._, arguments);
            }, setHours: function setHours() {
              Wo.setUTCHours.apply(this._, arguments);
            }, setMilliseconds: function setMilliseconds() {
              Wo.setUTCMilliseconds.apply(this._, arguments);
            }, setMinutes: function setMinutes() {
              Wo.setUTCMinutes.apply(this._, arguments);
            }, setMonth: function setMonth() {
              Wo.setUTCMonth.apply(this._, arguments);
            }, setSeconds: function setSeconds() {
              Wo.setUTCSeconds.apply(this._, arguments);
            }, setTime: function setTime() {
              Wo.setTime.apply(this._, arguments);
            } };var Wo = Date.prototype;Uo.year = Xt(function (t) {
            return (t = Uo.day(t)).setMonth(0, 1), t;
          }, function (t, e) {
            t.setFullYear(t.getFullYear() + e);
          }, function (t) {
            return t.getFullYear();
          }), Uo.years = Uo.year.range, Uo.years.utc = Uo.year.utc.range, Uo.day = Xt(function (t) {
            var e = new qo(2e3, 0);return e.setFullYear(t.getFullYear(), t.getMonth(), t.getDate()), e;
          }, function (t, e) {
            t.setDate(t.getDate() + e);
          }, function (t) {
            return t.getDate() - 1;
          }), Uo.days = Uo.day.range, Uo.days.utc = Uo.day.utc.range, Uo.dayOfYear = function (t) {
            var e = Uo.year(t);return Math.floor((t - e - 6e4 * (t.getTimezoneOffset() - e.getTimezoneOffset())) / 864e5);
          }, ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"].forEach(function (t, e) {
            e = 7 - e;var n = Uo[t] = Xt(function (t) {
              return (t = Uo.day(t)).setDate(t.getDate() - (t.getDay() + e) % 7), t;
            }, function (t, e) {
              t.setDate(t.getDate() + 7 * Math.floor(e));
            }, function (t) {
              var n = Uo.year(t).getDay();return Math.floor((Uo.dayOfYear(t) + (n + e) % 7) / 7) - (n !== e);
            });Uo[t + "s"] = n.range, Uo[t + "s"].utc = n.utc.range, Uo[t + "OfYear"] = function (t) {
              var n = Uo.year(t).getDay();return Math.floor((Uo.dayOfYear(t) + (n + e) % 7) / 7);
            };
          }), Uo.week = Uo.sunday, Uo.weeks = Uo.sunday.range, Uo.weeks.utc = Uo.sunday.utc.range, Uo.weekOfYear = Uo.sundayOfYear;var Qo = { "-": "", _: " ", 0: "0" },
              Zo = /^\s*\d+/,
              Ko = /^%/;Ya.locale = function (t) {
            return { numberFormat: Nt(t), timeFormat: Yt(t) };
          };var $o = Ya.locale({ decimal: ".", thousands: ",", grouping: [3], currency: ["$", ""], dateTime: "%a %b %e %X %Y", date: "%m/%d/%Y", time: "%H:%M:%S", periods: ["AM", "PM"], days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] });Ya.format = $o.numberFormat, Ya.geo = {}, le.prototype = { s: 0, t: 0, add: function add(t) {
              he(t, this.t, Jo), he(Jo.s, this.s, this), this.s ? this.t += Jo.t : this.s = Jo.t;
            }, reset: function reset() {
              this.s = this.t = 0;
            }, valueOf: function valueOf() {
              return this.s;
            } };var Jo = new le();Ya.geo.stream = function (t, e) {
            t && ts.hasOwnProperty(t.type) ? ts[t.type](t, e) : de(t, e);
          };var ts = { Feature: function Feature(t, e) {
              de(t.geometry, e);
            }, FeatureCollection: function FeatureCollection(t, e) {
              for (var n = t.features, i = -1, r = n.length; ++i < r;) {
                de(n[i].geometry, e);
              }
            } },
              es = { Sphere: function Sphere(t, e) {
              e.sphere();
            }, Point: function Point(t, e) {
              t = t.coordinates, e.point(t[0], t[1], t[2]);
            }, MultiPoint: function MultiPoint(t, e) {
              for (var n = t.coordinates, i = -1, r = n.length; ++i < r;) {
                t = n[i], e.point(t[0], t[1], t[2]);
              }
            }, LineString: function LineString(t, e) {
              fe(t.coordinates, e, 0);
            }, MultiLineString: function MultiLineString(t, e) {
              for (var n = t.coordinates, i = -1, r = n.length; ++i < r;) {
                fe(n[i], e, 0);
              }
            }, Polygon: function Polygon(t, e) {
              ge(t.coordinates, e);
            }, MultiPolygon: function MultiPolygon(t, e) {
              for (var n = t.coordinates, i = -1, r = n.length; ++i < r;) {
                ge(n[i], e);
              }
            }, GeometryCollection: function GeometryCollection(t, e) {
              for (var n = t.geometries, i = -1, r = n.length; ++i < r;) {
                de(n[i], e);
              }
            } };Ya.geo.area = function (t) {
            return ns = 0, Ya.geo.stream(t, rs), ns;
          };var ns,
              is = new le(),
              rs = { sphere: function sphere() {
              ns += 4 * vo;
            }, point: b, lineStart: b, lineEnd: b, polygonStart: function polygonStart() {
              is.reset(), rs.lineStart = pe;
            }, polygonEnd: function polygonEnd() {
              var t = 2 * is;ns += t < 0 ? 4 * vo + t : t, rs.lineStart = rs.lineEnd = rs.point = b;
            } };Ya.geo.bounds = function () {
            function t(t, e) {
              v.push(m = [l = t, d = t]), e < h && (h = e), e > f && (f = e);
            }function e(e, n) {
              var i = xe([e * bo, n * bo]);if (_) {
                var r = ye(_, i),
                    a = ye([r[1], -r[0], 0], r);we(a), a = Se(a);var o = e - g,
                    u = o > 0 ? 1 : -1,
                    c = a[0] * Ao * u,
                    p = Ja(o) > 180;if (p ^ (u * g < c && c < u * e)) (x = a[1] * Ao) > f && (f = x);else if (c = (c + 360) % 360 - 180, p ^ (u * g < c && c < u * e)) {
                  var x = -a[1] * Ao;x < h && (h = x);
                } else n < h && (h = n), n > f && (f = n);p ? e < g ? s(l, e) > s(l, d) && (d = e) : s(e, d) > s(l, d) && (l = e) : d >= l ? (e < l && (l = e), e > d && (d = e)) : e > g ? s(l, e) > s(l, d) && (d = e) : s(e, d) > s(l, d) && (l = e);
              } else t(e, n);_ = i, g = e;
            }function n() {
              w.point = e;
            }function i() {
              m[0] = l, m[1] = d, w.point = t, _ = null;
            }function r(t, n) {
              if (_) {
                var i = t - g;y += Ja(i) > 180 ? i + (i > 0 ? 360 : -360) : i;
              } else p = t, x = n;rs.point(t, n), e(t, n);
            }function a() {
              rs.lineStart();
            }function o() {
              r(p, x), rs.lineEnd(), Ja(y) > _o && (l = -(d = 180)), m[0] = l, m[1] = d, _ = null;
            }function s(t, e) {
              return (e -= t) < 0 ? e + 360 : e;
            }function u(t, e) {
              return t[0] - e[0];
            }function c(t, e) {
              return e[0] <= e[1] ? e[0] <= t && t <= e[1] : t < e[0] || e[1] < t;
            }var l,
                h,
                d,
                f,
                g,
                p,
                x,
                _,
                y,
                v,
                m,
                w = { point: t, lineStart: n, lineEnd: i, polygonStart: function polygonStart() {
                w.point = r, w.lineStart = a, w.lineEnd = o, y = 0, rs.polygonStart();
              }, polygonEnd: function polygonEnd() {
                rs.polygonEnd(), w.point = t, w.lineStart = n, w.lineEnd = i, is < 0 ? (l = -(d = 180), h = -(f = 90)) : y > _o ? f = 90 : y < -_o && (h = -90), m[0] = l, m[1] = d;
              } };return function (t) {
              f = d = -(l = h = 1 / 0), v = [], Ya.geo.stream(t, w);var e = v.length;if (e) {
                v.sort(u);for (var n = 1, i = [g = v[0]]; n < e; ++n) {
                  c((a = v[n])[0], g) || c(a[1], g) ? (s(g[0], a[1]) > s(g[0], g[1]) && (g[1] = a[1]), s(a[0], g[1]) > s(g[0], g[1]) && (g[0] = a[0])) : i.push(g = a);
                }for (var r, a, o = -1 / 0, n = 0, g = i[e = i.length - 1]; n <= e; g = a, ++n) {
                  a = i[n], (r = s(g[1], a[0])) > o && (o = r, l = a[0], d = g[1]);
                }
              }return v = m = null, l === 1 / 0 || h === 1 / 0 ? [[NaN, NaN], [NaN, NaN]] : [[l, h], [d, f]];
            };
          }(), Ya.geo.centroid = function (t) {
            as = os = ss = us = cs = ls = hs = ds = fs = gs = ps = 0, Ya.geo.stream(t, xs);var e = fs,
                n = gs,
                i = ps,
                r = e * e + n * n + i * i;return r < yo && (e = ls, n = hs, i = ds, os < _o && (e = ss, n = us, i = cs), (r = e * e + n * n + i * i) < yo) ? [NaN, NaN] : [Math.atan2(n, e) * Ao, it(i / Math.sqrt(r)) * Ao];
          };var as,
              os,
              ss,
              us,
              cs,
              ls,
              hs,
              ds,
              fs,
              gs,
              ps,
              xs = { sphere: b, point: Ae, lineStart: Pe, lineEnd: Ce, polygonStart: function polygonStart() {
              xs.lineStart = Le;
            }, polygonEnd: function polygonEnd() {
              xs.lineStart = Pe;
            } },
              _s = Re(Ee, function (t) {
            var e,
                n = NaN,
                i = NaN,
                r = NaN;return { lineStart: function lineStart() {
                t.lineStart(), e = 1;
              }, point: function point(a, o) {
                var s = a > 0 ? vo : -vo,
                    u = Ja(a - n);Ja(u - vo) < _o ? (t.point(n, i = (i + o) / 2 > 0 ? So : -So), t.point(r, i), t.lineEnd(), t.lineStart(), t.point(s, i), t.point(a, i), e = 0) : r !== s && u >= vo && (Ja(n - r) < _o && (n -= r * _o), Ja(a - s) < _o && (a -= s * _o), i = Ne(n, i, a, o), t.point(r, i), t.lineEnd(), t.lineStart(), t.point(s, i), e = 0), t.point(n = a, i = o), r = s;
              }, lineEnd: function lineEnd() {
                t.lineEnd(), n = i = NaN;
              }, clean: function clean() {
                return 2 - e;
              } };
          }, function (t, e, n, i) {
            var r;if (null == t) r = n * So, i.point(-vo, r), i.point(0, r), i.point(vo, r), i.point(vo, 0), i.point(vo, -r), i.point(0, -r), i.point(-vo, -r), i.point(-vo, 0), i.point(-vo, r);else if (Ja(t[0] - e[0]) > _o) {
              var a = t[0] < e[0] ? vo : -vo;r = n * a / 2, i.point(-a, r), i.point(0, r), i.point(a, r);
            } else i.point(e[0], e[1]);
          }, [-vo, -vo / 2]),
              ys = 1e9;Ya.geo.clipExtent = function () {
            var t,
                e,
                n,
                i,
                r,
                a,
                o = { stream: function stream(t) {
                return r && (r.valid = !1), r = a(t), r.valid = !0, r;
              }, extent: function extent(s) {
                return arguments.length ? (a = He(t = +s[0][0], e = +s[0][1], n = +s[1][0], i = +s[1][1]), r && (r.valid = !1, r = null), o) : [[t, e], [n, i]];
              } };return o.extent([[0, 0], [960, 500]]);
          }, (Ya.geo.conicEqualArea = function () {
            return Ye(Be);
          }).raw = Be, Ya.geo.albers = function () {
            return Ya.geo.conicEqualArea().rotate([96, 0]).center([-.6, 38.7]).parallels([29.5, 45.5]).scale(1070);
          }, Ya.geo.albersUsa = function () {
            function t(t) {
              var a = t[0],
                  o = t[1];return e = null, n(a, o), e || (i(a, o), e) || r(a, o), e;
            }var e,
                n,
                i,
                r,
                a = Ya.geo.albers(),
                o = Ya.geo.conicEqualArea().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
                s = Ya.geo.conicEqualArea().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]),
                u = { point: function point(t, n) {
                e = [t, n];
              } };return t.invert = function (t) {
              var e = a.scale(),
                  n = a.translate(),
                  i = (t[0] - n[0]) / e,
                  r = (t[1] - n[1]) / e;return (r >= .12 && r < .234 && i >= -.425 && i < -.214 ? o : r >= .166 && r < .234 && i >= -.214 && i < -.115 ? s : a).invert(t);
            }, t.stream = function (t) {
              var e = a.stream(t),
                  n = o.stream(t),
                  i = s.stream(t);return { point: function point(t, r) {
                  e.point(t, r), n.point(t, r), i.point(t, r);
                }, sphere: function sphere() {
                  e.sphere(), n.sphere(), i.sphere();
                }, lineStart: function lineStart() {
                  e.lineStart(), n.lineStart(), i.lineStart();
                }, lineEnd: function lineEnd() {
                  e.lineEnd(), n.lineEnd(), i.lineEnd();
                }, polygonStart: function polygonStart() {
                  e.polygonStart(), n.polygonStart(), i.polygonStart();
                }, polygonEnd: function polygonEnd() {
                  e.polygonEnd(), n.polygonEnd(), i.polygonEnd();
                } };
            }, t.precision = function (e) {
              return arguments.length ? (a.precision(e), o.precision(e), s.precision(e), t) : a.precision();
            }, t.scale = function (e) {
              return arguments.length ? (a.scale(e), o.scale(.35 * e), s.scale(e), t.translate(a.translate())) : a.scale();
            }, t.translate = function (e) {
              if (!arguments.length) return a.translate();var c = a.scale(),
                  l = +e[0],
                  h = +e[1];return n = a.translate(e).clipExtent([[l - .455 * c, h - .238 * c], [l + .455 * c, h + .238 * c]]).stream(u).point, i = o.translate([l - .307 * c, h + .201 * c]).clipExtent([[l - .425 * c + _o, h + .12 * c + _o], [l - .214 * c - _o, h + .234 * c - _o]]).stream(u).point, r = s.translate([l - .205 * c, h + .212 * c]).clipExtent([[l - .214 * c + _o, h + .166 * c + _o], [l - .115 * c - _o, h + .234 * c - _o]]).stream(u).point, t;
            }, t.scale(1070);
          };var vs,
              ms,
              ws,
              Ss,
              bs,
              As,
              Ts = { point: b, lineStart: b, lineEnd: b, polygonStart: function polygonStart() {
              ms = 0, Ts.lineStart = je;
            }, polygonEnd: function polygonEnd() {
              Ts.lineStart = Ts.lineEnd = Ts.point = b, vs += Ja(ms / 2);
            } },
              Ps = { point: function point(t, e) {
              t < ws && (ws = t), t > bs && (bs = t), e < Ss && (Ss = e), e > As && (As = e);
            }, lineStart: b, lineEnd: b, polygonStart: b, polygonEnd: b },
              Cs = { point: We, lineStart: Qe, lineEnd: Ze, polygonStart: function polygonStart() {
              Cs.lineStart = Ke;
            }, polygonEnd: function polygonEnd() {
              Cs.point = We, Cs.lineStart = Qe, Cs.lineEnd = Ze;
            } };Ya.geo.path = function () {
            function t(t) {
              return t && ("function" == typeof s && a.pointRadius(+s.apply(this, arguments)), o && o.valid || (o = r(a)), Ya.geo.stream(t, o)), a.result();
            }function e() {
              return o = null, t;
            }var n,
                i,
                r,
                a,
                o,
                s = 4.5;return t.area = function (t) {
              return vs = 0, Ya.geo.stream(t, r(Ts)), vs;
            }, t.centroid = function (t) {
              return ss = us = cs = ls = hs = ds = fs = gs = ps = 0, Ya.geo.stream(t, r(Cs)), ps ? [fs / ps, gs / ps] : ds ? [ls / ds, hs / ds] : cs ? [ss / cs, us / cs] : [NaN, NaN];
            }, t.bounds = function (t) {
              return bs = As = -(ws = Ss = 1 / 0), Ya.geo.stream(t, r(Ps)), [[ws, Ss], [bs, As]];
            }, t.projection = function (t) {
              return arguments.length ? (r = (n = t) ? t.stream || tn(t) : m, e()) : n;
            }, t.context = function (t) {
              return arguments.length ? (a = null == (i = t) ? new Ue() : new $e(t), "function" != typeof s && a.pointRadius(s), e()) : i;
            }, t.pointRadius = function (e) {
              return arguments.length ? (s = "function" == typeof e ? e : (a.pointRadius(+e), +e), t) : s;
            }, t.projection(Ya.geo.albersUsa()).context(null);
          }, Ya.geo.transform = function (t) {
            return { stream: function stream(e) {
                var n = new en(e);for (var i in t) {
                  n[i] = t[i];
                }return n;
              } };
          }, en.prototype = { point: function point(t, e) {
              this.stream.point(t, e);
            }, sphere: function sphere() {
              this.stream.sphere();
            }, lineStart: function lineStart() {
              this.stream.lineStart();
            }, lineEnd: function lineEnd() {
              this.stream.lineEnd();
            }, polygonStart: function polygonStart() {
              this.stream.polygonStart();
            }, polygonEnd: function polygonEnd() {
              this.stream.polygonEnd();
            } }, Ya.geo.projection = rn, Ya.geo.projectionMutator = an, (Ya.geo.equirectangular = function () {
            return rn(sn);
          }).raw = sn.invert = sn, Ya.geo.rotation = function (t) {
            function e(e) {
              return e = t(e[0] * bo, e[1] * bo), e[0] *= Ao, e[1] *= Ao, e;
            }return t = cn(t[0] % 360 * bo, t[1] * bo, t.length > 2 ? t[2] * bo : 0), e.invert = function (e) {
              return e = t.invert(e[0] * bo, e[1] * bo), e[0] *= Ao, e[1] *= Ao, e;
            }, e;
          }, un.invert = sn, Ya.geo.circle = function () {
            function t() {
              var t = "function" == typeof i ? i.apply(this, arguments) : i,
                  e = cn(-t[0] * bo, -t[1] * bo, 0).invert,
                  r = [];return n(null, null, 1, { point: function point(t, n) {
                  r.push(t = e(t, n)), t[0] *= Ao, t[1] *= Ao;
                } }), { type: "Polygon", coordinates: [r] };
            }var e,
                n,
                i = [0, 0],
                r = 6;return t.origin = function (e) {
              return arguments.length ? (i = e, t) : i;
            }, t.angle = function (i) {
              return arguments.length ? (n = fn((e = +i) * bo, r * bo), t) : e;
            }, t.precision = function (i) {
              return arguments.length ? (n = fn(e * bo, (r = +i) * bo), t) : r;
            }, t.angle(90);
          }, Ya.geo.distance = function (t, e) {
            var n,
                i = (e[0] - t[0]) * bo,
                r = t[1] * bo,
                a = e[1] * bo,
                o = Math.sin(i),
                s = Math.cos(i),
                u = Math.sin(r),
                c = Math.cos(r),
                l = Math.sin(a),
                h = Math.cos(a);return Math.atan2(Math.sqrt((n = h * o) * n + (n = c * l - u * h * s) * n), u * l + c * h * s);
          }, Ya.geo.graticule = function () {
            function t() {
              return { type: "MultiLineString", coordinates: e() };
            }function e() {
              return Ya.range(Math.ceil(a / x) * x, r, x).map(d).concat(Ya.range(Math.ceil(c / _) * _, u, _).map(f)).concat(Ya.range(Math.ceil(i / g) * g, n, g).filter(function (t) {
                return Ja(t % x) > _o;
              }).map(l)).concat(Ya.range(Math.ceil(s / p) * p, o, p).filter(function (t) {
                return Ja(t % _) > _o;
              }).map(h));
            }var n,
                i,
                r,
                a,
                o,
                s,
                u,
                c,
                l,
                h,
                d,
                f,
                g = 10,
                p = g,
                x = 90,
                _ = 360,
                y = 2.5;return t.lines = function () {
              return e().map(function (t) {
                return { type: "LineString", coordinates: t };
              });
            }, t.outline = function () {
              return { type: "Polygon", coordinates: [d(a).concat(f(u).slice(1), d(r).reverse().slice(1), f(c).reverse().slice(1))] };
            }, t.extent = function (e) {
              return arguments.length ? t.majorExtent(e).minorExtent(e) : t.minorExtent();
            }, t.majorExtent = function (e) {
              return arguments.length ? (a = +e[0][0], r = +e[1][0], c = +e[0][1], u = +e[1][1], a > r && (e = a, a = r, r = e), c > u && (e = c, c = u, u = e), t.precision(y)) : [[a, c], [r, u]];
            }, t.minorExtent = function (e) {
              return arguments.length ? (i = +e[0][0], n = +e[1][0], s = +e[0][1], o = +e[1][1], i > n && (e = i, i = n, n = e), s > o && (e = s, s = o, o = e), t.precision(y)) : [[i, s], [n, o]];
            }, t.step = function (e) {
              return arguments.length ? t.majorStep(e).minorStep(e) : t.minorStep();
            }, t.majorStep = function (e) {
              return arguments.length ? (x = +e[0], _ = +e[1], t) : [x, _];
            }, t.minorStep = function (e) {
              return arguments.length ? (g = +e[0], p = +e[1], t) : [g, p];
            }, t.precision = function (e) {
              return arguments.length ? (y = +e, l = pn(s, o, 90), h = xn(i, n, y), d = pn(c, u, 90), f = xn(a, r, y), t) : y;
            }, t.majorExtent([[-180, -90 + _o], [180, 90 - _o]]).minorExtent([[-180, -80 - _o], [180, 80 + _o]]);
          }, Ya.geo.greatArc = function () {
            function t() {
              return { type: "LineString", coordinates: [e || i.apply(this, arguments), n || r.apply(this, arguments)] };
            }var e,
                n,
                i = _n,
                r = yn;return t.distance = function () {
              return Ya.geo.distance(e || i.apply(this, arguments), n || r.apply(this, arguments));
            }, t.source = function (n) {
              return arguments.length ? (i = n, e = "function" == typeof n ? null : n, t) : i;
            }, t.target = function (e) {
              return arguments.length ? (r = e, n = "function" == typeof e ? null : e, t) : r;
            }, t.precision = function () {
              return arguments.length ? t : 0;
            }, t;
          }, Ya.geo.interpolate = function (t, e) {
            return vn(t[0] * bo, t[1] * bo, e[0] * bo, e[1] * bo);
          }, Ya.geo.length = function (t) {
            return Ls = 0, Ya.geo.stream(t, Ms), Ls;
          };var Ls,
              Ms = { sphere: b, point: b, lineStart: function lineStart() {
              function t(t, r) {
                var a = Math.sin(r *= bo),
                    o = Math.cos(r),
                    s = Ja((t *= bo) - e),
                    u = Math.cos(s);Ls += Math.atan2(Math.sqrt((s = o * Math.sin(s)) * s + (s = i * a - n * o * u) * s), n * a + i * o * u), e = t, n = a, i = o;
              }var e, n, i;Ms.point = function (r, a) {
                e = r * bo, n = Math.sin(a *= bo), i = Math.cos(a), Ms.point = t;
              }, Ms.lineEnd = function () {
                Ms.point = Ms.lineEnd = b;
              };
            }, lineEnd: b, polygonStart: b, polygonEnd: b },
              Es = mn(function (t) {
            return Math.sqrt(2 / (1 + t));
          }, function (t) {
            return 2 * Math.asin(t / 2);
          });(Ya.geo.azimuthalEqualArea = function () {
            return rn(Es);
          }).raw = Es;var Vs = mn(function (t) {
            var e = Math.acos(t);return e && e / Math.sin(e);
          }, m);(Ya.geo.azimuthalEquidistant = function () {
            return rn(Vs);
          }).raw = Vs, (Ya.geo.conicConformal = function () {
            return Ye(wn);
          }).raw = wn, (Ya.geo.conicEquidistant = function () {
            return Ye(Sn);
          }).raw = Sn;var Gs = mn(function (t) {
            return 1 / t;
          }, Math.atan);(Ya.geo.gnomonic = function () {
            return rn(Gs);
          }).raw = Gs, bn.invert = function (t, e) {
            return [t, 2 * Math.atan(Math.exp(e)) - So];
          }, (Ya.geo.mercator = function () {
            return An(bn);
          }).raw = bn;var ks = mn(function () {
            return 1;
          }, Math.asin);(Ya.geo.orthographic = function () {
            return rn(ks);
          }).raw = ks;var Rs = mn(function (t) {
            return 1 / (1 + t);
          }, function (t) {
            return 2 * Math.atan(t);
          });(Ya.geo.stereographic = function () {
            return rn(Rs);
          }).raw = Rs, Tn.invert = function (t, e) {
            return [-e, 2 * Math.atan(Math.exp(t)) - So];
          }, (Ya.geo.transverseMercator = function () {
            var t = An(Tn),
                e = t.center,
                n = t.rotate;return t.center = function (t) {
              return t ? e([-t[1], t[0]]) : (t = e(), [t[1], -t[0]]);
            }, t.rotate = function (t) {
              return t ? n([t[0], t[1], t.length > 2 ? t[2] + 90 : 90]) : (t = n(), [t[0], t[1], t[2] - 90]);
            }, n([0, 0, 90]);
          }).raw = Tn, Ya.geom = {}, Ya.geom.hull = function (t) {
            function e(t) {
              if (t.length < 3) return [];var e,
                  r = Lt(n),
                  a = Lt(i),
                  o = t.length,
                  s = [],
                  u = [];for (e = 0; e < o; e++) {
                s.push([+r.call(this, t[e], e), +a.call(this, t[e], e), e]);
              }for (s.sort(Mn), e = 0; e < o; e++) {
                u.push([s[e][0], -s[e][1]]);
              }var c = Ln(s),
                  l = Ln(u),
                  h = l[0] === c[0],
                  d = l[l.length - 1] === c[c.length - 1],
                  f = [];for (e = c.length - 1; e >= 0; --e) {
                f.push(t[s[c[e]][2]]);
              }for (e = +h; e < l.length - d; ++e) {
                f.push(t[s[l[e]][2]]);
              }return f;
            }var n = Pn,
                i = Cn;return arguments.length ? e(t) : (e.x = function (t) {
              return arguments.length ? (n = t, e) : n;
            }, e.y = function (t) {
              return arguments.length ? (i = t, e) : i;
            }, e);
          }, Ya.geom.polygon = function (t) {
            return ro(t, Os), t;
          };var Os = Ya.geom.polygon.prototype = [];Os.area = function () {
            for (var t, e = -1, n = this.length, i = this[n - 1], r = 0; ++e < n;) {
              t = i, i = this[e], r += t[1] * i[0] - t[0] * i[1];
            }return .5 * r;
          }, Os.centroid = function (t) {
            var e,
                n,
                i = -1,
                r = this.length,
                a = 0,
                o = 0,
                s = this[r - 1];for (arguments.length || (t = -1 / (6 * this.area())); ++i < r;) {
              e = s, s = this[i], n = e[0] * s[1] - s[0] * e[1], a += (e[0] + s[0]) * n, o += (e[1] + s[1]) * n;
            }return [a * t, o * t];
          }, Os.clip = function (t) {
            for (var e, n, i, r, a, o, s = Gn(t), u = -1, c = this.length - Gn(this), l = this[c - 1]; ++u < c;) {
              for (e = t.slice(), t.length = 0, r = this[u], a = e[(i = e.length - s) - 1], n = -1; ++n < i;) {
                En(o = e[n], l, r) ? (En(a, l, r) || t.push(Vn(a, o, l, r)), t.push(o)) : En(a, l, r) && t.push(Vn(a, o, l, r)), a = o;
              }s && t.push(t[0]), l = r;
            }return t;
          };var Is,
              Ds,
              Ns,
              Fs,
              zs,
              Xs = [],
              Hs = [];zn.prototype.prepare = function () {
            for (var t, e = this.edges, n = e.length; n--;) {
              (t = e[n].edge).b && t.a || e.splice(n, 1);
            }return e.sort(Hn), e.length;
          }, $n.prototype = { start: function start() {
              return this.edge.l === this.site ? this.edge.a : this.edge.b;
            }, end: function end() {
              return this.edge.l === this.site ? this.edge.b : this.edge.a;
            } }, Jn.prototype = { insert: function insert(t, e) {
              var n, i, r;if (t) {
                if (e.P = t, e.N = t.N, t.N && (t.N.P = e), t.N = e, t.R) {
                  for (t = t.R; t.L;) {
                    t = t.L;
                  }t.L = e;
                } else t.R = e;n = t;
              } else this._ ? (t = ii(this._), e.P = null, e.N = t, t.P = t.L = e, n = t) : (e.P = e.N = null, this._ = e, n = null);for (e.L = e.R = null, e.U = n, e.C = !0, t = e; n && n.C;) {
                n === (i = n.U).L ? (r = i.R) && r.C ? (n.C = r.C = !1, i.C = !0, t = i) : (t === n.R && (ei(this, n), n = (t = n).U), n.C = !1, i.C = !0, ni(this, i)) : (r = i.L) && r.C ? (n.C = r.C = !1, i.C = !0, t = i) : (t === n.L && (ni(this, n), n = (t = n).U), n.C = !1, i.C = !0, ei(this, i)), n = t.U;
              }this._.C = !1;
            }, remove: function remove(t) {
              t.N && (t.N.P = t.P), t.P && (t.P.N = t.N), t.N = t.P = null;var e,
                  n,
                  i,
                  r = t.U,
                  a = t.L,
                  o = t.R;if (n = a ? o ? ii(o) : a : o, r ? r.L === t ? r.L = n : r.R = n : this._ = n, a && o ? (i = n.C, n.C = t.C, n.L = a, a.U = n, n !== o ? (r = n.U, n.U = t.U, t = n.R, r.L = t, n.R = o, o.U = n) : (n.U = r, r = n, t = n.R)) : (i = t.C, t = n), t && (t.U = r), !i) if (t && t.C) t.C = !1;else {
                do {
                  if (t === this._) break;if (t === r.L) {
                    if ((e = r.R).C && (e.C = !1, r.C = !0, ei(this, r), e = r.R), e.L && e.L.C || e.R && e.R.C) {
                      e.R && e.R.C || (e.L.C = !1, e.C = !0, ni(this, e), e = r.R), e.C = r.C, r.C = e.R.C = !1, ei(this, r), t = this._;break;
                    }
                  } else if ((e = r.L).C && (e.C = !1, r.C = !0, ni(this, r), e = r.L), e.L && e.L.C || e.R && e.R.C) {
                    e.L && e.L.C || (e.R.C = !1, e.C = !0, ei(this, e), e = r.L), e.C = r.C, r.C = e.L.C = !1, ni(this, r), t = this._;break;
                  }e.C = !0, t = r, r = r.U;
                } while (!t.C);t && (t.C = !1);
              }
            } }, Ya.geom.voronoi = function (t) {
            function e(t) {
              var e = new Array(t.length),
                  i = s[0][0],
                  r = s[0][1],
                  a = s[1][0],
                  o = s[1][1];return ri(n(t), s).cells.forEach(function (n, s) {
                var u = n.edges,
                    c = n.site;(e[s] = u.length ? u.map(function (t) {
                  var e = t.start();return [e.x, e.y];
                }) : c.x >= i && c.x <= a && c.y >= r && c.y <= o ? [[i, o], [a, o], [a, r], [i, r]] : []).point = t[s];
              }), e;
            }function n(t) {
              return t.map(function (t, e) {
                return { x: Math.round(a(t, e) / _o) * _o, y: Math.round(o(t, e) / _o) * _o, i: e };
              });
            }var i = Pn,
                r = Cn,
                a = i,
                o = r,
                s = Ys;return t ? e(t) : (e.links = function (t) {
              return ri(n(t)).edges.filter(function (t) {
                return t.l && t.r;
              }).map(function (e) {
                return { source: t[e.l.i], target: t[e.r.i] };
              });
            }, e.triangles = function (t) {
              var e = [];return ri(n(t)).cells.forEach(function (n, i) {
                for (var r, a = n.site, o = n.edges.sort(Hn), s = -1, u = o.length, c = o[u - 1].edge, l = c.l === a ? c.r : c.l; ++s < u;) {
                  c, r = l, l = (c = o[s].edge).l === a ? c.r : c.l, i < r.i && i < l.i && oi(a, r, l) < 0 && e.push([t[i], t[r.i], t[l.i]]);
                }
              }), e;
            }, e.x = function (t) {
              return arguments.length ? (a = Lt(i = t), e) : i;
            }, e.y = function (t) {
              return arguments.length ? (o = Lt(r = t), e) : r;
            }, e.clipExtent = function (t) {
              return arguments.length ? (s = null == t ? Ys : t, e) : s === Ys ? null : s;
            }, e.size = function (t) {
              return arguments.length ? e.clipExtent(t && [[0, 0], t]) : s === Ys ? null : s && s[1];
            }, e);
          };var Ys = [[-1e6, -1e6], [1e6, 1e6]];Ya.geom.delaunay = function (t) {
            return Ya.geom.voronoi().triangles(t);
          }, Ya.geom.quadtree = function (t, e, n, i, r) {
            function a(t) {
              function a(t, e, n, i, r, a, o, s) {
                if (!isNaN(n) && !isNaN(i)) if (t.leaf) {
                  var u = t.x,
                      l = t.y;if (null != u) {
                    if (Ja(u - n) + Ja(l - i) < .01) c(t, e, n, i, r, a, o, s);else {
                      var h = t.point;t.x = t.y = t.point = null, c(t, h, u, l, r, a, o, s), c(t, e, n, i, r, a, o, s);
                    }
                  } else t.x = n, t.y = i, t.point = e;
                } else c(t, e, n, i, r, a, o, s);
              }function c(t, e, n, i, r, o, s, u) {
                var c = .5 * (r + s),
                    l = .5 * (o + u),
                    h = n >= c,
                    d = i >= l,
                    f = d << 1 | h;t.leaf = !1, t = t.nodes[f] || (t.nodes[f] = { leaf: !0, nodes: [], point: null, x: null, y: null }), h ? r = c : s = c, d ? o = l : u = l, a(t, e, n, i, r, o, s, u);
              }var l,
                  h,
                  d,
                  f,
                  g,
                  p,
                  x,
                  _,
                  y,
                  v = Lt(s),
                  m = Lt(u);if (null != e) p = e, x = n, _ = i, y = r;else if (_ = y = -(p = x = 1 / 0), h = [], d = [], g = t.length, o) for (f = 0; f < g; ++f) {
                (l = t[f]).x < p && (p = l.x), l.y < x && (x = l.y), l.x > _ && (_ = l.x), l.y > y && (y = l.y), h.push(l.x), d.push(l.y);
              } else for (f = 0; f < g; ++f) {
                var w = +v(l = t[f], f),
                    S = +m(l, f);w < p && (p = w), S < x && (x = S), w > _ && (_ = w), S > y && (y = S), h.push(w), d.push(S);
              }var b = _ - p,
                  A = y - x;b > A ? y = x + b : _ = p + A;var T = { leaf: !0, nodes: [], point: null, x: null, y: null };if (T.add = function (t) {
                a(T, t, +v(t, ++f), +m(t, f), p, x, _, y);
              }, T.visit = function (t) {
                ci(t, T, p, x, _, y);
              }, T.find = function (t) {
                return li(T, t[0], t[1], p, x, _, y);
              }, f = -1, null == e) {
                for (; ++f < g;) {
                  a(T, t[f], h[f], d[f], p, x, _, y);
                }--f;
              } else t.forEach(T.add);return h = d = t = l = null, T;
            }var o,
                s = Pn,
                u = Cn;return (o = arguments.length) ? (s = si, u = ui, 3 === o && (r = n, i = e, n = e = 0), a(t)) : (a.x = function (t) {
              return arguments.length ? (s = t, a) : s;
            }, a.y = function (t) {
              return arguments.length ? (u = t, a) : u;
            }, a.extent = function (t) {
              return arguments.length ? (null == t ? e = n = i = r = null : (e = +t[0][0], n = +t[0][1], i = +t[1][0], r = +t[1][1]), a) : null == e ? null : [[e, n], [i, r]];
            }, a.size = function (t) {
              return arguments.length ? (null == t ? e = n = i = r = null : (e = n = 0, i = +t[0], r = +t[1]), a) : null == e ? null : [i - e, r - n];
            }, a);
          }, Ya.interpolateRgb = hi, Ya.interpolateObject = di, Ya.interpolateNumber = fi, Ya.interpolateString = gi;var Bs = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
              js = new RegExp(Bs.source, "g");Ya.interpolate = pi, Ya.interpolators = [function (t, e) {
            var n = void 0 === e ? "undefined" : i(e);return ("string" === n ? Do.has(e.toLowerCase()) || /^(#|rgb\(|hsl\()/i.test(e) ? hi : gi : e instanceof ut ? hi : Array.isArray(e) ? xi : "object" === n && isNaN(e) ? di : fi)(t, e);
          }], Ya.interpolateArray = xi;var Us = function Us() {
            return m;
          },
              qs = Ya.map({ linear: Us, poly: function poly(t) {
              return function (e) {
                return Math.pow(e, t);
              };
            }, quad: function quad() {
              return mi;
            }, cubic: function cubic() {
              return wi;
            }, sin: function sin() {
              return bi;
            }, exp: function exp() {
              return Ai;
            }, circle: function circle() {
              return Ti;
            }, elastic: function elastic(t, e) {
              var n;return arguments.length < 2 && (e = .45), arguments.length ? n = e / mo * Math.asin(1 / t) : (t = 1, n = e / 4), function (i) {
                return 1 + t * Math.pow(2, -10 * i) * Math.sin((i - n) * mo / e);
              };
            }, back: function back(t) {
              return t || (t = 1.70158), function (e) {
                return e * e * ((t + 1) * e - t);
              };
            }, bounce: function bounce() {
              return Pi;
            } }),
              Ws = Ya.map({ in: m, out: yi, "in-out": vi, "out-in": function outIn(t) {
              return vi(yi(t));
            } });Ya.ease = function (t) {
            var e = t.indexOf("-"),
                n = e >= 0 ? t.slice(0, e) : t,
                i = e >= 0 ? t.slice(e + 1) : "in";return n = qs.get(n) || Us, i = Ws.get(i) || m, _i(i(n.apply(null, Ba.call(arguments, 1))));
          }, Ya.interpolateHcl = function (t, e) {
            t = Ya.hcl(t), e = Ya.hcl(e);var n = t.h,
                i = t.c,
                r = t.l,
                a = e.h - n,
                o = e.c - i,
                s = e.l - r;return isNaN(o) && (o = 0, i = isNaN(i) ? e.c : i), isNaN(a) ? (a = 0, n = isNaN(n) ? e.h : n) : a > 180 ? a -= 360 : a < -180 && (a += 360), function (t) {
              return dt(n + a * t, i + o * t, r + s * t) + "";
            };
          }, Ya.interpolateHsl = function (t, e) {
            t = Ya.hsl(t), e = Ya.hsl(e);var n = t.h,
                i = t.s,
                r = t.l,
                a = e.h - n,
                o = e.s - i,
                s = e.l - r;return isNaN(o) && (o = 0, i = isNaN(i) ? e.s : i), isNaN(a) ? (a = 0, n = isNaN(n) ? e.h : n) : a > 180 ? a -= 360 : a < -180 && (a += 360), function (t) {
              return lt(n + a * t, i + o * t, r + s * t) + "";
            };
          }, Ya.interpolateLab = function (t, e) {
            t = Ya.lab(t), e = Ya.lab(e);var n = t.l,
                i = t.a,
                r = t.b,
                a = e.l - n,
                o = e.a - i,
                s = e.b - r;return function (t) {
              return gt(n + a * t, i + o * t, r + s * t) + "";
            };
          }, Ya.interpolateRound = Ci, Ya.transform = function (t) {
            var e = Ua.createElementNS(Ya.ns.prefix.svg, "g");return (Ya.transform = function (t) {
              if (null != t) {
                e.setAttribute("transform", t);var n = e.transform.baseVal.consolidate();
              }return new Li(n ? n.matrix : Qs);
            })(t);
          }, Li.prototype.toString = function () {
            return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")";
          };var Qs = { a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 };Ya.interpolateTransform = Di, Ya.layout = {}, Ya.layout.bundle = function () {
            return function (t) {
              for (var e = [], n = -1, i = t.length; ++n < i;) {
                e.push(zi(t[n]));
              }return e;
            };
          }, Ya.layout.chord = function () {
            function t() {
              var t,
                  c,
                  h,
                  d,
                  f,
                  g = {},
                  p = [],
                  x = Ya.range(a),
                  _ = [];for (n = [], i = [], t = 0, d = -1; ++d < a;) {
                for (c = 0, f = -1; ++f < a;) {
                  c += r[d][f];
                }p.push(c), _.push(Ya.range(a)), t += c;
              }for (o && x.sort(function (t, e) {
                return o(p[t], p[e]);
              }), s && _.forEach(function (t, e) {
                t.sort(function (t, n) {
                  return s(r[e][t], r[e][n]);
                });
              }), t = (mo - l * a) / t, c = 0, d = -1; ++d < a;) {
                for (h = c, f = -1; ++f < a;) {
                  var y = x[d],
                      v = _[y][f],
                      m = r[y][v],
                      w = c,
                      S = c += m * t;g[y + "-" + v] = { index: y, subindex: v, startAngle: w, endAngle: S, value: m };
                }i[y] = { index: y, startAngle: h, endAngle: c, value: p[y] }, c += l;
              }for (d = -1; ++d < a;) {
                for (f = d - 1; ++f < a;) {
                  var b = g[d + "-" + f],
                      A = g[f + "-" + d];(b.value || A.value) && n.push(b.value < A.value ? { source: A, target: b } : { source: b, target: A });
                }
              }u && e();
            }function e() {
              n.sort(function (t, e) {
                return u((t.source.value + t.target.value) / 2, (e.source.value + e.target.value) / 2);
              });
            }var n,
                i,
                r,
                a,
                o,
                s,
                u,
                c = {},
                l = 0;return c.matrix = function (t) {
              return arguments.length ? (a = (r = t) && r.length, n = i = null, c) : r;
            }, c.padding = function (t) {
              return arguments.length ? (l = t, n = i = null, c) : l;
            }, c.sortGroups = function (t) {
              return arguments.length ? (o = t, n = i = null, c) : o;
            }, c.sortSubgroups = function (t) {
              return arguments.length ? (s = t, n = null, c) : s;
            }, c.sortChords = function (t) {
              return arguments.length ? (u = t, n && e(), c) : u;
            }, c.chords = function () {
              return n || t(), n;
            }, c.groups = function () {
              return i || t(), i;
            }, c;
          }, Ya.layout.force = function () {
            function t(t) {
              return function (e, n, i, r) {
                if (e.point !== t) {
                  var a = e.cx - t.x,
                      o = e.cy - t.y,
                      s = r - n,
                      u = a * a + o * o;if (s * s / _ < u) {
                    if (u < p) {
                      c = e.charge / u;t.px -= a * c, t.py -= o * c;
                    }return !0;
                  }if (e.point && u && u < p) {
                    var c = e.pointCharge / u;t.px -= a * c, t.py -= o * c;
                  }
                }return !e.charge;
              };
            }function e(t) {
              t.px = Ya.event.x, t.py = Ya.event.y, u.resume();
            }var n,
                i,
                r,
                a,
                o,
                s,
                u = {},
                c = Ya.dispatch("start", "tick", "end"),
                l = [1, 1],
                h = .9,
                d = Zs,
                f = Ks,
                g = -30,
                p = $s,
                x = .1,
                _ = .64,
                y = [],
                v = [];return u.tick = function () {
              if ((r *= .99) < .005) return n = null, c.end({ type: "end", alpha: r = 0 }), !0;var e,
                  i,
                  u,
                  d,
                  f,
                  p,
                  _,
                  m,
                  w,
                  S = y.length,
                  b = v.length;for (i = 0; i < b; ++i) {
                d = (u = v[i]).source, (p = (m = (f = u.target).x - d.x) * m + (w = f.y - d.y) * w) && (m *= p = r * o[i] * ((p = Math.sqrt(p)) - a[i]) / p, w *= p, f.x -= m * (_ = d.weight + f.weight ? d.weight / (d.weight + f.weight) : .5), f.y -= w * _, d.x += m * (_ = 1 - _), d.y += w * _);
              }if ((_ = r * x) && (m = l[0] / 2, w = l[1] / 2, i = -1, _)) for (; ++i < S;) {
                (u = y[i]).x += (m - u.x) * _, u.y += (w - u.y) * _;
              }if (g) for (qi(e = Ya.geom.quadtree(y), r, s), i = -1; ++i < S;) {
                (u = y[i]).fixed || e.visit(t(u));
              }for (i = -1; ++i < S;) {
                (u = y[i]).fixed ? (u.x = u.px, u.y = u.py) : (u.x -= (u.px - (u.px = u.x)) * h, u.y -= (u.py - (u.py = u.y)) * h);
              }c.tick({ type: "tick", alpha: r });
            }, u.nodes = function (t) {
              return arguments.length ? (y = t, u) : y;
            }, u.links = function (t) {
              return arguments.length ? (v = t, u) : v;
            }, u.size = function (t) {
              return arguments.length ? (l = t, u) : l;
            }, u.linkDistance = function (t) {
              return arguments.length ? (d = "function" == typeof t ? t : +t, u) : d;
            }, u.distance = u.linkDistance, u.linkStrength = function (t) {
              return arguments.length ? (f = "function" == typeof t ? t : +t, u) : f;
            }, u.friction = function (t) {
              return arguments.length ? (h = +t, u) : h;
            }, u.charge = function (t) {
              return arguments.length ? (g = "function" == typeof t ? t : +t, u) : g;
            }, u.chargeDistance = function (t) {
              return arguments.length ? (p = t * t, u) : Math.sqrt(p);
            }, u.gravity = function (t) {
              return arguments.length ? (x = +t, u) : x;
            }, u.theta = function (t) {
              return arguments.length ? (_ = t * t, u) : Math.sqrt(_);
            }, u.alpha = function (t) {
              return arguments.length ? (t = +t, r ? t > 0 ? r = t : (n.c = null, n.t = NaN, n = null, c.end({ type: "end", alpha: r = 0 })) : t > 0 && (c.start({ type: "start", alpha: r = t }), n = kt(u.tick)), u) : r;
            }, u.start = function () {
              function t(t, i) {
                if (!n) {
                  for (n = new Array(r), u = 0; u < r; ++u) {
                    n[u] = [];
                  }for (u = 0; u < c; ++u) {
                    var a = v[u];n[a.source.index].push(a.target), n[a.target.index].push(a.source);
                  }
                }for (var o, s = n[e], u = -1, l = s.length; ++u < l;) {
                  if (!isNaN(o = s[u][t])) return o;
                }return Math.random() * i;
              }var e,
                  n,
                  i,
                  r = y.length,
                  c = v.length,
                  h = l[0],
                  p = l[1];for (e = 0; e < r; ++e) {
                (i = y[e]).index = e, i.weight = 0;
              }for (e = 0; e < c; ++e) {
                "number" == typeof (i = v[e]).source && (i.source = y[i.source]), "number" == typeof i.target && (i.target = y[i.target]), ++i.source.weight, ++i.target.weight;
              }for (e = 0; e < r; ++e) {
                i = y[e], isNaN(i.x) && (i.x = t("x", h)), isNaN(i.y) && (i.y = t("y", p)), isNaN(i.px) && (i.px = i.x), isNaN(i.py) && (i.py = i.y);
              }if (a = [], "function" == typeof d) for (e = 0; e < c; ++e) {
                a[e] = +d.call(this, v[e], e);
              } else for (e = 0; e < c; ++e) {
                a[e] = d;
              }if (o = [], "function" == typeof f) for (e = 0; e < c; ++e) {
                o[e] = +f.call(this, v[e], e);
              } else for (e = 0; e < c; ++e) {
                o[e] = f;
              }if (s = [], "function" == typeof g) for (e = 0; e < r; ++e) {
                s[e] = +g.call(this, y[e], e);
              } else for (e = 0; e < r; ++e) {
                s[e] = g;
              }return u.resume();
            }, u.resume = function () {
              return u.alpha(.1);
            }, u.stop = function () {
              return u.alpha(0);
            }, u.drag = function () {
              if (i || (i = Ya.behavior.drag().origin(m).on("dragstart.force", Yi).on("drag.force", e).on("dragend.force", Bi)), !arguments.length) return i;this.on("mouseover.force", ji).on("mouseout.force", Ui).call(i);
            }, Ya.rebind(u, c, "on");
          };var Zs = 20,
              Ks = 1,
              $s = 1 / 0;Ya.layout.hierarchy = function () {
            function t(r) {
              var a,
                  o = [r],
                  s = [];for (r.depth = 0; null != (a = o.pop());) {
                if (s.push(a), (c = n.call(t, a, a.depth)) && (u = c.length)) {
                  for (var u, c, l; --u >= 0;) {
                    o.push(l = c[u]), l.parent = a, l.depth = a.depth + 1;
                  }i && (a.value = 0), a.children = c;
                } else i && (a.value = +i.call(t, a, a.depth) || 0), delete a.children;
              }return Zi(r, function (t) {
                var n, r;e && (n = t.children) && n.sort(e), i && (r = t.parent) && (r.value += t.value);
              }), s;
            }var e = Ji,
                n = Ki,
                i = $i;return t.sort = function (n) {
              return arguments.length ? (e = n, t) : e;
            }, t.children = function (e) {
              return arguments.length ? (n = e, t) : n;
            }, t.value = function (e) {
              return arguments.length ? (i = e, t) : i;
            }, t.revalue = function (e) {
              return i && (Qi(e, function (t) {
                t.children && (t.value = 0);
              }), Zi(e, function (e) {
                var n;e.children || (e.value = +i.call(t, e, e.depth) || 0), (n = e.parent) && (n.value += e.value);
              })), e;
            }, t;
          }, Ya.layout.partition = function () {
            function t(e, n, i, r) {
              var a = e.children;if (e.x = n, e.y = e.depth * r, e.dx = i, e.dy = r, a && (o = a.length)) {
                var o,
                    s,
                    u,
                    c = -1;for (i = e.value ? i / e.value : 0; ++c < o;) {
                  t(s = a[c], n, u = s.value * i, r), n += u;
                }
              }
            }function e(t) {
              var n = t.children,
                  i = 0;if (n && (r = n.length)) for (var r, a = -1; ++a < r;) {
                i = Math.max(i, e(n[a]));
              }return 1 + i;
            }function n(n, a) {
              var o = i.call(this, n, a);return t(o[0], 0, r[0], r[1] / e(o[0])), o;
            }var i = Ya.layout.hierarchy(),
                r = [1, 1];return n.size = function (t) {
              return arguments.length ? (r = t, n) : r;
            }, Wi(n, i);
          }, Ya.layout.pie = function () {
            function t(o) {
              var s,
                  u = o.length,
                  c = o.map(function (n, i) {
                return +e.call(t, n, i);
              }),
                  l = +("function" == typeof i ? i.apply(this, arguments) : i),
                  h = ("function" == typeof r ? r.apply(this, arguments) : r) - l,
                  d = Math.min(Math.abs(h) / u, +("function" == typeof a ? a.apply(this, arguments) : a)),
                  f = d * (h < 0 ? -1 : 1),
                  g = Ya.sum(c),
                  p = g ? (h - u * f) / g : 0,
                  x = Ya.range(u),
                  _ = [];return null != n && x.sort(n === Js ? function (t, e) {
                return c[e] - c[t];
              } : function (t, e) {
                return n(o[t], o[e]);
              }), x.forEach(function (t) {
                _[t] = { data: o[t], value: s = c[t], startAngle: l, endAngle: l += s * p + f, padAngle: d };
              }), _;
            }var e = Number,
                n = Js,
                i = 0,
                r = mo,
                a = 0;return t.value = function (n) {
              return arguments.length ? (e = n, t) : e;
            }, t.sort = function (e) {
              return arguments.length ? (n = e, t) : n;
            }, t.startAngle = function (e) {
              return arguments.length ? (i = e, t) : i;
            }, t.endAngle = function (e) {
              return arguments.length ? (r = e, t) : r;
            }, t.padAngle = function (e) {
              return arguments.length ? (a = e, t) : a;
            }, t;
          };var Js = {};Ya.layout.stack = function () {
            function t(s, u) {
              if (!(d = s.length)) return s;var c = s.map(function (n, i) {
                return e.call(t, n, i);
              }),
                  l = c.map(function (e) {
                return e.map(function (e, n) {
                  return [a.call(t, e, n), o.call(t, e, n)];
                });
              }),
                  h = n.call(t, l, u);c = Ya.permute(c, h), l = Ya.permute(l, h);var d,
                  f,
                  g,
                  p,
                  x = i.call(t, l, u),
                  _ = c[0].length;for (g = 0; g < _; ++g) {
                for (r.call(t, c[0][g], p = x[g], l[0][g][1]), f = 1; f < d; ++f) {
                  r.call(t, c[f][g], p += l[f - 1][g][1], l[f][g][1]);
                }
              }return s;
            }var e = m,
                n = rr,
                i = ar,
                r = ir,
                a = er,
                o = nr;return t.values = function (n) {
              return arguments.length ? (e = n, t) : e;
            }, t.order = function (e) {
              return arguments.length ? (n = "function" == typeof e ? e : tu.get(e) || rr, t) : n;
            }, t.offset = function (e) {
              return arguments.length ? (i = "function" == typeof e ? e : eu.get(e) || ar, t) : i;
            }, t.x = function (e) {
              return arguments.length ? (a = e, t) : a;
            }, t.y = function (e) {
              return arguments.length ? (o = e, t) : o;
            }, t.out = function (e) {
              return arguments.length ? (r = e, t) : r;
            }, t;
          };var tu = Ya.map({ "inside-out": function insideOut(t) {
              var e,
                  n,
                  i = t.length,
                  r = t.map(or),
                  a = t.map(sr),
                  o = Ya.range(i).sort(function (t, e) {
                return r[t] - r[e];
              }),
                  s = 0,
                  u = 0,
                  c = [],
                  l = [];for (e = 0; e < i; ++e) {
                n = o[e], s < u ? (s += a[n], c.push(n)) : (u += a[n], l.push(n));
              }return l.reverse().concat(c);
            }, reverse: function reverse(t) {
              return Ya.range(t.length).reverse();
            }, default: rr }),
              eu = Ya.map({ silhouette: function silhouette(t) {
              var e,
                  n,
                  i,
                  r = t.length,
                  a = t[0].length,
                  o = [],
                  s = 0,
                  u = [];for (n = 0; n < a; ++n) {
                for (e = 0, i = 0; e < r; e++) {
                  i += t[e][n][1];
                }i > s && (s = i), o.push(i);
              }for (n = 0; n < a; ++n) {
                u[n] = (s - o[n]) / 2;
              }return u;
            }, wiggle: function wiggle(t) {
              var e,
                  n,
                  i,
                  r,
                  a,
                  o,
                  s,
                  u,
                  c,
                  l = t.length,
                  h = t[0],
                  d = h.length,
                  f = [];for (f[0] = u = c = 0, n = 1; n < d; ++n) {
                for (e = 0, r = 0; e < l; ++e) {
                  r += t[e][n][1];
                }for (e = 0, a = 0, s = h[n][0] - h[n - 1][0]; e < l; ++e) {
                  for (i = 0, o = (t[e][n][1] - t[e][n - 1][1]) / (2 * s); i < e; ++i) {
                    o += (t[i][n][1] - t[i][n - 1][1]) / s;
                  }a += o * t[e][n][1];
                }f[n] = u -= r ? a / r * s : 0, u < c && (c = u);
              }for (n = 0; n < d; ++n) {
                f[n] -= c;
              }return f;
            }, expand: function expand(t) {
              var e,
                  n,
                  i,
                  r = t.length,
                  a = t[0].length,
                  o = 1 / r,
                  s = [];for (n = 0; n < a; ++n) {
                for (e = 0, i = 0; e < r; e++) {
                  i += t[e][n][1];
                }if (i) for (e = 0; e < r; e++) {
                  t[e][n][1] /= i;
                } else for (e = 0; e < r; e++) {
                  t[e][n][1] = o;
                }
              }for (n = 0; n < a; ++n) {
                s[n] = 0;
              }return s;
            }, zero: ar });Ya.layout.histogram = function () {
            function t(t, a) {
              for (var o, s, u = [], c = t.map(n, this), l = i.call(this, c, a), h = r.call(this, l, c, a), a = -1, d = c.length, f = h.length - 1, g = e ? 1 : 1 / d; ++a < f;) {
                (o = u[a] = []).dx = h[a + 1] - (o.x = h[a]), o.y = 0;
              }if (f > 0) for (a = -1; ++a < d;) {
                (s = c[a]) >= l[0] && s <= l[1] && ((o = u[Ya.bisect(h, s, 1, f) - 1]).y += g, o.push(t[a]));
              }return u;
            }var e = !0,
                n = Number,
                i = hr,
                r = cr;return t.value = function (e) {
              return arguments.length ? (n = e, t) : n;
            }, t.range = function (e) {
              return arguments.length ? (i = Lt(e), t) : i;
            }, t.bins = function (e) {
              return arguments.length ? (r = "number" == typeof e ? function (t) {
                return lr(t, e);
              } : Lt(e), t) : r;
            }, t.frequency = function (n) {
              return arguments.length ? (e = !!n, t) : e;
            }, t;
          }, Ya.layout.pack = function () {
            function t(t, a) {
              var o = n.call(this, t, a),
                  s = o[0],
                  u = r[0],
                  c = r[1],
                  l = null == e ? Math.sqrt : "function" == typeof e ? e : function () {
                return e;
              };if (s.x = s.y = 0, Zi(s, function (t) {
                t.r = +l(t.value);
              }), Zi(s, xr), i) {
                var h = i * (e ? 1 : Math.max(2 * s.r / u, 2 * s.r / c)) / 2;Zi(s, function (t) {
                  t.r += h;
                }), Zi(s, xr), Zi(s, function (t) {
                  t.r -= h;
                });
              }return vr(s, u / 2, c / 2, e ? 1 : 1 / Math.max(2 * s.r / u, 2 * s.r / c)), o;
            }var e,
                n = Ya.layout.hierarchy().sort(dr),
                i = 0,
                r = [1, 1];return t.size = function (e) {
              return arguments.length ? (r = e, t) : r;
            }, t.radius = function (n) {
              return arguments.length ? (e = null == n || "function" == typeof n ? n : +n, t) : e;
            }, t.padding = function (e) {
              return arguments.length ? (i = +e, t) : i;
            }, Wi(t, n);
          }, Ya.layout.tree = function () {
            function t(t, r) {
              var l = o.call(this, t, r),
                  h = l[0],
                  d = e(h);if (Zi(d, n), d.parent.m = -d.z, Qi(d, i), c) Qi(h, a);else {
                var f = h,
                    g = h,
                    p = h;Qi(h, function (t) {
                  t.x < f.x && (f = t), t.x > g.x && (g = t), t.depth > p.depth && (p = t);
                });var x = s(f, g) / 2 - f.x,
                    _ = u[0] / (g.x + s(g, f) / 2 + x),
                    y = u[1] / (p.depth || 1);Qi(h, function (t) {
                  t.x = (t.x + x) * _, t.y = t.depth * y;
                });
              }return l;
            }function e(t) {
              for (var e, n = { A: null, children: [t] }, i = [n]; null != (e = i.pop());) {
                for (var r, a = e.children, o = 0, s = a.length; o < s; ++o) {
                  i.push((a[o] = r = { _: a[o], parent: e, children: (r = a[o].children) && r.slice() || [], A: null, a: null, z: 0, m: 0, c: 0, s: 0, t: null, i: o }).a = r);
                }
              }return n.children[0];
            }function n(t) {
              var e = t.children,
                  n = t.parent.children,
                  i = t.i ? n[t.i - 1] : null;if (e.length) {
                Tr(t);var a = (e[0].z + e[e.length - 1].z) / 2;i ? (t.z = i.z + s(t._, i._), t.m = t.z - a) : t.z = a;
              } else i && (t.z = i.z + s(t._, i._));t.parent.A = r(t, i, t.parent.A || n[0]);
            }function i(t) {
              t._.x = t.z + t.parent.m, t.m += t.parent.m;
            }function r(t, e, n) {
              if (e) {
                for (var i, r = t, a = t, o = e, u = r.parent.children[0], c = r.m, l = a.m, h = o.m, d = u.m; o = br(o), r = Sr(r), o && r;) {
                  u = Sr(u), (a = br(a)).a = t, (i = o.z + h - r.z - c + s(o._, r._)) > 0 && (Ar(Pr(o, t, n), t, i), c += i, l += i), h += o.m, c += r.m, d += u.m, l += a.m;
                }o && !br(a) && (a.t = o, a.m += h - l), r && !Sr(u) && (u.t = r, u.m += c - d, n = t);
              }return n;
            }function a(t) {
              t.x *= u[0], t.y = t.depth * u[1];
            }var o = Ya.layout.hierarchy().sort(null).value(null),
                s = wr,
                u = [1, 1],
                c = null;return t.separation = function (e) {
              return arguments.length ? (s = e, t) : s;
            }, t.size = function (e) {
              return arguments.length ? (c = null == (u = e) ? a : null, t) : c ? null : u;
            }, t.nodeSize = function (e) {
              return arguments.length ? (c = null == (u = e) ? null : a, t) : c ? u : null;
            }, Wi(t, o);
          }, Ya.layout.cluster = function () {
            function t(t, a) {
              var o,
                  s = e.call(this, t, a),
                  u = s[0],
                  c = 0;Zi(u, function (t) {
                var e = t.children;e && e.length ? (t.x = Lr(e), t.y = Cr(e)) : (t.x = o ? c += n(t, o) : 0, t.y = 0, o = t);
              });var l = Mr(u),
                  h = Er(u),
                  d = l.x - n(l, h) / 2,
                  f = h.x + n(h, l) / 2;return Zi(u, r ? function (t) {
                t.x = (t.x - u.x) * i[0], t.y = (u.y - t.y) * i[1];
              } : function (t) {
                t.x = (t.x - d) / (f - d) * i[0], t.y = (1 - (u.y ? t.y / u.y : 1)) * i[1];
              }), s;
            }var e = Ya.layout.hierarchy().sort(null).value(null),
                n = wr,
                i = [1, 1],
                r = !1;return t.separation = function (e) {
              return arguments.length ? (n = e, t) : n;
            }, t.size = function (e) {
              return arguments.length ? (r = null == (i = e), t) : r ? null : i;
            }, t.nodeSize = function (e) {
              return arguments.length ? (r = null != (i = e), t) : r ? i : null;
            }, Wi(t, e);
          }, Ya.layout.treemap = function () {
            function t(t, e) {
              for (var n, i, r = -1, a = t.length; ++r < a;) {
                i = (n = t[r]).value * (e < 0 ? 0 : e), n.area = isNaN(i) || i <= 0 ? 0 : i;
              }
            }function e(n) {
              var i = n.children;if (i && i.length) {
                var o,
                    s,
                    u,
                    c = d(n),
                    l = [],
                    h = i.slice(),
                    f = 1 / 0,
                    p = "slice" === g ? c.dx : "dice" === g ? c.dy : "slice-dice" === g ? 1 & n.depth ? c.dy : c.dx : Math.min(c.dx, c.dy);for (t(h, c.dx * c.dy / n.value), l.area = 0; (u = h.length) > 0;) {
                  l.push(o = h[u - 1]), l.area += o.area, "squarify" !== g || (s = r(l, p)) <= f ? (h.pop(), f = s) : (l.area -= l.pop().area, a(l, p, c, !1), p = Math.min(c.dx, c.dy), l.length = l.area = 0, f = 1 / 0);
                }l.length && (a(l, p, c, !0), l.length = l.area = 0), i.forEach(e);
              }
            }function n(e) {
              var i = e.children;if (i && i.length) {
                var r,
                    o = d(e),
                    s = i.slice(),
                    u = [];for (t(s, o.dx * o.dy / e.value), u.area = 0; r = s.pop();) {
                  u.push(r), u.area += r.area, null != r.z && (a(u, r.z ? o.dx : o.dy, o, !s.length), u.length = u.area = 0);
                }i.forEach(n);
              }
            }function r(t, e) {
              for (var n, i = t.area, r = 0, a = 1 / 0, o = -1, s = t.length; ++o < s;) {
                (n = t[o].area) && (n < a && (a = n), n > r && (r = n));
              }return i *= i, e *= e, i ? Math.max(e * r * p / i, i / (e * a * p)) : 1 / 0;
            }function a(t, e, n, i) {
              var r,
                  a = -1,
                  o = t.length,
                  s = n.x,
                  u = n.y,
                  l = e ? c(t.area / e) : 0;if (e == n.dx) {
                for ((i || l > n.dy) && (l = n.dy); ++a < o;) {
                  (r = t[a]).x = s, r.y = u, r.dy = l, s += r.dx = Math.min(n.x + n.dx - s, l ? c(r.area / l) : 0);
                }r.z = !0, r.dx += n.x + n.dx - s, n.y += l, n.dy -= l;
              } else {
                for ((i || l > n.dx) && (l = n.dx); ++a < o;) {
                  (r = t[a]).x = s, r.y = u, r.dx = l, u += r.dy = Math.min(n.y + n.dy - u, l ? c(r.area / l) : 0);
                }r.z = !1, r.dy += n.y + n.dy - u, n.x += l, n.dx -= l;
              }
            }function o(i) {
              var r = s || u(i),
                  a = r[0];return a.x = a.y = 0, a.value ? (a.dx = l[0], a.dy = l[1]) : a.dx = a.dy = 0, s && u.revalue(a), t([a], a.dx * a.dy / a.value), (s ? n : e)(a), f && (s = r), r;
            }var s,
                u = Ya.layout.hierarchy(),
                c = Math.round,
                l = [1, 1],
                h = null,
                d = Vr,
                f = !1,
                g = "squarify",
                p = .5 * (1 + Math.sqrt(5));return o.size = function (t) {
              return arguments.length ? (l = t, o) : l;
            }, o.padding = function (t) {
              function e(e) {
                return Gr(e, t);
              }if (!arguments.length) return h;var n;return d = null == (h = t) ? Vr : "function" === (n = void 0 === t ? "undefined" : i(t)) ? function (e) {
                var n = t.call(o, e, e.depth);return null == n ? Vr(e) : Gr(e, "number" == typeof n ? [n, n, n, n] : n);
              } : "number" === n ? (t = [t, t, t, t], e) : e, o;
            }, o.round = function (t) {
              return arguments.length ? (c = t ? Math.round : Number, o) : c != Number;
            }, o.sticky = function (t) {
              return arguments.length ? (f = t, s = null, o) : f;
            }, o.ratio = function (t) {
              return arguments.length ? (p = t, o) : p;
            }, o.mode = function (t) {
              return arguments.length ? (g = t + "", o) : g;
            }, Wi(o, u);
          }, Ya.random = { normal: function normal(t, e) {
              var n = arguments.length;return n < 2 && (e = 1), n < 1 && (t = 0), function () {
                var n, i, r;do {
                  r = (n = 2 * Math.random() - 1) * n + (i = 2 * Math.random() - 1) * i;
                } while (!r || r > 1);return t + e * n * Math.sqrt(-2 * Math.log(r) / r);
              };
            }, logNormal: function logNormal() {
              var t = Ya.random.normal.apply(Ya, arguments);return function () {
                return Math.exp(t());
              };
            }, bates: function bates(t) {
              var e = Ya.random.irwinHall(t);return function () {
                return e() / t;
              };
            }, irwinHall: function irwinHall(t) {
              return function () {
                for (var e = 0, n = 0; n < t; n++) {
                  e += Math.random();
                }return e;
              };
            } }, Ya.scale = {};var nu = { floor: m, ceil: m };Ya.scale.linear = function () {
            return Fr([0, 1], [0, 1], pi, !1);
          };var iu = { s: 1, g: 1, p: 1, r: 1, e: 1 };Ya.scale.log = function () {
            return qr(Ya.scale.linear().domain([0, 1]), 10, !0, [1, 10]);
          };var ru = Ya.format(".0e"),
              au = { floor: function floor(t) {
              return -Math.ceil(-t);
            }, ceil: function ceil(t) {
              return -Math.floor(-t);
            } };Ya.scale.pow = function () {
            return Wr(Ya.scale.linear(), 1, [0, 1]);
          }, Ya.scale.sqrt = function () {
            return Ya.scale.pow().exponent(.5);
          }, Ya.scale.ordinal = function () {
            return Zr([], { t: "range", a: [[]] });
          }, Ya.scale.category10 = function () {
            return Ya.scale.ordinal().range(ou);
          }, Ya.scale.category20 = function () {
            return Ya.scale.ordinal().range(su);
          }, Ya.scale.category20b = function () {
            return Ya.scale.ordinal().range(uu);
          }, Ya.scale.category20c = function () {
            return Ya.scale.ordinal().range(cu);
          };var ou = [2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330, 8355711, 12369186, 1556175].map(wt),
              su = [2062260, 11454440, 16744206, 16759672, 2924588, 10018698, 14034728, 16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194, 8355711, 13092807, 12369186, 14408589, 1556175, 10410725].map(wt),
              uu = [3750777, 5395619, 7040719, 10264286, 6519097, 9216594, 11915115, 13556636, 9202993, 12426809, 15186514, 15190932, 8666169, 11356490, 14049643, 15177372, 8077683, 10834324, 13528509, 14589654].map(wt),
              cu = [3244733, 7057110, 10406625, 13032431, 15095053, 16616764, 16625259, 16634018, 3253076, 7652470, 10607003, 13101504, 7695281, 10394312, 12369372, 14342891, 6513507, 9868950, 12434877, 14277081].map(wt);Ya.scale.quantile = function () {
            return Kr([], []);
          }, Ya.scale.quantize = function () {
            return $r(0, 1, [0, 1]);
          }, Ya.scale.threshold = function () {
            return Jr([.5], [0, 1]);
          }, Ya.scale.identity = function () {
            return ta([0, 1]);
          }, Ya.svg = {}, Ya.svg.arc = function () {
            function t() {
              var t = Math.max(0, +n.apply(this, arguments)),
                  c = Math.max(0, +i.apply(this, arguments)),
                  l = o.apply(this, arguments) - So,
                  h = s.apply(this, arguments) - So,
                  d = Math.abs(h - l),
                  f = l > h ? 0 : 1;if (c < t && (g = c, c = t, t = g), d >= wo) return e(c, f) + (t ? e(t, 1 - f) : "") + "Z";var g,
                  p,
                  x,
                  _,
                  y,
                  v,
                  m,
                  w,
                  S,
                  b,
                  A,
                  T,
                  P = 0,
                  C = 0,
                  L = [];if ((_ = (+u.apply(this, arguments) || 0) / 2) && (x = a === lu ? Math.sqrt(t * t + c * c) : +a.apply(this, arguments), f || (C *= -1), c && (C = it(x / c * Math.sin(_))), t && (P = it(x / t * Math.sin(_)))), c) {
                y = c * Math.cos(l + C), v = c * Math.sin(l + C), m = c * Math.cos(h - C), w = c * Math.sin(h - C);var M = Math.abs(h - l - 2 * C) <= vo ? 0 : 1;if (C && sa(y, v, m, w) === f ^ M) {
                  var E = (l + h) / 2;y = c * Math.cos(E), v = c * Math.sin(E), m = w = null;
                }
              } else y = v = 0;if (t) {
                S = t * Math.cos(h - P), b = t * Math.sin(h - P), A = t * Math.cos(l + P), T = t * Math.sin(l + P);var V = Math.abs(l - h + 2 * P) <= vo ? 0 : 1;if (P && sa(S, b, A, T) === 1 - f ^ V) {
                  var G = (l + h) / 2;S = t * Math.cos(G), b = t * Math.sin(G), A = T = null;
                }
              } else S = b = 0;if (d > _o && (g = Math.min(Math.abs(c - t) / 2, +r.apply(this, arguments))) > .001) {
                p = t < c ^ f ? 0 : 1;var k = g,
                    R = g;if (d < vo) {
                  var O = null == A ? [S, b] : null == m ? [y, v] : Vn([y, v], [A, T], [m, w], [S, b]),
                      I = y - O[0],
                      D = v - O[1],
                      N = m - O[0],
                      F = w - O[1],
                      z = 1 / Math.sin(Math.acos((I * N + D * F) / (Math.sqrt(I * I + D * D) * Math.sqrt(N * N + F * F))) / 2),
                      X = Math.sqrt(O[0] * O[0] + O[1] * O[1]);R = Math.min(g, (t - X) / (z - 1)), k = Math.min(g, (c - X) / (z + 1));
                }if (null != m) {
                  var H = ua(null == A ? [S, b] : [A, T], [y, v], c, k, f),
                      Y = ua([m, w], [S, b], c, k, f);g === k ? L.push("M", H[0], "A", k, ",", k, " 0 0,", p, " ", H[1], "A", c, ",", c, " 0 ", 1 - f ^ sa(H[1][0], H[1][1], Y[1][0], Y[1][1]), ",", f, " ", Y[1], "A", k, ",", k, " 0 0,", p, " ", Y[0]) : L.push("M", H[0], "A", k, ",", k, " 0 1,", p, " ", Y[0]);
                } else L.push("M", y, ",", v);if (null != A) {
                  var B = ua([y, v], [A, T], t, -R, f),
                      j = ua([S, b], null == m ? [y, v] : [m, w], t, -R, f);g === R ? L.push("L", j[0], "A", R, ",", R, " 0 0,", p, " ", j[1], "A", t, ",", t, " 0 ", f ^ sa(j[1][0], j[1][1], B[1][0], B[1][1]), ",", 1 - f, " ", B[1], "A", R, ",", R, " 0 0,", p, " ", B[0]) : L.push("L", j[0], "A", R, ",", R, " 0 0,", p, " ", B[0]);
                } else L.push("L", S, ",", b);
              } else L.push("M", y, ",", v), null != m && L.push("A", c, ",", c, " 0 ", M, ",", f, " ", m, ",", w), L.push("L", S, ",", b), null != A && L.push("A", t, ",", t, " 0 ", V, ",", 1 - f, " ", A, ",", T);return L.push("Z"), L.join("");
            }function e(t, e) {
              return "M0," + t + "A" + t + "," + t + " 0 1," + e + " 0," + -t + "A" + t + "," + t + " 0 1," + e + " 0," + t;
            }var n = na,
                i = ia,
                r = ea,
                a = lu,
                o = ra,
                s = aa,
                u = oa;return t.innerRadius = function (e) {
              return arguments.length ? (n = Lt(e), t) : n;
            }, t.outerRadius = function (e) {
              return arguments.length ? (i = Lt(e), t) : i;
            }, t.cornerRadius = function (e) {
              return arguments.length ? (r = Lt(e), t) : r;
            }, t.padRadius = function (e) {
              return arguments.length ? (a = e == lu ? lu : Lt(e), t) : a;
            }, t.startAngle = function (e) {
              return arguments.length ? (o = Lt(e), t) : o;
            }, t.endAngle = function (e) {
              return arguments.length ? (s = Lt(e), t) : s;
            }, t.padAngle = function (e) {
              return arguments.length ? (u = Lt(e), t) : u;
            }, t.centroid = function () {
              var t = (+n.apply(this, arguments) + +i.apply(this, arguments)) / 2,
                  e = (+o.apply(this, arguments) + +s.apply(this, arguments)) / 2 - So;return [Math.cos(e) * t, Math.sin(e) * t];
            }, t;
          };var lu = "auto";Ya.svg.line = function () {
            return ca(m);
          };var hu = Ya.map({ linear: la, "linear-closed": ha, step: function step(t) {
              for (var e = 0, n = t.length, i = t[0], r = [i[0], ",", i[1]]; ++e < n;) {
                r.push("H", (i[0] + (i = t[e])[0]) / 2, "V", i[1]);
              }return n > 1 && r.push("H", i[0]), r.join("");
            }, "step-before": da, "step-after": fa, basis: xa, "basis-open": function basisOpen(t) {
              if (t.length < 4) return la(t);for (var e, n = [], i = -1, r = t.length, a = [0], o = [0]; ++i < 3;) {
                e = t[i], a.push(e[0]), o.push(e[1]);
              }for (n.push(_a(gu, a) + "," + _a(gu, o)), --i; ++i < r;) {
                e = t[i], a.shift(), a.push(e[0]), o.shift(), o.push(e[1]), ya(n, a, o);
              }return n.join("");
            }, "basis-closed": function basisClosed(t) {
              for (var e, n, i = -1, r = t.length, a = r + 4, o = [], s = []; ++i < 4;) {
                n = t[i % r], o.push(n[0]), s.push(n[1]);
              }for (e = [_a(gu, o), ",", _a(gu, s)], --i; ++i < a;) {
                n = t[i % r], o.shift(), o.push(n[0]), s.shift(), s.push(n[1]), ya(e, o, s);
              }return e.join("");
            }, bundle: function bundle(t, e) {
              var n = t.length - 1;if (n) for (var i, r, a = t[0][0], o = t[0][1], s = t[n][0] - a, u = t[n][1] - o, c = -1; ++c <= n;) {
                r = c / n, (i = t[c])[0] = e * i[0] + (1 - e) * (a + r * s), i[1] = e * i[1] + (1 - e) * (o + r * u);
              }return xa(t);
            }, cardinal: function cardinal(t, e) {
              return t.length < 3 ? la(t) : t[0] + ga(t, pa(t, e));
            }, "cardinal-open": function cardinalOpen(t, e) {
              return t.length < 4 ? la(t) : t[1] + ga(t.slice(1, -1), pa(t, e));
            }, "cardinal-closed": function cardinalClosed(t, e) {
              return t.length < 3 ? ha(t) : t[0] + ga((t.push(t[0]), t), pa([t[t.length - 2]].concat(t, [t[1]]), e));
            }, monotone: function monotone(t) {
              return t.length < 3 ? la(t) : t[0] + ga(t, wa(t));
            } });hu.forEach(function (t, e) {
            e.key = t, e.closed = /-closed$/.test(t);
          });var du = [0, 2 / 3, 1 / 3, 0],
              fu = [0, 1 / 3, 2 / 3, 0],
              gu = [0, 1 / 6, 2 / 3, 1 / 6];Ya.svg.line.radial = function () {
            var t = ca(Sa);return t.radius = t.x, delete t.x, t.angle = t.y, delete t.y, t;
          }, da.reverse = fa, fa.reverse = da, Ya.svg.area = function () {
            return ba(m);
          }, Ya.svg.area.radial = function () {
            var t = ba(Sa);return t.radius = t.x, delete t.x, t.innerRadius = t.x0, delete t.x0, t.outerRadius = t.x1, delete t.x1, t.angle = t.y, delete t.y, t.startAngle = t.y0, delete t.y0, t.endAngle = t.y1, delete t.y1, t;
          }, Ya.svg.chord = function () {
            function t(t, s) {
              var u = e(this, a, t, s),
                  c = e(this, o, t, s);return "M" + u.p0 + i(u.r, u.p1, u.a1 - u.a0) + (n(u, c) ? r(u.r, u.p1, u.r, u.p0) : r(u.r, u.p1, c.r, c.p0) + i(c.r, c.p1, c.a1 - c.a0) + r(c.r, c.p1, u.r, u.p0)) + "Z";
            }function e(t, e, n, i) {
              var r = e.call(t, n, i),
                  a = s.call(t, r, i),
                  o = u.call(t, r, i) - So,
                  l = c.call(t, r, i) - So;return { r: a, a0: o, a1: l, p0: [a * Math.cos(o), a * Math.sin(o)], p1: [a * Math.cos(l), a * Math.sin(l)] };
            }function n(t, e) {
              return t.a0 == e.a0 && t.a1 == e.a1;
            }function i(t, e, n) {
              return "A" + t + "," + t + " 0 " + +(n > vo) + ",1 " + e;
            }function r(t, e, n, i) {
              return "Q 0,0 " + i;
            }var a = _n,
                o = yn,
                s = Aa,
                u = ra,
                c = aa;return t.radius = function (e) {
              return arguments.length ? (s = Lt(e), t) : s;
            }, t.source = function (e) {
              return arguments.length ? (a = Lt(e), t) : a;
            }, t.target = function (e) {
              return arguments.length ? (o = Lt(e), t) : o;
            }, t.startAngle = function (e) {
              return arguments.length ? (u = Lt(e), t) : u;
            }, t.endAngle = function (e) {
              return arguments.length ? (c = Lt(e), t) : c;
            }, t;
          }, Ya.svg.diagonal = function () {
            function t(t, r) {
              var a = e.call(this, t, r),
                  o = n.call(this, t, r),
                  s = (a.y + o.y) / 2,
                  u = [a, { x: a.x, y: s }, { x: o.x, y: s }, o];return "M" + (u = u.map(i))[0] + "C" + u[1] + " " + u[2] + " " + u[3];
            }var e = _n,
                n = yn,
                i = Ta;return t.source = function (n) {
              return arguments.length ? (e = Lt(n), t) : e;
            }, t.target = function (e) {
              return arguments.length ? (n = Lt(e), t) : n;
            }, t.projection = function (e) {
              return arguments.length ? (i = e, t) : i;
            }, t;
          }, Ya.svg.diagonal.radial = function () {
            var t = Ya.svg.diagonal(),
                e = Ta,
                n = t.projection;return t.projection = function (t) {
              return arguments.length ? n(Pa(e = t)) : e;
            }, t;
          }, Ya.svg.symbol = function () {
            function t(t, i) {
              return (pu.get(e.call(this, t, i)) || Ma)(n.call(this, t, i));
            }var e = La,
                n = Ca;return t.type = function (n) {
              return arguments.length ? (e = Lt(n), t) : e;
            }, t.size = function (e) {
              return arguments.length ? (n = Lt(e), t) : n;
            }, t;
          };var pu = Ya.map({ circle: Ma, cross: function cross(t) {
              var e = Math.sqrt(t / 5) / 2;return "M" + -3 * e + "," + -e + "H" + -e + "V" + -3 * e + "H" + e + "V" + -e + "H" + 3 * e + "V" + e + "H" + e + "V" + 3 * e + "H" + -e + "V" + e + "H" + -3 * e + "Z";
            }, diamond: function diamond(t) {
              var e = Math.sqrt(t / (2 * _u)),
                  n = e * _u;return "M0," + -e + "L" + n + ",0 0," + e + " " + -n + ",0Z";
            }, square: function square(t) {
              var e = Math.sqrt(t) / 2;return "M" + -e + "," + -e + "L" + e + "," + -e + " " + e + "," + e + " " + -e + "," + e + "Z";
            }, "triangle-down": function triangleDown(t) {
              var e = Math.sqrt(t / xu),
                  n = e * xu / 2;return "M0," + n + "L" + e + "," + -n + " " + -e + "," + -n + "Z";
            }, "triangle-up": function triangleUp(t) {
              var e = Math.sqrt(t / xu),
                  n = e * xu / 2;return "M0," + -n + "L" + e + "," + n + " " + -e + "," + n + "Z";
            } });Ya.svg.symbolTypes = pu.keys();var xu = Math.sqrt(3),
              _u = Math.tan(30 * bo);uo.transition = function (t) {
            for (var e, n, i = yu || ++Su, r = Ra(t), a = [], o = vu || { time: Date.now(), ease: Si, delay: 0, duration: 250 }, s = -1, u = this.length; ++s < u;) {
              a.push(e = []);for (var c = this[s], l = -1, h = c.length; ++l < h;) {
                (n = c[l]) && Oa(n, l, r, i, o), e.push(n);
              }
            }return Va(a, r, i);
          }, uo.interrupt = function (t) {
            return this.each(null == t ? mu : Ea(Ra(t)));
          };var yu,
              vu,
              mu = Ea(Ra()),
              wu = [],
              Su = 0;wu.call = uo.call, wu.empty = uo.empty, wu.node = uo.node, wu.size = uo.size, Ya.transition = function (t, e) {
            return t && t.transition ? yu ? t.transition(e) : t : Ya.selection().transition(t);
          }, Ya.transition.prototype = wu, wu.select = function (t) {
            var e,
                n,
                i,
                r = this.id,
                a = this.namespace,
                o = [];t = E(t);for (var s = -1, u = this.length; ++s < u;) {
              o.push(e = []);for (var c = this[s], l = -1, h = c.length; ++l < h;) {
                (i = c[l]) && (n = t.call(i, i.__data__, l, s)) ? ("__data__" in i && (n.__data__ = i.__data__), Oa(n, l, a, r, i[a][r]), e.push(n)) : e.push(null);
              }
            }return Va(o, a, r);
          }, wu.selectAll = function (t) {
            var e,
                n,
                i,
                r,
                a,
                o = this.id,
                s = this.namespace,
                u = [];t = V(t);for (var c = -1, l = this.length; ++c < l;) {
              for (var h = this[c], d = -1, f = h.length; ++d < f;) {
                if (i = h[d]) {
                  a = i[s][o], n = t.call(i, i.__data__, d, c), u.push(e = []);for (var g = -1, p = n.length; ++g < p;) {
                    (r = n[g]) && Oa(r, g, s, o, a), e.push(r);
                  }
                }
              }
            }return Va(u, s, o);
          }, wu.filter = function (t) {
            var e,
                n,
                i,
                r = [];"function" != typeof t && (t = Y(t));for (var a = 0, o = this.length; a < o; a++) {
              r.push(e = []);for (var s = 0, u = (n = this[a]).length; s < u; s++) {
                (i = n[s]) && t.call(i, i.__data__, s, a) && e.push(i);
              }
            }return Va(r, this.namespace, this.id);
          }, wu.tween = function (t, e) {
            var n = this.id,
                i = this.namespace;return arguments.length < 2 ? this.node()[i][n].tween.get(t) : j(this, null == e ? function (e) {
              e[i][n].tween.remove(t);
            } : function (r) {
              r[i][n].tween.set(t, e);
            });
          }, wu.attr = function (t, e) {
            function n() {
              this.removeAttribute(a);
            }function i() {
              this.removeAttributeNS(a.space, a.local);
            }if (arguments.length < 2) {
              for (e in t) {
                this.attr(e, t[e]);
              }return this;
            }var r = "transform" == t ? Di : pi,
                a = Ya.ns.qualify(t);return Ga(this, "attr." + t, e, a.local ? function (t) {
              return null == t ? i : (t += "", function () {
                var e,
                    n = this.getAttributeNS(a.space, a.local);return n !== t && (e = r(n, t), function (t) {
                  this.setAttributeNS(a.space, a.local, e(t));
                });
              });
            } : function (t) {
              return null == t ? n : (t += "", function () {
                var e,
                    n = this.getAttribute(a);return n !== t && (e = r(n, t), function (t) {
                  this.setAttribute(a, e(t));
                });
              });
            });
          }, wu.attrTween = function (t, e) {
            var n = Ya.ns.qualify(t);return this.tween("attr." + t, n.local ? function (t, i) {
              var r = e.call(this, t, i, this.getAttributeNS(n.space, n.local));return r && function (t) {
                this.setAttributeNS(n.space, n.local, r(t));
              };
            } : function (t, i) {
              var r = e.call(this, t, i, this.getAttribute(n));return r && function (t) {
                this.setAttribute(n, r(t));
              };
            });
          }, wu.style = function (t, e, i) {
            function r() {
              this.style.removeProperty(t);
            }var a = arguments.length;if (a < 3) {
              if ("string" != typeof t) {
                a < 2 && (e = "");for (i in t) {
                  this.style(i, t[i], e);
                }return this;
              }i = "";
            }return Ga(this, "style." + t, e, function (e) {
              return null == e ? r : (e += "", function () {
                var r,
                    a = n(this).getComputedStyle(this, null).getPropertyValue(t);return a !== e && (r = pi(a, e), function (e) {
                  this.style.setProperty(t, r(e), i);
                });
              });
            });
          }, wu.styleTween = function (t, e, i) {
            return arguments.length < 3 && (i = ""), this.tween("style." + t, function (r, a) {
              var o = e.call(this, r, a, n(this).getComputedStyle(this, null).getPropertyValue(t));return o && function (e) {
                this.style.setProperty(t, o(e), i);
              };
            });
          }, wu.text = function (t) {
            return Ga(this, "text", t, ka);
          }, wu.remove = function () {
            var t = this.namespace;return this.each("end.transition", function () {
              var e;this[t].count < 2 && (e = this.parentNode) && e.removeChild(this);
            });
          }, wu.ease = function (t) {
            var e = this.id,
                n = this.namespace;return arguments.length < 1 ? this.node()[n][e].ease : ("function" != typeof t && (t = Ya.ease.apply(Ya, arguments)), j(this, function (i) {
              i[n][e].ease = t;
            }));
          }, wu.delay = function (t) {
            var e = this.id,
                n = this.namespace;return arguments.length < 1 ? this.node()[n][e].delay : j(this, "function" == typeof t ? function (i, r, a) {
              i[n][e].delay = +t.call(i, i.__data__, r, a);
            } : (t = +t, function (i) {
              i[n][e].delay = t;
            }));
          }, wu.duration = function (t) {
            var e = this.id,
                n = this.namespace;return arguments.length < 1 ? this.node()[n][e].duration : j(this, "function" == typeof t ? function (i, r, a) {
              i[n][e].duration = Math.max(1, t.call(i, i.__data__, r, a));
            } : (t = Math.max(1, t), function (i) {
              i[n][e].duration = t;
            }));
          }, wu.each = function (t, e) {
            var n = this.id,
                i = this.namespace;if (arguments.length < 2) {
              var r = vu,
                  a = yu;try {
                yu = n, j(this, function (e, r, a) {
                  vu = e[i][n], t.call(e, e.__data__, r, a);
                });
              } finally {
                vu = r, yu = a;
              }
            } else j(this, function (r) {
              var a = r[i][n];(a.event || (a.event = Ya.dispatch("start", "end", "interrupt"))).on(t, e);
            });return this;
          }, wu.transition = function () {
            for (var t, e, n, i, r = this.id, a = ++Su, o = this.namespace, s = [], u = 0, c = this.length; u < c; u++) {
              s.push(t = []);for (var l = 0, h = (e = this[u]).length; l < h; l++) {
                (n = e[l]) && Oa(n, l, o, a, { time: (i = n[o][r]).time, ease: i.ease, delay: i.delay + i.duration, duration: i.duration }), t.push(n);
              }
            }return Va(s, o, a);
          }, Ya.svg.axis = function () {
            function t(t) {
              t.each(function () {
                var t,
                    c = Ya.select(this),
                    l = this.__chart__ || n,
                    h = this.__chart__ = n.copy(),
                    d = null == u ? h.ticks ? h.ticks.apply(h, s) : h.domain() : u,
                    f = null == e ? h.tickFormat ? h.tickFormat.apply(h, s) : m : e,
                    g = c.selectAll(".tick").data(d, h),
                    p = g.enter().insert("g", ".domain").attr("class", "tick").style("opacity", _o),
                    x = Ya.transition(g.exit()).style("opacity", _o).remove(),
                    _ = Ya.transition(g.order()).style("opacity", 1),
                    y = Math.max(r, 0) + o,
                    v = Rr(h),
                    w = c.selectAll(".domain").data([0]),
                    S = (w.enter().append("path").attr("class", "domain"), Ya.transition(w));p.append("line"), p.append("text");var b,
                    A,
                    T,
                    P,
                    C = p.select("line"),
                    L = _.select("line"),
                    M = g.select("text").text(f),
                    E = p.select("text"),
                    V = _.select("text"),
                    G = "top" === i || "left" === i ? -1 : 1;if ("bottom" === i || "top" === i ? (t = Ia, b = "x", T = "y", A = "x2", P = "y2", M.attr("dy", G < 0 ? "0em" : ".71em").style("text-anchor", "middle"), S.attr("d", "M" + v[0] + "," + G * a + "V0H" + v[1] + "V" + G * a)) : (t = Da, b = "y", T = "x", A = "y2", P = "x2", M.attr("dy", ".32em").style("text-anchor", G < 0 ? "end" : "start"), S.attr("d", "M" + G * a + "," + v[0] + "H0V" + v[1] + "H" + G * a)), C.attr(P, G * r), E.attr(T, G * y), L.attr(A, 0).attr(P, G * r), V.attr(b, 0).attr(T, G * y), h.rangeBand) {
                  var k = h,
                      R = k.rangeBand() / 2;l = h = function h(t) {
                    return k(t) + R;
                  };
                } else l.rangeBand ? l = h : x.call(t, h, l);p.call(t, l, h), _.call(t, h, h);
              });
            }var e,
                n = Ya.scale.linear(),
                i = bu,
                r = 6,
                a = 6,
                o = 3,
                s = [10],
                u = null;return t.scale = function (e) {
              return arguments.length ? (n = e, t) : n;
            }, t.orient = function (e) {
              return arguments.length ? (i = e in Au ? e + "" : bu, t) : i;
            }, t.ticks = function () {
              return arguments.length ? (s = ja(arguments), t) : s;
            }, t.tickValues = function (e) {
              return arguments.length ? (u = e, t) : u;
            }, t.tickFormat = function (n) {
              return arguments.length ? (e = n, t) : e;
            }, t.tickSize = function (e) {
              var n = arguments.length;return n ? (r = +e, a = +arguments[n - 1], t) : r;
            }, t.innerTickSize = function (e) {
              return arguments.length ? (r = +e, t) : r;
            }, t.outerTickSize = function (e) {
              return arguments.length ? (a = +e, t) : a;
            }, t.tickPadding = function (e) {
              return arguments.length ? (o = +e, t) : o;
            }, t.tickSubdivide = function () {
              return arguments.length && t;
            }, t;
          };var bu = "bottom",
              Au = { top: 1, right: 1, bottom: 1, left: 1 };Ya.svg.brush = function () {
            function t(n) {
              n.each(function () {
                var n = Ya.select(this).style("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush", a).on("touchstart.brush", a),
                    o = n.selectAll(".background").data([0]);o.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair"), n.selectAll(".extent").data([0]).enter().append("rect").attr("class", "extent").style("cursor", "move");var s = n.selectAll(".resize").data(p, m);s.exit().remove(), s.enter().append("g").attr("class", function (t) {
                  return "resize " + t;
                }).style("cursor", function (t) {
                  return Tu[t];
                }).append("rect").attr("x", function (t) {
                  return (/[ew]$/.test(t) ? -3 : null
                  );
                }).attr("y", function (t) {
                  return (/^[ns]/.test(t) ? -3 : null
                  );
                }).attr("width", 6).attr("height", 6).style("visibility", "hidden"), s.style("display", t.empty() ? "none" : null);var u,
                    h = Ya.transition(n),
                    d = Ya.transition(o);c && (u = Rr(c), d.attr("x", u[0]).attr("width", u[1] - u[0]), i(h)), l && (u = Rr(l), d.attr("y", u[0]).attr("height", u[1] - u[0]), r(h)), e(h);
              });
            }function e(t) {
              t.selectAll(".resize").attr("transform", function (t) {
                return "translate(" + h[+/e$/.test(t)] + "," + d[+/^s/.test(t)] + ")";
              });
            }function i(t) {
              t.select(".extent").attr("x", h[0]), t.selectAll(".extent,.n>rect,.s>rect").attr("width", h[1] - h[0]);
            }function r(t) {
              t.select(".extent").attr("y", d[0]), t.selectAll(".extent,.e>rect,.w>rect").attr("height", d[1] - d[0]);
            }function a() {
              function a() {
                var t = Ya.mouse(v),
                    n = !1;y && (t[0] += y[0], t[1] += y[1]), C || (Ya.event.altKey ? (_ || (_ = [(h[0] + h[1]) / 2, (d[0] + d[1]) / 2]), M[0] = h[+(t[0] < _[0])], M[1] = d[+(t[1] < _[1])]) : _ = null), A && p(t, c, 0) && (i(S), n = !0), T && p(t, l, 1) && (r(S), n = !0), n && (e(S), w({ type: "brush", mode: C ? "move" : "resize" }));
              }function p(t, e, n) {
                var i,
                    r,
                    a = Rr(e),
                    u = a[0],
                    c = a[1],
                    l = M[n],
                    p = n ? d : h,
                    x = p[1] - p[0];if (C && (u -= l, c -= x + l), i = (n ? g : f) ? Math.max(u, Math.min(c, t[n])) : t[n], C ? r = (i += l) + x : (_ && (l = Math.max(u, Math.min(c, 2 * _[n] - i))), l < i ? (r = i, i = l) : r = l), p[0] != i || p[1] != r) return n ? s = null : o = null, p[0] = i, p[1] = r, !0;
              }function x() {
                a(), S.style("pointer-events", "all").selectAll(".resize").style("display", t.empty() ? "none" : null), Ya.select("body").style("cursor", null), E.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null), L(), w({ type: "brushend" });
              }var _,
                  y,
                  v = this,
                  m = Ya.select(Ya.event.target),
                  w = u.of(v, arguments),
                  S = Ya.select(v),
                  b = m.datum(),
                  A = !/^(n|s)$/.test(b) && c,
                  T = !/^(e|w)$/.test(b) && l,
                  C = m.classed("extent"),
                  L = K(v),
                  M = Ya.mouse(v),
                  E = Ya.select(n(v)).on("keydown.brush", function () {
                32 == Ya.event.keyCode && (C || (_ = null, M[0] -= h[1], M[1] -= d[1], C = 2), P());
              }).on("keyup.brush", function () {
                32 == Ya.event.keyCode && 2 == C && (M[0] += h[1], M[1] += d[1], C = 0, P());
              });if (Ya.event.changedTouches ? E.on("touchmove.brush", a).on("touchend.brush", x) : E.on("mousemove.brush", a).on("mouseup.brush", x), S.interrupt().selectAll("*").interrupt(), C) M[0] = h[0] - M[0], M[1] = d[0] - M[1];else if (b) {
                var V = +/w$/.test(b),
                    G = +/^n/.test(b);y = [h[1 - V] - M[0], d[1 - G] - M[1]], M[0] = h[V], M[1] = d[G];
              } else Ya.event.altKey && (_ = M.slice());S.style("pointer-events", "none").selectAll(".resize").style("display", null), Ya.select("body").style("cursor", m.style("cursor")), w({ type: "brushstart" }), a();
            }var o,
                s,
                u = L(t, "brushstart", "brush", "brushend"),
                c = null,
                l = null,
                h = [0, 0],
                d = [0, 0],
                f = !0,
                g = !0,
                p = Pu[0];return t.event = function (t) {
              t.each(function () {
                var t = u.of(this, arguments),
                    e = { x: h, y: d, i: o, j: s },
                    n = this.__chart__ || e;this.__chart__ = e, yu ? Ya.select(this).transition().each("start.brush", function () {
                  o = n.i, s = n.j, h = n.x, d = n.y, t({ type: "brushstart" });
                }).tween("brush:brush", function () {
                  var n = xi(h, e.x),
                      i = xi(d, e.y);return o = s = null, function (r) {
                    h = e.x = n(r), d = e.y = i(r), t({ type: "brush", mode: "resize" });
                  };
                }).each("end.brush", function () {
                  o = e.i, s = e.j, t({ type: "brush", mode: "resize" }), t({ type: "brushend" });
                }) : (t({ type: "brushstart" }), t({ type: "brush", mode: "resize" }), t({ type: "brushend" }));
              });
            }, t.x = function (e) {
              return arguments.length ? (c = e, p = Pu[!c << 1 | !l], t) : c;
            }, t.y = function (e) {
              return arguments.length ? (l = e, p = Pu[!c << 1 | !l], t) : l;
            }, t.clamp = function (e) {
              return arguments.length ? (c && l ? (f = !!e[0], g = !!e[1]) : c ? f = !!e : l && (g = !!e), t) : c && l ? [f, g] : c ? f : l ? g : null;
            }, t.extent = function (e) {
              var n, i, r, a, u;return arguments.length ? (c && (n = e[0], i = e[1], l && (n = n[0], i = i[0]), o = [n, i], c.invert && (n = c(n), i = c(i)), i < n && (u = n, n = i, i = u), n == h[0] && i == h[1] || (h = [n, i])), l && (r = e[0], a = e[1], c && (r = r[1], a = a[1]), s = [r, a], l.invert && (r = l(r), a = l(a)), a < r && (u = r, r = a, a = u), r == d[0] && a == d[1] || (d = [r, a])), t) : (c && (o ? (n = o[0], i = o[1]) : (n = h[0], i = h[1], c.invert && (n = c.invert(n), i = c.invert(i)), i < n && (u = n, n = i, i = u))), l && (s ? (r = s[0], a = s[1]) : (r = d[0], a = d[1], l.invert && (r = l.invert(r), a = l.invert(a)), a < r && (u = r, r = a, a = u))), c && l ? [[n, r], [i, a]] : c ? [n, i] : l && [r, a]);
            }, t.clear = function () {
              return t.empty() || (h = [0, 0], d = [0, 0], o = s = null), t;
            }, t.empty = function () {
              return !!c && h[0] == h[1] || !!l && d[0] == d[1];
            }, Ya.rebind(t, u, "on");
          };var Tu = { n: "ns-resize", e: "ew-resize", s: "ns-resize", w: "ew-resize", nw: "nwse-resize", ne: "nesw-resize", se: "nwse-resize", sw: "nesw-resize" },
              Pu = [["n", "e", "s", "w", "nw", "ne", "se", "sw"], ["e", "w"], ["n", "s"], []],
              Cu = Uo.format = $o.timeFormat,
              Lu = Cu.utc,
              Mu = Lu("%Y-%m-%dT%H:%M:%S.%LZ");Cu.iso = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z") ? Na : Mu, Na.parse = function (t) {
            var e = new Date(t);return isNaN(e) ? null : e;
          }, Na.toString = Mu.toString, Uo.second = Xt(function (t) {
            return new qo(1e3 * Math.floor(t / 1e3));
          }, function (t, e) {
            t.setTime(t.getTime() + 1e3 * Math.floor(e));
          }, function (t) {
            return t.getSeconds();
          }), Uo.seconds = Uo.second.range, Uo.seconds.utc = Uo.second.utc.range, Uo.minute = Xt(function (t) {
            return new qo(6e4 * Math.floor(t / 6e4));
          }, function (t, e) {
            t.setTime(t.getTime() + 6e4 * Math.floor(e));
          }, function (t) {
            return t.getMinutes();
          }), Uo.minutes = Uo.minute.range, Uo.minutes.utc = Uo.minute.utc.range, Uo.hour = Xt(function (t) {
            var e = t.getTimezoneOffset() / 60;return new qo(36e5 * (Math.floor(t / 36e5 - e) + e));
          }, function (t, e) {
            t.setTime(t.getTime() + 36e5 * Math.floor(e));
          }, function (t) {
            return t.getHours();
          }), Uo.hours = Uo.hour.range, Uo.hours.utc = Uo.hour.utc.range, Uo.month = Xt(function (t) {
            return (t = Uo.day(t)).setDate(1), t;
          }, function (t, e) {
            t.setMonth(t.getMonth() + e);
          }, function (t) {
            return t.getMonth();
          }), Uo.months = Uo.month.range, Uo.months.utc = Uo.month.utc.range;var Eu = [1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6],
              Vu = [[Uo.second, 1], [Uo.second, 5], [Uo.second, 15], [Uo.second, 30], [Uo.minute, 1], [Uo.minute, 5], [Uo.minute, 15], [Uo.minute, 30], [Uo.hour, 1], [Uo.hour, 3], [Uo.hour, 6], [Uo.hour, 12], [Uo.day, 1], [Uo.day, 2], [Uo.week, 1], [Uo.month, 1], [Uo.month, 3], [Uo.year, 1]],
              Gu = Cu.multi([[".%L", function (t) {
            return t.getMilliseconds();
          }], [":%S", function (t) {
            return t.getSeconds();
          }], ["%I:%M", function (t) {
            return t.getMinutes();
          }], ["%I %p", function (t) {
            return t.getHours();
          }], ["%a %d", function (t) {
            return t.getDay() && 1 != t.getDate();
          }], ["%b %d", function (t) {
            return 1 != t.getDate();
          }], ["%B", function (t) {
            return t.getMonth();
          }], ["%Y", Ee]]),
              ku = { range: function range(t, e, n) {
              return Ya.range(Math.ceil(t / n) * n, +e, n).map(za);
            }, floor: m, ceil: m };Vu.year = Uo.year, Uo.scale = function () {
            return Fa(Ya.scale.linear(), Vu, Gu);
          };var Ru = Vu.map(function (t) {
            return [t[0].utc, t[1]];
          }),
              Ou = Lu.multi([[".%L", function (t) {
            return t.getUTCMilliseconds();
          }], [":%S", function (t) {
            return t.getUTCSeconds();
          }], ["%I:%M", function (t) {
            return t.getUTCMinutes();
          }], ["%I %p", function (t) {
            return t.getUTCHours();
          }], ["%a %d", function (t) {
            return t.getUTCDay() && 1 != t.getUTCDate();
          }], ["%b %d", function (t) {
            return 1 != t.getUTCDate();
          }], ["%B", function (t) {
            return t.getUTCMonth();
          }], ["%Y", Ee]]);Ru.year = Uo.year.utc, Uo.scale.utc = function () {
            return Fa(Ya.scale.linear(), Ru, Ou);
          }, Ya.text = Mt(function (t) {
            return t.responseText;
          }), Ya.json = function (t, e) {
            return Et(t, "application/json", Xa, e);
          }, Ya.html = function (t, e) {
            return Et(t, "text/html", Ha, e);
          }, Ya.xml = Mt(function (t) {
            return t.responseXML;
          }), "object" === (void 0 === e ? "undefined" : i(e)) && e.exports ? e.exports = Ya : this.d3 = Ya;
        }();
      }, {}] }, {}, [1])(1);
  }), e.exports;
});