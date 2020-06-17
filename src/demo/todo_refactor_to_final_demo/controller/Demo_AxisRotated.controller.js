sap.ui.define(['sap/ui/core/mvc/Controller'], function (Controller) {
  'use strict'

  return Controller.extend('sap.ui.demo.db.controller.Demo_AxisRotated', {
    onInit() {
      var oModel = new sap.ui.model.json.JSONModel({
        title: 'Rotated axis chart',
        width: '100%',
        height: '300px',
        showTooltip: true,
        groupedTooltip: true,
        showLegend: false,
        xAxis: [
          {
            labels: [
              'Verena',
              'Adrian',
              'Leonie',
              'Matthias',
              'Sonja',
              'Johannes',
            ],
          },
        ],
        yAxis: [
          {
            title: 'Completed km in the race 👟',
          },
        ],
        series: [
          {
            dataPoints: [9, 12, 10, 8, 11, 9],
            type: 'step',
          },
        ],
      })

      this.getView().setModel(oModel, 'store')
    },
  })
})
