const { HttpError } = require("../helpers");

const validateBody = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    const errorField = error ? error.details[0].context.label : null;

    if (errorField !== "favorite" && JSON.stringify(req.body) === "{}") {
      next(HttpError(400, "missing fields"));
    }

    if (errorField === "favorite" && JSON.stringify(req.body) === "{}") {
      next(HttpError(400, "missing field favorite "));
    }

    if (error) {
      next(HttpError(400, `missing required ${errorField} field`));
    }
    next();
  };

  return func;
};

module.exports = validateBody;
