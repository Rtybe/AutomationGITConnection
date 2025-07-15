import { mergeTests, mergeExpects } from "playwright/test";
// import { test as baseTest, expect as baseExpect} from '../BaseFixture';
import { test as productDetailFixtureTest, expect as productDetailFixtureExpect} from './productDetailFixture';

export const test = mergeTests(productDetailFixtureTest);
export const expect = mergeExpects(productDetailFixtureExpect)