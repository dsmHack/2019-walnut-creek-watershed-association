const ADD_ADDRESS = "ADD_ADDRESS";

export const actions = {
    addAddress(address) {
        return { type: ADD_ADDRESS, payload: address }
    }
}

export function reducer(state = {}, { type, payload }) {
    switch (type) {
        case ADD_ADDRESS: {
            return {
                ...state,
                address: payload
            }
        }
        default:
            return state;
    }
}