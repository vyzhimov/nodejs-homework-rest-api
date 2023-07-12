const Jimp = require("jimp");

const imageHandler = async (req, res, next) => {
  const { path } = req.file;

  await Jimp.read(path)
    .then((image) => {
      return image.resize(250, 250).quality(60).write(path);
    })
    .catch((err) => {
      next(err);
    });

  next();
};

module.exports = imageHandler;
