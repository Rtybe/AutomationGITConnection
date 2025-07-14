import {test as signUpPageTest, expect as signUpPageExpect} from "@playwright/test";
import { SignUpPage } from "../../pages/SignUpPage";
import { ProductDetailPage } from "../../pages/ProductDetailPage";
import { CommonActions } from "../../commonAction";
import { CheckoutPage } from "../../pages/CheckoutPage";
import { LoginPage } from "../../pages/LoginPage";  

export const test = signUpPageTest.extend<{
    signUpPage : SignUpPage
    productDetailPage : ProductDetailPage
    commonActions: CommonActions
    checkoutPage: CheckoutPage
    loginPage: LoginPage
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
});

export const expect = signUpPageExpect;