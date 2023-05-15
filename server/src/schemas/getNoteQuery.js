import Joi from 'joi';

const schema = Joi.object({
  noteName: Joi.string(),
  description:Joi.string()
});

export default schema;
