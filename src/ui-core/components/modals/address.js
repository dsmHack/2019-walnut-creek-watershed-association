import React from "react";
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from "@material-ui/core/Button";
import {
    ADDRESS_MODAL_INPUT_PLACEHOLDER
} from "../../constants/address";
import "./address.css";

import { actions } from "../../dux/appState";
import { actions as hucActions } from "../../dux/huc";
import { connect } from "react-redux";

function mapStateToProps(state) {
    return {
        showAddressModal: state.appState.showAddressModal
    };
}

const mapDispatchToProps = {
    ...actions,
    ...hucActions
};

const AddressModal = props => {
    const [address, setAddress] = React.useState('');
    return (
        <Dialog open={props.showAddressModal} onClose={props.hideModal}>
            <DialogTitle id="form-dialog-title">Address</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Please enter the address of where you would like to check the water quality
                </DialogContentText>
                <TextField
                    className="address"
                    type="text"
                    onChange={handleOnChange}
                    placeholder={ADDRESS_MODAL_INPUT_PLACEHOLDER}
                    fullWidth
                    margin="dense"
                />
            </DialogContent>
            <DialogActions>
                <Button
                    color="primary"
                    variant="contained"
                    onClick={handleSubmit}
                >
                    Search
                </Button>
            </DialogActions>
        </Dialog>
    );

    function handleSubmit() {
        props.fetchHucs(address);
        props.hideModal();
        props.displayUi();
    }

    function handleOnChange(e) {
        setAddress(e.target.value);
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddressModal);
