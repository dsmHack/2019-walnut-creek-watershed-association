const ADD_ADDRESS = "ADD_ADDRESS";
const SHOW_MODAL = "SHOW_MODAL";
const HIDE_MODAL = "HIDE_MODAL";

const initialState = {
    address: "",
    showAddressModal: true
}

export const actions = {
    addAddress(address) {
        return { type: ADD_ADDRESS, payload: address }
    },
    showModal(){
        return {type: SHOW_MODAL}
    },
    hideModal(){
        return {type: HIDE_MODAL}
    }
}

export function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_ADDRESS: {
            return {
                ...state,
                address: payload
            }
        }
        case SHOW_MODAL: {
            return {
                ...state,
                showAddressModal: true
            }
        }
        case HIDE_MODAL: {
            return {
                ...state,
                showAddressModal: false
            }
        }
        default:
            return state;
    }
}