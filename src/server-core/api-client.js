import convert from "xml-js";
import axios from "axios";

async function getEcoliData(huc) {
    var url = "https://www.waterqualitydata.us/data/Result/search?";
    var query =
        "startDateLo=01-01-2017&huc=" +
        huc +
        "&mimeType=xml&characteristicName=Escherichia%20coli";
    axios
        .get(url + query)
        .then(function(response) {
            // handle success
            console.log(response);
            return convert.xml2json(response, { compact: true, spaces: 4 });
        })
        .catch(function(error) {
            // handle error
            console.log(error);
            return "She get wet";
        });
}

async function getFibiData(huc) {
    var isHuc12 = huc.length === 12;
    var huc8 = huc.substring(0, 8);
    var url = "https://programs.iowadnr.gov/bionet/api/v1/sites/by_huc8/";

    return axios
        .get(url + huc8)
        .then(response => {
            return response.data;
        }).then(sites => {
            if (isHuc12) {
                var filteredSites = sites.filter(site => site.huc12 === huc);
                return Promise.resolve(filteredSites);
            }
            return Promise.resolve(sites);
        }).then(sites => {
            return sites.map(site => site.id);
        }).then(siteIds => {
            return Promise.all(siteIds.map(fetchFibiDataBySiteId));
        }).then(results => {
            return [].concat.apply([], results);
        }).then(results => {
            // sort
            return results.sort((a, b) => {
                return new Date(b.sampleDate) - new Date(a.sampleDate);
            });
        }).then(results => {
            // most recent
            return results[0];
        }).then(result => {
            return {
                name: result.site.name,
                lat: result.site.LatDD,
                long: result.site.LongDD,
                data: [{
                    name: "FIBI",
                    unit: "rating",
                    value: result.FIBI,
                    type: result.FIBIType,
                    class: result.FIBIClass,
                    date: result.sampleDate
                }]
            }
        }).catch(function (error) {
            // handle error
            console.log(error);
            return "error";
        });
}

async function fetchFibiDataBySiteId(siteId) {
    var url = "https://programs.iowadnr.gov/bionet/api/v1/fish/fibi/by_site/";
    return axios.get(url + siteId).then(response => {
        return response.data;
    });
}

async function getEpaStations(huc, characteristicName) {
    var url = "https://www.waterqualitydata.us/data/Station/search?";
    var query =
        "startDateLo=01-01-2017&huc=" +
        huc +
        "&mimeType=xml&characteristicName=Nitrate" +
        characteristicName;
    axios
        .get(url + query)
        .then(function(response) {
            // handle success
            console.log(response);
            return convert.xml2json(response, { compact: true, spaces: 4 });
        })
        .catch(function(error) {
            // handle error
            console.log(error);
            return "She get wet";
        });
}

async function getSampleResults(huc, characteristicName) {
    var url = "https://www.waterqualitydata.us/data/Result/search?";
    var query =
        "startDateLo=01-01-2017&huc=" +
        huc +
        "&mimeType=xml&characteristicName=" +
        characteristicName;
    axios
        .get(url + query)
        .then(function(response) {
            // handle success
            console.log(response);
            return response;
        })
        .catch(function(error) {
            // handle error
            console.log(error);
            return "She get wet";
        });
}

async function getHuc(lat, long) {}

export default {
    getEcoliData,
    getFibiData,
    getEpaStations,
    getSampleResults,
    getHuc
};
