import style from "./Card.module.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { toUperCaseStr } from "../../utils/helper";

const Card = ({ name, type, image, id }) => {
  const nameUperCase = toUperCaseStr(name);
  // console.log(props.id);
  return (
    <div className={style.Container}>
      <Link to={`/detail/${id}`}>
        <img src={image} alt={name} />
      </Link>
      <br />
      <span>Nº {id}</span>
      <h2>{nameUperCase}</h2>
      <div>
        {type?.map((e) => {
          return <span key={e.id}> {e.name} </span>;
        })}
      </div>
    </div>
  );
};

export default Card;
