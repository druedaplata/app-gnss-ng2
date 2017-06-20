import { AppGnssNg2Page } from './app.po';

describe('app-gnss-ng2 App', () => {
  let page: AppGnssNg2Page;

  beforeEach(() => {
    page = new AppGnssNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
