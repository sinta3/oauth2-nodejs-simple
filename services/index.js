const { findOrCreateUser } = require('./auth');
const { createToken } = require('./token');

module.exports = {
  findOrCreateUser,
  createToken,
};
