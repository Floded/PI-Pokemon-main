import { useState } from "react";
import Card from "../Card/Card";
import style from "./CardsContainer.module.css";
import { useSelector } from "react-redux";

const CardsContainer = (props) => {
  const { pokeName } = props;
  const [current, setCurrent] = useState(0);
  // const [pokeState, setPokeState] = useState([]);

  const pokemon = useSelector((state) => state.pokemon);

  // console.log(pokeName);
  // console.log(pokemon);

  // console.log(pokeState);

  // Paginado ******
  const PaginationPokemon = () => {
    // console.log(obj.name);
    return pokemon.slice(current, current + 12);
    // else pokemon.filter((poke) => console.log(poke.name === obj.name));
  };

  const nextPage = () => {
    if (pokemon.length > current + 12) setCurrent(current + 12);
  };

  const prevPage = () => {
    if (current > 0) {
      setCurrent(current - 12);
    }
  };
  // Paginado *****

  return (
    <div>
      <div>
        <button>
          <span>Asendent</span>
        </button>
        &nbsp;
        <button>
          <span>Desendent</span>
        </button>
      </div>
      <div>
        <button onClick={prevPage}>
          <span>&lt; Prev</span>
        </button>
        &nbsp;
        <button onClick={nextPage}>
          <span>Next &gt;</span>
        </button>
      </div>
      <div className={style.Container}>
        {pokeName.name === undefined ? (
          PaginationPokemon(pokeName).map((poke) => {
            return (
              <Card
                key={poke.id}
                id={poke.id}
                name={poke.name}
                image={poke.image}
                type={poke.types}
              />
            );
          })
        ) : (
          <Card
            key={pokeName.id}
            id={pokeName.id}
            name={pokeName.name}
            image={pokeName.image}
            type={pokeName.types}
          />
        )}
      </div>
    </div>
  );
};

export default CardsContainer;
