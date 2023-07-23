import { useState } from "react";
import { useDispatch } from "react-redux";
import { getAllPokemon, getByName } from "../../redux/actions";
import style from "./SearchBar.module.css";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { value } = e.target;
    if (value === "") {
      dispatch(getAllPokemon());
    }
    setSearch(value);
  };

  const onClickSearch = () => {
    if (search.length > 0) {
      dispatch(getByName(search));
    }
  };

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
        <button onClick={() => onClickSearch()}>
          <span className={style.SpanButton}>Search</span>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
