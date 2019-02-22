import api from '../../server-core/api-client';

describe("ApiClient", () => {
    let huc;
    let charName;
    
    beforeEach(() => {
        huc = "07100006";
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
})