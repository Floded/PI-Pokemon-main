require("dotenv").config();
const { Pokemon, Type } = require("../db");

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
  const isPokemonAlreadyExists = await Pokemon.findOne({
    where: {
      name,
    },
  });

  if (isPokemonAlreadyExists) {
    throw Error("El Pokemon ya Existe en la Pokedex");
  }

  const newPokemon = await Pokemon.create({
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
