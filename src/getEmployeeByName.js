const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  const el = employees.find((em) => em.firstName === employeeName || em.lastName === employeeName);
  if (employeeName === undefined) return {};
  return el;
}
console.log(getEmployeeByName('Nigel'));

module.exports = getEmployeeByName;
