import {test as loginFixtureTest, expect as loginFixtureExpect} from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";

export const test = loginFixtureTest.extend<{
    loginPage: LoginPage;
}>({
    loginPage: async({page}, use) => {
        await use(new LoginPage(page))
    },
});

export const expect = loginFixtureExpect;