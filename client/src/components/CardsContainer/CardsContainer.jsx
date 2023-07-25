import { useState } from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card";
import style from "./CardsContainer.module.css";

const CardsContainer = () => {
  // const [listOfPokemons, setListOfPokemons] = useState([]);
  const [current, setCurrent] = useState(0);

  let listOfPokemons = useSelector((state) => state.pokemon);

  let listOfType = useSelector((state) => state.types);

  const [typeSelect, setTypeSelect] = useState("");

  const onChangeTypeSelect = (event) => {
    const typeId = event.target.value;
    setTypeSelect(typeId);
    filterByType(typeId);
  };

  const filterByType = (Selected) => {
    if (Selected) {
      listOfPokemons.filter(
        (pokemon) => pokemon.name
        // pokemon.types?.map((type) => type.name).includes(Selected)
      );
      // console.log(listOfPokemons);
      // return listOfPokemons;
    }
  };

  // Metodo de ordenamiento por Nombre y ataque
  const [filterSelected, setfilterSelected] = useState(0);
  const [sourceTypeSelected, setSourceTypeSelected] = useState("");

  const onChangeOrderSelect = (event) => {
    const selectedId = Number(event.target.value);
    setfilterSelected(selectedId);
    filterByOrder(selectedId);
  };

  const onSourceTypeChange = (event) => {
    const sourceSelected = event.target.value;
    setSourceTypeSelected(sourceSelected);
    if (sourceSelected !== "") {
      // Tiene que ser distinto de all
      filterByApiOrBdd(sourceSelected);
    } else {
      // restaurar valores como al principio
    }
    //filterByOrder(sourceSelected);
  };

  const filterByOrder = (Selected) => {
    // Seleccione que sean todos
    switch (Selected) {
      case 0:
        // Volver a poner los valores del array inicial
        listOfPokemons.sort((pokemonA, pokemonB) =>
          pokemonA.id > pokemonB.id ? 1 : -1
        );
        break;
      case 1:
        //Ralizar el ordenamiento de A - Z y que se organicen descentendemente
        listOfPokemons.sort((pokemonA, pokemonB) =>
          pokemonA.name > pokemonB.name ? 1 : -1
        );
        break;
      case 2:
        // Ralizar el ordenamiento de Z - A y que se organicen descentendemente
        listOfPokemons.sort((pokemonA, pokemonB) =>
          pokemonA.name < pokemonB.name ? 1 : -1
        );
        break;
      case 3:
        // Realizar el ordenamiento por mayor poder de ataque
        listOfPokemons.sort((pokemonA, pokemonB) =>
          pokemonA.stroke < pokemonB.stroke ? 1 : -1
        );
        break;
      case 4:
        listOfPokemons.sort((pokemonA, pokemonB) =>
          pokemonA.stroke > pokemonB.stroke ? 1 : -1
        );
        break;
    }
  };

  const filterByApiOrBdd = (sourceSelected) => {
    switch (sourceSelected) {
      case "api":
        listOfPokemons = listOfPokemons = listOfPokemons.filter(
          (pokemonA) => pokemonA.created === false
        );
        // console.log(listOfPokemons);
        break;
      case "bdd":
        listOfPokemons = listOfPokemons = listOfPokemons.filter(
          (pokemonA) => pokemonA.created === true
        );
        // console.log(listOfPokemons);
        break;
      default:
        // Restaurar a los valores inciales
        break;
    }
  };

  // Paginado ******
  const PaginationPokemon = (type) => {
    if (type.length > 0) {
      // Limpiamos el array de elementos repetidos
      const typeClear = new Set(type);
      let result = [...typeClear];

      // Retornamos dicho array limpio
      return result.slice(current, current + 12);
    }
    // Si no hay filtros retornamos el array global
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

  // Paginado *****

  return (
    <div>
      <div className={style.filterContainer}>
        <div className={style.OrderContainer}>
          <label>Order by : </label>
          <select value={filterSelected} onChange={onChangeOrderSelect}>
            <option value={0}>All</option>
            <option value={1}>Ascendent</option>
            <option value={2}>Descendent</option>
            <option value={3}>Atack +</option>
            <option value={4}>Atack -</option>
          </select>
          <br />
        </div>
        <div className={style.OrderContainer}>
          <label>Source Type: </label>
          <select value={sourceTypeSelected} onChange={onSourceTypeChange}>
            <option value={""}>ALL</option>
            <option value={"api"}>API</option>
            <option value={"bdd"}>BDD</option>
          </select>
          <br />
        </div>
        <div className={style.TypeOrder}>
          <div className={style.FilterTypeContainer}>
            <label>Filter by </label>
            <select value={typeSelect} onChange={onChangeTypeSelect}>
              <option value={"all"}>All</option>
              {listOfType.map((type) => {
                return (
                  <option value={type.name} key={type.id}>
                    {type.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>
      {listOfPokemons.length >= 12 ? (
        <div className={style.NextPrevButon}>
          <button onClick={prevPage} className={style.ButtonPrev}>
            <span>&lt; Prev</span>
          </button>
          &nbsp;
          <button onClick={nextPage} className={style.ButtonNext}>
            <span>Next &gt;</span>
          </button>
        </div>
      ) : undefined}
      <div className={style.Container}>
        {listOfPokemons.length < 12
          ? listOfPokemons.map((pokemon) => {
              return (
                <Card
                  key={pokemon.id}
                  id={pokemon.id}
                  name={pokemon.name}
                  image={pokemon.image}
                  type={pokemon.types}
                />
              );
            })
          : PaginationPokemon(listOfPokemons).map((poke) => {
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
    </div>
  );
};

export default CardsContainer;
