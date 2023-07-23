import { useState } from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card";
import style from "./CardsContainer.module.css";

const CardsContainer = () => {
  // console.log(searchPokemonByName.name === "" ? "vacio" : "pokemon");
  const [current, setCurrent] = useState(0);

  let listOfPokemons = useSelector((state) => state.pokemon);

  let listOfType = useSelector((state) => state.types);

  // filter function
  // Seteamos un estado para guardar los resultados
  const [filterPokeType, setFilterPokeType] = useState([]);
  // Seteamos otro estado para manejar los checkbox
  const [typeSelected, setTypeSelected] = useState({
    grass: false,
    normal: false,
    fighting: false,
    flying: false,
    poison: false,
    ground: false,
    rock: false,
    bug: false,
    ghost: false,
    steel: false,
    fire: false,
    water: false,
    electric: false,
    psychic: false,
    ice: false,
    dragon: false,
    dark: false,
    fairy: false,
    unknow: false,
    shadow: false,
    bdd: false,
    api: false,
  });

  // fn() de filtrado
  const handleTypeCheck = (event) => {
    // console.log(event.target.name);
    // cambia el parametro del estado selecionado a true
    setTypeSelected({
      ...typeSelected,
      [event.target.name]: event.target.checked,
    });
    // Si este es true iniciamos la logica
    // Filtrado por API
    if (event.target.name === "api") {
      const filteredPokemons = listOfPokemons.filter(
        (pokemon) => pokemon.created
      );
      setFilterPokeType([...filterPokeType, ...filteredPokemons]);
      console.log(filteredPokemons);
    }

    // Filtrado por BDD
    // if (event.target.name === "bdd") {
    //   const filteredPokemons = listOfPokemons.filter(
    //     (pokemon) => pokemon.created === true
    //   );
    //   console.log(filteredPokemons);
    //   setFilterPokeType([...filterPokeType, ...filteredPokemons]);
    // }
    // if (event.target.checked) {
    //   const filteredPokemons = listOfPokemons?.filter((poke) =>
    //     poke.types?.map((type) => type.name).includes(event.target.name)
    //   );
    //   console.log(filteredPokemons);
    //   setFilterPokeType([...filterPokeType, ...filteredPokemons]);
    // }

    // de lo contrario
    else {
      const filteredPokemons = filterPokeType?.filter(
        (poke) =>
          !poke.types?.map((type) => type.name).includes(event.target.name)
      );
      // console.log(filteredPokemons);
      setFilterPokeType([...filteredPokemons]);
    }
  };

  // Metodo de ordenamiento por Nombre y ataque
  const [filterSelected, setfilterSelected] = useState(0);

  const onChangeNameAndAtackSelected = (event) => {
    const selectedId = Number(event.target.value);
    setfilterSelected(selectedId);
    filterByNameAndAtackSelected(selectedId);
  };

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

  console.log(filterPokeType);
  // Paginado ******
  const PaginationPokemon = (type) => {
    console.log(type);
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
        </div>
        <div className={style.TypeOrder}>
          <div className={style.FilterTypeContainer}>
            {/* <button>Abrir</button> */}
            <span>Filter by </span>
            {listOfType.map((type) => {
              return (
                <div key={type.id} className={style.GroupType}>
                  <input
                    type="checkbox"
                    name={type.name}
                    id={type.id}
                    onChange={handleTypeCheck}
                  />
                  <label htmlFor={type.name}>{type.name}</label>
                </div>
              );
            })}
            <div className={style.GroupType}>
              <input
                type="checkbox"
                name="bdd"
                id="BDD"
                onChange={handleTypeCheck}
              />
              <label htmlFor="BDD">BDD</label>
            </div>
            <div className={style.GroupType}>
              <input
                type="checkbox"
                name="api"
                id="API"
                onChange={handleTypeCheck}
              />
              <label htmlFor="API">API</label>
            </div>
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
          : PaginationPokemon(filterPokeType).map((poke) => {
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
