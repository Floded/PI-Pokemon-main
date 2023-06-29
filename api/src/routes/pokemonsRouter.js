const { Router } = require("express");
const {
  getAllPokeHandler,
  getPokemonById,
} = require("../handlers/getAllPokemonsHandler");
// Aqui redirigimos al Handler adecuado para cada peticion:
// const pokemonsRouter = () => {
//   console.log("entre al poke router");
// };
const pokemonsRouter = Router();

pokemonsRouter.get("/", getAllPokeHandler);
pokemonsRouter.get("/:id", getPokemonById);
// pokemonsRouter.get("/types");

module.exports = pokemonsRouter;
