import { mergeTests, mergeExpects } from "playwright/test";
import { test as baseTest, expect as baseExpect } from '../BaseFixture';
import { test as homePageFixtureTest, expect as homePageFixtureExpect} from './homePageFixture';

export const test = mergeTests(baseTest, homePageFixtureTest);
export const expect = mergeExpects(baseExpect, homePageFixtureExpect)