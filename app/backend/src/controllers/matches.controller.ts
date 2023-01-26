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
    const { type, message, data } = createdMatch;

    if (message) return res.status(type).json({ message });
    return res.status(type).json(data);
  }

  public async updateMatchToFinish(req: Request, res: Response) {
    await this.service.updateMatchToFinish(req.body, req.params.id);
    return res.status(200).json({ message: 'Finished' });
  }

  public async updatedMatchGoals(req: Request, res: Response) {
    const updatedMatch = await this.service.updateMatchGoals(req.body, req.params.id);
    const { type, message } = updatedMatch;
    return res.status(type).json({ message });
  }
}
