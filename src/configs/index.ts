import { BUNDESLIGA, JUPILER_PRO, PREMIER_LEAGUE } from './leagues';

export const LEAGUES = <const>{
  bundesliga: BUNDESLIGA,
  premierLeague: PREMIER_LEAGUE,
  jupilerPro: JUPILER_PRO,
};

export const LEAGUE_NAMES = <const>[
  'bundesliga',
  'premierLeague',
  'jupilerPro',
];

export * as leagueLinks from './bookmaker_links';
