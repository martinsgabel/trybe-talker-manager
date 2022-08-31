const regexEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

const emailValidation = (req, res, next) => {
  const { email } = req.body;
  const login = req.body;

  if (!login.email) {
    return res.status(400).json({ message: 'O campo "email" é obrigatório' });
  }

  if (email.length < 1) {
    return res.status(400).json({ message: 'O campo "email" é obrigatório' });
  }

  if (regexEmail.test(email)) {
    return next();
  }

  return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
};

module.exports = emailValidation;