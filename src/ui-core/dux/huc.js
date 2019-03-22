import locationService from "../../server-core/location-service";
import getHucBorder from "../../server-core/border-data-api";
import API from "../../server-core/api-client";
import { actions as dataPointsActions } from "./data-points";

const GET_HUC = "GET_HUC";
const GET_HUC_BORDER = "GET_HUC_BORDER";
const CONVERT_HUC = "CONVERT_HUC";

const initialState = {
    hucId: '',
    hucBorder: {},
    latLongs: [],
    coords: []
}

export const actions = {
    getHuc(address) {
        return dispatch => {
            locationService.getHucFromAddress(address)
                .then(hucId => {
                    dispatch({ type: GET_HUC, payload: hucId });
                    this.getHucBorder(hucId);
                    dataPointsActions.getNitratePoints(hucId, dispatch);
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
                    var coords = convertLatLongToCoords(latLongs);
                    dispatch({
                        type: CONVERT_HUC,
                        payload: { latLongs, coords }
                    });
                })
                .catch(error => {
                    logErrorShowModal(dispatch, error);
                });
        };
    }
};

export function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case GET_HUC: {
            return {
                ...state,
                hucId: payload
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
                latLongs: payload.latLongs,
                coords: payload.coords
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

export function convertLatLongToCoords(latLongs) {
    let coords = [];
    for (var i = 0; i < latLongs.length; i++) {
        coords.push({
            lat: Number(latLongs[i].y),
            lng: Number(latLongs[i].x)
        });
    }
    return coords;
}
