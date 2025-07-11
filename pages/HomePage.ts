import { Page, Locator } from "@playwright/test";
import { CommonActions } from "../commonAction";

export class HomePage extends CommonActions{
    readonly userIcon: Locator;
    readonly userNameField: Locator;
    readonly passwordField: Locator;


   

    constructor(page: Page)
    {
        super(page)
        this.userIcon = page.locator('#')
        this.userNameField = page.locator("")
        this.passwordField = page.locator("")
        
    }
    

}