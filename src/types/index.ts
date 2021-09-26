import {
  Browser,
  BrowserConnectOptions,
  BrowserLaunchArgumentOptions,
  LaunchOptions,
} from 'puppeteer';
import { LEAGUES, LEAGUE_NAMES } from '../configs';

export interface BookmakerScraperInterface {
  browser: Browser | null;
  matches: BookmakerEvent[];
  scrapeMatches(url: string): Promise<void>;
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
  leagues: {
    name: typeof LEAGUE_NAMES[number];
    url: string;
    matches?: Team[];
  }[];
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
