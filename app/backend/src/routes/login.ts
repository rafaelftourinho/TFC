import { Router } from 'express';
import verifyAuthorization from '../middleware/verifyAuthorization';
import validateLogin from '../middleware/loginVerification';
import UserController from '../controllers/user.controller';

const loginRoute = Router();
const controller = new UserController();

loginRoute.get('/', validateLogin, verifyAuthorization, controller.login.bind(UserController));
loginRoute.post('/', validateLogin, controller.login.bind(controller));

export default loginRoute;
