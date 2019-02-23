import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

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
});

class ActivityTypeRadio extends React.Component {
    state = {
        value: 'fish',
    };

    handleChange = event => {
        this.setState({ value: event.target.value });
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">Activity</FormLabel>
                    <RadioGroup
                        aria-label="Activity"
                        name="activity_type"
                        className={classes.group}
                        value={this.state.value}
                        onChange={this.handleChange}
                    >
                        <FormControlLabel value="fish" control={<Radio />} label="Fish" />
                        <FormControlLabel value="swim" control={<Radio />} label="Swim" />
                        <FormControlLabel value="drink" control={<Radio />} label="Drink" />
                    </RadioGroup>
                    <FormHelperText>Select activity of interest.</FormHelperText>
                </FormControl>
            </div>
        );
    }
}

ActivityTypeRadio.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ActivityTypeRadio);