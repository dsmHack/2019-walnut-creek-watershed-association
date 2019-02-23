import React, { Component } from "react";
import { GoogleApiWrapper } from 'google-maps-react';
import "./App.css";

import PlottedMap from "./ui-core/components/map";
import Header from "./ui-core/components/header";
import AddressModal from "./ui-core/modals/address";
import { HEADER_TITLE } from "./ui-core/constants/header";
import { DRINKING_LAYER } from "./constants_shared/layers";
import getHucBorder from "./server-core/border-data-api";
import getHucFromAddress from "./server-core/location-service";
import API from "./server-core/api-client";

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";

const theme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: {
            main: "#84ffff"
        }
    },
    typography: {
        useNextVariants: true
    }
});

class App extends Component {
    constructor() {
        super();
        this.state = {
            coordinatesList: [],
            dataPointsToPlot: [],
            ecoliData: [],
            nitrateData: [],
            fibiData: [],
            selectedLayer: DRINKING_LAYER,
        };
    }

    defaultDataPointsToPlot(nitrateData) {

    }

    handleSubmit = async (address) => {
        let hucId = await getHucFromAddress(address);
        console.log("hucId: " + hucId);

        let hucBorder = await getHucBorder(hucId, "huc_12");
        console.log(hucBorder);

        let latlngs = (await API.convertEsriGeometryPolygonToLatLngList(hucBorder)).data;
        let coords = [];
        for (var latlng of latlngs) {
            let loc = {};
            loc.lat = Number(latlng.y);
            loc.lng = Number(latlng.x);
            coords.push(loc);
        }

        console.log('coords', coords);

        this.setState({
            coordinatesList: coords
        });

        let nitratePoints = await API.getNitrateData(hucId);

        this.setState({
            ecoliData: await API.getEcoliData(hucId),
            nitrateData: nitratePoints,
            fibiData: await API.getFibiData(hucId)
        });

        this.setState({
            dataPointsToPlot: nitratePoints
        });
    };

    render() {
        console.log('render', this.state.coordinatesList);

        return (
            <MuiThemeProvider theme={theme}>
                <div className="App">
                    <Header title={HEADER_TITLE} />
                    <PlottedMap google={this.props.google} coordinatesList={this.state.coordinatesList} dataPointsToPlot={this.state.dataPointsToPlot}  />
                    <AddressModal
                        handleClose={() => { }}
                        show={true}
                        setCoordinatesList={(coordinatesList) => {
                            this.setCoordinatesList(coordinatesList)
                        }}
                        handleSubmit={this.handleSubmit}
                        setAddress={this.setAddress}
                    />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyDE4Rtouj6STI2E15qtuwH_VAI2cjS1iFs')
})(App)
