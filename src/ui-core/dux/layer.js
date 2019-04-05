const FISH_LAYER = "FISH_LAYER";
const DRINKING_LAYER = "DRINKING_LAYER";
const SWIMMING_LAYER = "SWIMMING_LAYER";
export const Layers = { fish: FISH_LAYER, drinking: DRINKING_LAYER, swimming: SWIMMING_LAYER }

const initialState = {
    selectedLayer: DRINKING_LAYER
};

export const selectors = {
    getSelectedLayer: state => state.layer.selectedLayer
}

export const actions = {
    selectLayer(layer) {
        return { type: layer }
    }
};

export function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case FISH_LAYER: {
            return setLayer(state, FISH_LAYER);
        }
        case DRINKING_LAYER: {
            return setLayer(state, DRINKING_LAYER);
        }
        case SWIMMING_LAYER: {
            return setLayer(state, SWIMMING_LAYER);
        }
        default: {
            return state;
        }
    }
}

function setLayer(state, layer) {
    return {
        ...state,
        selectedLayer: layer
    }
}