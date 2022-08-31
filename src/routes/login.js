const express = require('express');
const crypto = require('crypto');
const emailValidation = require('../middleware/emailValidation');
const passwordValidation = require('../middleware/passwordValidation');

const router = express.Router();

router.post('/', emailValidation, passwordValidation, (_req, res) => {
  const generatedToken = crypto.randomBytes(8).toString('hex');
  
  return res.status(200).json({ token: generatedToken });
});

module.exports = router;
