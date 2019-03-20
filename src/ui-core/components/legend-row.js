import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

import "./legend-row.css";

const LegendRow = props => {
    const { ranking, score, icon } = props;
    return (
        <div className="row">
            <Typography className="text">{ranking}</Typography>
            <Typography className="text">{score}</Typography>
            <img className="icon" src={icon} alt="scoreIconImage"/>
        </div>
    );
};

LegendRow.propTypes = {
    ranking: PropTypes.string.isRequired,
    score: PropTypes.string.isRequired
};

export default LegendRow;
