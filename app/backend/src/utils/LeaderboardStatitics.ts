import IMatches from '../interfaces/MatchesType';
import { TeamType } from '../interfaces/Team';

export default class TeamStatistics {
  public name: string;
  public totalPoints = 0;
  public totalVictories = 0;
  public totalDraws = 0;
  public totalLosses = 0;
  public totalGames = 0;
  public goalsFavor = 0;
  public goalsOwn = 0;
  public goalsBalance = 0;
  public efficiency = 100.00;

  constructor(team: TeamType) {
    this.name = team.teamName;
    this.TeamStatistics(team);
  }

  public winMatchs() {
    this.totalVictories += 1;
    this.totalPoints += 3;
  }

  public DrawMatchs() {
    this.totalDraws += 1;
    this.totalPoints += 1;
  }

  public LossMatchs() {
    this.totalLosses += 1;
  }

  public goalBalance() {
    this.goalsBalance = this.goalsFavor - this.goalsOwn;
  }

  public goals(matches: IMatches[], local: boolean) {
    if (local) {
      matches.forEach((match) => {
        this.goalsFavor += match.homeTeamGoals;
        this.goalsOwn += match.awayTeamGoals;
        this.goalBalance();
      });
    }
    if (!local) {
      matches.forEach((match) => {
        this.goalsFavor += match.awayTeamGoals;
        this.goalsOwn += match.homeTeamGoals;
        this.goalBalance();
      });
    }
  }

  public efficiencyInGames() {
    if (!this.totalGames) return 100;
    return +((this.totalPoints / (this.totalGames * 3)) * 100).toFixed(2);
  }

  public TeamStatistics(team: TeamType) {
    if (team.homeMatchs) {
      this.totalGames += team.homeMatchs.length;
      this.goals(team.homeMatchs, true);
      team.homeMatchs.forEach((match) => {
        if (match.homeTeamGoals > match.awayTeamGoals) this.winMatchs();
        else if (match.homeTeamGoals < match.awayTeamGoals) this.LossMatchs();
        else this.DrawMatchs();
      });
    }
    if (team.awayMatchs) {
      this.totalGames += team.awayMatchs.length;
      this.goals(team.awayMatchs, false);
      team.awayMatchs.forEach((match) => {
        if (match.homeTeamGoals > match.awayTeamGoals) this.LossMatchs();
        else if (match.homeTeamGoals < match.awayTeamGoals) this.winMatchs();
        else this.DrawMatchs();
      });
    } this.efficiency = this.efficiencyInGames();
  }
}
