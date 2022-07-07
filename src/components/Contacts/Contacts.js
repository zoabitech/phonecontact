
import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import styles from './styles.module.css';
// import "./App.css";
import data from "../../mock-data.json";
import ReadOnlyRow from "../ReadOnlyContant/ReadOnlyRow";
import EditableRow from "../EditAbleContant/EditableRow";
import AddContact from "../AddContact/AddContact";
import PreviewContant from "../PreviewContant/PreviewContant";

const Contacts = () => {
    const [contacts, setContacts] = useState(data)
    const [open, setOpen] = useState(false);
    const [showReadEdit, setShowReadEdit] = useState(false)
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

    const handleAddFormSubmit = (event) => {
        event.preventDefault();

        const newContact = {
            id: nanoid(),
            image: "http://i.pravatar.cc/200?img=1",
            fullName: addFormData.fullName,
            address: addFormData.address,
            phoneNumber: addFormData.phoneNumber,
            email: addFormData.email,
        };

        const newContacts = [...contacts, newContact];
        setContacts(newContacts);
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
    sortContactList(contacts);
    return (
        <div className={styles.mainContainer}>
            <button type="submit" onClick={() => setOpen(true)}>Add</button>
            <AddContact
                handleAddFormSubmit={handleAddFormSubmit}
                handleAddFormChange={handleAddFormChange}
                open={open}
                onClose={() => setOpen(false)}
            />
            <form onSubmit={handleEditFormSubmit}>
                <div>
                    <div className={styles.contacts}>
                        {contacts.map((contact) => (
                            <Fragment>
                                {editContactId === contact.id ? (
                                    <EditableRow
                                        editFormData={editFormData}
                                        handleEditFormChange={handleEditFormChange}
                                        handleCancelClick={handleCancelClick}
                                    />
                                ) : (
                                    <>
                                        {
                                            showReadEdit ?
                                                (
                                                    <ReadOnlyRow
                                                        contact={contact}
                                                        handleEditClick={handleEditClick}
                                                        handleDeleteClick={handleDeleteClick}
                                                    />
                                                ) : (
                                                    <PreviewContant
                                                        contact={contact}
                                                        onPreviewClicked={() => setShowReadEdit(true)}
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