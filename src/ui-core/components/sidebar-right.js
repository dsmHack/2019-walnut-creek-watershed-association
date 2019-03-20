import React, { useState } from "react";
import { connect } from "react-redux";
import ScoreLegend from "./score-legend";
import SidebarRightDescription from "./sidebar-right-description";
import Button from "@material-ui/core/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import "./sidebar-right.css";

function mapStateToProps(state) {
    return {
        selectedLayer: state.selectedLayer
    };
}

function renderDescription(show) {
    if (show) {
        return <SidebarRightDescription />;
    }
}

const SidebarRight = props => {
    const [displayDescription, setDisplay] = useState(false);
    return (
        <div className="container-right">
            <ScoreLegend />
            <Button
                variant="contained"
                className="button"
                onClick={handleClick}
            >
                <FontAwesomeIcon icon={faArrowLeft} />
            </Button>
            {renderDescription(displayDescription)}
        </div>
    );
    function handleClick() {
        setDisplay(!displayDescription);
    }
};

export default connect(mapStateToProps)(SidebarRight);
