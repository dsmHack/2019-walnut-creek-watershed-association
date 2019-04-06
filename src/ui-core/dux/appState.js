const LOADING = 'LOADING';
const LOADED = 'LOADED';
const SHOW_MODAL = "SHOW_MODAL";
const HIDE_MODAL = "HIDE_MODAL";
const DISPLAY_UI = "DISPLAY_UI";
const SHOW_HELP_MODAL = "SHOW_HELP_MODAL";
const HIDE_HELP_MODAL = "HIDE_HELP_MODAL";

const initialState = {
    isLoading: false,
    showAddressModal: true,
    displayUi: false,
    showHelpModal: false
};

export const actions = {
    isLoading: () => ({type: LOADING}),
    loaded: () => ({type: LOADED}),
    showModal: () => ({type: SHOW_MODAL}),
    hideModal: () => ({type: HIDE_MODAL}),
    displayUi: () => ({type: DISPLAY_UI}),
    showHelpModal: () => ({type: SHOW_HELP_MODAL}),
    hideHelpModal: () => ({type: HIDE_HELP_MODAL})
};

export function reducer(state = initialState, { type }) {
    switch (type) {
        case SHOW_MODAL:
            return {...state, showAddressModal: true};
        case HIDE_MODAL:
            return {...state, showAddressModal: false};
        case DISPLAY_UI:
            return {...state, displayUi: true};
        case LOADING:
            return {...state, isLoading: true};
        case LOADED:
            return {...state, isLoading: false};
        case SHOW_HELP_MODAL:
            return {...state, showHelpModal: true};
        case HIDE_HELP_MODAL:
            return {...state, showHelpModal: false};
        default:
            return state;
    }
}