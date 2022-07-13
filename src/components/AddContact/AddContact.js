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
        <h2 className={addcontact.titleAdd}>Add a Contact</h2>
        <button
          type="button"
          onClick={onClose}
          className={addcontact.closeBtnAdd}
        >
          X
        </button>
        <form
          onSubmit={handleAddFormSubmit}
          className={addcontact.addContactForm}
        >
          <input
            className={addcontact.addForm}
            type="text"
            name="image"
            placeholder="Enter your image link"
            onChange={handleAddFormChange}
          />
          <input
            className={addcontact.addForm}
            type="text"
            name="fullName"
            required="required"
            placeholder="Enter a name..."
            onChange={handleAddFormChange}
          />
          <input
            className={addcontact.addForm}
            type="text"
            name="address"
            placeholder="Enter an addres..."
            onChange={handleAddFormChange}
          />
          <input
            className={addcontact.addForm}
            type="text"
            name="phoneNumber"
            required="required"
            placeholder="Enter a phone number..."
            onChange={handleAddFormChange}
          />
          <input
            className={addcontact.addForm}
            type="email"
            name="email"
            placeholder="Enter an email..."
            onChange={handleAddFormChange}
          />
          <textarea name="desc" rows="5" cols="29" onChange={handleAddFormChange}>
            Add description about your self mother fucker
          </textarea>
          <button className={addcontact.addForm} type="submit">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddContact;
