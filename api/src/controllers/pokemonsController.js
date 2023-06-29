require("dotenv").config();
const axios = require("axios");
const { Op } = require("sequelize");
const { cleanArray, cleanBy } = require("../helpers/cleanArray");
const { END_POINT } = process.env;
const { Pokemon } = require("../db");

// Busca todos los pokemons desde bdd y api

const searchAllPokemons = async () => {
  // API

  const res = (await axios.get(END_POINT)).data.results;
  const resPromises = res.map(async (pokemon) => {
    const res = (await axios.get(pokemon.url)).data;
    return res;
  });
  const results = await Promise.all(resPromises);
  const apiPokemon = cleanArray(results); // Aqui deberia ir el arreglo completo para mapearlo

  // BDD

  const bddPokemon = await Pokemon.findAll();
  return [...apiPokemon, ...bddPokemon];
};

const searchPokemonByName = async (name) => {
  // API
  const findPokemon = (
    await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
  ).data;
  const apiPokemon = cleanBy(findPokemon);
  // BDD
  const bddPokemon = await await Pokemon.findAll({
    where: { name: { [Op.like]: `${name}%` } },
  });
  // Uniendo API y BDD
  return [apiPokemon, bddPokemon];
};

const searchPokemonById = async (id, search) => {
  const flag =
    search === "API"
      ? (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)).data
      : await Pokemon.findByPk(id);
  const result = cleanBy(flag);
  return result;
};

module.exports = { searchAllPokemons, searchPokemonByName, searchPokemonById };
