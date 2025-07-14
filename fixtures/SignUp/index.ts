import { mergeTests, mergeExpects } from "playwright/test";
import { test as signUpPageTest, expect as signUpPageExpect} from './SignUpPageFixture';

export const test = mergeTests(signUpPageTest);
export const expect = mergeExpects(signUpPageExpect)