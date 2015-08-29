@motorway_width: 5;
@trunk_width: 4;
@primary_width: 3;
@outline_width: 2;

Map {
  background-color: #141414;
}

#roads::outline[zoom>=12] {
    line-color: #d0d1e6;
}

#roads::inline[zoom>=12] {
    line-color: rgba(0, 0, 0, 0.5);
    [type='motorway'] { line-color: #034e7b; }
    [type='trunk'] { line-color: #0570b0; }
    [type='primary'] { line-color: #3690c0; }
    [type='secondary'] { line-color: #74a9cf; }
}

#roads::outline[zoom>=12] {
    [type='motorway'] {
      line-width: @motorway_width + @outline_width;
    }
}

#roads::inline[zoom>=12] {
    [type='motorway'] { line-width: @motorway_width; }
}

#roads::outline[zoom>=14] {
    [type='motorway'] { line-width: @motorway_width + @outline_width; }
    [type='trunk'] { line-width: @trunk_width + @outline_width; }
    [type='primary'],
    [type='secondary'] { line-width: @primary_width + @outline_width; }
}

#roads::inline[zoom>=14] {
    line-width: 0.5;
    [type='motorway'] { line-width: @motorway_width; }
    [type='trunk'] { line-width: @trunk_width; }
    [type='primary'],
    [type='secondary'] { line-width: @primary_width; }
}
