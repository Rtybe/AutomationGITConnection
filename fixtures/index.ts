import { mergeTests, mergeExpects } from "playwright/test";
import { test as basetest, expect as baseExpect} from './BaseFixture';
import { test as loginFixtureTest, expect as loginFixtureExpect} from "../fixtures/LoginFixture/loginFixture";
import { test as checkoutFixtureTest, expect as checkoutFixtureExpect} from '../fixtures/CheckOutPageFixture/checkOutPageFixture';
import { test as homePageFixtureTest, expect as homePageFixtureExpect} from '../fixtures/HomePageFixture/homePageFixture';
import { test as productDetailFixtureTest, expect as productDetailFixtureExpect} from '../fixtures/ProductDetailPageFixture/productDetailFixture';
import { test as signUpFixtureTest, expect as signUpFixtureExpect} from '../fixtures/SignUpPageFixture/signUpFixture';

export const test = mergeTests(basetest, loginFixtureTest, checkoutFixtureTest, homePageFixtureTest, productDetailFixtureTest, signUpFixtureTest);
export const expect = mergeExpects(baseExpect, loginFixtureExpect, checkoutFixtureExpect, homePageFixtureExpect, productDetailFixtureExpect, signUpFixtureExpect)
