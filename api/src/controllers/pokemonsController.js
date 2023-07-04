require("dotenv").config();
const axios = require("axios");
const { Op } = require("sequelize");
const { cleanArray, cleanBy, cleanRes } = require("../helpers/cleanArray");
const { END_POINT } = process.env;
const { Pokemon, Type } = require("../db");

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

  const bddPokemon = await Pokemon.findAll({
    include: [
      {
        model: Type,
        attributes: ["id", "name"],
      },
    ],
  });
  // console.log(bddPokemon);
  return [...apiPokemon, ...bddPokemon];
};

const searchPokemonByName = async (name) => {
  const lowerName = name.toLowerCase();
  const bddPokemon = await Pokemon.findOne({
    where: { name: lowerName },
    include: {
      model: Type,
      attributes: ["id", "name"],
    },
  });

  if (bddPokemon) {
    const res = bddPokemon.dataValues;
    const bddRes = cleanRes(res);
    console.log(bddRes);
    return bddRes;
  } else {
    const findPokemon = (
      await axios.get(`https://pokeapi.co/api/v2/pokemon/${lowerName}`)
    ).data;
    const apiPokemon = cleanBy(findPokemon);
    return apiPokemon;
  }
  // return apiPokemon;
};

const searchPokemonById = async (id, search) => {
  if (search === "API") {
    const apiResponse = (
      await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    ).data;
    const apiRes = cleanBy(apiResponse);
    return apiRes;
  } else {
    const bddResponse = await Pokemon.findOne({
      where: { id: id },
      include: {
        model: Type,
        attributes: ["id", "name"],
      },
    });
    const res = bddResponse.dataValues;
    const bddRes = cleanRes(res);
    // console.log(bddRes);
    return bddRes;
  }
};

module.exports = { searchAllPokemons, searchPokemonByName, searchPokemonById };
