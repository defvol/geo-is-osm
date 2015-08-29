_Ejemplos tomados y modificados de https://github.com/omniscale/magnacarto/tree/master/docs/examples_

# Hola Mundo!

### Descarga de datos

Datos vectoriales de los [países del mundo en Natural Earth](http://www.naturalearthdata.com/downloads/10m-cultural-vectors/10m-admin-0-countries/).

```bash
wget http://www.naturalearthdata.com/http//www.naturalearthdata.com/download/10m/cultural/ne_10m_admin_0_countries.zip
mkdir ne_10m_admin_0_countries
unzip ne_10m_admin_0_countries.zip -d ne_10m_admin_0_countries
rm ne_10m_admin_0_countries.zip
```

### Genera un mapa con cartocss y mapnik

```bash
carto world.mml > world.xml
nik2img.py world.xml world.png
```

![Hola
mundo](https://github.com/rodowi/geo-is-osm/blob/master/demos/cartocss/world.png)

### Vías y caminos

**Descarga de datos**

[Extractos de Mapzen](https://mapzen.com/data/metro-extracts)

_Nota: Descarga los extractos de Santiago en formato SHP hechos con imposm._

**Genera el mapa en una sección de la ciudad**

```bash
carto roads.mml > roads.xml
nik2img.py -d 500 500 -s 3857 -e -7871714 -3959491 -7861242 -3950854 roads.xml roads.png
```

_Nota: para identificar el bounding box de una región te recomiendo usar [boundingbox.info](http://boundingbox.info/)._
