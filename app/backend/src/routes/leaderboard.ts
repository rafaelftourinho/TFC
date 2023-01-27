import { Router } from 'express';
import LeaderboardController from '../controllers/leaderboard.controller';

const leaderboardRoute = Router();
const controller = new LeaderboardController();

leaderboardRoute.get('/home', (req, res) => controller.getHomeLeaderboard(req, res));
leaderboardRoute.get('/away', (req, res) => controller.getAwayLeaderboard(req, res));

export default leaderboardRoute;
