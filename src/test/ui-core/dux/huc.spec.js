import * as huc from "../../../ui-core/dux/huc";
import { actions as dataPointActions } from "../../../ui-core/dux/data-points";
import getHucFromAddress from "../../../server-core/location-service";
import API from "../../../server-core/api-client";
import getHucBorder from "../../../server-core/border-data-api";

jest.mock("../../../server-core/location-service");
jest.mock("../../../server-core/border-data-api");
jest.mock("../../../server-core/api-client");
jest.mock("../../../ui-core/dux/data-points");

describe("Huc Redux", () => {
    let store;
    let initialState;
    let hucId;
    let address;
    let border;
    let latLongs;
    let coords;
    beforeEach(() => {
        initialState = {
            hucId: "",
            border: {},
            latLongs: [],
            coords: []
        };
        hucId = chance.integer();
        address = chance.word();
        border = chance.word();
        latLongs = createLatLongList(4);
        coords = convert(latLongs);
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

        it("should call the huc service with the hucId", () => {
            getHucBorder.mockResolvedValue(border);
            store.dispatch(huc.actions.getHucBorder(hucId));
            let providedHucId = getHucBorder.mock.calls[0][0];
            expect(providedHucId).toBe(hucId);
            expect(getHucBorder.mock.calls.length).toBe(1);
            var resultPromise = getHucBorder.mock.results[0].value;
            resultPromise.then(result => expect(result).toBe(border));
        });

        it("should call the api client with the border to get latLongs", () => {
            API.convertEsriGeometryPolygonToLatLngList.mockResolvedValue(
                latLongs
            );
            store.dispatch(huc.actions.convertHucToLatLong(border));
            let providedHucBorder =
                API.convertEsriGeometryPolygonToLatLngList.mock.calls[0][0];
            expect(providedHucBorder).toBe(border);
            expect(
                API.convertEsriGeometryPolygonToLatLngList.mock.calls.length
            ).toBe(1);
            var resultPromise =
                API.convertEsriGeometryPolygonToLatLngList.mock.results[0]
                    .value;
            resultPromise.then(result => expect(result).toBe(latLongs));
        });

        it("should kick off data point process", () => {
            expect(dataPointActions.getNitratePoints.mock.calls.length).toBe(1);
        });
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
            expectStateChanges(result, { hucId: hucId }, store);
        });

        it("should set the fetched hucBorder", () => {
            const action = {
                type: "GET_HUC_BORDER",
                payload: border
            };
            const result = huc.reducer(initialState, action);
            expectStateChanges(result, { hucBorder: border }, store);
        });

        it("should set the latLongs and Coords", () => {
            const payload = {
                latLongs,
                coords
            };
            const action = {
                type: "CONVERT_HUC",
                payload: payload
            };
            const result = huc.reducer(initialState, action);
            expectStateChanges(result, { latLongs, coords }, store);
        });
    });
    it("should display re-display modal upon error", () => {
        //Need to figure out jest mock throw errors
    });

    it("should convert latLongs to Coords", () => {
        expect(coords).toEqual(convert(latLongs));
    });

    function convert(latLongs) {
        let coords = [];
        for (var i = 0; i < latLongs; i++) {
            coords.push({
                lat: Number(latLongs[i].x),
                lng: Number(latLong[i].y)
            });
        }
        return coords;
    }

    function createLatLongList(length) {
        let latLongs = [];
        for (var i = 0; i < length; i++) {
            latLongs.push(createLatLong());
        }
        return latLongs;
    }

    function createLatLong() {
        return {
            x: chance.integer(),
            y: chance.integer(),
            z: chance.integer()
        };
    }
});
