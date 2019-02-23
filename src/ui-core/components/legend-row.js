import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

const LegendRow = props => {
    const { ranking, score, icon } = props;
    return (
        <div>
            <Typography>{ranking}</Typography>
            <Typography>{score}</Typography>
        </div>
    );
};

LegendRow.propTypes = {
    ranking: PropTypes.string.isRequired,
    score: PropTypes.string.isRequired
};

export default LegendRow;
