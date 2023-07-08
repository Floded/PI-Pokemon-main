import SearchBar from "../SearchBar/SearchBar";
import style from "../NavBar/NavBar.module.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={style.Container}>
      <Link to="/home">HOME</Link>
      <Link to="/create">FORM</Link>
      <SearchBar />
    </div>
  );
};

export default NavBar;
