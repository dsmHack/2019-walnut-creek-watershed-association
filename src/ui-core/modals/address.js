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
import Utils from "../../utils/Utils"
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
            "address": target.value
        });
    }

    render() {
        let sampleResultCallback = (results) => {
            console.log("Sample Results: " + results);
        };

        let hucBorderCallback = (hucBorder) => {
            console.log("hucBorderCallback " + hucBorder);

            BorderData.getHucBorder(hucBorder, "huc_12").then((result) => {
                console.log("Border " + result);
                let latlngs = Utils.convertEsriGeometryPolygonToLatLngList(result);
                latlngs = [
                    {lat: 41.583943, lng: -93.629191},
                    {lat: 41.584208, lng: -93.627939},
                    {lat: 41.583247, lng: -93.627649},
                    {lat: 41.582972, lng: -93.628821},
                ];
                this.props.setCoordinatesList(latlngs);
                console.log(latlngs);
            })
        };

        return (
            <Card className="modal">
                <CardHeader className="title" title="TYPE YOUR ADDRESS" />
                <CardContent>
                    <TextField
                        className="address"
                        type="text"
                        value={this.state.address}
                        placeholder="Enter Address Here.."
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
                            // API.getSampleResults(this.state.address, "Escherichia%20coli");
                            let hucId = await Location.getHucFromAddress(this.state.address);

                            console.log("hucId: " + hucId);

                            // let results = await API.getData(hucId, "swimming");
                            // sampleResultCallback(results);

                            let hucBorder = await BorderData.getHucBorder(hucId);
                            hucBorderCallback(hucBorder)
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
