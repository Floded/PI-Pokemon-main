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
  // console.log(name, image, health, stroke, defending, speed, height, weight);
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
    // include: Type,
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
  // console.log(integradePokemon);
  return integradePokemon;
};

module.exports = { createNewPokemon };
