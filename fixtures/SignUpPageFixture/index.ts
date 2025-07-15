import { mergeTests, mergeExpects } from "playwright/test";
// import { test as baseTest, expect as baseExpect} from '../BaseFixture';
import { test as signUpFixtureTest, expect as signUpFixtureExpect} from './signUpFixture';

export const test = mergeTests(signUpFixtureTest);
export const expect = mergeExpects(signUpFixtureExpect)