const passport = require('passport');

const googleAuthenticateHandling = passport.authenticate('google', {
  scope: ['email', 'profile'],
  session: false,
});

module.exports = {
  googleAuthenticateHandling,
};
