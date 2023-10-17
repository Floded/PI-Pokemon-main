import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { toUperCaseStr } from "../../utils/helper";
import style from "./Card.module.css";

const Card = ({ name, type, image, id }) => {
  console.log(name, type, image, id);
  const nameUperCase = toUperCaseStr(name);
  // console.log(props.id);
  return (
    <Link to={`/detail/${id}`} className={style.LinkContainer}>
      <div className={style.Container}>
        <div>
          <span className={style.NumberOfPokemon}>Nº {id}</span>
        </div>
        <div>
          <img src={image} alt="not found" />
        </div>
        <br />

        <div className={style.TypeContainer}>
          {type?.map((e) => {
            const nameType = e.name;
            return (
              <span key={e.id} className={style.SpanContainer}>
                {nameType}
              </span>
            );
          })}
        </div>
        <div>
          <h2 className={style.NameOfPokemon}>{nameUperCase}</h2>
        </div>
      </div>
    </Link>
  );
};

export default Card;
