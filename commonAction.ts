import { Page, expect } from "@playwright/test";
import { BasePage } from "./basePage";


export class CommonActions extends BasePage{    
    constructor(page: Page)
    {
        super(page)
    }

    /**
     * * Wait for the page to load completely
     */
    async waitForPageLoad() {
        await this.page.waitForLoadState("networkidle");
        await this.page.waitForTimeout(1000); // Additional wait to ensure all elements are loaded
    }
}