import React from "react";
import PropTypes from "prop-types";
import CardContent from "@material-ui/core/CardContent";
import DescribeComponent from "./describe";

import {
    SWIMMING_LAYER,
    FISH_LAYER,
    DRINKING_LAYER
} from "../../constants_shared/layers";
import {
    FISH_SHORT_TEXT,
    FISH_LONG_TEXT,
    SWIM_SHORT_TEXT,
    SWIM_LONG_TEXT,
    DRINK_SHORT_TEXT,
    DRINK_LONG_TEXT
} from "../constants/sidebar";
import "./header.css";

const SidebarDisplay = props => {
    const { layer } = props;
    const descriptions = SetDescription(layer);
    return (
        <Card className="legend">
            <CardContent>
                <DescribeComponent
                    shortText={descriptions.shortText}
                    longText={descriptions.longText}
                />
            </CardContent>
        </Card>
    );
};

const SetDescription = layer => {
    switch (layer) {
        case SWIMMING_LAYER:
            return {
                shortText: SWIM_SHORT_TEXT,
                longText: SWIM_LONG_TEXT
            };
        case FISH_LAYER:
            return {
                shortText: FISH_SHORT_TEXT,
                longText: FISH_LONG_TEXT
            };
        case DRINKING_LAYER:
            return {
                shortText: DRINK_SHORT_TEXT,
                longText: DRINK_LONG_TEXT
            };
    }
};

SidebarDisplay.propTypes = {
    title: PropTypes.string.isRequired
};

export default SidebarDisplay;
