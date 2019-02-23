import api from '../../server-core/api-client';

describe("ApiClient", () => {
    let huc;
    let huc12;
    let charName;

    beforeEach(() => {
        huc = "07100006";
        huc12 = "071000060204";
        charName = "Escherichia%20coli";
    });

    it('should get data', async () => {
        var test = await api.getSampleResults(huc, charName);
        expect(test).not.toBe(null);
    });

    it('She dont get wet', async () => {
        var test = await api.getSampleResults(huc, charName);
        expect(test).not.toBe("She get wet");
    });

    it('fibi should get data', () => {
        return api.getFibiData(huc12).then(function (data) {
            expect(data).toEqual({ "data": [{ "class": "Good", "date": "2006-09-27T00:00:00", "name": "FIBI", "type": "Warm Water", "unit": "rating", "value": 57 }], "lat": 42.68869, "long": -94.79849, "name": "Big Cedar Creek" });
        })
    })

    it('fibi should not error', () => {
        return api.getFibiData(huc12).then(function (data) {
            expect(data).not.toBe("error");
        })
    })
})
