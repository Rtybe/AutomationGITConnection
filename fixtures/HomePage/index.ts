import { mergeTests, mergeExpects } from "playwright/test";
import { test as homePageTest, expect as homePageExpect} from './HomePageFixture';

export const test = mergeTests(homePageTest);
export const expect = mergeExpects(homePageExpect)