sap.ui.define(['sap/ui/core/mvc/Controller'], function (Controller) {
  'use strict'

  return Controller.extend('sap.ui.demo.db.controller.Hana-viz-fusion', {
    onInit() {
      var oModel = new sap.ui.model.json.JSONModel({
        title: 'Hana viz fusion',
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
            name: 'Measurement',
            type: 'line',
            color: '#005073',
            dataPoints: [
              {
                type: 'single-value',
                value: null
              },
              {
                type: 'single-value',
                value: null
              },
              {
                type: 'single-value',
                value: null
              },
              {
                type: 'single-value',
                value: null
              },
              {
                type: 'single-value',
                value: null
              },
              {
                type: 'single-value',
                value: 150
              },
              {
                type: 'single-value',
                value: 150
              },
              {
                type: 'single-value',
                value: 150
              },
              {
                type: 'single-value',
                value: 150
              },
              {
                type: 'single-value',
                value: 150
              }
            ]
          },

          {
            name: 'Measurement',
            type: 'line',
            color: '#005073',
            dataPoints: [
              {
                type: 'single-value',
                value: null
              },
              {
                type: 'single-value',
                value: null
              },
              {
                type: 'single-value',
                value: null
              },
              {
                type: 'single-value',
                value: null
              },
              {
                type: 'single-value',
                value: null
              },
              {
                type: 'single-value',
                value: 250
              },
              {
                type: 'single-value',
                value: 250
              },
              {
                type: 'single-value',
                value: 250
              },
              {
                type: 'single-value',
                value: 250
              },
              {
                type: 'single-value',
                value: 250
              }
            ]
          },

          {
            name: 'Confidence interval',
            type: 'ribbon-line',
            color: '#71c7ec',
            dataPoints: [
              {
                type: 'value-pair',
                low: null,
                high: null
              },
              {
                type: 'value-pair',
                low: null,
                high: null
              },
              {
                type: 'value-pair',
                low: null,
                high: null
              },
              {
                type: 'value-pair',
                low: null,
                high: null
              },
              {
                type: 'value-pair',
                low: 10,
                high: 180
              },
              {
                type: 'value-pair',
                low: 100,
                high: 300
              },
              {
                type: 'value-pair',
                low: 20,
                high: 150
              }
            ]
          }
        ]
      })
      this.getView().setModel(oModel, 'store')

      var oModel2 = new sap.ui.model.json.JSONModel()
      oModel2.loadData(
        'https://xsabd13c549.hana.ondemand.com/BASF/ui/services/Forecast_Result.xsodata/CalcView/?$format=json'
      )
    }
  })
})
