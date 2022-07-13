import React from "react";
import contactcard from "./contactcard.module.css";
import { AiFillInfoCircle } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
const PreviewContant = ({
  contact,
  onPreviewClicked,
  handleEditClick,
  handleDeleteClick,
}) => {
  return (
    <div className={contactcard.mainCardContainer}>
      <div className={contactcard.col1card}>
        <div className={contactcard.imageContainer}>
          <img
            className={contactcard.image}
            src={contact.image}
            alt={contact.image}
          />
        </div>
        <h3>{contact.fullName}</h3>
      </div>
      <div className={contactcard.col2card}></div>
      <div className={contactcard.btncontainer}>
        <button
          className={contactcard.actionCardBtn}
          type="button"
          onClick={(event) => onPreviewClicked(event, contact)}
        >
          <AiFillInfoCircle color="white" size={30} />
        </button>
        <button
          className={contactcard.actionCardBtn}
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          <AiFillEdit color="white" size={30} />
        </button>
        <button
          className={contactcard.actionCardBtn}
          type="button"
          onClick={() => handleDeleteClick(contact.id)}
        >
          <MdDelete color="white" size={30} />
        </button>
      </div>
    </div>
  );
};

export default PreviewContant;
