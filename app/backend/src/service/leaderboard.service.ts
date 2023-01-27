import TeamModel from '../database/models/Team';
import TeamStatistics from '../utils/teams';

export default class LeaderboardServices {
  public model = TeamModel;

  public async getHomeLeaderboard() {
    return this.model.findAll({
      include: [
        {
          association: 'homeMatchs',
          attributes: ['homeTeamGoals', 'awayTeamGoals'],
          where: {
            inProgress: false,
          },
        },
      ],
    })
      .then((r) => r.map((team) => team.get({ plain: true })))
      .then((teams) => teams.map((team) => new TeamStatistics(team)))
      .then((teams) => teams
        .sort((a, b) => b.totalPoints - a.totalPoints
        || b.goalsBalance - a.goalsBalance
        || b.goalsFavor - a.goalsFavor
        || b.goalsOwn - a.goalsOwn));
  }
}
