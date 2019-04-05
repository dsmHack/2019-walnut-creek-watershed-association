import React from 'react';
import classNames from 'classnames';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import { withStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const styles =  theme => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: theme.spacing.unit,
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing.unit * 1.5,
        },
        marginRight: theme.spacing.unit * 2
    },
    hide: {
        display: 'none',
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
    },
});

function Navbar(props) {
    const {classes} = props;
    return <AppBar
        position="fixed"
        className={classNames(classes.appBar, {
            [classes.appBarShift]: props.open,
        })}
    >
        <Toolbar disableGutters={!props.open}>
            <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={props.onClick}
                className={classNames(classes.menuButton, {
                    [classes.hide]: props.open,
                })}
            >
                <FontAwesomeIcon icon={faBars}/>
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
                {props.title}
            </Typography>
        </Toolbar>
    </AppBar>;
}

export default withStyles(styles)(Navbar);