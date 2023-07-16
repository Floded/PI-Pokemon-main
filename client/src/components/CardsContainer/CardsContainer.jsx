import { useState } from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card";
import style from "./CardsContainer.module.css";

const CardsContainer = (props) => {
  const { pokeName } = props;
  const [current, setCurrent] = useState(0);
  const [filterTypeSelected, setFilterTypeSelected] = useState(0);
  // const [oldListPokemons, setoldListPokemons] = useState([]);

  let listOfPokemons = useSelector((state) => state.pokemon);

  let listOldPokemon = useSelector((state) => state.oldPokemon);

  // Paginado ******
  const PaginationPokemon = () => {
    return listOfPokemons.slice(current, current + 12);
  };

  const nextPage = () => {
    if (listOfPokemons.length > current + 12) setCurrent(current + 12);
  };

  const prevPage = () => {
    if (current > 0) {
      setCurrent(current - 12);
    }
  };

  const onChangeTypeSelector = (evt) => {
    const typeSelectedId = Number(evt.target.value);
    setFilterTypeSelected(typeSelectedId);
    filterByTypeSelected(typeSelectedId);
  };

  const filterByTypeSelected = (typeSelected) => {
    // Seleccione que sean todos
    // if (typeSelected === 0) {
    //   // Volver a poner los valores del array inicial
    //   const noOrder = listOldPokemon;
    //   console.log(noOrder);
    //   return noOrder;
    // }
    // Seleccione que sean Ascendentes
    if (typeSelected === 1) {
      // Realizar el filtrado por el tipo y que se organicen ascendentemente
      listOfPokemons.sort((pokemonA, pokemonB) =>
        pokemonA.name > pokemonB.name ? 1 : -1
      );
    }

    // Seleccione que sean Descendentes
    if (typeSelected === 2) {
      // Ralizar el filtrado por el tipo y que se orvanicen descentendemente
      listOfPokemons = listOfPokemons.sort((pokemonA, pokemonB) =>
        pokemonA.name < pokemonB.name ? 1 : -1
      );
    }
  };

  console.log(listOldPokemon);

  // Paginado *****

  return (
    <div>
      <div className={style.filterContainer}>
        <div>
          <label>Ordernar: </label>
          <select value={filterTypeSelected} onChange={onChangeTypeSelector}>
            <option value={0}>Todos</option>
            <option value={1}>Ascendente</option>
            <option value={2}>Descendente</option>
          </select>
        </div>
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
