jest.setTimeout(25000);
const { Chromeless } = require('chromeless');
const { login } = require('../helpers/auth');

let page;

beforeEach(() => {
  page = new Chromeless({
    implicitWait: true
  });
});

afterEach(async () => {
  await page.end();
});

const GOOGLE_EMAIL = 'devemaily@gmail.com';
const GOOGLE_PASSWORD = 'mydevaccount';

test('Logs in', async () => {
  await login(page);

  const anchor = await page.evaluate(
    () => document.querySelector('a[href="/api/logout"]').innerHTML
  );

  expect(anchor).toEqual('Logout');
});
