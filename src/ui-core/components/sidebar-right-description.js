import React from "react";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import {
    SWIMMING_LAYER,
    FISH_LAYER,
    DRINKING_LAYER
} from "../../constants_shared/layers";
import {
    FibiSection,
    NitrateSection,
    EcoliSection
} from "../constants/sidebar-right";
import "./sidebar-right-description.css";

function mapStateToProps(state) {
    return {
        selectedLayer: state.layer.selectedLayer
    };
}

const SidebarRightDescription = props => {
    const descriptions = SetDescription(props.selectedLayer);
    return (
        <Card className="description-container">
            <CardContent>
                <div className="section">
                    <Typography className="title" variant="h6">
                        {descriptions.section1.title}
                    </Typography>
                    <Typography className="description">
                        {descriptions.section1.description}
                    </Typography>
                </div>
                <div className="section">
                    <Typography className="title" variant="h6">
                        {descriptions.section2.title}
                    </Typography>
                    <Typography className="description">
                        {descriptions.section2.description}
                    </Typography>
                </div>
                <div className="section">
                    <Typography className="title" variant="h6">
                        {descriptions.section3.title}
                    </Typography>
                    <Typography className="description">
                        {descriptions.section3.description}
                    </Typography>
                </div>
            </CardContent>
        </Card>
    );
};

const SetDescription = layer => {
    switch (layer) {
        case SWIMMING_LAYER:
            return EcoliSection;
        case FISH_LAYER:
            return FibiSection;
        case DRINKING_LAYER:
            return NitrateSection;
            default:
            return NitrateSection;
    }
};

export default connect(mapStateToProps)(SidebarRightDescription);
