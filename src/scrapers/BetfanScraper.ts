import { BookmakerScraperInterface, BookmakerEvent, League } from '../types';
import { AbstractBookmakerScraper } from './AbstractScraper';

export class BetfanScraper extends AbstractBookmakerScraper {
  constructor(leagues?: League[]) {
    super('Betfan', leagues);
  }

  async scrapeMatches(url: string) {
    if (!this.browser) {
      throw new Error('Browser not initialized');
    }
    const page = await this.browser.newPage();

    await page.goto(url, { waitUntil: 'networkidle0' });

    const result: BookmakerEvent[] = await page.evaluate(() => {
      const events = Array.from(document.querySelectorAll('li.single-event'));
      return events.map(event => {
        const dateString = event.getAttribute('event-date');
        const date = dateString ? new Date(dateString) : undefined;

        const outcomes = event.querySelectorAll('button[outcome]');
        const team1 =
          outcomes[0].querySelector('span.outcome-name')?.innerHTML || 'n/a';
        const team1Odd =
          outcomes[0].querySelector('span.outcome-odd')?.innerHTML || '0';

        const team2 =
          outcomes[2].querySelector('span.outcome-name')?.innerHTML || 'n/a';
        const team2Odd =
          outcomes[2].querySelector('span.outcome-odd')?.innerHTML || '0';

        const drawOdd =
          outcomes[1].querySelector('span.outcome-odd')?.innerHTML || '0';

        const odds: [number, number, number] = [
          Number(team1Odd),
          Number(drawOdd),
          Number(team2Odd),
        ];
        return {
          odds,
          teams: [team1, team2] as [string, string],
          date,
        };
      });
    });

    return result;
  }
}
