'use strict';

sap.ui.define(['sap/ui/core/mvc/Controller'], function (Controller) {
  'use strict';

  return Controller.extend('sap.ui.demo.db.controller.Demo_Area-step', {
    onInit: function onInit() {
      var _this = this;

      var oModel = new sap.ui.model.json.JSONModel({
        title: 'Area-step chart',
        width: '100%',
        height: '300px',
        showTooltip: true,
        groupedTooltip: true,
        showLegend: true,
        xAxis: [{
          labels: ['October', 'November', 'December', 'January', 'February', 'March']
        }],
        yAxis: [{
          title: 'Snow [kg/m²] ❄️'
        }],
        series: [{
          name: 'Oak City 🌳',
          dataPoints: [0, 1, 3, 10, 9, 1]
        }]
      });

      setTimeout(function () {
        var oModel = _this.getView().getModel('store');
        var aSeries = oModel.getProperty('/series/');
        var aNewSeries = aSeries.concat({
          name: 'Pine Village 🌲',
          dataPoints: [0, 2, 8, 14, 14, 2]
        });
        oModel.setProperty('/series/', aNewSeries);
      }, 3000);

      this.getView().setModel(oModel, 'store');
    }
  });
});