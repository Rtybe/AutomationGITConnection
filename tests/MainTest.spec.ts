import { test, expect } from "../fixtures/SignUp";
import dotenv from "dotenv"
dotenv.config()

test.beforeEach(async ({ page }) => {
  // Navigate to the application before each test
  // This ensures that the page is loaded before running tests
  await page.goto('https://demo.spreecommerce.org/');
});

  test('End to End flow', async ({ page, signUpPage, productDetailPage, commonActions, checkoutPage, loginPage }) => {

    // Assert the title
    await test.step("Assert Page Title", async () => {
        await expect(page).toHaveTitle('Spree Commerce DEMO');
    });

    await test.step("Assert Page URL", async () => {    
        // Assert the URL
        await expect(page).toHaveURL('https://demo.spreecommerce.org/');
    });

    // Click on the user icon to open the login form
    await test.step ("Click on User Icon", async () => {
        await signUpPage.clickUserIconLink();
    });

    // Click on the Sign Up link to open the Sign Up form
    await test.step("Click on Sign Up Link", async () => {
        await signUpPage.clickSignUpLink();
    });
    
    // Sign Up User using the credentials from .env file 
    await test.step("Sign Up to the Application", async () => {
        await signUpPage.fillSignUpForm(
            process.env.USERNAME!,
            process.env.PASSWORD!,
            process.env.PASSWORD_CONFIRM!)
        await signUpPage.clickSignUpButton();
        await commonActions.waitForPageLoad();
    });

    // Logging in User and using the credentials from .env file
    await test.step("Login to the Application", async () => {
        await loginPage.loginToApplication(process.env.USERNAME!, process.env.PASSWORD!);
        await commonActions.waitForPageLoad();

    // Click on the first product link on the product detail page
    await test.step("Click first product link", async () => {
        await productDetailPage.clickFirstProductLink();
    });

    // Select size of the product
    await test.step("Select Size of the Product", async () => {
        await productDetailPage.selectSizeOfProduct("S");
        await commonActions.waitForPageLoad(); //Added load wait to ensure the page is fully loaded
    });

    // Click on the "Add to Cart" button
    await test.step("Click Add to Cart Button", async () => {
        await productDetailPage.clickAddToCartButton();
        await commonActions.waitForPageLoad(); //Added load wait to ensure the page is fully loaded
    });

    // Fill the checkout form with user details from .env file
    await test.step("Fill Checkout Form", async () => {
        await checkoutPage.fillUpCheckOutForm(
            process.env.EMAIL!,
            process.env.FIRSTNAME!,
            process.env.LASTNAME!,
            process.env.CITY!,
            process.env.POSTALCODE!,
            process.env.SHIPPINGADDRESS!
        );
    });
});