import utils from '../../utils/Utils';

describe("Utils", () => {
    let esriGeometry;
    let expectedLatLngList;
    let latlon1 = {lat: -10027055.309, lng: 5179869.0581};
    let latlon2 = {lat: -10026332.683599999, lng: 5178864.0973000005};
    let latlon3 = {lat: -10025391.9102, lng: 5173032.4565000013};

    beforeEach(() => {
        let geometry =  {
            rings: getSampleRing()
        };

        let results = [{
            geometryType: "esriGeometryPolygon",
            geometry: geometry

        }];

        esriGeometry = {
            data: {
                results: results
            }
        };

        expectedLatLngList = [getExampleLatLngList()];
    });

    it('should return empty list when esriGeometry is null', () => {
        expect(utils.convertEsriGeometryPolygonToLatLngList(null).length).toBe(0);
    });

    it('should return empty list when esriGeometry data is null', () => {
        let esriGeometry = {
            data: {

            }
        };
        expect(utils.convertEsriGeometryPolygonToLatLngList(esriGeometry).length).toBe(0);
    });

    it('should return empty list when esriGeometry does not have result', () => {
        let esriGeometry = {
            results: []
        };
        expect(utils.convertEsriGeometryPolygonToLatLngList(esriGeometry).length).toBe(0);
    });

    it('should return empty list when esriGeometry geometryType is not esriGeometryPolygon', () => {
        let noGeometryType = {
            results: [{}]
        };
        expect(utils.convertEsriGeometryPolygonToLatLngList(noGeometryType).length).toBe(0);
    });

    it('should return list of latlng given esriGeometry with one ring', () => {
        var coords = utils.convertEsriGeometryPolygonToLatLngList(esriGeometry);

        expect(coords.length).toBe(3);
        expect(coords[0].lat).toBe(latlon1.lat);
        expect(coords[0].lng).toBe(latlon1.lng);
        expect(coords[1].lat).toBe(latlon2.lat);
        expect(coords[1].lng).toBe(latlon2.lng);
        expect(coords[2].lat).toBe(latlon3.lat);
        expect(coords[2].lng).toBe(latlon3.lng);
    });

    function getExampleLatLngList() {
        return [
            {lat: latlon1.lat, lng: latlon1.lng},
            {lat: latlon2.lat, lng: latlon2.lng},
            {lat: latlon3.lat, lng: latlon3.lng}
        ];
    }

    // Rings have coords lng then lat
    function getSampleRing() {
        return [
            [
                [
                    latlon1.lng,
                    latlon1.lat
                ],
                [
                    latlon2.lng,
                    latlon2.lat
                ],
                [
                    latlon3.lng,
                    latlon3.lat
                ]
            ]
        ]
    }

});
