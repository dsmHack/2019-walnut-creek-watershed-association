import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import "./header.css";

const Header = props => {
    const { title } = props;
    return (
        <div className="header">
            <AppBar position="static">
                <label>{title}</label>
            </AppBar>
        </div>
    );
};

Header.propTypes = {
    title: PropTypes.string.isRequired
};

export default Header;
