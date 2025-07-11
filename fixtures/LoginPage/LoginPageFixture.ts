import {test as loginPageTest, expect as loginPageExpect} from "@playwright/test";
import { LoginPage } from "d:/AutomationGITConnection/pages/LoginPage";

export const test = loginPageTest.extend<{
    loginPage : LoginPage
}>({
    loginPage: async({page}, use) => {
        await use(new LoginPage(page))
    },
});

export const expect = loginPageExpect;