import {test as homePageTest, expect as homePageExpect} from "@playwright/test";
import { HomePage } from "d:/AutomationGITConnection/pages/Homepage";

export const test = homePageTest.extend<{
    homePage : HomePage
}>({
    homePage: async({page}, use) => {
        await use(new HomePage(page))
    },
});

export const expect = homePageExpect;