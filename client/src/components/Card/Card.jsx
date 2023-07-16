import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { toUperCaseStr } from "../../utils/helper";
import style from "./Card.module.css";

const Card = ({ name, type, image, id }) => {
  const nameUperCase = toUperCaseStr(name);
  // console.log(props.id);
  return (
    <div className={style.Container}>
      <Link to={`/detail/${id}`}>
        <img
          src={image}
          // srcSet="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjfGpoWxmViiuy7T_f8HJ6Qev48doLDrnaDw&usqp=CAU"
          alt="not found"
        />
      </Link>
      <br />
      <span>Nº {id}</span>
      <h2>{nameUperCase}</h2>
      <div>
        {type?.map((e) => {
          return (
            <span key={e.id} className={style.SpanContainer}>
              {e.name}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
