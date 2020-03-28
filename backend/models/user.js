const knex = require("../config/database");
const bcrypt = require("bcrypt");
const tableNaming = require("../src/constants/tableNames");

const SALT_ROUNDS = 10;
const hashPassword = password => bcrypt.hash(password, SALT_ROUNDS);
const verifyPassword = (password, hash) => bcrypt.compare(password, hash);

// Verify that password was provided. (neither empty or plain text)
const priorSaving = user => {
  if (!user.password) throw new Error("Please provide a password");

  return hashPassword(user.password)
    .then(hash => ({
      ...user,
      password: hash
    }))
    .catch(err => `Error hashing password: ${err}`);
};

// generate "create", "verify" methods in this file

const CREATE_ACTION = async props => {
  const user = await priorSaving(props);

  return knex(tableNaming.user).insert(user);
};

const VERIFY_ACTION = props => {
  return "pendant";
};
module.exports = {
  CREATE_ACTION,
  VERIFY_ACTION
};
