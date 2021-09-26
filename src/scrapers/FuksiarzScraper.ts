import { BookmakerScraperInterface, BookmakerEvent, League } from '../types';
import { AbstractBookmakerScraper } from './AbstractScraper';

export class FuksiarzScraper extends AbstractBookmakerScraper {
  constructor(leagues?: League[]) {
    super('Fuksiarz', leagues);
  }

  async scrapeMatches(url: string): Promise<BookmakerEvent[]> {
    if (!this.browser) {
      throw new Error('Browser not initialized');
    }
    const page = await this.browser.newPage();

    await page.goto(url, { waitUntil: 'networkidle0' });

    const result: BookmakerEvent[] = await page.evaluate(() => {
      const events = Array.from(
        document.querySelectorAll('ul.eventListEventsListPartial')
      );
      return events.map(event => {
        const teams = event
          .querySelector('div.name')
          // @ts-ignore
          ?.innerText.split(' - ');

        const oddsCells = Array.from(
          event.querySelectorAll('button[outcome-id]')
        );
        // @ts-ignore
        const odds = oddsCells.map(cell => Number(cell.innerText));

        return {
          odds: odds.slice(0, 3) as [number, number, number],
          teams: teams as [string, string],
        };
      });
    });

    return result;
  }
}
