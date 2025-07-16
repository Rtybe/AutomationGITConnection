import { test as baseTest, expect as baseExpect } from "@playwright/test";
import { BasePage } from "../basePage";

export const test = baseTest.extend<{
  basePage: BasePage;

}>({
  basePage: async ({ page }, use
    
  ) => {
    await use(new BasePage(page));
  },
});

export const expect = baseExpect;