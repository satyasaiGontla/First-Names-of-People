const getPeople = require("../country/state/city/index");
const getFirstName = require("../utilities/utils/index");

const getPeopleInCity = (getPeople) => {
  return getFirstName(getPeople);
};
module.exports = getPeopleInCity;
