import * as address from "../../../ui-core/dux/address";

describe("Address Redux", () => {
    let testAddress;
    let store;
    let initialState;
    beforeEach(() => {
        initialState = { address: "", showAddressModal: true, displayUi: false };
        store = mockStore(initialState);
        testAddress = chance.word();
    });
    describe("actions", () => {
        it("should return the correct payload given action", () => {
            store.dispatch(address.actions.addAddress(testAddress));
            const actions = store.getActions();
            expect(actions).toContainEqual({
                type: "ADD_ADDRESS",
                payload: testAddress
            });
        });

        it("should dispatch show modal", () => {
            store.dispatch(address.actions.showModal());
            const actions = store.getActions();
            expect(actions).toContainEqual({
                type: "SHOW_MODAL"
            });
        });

        it("should dispatch hide modal", () => {
            store.dispatch(address.actions.hideModal());
            const actions = store.getActions();
            expect(actions).toContainEqual({
                type: "HIDE_MODAL"
            });
        });
    });

    describe("reducer", () => {
        it("should set intial state", () => {
            const result = address.reducer(undefined, {});
            expect(result).toEqual(initialState);
        });

        it("should set the given address", () => {
            const action = {
                type: "ADD_ADDRESS",
                payload: testAddress
            };
            const result = address.reducer(initialState, action);
            expectStateChanges(result, { address: testAddress }, store);
        });

        it("should update modal state to show", () => {
            const action = {
                type: "SHOW_MODAL"
            };
            const result = address.reducer(initialState, action);
            expectStateChanges(result, { showAddressModal: true }, store);
        });

        it("should update modal state to hide", () => {
            const action = {
                type: "HIDE_MODAL"
            };
            const result = address.reducer(initialState, action);
            expectStateChanges(result, { showAddressModal: false }, store);
        });
    });
});
