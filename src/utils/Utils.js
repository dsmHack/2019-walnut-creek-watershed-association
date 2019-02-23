function convertEsriGeometryPolygonToLatLngList(esriGeometry) {
    let latLngList = [];

    if (esriGeometry != null) {
        console.log("esriGeometry not null");
        console.log(esriGeometry);
        if (esriGeometry.results != null && esriGeometry.results.length > 0) {
            console.log("results not null and not empty");
            if(esriGeometry.results[0].geometryType != null && esriGeometry.results[0].geometryType === ("esriGeometryPolygon")) {
                console.log("geometry Type not null and is correct");
                esriGeometry.results[0].geometry.rings[0].forEach((lngLat) => {
                    latLngList.push({lat: lngLat[1], lng: lngLat[0]});
                });
            }
        }
    }

    return latLngList;
}

export default {convertEsriGeometryPolygonToLatLngList}
