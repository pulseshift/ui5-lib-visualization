'use strict';

sap.ui.define(['sap/ui/core/mvc/Controller'], function (Controller) {
  'use strict';

  return Controller.extend('sap.ui.demo.db.controller.Demo_Bar', {
    onInit: function onInit() {
      var _this = this;

      var oModel = new sap.ui.model.json.JSONModel({
        title: 'Bar chart',
        width: '100%',
        height: '300px',
        showTooltip: true,
        groupedTooltip: true,
        showLegend: true,
        xAxis: [{
          title: 'Summerdays 🌞',
          labels: [1, 2, 3, 4, 5, 6]
        }],
        yAxis: [{
          title: 'Hatched birds in the wood 🦉'
        }],
        series: [{
          name: 'Male',
          dataPoints: [13, 15, 18, 17, 19, 14],
          type: 'ui5.viz.ChartSeriesType.Bar'
        }]
      });

      setTimeout(function () {
        var oModel = _this.getView().getModel('store');
        var aSeries = oModel.getProperty('/series/');
        var aNewSeries = aSeries.concat({
          name: 'Female',
          dataPoints: [14, 11, 18, 21, 16, 14]
        });
        oModel.setProperty('/series/', aNewSeries);
      }, 3000);

      this.getView().setModel(oModel, 'store');
    }
  });
});