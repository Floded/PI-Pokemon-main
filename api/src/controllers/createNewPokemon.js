require("dotenv").config();
const { Pokemon, Type } = require("../db");
const { searchAllPokemons } = require("./pokemonsController");
const { findTypes } = require("./typeController");

const createNewPokemon = async (
  name,
  image,
  health,
  stroke,
  defending,
  speed,
  height,
  weight,
  type
) => {
  const allPokemon = await searchAllPokemons();

  const isPokemonAlreadyExists = allPokemon.find(
    (pokemon) => pokemon.name === name
  );

  if (isPokemonAlreadyExists) {
    throw Error("El Pokemon ya Existe en la Pokedex");
  }

  const id = allPokemon[allPokemon.length - 1].id + 1;

  const newPokemon = await Pokemon.create({
    id,
    name,
    image,
    health,
    stroke,
    defending,
    speed,
    height,
    weight,
  });
  await newPokemon.setTypes(type);
  let integradePokemon = await Pokemon.findAll({
    where: {
      name: name,
    },
    include: [
      {
        model: Type,
        attributes: ["id", "name"],
      },
    ],
  });

  return integradePokemon;
};

module.exports = { createNewPokemon };
