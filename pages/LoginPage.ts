import { Page, Locator } from "@playwright/test";
import { CommonActions } from "../commonAction";

export class LoginPage extends CommonActions{
    
    readonly loginPageTitle: Locator
    readonly userNameField: Locator
    readonly passwordField: Locator
    readonly loginButton: Locator

    constructor(page: Page)
    {
        super(page)
        this.loginPageTitle = page.locator("//*[@id='login']/div/h2");
        this.userNameField = page.locator("//input[@id='user-name']")
        this.passwordField = page.locator("//input[@id='password']")
        this.loginButton = page.locator("//input[@id='login-button']")
    }

    /**
     * Logging in User
     * @param userNameValue 
     * @param passwordValue 
     */
    async loginToApplication (userNameValue: any, passwordValue: any) {
        await this.enterUsername(userNameValue)
        await this.enterPassword(passwordValue)
        await this.clickLoginButton()
    }

    /**
     * Enter Username
     * @param username 
     */
    async enterUsername (userNameValue: string) {
        await this.userNameField.fill(userNameValue);
    }

    /**
     * Enter Password
     * @param password 
     */
    async enterPassword (passwordValue:string) {
        await this.userNameField.fill(passwordValue);
    }
    
    /**
     * Click Login Button
     */
    async clickLoginButton () {
        await this.loginButton.click()
    }
}