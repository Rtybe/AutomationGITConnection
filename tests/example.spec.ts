import { test, expect } from "../fixtures/LoginPage/"


test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
});

test('End to End flow Globe Exam', async ({ page, loginPage }) => {

  const userNameValue = 'standard_user'
  const passwordValue = 'secret_sauce'

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('Swag Labs');

  await test.step("Login to the Application", async () => {
        await loginPage.loginUser(userNameValue, passwordValue)
    })
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
//
