import IMatches from '../interfaces/MatchesType';
import MatchModel from '../database/models/Match';
import TeamModel from '../database/models/Team';
import TeamService from './team.service';

export default class MatchService {
  public model = MatchModel;
  public team = TeamModel;
  public teamS = new TeamService();

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

  public async createMatch(match: IMatches) {
    const createdMatch = await this.model.create({
      ...match,
      inProgress: true,
    });

    const existedHomeTeam = await this.teamS.getTeamId(match.homeTeamId);
    const existedAwayTeam = await this.teamS.getTeamId(match.awayTeamId);

    if (!existedHomeTeam || !existedAwayTeam) {
      return { type: 404, message: 'There is no team with such id!' };
    }

    if (match.homeTeamId === match.awayTeamId) {
      return { type: 422, message: 'It is not possible to create a match with two equal teams' };
    }

    return { type: 201, data: createdMatch };
  }

  public async updateMatchToFinish(match: IMatches, id: string) {
    const updatedMatch = await this.model.update({
      ...match,
      inProgress: false,
    }, {
      where: {
        id,
      },
    });
    return updatedMatch;
  }

  public async updateMatchGoals(match: IMatches, id: string) {
    const { homeTeamGoals, awayTeamGoals } = match;

    this.model.update(
      {
        homeTeamGoals,
        awayTeamGoals,
      },
      {
        where: {
          id,
        },
      },
    );
    return { type: 200, message: 'Match is updated' };
  }
}
