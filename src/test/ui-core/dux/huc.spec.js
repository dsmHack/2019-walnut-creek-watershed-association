import * as huc from "../../../ui-core/dux/huc";
import getHucFromAddress from "../../../server-core/location-service";

jest.mock("../../../server-core/location-service");

describe("Huc Redux", () => {
    let store;
    let initialState;
    let hucId;
    let address;
    let border;
    beforeEach(() => {
        initialState = {};
        hucId = chance.integer();
        address = chance.word();
        border = chance.word();
        store = mockStore(initialState);
    });

    describe("actions", () => {
        it("should call the huc service with address", () => {
            getHucFromAddress.mockResolvedValue(hucId);
            store.dispatch(huc.actions.getHuc(address));
            let providedAddress = getHucFromAddress.mock.calls[0][0];
            expect(providedAddress).toBe(address);
            expect(getHucFromAddress.mock.calls.length).toBe(1);
            var resultPromise = getHucFromAddress.mock.results[0].value;
            resultPromise.then(result => expect(result).toBe(hucId));
        });
        it("should display re-display modal upon error", () => {
            //Need to figure out jest mock throw errors
        });

        describe("reducer", () => {
            it("should set intial state", () => {
                const result = huc.reducer(undefined, {});
                expect(result).toEqual(initialState);
            });

            it("should set the fetched hucId", () => {
                const action = {
                    type: "GET_HUC",
                    payload: hucId
                };
                const result = huc.reducer(initialState, action);
                expectStateChanges(result, { huc: hucId }, store);
            });

            it("should set the fetched hucBorder", () => {
                const action = {
                    type: "GET_HUC_BORDER",
                    payload: border
                };
                const result = huc.reducer(initialState, action);
                expectStateChanges(result, { hucBorder: border }, store);
            });
        });
    });
});
