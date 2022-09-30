const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  const obj = {};
  if (!animal) {
    species.forEach((nm) => {
      obj[nm.name] = nm.residents.length;
    });
    return obj;
  } if (!animal.sex) {
    const filter = species.find((el) => el.name === animal.specie).residents.length;
    return filter;
  }
  const find = species.find((el) => el.name === animal.specie);
  const filter = find.residents.filter((element) => element.sex === animal.sex).length;
  return filter;
}

console.log(countAnimals({ specie: 'elephants', sex: 'male' }));
module.exports = countAnimals;
