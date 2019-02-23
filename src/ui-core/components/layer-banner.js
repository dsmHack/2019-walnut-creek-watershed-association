import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import "./layer-banner.css";

const LayerBanner = props => {
    const { title } = props;
    return (
        <div className="banner">
            <Typography variant="h4">{title}</Typography>
        </div>
    );
};

LayerBanner.propTypes = {
    title: PropTypes.string.isRequired
};

export default LayerBanner;
