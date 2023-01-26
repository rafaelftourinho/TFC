import { Request, Response } from 'express';
import MatchService from '../service/matches.service';

export default class MatchController {
  public service = new MatchService();

  public async getMatches(req: Request, res: Response) {
    const { inProgress } = req.query;
    const matches = await this.service.getMatches(inProgress as string);
    return res.status(200).json(matches);
  }

  public async createMatch(req: Request, res: Response) {
    const createdMatch = await this.service.createMatch(req.body);
    return res.status(201).json(createdMatch);
  }

  public async updateMatch(req: Request, res: Response) {
    await this.service.updateMatch(req.body, req.params.id);
    return res.status(200).json({ message: 'Finished' });
  }
}
