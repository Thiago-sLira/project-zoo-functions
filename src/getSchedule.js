const data = require('../data/zoo_data');

const { species, hours } = data;

const weekDays = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];
const allAnimals = species.map((objAnimals) => objAnimals.name);
// console.log(allAnimals);

const animalSchedule = (scheduleTarget) => {
  const getAnimal = species.find((element) => element.name === scheduleTarget);
  return getAnimal.availability;
};

const getDays = (day) => {
  const filter = species.filter((animalObject) => animalObject.availability.includes(day))
    .map(({ name }) => name);
  return filter;
};

const emptyParam = () => {
  const obj = {};
  weekDays.forEach((day) => {
    if (day === 'Monday') {
      obj[day] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    } else {
      obj[day] = {
        officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
        exhibition: getDays(day),
      };
    }
  });
  return obj;
};

function getSchedule(scheduleTarget) {
  if (weekDays.includes(scheduleTarget)) return { [scheduleTarget]: emptyParam()[scheduleTarget] };
  if (allAnimals.includes(scheduleTarget)) return animalSchedule(scheduleTarget);
  return emptyParam();
}

// console.log(emptyParam().Monday);
console.log(getSchedule('Monday'));
module.exports = getSchedule;
