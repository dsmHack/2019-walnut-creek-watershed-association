import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import TextField from "@material-ui/core/TextField";
import API from "../../server-core/main-service";
import Location from "../../server-core/location-service";
import BorderData from "../../server-core/border-data-api";
import {
    ADDRESS_MODAL_TITLE,
    ADDRESS_MODAL_INPUT_PLACEHOLDER
} from "../constants/address";
import { SWIMMING_LAYER } from "../../constants_shared/layers";
import "./address.css";

class AddressModal extends Component {
    constructor() {
        super();
        this.state = {
            address: ""
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange({ target }) {
        this.setState({
            address: target.value
        });
    }

    render() {
        let sampleResultCallback = (results) => {
            console.log("Sample Results: " + results);
        };

        return (
            <Card className="modal">
                <CardHeader className="title" title={ADDRESS_MODAL_TITLE} />
                <CardContent>
                    <TextField
                        className="address"
                        type="text"
                        value={this.state.address}
                        placeholder={ADDRESS_MODAL_INPUT_PLACEHOLDER}
                        onChange={this.handleChange}
                    />
                </CardContent>
                <CardActions>
                    <Button
                        className="nextButton"
                        size="medium"
                        variant="contained"
                        color="primary"
                        onClick={async () => {
                            let hucId = await Location.getHucFromAddress(this.state.address);
                            console.log("hucId: " + hucId);

                            // TODO hook up call and callback for ecoli data
                            // let results = API.getData(this.state.address, SWIMMING_LAYER)
                            // sampleResultCallback(results);

                            let hucBorder = await BorderData.getHucBorder(hucId, "huc_12");
                            console.log(hucBorder);

                            let latlngs = API.convertEsriGeometryPolygonToLatLngList(hucBorder);

                            this.props.setCoordinatesList(latlngs);
                            console.log(latlngs);
                        }}
                    >
                        NEXT
                    </Button>
                </CardActions>
            </Card>
        );
    }
}



AddressModal.propTypes = {
    handleClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
};

export default AddressModal;
