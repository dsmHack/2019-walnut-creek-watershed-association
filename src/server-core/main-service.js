import api from "./api-client";
import loc from "./location-service";
import {
    FISH_LAYER,
    SWIMMING_LAYER,
    DRINKING_LAYER
} from "../constants_shared/layers";

async function getData(address, layer) {
    let huc = await loc.getHucFromAddress(address);
    let results;

    if (layer === FISH_LAYER) {
        results = await api.getFibiData(huc);
    } else if (layer === SWIMMING_LAYER) {
        results = await api.getEcoliData(huc);
    } else if (layer === DRINKING_LAYER) {
        results = await api.getNitrateData(huc);
    }
    return results;
}

export default { getData };
