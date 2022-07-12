import React, { useState, Fragment } from "react";
import { v4 as uuidv4 } from "uuid";
import contactslist from "./contactslist.module.css";
import data from "../../mock-data.json";
import ContactInfo from "../ContactInfo/ContactInfo";
import EditContact from "../EditContact/EditContact";
import AddContact from "../AddContact/AddContact";
import PreviewContant from "../ContactCard/ContactCard";
import { BsSearch, BsPersonPlusFill } from "react-icons/bs";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Contacts = () => {
  const [contacts, setContacts] = useState(data);
  const [open, setOpen] = useState(false);
  const [searchResults, setSearchResults] = useState(contacts);
  const [viewContactId, setViewContactId] = useState(null);
  const [addFormData, setAddFormData] = useState({
    image: "http://i.pravatar.cc/200?img=1",
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const [editFormData, setEditFormData] = useState({
    image: "http://i.pravatar.cc/200?img=1",
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };
  const checkIfContactExist = (name) => {
    const isContactExist = contacts.find(
      (contact) => contact.fullName === name
    );
    return typeof isContactExist !== "undefined" ? true : false;
  };
  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    if (checkIfContactExist(addFormData.fullName))
      alert("Sory this name alredy exist in the contact book");
    else {
      const newContact = {
        id: uuidv4(),
        image: addFormData.imgLink,
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

  const handleEditFormSubmit = (event) => {
    event.preventDefault();
    const editedContact = {
      id: editContactId,
      image: "http://i.pravatar.cc/200?img=1",
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      image: "http://i.pravatar.cc/200?img=1",
      fullName: contact.fullName,
      address: contact.address,
      phoneNumber: contact.phoneNumber,
      email: contact.email,
    };

    setEditFormData(formValues);
  };
  const handlePreViewClicked = (event, contact) => {
    event.preventDefault();
    setViewContactId(contact.id);
  };
  const handleCancelOnPreViewClick = () => {
    setViewContactId(null);
  };
  const handleCancelClick = () => {
    setEditContactId(null);
  };
  const sortContactList = (contacts) => {
    contacts.sort((a, b) => {
      if (a.fullName.toLowerCase() < b.fullName.toLowerCase()) return -1;
      if (a.fullName.toLowerCase() > b.fullName.toLowerCase()) return 1;
      return 0;
    });
  };
  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
    setSearchResults(newContacts);
  };

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

  const addContact = (
    <button
      className={contactslist.actionBtn}
      type="submit"
      onClick={() => setOpen(true)}
    >
      <BsPersonPlusFill color="white" size={20} />
    </button>
  );

  const clearAll = (
    <button
      className={contactslist.actionBtn}
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
      <div className={contactslist.mainContainer}>
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
                <Fragment>
                  {editContactId === contact.id ? (
                    <EditContact
                      key={uuidv4()}
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
                        <PreviewContant
                          contact={contact}
                          onPreviewClicked={handlePreViewClicked}
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
          Total Contacts: {searchResults.length}
        </h2>
      </div>
      <Footer />
    </div>
  );
};

export default Contacts;
