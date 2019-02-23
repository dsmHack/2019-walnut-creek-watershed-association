function convertEsriGeometryPolygonToLatLngList(esriGeometry) {
    let latLngList = [];

    if (esriGeometry != null && esriGeometry.data != null) {
        if (esriGeometry.data.results != null && esriGeometry.data.results.length > 0) {
            if(esriGeometry.data.results[0].geometryType != null && esriGeometry.data.results[0].geometryType === ("esriGeometryPolygon")) {
                esriGeometry.data.results[0].geometry.rings[0].forEach((lngLat) => {
                    latLngList.push({lat: lngLat[1], lng: lngLat[0]});
                });
            }
        }
    }

    return latLngList;
}


export default {convertEsriGeometryPolygonToLatLngList}
