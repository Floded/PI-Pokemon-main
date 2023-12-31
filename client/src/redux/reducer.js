import {
  FILTER_BY_SOURCE_TYPE,
  FILTER_BY_TYPE_NAME,
  GET_ALL_POKEMON,
  GET_ALL_TYPE,
  GET_BY_ID,
  GET_BY_NAME,
  GET_OLD_POKEMON,
  POST_CREATE,
} from "./type";

const initialState = {
  pokemon: [],
  oldPokemon: [],
  types: [],
  pokemonId: [],
  pokemonCreated: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_POKEMON:
      return { ...state, pokemon: payload };
    case GET_OLD_POKEMON:
      return { ...state, oldPokemon: payload };
    case GET_ALL_TYPE:
      return { ...state, types: payload };
    case GET_BY_ID:
      return { ...state, pokemonId: payload };
    case GET_BY_NAME:
      return { ...state, pokemon: [payload] };
    case POST_CREATE:
      const pokemons = state.oldPokemon;
      return {
        ...state,
        pokemon: [
          ...pokemons,
          payload,
          /*la api nos podria devolver todos los pokemon o ver la forma de concatenarlo a los pokemon existentes */
        ],
      };
    case FILTER_BY_SOURCE_TYPE:
      return { ...state, pokemon: payload };
    case FILTER_BY_TYPE_NAME:
      return { ...state, pokemon: payload };
    default:
      return { ...state };
  }
};

export default rootReducer;
