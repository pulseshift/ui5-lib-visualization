c3.chart.internal.fn.additionalConfig = {
  aaatest1: 5,
  ci: {
    start_idx: 0,
    corresponding_series: undefined,
    ci_high: [200, 300, 250, 300, 400, 350],
    ci_low: [100, 210, 180, 170, 320, 210]
  }
}

c3.chart.fn.test = function() {
  console.log('test()', this.internal.config.aaatest1)
}
