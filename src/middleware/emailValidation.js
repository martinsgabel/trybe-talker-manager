const regexEmail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;

const emailValidation = (req, res, next) => {
    const { email } = req.body;
    if (regexEmail.test(email)) {
      return next();
    }

    return res.status(400).json({ message: 'invalid email' });
};

module.exports = emailValidation;