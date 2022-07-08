
import React, { useState, Fragment } from "react";
import { v4 as uuidv4 } from 'uuid';
import styles from './styles.module.css';
import data from "../../mock-data.json";
import ReadOnlyRow from "../ReadOnlyContant/ReadOnlyRow";
import EditableRow from "../EditAbleContant/EditableRow";
import AddContact from "../AddContact/AddContact";
import PreviewContant from "../PreviewContant/PreviewContant";

const Contacts = () => {
    const [contacts, setContacts] = useState(data)
    const [open, setOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
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
        const isContactExist = contacts.find(contact => contact.fullName === name);
        return (typeof (isContactExist) !== "undefined" ? true : false);
    }
    const handleAddFormSubmit = (event) => {
        event.preventDefault();
        if (checkIfContactExist(addFormData.fullName))
            alert("Sory this name alredy exist in the contact book")
        else {
            const newContact = {
                id: uuidv4(),
                image: "http://i.pravatar.cc/200?img=1",
                fullName: addFormData.fullName,
                address: addFormData.address,
                phoneNumber: addFormData.phoneNumber,
                email: addFormData.email,
            };

            const newContacts = [...contacts, newContact];
            setContacts(newContacts);
        }
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
        setViewContactId(null)
    };
    const handleCancelClick = () => {
        setEditContactId(null);
    };
    const sortContactList = (contacts) => {
        contacts.sort((a, b) => {
            if (a.fullName.toLowerCase() < b.fullName.toLowerCase())
                return -1;
            if (a.fullName.toLowerCase() > b.fullName.toLowerCase())
                return 1;
            return 0;
        })
    }
    const handleDeleteClick = (contactId) => {
        const newContacts = [...contacts];

        const index = contacts.findIndex((contact) => contact.id === contactId);

        newContacts.splice(index, 1);

        setContacts(newContacts);
    };

    const searchHandler = (event) => {
        setSearchTerm(event.target.value)
        if (searchTerm !== "") {
            const contactSearch = contacts.filter(contact => {
                return Object.values(contact)
                    .join(" ").toLowerCase()
                    .includes(searchTerm.toLowerCase())
            })
            setSearchResults(contactSearch);
        }
        else {
            setSearchResults(contacts)
        }
    }

    sortContactList(contacts);

    return (
        <div className={styles.mainContainer}>
            <div>
                <button type="submit" onClick={() => setOpen(true)}>Add</button>
                <AddContact
                    handleAddFormSubmit={handleAddFormSubmit}
                    handleAddFormChange={handleAddFormChange}
                    open={open}
                    onClose={() => setOpen(false)}
                />
            </div>
            <div className={styles.searchContainer}>
                <div className={styles.iconinput}>
                    <input type="text" placeholder="Search contact" value={searchTerm} onChange={(event) => searchHandler(event)} />
                    {/* here need to import the search icon */}
                </div>
            </div>
            <form onSubmit={handleEditFormSubmit}>
                <div>
                    <div className={styles.contacts}>
                        {(searchTerm !== "" ? searchResults : contacts).map((contact) => (
                            <Fragment>
                                {editContactId === contact.id ? (
                                    <EditableRow
                                        key={uuidv4()}
                                        editFormData={editFormData}
                                        handleEditFormChange={handleEditFormChange}
                                        handleCancelClick={handleCancelClick}
                                    />
                                ) : (
                                    <>
                                        {
                                            viewContactId === contact.id ?
                                                (
                                                    <ReadOnlyRow
                                                        contact={contact}
                                                        handleEditClick={handleEditClick}
                                                        handleDeleteClick={handleDeleteClick}
                                                        handleCancelOnPreViewClick={handleCancelOnPreViewClick}
                                                    />
                                                ) : (
                                                    <PreviewContant
                                                        contact={contact}
                                                        onPreviewClicked={handlePreViewClicked}
                                                    />
                                                )
                                        }
                                    </>

                                )}

                            </Fragment>
                        ))}
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Contacts