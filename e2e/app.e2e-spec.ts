import { Project9Page } from './app.po';

describe('project9 App', () => {
  let page: Project9Page;

  beforeEach(() => {
    page = new Project9Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
