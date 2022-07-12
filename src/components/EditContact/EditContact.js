import React from "react";
import editcontact from "./editcontact.module.css";
import { AiFillSave } from "react-icons/ai";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <div className={editcontact.main}>
      <div className={editcontact.edinner}>
        <h2 className={editcontact.title}>Edit Contact</h2>
        <div className={editcontact.image}>
          <img
            className={editcontact.image}
            src={editFormData.image}
            alt={editFormData.image}
          />
        </div>
        <input
          className={editcontact.formInput}
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="fullName"
          value={editFormData.fullName}
          onChange={handleEditFormChange}
        ></input>
        <input
          className={editcontact.formInput}
          type="text"
          required="required"
          placeholder="Enter an address..."
          name="address"
          value={editFormData.address}
          onChange={handleEditFormChange}
        ></input>
        <input
          className={editcontact.formInput}
          type="text"
          required="required"
          placeholder="Enter a phone number..."
          name="phoneNumber"
          value={editFormData.phoneNumber}
          onChange={handleEditFormChange}
        ></input>
        <input
          className={editcontact.formInput}
          type="email"
          required="required"
          placeholder="Enter an email..."
          name="email"
          value={editFormData.email}
          onChange={handleEditFormChange}
        ></input>
        <div>
          <button type="submit" className={editcontact.saveBtn}>
            <AiFillSave color="white" size={30} />
          </button>
          <button
            type="button"
            onClick={handleCancelClick}
            className={editcontact.closeBtn}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditableRow;
