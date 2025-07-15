import { test, expect } from "../fixtures/index";
import dotenv from "dotenv"
dotenv.config()

test.beforeEach(async ({ page }) => {
  // Navigate to the application before each test
  // This ensures that the page is loaded before running tests
  await page.goto('https://demo.spreecommerce.org/');
});

  // Utility function to generate a random email address
  function createRandomEmail(): string {
    const timestamp = Date.now();
    return `user${timestamp}@example.com`;
  }

  test.slow();

  test('End to End flow', async ({ page, signUpPage, productDetailPage, commonActions, checkoutPage, loginPage, homePage }) => {

    const randomEmail = createRandomEmail();
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
            randomEmail,
            process.env.PASSWORD!,
            process.env.PASSWORD_CONFIRM!)
            console.log(
            randomEmail,
            process.env.PASSWORD!,
            process.env.PASSWORD_CONFIRM!);
        await signUpPage.clickSignUpButton();
        await commonActions.waitForPageLoad();
        await expect (signUpPage.signUpSuccessMessage).toHaveText('Welcome! You have signed up successfully.');
        console.log("User is signed up successfully");
    });

    // Click on the Shop All button to view all products
    await test.step("Click on Shop All Button", async () => {
        await homePage.clickOnShopAll(); 
        await commonActions.waitForPageLoad();
        await expect(page).toHaveURL('https://demo.spreecommerce.org/products'); 
        console.log("Click on Shop All button is successful");
    });


    // Click on the first product link on the product detail page
    await test.step("Click first product link", async () => {
        await productDetailPage.clickFirstProductLink();
        await commonActions.waitForPageLoad();
        console.log("First product link is clicked successfully");
    });

    // Select size of the product
    await test.step("Select Size of the Product", async () => {
        await productDetailPage.selectSizeOfProduct("S");
        await commonActions.waitForPageLoad();
        console.log("Size of the product is selected successfully");
    });

    // Click on the "Add to Cart" button
    await test.step("Click Add to Cart Button", async () => {
        await productDetailPage.clickAddToCartButton();
        await commonActions.waitForPageLoad(); //Added load wait to ensure the page is fully loaded
        console.log("Add to Cart button is clicked successfully");
    });

    // Click on the "Checkout" button to proceed to the checkout page
    await test.step("Click Checkout Button", async () => {
        await expect(productDetailPage.checkoutButton).toBeVisible();
        await expect(productDetailPage.checkoutButton).toBeEnabled();  
        await productDetailPage.clickCheckoutButton();
        await commonActions.waitForPageLoad(); //Added load wait to ensure the page is fully loaded
        console.log("Checkout button is clicked successfully");
    });

    // Fill the checkout form with user details from .env file
    await test.step("Fill Checkout Form", async () => {
        await checkoutPage.fillUpCheckOutForm(
            process.env.FIRSTNAME!,
            process.env.LASTNAME!,
            process.env.CITY!,
            process.env.POSTALCODE!,
            process.env.SHIPPINGADDRESS!
        ); 
        console.log("Checkout form is filled successfully");
    });

    // Click on the "Save and Continue" button on Checkout Page
    await test.step("Click Save and Continue Button", async () => {
        await checkoutPage.clickSaveAndContinueButton();
        await commonActions.waitForPageLoad(); //Added load wait to ensure the page is fully loaded
        console.log("Save and Continue button in CheckOut page is clicked successfully");
    });

    // Click on the "Save and Continue" button on Delivery Page
    await test.step("Click Save and Continue Button", async () => { 
        await checkoutPage.clickSaveandContinueDeliveryButton();
        await commonActions.waitForPageLoad()
        console.log("Save and Continue button in Delivery page is clicked successfully");
    });

    // Fill up the payment form with card details from .env file
    await test.step("Fill Payment Details", async () => {
        await expect(checkoutPage.billingAddressText).toHaveText('Billing Address'); 
        await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
        await checkoutPage.fillCardDetailsUsingiFrame(
            process.env.CARDNUMBER!, 
            process.env.CARDEXPIRY!, 
            process.env.CARDCVC!);
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
        await expect(checkoutPage.thankYouMessage).toHaveText('Thanks ' +process.env.FIRSTNAME+ ' for your order!');
        console.log("Thank You message is displayed successfully");
    });
});

//  Logout after the test
test.afterEach(async ({ page, homePage, signUpPage }) => {
  await page.goto('https://demo.spreecommerce.org/');
  await signUpPage.clickUserIconLink();
  await homePage.clickLogOutButton();
  console.log("User is logged out successfully");
});