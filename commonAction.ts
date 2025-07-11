import { Page, expect } from "@playwright/test";
import { BasePage } from "./basePage";


export class CommonActions extends BasePage{    
    constructor(page: Page)
    {
        super(page)
    }
}