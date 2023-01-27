import { Request, Response } from 'express';
import LeaderboardServices from '../service/leaderboard.service';

export default class LeaderboardController {
  public service = new LeaderboardServices();
  public async getHomeLeaderboard(_req: Request, res: Response) {
    const result = await this.service.getHomeLeaderboard();

    return res.status(200).json(result);
  }
}
