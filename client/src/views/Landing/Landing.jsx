import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import style from "./Landing.module.css";

const Landing = () => {
  const navigate = useHistory();
  const goHome = () => {
    navigate.push("/home");
  };
  return (
    <div className={style.Container}>
      <div className={style.Text}>
        <h1>THE NEXT POKEDEX</h1>
        <h2>
          - Idividual project developed by <b>Luis Lillo</b> -
        </h2>
        <img
          src="https://areajugones.sport.es/wp-content/uploads/2020/10/Poke%CC%81mon-logo.png"
          alt=""
        />
      </div>
      <div className={style.ButtonContain}>
        <button onClick={goHome} className={style.Button}>
          <span>Go Home Page</span>
        </button>
      </div>
      <div>
        <img
          src="https://i.pinimg.com/originals/7b/4c/9d/7b4c9dc45cb0532183005c5e8b9d87b8.png"
          alt=""
          className={style.PikaImg}
        />
      </div>
    </div>
  );
};

export default Landing;
