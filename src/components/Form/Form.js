import React, { useState } from "react";
import form from "./form.module.css";

// This is the form component which will be shown in the popup window
const Form = ({ defaultContacts, onSubmit, contactInfo }) => {
  // The contact data which we get/show from/in the form fields
  const [contactData, setContactData] = useState(defaultContacts || {});

  // Handling the form submit (after pressing the save button)
  const handleSubmit = (event) => {
    event.preventDefault();
    if (typeof contactData.image === "undefined")
      contactData.image =
        "https://www.pngfind.com/pngs/m/470-4703547_icon-user-icon-hd-png-download.png";
    onSubmit(contactData);
  };

  // Handling the input fields values changed
  const onChange = (event) => {
    const { name, value } = event.target;
    setContactData({ ...contactData, [name]: value });
  };

  return (
    <div class={form.formContainer}>
      {/* Showing the contact image */}
      {(contactInfo || contactData) && (
        <img src={contactData.image} alt="" className={form.contactImage} />
      )}
      <form onSubmit={handleSubmit} className={form.form} disabled>
        {/* Contact's image url */}
        <input
          className={form.formInput}
          onChange={onChange}
          value={contactData.image || ""}
          type="text"
          id="image"
          name="image"
          placeholder="Image"
          disabled={contactInfo}
        />
        {/* Contact's name */}
        <input
          className={form.formInput}
          onChange={onChange}
          value={contactData.fullName || ""}
          type="text"
          id="fullName"
          name="fullName"
          placeholder="Name"
          required
          disabled={contactInfo}
        />
        {/* Contact's phone number */}
        <input
          className={form.formInput}
          onChange={onChange}
          value={contactData.phoneNumber || ""}
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          placeholder="Phone number"
          required
          disabled={contactInfo}
        />
        {/* Contact's email */}
        <input
          className={form.formInput}
          onChange={onChange}
          value={contactData.email || ""}
          type="text"
          id="email"
          name="email"
          placeholder="Email"
          disabled={contactInfo}
        />
        {/* Contact's address */}
        <input
          className={form.formInput}
          onChange={onChange}
          value={contactData.address || ""}
          type="text"
          id="address"
          name="address"
          placeholder="Address"
          disabled={contactInfo}
        />
        {/* Notes about the contact */}
        <textarea
          className={form.formInput}
          onChange={onChange}
          value={contactData.notes || ""}
          type="text"
          id="notes"
          name="notes"
          placeholder="Notes"
          disabled={contactInfo}
        />
        {/* Save button, shown only in the edit and add popup (not in the preview) */}
        {!contactInfo && (
          <input type="submit" value="Save" className={form.saveBtn} />
        )}
      </form>
    </div>
  );
};

export default Form;
