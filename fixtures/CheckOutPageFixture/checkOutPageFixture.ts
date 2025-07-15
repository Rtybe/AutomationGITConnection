import {test as checkoutFixtureTest, expect as checkoutFixtureExpect} from "@playwright/test";
import { CheckoutPage } from "../../pages/CheckoutPage";

export const test = checkoutFixtureTest.extend<{
    checkoutPage: CheckoutPage
}>({
    checkoutPage: async({page}, use) => {
        await use(new CheckoutPage(page))
    },
});

export const expect = checkoutFixtureExpect;