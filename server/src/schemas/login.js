import Joi from 'joi';

const schema = Joi.object({
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net'] },
    })
    .max(50)
    .required(),
  password: Joi.string().min(8).max(100).required(),
});

export default schema;
