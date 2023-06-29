const { Pokemon } = require("../db");

const createNewPokemon = () => {
  const newPokemon = Pokemon.create();
  return newPokemon;
};
