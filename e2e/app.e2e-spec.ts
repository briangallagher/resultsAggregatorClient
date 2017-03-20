import { ResultsAggregatorClientPage } from './app.po';

describe('results-aggregator-client App', () => {
  let page: ResultsAggregatorClientPage;

  beforeEach(() => {
    page = new ResultsAggregatorClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
