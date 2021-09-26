import { BookmakerScraperInterface, BookmakerEvent } from '../types';
import { AbstractBookmakerScraper } from './AbstractScraper';

export class FortunaScraper extends AbstractBookmakerScraper {
  constructor() {
    super();
  }

  async scrapeMatches(url: string) {
    await this.launch();
    if (!this.browser) {
      throw new Error('Browser not initialized');
    }
    const page = await this.browser.newPage();

    await page.goto(url);

    const result: BookmakerEvent[] = await page.evaluate(() => {
      const events = Array.from(document.querySelectorAll('a.event-link'));
      return events.map(event => {
        const id = event.getAttribute('data-id') || '';
        const teams = event.nextElementSibling
          ?.querySelector('span.market-name')
          // @ts-ignore
          ?.innerText.split(' - ');

        const oddsCells = Array.from(
          document.querySelectorAll(`a[data-event-id=${id}]`)
        );
        // @ts-ignore
        const odds = oddsCells.map(cell => Number(cell.innerText));

        return {
          odds: odds.slice(0, 3) as [number, number, number],
          teams: teams as [string, string],
        };
      });
    });

    this.matches = result;
    await this.browser.close();
  }
}
