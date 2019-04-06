import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import classNames from 'classnames';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronLeft, faFish, faGlassWhiskey, faSwimmer, faSearch, faQuestionCircle} from '@fortawesome/free-solid-svg-icons';
import ListItemWithIcon from './list-item-with-icon';
import {connect} from 'react-redux';
import { actions, Layers, selectors } from "../dux/layer";
import {actions as appStateActions} from '../dux/appState';

function AppDrawer({handleDrawerClose, classes, open, selectLayer, selectedLayer, showModal, showHelpModal}) {
    return (<Drawer
        variant="permanent"
        className={classNames(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
        })}
        classes={{
            paper: classNames({
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
            }),
        }}
        open={open}
    >
        <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </IconButton>
        </div>
        <Divider />
        <List>
            <ListItemWithIcon text='Drinking' isActive={selectedLayer === Layers.drinking} icon={faGlassWhiskey} onClick={() => selectLayer(Layers.drinking)}/>
            <ListItemWithIcon text='Fishing' isActive={selectedLayer === Layers.fish} icon={faFish} onClick={() => selectLayer(Layers.fish)}/>
            <ListItemWithIcon text='Swimming' isActive={selectedLayer === Layers.swimming} icon={faSwimmer} onClick={() => selectLayer(Layers.swimming)}/>
        </List>
        <List>
            <ListItemWithIcon text='Search' icon={faSearch} onClick={showModal}/>
            <ListItemWithIcon text='Help' icon={faQuestionCircle} onClick={showHelpModal}/>
        </List>
    </Drawer>);
}

function mapStateToProps(state) {
    return {
        selectedLayer: selectors.getSelectedLayer(state)
    };
}

const StyledAppDrawer = withStyles(styles)(AppDrawer);

export default connect(
    mapStateToProps,
    {...actions, ...appStateActions}
)(StyledAppDrawer)

function styles(theme){
    return {
        drawer: {
            width: theme.spacing.unit * 7,
            flexShrink: 0,
            whiteSpace: 'nowrap',
        },
        drawerOpen: {
            width: theme.spacing.unit * 30,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        drawerClose: {
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            overflowX: 'hidden',
            width: theme.spacing.unit * 7 + 1,
            [theme.breakpoints.up('sm')]: {
                width: theme.spacing.unit * 9 + 1,
            },
        },
        toolbar: {
            height: theme.spacing.unit * 7,
            [theme.breakpoints.up('sm')]: {
                height: theme.spacing.unit * 8,
            },
            display: 'flex',
            justifyContent: 'center'
        }
    };
}