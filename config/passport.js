const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const {
  GOOGLE_API_KEY,
  GOOGLE_API_SECRET,
  CALLBACK_URL,
} = require('./environment');
const { findOrCreateUser } = require('../services');

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_API_KEY,
      clientSecret: GOOGLE_API_SECRET,
      callbackURL: CALLBACK_URL,
      passReqToCallback: true,
    },
    async (req, accessToken, refreshToken, profile, done) => {
      try {
        const parametersUser = {
          googleProviderId: profile?.id,
          name: profile?.displayName,
          email: profile?.emails?.[0]?.value,
        };
        const user = await findOrCreateUser(parametersUser);
        return done(null, user);
      } catch (error) {
        console.log(error);
      }
    }
  )
);
