import Joi from 'joi';

const schema = Joi.object({
  name: Joi.string(),
  email: Joi.string(),
  is_active: Joi.boolean(),
  created_at: Joi.date(),
});

export default schema;
