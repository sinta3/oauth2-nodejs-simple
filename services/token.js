const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/environment');

const createToken = (userData) => {
  const token = jwt.sign(userData, JWT_SECRET, {
    expiresIn: '1d',
  });

  return token;
};

module.exports = {
  createToken,
};
