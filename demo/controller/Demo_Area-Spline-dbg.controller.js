'use strict';

sap.ui.define(['sap/ui/core/mvc/Controller'], function (Controller) {
  'use strict';

  return Controller.extend('sap.ui.demo.db.controller.Demo_Area-spline', {
    onInit: function onInit() {
      var _this = this;

      var oModel = new sap.ui.model.json.JSONModel({
        title: 'Area-spline chart',
        width: '100%',
        height: '300px',
        showTooltip: true,
        groupedTooltip: true,
        showLegend: true,
        xAxis: [{
          labels: ['July', 'August', 'September', 'October', 'November', 'December']
        }],
        yAxis: [{
          title: 'Rain [l/m²] 💧'
        }],
        series: [{
          name: 'Oak City 🌳',
          dataPoints: [6, 8, 14, 23, 28, 26],
          type: 'ui5.viz.ChartSeriesType.AreaSpline'
        }]
      });

      setTimeout(function () {
        var oModel = _this.getView().getModel('store');
        var aSeries = oModel.getProperty('/series/');
        var aNewSeries = aSeries.concat({
          name: 'Pine Village 🌲',
          dataPoints: [4, 10, 18, 28, 30, 29]
        });
        oModel.setProperty('/series/', aNewSeries);
      }, 3000);

      this.getView().setModel(oModel, 'store');
    }
  });
});