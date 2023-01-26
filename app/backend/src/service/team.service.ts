import TeamModel from '../database/models/Team';

export default class TeamService {
  public model = TeamModel;

  constructor() {
    this.model = TeamModel;
  }

  public async getTeams() {
    const teams = await this.model.findAll();
    return teams;
  }

  public async getTeamId(id: string) {
    const team = await this.model.findByPk(id);
    return team;
  }
}
