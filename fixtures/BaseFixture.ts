import { test as baseTest } from "@playwright/test";
import { BasePage } from "../basePage";
import { CommonActions } from "../commonAction";
import { CheckoutPage } from "../pages/CheckoutPage";
import { LoginPage } from "../pages/LoginPage";
import { ProductDetailPage } from "../pages/ProductDetailPage";
import { HomePage } from "../pages/HomePage";
import { SignUpPageNow } from "../pages/SignUpPageNow";

export const test = baseTest.extend<{
  basePage: BasePage;
  checkoutPage: CheckoutPage;
  homePage: HomePage;
  loginPage: LoginPage;
  productDetailPage: ProductDetailPage;
  signUpPage: SignUpPageNow;
  commonActions: CommonActions;

}>({
  basePage: async ({ page }, use) => {
    await use(new BasePage(page));
  },
  signUpPage: async({page}, use) => {
      await use(new SignUpPageNow(page))
  },
  productDetailPage: async({page}, use) => {
      await use(new ProductDetailPage(page))
  },  
  commonActions: async({page}, use) => {
      await use(new CommonActions(page))
  },
  checkoutPage: async({page}, use) => {
      await use(new CheckoutPage(page))
  },
  loginPage: async({page}, use) => {
      await use(new LoginPage(page))
      },
  homePage: async({page}, use) => {
      await use(new HomePage(page))
  },
});

export default test;