import getHucBorder from '../../server-core/border-data-api';

describe("BorderDataAPI", () => {
    let hucid;
    let hucType;

    beforeEach(() => {
        jest.setTimeout(30000);
        hucid = "070600051004";
        hucType = "huc_12";
    });

    it('huc border data', () => {
        return getHucBorder(hucid, hucType).then((response) => {
            expect(test).not.toBe(undefined);
        });
    });
});
