const axios = require("axios");
const { Type } = require("../db");

const findTypes = async () => {
  const res = (await axios.get("https://pokeapi.co/api/v2/type")).data.results;
  let allTypes = [];
  for (let i = 0; i < res.length; i++) {
    let resId = res[i].url;
    let id = resId.split("/")[6];
    await Type.findOrCreate({
      where: { id: id, name: res[i].name },
    });
  }
  allTypes = await Type.findAll();
  return allTypes;
};

module.exports = { findTypes };
