const express = require('express');
const emailValidation = require('../middleware/emailValidation');
const passwordValidation = require('../middleware/passwordValidation');

const router = express.Router();

router.post('/', emailValidation, passwordValidation, (_req, res) => {
  const generatedToken = Math.random().toString(36).substr(2, 16);
  
  return res.status(200).json({ token: generatedToken });
});

module.exports = router;
