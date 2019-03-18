import getHucFromAddress from "../../server-core/location-service";
import getHucBorder from "../../server-core/border-data-api";
import API from "../../server-core/api-client";

const GET_HUC = "GET_HUC";
const GET_HUC_BORDER = "GET_HUC_BORDER";
const CONVERT_HUC = "CONVERT_HUC";

export const actions = {
    getHuc(address) {
        return dispatch => {
            getHucFromAddress(address)
                .then(huc => {
                    dispatch({ type: GET_HUC, payload: huc });
                    this.getHucBorder(huc);
                })
                .catch(error => {
                    logErrorShowModal(dispatch, error);
                });
        };
    },

    getHucBorder(hucId) {
        return dispatch => {
            getHucBorder(hucId, "huc_12")
                .then(border => {
                    dispatch({ type: GET_HUC_BORDER, payload: border });
                    this.convertHucToLatLong(border);
                })
                .catch(error => {
                    logErrorShowModal(dispatch, error);
                });
        };
    },

    convertHucToLatLong(border) {
        return dispatch => {
            API.convertEsriGeometryPolygonToLatLngList(border)
                .then(result => {
                    var latLongs = result.data;
                    dispatch({ type: CONVERT_HUC, payload: latLongs });
                })
                .catch(error => {
                    logErrorShowModal(dispatch, error);
                });
        };
    }
};

export function reducer(state = {}, { type, payload }) {
    switch (type) {
        case GET_HUC: {
            return {
                ...state,
                huc: payload
            };
        }
        case GET_HUC_BORDER: {
            return {
                ...state,
                hucBorder: payload
            };
        }
        case CONVERT_HUC: {
            return {
                ...state,
                latLongs: payload
            };
        }
        default:
            return state;
    }
}

function logErrorShowModal(dispatch, error) {
    console.log("Get Huc Info Error: ", error);
    dispatch({ type: "SHOW_MODAL" });
}
