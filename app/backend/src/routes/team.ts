import { Router } from 'express';
import TeamController from '../controllers/team.controller';

const teamRoute = Router();
const controller = new TeamController();

teamRoute.get('/', (req, res) => controller.getTeams(req, res));
teamRoute.get('/:id', (req, res) => controller.getTeamId(req, res));

export default teamRoute;
