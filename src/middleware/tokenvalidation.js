const regexToken = /\b[a-z0-9]{16}\b/i;

const tokenValidation = (req, res, next) => {
  const token = req.headers.authorization;

  if (!req.headers.authorization) {
    return res.status(401).json({ message: 'Token não encontrado' });
  }

  if (regexToken.test(token)) {
    return next();
  }

  return res.status(401).json({ message: 'Token inválido' });
};

module.exports = tokenValidation;