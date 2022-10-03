const data = require('../data/zoo_data');

const { species, employees } = data;

function getOldestFromFirstSpecies(id) {
  const employee = employees.find((element) => element.id === id);
  const firstSpecie = employee.responsibleFor[0];
  const findAnimal = species.find((element) => element.id === firstSpecie);
  const findOldest = findAnimal.residents.map((element) => element.age);
  const maxNumber = Math.max.apply(null, findOldest);
  const returnOldest = findAnimal.residents.find((element) => element.age === maxNumber);
  return Object.values(returnOldest);
}

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
module.exports = getOldestFromFirstSpecies;
