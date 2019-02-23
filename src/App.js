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
            selectedLayer: DRINKING_LAYER
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        return async () => {
            let hucId = await getHucFromAddress(this.state.address);
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

            this.setDataPoints(hucId);

            this.props.setCoordinatesList(coords);
            console.log(coords);
        }
    }

    setCoordinatesList(coordinatesList) {
        this.setState({
            coordinatesList
        });
    }

    setDataPoints(hucId) {
        let nitratePoints = API.getNitrateData(hucId)
        this.setState({
            ecoliData: API.getEcoliData(hucId),
            nitrateData: nitratePoints,
            fibiData: API.getFibiData(hucId)
        });
        this.defaultDataPointsToPlot(nitratePoints);
    }

    defaultDataPointsToPlot(nitrateData) {
        this.setState({
            dataPointsToPlot: nitrateData
        })
    }

    render() {
        const style = {
            width: '100%',
            height: '100%'
        };
        return (
            <MuiThemeProvider theme={theme}>
                <div className="App">
                    <Header title={HEADER_TITLE} />
                    <PlottedMap {... this.props} />
                    <AddressModal
                        handleClose={() => { }}
                        show={true}
                        setCoordinatesList={(coordinatesList) => {
                            this.setCoordinatesList(coordinatesList)
                        }}
                        onClick={this.handleSubmit}
                    />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyBbQM-FxetsrzMqbJ2xzZbcbDUb9Au4nh4')
})(App)
