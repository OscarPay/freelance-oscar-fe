import { FreelanceOscarFePage } from './app.po';

describe('freelance-oscar-fe App', () => {
  let page: FreelanceOscarFePage;

  beforeEach(() => {
    page = new FreelanceOscarFePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
