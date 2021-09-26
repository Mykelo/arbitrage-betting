import { BUNDESLIGA, JUPILER_PRO, LIGUE_1, PREMIER_LEAGUE } from './leagues';

export const LEAGUES = <const>{
  bundesliga: BUNDESLIGA,
  premierLeague: PREMIER_LEAGUE,
  jupilerPro: JUPILER_PRO,
  ligue1: LIGUE_1,
};

export const LEAGUE_NAMES = <const>[
  'bundesliga',
  'premierLeague',
  'jupilerPro',
  'ligue1',
];

export * as leagueLinks from './bookmaker_links';
