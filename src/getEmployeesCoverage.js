const data = require('../data/zoo_data');

const { species, employees } = data;

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

function getEmployeesCoverage(param = { validate: true }) {
  if (param.validate) return managerEmpty();
  if (param.name) return managerName(param);
  if (param.id) return managerId(param);
}

module.exports = getEmployeesCoverage;
