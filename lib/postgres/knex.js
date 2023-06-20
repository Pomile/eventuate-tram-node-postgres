const config = require('./config');
const knex = require('knex') ({
  client: "postgresql",
  connection: config,
  pool: {
    min: 2,
    max: 10,
  }
});

module.exports = knex;