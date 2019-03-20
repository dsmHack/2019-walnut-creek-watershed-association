import React, { useState } from "react";
import { connect } from "react-redux";
import SidebarLeftHeader from "./sidebar-left-header";
import SidebarLeftDescription from "./sidebar-left-description";
import Button from "@material-ui/core/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import "./sidebar-left.css";

function mapStateToProps(state) {
    return {
        selectedLayer: state.selectedLayer
    };
}

function renderDescription(show) {
    if (show) {
        return <SidebarLeftDescription />;
    }
}

const SidebarLeft = props => {
    const [displayDescription, setDisplay] = useState(false);
    return (
        <div className="container-left">
            <SidebarLeftHeader />
            <Button
                variant="contained"
                className="button"
                onClick={handleClick}
            >
                <FontAwesomeIcon icon={faArrowRight} />
            </Button>
            {renderDescription(displayDescription)}
        </div>
    );
    function handleClick() {
        setDisplay(!displayDescription);
    }
};

export default connect(mapStateToProps)(SidebarLeft);
