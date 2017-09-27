sap.ui.define(['sap/ui/core/mvc/Controller'], function(Controller) {
  'use strict'

  return Controller.extend('sap.ui.demo.db.controller.Demo_Step', {
    onInit() {
      var oModel = new sap.ui.model.json.JSONModel({
        title: 'Step chart',
        width: '100%',
        height: '300px',
        showTooltip: true,
        groupedTooltip: true,
        showLegend: false,
        xAxis: [
          {
            labels: [
              'Thurday',
              'Thursday night',
              'Friday',
              'Friday night',
              'Saturday',
              'Saturday night'
            ]
          }
        ],
        yAxis: [
          {
            title: 'Bonfires in the village 🔥'
          }
        ],
        series: [
          {
            dataPoints: [0, 1, 0, 5, 1, 6],
            type: 'ui5.viz.ChartSeriesType.Step'
          }
        ]
      })

      this.getView().setModel(oModel, 'store')
    }
  })
})
