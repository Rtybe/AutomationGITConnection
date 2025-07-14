import { Page } from "@playwright/test";
import { CommonActions } from "../commonAction";

export class ProductDetailPage extends CommonActions{
    
    readonly signUpLink
    

    constructor(page: Page)
    {
        super(page)
        this.signUpLink = page.locator("//a[text()='Sign Up']")
        
    }   
}