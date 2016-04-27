'use strict';

const opentrialsApi = require('../config').opentrialsApi;

function getOrganisation(organisationId) {
  return opentrialsApi
    .then((client) => client.organisations.get({ id: organisationId }))
    .then((response) => response.obj);
}

module.exports = {
  get: getOrganisation,
};
