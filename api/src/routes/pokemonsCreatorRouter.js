const { Router } = require("express");
const { createPokemonsHandler } = require("../handlers/createPokemonHandler");

const createPokemonRouter = Router();

createPokemonRouter.post("/", createPokemonsHandler);

module.exports = { createPokemonRouter };
