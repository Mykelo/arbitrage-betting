import { Team } from '../types';

export const BUNDESLIGA: Team[] = [
  { name: 'FC Bayern München', keywords: ['bayern'] },
  { name: 'RB Leipzig', keywords: ['lipsk', 'leipzig'] },
  { name: 'Borussia Dortmund', keywords: ['bvb', 'dortmund'] },
  { name: 'VfL Wolfsburg', keywords: ['wolfsburg'] },
  { name: 'Eintracht Frankfurt', keywords: ['eintracht', 'frankfurt'] },
  { name: 'Bayer 04 Leverkusen', keywords: ['leverkusen'] },
  { name: '1. FC Union Berlin', keywords: ['union berlin', ['un', 'berlin']] },
  { name: "Borussia M'gladbach", keywords: ['gladbach'] },
  { name: 'VfB Stuttgart', keywords: ['stuttgart'] },
  { name: 'SC Freiburg', keywords: ['freiburg'] },
  { name: 'TSG Hoffenheim', keywords: ['hoffenheim'] },
  { name: '1. FSV Mainz 05', keywords: ['mainz'] },
  { name: 'FC Augsburg', keywords: ['augsburg'] },
  { name: 'Hertha Berlin', keywords: ['hertha'] },
  { name: 'Arminia Bielefeld', keywords: ['bielefeld', 'arminia'] },
  { name: '1. FC Köln', keywords: ['koln', 'koeln'] },
  { name: 'VfL Bochum 1848', keywords: ['bochum'] },
  { name: 'SpVgg Greuther Fürth', keywords: ['greuther', 'furth'] },
];

export const PREMIER_LEAGUE: Team[] = [
  { name: 'Arsenal', keywords: ['arsenal'] },
  { name: 'Aston Villa', keywords: ['aston villa'] },
  { name: 'Brentford', keywords: ['brentford'] },
  { name: 'Brighton and Hove Albion', keywords: ['brighton and hove albion'] },
  { name: 'Burnley', keywords: ['burnley'] },
  { name: 'Chelsea', keywords: ['chelsea'] },
  { name: 'Crystal Palace', keywords: ['crystal palace', 'palace'] },
  { name: 'Everton', keywords: ['everton'] },
  { name: 'Leeds United', keywords: ['leeds united', 'leeds'] },
  { name: 'Leicester City', keywords: ['leicester city', 'leicester'] },
  { name: 'Liverpool', keywords: ['liverpool'] },
  {
    name: 'Manchester City',
    keywords: ['manchester city', ['manch', 'city'], ['man', 'city']],
  },
  {
    name: 'Manchester United',
    keywords: ['manchester united', ['man', 'utd']],
  },
  { name: 'Newcastle United', keywords: ['newcastle united', 'newcastle'] },
  { name: 'Norwich City', keywords: ['norwich city', 'norwich'] },
  { name: 'Southampton', keywords: ['southampton'] },
  { name: 'Tottenham Hotspur', keywords: ['tottenham hotspur', 'tottenham'] },
  { name: 'Watford', keywords: ['watford'] },
  { name: 'West Ham United', keywords: ['west ham united', 'west ham', 'whu'] },
  {
    name: 'Wolverhampton Wanderers',
    keywords: ['wolverhampton wanderers', 'wolverhampton'],
  },
];

export const JUPILER_PRO: Team[] = [
  { name: 'Cercle Brugge', keywords: ['cercle brugge'] },
  { name: 'Club Brugge', keywords: ['club brugge'] },
  { name: 'K. Beerschot V.A.', keywords: ['k. beerschot v.a.', 'beerschot'] },
  { name: 'KAA Gent', keywords: ['kaa gent', 'gent'] },
  { name: 'KAS Eupen', keywords: ['kas eupen', 'eupen'] },
  { name: 'KRC Genk', keywords: ['krc genk', 'genk'] },
  { name: 'KV Kortrijk', keywords: ['kv kortrijk', 'kortrijk'] },
  { name: 'KV Mechelen', keywords: ['kv mechelen', 'mechelen'] },
  { name: 'KV Oostende', keywords: ['kv oostende', 'oostende'] },
  { name: 'OH Leuven', keywords: ['oh leuven', 'heverlee'] },
  { name: 'RFC Seraing', keywords: ['rfc seraing', 'seraing'] },
  {
    name: 'Royal Antwerp FC',
    keywords: ['royal antwerp fc', 'antwerpia', 'antwerp'],
  },
  {
    name: 'Royale Union Saint-Gilloise',
    keywords: ['royale union saint-gilloise', 'gilloise'],
  },
  { name: 'RSC Anderlecht', keywords: ['rsc anderlecht', 'anderlecht'] },
  { name: 'Sporting Charleroi', keywords: ['sporting charleroi', 'charleroi'] },
  { name: 'Standard de Liège', keywords: ['standard de liège', 'liege'] },
  { name: 'STVV', keywords: ['stvv', 'truiden'] },
  { name: 'SV Zulte Waregem', keywords: ['sv zulte waregem', 'waregem'] },
];

export const LIGUE_1: Team[] = [
  { name: 'ANGERS SCO', keywords: ['angers sco', 'angers'] },
  { name: 'AS MONACO', keywords: ['as monaco', 'monaco'] },
  { name: 'AS SAINT-ÉTIENNE', keywords: ['as saint-étienne', 'etienne'] },
  { name: 'CLERMONT FOOT 63', keywords: ['clermont foot 63', 'clermont'] },
  { name: 'ESTAC TROYES', keywords: ['estac troyes', 'troyes', 'estac'] },
  {
    name: 'FC GIRONDINS DE BORDEAUX',
    keywords: ['fc girondins de bordeaux', 'bordeaux'],
  },
  { name: 'FC LORIENT', keywords: ['fc lorient', 'lorient'] },
  { name: 'FC METZ', keywords: ['fc metz', 'metz'] },
  { name: 'FC NANTES', keywords: ['fc nantes', 'nantes'] },
  { name: 'LOSC LILLE', keywords: ['losc lille', 'lille'] },
  {
    name: 'MONTPELLIER HÉRAULT SC',
    keywords: ['montpellier hérault sc', 'montpellier'],
  },
  { name: 'OGC NICE', keywords: ['ogc nice', 'nice'] },
  {
    name: 'OLYMPIQUE DE MARSEILLE',
    keywords: ['olympique de marseille', 'marseille', 'marsylia'],
  },
  {
    name: 'OLYMPIQUE LYONNAIS',
    keywords: ['olympique lyonnais', 'lyonnais', 'lyon'],
  },
  {
    name: 'PARIS SAINT-GERMAIN',
    keywords: ['paris saint-germain', 'paris', 'psg'],
  },
  { name: 'RC LENS', keywords: ['rc lens', 'lens'] },
  {
    name: 'RC STRASBOURG ALSACE',
    keywords: ['rc strasbourg alsace', 'alsace', 'strasbourg'],
  },
  {
    name: 'STADE BRESTOIS 29',
    keywords: ['stade brestois 29', 'brestois', 'brest'],
  },
  { name: 'STADE DE REIMS', keywords: ['stade de reims', 'reims'] },
  { name: 'STADE RENNAIS FC', keywords: ['stade rennais fc', 'rennais'] },
];
