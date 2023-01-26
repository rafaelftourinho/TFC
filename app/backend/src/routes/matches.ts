import { Router } from 'express';
import MatchController from '../controllers/matches.controller';
import verifyAuthorization from '../middleware/verifyAuthorization';

const matchesRoute = Router();
const controller = new MatchController();

matchesRoute.get('/', (req, res) => controller.getMatches(req, res));
matchesRoute.post('/', verifyAuthorization, (req, res) => controller.createMatch(req, res));
matchesRoute
  .patch('/:id/finish', verifyAuthorization, (req, res) => controller.updateMatch(req, res));

export default matchesRoute;
