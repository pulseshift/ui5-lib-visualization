sap.ui.define(['sap/ui/core/mvc/Controller'], function(Controller) {
  'use strict'

  return Controller.extend('sap.ui.demo.db.controller.Demo_SubchartZoom', {
    onInit() {
      var oModel = new sap.ui.model.json.JSONModel({
        title: 'Subchart and Zoom chart',
        width: '100%',
        height: '300px',
        showTooltip: true,
        groupedTooltip: true,
        showLegend: true,
        xAxis: [
          {
            labels: [
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9,
              10,
              11,
              12,
              13,
              14,
              15,
              16,
              17,
              18,
              19,
              20,
              21,
              22,
              23,
              24,
              25
            ]
          }
        ],
        series: [
          {
            name: 'So many values 🌌',
            dataPoints: [
              10,
              15,
              18,
              17,
              29,
              40,
              34,
              63,
              43,
              23,
              76,
              86,
              34,
              65,
              45,
              76,
              78,
              65,
              34,
              21,
              23,
              45,
              98,
              67,
              12
            ],
            type: 'ui5.viz.ChartSeriesType.Line'
          }
        ]
      })

      this.getView().setModel(oModel, 'store')
    }
  })
})
