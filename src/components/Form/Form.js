import React from "react";
import addcontact from "../AddContact/addcontact.module.css";
const Form = ({ handleFormSubmit, handleFormChange, open, onClose }) => {
  if (!open) return null;
  return (
    <div className={addcontact.overlay}>
      <div className={addcontact.insidecontainer}>
        <h2 className={addcontact.titleAdd}>Add a Contact</h2>
        <button
          type="button"
          onClick={onClose}
          className={addcontact.closeBtnAdd}
        >
          X
        </button>
        <form onSubmit={handleFormSubmit} className={addcontact.addContactForm}>
          <input
            className={addcontact.addForm}
            type="text"
            name="image"
            placeholder="Enter your image link"
            onChange={handleFormChange}
          />
          <input
            className={addcontact.addForm}
            type="text"
            name="fullName"
            required="required"
            placeholder="Enter a name..."
            onChange={handleFormChange}
          />
          <input
            className={addcontact.addForm}
            type="text"
            name="address"
            placeholder="Enter an addres..."
            onChange={handleFormChange}
          />
          <input
            className={addcontact.addForm}
            type="text"
            name="phoneNumber"
            required="required"
            placeholder="Enter a phone number..."
            onChange={handleFormChange}
          />
          <input
            className={addcontact.addForm}
            type="email"
            name="email"
            required="required"
            placeholder="Enter an email..."
            onChange={handleFormChange}
          />
          <button className={addcontact.addForm} type="submit">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
