import { Bet, BetGroup, BookmakerEvent, SportEvent } from '../types';

export function findProfitableBets(event: SportEvent): BetGroup[] {
  const profitableBets: BetGroup[] = [];

  const max = (bets: Bet[]) =>
    bets.reduce(function (prev, current) {
      return prev.odd > current.odd ? prev : current;
    });

  const team1Odds: Bet[] = event.bookmakerEvents.map(e => ({
    odd: e.odds[0],
    team: event.teams[0],
    bookmaker: e.bookamerName || 'n/a',
  }));

  const drawOdds: Bet[] = event.bookmakerEvents.map(e => ({
    odd: e.odds[1],
    team: 'draw',
    bookmaker: e.bookamerName || 'n/a',
  }));

  const team2Odds: Bet[] = event.bookmakerEvents.map(e => ({
    odd: e.odds[2],
    team: event.teams[1],
    bookmaker: e.bookamerName || 'n/a',
  }));

  const team1Best = max(team1Odds);
  const drawBest = max(drawOdds);
  const team2Best = max(team2Odds);

  const percentage = 1 / team1Best.odd + 1 / drawBest.odd + 1 / team2Best.odd;

  if (percentage < 1) {
    profitableBets.push({
      bets: [team1Best, drawBest, team2Best] as [Bet, Bet, Bet],
      percentage: percentage * 100,
    });
  }

  return profitableBets;
}
