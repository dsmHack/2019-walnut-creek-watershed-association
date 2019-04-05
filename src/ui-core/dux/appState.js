const LOADING = 'LOADING';
const LOADED = 'LOADED';

const initialState = {
    isLoading: false
};

const isLoading = () => ({
    type: LOADING
});

const loaded = () => ({
    type: LOADED
});

export const actions = {
    isLoading,
    loaded
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case LOADING:
            return {...state, isLoading: true};
        case LOADED:
            return {...state, isLoading: false};
        default:
            return state;
    }
}