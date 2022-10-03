const data = require('../data/zoo_data');

const { prices } = data;

const entradas = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

function countEntrants(entrants) {
  const obj = {};
  const children = entrants.filter((element) => element.age < 18).length;
  obj.child = children;
  const adults = entrants.filter((element) => element.age >= 18 && element.age < 50).length;
  obj.adult = adults;
  const seniors = entrants.filter((element) => element.age >= 50).length;
  obj.senior = seniors;
  return obj;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const countedEntrants = countEntrants(entrants);
  const somaChild = countedEntrants.child * prices.child;
  const somaAdults = countedEntrants.adult * prices.adult;
  const somaSenior = countedEntrants.senior * prices.senior;
  const somaTotal = somaChild + somaAdults + somaSenior;
  return somaTotal;
}

console.log(calculateEntry(entradas));
module.exports = { calculateEntry, countEntrants };
