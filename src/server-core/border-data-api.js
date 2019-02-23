import axios from 'axios';

async function getHucBorder(hucid, hucType) {

    let url = "https://watersgeo.epa.gov/arcgis/rest/services/NHDPlus_NP21/WBD_NP21_Simplified/MapServer/find?searchText=" +
        hucid + "&contains=true&searchFields=&sr=&layers=" +
        hucType + "&layerDefs=&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&dynamicLayers=&returnZ" +
        "=false&returnM=false&gdbVersion=&returnUnformattedValues=false&returnFieldName=false&datumTransformations" +
        "=&layerParameterValues=&mapRangeValues=&layerRangeValues=&f=pjson";

   return axios.get(url).then((response) => {
        return response;
    })
        .catch((error) => {
            console.log(error);
            return "will the water kill me?";
        });
}

export default {getHucBorder};
