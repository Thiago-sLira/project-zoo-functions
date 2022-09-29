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
console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce', 'e8481c1d-42ea-4610-8e11-1752cfc05a46'));

module.exports = getSpeciesByIds;
