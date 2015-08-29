Map { background-color: #99b3cc;}

@land: #f0f1eb;

#world {
    line-color: black;
    line-width: 1;
    polygon-fill: @land;
    [ISO_A2='MX'] {
        polygon-fill: darken(@land, 10%);
    }
}
