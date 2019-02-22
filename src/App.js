import React, { Component } from "react";
import GoogleMapReact from 'google-map-react';
import "./App.css";
import Header from "./ui-core/components/header";
import AddressModal from "./ui-core/modals/address";

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
    static defaultProps = {
        center: {
            lat: 41.583964,
            lng: -93.628137
        },
        zoom: 11
    };

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <div className="App" style={{ height: '100vh', width: '100%' }}>
                    <Header title="Find Water Quality Near Me" />

                    <GoogleMapReact
                      bootstrapURLKeys={{ key: 'AIzaSyBbQM-FxetsrzMqbJ2xzZbcbDUb9Au4nh4' }}
                      defaultCenter={this.props.center}
                      defaultZoom={this.props.zoom}
                    >

                    </GoogleMapReact>

                    <AddressModal handleClose={() => {}} show={true} />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
