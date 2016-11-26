// usage: node republika.js
// find the n largest clusters in republika.geojson
// outputs a FeatureCollection

var chroma = require('chroma-js')
var fs = require('fs')
var turf = require('turf')

var read = filepath => JSON.parse(fs.readFileSync(filepath).toString())
var accidentes = read('./repubikla.geojson')
  .features
  .filter(e => e.properties.type == 'Accidente')

var clusters = []

// For each point, create a buffer and count the number of elements within
accidentes.forEach(function (acc) {
  var buffer = turf.buffer(acc, 0.020, 'kilometers')

  var cluster = turf.within(
    turf.featureCollection(accidentes),
    turf.featureCollection([ buffer ])
  )

  clusters.push({
    centroid: acc,
    elements: cluster.features
  })
})

// Get top 5 largest clusters style them and build FeatureCollection
var features = clusters.sort((a, b) => b.elements.length - a.elements.length)
.slice(0, 30)
.map(c => {
  var color = chroma.random().hex()
  for (var j = 0, k = c.elements.length; j < k; j++) {
    c.elements[j].properties['marker-color'] = color
    c.elements[j].properties['marker-size'] = 'medium'
  }
  return c.elements
})
.reduce((prev, curr) => prev.concat(curr))
.reduce((prev, curr) => {
  var geom = curr.geometry.coordinates
  var coords = prev.map(p => p.geometry.coordinates)
  var duplicate = coords.indexOf(geom)
  return duplicate == -1 ? prev.concat(curr) : prev
}, [])

var fc = { type: 'FeatureCollection', features: features }
console.log('%j', fc)
