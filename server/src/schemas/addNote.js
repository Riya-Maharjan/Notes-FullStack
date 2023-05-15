import Joi from 'joi';

const schema = Joi.object({
  noteName: Joi.string().required(),
  description: Joi.string().required(),
});

export default schema;
