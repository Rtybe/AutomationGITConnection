import { mergeTests, mergeExpects } from "playwright/test";
// import { test as baseTest, expect as baseExpect} from '../BaseFixture';
import { test as loginFixtureTest, expect as loginFixtureExpect} from './loginFixture';

export const test = mergeTests(loginFixtureTest);
export const expect = mergeExpects(loginFixtureExpect)