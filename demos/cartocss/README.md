
## Descarga de datos

Datos vectoriales de los [países del mundo en Natural Earth](http://www.naturalearthdata.com/downloads/10m-cultural-vectors/10m-admin-0-countries/).

```bash
wget http://www.naturalearthdata.com/http//www.naturalearthdata.com/download/10m/cultural/ne_10m_admin_0_countries.zip
mkdir ne_10m_admin_0_countries
unzip ne_10m_admin_0_countries.zip -d ne_10m_admin_0_countries
rm ne_10m_admin_0_countries.zip
```

## Genera un mapa con cartocss y mapnik

```bash
carto world.mml > world.xml
nik2img.py world.xml world.png
```

![Hola
mundo](https://github.com/rodowi/geo-is-osm/blob/master/demos/cartocss/world.png)

