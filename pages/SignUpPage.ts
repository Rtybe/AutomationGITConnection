import { Page } from "@playwright/test";
import { CommonActions } from "../commonAction";

export class SignUpPage extends CommonActions{
    
    readonly signUpLink
    readonly emailField
    readonly passwordField 
    readonly confirmPasswordField
    readonly signUpButton

    constructor(page: Page)
    {
        super(page)
        this.signUpLink = page.locator("//a[text()='Sign Up']")
        this.emailField = page.locator("//input[@id='user_email']");
        this.passwordField = page.locator("//input[@id='user_password']");
        this.confirmPasswordField = page.locator("//input[@id='user_password_confirmation']");
        this.signUpButton = page.locator("//input[@type='submit']");
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

    async clickSignUpButton() {
        await this.signUpButton.click();
    }

}