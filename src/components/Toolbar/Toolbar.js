import toolbar from "./toolbar.module.css";
import { BsSearch, BsPersonPlusFill } from "react-icons/bs";

// This is the toolbar component which contains the search bar, "add contact" button, and "clear all contacts" button
const Toolbar = ({ onClickAdd, onSearch, clearAll }) => {
  return (
    <div className={toolbar.toolbarContainer}>
      <div className={toolbar.toolbarSearch}>
        <BsSearch size={20} color="white" />
        <input
          onChange={(event) => onSearch(event.target.value)}
          type="text"
          className={toolbar.searchBar}
        />
      </div>
      <div className={toolbar.toolbarBtnActions}>
        <button onClick={onClickAdd} className={toolbar.addBtn}>
          <BsPersonPlusFill size={30} color="white" />
        </button>
        <button onClick={clearAll} className={toolbar.clearAllBtn}>
          DELETE ALL CONTACTS
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
