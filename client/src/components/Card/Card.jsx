import style from "./Card.module.css";

const Card = (props) => {
  let type = props.type.map((e) => e.name);
  let typeString = type.join(" / ");
  return (
    <div className={style.Container}>
      <img src={props.image} alt={props.name} />
      <br />
      <span>Nº {props.id}</span>
      <h2>{props.name}</h2>
      <h3>{typeString}</h3>
    </div>
  );
};

export default Card;
