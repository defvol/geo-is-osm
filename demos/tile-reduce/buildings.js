var turf = require('turf')

module.exports = function (sources, tile, write, done) {
  var layer = sources.osmdata.osm
  var areaOfBuildings = 0

  for (var i = 0, j = layer.features.length; i < j; i++) {
    var feature = layer.features[i];
    if (feature.properties.building && feature.geometry.type === 'Polygon') {
      areaOfBuildings += turf.area(feature)
    }
  }

  done(null, areaOfBuildings)
}
