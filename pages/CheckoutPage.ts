import { Page, Locator } from "@playwright/test";
import { CommonActions } from "../commonAction";

export class CheckoutPage extends CommonActions{
    
    readonly emailField
    readonly firstNameField
    readonly lastNameField
    readonly cityField
    readonly postalCodeField
    readonly shippingAddressField
    readonly saveAndContinueButton
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
        this.emailField = page.locator("//*[@id='order_ship_address_attributes_email']");
        this.firstNameField = page.locator("//*[@id='order_ship_address_attributes_first_name']");
        this.lastNameField = page.locator("//*[@id='order_ship_address_attributes_last_name']");
        this.cityField = page.locator("//*[@id='order_ship_address_attributes_city']");
        this.postalCodeField = page.locator("//*[@id='order_ship_address_attributes_zipcode']");
        this.shippingAddressField = page.locator("//*[@placeholder='Street and house number']");
        this.saveAndContinueButton = page.locator("//*[text()='Save and Continue']");
        this.cardNumberField = page.locator("//*[@id='Field-numberInput']");
        this.cardExpiryField = page.locator("//*[@id='Field-expiryInput']");
        this.cardCVCField = page.locator("//*[@id='Field-cvcInput']");
        this.payNowButton = page.locator("//*[@id='checkout-payment-submit']");
        this.thankYouMessage = page.locator("//*[@id='checkout']/div/h4");
        this.shippingAddressText = page.locator("//*[@data-controller='checkout-address-book']/div/h5");
        this.billingAddressText = page.locator("//*[@id='billing-address']/h5");
    }   

    /**
     *  Fill up the checkout form
     * @param email 
     * @param firstName 
     * @param lastName 
     * @param city 
     * @param postalCode 
     * @param shippingAddress 
     */
    async fillUpCheckOutForm(email: string, firstName: string, lastName: string, city: string, postalCode: string, shippingAddress: string) {
        await this.fillEmailField(email);
        await this.fillFirstNameField(firstName);
        await this.fillLastNameField(lastName);
        await this.fillCityField(city);
        await this.fillPostalCodeField(postalCode);
        await this.fillShippingAddressField(shippingAddress);
        await this.clickSaveAndContinueButton();
    }   

    /**
     *  Fill Email Field
     * @param email 
     */
    async fillEmailField(email: string) {   
        await this.emailField.fill(email);
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

    // ---------------------------------- Payment Page  ----------------------------------

    /**
     * Fill up the payment form
     * @param cardNumber 
     * @param cardExpiry 
     * @param cardCVC 
     */
    async fillUpPaymentForm(cardNumber: string, cardExpiry: string, cardCVC: string) {
        await this.fillCardNumberField(cardNumber); 
        await this.fillCardExpiryField(cardExpiry);
        await this.fillCardCVCField(cardCVC)  
    }
    /**
     *  Fill Card Number Field
     * @param cardNumber 
     */
    async fillCardNumberField(cardNumber: string) {
        await this.cardNumberField.fill(cardNumber);
    }

    /**
     * Fill Card Expiry Field
     * @param cardExpiry 
     */
    async fillCardExpiryField(cardExpiry: string) {
        await this.cardExpiryField.fill(cardExpiry);
    }

    /**
     * Fill Card CVC Field
     * @param cardCVC 
     */
    async fillCardCVCField(cardCVC: string) {
        await this.cardCVCField.fill(cardCVC);
    }

    /**
     * Click Pay Now Button
     */
    async clickPayNowButton() {
        await this.payNowButton.click();
    }

    //----------------------------------- End of Payment Page  ----------------------------------

    // ---------------------------------- Order Confirmation Page  ----------------------------------


}