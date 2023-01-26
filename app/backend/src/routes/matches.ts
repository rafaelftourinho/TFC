import { Router } from 'express';
import MatchController from '../controllers/matches.controller';

const matchesRoute = Router();
const controller = new MatchController();

matchesRoute.get('/', (req, res) => controller.getMatches(req, res));

export default matchesRoute;
