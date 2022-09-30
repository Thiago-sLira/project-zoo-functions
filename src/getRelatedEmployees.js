const data = require('../data/zoo_data');

const { employees } = data;

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
const managers = [stephanieId, olaId, burlId];

function isManager(id) {
  const verify = managers.some((el) => el === id);
  return verify;
}
// console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));
function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const arroz = employees.filter((el) => el.managers.some((elem) => elem === managerId));
  const names = arroz.map((element) => `${element.firstName} ${element.lastName}`);
  return names;
}
// console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0993'));
module.exports = { isManager, getRelatedEmployees };
