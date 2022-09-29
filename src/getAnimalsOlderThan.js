const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  const beast = species.find((element) => element.name === animal);
  const idade = beast.residents.every((number) => number.age >= age);
  return idade;
}
console.log(getAnimalsOlderThan('lions', 10));

module.exports = getAnimalsOlderThan;
