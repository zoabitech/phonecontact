import React from "react";
import contactcard from "./contactcard.module.css";
import { AiFillInfoCircle } from "react-icons/ai";

const PreviewContant = ({ contact, onPreviewClicked }) => {
  return (
    <div className={contactcard.mainContainer}>
      <div className={contactcard.col1}>
        <div className={contactcard.imageContainer}>
          <img
            className={contactcard.image}
            src={contact.image}
            alt={contact.image}
          />
        </div>
        <h3>{contact.fullName}</h3>
      </div>
      <div className={contactcard.col2}>
        <button
          className={contactcard.actionBtn}
          type="button"
          onClick={(event) => onPreviewClicked(event, contact)}
        >
          <AiFillInfoCircle color="white" size={30} />
        </button>
      </div>
    </div>
  );
};

export default PreviewContant;
