sap.ui.define(
  ['sap/ui/core/mvc/Controller', 'sap/m/MessageToast'],
  function (Controller, Toast) {
    function randomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min
    }

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
          tileContentWidth: '144px',
          tileContentHeight: '62px',
          showTooltip: true,
          groupedTooltip: true,
          showLegend: true,
          lines: {
            show: true,
            todayColor: aColorPalette[12],
            style: ui5.viz.LineStyle.Solid,
          },
          areas: {
            show: false,
            areaColor: aColorPalette[7],
            style: ui5.viz.ShapeStyle.Solid,
          },
          xAxis: {
            labels: [
              'April',
              'May',
              'June',
              'July',
              'August',
              'September',
              'October',
              'November',
            ],
          },
          yAxis: {
            title: 'Sightings in the woods 🌲',
            minEnabled: false,
            maxEnabled: false,
            gridLines: false,
            customTicks: false,
          },
          series: [
            {
              name: 'Foxes 🦊',
              dataPoints: [2, null, 6, 5, 8, 9, null, null],
              color: aColorPalette[0],
              type: ui5.viz.ChartSeriesType.Spline,
            },
            {
              name: 'Foxes Forecast',
              dataPoints: [null, null, null, null, null, 9, 8, 6],
              type: ui5.viz.ChartSeriesType.Spline,
              color: aColorPalette[0],
              forecast: true,
            },
            {
              name: 'Foxes Confidence Interval',
              dataPoints: [
                {low: 1, high: 3, type: ui5.viz.DataPointType.ValuePair},
                {low: 2, high: 5, type: ui5.viz.DataPointType.ValuePair},
                {low: 4, high: 7, type: ui5.viz.DataPointType.ValuePair},
                {low: 3, high: 7, type: ui5.viz.DataPointType.ValuePair},
                {low: 5, high: 11, type: ui5.viz.DataPointType.ValuePair},
                {low: 8, high: 11.5, type: ui5.viz.DataPointType.ValuePair},
                {low: null, high: null, type: ui5.viz.DataPointType.ValuePair},
                {low: null, high: null, type: ui5.viz.DataPointType.ValuePair},
              ],
              color: aColorPalette[0],
              type: ui5.viz.ChartSeriesType.RibbonSpline,
            },
            {
              name: 'Bears 🐻',
              dataPoints: [1, 2, 0, 2, 1, 3, null, null],
              type: ui5.viz.ChartSeriesType.Spline,
              color: aColorPalette[1],
            },
            {
              name: 'Bears Forecast',
              dataPoints: [null, null, null, null, null, 3, 5, 9],
              type: ui5.viz.ChartSeriesType.Spline,
              color: aColorPalette[1],
              forecast: true,
            },
            {
              name: 'Deers 🦌',
              dataPoints: [14, 20, 18, 23, 17, 18, null, null],
              type: ui5.viz.ChartSeriesType.Spline,
              color: aColorPalette[2],
            },
            {
              name: 'Deers Forecast',
              dataPoints: [null, null, null, null, null, 18, 19, 12],
              type: ui5.viz.ChartSeriesType.Spline,
              color: aColorPalette[2],
              forecast: true,
            },
          ],
          barChart: {
            labels: ['Last Year', 'This Year'],
            series: [
              {
                name: 'Young',
                dataPoints: [3, 4],
              },
              {
                name: 'Medium',
                dataPoints: [8, 9],
              },
              {
                name: 'Old',
                dataPoints: [4, 5],
              },
            ],
          },
          pieChart: {
            width: '300px',
            height: '300px',
            series: [
              {
                name: 'Young',
                dataPoints: [3],
              },
              {
                name: 'Medium',
                dataPoints: [8],
              },
              {
                name: 'Old',
                dataPoints: [4],
              },
            ],
          },
        })

        this.oModel = oModel
        this.getView().setModel(oModel, 'store')
      },

      oneSelectorPress(oEvent) {
        console.log(oEvent)
        Toast.show('Line Selector pressed: ' + oEvent.getSource().getTitle())
      },

      onShowHideBarChart() {
        this.byId('barChart').setVisible(!this.byId('barChart').getVisible())
      },

      onGenerateBarChartData() {
        const newSeries = [
          {
            name: 'Young',
            dataPoints: [randomInt(10, 30), randomInt(20, 50)],
          },
          {
            name: 'Medium',
            dataPoints: [randomInt(70, 80), randomInt(80, 90)],
          },
          {
            name: 'Old',
            dataPoints: [randomInt(20, 40), randomInt(40, 50)],
          },
        ]

        const newLabels = [
          'Year #' + randomInt(1, 40),
          'Year #' + randomInt(50, 90),
        ]

        this.oModel.setProperty('/barChart/series', newSeries)
        this.oModel.setProperty('/barChart/labels', newLabels)
      },

      onGeneratePieChartData() {
        const newSeries = [
          {
            name: 'Young',
            dataPoints: [randomInt(10, 30)],
          },
          {
            name: 'Medium',
            dataPoints: [randomInt(60, 90)],
          },
          {
            name: 'Old',
            dataPoints: [randomInt(20, 50)],
          },
        ]

        this.oModel.setProperty('/pieChart/series', newSeries)
      },
    })
  }
)
