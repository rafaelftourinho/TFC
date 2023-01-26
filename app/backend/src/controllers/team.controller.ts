import { Request, Response } from 'express';
import TeamService from '../service/team.service';

export default class TeamController {
  public service = new TeamService();

  public async getTeams(req: Request, res: Response) {
    const teams = await this.service.getTeams();
    return res.status(200).json(teams);
  }

  public async getTeamId(req: Request, res: Response) {
    const { id } = req.params;
    const team = await this.service.getTeamId(id);
    return res.status(200).json(team);
  }
}
