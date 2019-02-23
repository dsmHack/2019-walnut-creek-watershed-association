import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import CardHeader from "../modals/address";
import {ADDRESS_MODAL_TITLE} from "../constants/address";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

const styles = theme => ({
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing.unit * 3,
    },
    group: {
        margin: `${theme.spacing.unit}px 0`,
    },
    position: 'absolute',
    top: 0,    // computed based on child and parent's height
    left: 0
});

class ActivityTypeRadio extends React.Component {
    handleChange = event => {
        this.setState({value: event.target.value});
    };

    render() {
        const {classes} = this.props;

        return (
            //<Card className="modal">
              //  <CardContent>
                    <div className={classes.root}>
                        <FormControl component="fieldset" className={classes.formControl}>
                            <FormLabel component="legend">Select activity of interest:</FormLabel>
                            <RadioGroup
                                aria-label="Activity"
                                name="activity_type"
                                className={classes.group}
                                value={this.props.value}
                                onChange={this.handleChange}
                            >
                                <FormControlLabel value="fish" control={<Radio/>} label="Fishing"/>
                                <FormControlLabel value="swim" control={<Radio/>} label="Swimming"/>
                                <FormControlLabel value="drink" control={<Radio/>} label="Drinking"/>
                            </RadioGroup>
                        </FormControl>
                    </div>
                //</CardContent>
           // </Card>
        );
    }
}

ActivityTypeRadio.propTypes = {
    handleClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
};
export default withStyles(styles)(ActivityTypeRadio);