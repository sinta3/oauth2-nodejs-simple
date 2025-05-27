const express = require('express');
const router = express.Router();

const { googleCallbackLogin, googleFailedLogin } = require('../controllers');
const { googleAuthenticateHandling } = require('../middleware');

router.get('/google', googleAuthenticateHandling);
router.get('/callback', googleCallbackLogin);
router.get('/failed', googleFailedLogin);

module.exports = router;
