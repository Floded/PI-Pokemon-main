import style from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={style.Container}>
      <div>
        <input type="text" placeholder="Search Name" />
      </div>
      <button>
        <span>Buscar</span>
      </button>
    </div>
  );
};

export default SearchBar;
