import {test as signUpFixtureTest, expect as signUpFixtureExpect} from "@playwright/test";
import { SignUpPage } from "../../pages/SignupPage";

export const test = signUpFixtureTest.extend<{
    signUpPage: SignUpPage;
}>({
    signUpPage: async({page}, use) => {
        await use(new SignUpPage(page))
    },
});

export const expect = signUpFixtureExpect;