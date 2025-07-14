import {test as signUpPageTest, expect as signUpPageExpect} from "@playwright/test";
import { SignUpPage } from "../../pages/SignUpPage";

export const test = signUpPageTest.extend<{
    signUpPage : SignUpPage
}>({
    signUpPage: async({page}, use) => {
        await use(new SignUpPage(page))
    },
});

export const expect = signUpPageExpect;