const { ensureEnvVariables } = require('../env');

const [ host, port, user, password, database ] = ensureEnvVariables([
  'EVENTUATE_TRAM_POSTGRES_HOST',
  'EVENTUATE_TRAM_POSTGRES_PORT',
  'EVENTUATE_TRAM_POSTGRES_USERNAME',
  'EVENTUATE_TRAM_POSTGRES_PASSWORD',
  'EVENTUATE_TRAM_POSTGRES_DATABASE'
]);

module.exports = { host, port, user, password, database };
