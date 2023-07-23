import axios from "axios";
import {
  GET_ALL_POKEMON,
  GET_ALL_TYPE,
  GET_BY_ID,
  GET_BY_NAME,
  GET_OLD_POKEMON,
  POST_CREATE,
} from "./type";

export const getAllPokemon = () => {
  return async function (dispatch) {
    const data = await axios.get("http://localhost:3001/pokemons");
    const pokemon = data.data.data;
    dispatch({ type: GET_ALL_POKEMON, payload: pokemon });
  };
};

export const getOldPokemon = () => {
  return async function (dispatch) {
    const data = await axios.get("http://localhost:3001/pokemons");
    const pokemon = data.data.data;
    dispatch({ type: GET_OLD_POKEMON, payload: pokemon });
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
    dispatch({ type: GET_BY_ID, payload: data });
  };
};

export const getByName = (name) => {
  return async function (dispatch) {
    const nameData = await axios.get(
      `http://localhost:3001/pokemons?name=${name}`
    );
    const data = nameData.data.data;

    dispatch({ type: GET_BY_NAME, payload: data });
  };
};

export const postCreate = (form) => {
  return async function (dispatch) {
    console.log(form);
    const res = await axios.post("http://localhost:3001/pokemons/", form);
    console.log(res.data);
    dispatch({ type: POST_CREATE, payload: res });
  };
};
