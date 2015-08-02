var tap = require('tape')
var getAvgPixel = require('./')

tap.test('does the thing', function (t) {
  t.plan(1)
  var sample = [0, 0, 0, 0, 200, 160, 220, 100, 100, 80, 110, 50]
  t.deepEqual(getAvgPixel(sample), {r: 100, g: 80, b: 110, a: 50})
})
