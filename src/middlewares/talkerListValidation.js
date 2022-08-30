const talkerListValidation = (req, res, next) => {
  const content = req.body;

  if (!content.length) {
    return res.status(200).json([]);
  }

  next();
};

module.exports = talkerListValidation;