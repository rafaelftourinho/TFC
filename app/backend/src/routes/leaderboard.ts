import { Router } from 'express';
import LeaderboardController from '../controllers/leaderboard.controller';

const leaderboardRoute = Router();
const controller = new LeaderboardController();

leaderboardRoute.get('/home', (req, res) => controller.getHomeLeaderboard(req, res));

export default leaderboardRoute;
