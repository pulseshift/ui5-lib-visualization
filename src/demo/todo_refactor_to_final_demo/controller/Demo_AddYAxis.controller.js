sap.ui.define(['sap/ui/core/mvc/Controller'], function (Controller) {
  'use strict'

  return Controller.extend('sap.ui.demo.db.controller.Demo_AddYAxis', {
    onInit() {
      var oModel = new sap.ui.model.json.JSONModel({
        title: 'Additional Y axis chart',
        width: '100%',
        height: '300px',
        showTooltip: true,
        groupedTooltip: true,
        showLegend: true,
        xAxis: [
          {
            labels: ['January', 'Febuary', 'March', 'April', 'May', 'June'],
          },
        ],
        y2Axis: [
          {
            title: 'My y2Axis',
          },
        ],
        series: [
          {
            name: 'Animal 1 population',
            dataPoints: [11000, 10000, 11500, 11000, 12000, 13000],
            type: 'line',
            yAxis: 'ui5.viz.Axis.Y',
          },
          {
            name: 'Animal 2 Population',
            dataPoints: [1000, 1200, 1100, 900, 1050, 1100],
            type: 'line',
            yAxis: 'ui5.viz.Axis.Y2',
          },
        ],
      })

      this.getView().setModel(oModel, 'store')
    },
  })
})
