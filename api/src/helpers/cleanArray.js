const cleanArray = (arr) =>
  arr.map((poke) => {
    return {
      id: poke.id,
      name: poke.name,
      image: poke.sprites.other.dream_world.front_default,
      health: poke.stats[0].base_stat,
      stroke: poke.stats[1].base_stat,
      defending: poke.stats[2].base_stat,
      speed: poke.stats[5].base_stat,
      height: poke.height,
      weight: poke.weight,
      created: false,
    };
  });

const cleanBy = (arr) => {
  return {
    id: arr.id,
    name: arr.name,
    image: arr.sprites.other.dream_world.front_default,
    health: arr.stats[0].base_stat,
    stroke: arr.stats[1].base_stat,
    defending: arr.stats[2].base_stat,
    speed: arr.stats[5].base_stat,
    height: arr.height,
    weight: arr.weight,
    created: false,
  };
};

module.exports = { cleanArray, cleanBy };
