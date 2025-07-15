import {test as signUpFixtureTest, expect as signUpFixtureExpect} from "@playwright/test";
import { SignUpPage } from "../../pages/SignupPage";
import { ProductDetailPage } from "../../pages/ProductDetailPage";
import { CommonActions } from "../../commonAction";
import { CheckoutPage } from "../../pages/CheckoutPage";
import { LoginPage } from "../../pages/LoginPage";
import { HomePage } from "../../pages/Homepage";

export const test = signUpFixtureTest.extend<{
    signUpPage: SignUpPage;
    productDetailPage: ProductDetailPage;
    commonActions: CommonActions;
    checkoutPage: CheckoutPage;
    loginPage: LoginPage;
    homePage: HomePage;
}>({
    signUpPage: async({page}, use) => {
        await use(new SignUpPage(page))
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

export const expect = signUpFixtureExpect;