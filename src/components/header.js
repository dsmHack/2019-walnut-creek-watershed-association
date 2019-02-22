import React from 'react';
import PropTypes from 'prop-types';

export default Header = (props) => {
    const {title} = props;
    return(
        <div>
            <Text>{title}</Text>
        </div>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}