import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { withStyles } from "@material-ui/core/styles";
import { actions, Layers } from "../dux/layer";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFish,
    faSwimmer,
    faGlassWhiskey
} from "@fortawesome/free-solid-svg-icons";

const styles = () => ({
    title: {
        "padding-bottom": 0,
        "padding-left": "5px",
        "padding-right": "5px",
        "padding-top": "5px"
    },
    layerSelection: {
        position: "fixed",
        bottom: 0
    },
    cardContainer: {
        "text-align": "left"
    },
    radioGroup: {
        "text-align": "left"
    }
});

function mapStateToProps(state) {
    return {
        selectedLayer: state.layer.selectedLayer
    };
}

const LayerSelection = props => {
    const { classes } = props;
    return (
        <Card className={classes.layerSelection}>
            <CardHeader
                className={classes.title}
                title={"Select activity of interest:"}
            />
            <CardContent className={classes.cardContainer}>
                <FormControl component="fieldset">
                    <RadioGroup
                        aria-label="Activity"
                        name="activity_type"
                        value={props.selectedLayer}
                        onChange={handleChange}
                    >
                        <div className={classes.radioGroup}>
                            <FormControlLabel
                                value={Layers.fish}
                                control={<Radio />}
                                label="Fishing"
                                checked={props.selectedLayer === Layers.fish}
                            />
                            <FontAwesomeIcon icon={faFish} />
                        </div>

                        <div className={classes.radioGroup}>
                            <FormControlLabel
                                value={Layers.swimming}
                                control={<Radio />}
                                label="Swimming"
                                checked={props.selectedLayer === Layers.swimming}
                            
                            />
                            <FontAwesomeIcon icon={faSwimmer} />
                        </div>

                        <div className={classes.radioGroup}>
                            <FormControlLabel
                                value={Layers.drinking}
                                control={<Radio />}
                                label="Drinking"
                                checked={props.selectedLayer === Layers.drinking}
                            
                            />
                            <FontAwesomeIcon icon={faGlassWhiskey} />
                        </div>
                    </RadioGroup>
                </FormControl>
            </CardContent>
        </Card>
    );

    function handleChange(event) {
        props.selectLayer(event.target.value);
    }
};

export default connect(
    mapStateToProps,
    actions
)(withStyles(styles)(LayerSelection));
