import Joi from "joi";

const schema = Joi.object({
  noteName: Joi.string().optional(),
  description: Joi.string().optional()
});

export default schema;
