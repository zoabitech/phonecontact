import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Toolbar from "../Toolbar/Toolbar";
import ContactList from "../ContactList/ContactList";
import Popup from "../Popup/Popup";
import Form from "../Form/Form";
import data from "../../data.json";
import main from "./main.module.css";

const Main = () => {
  const [contacts, setContacts] = useState(data);
  const [searchBarValue, setSearchBarValue] = useState("");
  const [popupOpen, setPopupOpen] = useState(false);
  const [contactInfo, setContactInfo] = useState(false);
  const [currentContact, setCurrentContact] = useState(null);

  // After submitting the form
  const onSubmit = (newContact) => {
    if (currentContact) {
      editContact(newContact);
    } else {
      addContact(newContact);
    }
  };

  // Clearing all the contacts
  const clearAll = () => {
    setContacts([]);
  };

  // Edit the contact after the submit
  const editContact = (newContact) => {
    setContacts(
      contacts.map((contact) =>
        contact.id === newContact.id ? newContact : contact
      )
    );
    onPopupClose();
  };

  // Add the contact after the submit
  const addContact = (newContact) => {
    if (checkIfContactExist(newContact.fullName))
      alert("A contact with the same name does already exist!");
    else {
      setContacts([...contacts, { ...newContact, id: uuidv4() }]);
      onPopupClose();
    }
  };

  // A boolean method which returns true if the contact already exist, otherwise it will return false
  // used for the add contact method
  const checkIfContactExist = (name) => {
    const isContactExist = contacts.find(
      (contact) => contact.fullName.toLowerCase() === name.toLowerCase()
    );
    return typeof isContactExist !== "undefined" ? true : false;
  };

  // Searching a contact
  const onSearch = (value) => {
    setSearchBarValue(value);
  };

  // On add click
  const onAdd = () => {
    setPopupOpen(true);
  };

  // On edit click
  const onEdit = (contact) => {
    setPopupOpen(true);
    setCurrentContact(contact);
  };

  // On preview click
  const onPreview = (contact) => {
    setPopupOpen(true);
    setCurrentContact(contact);
    setContactInfo(true);
  };

  // On delete click
  const onDelete = (contactId) => {
    const result = contacts.filter((contact) => contact.id !== contactId);
    setContacts(result);
  };

  // On popup close
  const onPopupClose = () => {
    setPopupOpen(false);
    setCurrentContact(null);
    setContactInfo(false);
  };

  // Contacts to be displayed
  const displayedContacts = contacts
    .filter((contact) =>
      contact.fullName.toLowerCase().includes(searchBarValue.toLowerCase())
    )
    .sort((contact1, contact2) =>
      contact1.fullName.toLowerCase() < contact2.fullName.toLowerCase() ? -1 : 1
    );

  return (
    <div className="App">
      <main>
        <Toolbar onSearch={onSearch} onClickAdd={onAdd} clearAll={clearAll} />
        <ContactList
          results={displayedContacts.length}
          contacts={displayedContacts}
          onPreview={onPreview}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      </main>
      <Popup
        onClose={onPopupClose}
        isOpen={popupOpen}
        header={
          currentContact
            ? contactInfo
              ? "Contact Info"
              : "Edit Contact"
            : "New Contact"
        }
      >
        <Form
          contactInfo={contactInfo}
          onSubmit={onSubmit}
          defaultContacts={currentContact}
        />
      </Popup>
    </div>
  );
};

export default Main;
