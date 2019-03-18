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
import LayerSelection from "./ui-core/components/layer-selection";
import AppTheme from "./theme";

import { MuiThemeProvider } from "@material-ui/core/styles";

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

    renderModal() {
        if (this.state.showModal) {
            return <AddressModal
                handleClose={() => { }}
                show={true}
                setCoordinatesList={(coordinatesList) => {
                    this.setCoordinatesList(coordinatesList)
                }}
                handleSubmit={() => {}}
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
                        <LayerSelection handleClose={() => { }}
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
