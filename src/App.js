import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./ui-core/dux/store";
import { GoogleApiWrapper } from "google-maps-react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Main from "./ui-core/components/main";

import AppTheme from "./theme";
import "./App.css";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <MuiThemeProvider theme={AppTheme}>
                    <div className="App">
                        <Main {...this.props} />
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
};

export default GoogleApiWrapper({
    apiKey: loadAPIKey()
})(App);
