import Match from '../database/models/Match';

export interface TeamStatistics {
  totalPoints: number,
  totalVictories: number,
  totalDraws: number,
  totalLosses: number,
  totalGames: number,
  goalsFavor: number,
  goalsOwn: number,
  goalsBalance: number,
  efficiency: number,
}

export interface TeamType {
  id: number;
  teamName: string;
  homeMatchs?: [Match];
  awayMatchs?: [Match];
}
