import puppeteer, { Browser, LaunchOptions } from 'puppeteer';
import {
  BookmakerScraperInterface,
  BookmakerEvent,
  PuppeteerLaunchOptions,
  League,
} from '../types';

export abstract class AbstractBookmakerScraper
  implements BookmakerScraperInterface
{
  name: string;
  leagues: League[];
  browser: Browser | null;
  abstract scrapeMatches(url: string): Promise<BookmakerEvent[]>;

  constructor(name: string, leagues?: League[]) {
    this.leagues = leagues || [];
    this.browser = null;
    this.name = name;
  }

  async scrapeAllLeagues(): Promise<void> {
    await this.launch();

    for (const league of this.leagues) {
      const events = await this.scrapeMatches(league.url);
      league.matches = events;
    }

    if (this.browser) await this.browser.close();
  }

  async launch(options?: PuppeteerLaunchOptions): Promise<void> {
    let launchOptions: PuppeteerLaunchOptions = {
      headless: true,
      ignoreHTTPSErrors: true,
      ...options,
    };
    this.browser = await puppeteer.launch(launchOptions);
  }
}
