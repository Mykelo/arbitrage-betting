import { TeamComparator } from './comparators';
import { LEAGUES, LEAGUE_NAMES } from './configs';
import { findProfitableBets } from './find_bets';
import { BetcrisScraper } from './scrapers/BetcrisScraper';
import { BetfanScraper } from './scrapers/BetfanScraper';
import { FortunaScraper } from './scrapers/FortunaScraper';
import { BetGroup, League, ScraperConfig, SportEvent, Team } from './types';

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

function findSportEvents(scrapes: ScraperConfig[]): SportEvent[] {
  const finalEvents: SportEvent[] = [];
  const masterScrape = scrapes[0];
  const otherScrapes = scrapes.slice(1);

  for (const league of LEAGUE_NAMES) {
    const comparator = new TeamComparator(LEAGUES[league]);

    const masterScrapeLeague = masterScrape.leagues.find(
      l => l.name === league
    );
    if (!masterScrapeLeague || !masterScrapeLeague.matches) continue;

    const otherScrapesLeague = otherScrapes
      .map(other => other.leagues.find(l => l.name === league))
      .filter(s => s === undefined) as League[];

    for (const masterMatch of masterScrapeLeague.matches) {
      const identifiedTeam1 = comparator.find(masterMatch.teams[0]);
      const identifiedTeam2 = comparator.find(masterMatch.teams[1]);

      if (!identifiedTeam1 || !identifiedTeam2) continue;

      const sportEvent: SportEvent = {
        teams: [identifiedTeam1, identifiedTeam2] as [Team, Team],
        bookmakerEvents: [{ ...masterMatch, bookamerName: masterScrape.name }],
      };

      for (const otherScrape of otherScrapes) {
        const otherScrapeLeague = otherScrape.leagues.find(
          l => l.name === league
        );
        if (!otherScrapeLeague || !otherScrapeLeague.matches) continue;

        for (const otherMatch of otherScrapeLeague.matches) {
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
  }
  console.log(finalEvents);
  return finalEvents;
}

async function scrape(scrapeConfig: ScraperConfig): Promise<ScraperConfig> {
  const newScrape: ScraperConfig = { ...scrapeConfig };

  for (const league of newScrape.leagues) {
    await newScrape.scraper.scrapeMatches(league.url);
    league.matches = newScrape.scraper.matches;
  }

  return newScrape;
}

async function analyzeBets(scrapers: ScraperConfig[]) {
  try {
    const usedScrapers: ScraperConfig[] = [];
    for (const s of scrapers) {
      usedScrapers.push(await scrape(s));
    }
    const events = await findSportEvents(usedScrapers);
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

analyzeBets(scrapers);
