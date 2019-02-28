import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./ui-core/dux/store";
import { GoogleApiWrapper } from 'google-maps-react';
import "./App.css";

import PlottedMap from "./ui-core/components/map";
import Header from "./ui-core/components/header";
import AddressModal from "./ui-core/modals/address";
import { HEADER_TITLE } from "./ui-core/constants/header";
import { DRINKING_LAYER } from "./constants_shared/layers";
import ActivityTypeRadio from "./ui-core/components/radio-activity-type";
import getHucBorder from "./server-core/border-data-api";
import getHucFromAddress from "./server-core/location-service";
import API from "./server-core/api-client";
import AppTheme from "./theme";

import { MuiThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route } from "react-router-dom";

const AppRouting = () => (
    <Router>
        <Route exact path="/" component={App} />
    </Router>
);


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
            activity: "drink",
            showModal: true
        };
    }

    defaultDataPointsToPlot(nitrateData) {

    }

    // componentDidMount() {
    //     console.log(this.props.location);
    //     const values = queryString.parse(this.props.location.search);
    //     if (["fish", "drink", "swim"].includes(values.activity)) {
    //         this.setState({activity: values.activity});
    //     }
    // }

    handleSubmit = async (address) => {
        let hucId = await getHucFromAddress(address);
        let hucBorder = await getHucBorder(hucId, "huc_12");

        let latlngs = (await API.convertEsriGeometryPolygonToLatLngList(hucBorder)).data;
        let coords = [];
        for (var latlng of latlngs) {
            let loc = {};
            loc.lat = Number(latlng.y);
            loc.lng = Number(latlng.x);
            coords.push(loc);
        }

        this.setState({
            coordinatesList: coords,
            showModal: false

        });

        let nitratePoints = await API.getNitrateData(hucId);
        let ecoliPoints = await API.getEcoliData(hucId);

        this.setState({
            ecoliData: ecoliPoints,
            nitrateData: nitratePoints,
            fibiData: await API.getFibiData(hucId)
        });

        this.setState({
            dataPointsToPlot: nitratePoints
        });
    };

    renderModal() {
        if (this.state.showModal) {
            return <AddressModal
                handleClose={() => { }}
                show={true}
                setCoordinatesList={(coordinatesList) => {
                    this.setCoordinatesList(coordinatesList)
                }}
                handleSubmit={this.handleSubmit}
                setAddress={this.setAddress}
            />
        } else {
            return null
        }
    }

    render() {
        return (
            <Provider store={store}>
                <MuiThemeProvider theme={AppTheme}>
                    <div className="App">
                        <Header title={HEADER_TITLE} />
                        <PlottedMap google={this.props.google} coordinatesList={this.state.coordinatesList} dataPointsToPlot={this.state.dataPointsToPlot} />
                        <ActivityTypeRadio handleClose={() => { }}
                            show={true}
                            value={this.state.activity}
                        />
                        {this.renderModal()}
                    </div>
                </MuiThemeProvider>
            </Provider>
        );
    }
}

const loadAPIKey = () => {
    if (process.env.NODE_ENV === "development") {
        return process.env.REACT_APP_DEV_GOOGLE_MAPS;
    }
    return process.env.REACT_APP_PROD_GOOGLE_MAPS;
}

export default GoogleApiWrapper({
    apiKey: (loadAPIKey())
})(App)
