#!/usr/bin/env node

var path = require('path')
var tilereduce = require('tile-reduce')

var count = 0
var results = []

tilereduce({
  zoom: 12,
  map: path.join(__dirname, 'places.js'),
  sources: [
    {
      name: 'osmdata',
      mbtiles: path.join(__dirname, 'mexico.mbtiles'),
      layers: ['osm']
    }
  ]
})
.on('map', function (tile, workerId) {
  // console.log('about to process %j on worker %s', tile, workerId)
})
.on('reduce', function (result, tile) {
  // console.log('got a count of %d from %j', result, tile)
  // count += result
  results.push(result)
})
.on('end', function () {
  // console.log('Total area of buildings:', count)
  var fc = {
    type: 'FeatureCollection',
    features: results
  }
  console.log('%j', fc)
})
