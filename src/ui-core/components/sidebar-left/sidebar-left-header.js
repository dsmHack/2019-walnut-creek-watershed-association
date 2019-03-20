import React from "react";
import { connect } from "react-redux";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import {
    SWIMMING_LAYER,
    FISH_LAYER,
    DRINKING_LAYER
} from "../../../constants_shared/layers";

function mapStateToProps(state) {
    return {
        selectedLayer: state.layer.selectedLayer
    };
}

const SidebarLeftHeader = props => {
    return (
        <Card>
            <CardHeader title={determineTitle(props.selectedLayer)}>
            </CardHeader>
        </Card>
    );

    function determineTitle(layer) {
        switch (layer) {
            case DRINKING_LAYER:
                return "Nitrates";
            case SWIMMING_LAYER:
                return "E. Coli";
            case FISH_LAYER:
                return "FIBI Scores";
            default:
                return "No layer selected";
        }
    }
};

export default connect(mapStateToProps)(SidebarLeftHeader);
