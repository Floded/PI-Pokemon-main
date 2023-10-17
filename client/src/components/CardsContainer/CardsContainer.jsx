import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterBySourceType, filterByTypeName } from "../../redux/actions";
import Card from "../Card/Card";
import style from "./CardsContainer.module.css";

const CardsContainer = () => {
  const [current, setCurrent] = useState(0);
  const [filterSelected, setfilterSelected] = useState(0);
  const [sourceTypeSelected, setSourceTypeSelected] = useState("");
  const [typeSelect, setTypeSelect] = useState("");

  const dispatch = useDispatch();

  let listOfPokemons = useSelector((state) => state.pokemon);
  console.log(listOfPokemons);
  let oldPokemon = useSelector((state) => state.oldPokemon);
  let listOfType = useSelector((state) => state.types);

  const onChangeTypeSelect = (event) => {
    const typeName = event.target.value;
    setTypeSelect(typeName);
    // Call method to handle filter data
    filterByType(typeName);
  };

  // This method is for handle filter by type selected
  const filterByType = (typeName) => {
    if (typeName === "all") {
      // TODO: restaurar valor inicial del array
      dispatch(filterByTypeName(oldPokemon));
    } else {
      // Enviar el valor filtrado al dispatch
      const filterList = oldPokemon.filter((pokemon) =>
        pokemon.types?.map((type) => type.name).includes(typeName)
      );
      dispatch(filterByTypeName(filterList));
    }
  };

  const onChangeOrderSelect = (event) => {
    const selectedId = Number(event.target.value);
    setfilterSelected(selectedId);
    filterByOrder(selectedId);
  };

  const onSourceTypeChange = (event) => {
    const sourceSelected = event.target.value;
    setSourceTypeSelected(sourceSelected);

    if (sourceSelected !== "") {
      filterByApiOrBdd(sourceSelected);
    } else {
      dispatch(filterBySourceType(oldPokemon));
    }
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
        const apiList = oldPokemon.filter(
          (pokemonA) => pokemonA.created === false
        );
        dispatch(filterBySourceType(apiList));
        break;
      case "bdd":
        const bddList = oldPokemon.filter(
          (pokemonA) => pokemonA.created === true
        );
        dispatch(filterBySourceType(bddList));
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
