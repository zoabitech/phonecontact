import React from "react";
import editable from './editable.module.css';

const EditableRow = ({ editFormData, handleEditFormChange, handleCancelClick }) => {
  return (
    <div className={editable.main}>
      <div className={editable.edinner}>
        <div className={editable.image}>
          <img className={editable.image} src={editFormData.image} alt={editFormData.image} />
        </div>
        <input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="fullName"
          value={editFormData.fullName}
          onChange={handleEditFormChange}
        ></input>
        <input
          type="text"
          required="required"
          placeholder="Enter an address..."
          name="address"
          value={editFormData.address}
          onChange={handleEditFormChange}
        ></input>
        <input
          type="text"
          required="required"
          placeholder="Enter a phone number..."
          name="phoneNumber"
          value={editFormData.phoneNumber}
          onChange={handleEditFormChange}
        ></input>
        <input
          type="email"
          required="required"
          placeholder="Enter an email..."
          name="email"
          value={editFormData.email}
          onChange={handleEditFormChange}
        ></input>
        <div>
          <button type="submit">Save</button>
          <button type="button" onClick={handleCancelClick} className={editable.cancel}>
            X
          </button>
        </div>
      </div>
    </div >
  );
};

export default EditableRow;
