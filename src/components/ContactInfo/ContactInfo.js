import React from "react";
import contactinfo from "./contactinfo.module.css";
import { IoIosArrowBack } from "react-icons/io";

const ReadOnlyRow = ({ contact, handleCancelOnPreViewClick }) => {
  return (
    <div className={contactinfo.overlay}>
      <div className={contactinfo.insidecontainer}>
        <div className={contactinfo.mainInfoContainer}>
          <div className={contactinfo.imageContainer}>
            <img
              className={contactinfo.image}
              src={contact.image}
              alt={contact.image}
            />
          </div>
          <div className={contactinfo.info}>
            <h3 className={contactinfo.text}>{contact.fullName}</h3>
            <h3 className={contactinfo.text}>{contact.address}</h3>
            <h3 className={contactinfo.text}>{contact.phoneNumber}</h3>
            <h3 className={contactinfo.text}>{contact.email}</h3>
          </div>
          <div>
            <button
              className={contactinfo.actionBtn}
              type="button"
              onClick={handleCancelOnPreViewClick}
            >
              <IoIosArrowBack color="white" size={30} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadOnlyRow;
