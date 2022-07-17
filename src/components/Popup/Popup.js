import React from "react";
import popup from "./popup.module.css";

// This is the popup component
const Popup = ({ isOpen, header, children, onClose }) => {
  if (!isOpen) return null;

  return (
    // The main container
    <div className={popup.popupContainer}>
      {/* The content container */}
      <div className={popup.popupContent}>
        <button onClick={onClose} className={popup.closeBtn}>
          X
        </button>
        <h2 className={popup.popupTitle}>{header}</h2>
        <div className={popup.popupBody}>{children}</div>
      </div>
    </div>
  );
};

export default Popup;
