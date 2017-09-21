'use strict';

sap.ui.define(['sap/ui/core/mvc/Controller'], function (Controller) {
  'use strict';

  return Controller.extend('sap.ui.demo.db.controller.Demo_Spline', {
    onInit: function onInit() {
      var _this = this;

      var oModel = new sap.ui.model.json.JSONModel({
        title: 'Spline chart',
        width: '100%',
        height: '300px',
        type: 'spline',
        showTooltip: true,
        groupedTooltip: true,
        showLegend: true,
        xAxis: [{
          title: 'Finds in the village 🏡',
          labels: ['January', 'Febuary', 'March', 'April', 'May', 'June']
        }],
        series: [{
          name: 'Snow angels ❄️',
          dataPoints: [33, 31, 11, 0, 0, 0],
          type: 'ui5.viz.ChartSeriesType.Spline'
        }]
      });

      setTimeout(function () {
        var oModel = _this.getView().getModel('store'); //'this' would be the window
        var aSeries = oModel.getProperty('/series/');
        var aNewSeries = aSeries.concat({
          name: 'Ripe cherry trees 🍒',
          dataPoints: [0, 0, 0, 1, 24, 28]
        });
        oModel.setProperty('/series/', aNewSeries);
      }, 3000);

      this.getView().setModel(oModel, 'store');
    }
  });
});