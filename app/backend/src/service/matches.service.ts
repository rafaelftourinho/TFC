import MatchModel from '../database/models/Match';
import TeamModel from '../database/models/Team';

export default class MatchService {
  public model = MatchModel;
  public team = TeamModel;

  public async getMatches(inProgress: string) {
    const findMatches = await this.model.findAll({
      include: [
        { model: this.team, as: 'homeTeam', attributes: { exclude: ['id'] } },
        { model: this.team, as: 'awayTeam', attributes: { exclude: ['id'] } },
      ],
    });
    const matches = findMatches.map((match) => match.dataValues);
    if (inProgress === 'true') {
      return matches.filter((match) => match.inProgress === true);
    }
    if (inProgress === 'false') {
      return matches.filter((match) => match.inProgress === false);
    }
    return matches;
  }
}
