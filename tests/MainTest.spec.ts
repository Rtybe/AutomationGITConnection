import { test, expect } from "../fixtures/SignUp";
import dotenv from "dotenv"
dotenv.config()

test.beforeEach(async ({ page }) => {
  // Navigate to the application before each test
  // This ensures that the page is loaded before running tests
  await page.goto('https://demo.spreecommerce.org/');
});

  test('End to End flow', async ({ page, signUpPage }) => {

    // Assert the title
    await expect(page).toHaveTitle('Spree Commerce DEMO');

    // Click on the user icon to open the login form
    await test.step("Click on User Icon", async () => {
        await signUpPage.clickSignUpLink();
    });

    // Logging in User and using the credentials from .env file 
    await test.step("Login to the Application", async () => {
        await signUpPage.fillSignUpForm(
            process.env.USERNAME!,
            process.env.PASSWORD!,
            process.env.PASSWORD_CONFIRM!)
        await signUpPage.clickSignUpButton();
    });
});