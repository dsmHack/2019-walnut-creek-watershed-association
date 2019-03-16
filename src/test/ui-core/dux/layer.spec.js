import * as layer from "../../../ui-core/dux/layer";

describe("Layer Redux", () => {
    let store;
    let initialState;
    beforeEach(() => {
        initialState = { selectedLayer: "DRINKING_LAYER" };
        store = mockStore(initialState);
    });

    describe("actions", () => {
        it("should convert layer to action", () => {
            store.dispatch(layer.actions.selectLayer("TEST"));
            const actions = store.getActions();
            expect(actions).toContainEqual({
                type: "TEST"
            });
        });
    });

    describe("reducer", () => {
        it("should not change layer if it layer does not exist", () => {
            const result = layer.reducer(initialState, { type: "NOTREAL" });
            expect(result).toEqual(initialState);
        });

        it("should update the layer", () => {
            const result = layer.reducer(initialState, { type: "FISH_LAYER" });
            expect(result).toEqual({ selectedLayer: "FISH_LAYER" });
        });
    });
});
