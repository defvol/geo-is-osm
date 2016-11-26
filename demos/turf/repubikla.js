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

// For each point, create a buffer and cluster elements around it
var buffer = p => turf.buffer(p, 0.020, 'kilometers')
var clusters = []
var fc = turf.featureCollection
var within = (elems, area) => turf.within(fc(elems), fc([buffer(area)]))
var clusters = accidentes.map(a => within(accidentes, a).features)

// Get top 30 largest clusters style them and build FeatureCollection
var features = clusters.sort((a, b) => b.length - a.length)
.slice(0, 30)
.map(c => {
  var color = chroma.random().hex()
  for (var j = 0, k = c.length; j < k; j++) {
    c[j].properties['marker-color'] = color
    c[j].properties['marker-size'] = 'medium'
  }
  return c
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
