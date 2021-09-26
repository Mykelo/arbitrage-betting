import { TeamComparator } from '../comparators';
import { LEAGUES, LEAGUE_NAMES } from '../configs';
import { AbstractBookmakerScraper } from '../scrapers/AbstractScraper';
import { SportEvent, Team } from '../types';

export function findSportEvents(
  scrapers: AbstractBookmakerScraper[]
): SportEvent[] {
  const finalEvents: SportEvent[] = [];
  const masterScraper = scrapers[0];
  const otherScrapers = scrapers.slice(1);

  for (const league of LEAGUE_NAMES) {
    const comparator = new TeamComparator(LEAGUES[league]);

    const masterScraperLeague = masterScraper.leagues.find(
      l => l.name === league
    );
    if (!masterScraperLeague || !masterScraperLeague.matches) continue;

    for (const masterMatch of masterScraperLeague.matches) {
      const identifiedTeam1 = comparator.find(masterMatch.teams[0]);
      const identifiedTeam2 = comparator.find(masterMatch.teams[1]);

      if (!identifiedTeam1 || !identifiedTeam2) continue;

      const sportEvent: SportEvent = {
        teams: [identifiedTeam1, identifiedTeam2] as [Team, Team],
        bookmakerEvents: [{ ...masterMatch, bookamerName: masterScraper.name }],
      };

      for (const otherScraper of otherScrapers) {
        const otherScrapeLeague = otherScraper.leagues.find(
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
              bookamerName: otherScraper.name,
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
