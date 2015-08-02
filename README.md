get-avg-pixel
----------------

given an array of pixel data not unlike that returned by `canvasContext.getImageData().data`, returns the data for the average of all of the pixels as `{r: 0-255, g: 0-255, b: 0-255, a: 0-255}`

[![NPM](https://nodei.co/npm/get-avg-pixel.png)](https://nodei.co/npm/get-avg-pixel/) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard) [![Build Status](https://secure.travis-ci.org/coleww/get-avg-pixel.png)](http://travis-ci.org/coleww/get-avg-pixel)


### EXAMPLE

```
  /// ... canvas/context setup code up here ... \\\\\\
  var pixels = ctx.getImageData().data
  var getAvgPixel = require('get-avg-pixel')
  getAvgPixel(pixels)
  // => {r: 100, g: 212, b: 53, a: 183}
  // now do something with that pixel data
```
