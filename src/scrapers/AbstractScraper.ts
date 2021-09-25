import puppeteer, { Browser, LaunchOptions } from 'puppeteer';
import {
  BookmakerScraperInterface,
  BookmakerEvent,
  PuppeteerLaunchOptions,
} from '../types';

export abstract class AbstractBookmakerScraper
  implements BookmakerScraperInterface
{
  matches: BookmakerEvent[];
  browser: Browser | null;
  abstract scrapeMatches(url: string): Promise<void>;

  constructor() {
    this.matches = [];
    this.browser = null;
  }

  async launch(options?: PuppeteerLaunchOptions) {
    let launchOptions: PuppeteerLaunchOptions = {
      headless: true,
      ignoreHTTPSErrors: true,
      ...options,
    };
    this.browser = await puppeteer.launch(launchOptions);
  }
}
