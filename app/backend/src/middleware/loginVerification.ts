import { RequestHandler } from 'express';
import * as Joi from 'joi';

const validateLogin: RequestHandler = (req, res, next) => {
  const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  }).messages({
    'string.min': 'Incorrect email or password',
    'string.empty': 'All fields must be filled',
  }).required();

  const { error } = loginSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

export default validateLogin;
