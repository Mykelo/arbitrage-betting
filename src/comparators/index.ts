import { Team } from '../types';

export class TeamComparator {
  teams: Team[];

  constructor(teams: Team[]) {
    this.teams = teams;
  }

  compare(team1: Team, team2: string): boolean {
    const lowercaseTeam2 = team2.toLowerCase();
    return team1.keywords.some(keyword => {
      if (Array.isArray(keyword)) {
        return !keyword.some(k => !lowercaseTeam2.includes(k.toLowerCase()));
      } else {
        return lowercaseTeam2.includes(keyword.toLowerCase());
      }
    });
  }

  find(team: string): Team | undefined {
    const foundTeam = this.teams.find(t => this.compare(t, team));

    return foundTeam;
  }
}
