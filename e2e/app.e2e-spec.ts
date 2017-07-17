import { FamilyReserveAngularPage } from './app.po';

describe('family-reserve-angular App', () => {
  let page: FamilyReserveAngularPage;

  beforeEach(() => {
    page = new FamilyReserveAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
