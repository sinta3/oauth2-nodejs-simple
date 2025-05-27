require('dotenv').config();

module.exports = {
  PORT: process.env.PORT,
  GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
  GOOGLE_API_SECRET: process.env.GOOGLE_API_SECRET,
  JWT_SECRET: process.env.JWT_SECRET,
  CALLBACK_URL: process.env.CALLBACK_URL,
  CALLBACK_FAILED_URL: process.env.CALLBACK_FAILED_URL,
};
