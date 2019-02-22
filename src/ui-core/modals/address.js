import React from 'react';
import PropTypes from 'prop-types';
import "./address.css";

const AddressModal = ({ handleClose, show }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
        <div className="title">
          <label>TYPE YOUR ADDRESS</label>
        </div>
        <div className="address">
          <input type="text" name="address"/>
        </div>
        <div className="next">
          <button onClick={handleClose}>Next</button>
        </div>
        </section>
      </div>
    );
  };

AddressModal.propTypes = {
    handleClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,

}

export default AddressModal;

