import React, { useState, Fragment } from "react";
import { v4 as uuidv4 } from "uuid";
import contactslist from "./contactslist.module.css";
import data from "../../mock-data.json";
import ContactInfo from "../ContactInfo/ContactInfo";
import EditContact from "../EditContact/EditContact";
import AddContact from "../AddContact/AddContact";
import ContactCard from "../ContactCard/ContactCard";
import { BsSearch, BsPersonPlusFill } from "react-icons/bs";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const ContactsList = () => {
  const [contacts, setContacts] = useState(data); // contacts list state
  const [open, setOpen] = useState(false); // popups state
  const [searchResults, setSearchResults] = useState(contacts); // contacts on search state
  const [viewContactId, setViewContactId] = useState(null); // contact id which we want to see his info
  // The default data of the add contact form
  const [addFormData, setAddFormData] = useState({
    image: "",
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  // The default data of the edit form
  const [editFormData, setEditFormData] = useState({
    image: "",
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  // contact id which we want to edit
  const [editContactId, setEditContactId] = useState(null);

  // Add contact form handlers
  // Values changes handler
  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  // On submit handler of the add form
  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    if (checkIfContactExist(addFormData.fullName))
      alert("Sorry this name already exists in the contact book");
    else {
      const newContact = {
        id: uuidv4(),
        image:
          addFormData.image !== ""
            ? addFormData.image
            : "http://i.pravatar.cc/200?img=1",
        fullName: addFormData.fullName,
        address: addFormData.address,
        phoneNumber: addFormData.phoneNumber,
        email: addFormData.email,
      };

      const newContacts = [...contacts, newContact];
      setContacts(newContacts);
      setSearchResults(newContacts);
    }
    setOpen(false);
  };

  // A boolean method which returns true if the contact already exist, otherwise it will return false
  // used for the add contact method
  const checkIfContactExist = (name) => {
    const isContactExist = contacts.find(
      (contact) => contact.fullName === name
    );
    return typeof isContactExist !== "undefined" ? true : false;
  };

  // Edit contact form handlers
  // Values changes handler
  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  // A handler for the edit button click
  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);
    const formValues = {
      image: contact.image,
      fullName: contact.fullName,
      address: contact.address,
      phoneNumber: contact.phoneNumber,
      email: contact.email,
    };
    setEditFormData(formValues);
  };

  // On submit handler for the edit form
  const handleEditFormSubmit = (event) => {
    event.preventDefault();
    const editedContact = {
      id: editContactId,
      image:
        editFormData.image !== ""
          ? editFormData.image
          : "http://i.pravatar.cc/200?img=1",
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setSearchResults(newContacts);
    setEditContactId(null);
  };

  // A handler of the show info button
  const handlePreViewClicked = (event, contact) => {
    event.preventDefault();
    setViewContactId(contact.id);
  };

  // A handler of the cancel button on the info popup
  const handleCancelOnPreViewClick = () => {
    setViewContactId(null);
  };

  // Cancel button handler
  const handleCancelClick = () => {
    setEditContactId(null);
  };

  // A mehtod which sorts the contacts by their names, to be shown in a sorted alphabetic order
  const sortContactList = (contacts) => {
    contacts.sort((a, b) => {
      if (a.fullName.toLowerCase() < b.fullName.toLowerCase()) return -1;
      if (a.fullName.toLowerCase() > b.fullName.toLowerCase()) return 1;
      return 0;
    });
  };

  // The delete button handler
  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
    setSearchResults(newContacts);
  };

  // Search handler method
  const searchHandler = (event) => {
    if (event.target.value !== "") {
      const contactSearch = contacts.filter((contact) => {
        return contact.fullName
          .toLowerCase()
          .includes(event.target.value.toLowerCase());
      });
      setSearchResults(contactSearch);
    } else {
      setSearchResults(contacts);
    }
  };

  // The search bar component
  const searchBar = (
    <div className={contactslist.searchContainer}>
      <BsSearch color="white" size={20} />
      <input
        type="text"
        placeholder="Search contact"
        onChange={(event) => {
          searchHandler(event);
        }}
        className={contactslist.searchbar}
      />
    </div>
  );

  // The add contact button as a component
  const addContact = (
    <button
      className={contactslist.actionListBtn}
      type="submit"
      onClick={() => setOpen(true)}
    >
      <BsPersonPlusFill color="white" size={20} />
    </button>
  );

  // The clear all button as a component
  const clearAll = (
    <button
      className={contactslist.actionListBtn}
      type="submit"
      onClick={() => {
        setContacts([]);
        setSearchResults([]);
      }}
    >
      Clear All
    </button>
  );

  sortContactList(contacts);

  return (
    <div className={contactslist.mainBody}>
      <Header
        searchBar={searchBar}
        addContact={addContact}
        clearAll={clearAll}
      />
      <div className={contactslist.mainListContainer}>
        <div>
          <AddContact
            handleAddFormSubmit={handleAddFormSubmit}
            handleAddFormChange={handleAddFormChange}
            open={open}
            onClose={() => setOpen(false)}
          />
        </div>
        <form onSubmit={handleEditFormSubmit}>
          <div>
            <div className={contactslist.contacts}>
              {searchResults.map((contact) => (
                <Fragment key={contact.id}>
                  {editContactId === contact.id ? (
                    <EditContact
                      editFormData={editFormData}
                      handleEditFormChange={handleEditFormChange}
                      handleCancelClick={handleCancelClick}
                    />
                  ) : (
                    <>
                      {viewContactId === contact.id ? (
                        <ContactInfo
                          contact={contact}
                          handleEditClick={handleEditClick}
                          handleDeleteClick={handleDeleteClick}
                          handleCancelOnPreViewClick={
                            handleCancelOnPreViewClick
                          }
                        />
                      ) : (
                        <ContactCard
                          contact={contact}
                          onPreviewClicked={handlePreViewClicked}
                          handleEditClick={handleEditClick}
                          handleDeleteClick={handleDeleteClick}
                        />
                      )}
                    </>
                  )}
                </Fragment>
              ))}
            </div>
          </div>
        </form>
        <h2 className={contactslist.title}>
          {searchResults.length === 0 ? "No contacts..." : ""}
        </h2>{" "}
      </div>
      <Footer />
    </div>
  );
};

export default ContactsList;
