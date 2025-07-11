import { test, expect } from "../fixtures/LoginPage"
import dotenv from "dotenv"
dotenv.config()

test.beforeEach(async ({ page }) => {
  // Navigate to the application before each test
  // This ensures that the page is loaded before running tests
  await page.goto('https://www.saucedemo.com/');
});

  test('End to End flow', async ({ page, loginPage }) => {

    // Assert the title
    await expect(page).toHaveTitle('Swag Labs');

    // Logging in User and using the credentials from .env file 
    await test.step("Login to the Application", async () => {
          await loginPage.loginUser(process.env.USERNAME, process.env.PASSWORD)
    })
});