import { Page } from "@playwright/test";
import { CommonActions } from "../commonAction";

export class SignUpPage extends CommonActions{
    
    readonly signUpPageTitle
    readonly userIconLink
    readonly signUpLink
    readonly emailField
    readonly passwordField 
    readonly confirmPasswordField
    readonly signUpButton
    readonly signUpSuccessMessage

    constructor(page: Page)
    {
        super(page)
        this.signUpPageTitle = page.locator("//*[@id='login']/div/h2");
        this.userIconLink = page.locator("(//*[@class='hidden lg:flex'])[3]")
        this.signUpLink = page.locator("//*[text()='Sign Up']")
        this.emailField = page.locator("//input[@id='user_email']");
        this.passwordField = page.locator("//input[@id='user_password']");
        this.confirmPasswordField = page.locator("//input[@id='user_password_confirmation']");
        this.signUpButton = page.locator("//*[@value='Sign Up']");
        this.signUpSuccessMessage = page.locator("//*[@id='flashes']");    
    }   

    /**
     * Click on the User Icon Link
     */
    async clickUserIconLink() {
        await this.userIconLink.click();    
    }

    /**
     * Click Sign Up Link
     */
    async clickSignUpLink() {
        await this.signUpLink.click();
    }

    /**
     * fill Sign Up Form
     * @param email 
     * @param password 
     * @param confirmPassword 
     */
    async fillSignUpForm(email: string, password: string, confirmPassword: string) {
        await this.emailField.fill(email);
        await this.passwordField.fill(password);
        await this.confirmPasswordField.fill(confirmPassword);
    }

    /**
     * Click Sign Up Button
     */
    async clickSignUpButton() {
        await this.signUpButton.click();
    }

    // Utility function to generate a random email address
    async createRandomEmail() {
        const timestamp = Date.now();
        return `user${timestamp}@example.com`;
    }
}