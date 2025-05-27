const express = require('express');
const passport = require('passport');
const db = require('./config/database');
require('./config/passport');
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(passport.initialize());
app.use(express.urlencoded({ extended: false }));

app.use('/auth', require('./routes'));

if (db) {
  app.listen(PORT, () => {
    console.log(`Server runs on port ${PORT}`);
  });
}
