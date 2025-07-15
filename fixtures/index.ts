import { mergeTests, mergeExpects } from "playwright/test";
import { test as basetest, expect as baseExpect} from './BaseFixture';

export const test = mergeTests(basetest);
export const expect = mergeExpects(baseExpect)