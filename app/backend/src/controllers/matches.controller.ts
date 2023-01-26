import { Request, Response } from 'express';
import MatchService from '../service/matches.service';

export default class MatchController {
  public service = new MatchService();

  public async getMatches(_req: Request, res: Response) {
    const matches = await this.service.getMatches();
    return res.status(200).json(matches);
  }
}
