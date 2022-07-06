import React from "react";
import styles from './styles.module.css';
const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <div className={styles.mainContainer}>
      <img src={contact.image} alt={contact.image} />
      <h3>{contact.fullName}</h3>
      <h3>{contact.address}</h3>
      <h3>{contact.phoneNumber}</h3>
      <h3>{contact.email}</h3>
      <div>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default ReadOnlyRow;
