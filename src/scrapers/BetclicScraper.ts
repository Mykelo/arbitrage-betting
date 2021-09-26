import { BookmakerEvent, League } from '../types';
import { AbstractBookmakerScraper } from './AbstractScraper';

export class BetclicScraper extends AbstractBookmakerScraper {
  constructor(leagues?: League[]) {
    super('Betclic', leagues);
  }

  async scrapeMatches(url: string): Promise<BookmakerEvent[]> {
    if (!this.browser) {
      throw new Error('Browser not initialized');
    }
    const page = await this.browser.newPage();

    await page.goto(url, { waitUntil: 'networkidle0' });

    const result: BookmakerEvent[] = await page.evaluate(() => {
      const events = Array.from(document.querySelectorAll('a.cardEvent'));
      return events.map(event => {
        const teams = Array.from(
          event.querySelectorAll('div.scoreboard_contestantLabel')
        ).map(div => div.innerHTML.trim());

        const stringOdds = Array.from(
          event.querySelectorAll('span.oddValue')
          //@ts-ignore
        ).map(odd => odd.innerText.replace(',', '.'));

        const odds = stringOdds.map(odd => Number(odd)).slice(0, 3) as [
          number,
          number,
          number
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
