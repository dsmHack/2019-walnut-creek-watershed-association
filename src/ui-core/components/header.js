import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
    const {title} = props;
    return(
        <div>
            <label>{title}</label>
        </div>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header;