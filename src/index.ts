import { leagueLinks } from './configs';
import { findProfitableBets, findSportEvents } from './find_bets';
import { AbstractBookmakerScraper } from './scrapers/AbstractScraper';
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
];

async function analyzeBets(scrapers: AbstractBookmakerScraper[]) {
  try {
    for (const s of scrapers) {
      await s.scrapeAllLeagues();
    }
    const events = await findSportEvents(scrapers);
    const bets = events.reduce<BetGroup[]>(
      (prev, curr) => prev.concat(findProfitableBets(curr)),
      []
    );
    // const bets = findProfitableBets(bundesligaEvents[0]);
    console.log(bets);
  } catch (e) {
    console.log(e);
  }
}

analyzeBets(scrapers);
