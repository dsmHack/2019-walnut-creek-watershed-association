import getHucFromAddress from "../../server-core/location-service";
import getHucBorder from "../../server-core/border-data-api";
import API from "../../server-core/api-client";
import { actions as dataPointsActions } from "./data-points";
import {get} from 'lodash';
import {actions as appStateActions} from './appState';

const FETCHING_HUC = "FETCHING_HUC";
const GET_HUC = "HUC_RECEIVED";
const GET_HUC_BORDER = "HUC_BORDER_RECEIVED";
const CONVERT_HUC = "HUC_CONVERTED";
const HUC_LOADED = "HUC_LOADED";

const initialState = {
    hucId: '',
    hucBorder: {},
    latLongs: [],
    coords: [],
    isLoading: false
};

export const selectors = {
    getHucName: state => get(state, 'huc.hucBorder.data.results[0].attributes.HU_10_NAME'),
    isLoading: state => get(state, 'huc.isLoading', false)
};

function fetchHucs(address) {
    return async dispatch => {
        try {
            dispatch(appStateActions.isLoading());
            dispatch({type: FETCHING_HUC});
            const hucId = await getHucFromAddress(address);
            dispatch({type: GET_HUC, payload: hucId});
            dispatch(dataPointsActions.fetchDataPoints(hucId));

            const border = await getHucBorder(hucId, "huc_12");
            dispatch({type: GET_HUC_BORDER, payload: border});

            const result = await API.convertEsriGeometryPolygonToLatLngList(border);
            const latLongs = result.data;
            const coords = convertLatLongToCoords(latLongs);
            dispatch({type: CONVERT_HUC, payload: {latLongs, coords}});

            dispatch({type: HUC_LOADED});
        } catch (e) {
            console.log("Get Huc Info Error: ", e);
            dispatch({ type: "SHOW_MODAL" });
        }
    }
}

export const actions = {
    fetchHucs
};

export function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case FETCHING_HUC: {
            return {
                ...state,
                isLoading: true
            }
        }
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
        case HUC_LOADED: {
            return {
                ...state,
                isLoading: false
            }
        }
        default:
            return state;
    }
}

export function convertLatLongToCoords(latLongs) {
    let coords = [];
    for (let i = 0; i < latLongs.length; i++) {
        coords.push({
            lat: Number(latLongs[i].y),
            lng: Number(latLongs[i].x)
        });
    }
    return coords;
}
