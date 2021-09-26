import {
  Browser,
  BrowserConnectOptions,
  BrowserLaunchArgumentOptions,
  LaunchOptions,
} from 'puppeteer';
import { LEAGUES, LEAGUE_NAMES } from '../configs';

export type LeagueName = typeof LEAGUE_NAMES[number];

export interface League {
  name: LeagueName;
  url: string;
  matches?: BookmakerEvent[];
}
export interface BookmakerScraperInterface {
  name: string;
  leagues: League[];
  browser: Browser | null;
  scrapeAllLeagues(): Promise<void>;
  scrapeMatches(url: string): Promise<BookmakerEvent[]>;
  launch(options?: PuppeteerLaunchOptions): Promise<void>;
}

export interface BookmakerEvent {
  bookamerName?: string;
  teams: [string, string];
  odds: [number, number, number];
  date?: Date;
}

export type PuppeteerLaunchOptions = LaunchOptions &
  BrowserLaunchArgumentOptions &
  BrowserConnectOptions;

export interface Team {
  name: string;
  keywords: (string[] | string)[];
}

export interface ScraperConfig {
  name: string;
  scraper: BookmakerScraperInterface;
  leagues: League[];
}

export interface SportEvent {
  teams: [Team, Team];
  bookmakerEvents: BookmakerEvent[];
  profitableBets?: BetGroup[];
}

export interface Bet {
  team: Team | 'draw';
  odd: number;
  bookmaker: string;
}

export interface BetGroup {
  bets: [Bet, Bet, Bet];
  percentage: number;
}
