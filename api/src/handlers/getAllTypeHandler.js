const { responseMaper } = require("../helpers/responseMaper");
const { findTypes } = require("../controllers/typeController");

const getAllTypeHandler = async (req, res) => {
  try {
    const allType = await findTypes();
    res
      .status(200)
      .json(
        responseMaper(false, "Estos son todos los tipo de Pokemon", allType)
      );
  } catch (error) {
    res.status(500).json(responseMaper(true, "Not found", null));
  }
};

module.exports = { getAllTypeHandler };
