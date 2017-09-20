'use strict'

sap.ui.define(['sap/ui/core/mvc/Controller'], function(Controller) {
  'use strict'

  return Controller.extend('sap.ui.demo.db.controller.Demo_Line', {
    onInit: function onInit() {
      var _this = this

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
            title: 'summerdays',
            labels: [1, 2, 3, 4, 5, 6]
          }
        ],
        yAxis: [
          {
            title: 'sold ice cream scoops'
          }
        ],
        series: [
          {
            name: 'Chocolate',
            dataPoints: [10, 15, 18, 17, 29, 40]
          }
        ]
      })

      setTimeout(function() {
        //declares outer scope as 'this'
        var oModel = _this.getView().getModel('store') //'this' would be the window
        var aSeries = oModel.getProperty('/series/')
        var aNewSeries = aSeries.concat({
          name: 'Strawberry',
          dataPoints: [8, 11, 12, 21, 24, 31]
        })

        oModel.setProperty('/series/', aNewSeries)
        // oModel.refresh(true)
      }, 3000)

      // Assign the model object to the SAPUI5 core
      this.getView().setModel(oModel, 'store')
    },
    myFunction: function myFunction() {
      console.log('click')
      alert('I was clicked')
    }
  })
})
