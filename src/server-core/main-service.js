import api from "./api-client";
import loc from "./location-service";

async function getData(address, layer) {
    let huc = await loc.getHucFromAddress(address);
    let results;

    if (layer === "fish") {
        results = await api.getFibiData(huc);
    } else if (layer === "swimming") {
        results = await api.getEcoliData(huc);
    } else if (layer === "drinking") {
        results = await api.getNitrateData(huc);
    }
    return results;
}

export default { getData };