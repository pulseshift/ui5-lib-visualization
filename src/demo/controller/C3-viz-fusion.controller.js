sap.ui.define(['sap/ui/core/mvc/Controller'], function(Controller) {
  'use strict'

  return Controller.extend('sap.ui.demo.db.controller.C3-viz-fusion', {
    onInit() {
      var oModel = new sap.ui.model.json.JSONModel({
        title: 'C3-ribbon-extension/viz fusion',
        width: '100%',
        height: '300px',
        showTooltip: true,
        groupedTooltip: true,
        showLegend: true,
        xAxis: [
          {
            labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
          }
        ],
        yAxis: [
          {
            title: 'Values'
          }
        ],
        series: [
          {
            name: 'Confidence interval',
            type: 'ribbon-line',
            color: '#71c7ec',
            dataPoints: [
              {
                low: null,
                high: null
              },
              {
                low: null,
                high: null
              },
              {
                low: null,
                high: null
              },
              {
                low: null,
                high: null
              },
              {
                low: 10,
                high: 180
              },
              {
                low: 100,
                high: 300
              },
              {
                low: 20,
                high: 150
              },
              {
                low: 300,
                high: 470
              },
              {
                low: 100,
                high: 220
              },
              {
                low: 190,
                high: 280
              }
            ]
          },

          {
            name: 'Measurement',
            dataPoints: [100, 90, 150, 100, 120, 180, 90],
            type: 'line',
            color: '#005073'
          },

          {
            name: 'Prognose',
            dataPoints: [null, null, null, null, 100, 210, 110, 340, 160, 230],
            type: 'line',
            lineStyle: 'dotted',
            color: '#189ad3'
          }
        ]
      })
      this.getView().setModel(oModel, 'store')
    }
  })
})
