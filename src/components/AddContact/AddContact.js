import React from "react";
import addcontact from "../AddContact/addcontact.module.css";
const AddContact = ({
  handleAddFormSubmit,
  handleAddFormChange,
  open,
  onClose,
}) => {
  if (!open) return null;
  return (
    <div className={addcontact.overlay}>
      <div className={addcontact.insidecontainer}>
        <h2 className={addcontact.title}>Add a Contact</h2>
        <button type="button" onClick={onClose} className={addcontact.closeBtn}>
          X
        </button>
        <form
          onSubmit={handleAddFormSubmit}
          className={addcontact.addContactForm}
        >
          <input
            className={addcontact.formInput}
            type="text"
            name="imgLink"
            required="required"
            placeholder="Enter your image link"
            onChange={handleAddFormChange}
          />
          <input
            className={addcontact.formInput}
            type="text"
            name="fullName"
            required="required"
            placeholder="Enter a name..."
            onChange={handleAddFormChange}
          />
          <input
            className={addcontact.formInput}
            type="text"
            name="address"
            required="required"
            placeholder="Enter an addres..."
            onChange={handleAddFormChange}
          />
          <input
            className={addcontact.formInput}
            type="text"
            name="phoneNumber"
            required="required"
            placeholder="Enter a phone number..."
            onChange={handleAddFormChange}
          />
          <input
            className={addcontact.formInput}
            type="email"
            name="email"
            required="required"
            placeholder="Enter an email..."
            onChange={handleAddFormChange}
          />
          <button className={addcontact.formInput} type="submit">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddContact;
