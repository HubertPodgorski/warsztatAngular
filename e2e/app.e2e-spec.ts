import { WarsztatAngularPage } from './app.po';

describe('warsztat-angular App', () => {
  let page: WarsztatAngularPage;

  beforeEach(() => {
    page = new WarsztatAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
