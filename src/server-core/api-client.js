import convert from 'xml-js';
import axios from 'axios';

async function getEcoliData(huc) {
    var url = "https://www.waterqualitydata.us/data/Result/search?"
    var query = "startDateLo=01-01-2017&huc=" + huc + "&mimeType=xml&characteristicName=Escherichia%20coli";
    axios.get(url + query)
    .then(function (response) {
        // handle success
        console.log(response);
        return convert.xml2json(response, {compact: true, spaces: 4});
    })
    .catch(function (error) {
        // handle error
        console.log(error);
        return "She get wet";
    });
}

async function getFibiData() {
    
}

async function getEpaStations(huc, characteristicName) {
    var url = "https://www.waterqualitydata.us/data/Station/search?"
    var query = "startDateLo=01-01-2017&huc=" + huc + "&mimeType=xml&characteristicName=Nitrate" + characteristicName;
    axios.get(url + query)
    .then(function (response) {
        // handle success
        console.log(response);
        return convert.xml2json(response, {compact: true, spaces: 4});
    })
    .catch(function (error) {
        // handle error
        console.log(error);
        return "She get wet";
    });
}

async function getSampleResults(huc, characteristicName) {
    var url = "https://www.waterqualitydata.us/data/Result/search?"
    var query = "startDateLo=01-01-2017&huc=" + huc + "&mimeType=xml&characteristicName=" + characteristicName;
    axios.get(url + query)
    .then(function (response) {
        // handle success
        console.log(response);
        return convert.xml2json(response, {compact: true, spaces: 4});
    })
    .catch(function (error) {
        // handle error
        console.log(error);
        return "She get wet";
    });
}

async function getHuc(lat, long) {
    
}

module.exports = {getEcoliData, getFibiData, getEpaStations, getSampleResults, getHuc};