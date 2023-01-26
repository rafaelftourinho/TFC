import MatchModel from '../database/models/Match';
import TeamModel from '../database/models/Team';

export default class MatchService {
  public model = MatchModel;
  public team = TeamModel;

  public async getMatches() {
    const findMatches = await this.model.findAll({
      include: [
        { model: this.team, as: 'homeTeam', attributes: { exclude: ['id'] } },
        { model: this.team, as: 'awayTeam', attributes: { exclude: ['id'] } },
      ],
    });
    const matches = findMatches.map((match) => match.dataValues);
    return matches;
  }
}

const matches = new MatchService();
matches.getMatches();
