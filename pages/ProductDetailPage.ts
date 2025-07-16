import { Locator, Page } from "@playwright/test";
import { CommonActions } from "../commonAction";

export class ProductDetailPage extends CommonActions{
    
    readonly firstProductLink: Locator
    readonly choseSizeDropdown: Locator
    readonly sizeSmallOption: Locator
    readonly sizeMediumOption: Locator
    readonly sizeLargeOption: Locator
    readonly addToCartButton: Locator
    readonly checkoutButton: Locator
    readonly sizeSelectedText: Locator
    
    constructor(page: Page)
    {
        super(page)
        this.firstProductLink = page.locator("(//*[@class='line-clamp-1 product-card-title'])[1]")
        this.choseSizeDropdown = page.locator("//*[@data-action='click->dropdown#toggle click@window->dropdown#hide']")
        this.sizeSmallOption = page.locator("(//*[@data-dropdown-target='menu']/div/label)[1]")
        this.sizeMediumOption = page.locator("(//*[@data-dropdown-target='menu']/div/label)[2]")
        this.sizeLargeOption = page.locator("(//*[@data-dropdown-target='menu']/div/label)[3]")  
        this.addToCartButton = page.locator("(//*[@class='btn-primary btn-icon w-full h-12 add-to-cart-button'])[1]")
        this.checkoutButton = page.locator("//*[@data-cart-target='checkoutButton']");     
    }   

    /**
     * Click on the first product link on the product detail page
     */
    async clickFirstProductLink()  {
        await this.firstProductLink.click();
    }

    /**
     *  Select size of the product
     * @param size 
     */
    async selectSizeOfProduct(size: "S" | "M" | "L") {
        await this.clickChoseSizeDropdown()
        await this.selectSizeOption(size);

    }
    /**
     * Click on the "Please choose Size" dropdown
     */
    async clickChoseSizeDropdown() {
        await this.choseSizeDropdown.click();
    }

    /**
     *  Select size option from the dropdown
     * @param size 
     */
    async selectSizeOption(size: "S" | "M" | "L") {
        let sizeText = "";
        if (size === "S") {
            sizeText = "Small";
            await this.sizeSmallOption.click();    
        } else if (size === "M") {
            sizeText = "Medium";
            await this.sizeMediumOption.click();
        } else if (size === "L") {
            sizeText = "Large";
            await this.sizeLargeOption.click();
        }
    }

    /**
     * Click on the "Add to Cart" button
     */
    async clickAddToCartButton() {
        await this.addToCartButton.click();
    }

    /**
     * Click on the "Checkout" button
     */
    async clickCheckoutButton() {
        // for any animations or transitions
        await this.checkoutButton.click({timeout: 9000});
    }
}