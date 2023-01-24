import { Router } from 'express';
import verifyAuthorization from '../middleware/verifyAuthorization';
import validateLogin from '../middleware/loginVerification';
import UserController from '../controllers/user.controller';

const loginRoute = Router();
const controller = new UserController();

loginRoute
  .get('/validate', verifyAuthorization, (req, res) => controller.validate(req, res));
loginRoute.post('/', validateLogin, (req, res) => controller.login(req, res));

export default loginRoute;
