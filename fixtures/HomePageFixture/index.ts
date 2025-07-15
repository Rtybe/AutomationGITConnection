import { mergeTests, mergeExpects } from "playwright/test";
import { test as homePageFixtureTest, expect as homePageFixtureExpect} from './homePageFixture';

export const test = mergeTests(homePageFixtureTest);
export const expect = mergeExpects(homePageFixtureExpect)