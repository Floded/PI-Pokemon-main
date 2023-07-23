import { useState } from "react";
import { useSelector } from "react-redux";
import style from "./SearchBar.module.css";

const SearchBar = ({ sendProp }) => {
  const [search, setSearch] = useState("");
  // const [original, setOriginal] = useState([]);

  const namePokemon = useSelector((state) => state.oldPokemon);
  // console.log(namePokemon);
  // const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { value } = e.target;
    // console.log(value);
    if (value.length === 0) {
      console.log([...namePokemon]);
    }
    setSearch(value);
    // setSearch(value);
  };

  // const nombreDefinitivo = namePokemon.map((nombre) => nombre.name);

  // dispatch(getByName());

  const addStateOnSendProp = () => {
    if (search.length > 0) {
      console.log(search);
      sendProp(search);
      // setSearch("");
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
        <button onClick={() => addStateOnSendProp()}>
          <span className={style.SpanButton}>Search</span>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
