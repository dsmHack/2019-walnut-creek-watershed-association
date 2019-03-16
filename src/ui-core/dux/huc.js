import getHucFromAddress from "../../server-core/location-service";
import getHucBorder from "../../server-core/border-data-api";

const GET_HUC = "GET_HUC";
const GET_HUC_BORDER = "GET_HUC_BORDER";

export const actions = {
    async getHuc(address) {
        const huc = await getHucFromAddress(address);
        return { type: ADD_ADDRESS, payload: huc }
    },

    async getHucBorder(huc) {
        const border = await getHucBorder(hucId, "huc_12");
        return { type: GET_HUC_BORDER, payload: border }
    }
}

export function reducer(state = {}, { type, payload }) {
    switch (type) {
        case GET_HUC: {
            return {
                ...state,
                huc: payload
            }
        }
        case GET_HUC_BORDER: {
            return {
                ...state,
                hucBorder: payload
            }
        }
        default:
            return state;
    }
}