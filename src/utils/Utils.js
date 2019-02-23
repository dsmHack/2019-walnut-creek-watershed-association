function convertEsriGeometryPolygonToLatLngList(esriGeometry) {
    let latLngList = [];

    if (esriGeometry != null) {
        if (esriGeometry.results != null && esriGeometry.results.length > 0) {
            if(esriGeometry.results[0].geometryType != null && esriGeometry.results[0].geometryType === ("esriGeometryPolygon")) {
                esriGeometry.results[0].geometry.rings[0].forEach((lngLat) => {
                    latLngList.push({lat: lngLat[1], lng: lngLat[0]});
                });
            }
        }
    }

    return latLngList;
}

export default {convertEsriGeometryPolygonToLatLngList}
