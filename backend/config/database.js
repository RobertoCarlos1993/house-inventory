const env = process.env.NODE_ENV || 5432;
const config = require("../knexfile").development;
const knex = require("knex")(config);

module.exports = knex;
