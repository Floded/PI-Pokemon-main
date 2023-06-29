require("dotenv").config();
const {
  searchAllPokemons,
  searchPokemonByName,
  searchPokemonById,
} = require("../controllers/pokemonsController");
const { responseMaper } = require("../helpers/responseMaper");

const getAllPokeHandler = async (req, res) => {
  try {
    const { name } = req.query;
    // console.log(name);
    const result = name
      ? await searchPokemonByName(name)
      : await searchAllPokemons();
    // console.log(result);
    res
      .status(200)
      .json(
        responseMaper(false, "Aqui estan los Pokemons solicitados", result)
      );
  } catch (error) {
    const { name } = req.query;
    res
      .status(404)
      .json(responseMaper(true, `El Pokemon ${name} no existe`, null));
  }
};

const getPokemonById = async (req, res) => {
  try {
    const { id } = req.params;
    const search = isNaN(id) ? "BDD" : "API";
    const findId = await searchPokemonById(id, search);
    // console.log(findId);
    res
      .status(200)
      .json(
        responseMaper(false, `Pokemon encontrado con el id: ${id}`, findId)
      );
  } catch (error) {
    res.status(503).json(responseMaper(true, "Not found", null));
  }
};

module.exports = { getAllPokeHandler, getPokemonById };
