const { HttpError } = require("../helpers");

const validateBody = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);

    if (JSON.stringify(req.body) === "{}") {
      next(HttpError(400, "missing fields"));
    }

    if (error) {
      const errorField = error.details[0].context.label;
      next(HttpError(400, `missing required ${errorField} field`));
    }
    next();
  };

  return func;
};

module.exports = validateBody;
