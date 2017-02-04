import { BankanalyserWebPage } from './app.po';

describe('bankanalyser-web App', function() {
  let page: BankanalyserWebPage;

  beforeEach(() => {
    page = new BankanalyserWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
