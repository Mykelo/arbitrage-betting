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
  {
    name: 'STADE RENNAIS FC',
    keywords: ['stade rennais fc', 'rennais', 'rennes'],
  },
];

export const SERIE_A: Team[] = [
  { name: 'Atalanta', keywords: ['atalanta', 'bergamo'] },
  { name: 'Bolonia', keywords: ['bolonia', 'bologna'] },
  { name: 'Cagliari', keywords: ['cagliari'] },
  { name: 'Empoli', keywords: ['empoli'] },
  { name: 'Fiorentina', keywords: ['fiorentina'] },
  { name: 'Genoa', keywords: ['genoa'] },
  { name: 'Inter', keywords: ['inter', 'mediolan'] },
  { name: 'Juventus', keywords: ['juventus'] },
  { name: 'Lazio', keywords: ['lazio'] },
  { name: 'Milan', keywords: ['milan'] },
  { name: 'Napoli', keywords: ['napoli'] },
  { name: 'Roma', keywords: ['roma'] },
  { name: 'Salernitana', keywords: ['salernitana'] },
  { name: 'Sampdoria', keywords: ['sampdoria'] },
  { name: 'Sassuolo', keywords: ['sassuolo'] },
  { name: 'Spezia', keywords: ['spezia'] },
  { name: 'Torino', keywords: ['torino'] },
  { name: 'Udinese', keywords: ['udinese'] },
  { name: 'Venezia', keywords: ['venezia'] },
  { name: 'Verona', keywords: ['verona', 'hellas'] },
];

export const LA_LIGA: Team[] = [
  { name: 'Athletic Club', keywords: ['athletic club', 'bilbao'] },
  {
    name: 'Atlético de Madrid',
    keywords: ['atlético de madrid', ['atl', 'madryt'], ['atl', 'madrid']],
  },
  { name: 'CA Osasuna', keywords: ['ca osasuna', 'osasuna'] },
  { name: 'Cádiz CF', keywords: ['cádiz cf', 'cadis'] },
  { name: 'Deportivo Alavés', keywords: ['deportivo alavés', 'alaves'] },
  { name: 'Elche CF', keywords: ['elche cf', 'elche'] },
  { name: 'FC Barcelona', keywords: ['fc barcelona', 'barcelona'] },
  { name: 'Getafe CF', keywords: ['getafe cf', 'getafe'] },
  { name: 'Granada CF', keywords: ['granada cf', 'granada'] },
  { name: 'Levante UD', keywords: ['levante ud', 'levante'] },
  { name: 'Rayo Vallecano', keywords: ['rayo vallecano', 'vallecano', 'rayo'] },
  { name: 'RC Celta', keywords: ['rc celta', 'celta', 'vigo'] },
  {
    name: 'RCD Espanyol de Barcelona',
    keywords: ['rcd espanyol de barcelona', 'espanyol'],
  },
  { name: 'RCD Mallorca', keywords: ['rcd mallorca', 'mallorca'] },
  { name: 'Real Betis', keywords: ['real betis', 'betis'] },
  {
    name: 'Real Madrid',
    keywords: ['real madrid', 'real madryt', ['real', 'm']],
  },
  { name: 'Real Sociedad', keywords: ['real sociedad', 'sociedad'] },
  { name: 'Sevilla FC', keywords: ['sevilla fc', 'sevilla'] },
  { name: 'Valencia CF', keywords: ['valencia cf', 'valencia'] },
  { name: 'Villarreal CF', keywords: ['villarreal cf', 'villarreal'] },
];

export const EKSTRAKLASA: Team[] = [
  {
    name: 'BRUK-BET TERMALICA NIECIECZA',
    keywords: ['bruk-bet termalica nieciecza', 'termalica', 'nieciecza'],
  },
  { name: 'CRACOVIA', keywords: ['cracovia'] },
  {
    name: 'GÓRNIK ŁĘCZNA',
    keywords: ['górnik łęczna', 'łęczna', ['górnik', 'ł']],
  },
  {
    name: 'GÓRNIK ZABRZE',
    keywords: ['górnik zabrze', 'zabrze', ['górnik', 'z']],
  },
  {
    name: 'JAGIELLONIA BIAŁYSTOK',
    keywords: ['jagiellonia białystok', 'jagiellonia', 'białystok'],
  },
  { name: 'KGHM ZAGŁĘBIE LUBIN', keywords: ['kghm zagłębie lubin', 'lubin'] },
  { name: 'LECH POZNAŃ', keywords: ['lech poznań', 'poznań', ['lech', 'p']] },
  { name: 'LECHIA GDAŃSK', keywords: ['lechia gdańsk', 'lechia', 'gdańsk'] },
  { name: 'LEGIA WARSZAWA', keywords: ['legia warszawa', 'legia'] },
  { name: 'PGE FKS STAL MIELEC', keywords: ['pge fks stal mielec', 'mielec'] },
  { name: 'PIAST GLIWICE', keywords: ['piast gliwice', 'piast', 'gliwice'] },
  { name: 'POGOŃ SZCZECIN', keywords: ['pogoń szczecin', 'pogoń', 'szczecin'] },
  { name: 'RADOMIAK RADOM', keywords: ['radomiak radom', 'radom'] },
  {
    name: 'RAKÓW CZĘSTOCHOWA',
    keywords: ['raków częstochowa', ['raków', 'cz'], 'częstochowa'],
  },
  { name: 'ŚLĄSK WROCŁAW', keywords: ['śląsk wrocław', 'śląsk', 'wrocław'] },
  { name: 'WARTA POZNAŃ', keywords: ['warta poznań', 'warta'] },
  {
    name: 'WISŁA KRAKÓW',
    keywords: ['wisła kraków', 'kraków', ['wisła', 'k.']],
  },
  { name: 'WISŁA PŁOCK', keywords: ['wisła płock', 'płock'] },
];
