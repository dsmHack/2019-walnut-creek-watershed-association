import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {withStyles} from '@material-ui/core/styles';

const styles = (theme) => ({
    drawerIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        height: theme.spacing.unit * 5,
        width: theme.spacing.unit * 3,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing.unit * 5,
        },
        marginRight: 0
    },
    active: {
        color: theme.palette.primary[500]
    }
});

function ListItemWithIcon({text, icon, classes, onClick, isActive}) {
    return (<ListItem button key={text} onClick={onClick}>
        <ListItemIcon className={classes.drawerIcon}>
            <FontAwesomeIcon icon={icon} className={isActive ? classes.active : undefined} style={{width: '2em', height: '2em'}}/>
        </ListItemIcon>
        <ListItemText primary={text}/>
    </ListItem>);
}

export default withStyles(styles)(ListItemWithIcon);