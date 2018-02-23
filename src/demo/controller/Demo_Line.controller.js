sap.ui.define(['sap/ui/core/mvc/Controller'], function (Controller) {
  'use strict'

  return Controller.extend('sap.ui.demo.db.controller.Demo_Line', {
    onInit() {
      var oModel = new sap.ui.model.json.JSONModel({
        title: 'Line chart',
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
            title: 'Sold ice cream scoops 🍧'
          }
        ],
        series: [
          {
            name: 'Chocolate 🍫',
            dataPoints: [10, 15, 18, 17, 29, 40],
            type: 'line'
          }
        ]
      })

      setTimeout(() => {
        const oModel = this.getView().getModel('store')
        const aSeries = oModel.getProperty('/series/')
        const aNewSeries = aSeries.concat({
          name: 'Strawberry 🍓',
          dataPoints: [8, 11, 12, 21, 24, 31],
          type: 'line'
        })
        oModel.setProperty('/series/', aNewSeries)
      }, 3000)

      this.getView().setModel(oModel, 'store')
    }
  })
})
