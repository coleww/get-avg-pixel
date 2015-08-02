module.exports = function (pixels) {
  var avg = {r: 0, g: 0, b: 0, a: 0}
  for (var i = 0; i < pixels.length; i += 4) {
    avg.r += pixels[i]
    avg.g += pixels[i + 1]
    avg.b += pixels[i + 2]
    avg.a += pixels[i + 3]
  }
  var numPixels = pixels.length / 4
  avg.r = avg.r / numPixels
  avg.g = avg.g / numPixels
  avg.b = avg.b / numPixels
  avg.a = avg.a / numPixels
  return avg
}
