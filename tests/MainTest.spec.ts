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
        console.log("Page Title is verified successfully");
    });

    // Assert the URL
    await test.step("Assert Page URL", async () => {    
        await expect(page).toHaveURL('https://demo.spreecommerce.org/');
        console.log("Page URL is verified successfully");
    });

    // Click on the user icon to open the login form
    await test.step ("Click on User Icon", async () => {
        await signUpPage.clickUserIconLink();
        await expect(loginPage.loginPageTitle).toHaveText('Login');
        console.log("User Icon is clicked successfully");
    });

    // Click on the Sign Up link to open the Sign Up form
    await test.step("Click on Sign Up Link", async () => {
        await signUpPage.clickSignUpLink();
        await expect(signUpPage.signUpPageTitle).toHaveText('Sign Up');
        console.log("Sign Up Link is clicked successfully");
    });
    
    // Sign Up User using the credentials from .env file 
    await test.step("Sign Up to the Application", async () => {
        await signUpPage.fillSignUpForm(
            process.env.USERNAME!,
            process.env.PASSWORD!,
            process.env.PASSWORD_CONFIRM!)
        await signUpPage.clickSignUpButton();
        await commonActions.waitForPageLoad();
        console.log("User is signed up successfully");
    });

    // Logging in User and using the credentials from .env file
    await test.step("Login to the Application", async () => {
        await loginPage.loginToApplication(process.env.USERNAME!, process.env.PASSWORD!);
        await commonActions.waitForPageLoad();
        console.log("User is logged in successfully");
    });

    // Click on the first product link on the product detail page
    await test.step("Click first product link", async () => {
        await productDetailPage.clickFirstProductLink();
        console.log("First product link is clicked successfully");
    });

    // Select size of the product
    await test.step("Select Size of the Product", async () => {
        await productDetailPage.selectSizeOfProduct("S");
        await commonActions.waitForPageLoad(); //Added load wait to ensure the page is fully loaded
        console.log("Size of the product is selected successfully");
    });

    // Click on the "Add to Cart" button
    await test.step("Click Add to Cart Button", async () => {
        await productDetailPage.clickAddToCartButton();
        await commonActions.waitForPageLoad(); //Added load wait to ensure the page is fully loaded
        console.log("Add to Cart button is clicked successfully");
    });

    // Fill the checkout form with user details from .env file
    await test.step("Fill Checkout Form", async () => {
        await expect(checkoutPage.shippingAddressText).toHaveText('Shipping Address');
        await checkoutPage.fillUpCheckOutForm(
            process.env.EMAIL!,
            process.env.FIRSTNAME!,
            process.env.LASTNAME!,
            process.env.CITY!,
            process.env.POSTALCODE!,
            process.env.SHIPPINGADDRESS!
        ); 
        console.log("Checkout form is filled successfully");
    });

    // Click on the "Save and Continue" button on Delivery Page
    await test.step("Click Save and Continue Button", async () => {
        await expect(checkoutPage.deliveryAddressText).toHaveText('Delivery method from Shop location');
        await checkoutPage.clickSaveAndContinueButton();
        await commonActions.waitForPageLoad(); //Added load wait to ensure the page is fully loaded
        console.log("Save and Continue button is clicked successfully");
    });

    // Fill up the payment form with card details from .env file
    await test.step("Fill Payment Details", async () => {
        await expect(checkoutPage.billingAddressText).toHaveText('Billing Address'); 
        await checkoutPage.fillUpPaymentForm(
            process.env.CARDNUMBER!,
            process.env.CARDEXPIRY!,
            process.env.CARDCVC!
        );
        console.log("Payment form is filled successfully");
    })

    // Click on the "Pay Now" button to complete the order
    await test.step("Click Pay Now Button", async () => {
        await checkoutPage.clickPayNowButton();
        await commonActions.waitForPageLoad(); //Added load wait to ensure the page is fully loaded
        console.log("Pay Now button is clicked successfully");
    });

    // Assert the thank you message is displayed on the Order Confirmation Page
    await test.step("Assert Thank You Message", async () => {
        await expect(checkoutPage.thankYouMessage).toBeVisible();
        await expect(checkoutPage.thankYouMessage).toHaveText('Thanks' +process.env.FIRSTNAME+ 'for your order!');
        console.log("Thank You message is displayed successfully");
    });
});