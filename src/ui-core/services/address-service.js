export const FETCH_HUC = "FETCH_HUC";
export const FETCH_HUC_BORDER = "FETCH_HUC_BORDER";

function fetchHuc(address){
    return {
        type: FETCH_HUC,
        address
    }
}


handleSubmit = async (address) => {
    let hucId = await getHucFromAddress(address);
    let hucBorder = await getHucBorder(hucId, "huc_12");

    let latlngs = (await API.convertEsriGeometryPolygonToLatLngList(hucBorder)).data;
    let coords = [];
    for (var latlng of latlngs) {
        let loc = {};
        loc.lat = Number(latlng.y);
        loc.lng = Number(latlng.x);
        coords.push(loc);
    }

    this.setState({
        coordinatesList: coords,
        showModal: false
    });

    let nitratePoints = await API.getNitrateData(hucId);
    let ecoliPoints = await API.getEcoliData(hucId);

    this.setState({
        ecoliData: ecoliPoints,
        nitrateData: nitratePoints,
        fibiData: await API.getFibiData(hucId)
    });

    this.setState({
        dataPointsToPlot: nitratePoints
    });
};