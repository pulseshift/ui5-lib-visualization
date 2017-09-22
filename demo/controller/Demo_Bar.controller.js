sap.ui.define(['sap/ui/core/mvc/Controller'], function(Controller) {
  'use strict'

  return Controller.extend('sap.ui.demo.db.controller.Demo_Bar', {
    onInit() {
      var oModel = new sap.ui.model.json.JSONModel({
        title: 'Bar chart',
        width: '100%',
        height: '300px',
        showTooltip: true,
        groupedTooltip: true,
        showLegend: true,
        xAxis: [
          {
            title: 'Summerdays 🌞',
            labels: [1, 2, 3, 4, 5, 6]
          }
        ],
        yAxis: [
          {
            title: 'Hatched birds in the wood 🦉'
          }
        ],
        series: [
          {
            name: 'Male',
            dataPoints: [13, 15, 18, 17, 19, 12],
            type: 'ui5.viz.ChartSeriesType.Bar'
          }
        ]
      })

      setTimeout(() => {
        const oModel = this.getView().getModel('store')
        const aSeries = oModel.getProperty('/series/')
        const aNewSeries = aSeries.concat({
          name: 'Female',
          dataPoints: [14, 11, 18, 21, 24, 12]
        })
        oModel.setProperty('/series/', aNewSeries)
      }, 3000)

      this.getView().setModel(oModel, 'store')
    }
  })
})
