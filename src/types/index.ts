import {
  Browser,
  BrowserConnectOptions,
  BrowserLaunchArgumentOptions,
  LaunchOptions,
} from 'puppeteer';

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
  date: Date | null;
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
  url: string;
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
