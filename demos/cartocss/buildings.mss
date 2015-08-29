// Tomado de gravitystorm/openstreetmap-carto

@building-fill: #d9d0c9;
@building-line: darken(@building-fill, 15%);
@building-low-zoom: darken(@building-fill, 4%);


#buildings {
  [zoom >= 13] {
    polygon-fill: @building-low-zoom;
    polygon-clip: false;
    [zoom >= 15] {
      line-color: @building-line;
      polygon-fill: @building-fill;
      line-width: .75;
      line-clip: false;
    }
  }
}


