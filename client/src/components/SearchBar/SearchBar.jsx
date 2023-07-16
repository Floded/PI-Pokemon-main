import { useState } from "react";
import style from "./SearchBar.module.css";

const SearchBar = ({ sendProp }) => {
  const [search, setSearch] = useState("");

  const handleInputChange = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  const addStateOnSendProp = () => {
    if (search.length > 0) {
      sendProp(search);
      setSearch("");
    }
    // alert("Write the full name");
  };

  // console.log(search);
  return (
    <div className={style.Container}>
      <div>
        <input
          type="text"
          value={search}
          placeholder="Search Name"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <button onClick={() => sendProp(addStateOnSendProp)}>
          <span>Search</span>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
