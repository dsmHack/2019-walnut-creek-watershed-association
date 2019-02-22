import React, { Component } from "react";
import "./App.css";
import Header from "./ui-core/components/header";
import AddressModal from "./ui-core/modals/address";

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";

const theme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: {
          main: '#84ffff',
        },
    }
});

class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <div className="App">
                    <Header title="Find Water Quality Near Me" />
                    <AddressModal handleClose={() => {}} show={true} />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
