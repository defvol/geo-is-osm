var turf = require('turf')

module.exports = function (sources, tile, write, done) {
  var layer = sources.osmdata.osm
  var lengthOfRoads = 0

  for (var i = 0, j = layer.features.length; i < j; i++) {
    var feature = layer.features[i];
    if (feature.properties.highway && feature.geometry.type === 'LineString') {
      lengthOfRoads += turf.lineDistance(feature)
    }
  }

  done(null, lengthOfRoads)
}
