import axios from "axios";
import { GET_ALL_POKEMON, GET_ALL_TYPE, GET_BY_ID } from "./type";

export const getAllPokemon = () => {
  return async function (dispatch) {
    const data = await axios.get("http://localhost:3001/pokemons");
    const pokemon = data.data.data;
    dispatch({ type: GET_ALL_POKEMON, payload: pokemon });
  };
};

export const getType = () => {
  return async function (dispatch) {
    const typeData = await axios.get("http://localhost:3001/type");
    const types = typeData.data.data;
    dispatch({ type: GET_ALL_TYPE, payload: types });
  };
};

export const getById = (id) => {
  return async function (dispatch) {
    const pokeData = await axios.get(`http://localhost:3001/pokemons/${id}`);
    const data = pokeData.data.data;
    return { type: GET_BY_ID, payload: data };
  };
};
