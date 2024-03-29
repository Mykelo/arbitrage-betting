import { BookmakerScraperInterface, BookmakerEvent, League } from '../types';
import { AbstractBookmakerScraper } from './AbstractScraper';

export class BetcrisScraper extends AbstractBookmakerScraper {
  constructor(leagues?: League[]) {
    super('Betcris', leagues);
  }

  async scrapeMatches(url: string): Promise<BookmakerEvent[]> {
    if (!this.browser) {
      throw new Error('Browser not initialized');
    }
    const page = await this.browser.newPage();

    await page.goto(url, { waitUntil: 'networkidle0' });

    const result: BookmakerEvent[] = await page.evaluate(() => {
      const events = Array.from(
        document.querySelectorAll('div.sbEventsList__event-info-layout1')
      );
      return events.map(event => {
        const teams = Array.from(
          event.querySelectorAll('div.sbEventsList__event-title-layout1 > div')
        ).map(div => div.innerHTML.trim());

        const stringOdds = Array.from(
          event.querySelectorAll('div.sb-game-bet-coeficiente')
          //@ts-ignore
        ).map(odd => odd.innerText);

        const odds: [number, number, number] = [
          Number(stringOdds[0]),
          Number(stringOdds[1]),
          Number(stringOdds[2]),
        ];

        return {
          odds,
          teams: teams.slice(0, 2) as [string, string],
        };
      });
    });

    return result;
  }
}
