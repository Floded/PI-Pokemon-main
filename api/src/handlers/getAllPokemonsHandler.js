require("dotenv").config();
const { createNewPokemon } = require("../controllers/createNewPokemon");
const {
  searchAllPokemons,
  searchPokemonByName,
  searchPokemonById,
} = require("../controllers/pokemonsController");

const { responseMaper } = require("../helpers/responseMaper");

const getAllPokeHandler = async (req, res) => {
  try {
    const { name } = req.query;

    // console.log(lowerName);
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
    const lowerName = name?.toLowerCase();
    console.log(lowerName);
    res
      .status(404)
      .json(responseMaper(true, `El Pokemon ${name} no existe`, null));
  }
};

const getPokemonByIdHandler = async (req, res) => {
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

const createPokemonhandler = async (req, res) => {
  try {
    const {
      name,
      image,
      health,
      stroke,
      defending,
      speed,
      height,
      weight,
      type,
    } = req.body;
    // console.log(req.body);
    if (
      !name ||
      !image ||
      !health ||
      !stroke ||
      !defending ||
      !speed ||
      !height ||
      !weight ||
      !type
    ) {
      res
        .status(400)
        .json(responseMaper(true, "completa todos los campos", null));
    }

    const newPokemon = await createNewPokemon(
      name,
      image,
      health,
      stroke,
      defending,
      speed,
      height,
      weight,
      type
    );
    console.log(newPokemon);
    res
      .status(200)
      .json(
        responseMaper(
          false,
          `El pokemon ${name} se ha creado con exito`,
          newPokemon
        )
      );
  } catch (error) {
    const { name } = req.body;
    res
      .status(500)
      .json(
        responseMaper(true, `El Pokemon: ${name} ya existe en la Pokedex`, null)
      );
  }
};

module.exports = {
  getAllPokeHandler,
  getPokemonByIdHandler,
  createPokemonhandler,
};
