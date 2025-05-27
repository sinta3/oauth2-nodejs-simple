const jwt = require('jsonwebtoken');
const { JWT_SECRET, CALLBACK_FAILED_URL } = require('../config/environment');
const passport = require('passport');
const { createToken } = require('../services');

const googleCallbackLogin = async (req, res, next) => {
  try {
    passport.authenticate(
      'google',
      { session: false, failureRedirect: CALLBACK_FAILED_URL },
      async (err, user, info) => {
        if (err) return next(err);

        if (!user) {
          return res
            .status(401)
            .json({ message: info?.message || 'Authentication failed' });
        }
        const token = await createToken({
          email: user.email,
          id: user.userId,
        });

        res.json({
          message: 'Successfully login',
          token,
        });
      }
    )(req, res, next);
  } catch (error) {
    console.log(error);
  }
};

const googleFailedLogin = async (req, res) => {
  try {
    res.send({
      message: 'Failed login',
    });
  } catch (error) {
    console.log(error);
  }
};

const googleAuthenticate = (req, res, next) => {
  try {
    passport.authenticate('google', {
      session: false,
      scope: ['email', 'profile'],
    })(req, res, next);
  } catch (error) {
    console.log(error);
    return res.json({ message: info.message });
  }
};

module.exports = {
  googleAuthenticate,
  googleFailedLogin,
  googleCallbackLogin,
};
