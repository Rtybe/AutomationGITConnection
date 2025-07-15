import { mergeTests, mergeExpects } from "playwright/test";
import { test as baseTest, expect as baseExpect } from '../BaseFixture';
import { test as checkoutFixtureTest, expect as checkoutFixtureExpect} from './checkOutPageFixture';

export const test = mergeTests(baseTest, checkoutFixtureTest);
export const expect = mergeExpects(baseExpect, checkoutFixtureExpect)