import { mergeTests, mergeExpects } from "playwright/test";
import { test as checkoutFixtureTest, expect as checkoutFixtureExpect} from './checkOutPageFixture';

export const test = mergeTests(checkoutFixtureTest);
export const expect = mergeExpects(checkoutFixtureExpect)