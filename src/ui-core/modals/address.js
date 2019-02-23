import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import TextField from "@material-ui/core/TextField";
import API from "../../server-core/main-service";
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
                        onClick={() => API.getData(this.state.address, "swimming")}
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
