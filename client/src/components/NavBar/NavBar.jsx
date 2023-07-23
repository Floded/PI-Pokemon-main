import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getByName } from "../../redux/actions";
import style from "../NavBar/NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";

const NavBar = () => {
  const [search, setSearch] = useState("");
  const sendProp = (message) => {
    if (message) setSearch(message);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    // if (!search) {
    //   console.log("No hay Poke");
    // }
    dispatch(getByName(search));
  }, [dispatch, search]);

  return (
    <div className={style.Container}>
      <div className={style.ImgContainer}>
        <img
          src="https://www.pokemon.com/static-assets/app/static3/img/og-default-image.jpeg"
          alt=""
        />
      </div>
      <Link to="/home" className={style.Links}>
        HOME
      </Link>
      <Link to="/create" className={style.Links}>
        FORM
      </Link>
      <SearchBar sendProp={sendProp} />
    </div>
  );
};

export default NavBar;
