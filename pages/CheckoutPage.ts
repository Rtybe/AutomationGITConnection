import { Page, Locator } from "@playwright/test";
import { CommonActions } from "../commonAction";
import { time } from "console";

export class CheckoutPage extends CommonActions{
    
    readonly checkOutButton
    readonly firstNameField
    readonly lastNameField
    readonly cityField
    readonly postalCodeField
    readonly shippingAddressField
    readonly firstAddressSelection
    readonly saveAndContinueButton

    readonly SaveandContinueDeliveryButton

    readonly cardNumberField
    readonly cardExpiryField
    readonly cardCVCField
    readonly payNowButton
    readonly thankYouMessage
    //---- for Verification----
    readonly shippingAddressText
    readonly deliveryAddressText
    readonly billingAddressText
    
    constructor(page: Page)
    {
        super(page)
        this.checkOutButton = page.locator("//*[text()='Checkout']");
        this.firstNameField = page.locator("//*[@placeholder='First name']");
        this.lastNameField = page.locator("//*[@placeholder='Last name']");
        this.shippingAddressField = page.locator("(//*[@placeholder='Street and house number'])[1]");
        this.cityField = page.locator("//*[@placeholder='City']");
        this.postalCodeField = page.locator("//*[@placeholder='Postal Code']");
        this.firstAddressSelection = page.locator("//*[@data-address-autocomplete-target='suggestionsBoxList']/li[1]");
        this.saveAndContinueButton = page.locator("//button[text()='Save and Continue']");

        this.SaveandContinueDeliveryButton = page.locator("//*[@data-controller='checkout-delivery']/div[2]/div/button");

        this.cardNumberField = page.locator('#Field-numberInput');
        this.cardExpiryField = page.locator('#Field-expiryInput');
        this.cardCVCField = page.locator('#Field-cvcInput');
        this.payNowButton = page.locator("//*[@id='checkout-payment-submit']");
        this.thankYouMessage = page.locator("//*[@id='checkout']/div/h4");
        this.shippingAddressText = page.locator("//*[@data-controller='checkout-address-book']/div/h5");
        this.billingAddressText = page.locator("//*[@id='billing-address']/h5");
    }   

    /**
     * Click on the Check Out Button
     */
    async clickCheckOutButton() {
        await this.checkOutButton.click();
    }
    
    /**
     *  Fill up the checkout form
     * @param firstName 
     * @param lastName 
     * @param city 
     * @param postalCode 
     * @param shippingAddress 
     */
    async fillUpCheckOutForm(firstName: string, lastName: string, city: string, postalCode: string, shippingAddress: string) {
        await this.fillFirstNameField(firstName);
        await this.fillLastNameField(lastName);
        await this.fillCityField(city);
        await this.fillPostalCodeField(postalCode);
        await this.fillShippingAddressField(shippingAddress);
    }   

    /**
     * Fill First Name Field
     * @param firstName 
     */
    async fillFirstNameField(firstName: string) {
        await this.firstNameField.fill(firstName);
    }   

    /**
     * Fill Last Name Field
     * @param lastName 
     */
    async fillLastNameField(lastName: string) {
        await this.lastNameField.fill(lastName);
    }

    /**
     * Fill City Field
     * @param city 
     */
    async fillCityField(city: string) {
        await this.cityField.fill(city);     
    }   

    /**
     * Fill Postal Code Field
     * @param postalCode 
     */
    async fillPostalCodeField(postalCode: string) {
        await this.postalCodeField.fill(postalCode);
    }

    /**
     * Fill Shipping Address Field
     * @param address 
     */
    async fillShippingAddressField(address: string) {
        await this.shippingAddressField.fill(address);
    }

    /**
     * Click Save and Continue Button
     */
    async clickSaveAndContinueButton() {
        await this.saveAndContinueButton.click();
    }   
    //----------------------------------- End of Checkout Page  ----------------------------------
    // ---------------------------------- Delivery Page  ----------------------------------
    /**
     * Click Save and Continue Button on Delivery Page
     */
    async clickSaveandContinueDeliveryButton() {
        await this.SaveandContinueDeliveryButton.waitFor({ state: 'visible' });
        await this.SaveandContinueDeliveryButton.click({timeout: 9000});
    }

    //----------------------------------- End of Delivery Page  ----------------------------------
    /**
     * Click Pay Now Button
     */
    async clickPayNowButton() {
        await this.payNowButton.click();
    }

    /**
     * Implement filling card details using iFrame
     * This method assumes that the card details input fields are inside an iFrame.
     */
    async fillCardDetailsUsingiFrame(cardNumberValue: string, cardExpiryValue: string, cardCVCValue: string ) {
        const iframeLocator = this.page.frameLocator('div.__PrivateStripeElement iframe')
        const cardNumber = await iframeLocator.locator(this.cardNumberField)
        await cardNumber.click()
        await cardNumber.fill(cardNumberValue)
        const cardExpDate = await iframeLocator.locator(this.cardExpiryField)
        await cardExpDate.click()
        await cardExpDate.fill(cardExpiryValue)
        const cardCVC = await iframeLocator.locator(this.cardCVCField)
        await cardCVC.click()
        await cardCVC.fill(cardCVCValue)
    }
    //----------------------------------- End of Payment Page  ----------------------------------
}