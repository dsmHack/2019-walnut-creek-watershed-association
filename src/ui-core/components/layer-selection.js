import React from 'react';
import PropTypes from 'prop-types';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { actions, Layers } from "../dux/layer";
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        selectedLayer: state.selectedLayer
    }
}

const LayerSelection = (props) => {
    return (
        <div className=''>
            <FormControl component="fieldset" className=''>
                <FormLabel component="legend">Select activity of interest:</FormLabel>
                <RadioGroup
                    aria-label="Activity"
                    name="activity_type"
                    className=''
                    value={props.value}
                    onChange={handleChange}
                >
                    <FormControlLabel value={Layers.fish} control={<Radio />} label="Fishing" />
                    <FormControlLabel value={Layers.swimming} control={<Radio />} label="Swimming" />
                    <FormControlLabel value={Layers.drinking} control={<Radio />} label="Drinking" />
                </RadioGroup>
            </FormControl>
        </div>
    );

    function handleChange(event) {
        props.selectLayer(event.target.value);
    };
}

LayerSelection.propTypes = {
    handleClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
};
export default connect(mapStateToProps, actions)(LayerSelection);