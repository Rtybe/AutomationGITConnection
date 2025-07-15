import {test as homePageFixtureTest, expect as homePageFixtureExpect} from "@playwright/test";
import { HomePage } from "../../pages/Homepage";

export const test = homePageFixtureTest.extend<{
    homePage: HomePage;
}>({
    homePage: async({page}, use) => {
        await use(new HomePage(page))
    },
});

export const expect = homePageFixtureExpect;