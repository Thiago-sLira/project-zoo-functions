const data = require('../data/zoo_data');

const { species, employees } = data;

// {
// id: "4b40a139-d4dc-4f09-822d-ec25e819a5ad", // id da pessoa
// fullName: "Sharonda Spry", // nome completo: firstName + lastName
// species: [ "otters", "frogs" ], // espécies as quais a pessoa é responsável
// locations: [ "SE", "SW" ], // Um array contendo todas as localizações das espécies
// }

const getLocations = (arrayAnimals, description) => {
  const filter = species.filter(({ id }) => arrayAnimals.includes(id))
    .map((objAnimal) => objAnimal[description]);
  return filter;
};

const managerName = (param) => {
  const employee = employees.find((person) => person.firstName.includes(param.name)
    || person.lastName.includes(param.name));
  const obj = {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: getLocations(employee.responsibleFor, 'name'),
    locations: getLocations(employee.responsibleFor, 'location'),
  };
  return obj;
};

const managerId = (param) => {
  const employee = employees.find((person) => person.id.includes(param.id));
  if (!employee) throw new Error('Informações inválidas');
  const obj = {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: getLocations(employee.responsibleFor, 'name'),
    locations: getLocations(employee.responsibleFor, 'location'),
  };
  return obj;
};

const managerEmpty = () => employees.map((objEmployee) => managerId(objEmployee));
// console.log(paramEmpty());

function getEmployeesCoverage(param = { validate: true }) {
  if (param.validate) return managerEmpty();
  if (param.name) return managerName(param);
  if (param.id) return managerId(param);
}

// console.log(getEmployeesCoverage({ id: 'c1f50212-35a6-4ecd-8223-f835538526c2' }));
// firstname = { name: 'Sharonda' }
// lastname = { name: 'Spry' }
// id = { id: 'c1f50212-35a6-4ecd-8223-f835538526c2' }
module.exports = getEmployeesCoverage;
