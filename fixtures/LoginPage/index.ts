import { mergeTests, mergeExpects } from "playwright/test";
import { test as loginPageTest, expect as loginPageExpect} from './LoginPageFixture';

export const test = mergeTests(loginPageTest);
export const expect = mergeExpects(loginPageExpect)