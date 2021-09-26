import { TeamComparator } from './comparators';
import { LEAGUES } from './configs';
import { BUNDESLIGA, JUPILER_PRO, PREMIER_LEAGUE } from './configs/leagues';
import { findProfitableBets } from './find_bets';
import { BetcrisScraper } from './scrapers/BetcrisScraper';
import { BetfanScraper } from './scrapers/BetfanScraper';
import { FortunaScraper } from './scrapers/FortunaScraper';
import { BetGroup, ScraperConfig, SportEvent, Team } from './types';

async function scrapeBetfan() {
  const betfanScraper = new BetfanScraper();
  try {
    await betfanScraper.scrapeMatches(
      'https://betfan.pl/zaklady-bukmacherskie/pilka-nozna/anglia/premier-league/244'
    );
    console.log(betfanScraper.matches);
  } catch (e) {
    console.log(e);
  }
}

async function scrapeBetcris() {
  const betcrisScraper = new BetcrisScraper();
  try {
    await betcrisScraper.scrapeMatches(
      'https://www.betcris.pl/zaklady-bukmacherskie#/Soccer/England/538/18603722'
    );
    console.log(betcrisScraper.matches);
  } catch (e) {
    console.log(e);
  }
}

async function scrapeFortuna() {
  const fortunaScraper = new FortunaScraper();
  try {
    await fortunaScraper.scrapeMatches(
      'https://www.efortuna.pl/zaklady-bukmacherskie/pilka-nozna/1-anglia'
    );
    console.log(fortunaScraper.matches);
  } catch (e) {
    console.log(e);
  }
}

const scrapers: ScraperConfig[] = [
  {
    name: 'Betfan',
    scraper: new BetfanScraper(),
    leagues: [
      {
        name: 'bundesliga',
        url: 'https://betfan.pl/zaklady-bukmacherskie/pilka-nozna/niemcy/bundesliga/264',
      },
      {
        name: 'premierLeague',
        url: 'https://betfan.pl/zaklady-bukmacherskie/pilka-nozna/anglia/premier-league/244',
      },
      {
        name: 'jupilerPro',
        url: 'https://betfan.pl/zaklady-bukmacherskie/pilka-nozna/belgia/1-belgia/228',
      },
    ],
  },
  {
    name: 'Betcris',
    scraper: new BetcrisScraper(),
    leagues: [
      {
        name: 'bundesliga',
        url: 'https://www.betcris.pl/zaklady-bukmacherskie#/Soccer/Germany/541/18601898',
      },
      {
        name: 'premierLeague',
        url: 'https://www.betcris.pl/zaklady-bukmacherskie#/Soccer/England/538/18601898',
      },
      {
        name: 'jupilerPro',
        url: 'https://www.betcris.pl/zaklady-bukmacherskie#/Soccer/Belgium/557/18601898',
      },
    ],
  },
];


async function scrape(
  scrapes: ScraperConfig[],
): Promise<SportEvent[]> {
  for (const scrape of scrapes) {
    await scrape.scraper.scrapeMatches(scrape.url);
  }
  const masterScrape = scrapes[0];
  const otherScrapes = scrapes.slice(1);
  const finalEvents: SportEvent[] = [];
  const comparator = new TeamComparator(config);

  for (const masterMatch of masterScrape.scraper.matches) {
    const identifiedTeam1 = comparator.find(masterMatch.teams[0]);
    const identifiedTeam2 = comparator.find(masterMatch.teams[1]);

    if (!identifiedTeam1 || !identifiedTeam2) continue;

    const sportEvent: SportEvent = {
      teams: [identifiedTeam1, identifiedTeam2] as [Team, Team],
      bookmakerEvents: [{ ...masterMatch, bookamerName: masterScrape.name }],
    };

    for (const otherScrape of otherScrapes) {
      for (const otherMatch of otherScrape.scraper.matches) {
        const { teams } = otherMatch;
        if (
          comparator.compare(identifiedTeam1, teams[0]) &&
          comparator.compare(identifiedTeam2, teams[1])
        ) {
          sportEvent.bookmakerEvents.push({
            ...otherMatch,
            bookamerName: otherScrape.name,
          });
          break;
        }
      }
    }

    finalEvents.push(sportEvent);
  }

  console.log(finalEvents);
  return finalEvents;
}

async function analyzeBets(scrapes: ScraperConfig[], config: Team[]) {
  try {
    const events = await scrapeFootballLeague(scrapes, config);
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

// analyzeBets(jupilerProScrapes, JUPILER_PRO);
// analyzeBets(premierLeagueScrapes, PREMIER_LEAGUE);
// analyzeBets(bundesligaScrapes, BUNDESLIGA);

scrapeFortuna();
