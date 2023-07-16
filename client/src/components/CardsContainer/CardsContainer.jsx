import { useState } from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card";
import style from "./CardsContainer.module.css";

const CardsContainer = (props) => {
  const { pokeName } = props;
  const [current, setCurrent] = useState(0);
  const [filterSelected, setfilterSelected] = useState(0);
  const [filterTypeSelected, setFilterTypeSelected] = useState(0);

  let listOfPokemons = useSelector((state) => state.pokemon);

  let listOfType = useSelector((state) => state.types);

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

  const onChangeNameAndAtackSelected = (event) => {
    const selectedId = Number(event.target.value);
    setfilterSelected(selectedId);
    filterByNameAndAtackSelected(selectedId);
  };

  const onChangeTypeSelected = (event) => {
    const typeSelectedId = event.target.value;
    const typeSelectedStr = typeSelectedId.toString();
    console.log(typeSelectedStr);
    setFilterTypeSelected(typeSelectedStr);
    filterByTypeSelected(typeSelectedStr);
  };

  // Metodo de ordenamiento por Nombre y ataque

  const filterByNameAndAtackSelected = (Selected) => {
    // Seleccione que sean todos
    if (Selected === 0) {
      // Volver a poner los valores del array inicial
      listOfPokemons.sort((pokemonA, pokemonB) =>
        pokemonA.id > pokemonB.id ? 1 : -1
      );
    }
    // Seleccione que sean Ascendentes
    if (Selected === 1) {
      //Ralizar el ordenamiento de A - Z y que se organicen descentendemente
      listOfPokemons.sort((pokemonA, pokemonB) =>
        pokemonA.name > pokemonB.name ? 1 : -1
      );
    }

    // Seleccione que sean Descendentes
    if (Selected === 2) {
      // Ralizar el ordenamiento de Z - A y que se organicen descentendemente
      listOfPokemons = listOfPokemons.sort((pokemonA, pokemonB) =>
        pokemonA.name < pokemonB.name ? 1 : -1
      );
    }

    //Seleccione que posean mas poder de ataque
    if (Selected === 3) {
      // Realizar el ordenamiento por mayor poder de ataque
      listOfPokemons = listOfPokemons.sort((pokemonA, pokemonB) =>
        pokemonA.stroke < pokemonB.stroke ? 1 : -1
      );
    }
    if (Selected === 4) {
      listOfPokemons = listOfPokemons.sort((pokemonA, pokemonB) =>
        pokemonA.stroke > pokemonB.stroke ? 1 : -1
      );
    }
  };

  const filterByTypeSelected = (typeSelected) => {
    const normal = listOfPokemons?.filter(
      (pokemon) => pokemon.types[0].name === typeSelected
    );
    console.log(normal);
    return normal;
  };

  // Paginado *****

  return (
    <div>
      <div className={style.filterContainer}>
        <div>
          <label>Order by : </label>
          <select
            value={filterSelected}
            onChange={onChangeNameAndAtackSelected}
          >
            <option value={0}>All</option>
            <option value={1}>Ascendent</option>
            <option value={2}>Descendent</option>
            <option value={3}>Atack +</option>
            <option value={4}>Atack -</option>
          </select>
          <br />
          <label> Order by Type : </label>
          <select value={filterTypeSelected} onChange={onChangeTypeSelected}>
            <option value={0}>All </option>
            {listOfType.map((type) => (
              <option key={type.id} value={type.name}>
                {type.name}
              </option>
            ))}
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
