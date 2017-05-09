import { MychannelPage } from './app.po';

describe('mychannel App', () => {
  let page: MychannelPage;

  beforeEach(() => {
    page = new MychannelPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
