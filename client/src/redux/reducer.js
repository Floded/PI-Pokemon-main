import { GET_ALL_POKEMON, GET_ALL_TYPE, GET_BY_ID } from "./type";

const initialState = {
  pokemon: [],
  types: [],
  pokemonId: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_POKEMON:
      return { ...state, pokemon: payload };
    case GET_ALL_TYPE:
      return { ...state, types: payload };
    case GET_BY_ID:
      return { ...state, pokemonId: payload };
    default:
      return { ...state };
  }
};

export default rootReducer;
