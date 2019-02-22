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
            expect(data).not.toBe(null);
        })
    })

    it('fibi should not error', ()=>{
        return api.getFibiData(huc12).then(function (data) {
            expect(data).not.toBe("error");
        })
    })

    it('should parse xml result', ()=>{
        console.log("Test string from test file");
        return api.getEcoliData(huc12).then(function (data) {
            expect(data).not.toBe("error");
        })
    })

})
