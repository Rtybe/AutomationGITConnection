import {test as productDetailFixtureTest, expect as productDetailFixtureExpect} from "@playwright/test";
import { ProductDetailPage } from "../../pages/ProductDetailPage";

export const test = productDetailFixtureTest.extend<{
    productDetailPage: ProductDetailPage;
}>({
    productDetailPage: async({page}, use) => {
        await use(new ProductDetailPage(page))
    },
});

export const expect = productDetailFixtureExpect;