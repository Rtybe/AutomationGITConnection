import { Page, Locator } from "@playwright/test";
import { CommonActions } from "../commonAction";

export class LoginPage extends CommonActions{
    
    readonly userIcon
    readonly userNameField
    readonly passwordField
    readonly loginButton


    constructor(page: Page)
    {
        super(page)
        this.userIcon = page.locator('#')
        this.userNameField = page.locator("//input[@id='user-name']")
        this.passwordField = page.locator("//input[@id='password']")
        this.loginButton = page.locator("//input[@id='login-button']")
    }

   
    async loginUser (userNameValue: string, passwordValue: string)
    {
        await this.enterUsername(userNameValue)
        await this.enterPassword(passwordValue)
        await this.clickLoginButton()
    }

    /**
     * Enter Username
     * @param username 
     */
    async enterUsername (userNameValue: string)
    {
        await this.userNameField.fill(userNameValue);
    }

    /**
     * Enter Password
     * @param password 
     */
    async enterPassword (passwordValue:string)
    {
        await this.userNameField.fill(passwordValue);
    }
    
    /**
     * Click Login Button
     */
    async clickLoginButton ()
    {
        await this.loginButton.click()
    }
}