const Joi = require("joi");

function dataValidator(data) {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().required(),
  });

  return schema.validate(data);
}

module.exports = dataValidator;
