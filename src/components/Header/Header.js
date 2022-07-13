import React from "react";
import header from "./header.module.css";

const Header = ({ searchBar, clearAll, addContact }) => {
  return (
    <div className={header.header}>
      <div className={header.col1header}>
        <h2 className={header.titleHeader}>Phone Contacts</h2>
        {searchBar}
      </div>
      <div className={header.col2header}>
        {clearAll}
        {addContact}
      </div>
    </div>
  );
};

export default Header;
