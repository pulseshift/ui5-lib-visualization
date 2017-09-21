'use strict';

sap.ui.define(['sap/ui/core/mvc/Controller'], function (Controller) {
  'use strict';

  return Controller.extend('sap.ui.demo.db.controller.Demo_Line', {
    onInit: function onInit() {
      var _this = this;

      var oModel = new sap.ui.model.json.JSONModel({
        title: 'Line chart',
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
          title: 'Sold ice cream scoops 🍧'
        }],
        series: [{
          name: 'Chocolate 🍫',
          dataPoints: [10, 15, 18, 17, 29, 40]
        }]
      });

      setTimeout(function () {
        var oModel = _this.getView().getModel('store');
        var aSeries = oModel.getProperty('/series/');
        var aNewSeries = aSeries.concat({
          name: 'Strawberry 🍓',
          dataPoints: [8, 11, 12, 21, 24, 31]
        });
        oModel.setProperty('/series/', aNewSeries);
      }, 3000);

      this.getView().setModel(oModel, 'store');
    }
  });
});