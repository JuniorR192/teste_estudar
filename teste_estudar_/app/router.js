'use strict';

let employeeApiApi = require('./employeeApi');

module.exports = (server) => {
    server.get('/employee', employeeApi.getEmployee);
};