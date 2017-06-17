import { DatepickertestPage } from './app.po';

describe('datepickertest App', () => {
  let page: DatepickertestPage;

  beforeEach(() => {
    page = new DatepickertestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
