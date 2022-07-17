import React from "react";
import contactlist from "./contactlist.module.css";
import { MdDelete } from "react-icons/md";
import { AiFillEdit, AiFillInfoCircle } from "react-icons/ai";

const ContactList = ({
  contacts = [],
  onEdit,
  onPreview,
  onDelete,
  results,
}) => {
  return (
    // The following div will contain all the contacts
    <div className={contactlist.contactListContainer}>
      {contacts.map((contact, index) => {
        return (
          // The following div is a single contact card
          <div key={index} className={contactlist.singleContact}>
            <div className={contactlist.firstRow}>
              <img
                src={contact.image}
                alt=""
                className={contactlist.contactImage}
              />
              <span className={contactlist.contactName}>
                {contact.fullName}
              </span>
            </div>
            <div className={contactlist.secondRow}>
              <button
                onClick={() => onPreview(contact)}
                className={contactlist.actionCardBtn}
              >
                <AiFillInfoCircle color="white" size={30} />
              </button>
              <button
                onClick={() => onEdit(contact)}
                className={contactlist.actionCardBtn}
              >
                <AiFillEdit color="white" size={30} />
              </button>
              <button
                onClick={() => onDelete(contact.id)}
                className={contactlist.actionCardBtn}
              >
                <MdDelete color="white" size={30} />
              </button>
            </div>
          </div>
        );
      })}
      <h4 className={contactlist.totalContacts}>{results} Contacts</h4>
    </div>
  );
};

export default ContactList;
