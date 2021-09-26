import { Bet, BetGroup, BookmakerEvent, SportEvent } from '../types';

export function findProfitableBets(event: SportEvent): BetGroup[] {
  const profitableBets: BetGroup[] = [];
  for (let i = 0; i < event.bookmakerEvents.length; i++) {
    const bookmakerEvent1 = event.bookmakerEvents[i];
    for (let j = 0; j < event.bookmakerEvents.length; j++) {
      if (i !== j) {
        const bookmakerEvent2 = event.bookmakerEvents[j];
        for (let k = 0; k < bookmakerEvent1.odds.length; k++) {
          const newOdds = bookmakerEvent2.odds.slice();
          newOdds.splice(k, 1, bookmakerEvent1.odds[k]);

          const percentage = newOdds.reduce((prev, curr) => prev + 1 / curr, 0);
          if (percentage < 1.02) {
            const bets: Bet[] = newOdds.map((odd, index) => {
              const bookmakerEvent =
                index === k ? bookmakerEvent1 : bookmakerEvent2;
              const bookmaker = bookmakerEvent.bookamerName || 'n/a';
              if (index === 0) {
                return {
                  team: event.teams[0],
                  odd,
                  bookmaker,
                };
              } else if (index === 1) {
                return {
                  team: 'draw',
                  odd,
                  bookmaker,
                };
              } else {
                return {
                  team: event.teams[1],
                  odd,
                  bookmaker,
                };
              }
            });

            profitableBets.push({
              bets: bets.slice(0, 3) as [Bet, Bet, Bet],
              percentage: percentage * 100,
            });
          }
        }
      }
    }
  }

  return profitableBets;
}
