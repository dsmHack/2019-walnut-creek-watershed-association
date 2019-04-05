import React, {useState} from "react";
import PropTypes from "prop-types";
import { withStyles } from '@material-ui/core/styles';
import AppDrawer from './app-drawer';
import Navbar from './navbar'

const styles = {
    root: {
        display: 'flex',
    },
};

const Header = ({title, classes, children}) => {
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <Navbar open={open} onClick={handleDrawerOpen} title={title}/>
            <AppDrawer open={open} handleDrawerClose={handleDrawerClose}/>
            {children}
        </div>
    );
};

Header.propTypes = {
    title: PropTypes.string.isRequired
};

export default withStyles(styles)(Header);
