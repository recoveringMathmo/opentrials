'use strict';

const opentrialsApi = require('../config').opentrialsApi;

function getPerson(personId) {
  return opentrialsApi
    .then((client) => client.persons.get({ id: personId }))
    .then((response) => response.obj);
}

module.exports = {
  get: getPerson,
};
