sap.ui.define(['sap/ui/core/mvc/Controller'], function(Controller) {
  'use strict'

  return Controller.extend('sap.ui.demo.db.controller.Demo_Spline', {
    onInit() {
      // Create a JSON model from an object literal
      var oModel = new sap.ui.model.json.JSONModel({
        title: 'Line chart',
        width: '100%',
        height: '300px',
        type: 'line',
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
            dataPoints: [10, 15, 18, 17, 29, 40]
          }
        ]
      })

      setTimeout(() => {
        //declares outer scope as 'this'
        const oModel = this.getView().getModel('store') //'this' would be the window
        const aSeries = oModel.getProperty('/series/')
        const aNewSeries = aSeries.concat({
          name: 'Strawberry 🍓',
          dataPoints: [8, 11, 12, 21, 24, 31]
        })

        oModel.setProperty('/series/', aNewSeries)
        // oModel.refresh(true)
      }, 3000)

      // Assign the model object to the SAPUI5 core
      this.getView().setModel(oModel, 'store')
    }
  })
})
