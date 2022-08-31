const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;

const emailValidation = (req, res, next) => {
    const { email } = req.body;
    if (regexEmail.test(email)) {
      return next();
    }

    return res.status(400).json({ message: 'invalid data' });
};

module.exports = emailValidation;