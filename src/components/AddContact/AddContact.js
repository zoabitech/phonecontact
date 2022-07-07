import React from 'react'
import addcontact from '../AddContact/AddContact.module.css';
const AddContact = ({ handleAddFormSubmit, handleAddFormChange, open, onClose }) => {
    if (!open) return null
    return (
        <div className={addcontact.overlay}>
            <div className={addcontact.insidecontainer}>
                <button type="button" onClick={onClose} className={addcontact.closeBtn}>
                    X
                </button>
                <h2>Add a Contact</h2>
                <form onSubmit={handleAddFormSubmit} className={addcontact.addform}>
                    <input
                        type="text"
                        name="fullName"
                        required="required"
                        placeholder="Enter a name..."
                        onChange={handleAddFormChange}
                    />
                    <input
                        type="text"
                        name="address"
                        required="required"
                        placeholder="Enter an addres..."
                        onChange={handleAddFormChange}
                    />
                    <input
                        type="text"
                        name="phoneNumber"
                        required="required"
                        placeholder="Enter a phone number..."
                        onChange={handleAddFormChange}
                    />
                    <input
                        type="email"
                        name="email"
                        required="required"
                        placeholder="Enter an email..."
                        onChange={handleAddFormChange}
                    />
                    <button type="submit">Add</button>
                </form>
            </div>
        </div>
    )
}

export default AddContact