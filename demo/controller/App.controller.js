sap.ui.define(['sap/ui/core/mvc/Controller'], function(Controller) {
  'use strict'

  return Controller.extend('sap.ui.demo.db.controller.App', {
    onInit() {
      // Create a JSON model from an object literal
      var oModel = new sap.ui.model.json.JSONModel({
        width: '100%',
        height: '300px',
        showTooltip: true,
        groupedTooltip: true,
        showLegend: true,
        seriesName: 'firstSeries',
        v1: 100,
        v2: 110,
        v3: 105,
        v4: 103,
        v5: 108,
        series: [
          {
            name: 'firstSeries',
            dataPoints: [100, 110, 105, 103, 108]
          },
          {
            name: 'secondSeries',
            dataPoints: [23, 54, 56, 98, 100]
          }
        ]
      })

      setTimeout(() => {
        //declares outer scope as 'this'
        const oModel = this.getView().getModel('store') //'this' would be the window
        const aSeries = oModel.getProperty('/series/')
        const aNewSeries = aSeries.concat({
          name: 'thirdSeries',
          dataPoints: [45, 98, 11, 233, 56]
        })

        oModel.setProperty('/series/', aNewSeries)
        // oModel.refresh(true)
      }, 5000)

      // Assign the model object to the SAPUI5 core
      this.getView().setModel(oModel, 'store')
    },

    myFunction() {
      console.log('click')
      alert('I was clicked')
    }
  })
})
