import Card from "../Card/Card";
import style from "./CardsContainer.module.css";
import { useSelector } from "react-redux";

const CardsContainer = () => {
  const pokemon = useSelector((state) => state.pokemon);
  // console.log(pokemon);
  return (
    <div className={style.Container}>
      {pokemon.map((poke) => {
        return (
          <Card
            key={poke.id}
            id={poke.id}
            name={poke.name}
            image={poke.image}
            type={poke.types}
          />
        );
      })}
    </div>
  );
};

export default CardsContainer;
