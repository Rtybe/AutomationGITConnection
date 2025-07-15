import { Page, Locator } from "@playwright/test";
import { CommonActions } from "../commonAction";

export class HomePage extends CommonActions{
    
    readonly logOutButton
    readonly shopAllButton

    constructor(page: Page)
    {
        super(page)
        this.logOutButton = page.locator("//*[text()='Log out']");
        this.shopAllButton = page.locator("(//a[@data-title='shop all'])[1]");
    }
    /**
     * Click on the Log Out Button
     */ 
    async clickLogOutButton() {
        await this.logOutButton.click();
    }
    
    /**
     * Click on the Shop All Button
     */
    async clickOnShopAll() {
        await this.shopAllButton.click();
    }
}