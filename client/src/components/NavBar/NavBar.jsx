import SearchBar from "../SearchBar/SearchBar";
import style from "../NavBar/NavBar.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getByName } from "../../redux/actions";

const NavBar = () => {
  const [search, setSearch] = useState("");
  const sendProp = (message) => {
    if (message) setSearch(message);
  };

  // console.log(search);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getByName(search));
  }, [dispatch, search]);

  return (
    <div className={style.Container}>
      <Link to="/home">HOME</Link>
      <Link to="/create">FORM</Link>
      <SearchBar sendProp={sendProp} />
    </div>
  );
};

export default NavBar;
