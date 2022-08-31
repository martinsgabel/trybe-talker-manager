const passwordValidation = (req, res, next) => {
  const { password } = req.body;
  if (password.length >= 6) {
    return next();
  }

  return res.status(400).json({ message: 'password must be at least 6 characters' });
};

module.exports = passwordValidation;