import React from "react";
import contactinfo from "./contactinfo.module.css";
import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";

const ReadOnlyRow = ({
  contact,
  handleEditClick,
  handleDeleteClick,
  handleCancelOnPreViewClick,
}) => {
  return (
    <div className={contactinfo.overlay}>
      <div className={contactinfo.insidecontainer}>
        <div className={contactinfo.mainContainer}>
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
            <button
              className={contactinfo.actionBtn}
              type="button"
              onClick={(event) => handleEditClick(event, contact)}
            >
              <AiFillEdit color="white" size={30} />
            </button>
            <button
              className={contactinfo.actionBtn}
              type="button"
              onClick={() => handleDeleteClick(contact.id)}
            >
              <MdDelete color="white" size={30} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadOnlyRow;
