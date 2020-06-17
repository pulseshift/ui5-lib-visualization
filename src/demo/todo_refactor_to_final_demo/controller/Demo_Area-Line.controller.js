sap.ui.define(['sap/ui/core/mvc/Controller'], function (Controller) {
  'use strict'

  return Controller.extend('sap.ui.demo.db.controller.Demo_Area-Line', {
    onInit() {
      var oModel = new sap.ui.model.json.JSONModel({
        title: 'Area line chart',
        width: '100%',
        height: '300px',
        showTooltip: true,
        groupedTooltip: true,
        showLegend: true,
        xAxis: [
          {
            labels: ['April', 'May', 'June', 'July', 'August', 'September'],
          },
        ],
        yAxis: [
          {
            title: 'Sightings in the woods 🍃',
          },
        ],
        series: [
          {
            name: 'Foxes 🦊',
            dataPoints: [2, 5, 3, 5, 8, 9],
            type: 'area',
          },
        ],
      })

      setTimeout(() => {
        var oModel = this.getView().getModel('store')
        var aSeries = oModel.getProperty('/series/')
        var aNewSeries = aSeries.concat({
          name: 'Bears 🐻',
          dataPoints: [1, 2, 0, 2, 1, 3],
          type: 'area',
        })
        oModel.setProperty('/series/', aNewSeries)
      }, 2000)

      setTimeout(() => {
        var oModel = this.getView().getModel('store')
        var aSeries = oModel.getProperty('/series/')
        var aNewSeries = aSeries.concat({
          name: 'Deer 🦌',
          dataPoints: [14, 20, 18, 23, 17, 18],
          type: 'area',
        })
        oModel.setProperty('/series/', aNewSeries)
      }, 4000)

      this.getView().setModel(oModel, 'store')
    },
  })
})
