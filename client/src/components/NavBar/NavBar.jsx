import { Link } from "react-router-dom";
import style from "../NavBar/NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";

const NavBar = () => {
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
      <SearchBar />
    </div>
  );
};

export default NavBar;
