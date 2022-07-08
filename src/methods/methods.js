
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


export {
    handleAddFormChange, searchHandler, handleDeleteClick, sortContactList, handleCancelClick, handleCancelOnPreViewClick
    , handlePreViewClicked, handleEditClick, handleEditFormSubmit, handleAddFormSubmit, handleEditFormChange
};