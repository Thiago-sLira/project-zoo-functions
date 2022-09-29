const data = require('../data/zoo_data');

const { species } = data;

function getSpeciesByIds(...ids) {
  // console.log(typeof ids);
  const id = species.filter((element) => {
    const value = ids.some((value2) => element.id === value2);
    return value;
  });
  return id;
}

module.exports = getSpeciesByIds;
