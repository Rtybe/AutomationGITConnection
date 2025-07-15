import { mergeTests, mergeExpects } from "playwright/test";
import { test as signUpFixtureTest, expect as signUpFixtureExpect} from './signUpFixture';

export const test = mergeTests(signUpFixtureTest);
export const expect = mergeExpects(signUpFixtureExpect)