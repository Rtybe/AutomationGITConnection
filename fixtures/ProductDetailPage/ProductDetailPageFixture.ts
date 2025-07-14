import {test as productDetailPageTest, expect as productDetailPageExpect} from "@playwright/test";
import { ProductDetailPage } from "../../pages/ProductDetailPage";

export const test = productDetailPageTest.extend<{
    productDetailPage : ProductDetailPage
}>({
    productDetailPage: async({page}, use) => {
        await use(new ProductDetailPage(page))
    },
});

export const expect = productDetailPageExpect;