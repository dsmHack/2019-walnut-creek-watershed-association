import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import TextField from '@material-ui/core/TextField';
import "./address.css";

const AddressModal = ({ handleClose, show }) => {
    return (
        <Card className="modal">
            <CardHeader className="title" title="TYPE YOUR ADDRESS" />
            <CardContent>
              <TextField className="address" type="text"/>
            </CardContent>
            <CardActions>
                <Button className="nextButton" size="medium" variant="contained" color="primary">
                    NEXT
                </Button>
            </CardActions>
        </Card>
    );
};

AddressModal.propTypes = {
    handleClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
};

export default AddressModal;
