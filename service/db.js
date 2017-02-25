const pgPromise = require('pg-Promise');

const pg = pgPromise();

const databaseURL = 'postgres://Nferner:@localhost:5432/farmers_service_development';

const db = pg(databaseURL);

module.exports = db;
