import { GET_ALL_POKEMON, GET_ALL_TYPE, GET_BY_ID, GET_BY_NAME } from "./type";

const initialState = {
  pokemon: [],
  types: [],
  pokemonId: [],
  pokemonName: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_POKEMON:
      return { ...state, pokemon: payload };
    case GET_ALL_TYPE:
      return { ...state, types: payload };
    case GET_BY_ID:
      return { ...state, pokemonId: payload };
    case GET_BY_NAME:
      return { ...state, pokemonName: payload };
    default:
      return { ...state };
  }
};

export default rootReducer;
