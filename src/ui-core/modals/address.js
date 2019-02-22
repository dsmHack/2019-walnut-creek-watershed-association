import React from 'react';
import PropTypes from 'prop-types';


const AddressModal = ({ handleClose, show }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          <label>TYPE YOUR ADDRESS</label>
          <input type="text" name="address"/>
          <button onClick={handleClose}>Next</button>
        </section>
      </div>
    );
  };

AddressModal.propTypes = {
    handleClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,

}

export default AddressModal;

