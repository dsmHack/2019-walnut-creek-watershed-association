import API from "../../server-core/api-client";
import {actions as appStateActions} from './appState';

const GET_NITRATE_POINTS = "GET_NITRATE_POINTS";
const GET_ECOLI_POINTS = "GET_ECOLI_POINTS";
const GET_FIBI_POINTS = "GET_FIBI_POINTS";

function fetchDataPoints(hucId) {
    return async dispatch => {
        try {
            await Promise.all([
                getNitratePoints(hucId, dispatch),
                getEcoliPoints(hucId, dispatch),
                getFibiPoints(hucId, dispatch)
            ]);
            dispatch(appStateActions.loaded());
        } catch (e) {
            console.log("Get Data Points Error: ", e);
            dispatch({ type: "SHOW_MODAL" });
        }
    }
}

async function getNitratePoints(hucId, dispatch) {
    const nitrate = await API.getNitrateData(hucId);
    dispatch({type: GET_NITRATE_POINTS, payload: nitrate});
}

async function getEcoliPoints(hucId, dispatch) {
    const ecoli = await API.getEcoliData(hucId);
    dispatch({ type: GET_ECOLI_POINTS, payload: ecoli });
}

async function getFibiPoints(hucId, dispatch) {
    const fibi = await API.getFibiData(hucId);
    dispatch({ type: GET_FIBI_POINTS, payload: fibi });
}

export const actions = {
    fetchDataPoints
};

export function reducer(state = {}, { type, payload }) {
    switch (type) {
        case GET_NITRATE_POINTS: {
            return {
                ...state,
                nitratePoints: payload
            };
        }
        case GET_ECOLI_POINTS: {
            return {
                ...state,
                ecoliPoints: payload
            };
        }
        case GET_FIBI_POINTS: {
            return {
                ...state,
                fibiPoints: payload
            };
        }
        default:
            return state;
    }
}

