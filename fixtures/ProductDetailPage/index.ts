import { mergeTests, mergeExpects } from "playwright/test";
import { test as productDetailPageTest, expect as productDetailPageExpect} from './ProductDetailPageFixture';

export const test = mergeTests(productDetailPageTest);
export const expect = mergeExpects(productDetailPageExpect)