import { leagueLinks } from './configs';
import { findProfitableBets, findSportEvents } from './find_bets';
import { AbstractBookmakerScraper } from './scrapers/AbstractScraper';
import { BetclicScraper } from './scrapers/BetclicScraper';
import { BetcrisScraper } from './scrapers/BetcrisScraper';
import { BetfanScraper } from './scrapers/BetfanScraper';
import { FortunaScraper } from './scrapers/FortunaScraper';
import { FuksiarzScraper } from './scrapers/FuksiarzScraper';
import { BetGroup } from './types';

const scrapers: AbstractBookmakerScraper[] = [
  new BetcrisScraper(leagueLinks.betcris),
  new BetfanScraper(leagueLinks.betfan),
  new FortunaScraper(leagueLinks.fortuna),
  new FuksiarzScraper(leagueLinks.fuksiarz),
  new BetclicScraper(leagueLinks.betclic),
];

async function analyzeBets(scrapers: AbstractBookmakerScraper[]) {
  try {
    for (const s of scrapers) {
      console.log('\n\n', s.name);
      await s.scrapeAllLeagues();
    }
    const events = await findSportEvents(scrapers);
    const bets = events.reduce<BetGroup[]>(
      (prev, curr) => prev.concat(findProfitableBets(curr)),
      []
    );
    // const bets = findProfitableBets(bundesligaEvents[0]);

    console.log('\nProfitable bets:');
    bets.forEach((bet, i) => {
      console.log(`BET #${i + 1}`);
      bet.bets.forEach(b => {
        console.log(`${b.team} -> ${b.bookmaker} (${b.odd})`);
      });
      console.log();
    });
    console.log('Finished!');
  } catch (e) {
    console.log(e);
  }
}

analyzeBets(scrapers);
