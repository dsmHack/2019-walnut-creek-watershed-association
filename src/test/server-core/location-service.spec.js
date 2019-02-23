import  getHucFromAddress from '../../server-core/location-service';

describe("LocationService", () => {
    let addr;

    beforeEach(() => {
        addr = "900 Mulberry St, Des Moines, IA 50309";
    });

    it('address should get data', () => {
        return getHucFromAddress(addr).then((response) => {
            expect(response).toBe("071000061703");
        })
    })

    it('something should happen for bad input', () => {
        return expect(getHucFromAddress("asldkfadlk")).rejects.toMatch('Address not found')
    })
})
