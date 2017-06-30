import { MyfirstangularappPage } from './app.po';

describe('myfirstangularapp App', () => {
  let page: MyfirstangularappPage;

  beforeEach(() => {
    page = new MyfirstangularappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
