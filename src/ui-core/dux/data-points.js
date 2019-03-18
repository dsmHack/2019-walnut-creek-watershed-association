import API from "../../server-core/api-client";

const GET_NITRATE_POINTS = "GET_NITRATE_POINTS";
const GET_ECOLI_POINTS = "GET_ECOLI_POINTS";
const GET_FIBI_POINTS = "GET_FIBI_POINTS";

export const actions = {
    getNitratePoints(hucId, dispatch) {
        API.getNitrateData(hucId)
            .then(nitrate => {
                dispatch({ type: GET_NITRATE_POINTS, payload: nitrate });
                this.getEcoliPoints(hucId, dispatch);
            })
            .catch(error => {
                logErrorShowModal(dispatch, error);
            });
    },

    getEcoliPoints(hucId, dispatch) {
        API.getEcoliData(hucId)
            .then(ecoli => {
                dispatch({ type: GET_ECOLI_POINTS, payload: ecoli });
                this.getFibiPoints(hucId, dispatch);
            })
            .catch(error => {
                logErrorShowModal(dispatch, error);
            });
    },

    getFibiPoints(hucId, dispatch) {
        API.getFibiData(hucId)
            .then(fibi => {
                dispatch({ type: GET_FIBI_POINTS, payload: fibi });
            })
            .catch(error => {
                logErrorShowModal(dispatch, error);
            });
    }
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

function logErrorShowModal(dispatch, error) {
    console.log("Get Data Points Error: ", error);
    dispatch({ type: "SHOW_MODAL" });
}
