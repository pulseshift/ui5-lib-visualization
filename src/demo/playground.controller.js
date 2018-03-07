sap.ui.define(['sap/ui/core/mvc/Controller'], function(Controller) {
  return Controller.extend('ui5.demo.playground', {
    onInit() {
      const aColorPalette = ui5.viz.ColorPalette.Material500

      // define series color palette with a preset based on material design colors
      ui5.viz.setDefaultColorPalette(aColorPalette)

      // define model
      const oModel = new sap.ui.model.json.JSONModel({
        title: 'Spline chart',
        width: '100%',
        height: '300px',
        showTooltip: true,
        groupedTooltip: true,
        showLegend: true,
        lines: {
          show: true,
          todayColor: aColorPalette[12]
        },
        areas: {
          show: true
        },
        xAxis: {
          labels: ['April', 'May', 'June', 'July', 'August', 'September', 'October', 'November']
        },
        yAxis: {
          title: 'Sightings in the woods 🌲',
          minEnabled: false,
          maxEnabled: false
        },
        series: [{
          name: 'Foxes 🦊',
          dataPoints: [2, null, 6, 5, 8, 9, null, null],
          color: aColorPalette[0],
          type: ui5.viz.ChartSeriesType.Spline
        }, {
          name: 'Foxes Forecast',
          dataPoints: [null, null, null, null, null, 9, 8,6],
          type: ui5.viz.ChartSeriesType.Spline,
          color: aColorPalette[0],
          forecast: true
        }, {
          name: 'Bears 🐻',
          dataPoints: [1, 2, 0, 2, 1, 3, null, null],
          type: ui5.viz.ChartSeriesType.Spline,
          color: aColorPalette[1]
        }, {
          name: 'Bears Forecast',
          dataPoints: [null, null, null, null, null, 3, 5,9],
          type: ui5.viz.ChartSeriesType.Spline,
          color: aColorPalette[1],
          forecast: true
        }, {
          name: 'Deers 🦌',
          dataPoints: [14, 20, 18, 23, 17, 18, null, null],
          type: ui5.viz.ChartSeriesType.Spline,
          color: aColorPalette[2]
        }, {
          name: 'Deers Forecast',
          dataPoints: [null, null, null, null, null, 18, 19,12],
          type: ui5.viz.ChartSeriesType.Spline,
          color: aColorPalette[2],
          forecast: true
        }]
      });

      this.getView().setModel(oModel, 'store')
    }
  })
});
