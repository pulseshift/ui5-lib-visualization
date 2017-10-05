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
                low: 30,
                high: 160
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
            ],
            type: 'ui5.viz.ChartSeriesType.RibbonLine'
          },

          {
            name: 'Confidence interval 2',
            dataPoints: [
              {
                low: null,
                high: null
              },
              {
                low: 10,
                high: 180
              },
              {
                low: 150,
                high: 300
              },
              {
                low: 200,
                high: 350
              },
              {
                low: 300,
                high: 470
              },
              {
                low: 250,
                high: 400
              },
              {
                low: 380,
                high: 500
              }
            ],
            type: 'ui5.viz.ChartSeriesType.RibbonLine'
          }
        ]
      })
      this.getView().setModel(oModel, 'store')
    }
  })
})
