'use strict'

sap.ui.define(['sap/ui/core/mvc/Controller'], function(Controller) {
  'use strict'

  return Controller.extend('sap.ui.demo.db.controller.C3-viz-fusion', {
    onInit: function onInit() {
      var _this = this

      var oModel = new sap.ui.model.json.JSONModel({
        title: 'C3-ribbon-extension/viz fusion',
        width: '100%',
        height: '300px',
        showTooltip: true,
        groupedTooltip: true,
        showLegend: true,
        xAxis: [
          {
            labels: [
              '2017-01-01',
              '2017-01-02',
              '2017-01-03',
              '2017-01-04',
              '2017-01-05',
              '2017-01-06',
              '2017-01-07',
              '2017-01-08',
              '2017-01-09',
              '2017-01-10'
            ]
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
          }
        ]
      })

      this.getView().setModel(oModel, 'store')
    }
  })
})
