import {
  BUNDESLIGA,
  EKSTRAKLASA,
  JUPILER_PRO,
  LA_LIGA,
  LIGUE_1,
  PREMIER_LEAGUE,
  SERIE_A,
} from './leagues';

export const LEAGUES = <const>{
  bundesliga: BUNDESLIGA,
  premierLeague: PREMIER_LEAGUE,
  jupilerPro: JUPILER_PRO,
  ligue1: LIGUE_1,
  serieA: SERIE_A,
  laLiga: LA_LIGA,
  ekstraklasa: EKSTRAKLASA,
};

export const LEAGUE_NAMES = <const>[
  'bundesliga',
  'premierLeague',
  'jupilerPro',
  'ligue1',
  'serieA',
  'laLiga',
  'ekstraklasa',
];

export * as leagueLinks from './bookmaker_links';
