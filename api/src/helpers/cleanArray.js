const cleanArray = (arr) =>
  arr.map((poke) => {
    // console.log(poke.types);
    const type = poke.types.map((e) => {
      let id = e.type.url.split("/")[6];
      return {
        id,
        name: e.type.name,
      };
    });
    // console.log(type);
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
      types: type,
      created: false,
    };
  });

const cleanBy = (arr) => {
  // console.log(arr);
  const type = arr.types.map((e) => {
    let id = e.type.url.split("/")[6];
    return {
      id,
      name: e.type.name,
    };
  });

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
    types: type,
    created: false,
  };
};

const cleanRes = (arr) => {
  // console.log(arr);
  return {
    id: arr.id,
    name: arr.name,
    image: arr.image,
    health: arr.health,
    stroke: arr.stroke,
    defending: arr.defending,
    speed: arr.speed,
    height: arr.height,
    weight: arr.weight,
    types: arr.Types,
  };
};

module.exports = { cleanArray, cleanBy, cleanRes };
